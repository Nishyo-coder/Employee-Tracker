DROP DATABASE IF EXISTS EP_TrackerDB;
CREATE database EP_TrackerDB;

USE EP_TrackerDB;

-- * **department**:

--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name
CREATE TABLE departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    Department VARCHAR(30) NULL,
);

-- * **role**:
--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary

CREATE TABLE ROLE (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NULL,
    SALARY DECIMAL(10,4) NULL,
    --   * **department_id** -  INT to hold reference to department role belongs to
);

-- * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

CREATE TABLE employee (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL,
);

-- SELECT * FROM top5000;
-- select * from top_albums;
