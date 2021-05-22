DROP DATABASE IF EXISTS EP_TrackerDB;
CREATE database EP_TrackerDB;

USE EP_TrackerDB;

CREATE TABLE departments (
    department_id INT AUTO_INCREMENT,
    Department VARCHAR(30) NULL,
    PRIMARY KEY (department_id)
);

CREATE TABLE ROLE (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NULL,
    SALARY DECIMAL(10,4) NULL,
    department_id INT
);

CREATE TABLE employee (
    emp_id INT AUTO_INCREMENT,
    last_name VARCHAR(30) NULL,
    first_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (emp_id)
);

INSERT INTO departments (department)
VALUES ("Sales");

INSERT INTO departments (department)
VALUES ("Engineering");

INSERT INTO departments (department)
VALUES ("Finance");

INSERT INTO departments (department)
VALUES ("Legal");


INSERT INTO ROLE (title, SALARY, department_id)
VALUES ("Sales Lead", 100000, 1231);
INSERT INTO ROLE (title, SALARY, department_id)
VALUES ("Salesperson", 80000, 1232);
INSERT INTO ROLE (title, SALARY, department_id)
VALUES ("Lead Engineer", 150000, 1233);
INSERT INTO ROLE (title, SALARY, department_id)
VALUES ("Software Engineer", 120000, 1234);
INSERT INTO ROLE (title, SALARY, department_id)
VALUES ("Accountant", 125000, 1235);
INSERT INTO ROLE (title, SALARY, department_id)
VALUES ("Legal Team Lead", 250000, 1236);
INSERT INTO ROLE (title, SALARY, department_id)
VALUES ("Lawyer", 190000, 1237);

INSERT INTO employee (last_name, first_name, role_id)
VALUES ("St. Michelle", "Chateau", 1231);
INSERT INTO employee (last_name, first_name, role_id)
VALUES ("Milagro", "Leyenda del", 1234);
INSERT INTO employee (last_name, first_name, role_id)
VALUES ("Cellars", "Josh", 1232);
INSERT INTO employee (last_name, first_name, role_id)
VALUES ("Mezcal", "Casamigos", 1233);
INSERT INTO employee (last_name, first_name, role_id)
VALUES ("Walker", "Johnie", 1235);
INSERT INTO employee (last_name, first_name, role_id)
VALUES ("Beam", "Jim", 1237);
INSERT INTO employee (last_name, first_name, role_id)
VALUES ("McDowells", "", 1236);

