const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Chief12!',
  database: 'EP_TrackerDB',
});


connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Employees',
        'View All Roles',
        'Add Department',
        'Add Employee',
        'Add Role', 
      ],
    })
    .then((answer) => {
      switch (answer.action) {

        case 'View All Departments':
          deptSearch();
          break;

        case 'View All Employees':
          employeeSearch();
          break;

          case 'View All Roles':
          roleSearch();
          break;

        case 'Add Department':
          addDept();
          break;

          case 'Add Employee':
            addEmployee();
            break;

            case 'Add Role':
              addRole();
              break;
        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

// * View departments, roles, employees

//use the Read function to view all employees
const employeeSearch = () => {
  console.log('Selecting all employees...\n');
  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

//use the Read function to view all departments
const deptSearch = () => {
  console.log('Selecting all departments...\n');
  connection.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

//use the Read function to view all roles
const roleSearch = () => {
  console.log('Selecting all ROLES...\n');
  connection.query('SELECT * FROM ROLE', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

const addEmployee = () => {
  inquirer
    .prompt({
      name: 'Add Employee?',
      type: 'list',
      message: 'Would you like to add a new employee?',
      choices: ['YES', 'NO', 'EXIT'],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'YES':
          addnewEmployee();
          break;

          case 'NO':
            addEmployee();
            break;

            case 'EXIT':
        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

// function to handle posting new items up for auction
const addnewEmployee = () => {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: 'employee',
        type: 'input',
        message: 'What is the item you would like to submit?',
      },
      {
        name: 'category',
        type: 'input',
        message: 'What category would you like to place your auction in?',
      },
      {
        name: 'startingBid',
        type: 'input',
        message: 'What would you like your starting bid to be?',
        // validate(value) {
        //   if (isNaN(value) === false) {
        //     return true;
        //   }
        //   return false;
        },
      
    ])
  };
