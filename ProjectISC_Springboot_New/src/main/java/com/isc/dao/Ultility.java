package com.isc.dao;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Ultility {
	public static String getMD5(String data) {

		StringBuffer sb = new StringBuffer();
		try {
			MessageDigest messageDigest = MessageDigest.getInstance("MD5");
			messageDigest.update(data.getBytes());
			byte[] digest = messageDigest.digest();
			for (byte b : digest) {
				sb.append(Integer.toHexString((int) (b & 0xff)));
			}
		} catch (NoSuchAlgorithmException e) {
		}
		return sb.toString();
	}
}
