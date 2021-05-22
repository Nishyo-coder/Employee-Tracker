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


// const employeeSearch = () => {
//   inquirer
//     .prompt({
//       name: 'employee',
//       type: 'input',
//       message: 'Which employee would you like to search for?',
//     })
//     .then((answer) => {
//       const query = 'SELECT last_name, first_name, emp_id, role_id FROM employee WHERE ?';
//       connection.query(query, { last_name: answer.last_name }, (err, res) => {
//         res.forEach(({ last_name, first_name}) => {
//           console.log(
//             `last_name: ${last_name} || first_name: ${first_name}`
//           );
//         });
//         runSearch();
//       });
//     });
// };

// const deptSearch = () => {
//   inquirer
//     .prompt({
//       name: 'department',
//       type: 'input',
//       message: 'What department would you like to search for?',
//     })
//     .then((answer) => {
//       const query = 'SELECT department_id, Department, FROM departments WHERE ?';
//       connection.query(query, { Department: answer.Department }, (err, res) => {
//         res.forEach(({ department_id, Department}) => {
//           console.log(
//             `department_id: ${department_id} || Department: ${Department}`
//           );
//         });
//         runSearch();
//       });
//     });
// };