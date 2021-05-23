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
    // / re-prompt the user to continue to choose from main menu
    runSearch();
  });
};

//use the Read function to view all departments
const deptSearch = () => {
  console.log('Selecting all departments...\n');
  connection.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    runSearch();
  });
};

//use the Read function to view all roles
const roleSearch = () => {
  console.log('Selecting all ROLES...\n');
  connection.query('SELECT * FROM ROLE', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    runSearch();
  });
};

// function which prompts the user for what action they should take
const addEmployee = () => {
  inquirer
    .prompt({
      name: 'yesOrNo',
      type: 'list',
      message: 'Would you like to add a new employee [YES] or [NO]?',
      choices: ['YES', 'NO', 'EXIT'],
    })
    .then((answer) => {
      // based on their answer, either call the yes or no functions
      if (answer.yesOrNo === 'YES') {
        addnewEmployee();
      } else if (answer.yesOrNo === 'NO') {
        //returns user back to the main
        runSearch();
      } else {
        connection.end();
      }
    });
};
// function to add new employee 
const addnewEmployee = () => {
  // prompt
  inquirer
    .prompt([
      {
        name: 'last_name',
        type: 'input',
        message: 'What is the employees last name?',
      },
      {
        name: 'first_name',
        type: 'input',
        message: 'What is the employees first name?',
      },
      {
        name: 'role_id',
        type: 'input',
        message: 'Enter the employee id.',
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new employee into the db with that info
      connection.query(
        'INSERT INTO employee SET ?',
        {
          last_name: answer.last_name,
          first_name: answer.first_name,
          role_id: answer.role_id,
        },
        (err) => {
          if (err) throw err;
          console.log('The employee was added successfully!');
          // re-prompt the user for if they want to add another employee
          addEmployee();
        }
      );
    });
};

//function which prompts the user for what action they should take
const addDept = () => {
  inquirer
    .prompt({
      name: 'yesOrNo',
      type: 'list',
      message: 'Would you like to add a new department [YES] or [NO]?',
      choices: ['YES', 'NO', 'EXIT'],
    })
    .then((answer) => {
      // based on their answer, either call the yes or no functions
      if (answer.yesOrNo === 'YES') {
        addnewDept();
      } else if (answer.yesOrNo === 'NO') {
        //returns user back to the main
        runSearch();
      } else {
        connection.end();
      }
    });
};

// function to add new department 
const addnewDept = () => {
  // prompt
  inquirer
    .prompt([
      {
        name: 'Department',
        type: 'input',
        message: 'What department would you like to add?',
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new department into the db with that info
      connection.query(
        'INSERT INTO departments SET ?',
        {
          Department: answer.Department,
        },
        (err) => {
          if (err) throw err;
          console.log('The department was added successfully!');
          // re-prompt the user for if they want to add another employee
          addDept();
        }
      );
    });
};

//function which prompts the user for what action they should take
const addRole = () => {
  inquirer
    .prompt({
      name: 'yesOrNo',
      type: 'list',
      message: 'Would you like to add a new role [YES] or [NO]?',
      choices: ['YES', 'NO', 'EXIT'],
    })
    .then((answer) => {
      // based on their answer, either call the yes or no functions
      if (answer.yesOrNo === 'YES') {
        addnewRole();
      } else if (answer.yesOrNo === 'NO') {
        //returns user back to the main
        runSearch();
      } else {
        connection.end();
      }
    });
};

// function to add new role 
const addnewRole = () => {
  // prompt
  inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'What is the position title?',
      },
      {
        name: 'SALARY',
        type: 'input',
        message: 'What is the position salary?',
      },
      {
        name: 'department_id',
        type: 'input',
        message: 'Enter a department id.',
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new position into the db with that info
      connection.query(
        'INSERT INTO ROLE SET ?',
        {
          title: answer.title,
          SALARY: answer.SALARY,
          department_id: answer.department_id,
        },
        (err) => {
          if (err) throw err;
          console.log('The position was added successfully!');
          // re-prompt the user for if they want to add another position
          addRole();
        }
      );
    });
};

















// const updateRole = () => {
//   console.log('Updating all Rocky Road quantities...\n');
//   const query = connection.query(
//     'UPDATE products SET ? WHERE ?',
//     [
//       {
//         quantity: 100,
//       },
//       {
//         flavor: 'Rocky Road',
//       },
//     ],
//     (err, res) => {
//       if (err) throw err;
//       console.log(`${res.affectedRows} products updated!\n`);
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  runSearch();
});