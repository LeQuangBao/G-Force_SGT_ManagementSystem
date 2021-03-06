package com.isc.dao;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.isc.model.Registrar;

@Service("userDetailsService")
public class MyUserDetailsService implements UserDetailsService {
	@Autowired
	private RegistrarDao registrarDao;

	@Transactional
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Registrar registrar = registrarDao.findByUsername(username);

		List<GrantedAuthority> authorities = buildUserAuthority();

		return (UserDetails) buildUserForAuthentication(registrar, authorities);
	}

	private List<GrantedAuthority> buildUserAuthority() {

		Set<GrantedAuthority> setAuths = new HashSet<GrantedAuthority>();

		// Build user's authorities

		setAuths.add(new SimpleGrantedAuthority("ROLE_ADMIN"));

		List<GrantedAuthority> Result = new ArrayList<GrantedAuthority>(setAuths);

		return Result;
	}

	private User buildUserForAuthentication(Registrar registrar, List<GrantedAuthority> authorities) {
		return new User(registrar.getUsername(), registrar.getPassword(), registrar.isStatus(), true, true, true,
				authorities);
	}
}
