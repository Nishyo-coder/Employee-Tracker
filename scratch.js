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
  runSearch();
});

// Build a command-line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles


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


// // function to handle adding new department 
// const addDept = () => {
//   inquirer
//     .prompt([
//       {
//         name: 'department',
//         type: 'input',
//         message: 'Enter the name of the department you would like to add.'
//       },
//     ])

//     .then((answer) => {
//       // when finished prompting, insert a new item into the db with that info
//       connection.query(
//         'INSERT INTO department SET ?',
//         // QUESTION: What does the || 0 do?
//         {
//           dept_name: answer.name,
//         },
//         (err) => {
//           if (err) throw err;
//           console.log('Your auction was created successfully!');
//           // re-prompt the user for if they want to bid or post
//           start();
//         }
//       );
//     });


// const artistSearch = () => {
//   inquirer
//     .prompt({
//       name: 'artist',
//       type: 'input',
//       message: 'What artist would you like to search for?',
//     })
//     .then((answer) => {
//       const query = 'SELECT position, song, year FROM top5000 WHERE ?';
//       connection.query(query, { artist: answer.artist }, (err, res) => {
//         res.forEach(({ position, song, year }) => {
//           console.log(
//             `Position: ${position} || Song: ${song} || Year: ${year}`
//           );
//         });
//         runSearch();
//       });
//     });
// };

// const multiSearch = () => {
//   const query =
//     'SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1';
//   connection.query(query, (err, res) => {
//     res.forEach(({ artist }) => console.log(artist));
//     runSearch();
//   });
// };

// const rangeSearch = () => {
//   inquirer
//     .prompt([
//       {
//         name: 'start',
//         type: 'input',
//         message: 'Enter starting position: ',
//         validate(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         },
//       },
//       {
//         name: 'end',
//         type: 'input',
//         message: 'Enter ending position: ',
//         validate(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         },
//       },
//     ])
//     .then((answer) => {
//       const query =
//         'SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?';
//       connection.query(query, [answer.start, answer.end], (err, res) => {
//         res.forEach(({ position, song, artist, year }) => {
//           console.log(
//             `Position: ${position} || Song: ${song} || Artist: ${artist} || Year: ${year}`
//           );
//         });
//         runSearch();
//       });
//     });
// };

// const songSearch = () => {
//   inquirer
//     .prompt({
//       name: 'song',
//       type: 'input',
//       message: 'What song would you like to look for?',
//     })
//     .then((answer) => {
//       console.log(answer.song);
//       connection.query(
//         'SELECT * FROM top5000 WHERE ?',
//         { song: answer.song },
//         (err, res) => {
//           if (res[0]) {
//             console.log(
//               `Position: ${res[0].position} || Song: ${res[0].song} || Artist: ${res[0].artist} || Year: ${res[0].year}`
//             );
//           } else {
//             console.error(`No results for ${answer.song}`);
//           }
//           runSearch();
//         }
//       );
//     });
// };

// const songAndAlbumSearch = () => {
//   inquirer
//     .prompt({
//       name: 'artist',
//       type: 'input',
//       message: 'What artist would you like to search for?',
//     })
//     .then((answer) => {
//       let query =
//         'SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ';
//       query +=
//         'FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ';
//       query +=
//         '= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year, top_albums.position';

//       connection.query(query, [answer.artist, answer.artist], (err, res) => {
//         console.log(`${res.length} matches found!`);
//         res.forEach(({ year, position, artist, song, album }, i) => {
//           const num = i + 1;
//           console.log(
//             `${num} Year: ${year} Position: ${position} || Artist: ${artist} || Song: ${song} || Album: ${album}`
//           );
//         });

      //   runSearch();
      
