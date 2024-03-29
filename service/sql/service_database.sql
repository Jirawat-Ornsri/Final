DROP DATABASE IF EXISTS group5_sec2;
CREATE DATABASE IF NOT EXISTS group5_sec2;
USE group5_sec2;

create table admin_info (
	A_ID int(8),
    A_title varchar(10),
	A_Firstname varchar(45),
    A_Lastname varchar(45),
    A_email varchar(100),
    A_pass varchar(50),
    A_pnum varchar(10),
    primary key(A_ID)
);

create table product (
	p_ID int(3),
    p_name varchar(999),
    p_price varchar(999),
    p_quantity varchar(999),
    p_cate varchar(999),
    p_shortDes varchar(999),
    p_longDes varchar(999),
    p_image varchar(999),
    primary key(p_ID)
);

create table login (
	u_email varchar(100),
    u_timeLogin datetime
);
INSERT INTO admin_info (A_ID, A_title, A_Firstname, A_Lastname, A_email, A_pass, A_pnum)
VALUES
    (1, 'Mr', 'John', 'Doe', 'john.doe@email.com', 'password123', '1234567890'),
    (2, 'Ms', 'Jane', 'Smith', 'jane.smith@email.com', 'securepass', '9876543210');

select * from admin_info;
select * from product;
select * from login;