create table intake(
id int auto_increment primary key,
intake_id varchar(30) not null unique,
intake_name varchar(30) not null,
start_date date,
end_date date,
active boolean not null
)