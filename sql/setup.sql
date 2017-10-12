create database geektesting;
use geektesting;
CREATE TABLE userInfo(
    id int not null primary key auto_increment,
    username varchar(30),
    qq varchar(20),
    phone varchar(15),
    my_time timestamp default current_timestamp
);
create user 'guestinfo'@'localhost' identified by 'Best0728';
grant select , insert on geektesting.userInfo to 'guestinfo'@'localhost';