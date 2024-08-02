# Race Day Registration System

## Table of Contents
1. [Introduction](#introduction)
2. [Project Problem](#project-problem)
3. [Solution Overview](#solution-overview)
4. [Challenges Faced](#challenges-faced)
5. [Lessons Learned](#lessons-learned)
6. [Project Sources and Inspiration](#project-sources-and-inspiration)
7. [Technologies Used](#technologies-used)
8. [Installation and Usage](#installation-and-usage)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact Information](#contact-information)

## Introduction
This project is a JavaScript program designed to register runners for a race. It assigns a race number and determines the race time based on the runner's age and whether they registered early or late. This system helps streamline the race-day process and ensures runners are given appropriate race times.

## Project Problem
The challenge was to create a program that:
1. Assigns a race number based on registration time and age.
2. Determines the race time based on the runner's age and registration status.
3. Handles edge cases, such as runners who are exactly 18 years old.

## Solution Overview
The solution involves:
1. Generating a random race number.
2. Checking if the runner registered early.
3. Determining the runner’s age.
4. Assigning a race number and time based on registration and age.
5. Handling edge cases where the runner is exactly 18 years old.

### Code:
```javascript
// Generate a random race number between 0 and 999.
let raceNumber = Math.floor(Math.random() * 1000);

// Boolean variable indicating if the runner is registered early.
let isRunnerRegisteredEarly = true;

// Variable representing the age of the runner.
let runnerAge = 19;

// Check if the runner is an adult (age > 18) and is registered early.
// If both conditions are true, add 1000 to the race number to differentiate early registrants.
if (runnerAge > 18 && isRunnerRegisteredEarly) {
  raceNumber += 1000;
}

// Check the runner's age and registration status to determine the race time.
if (runnerAge > 18 && isRunnerRegisteredEarly) {
  console.log(`Your race number is : ${raceNumber}. You will race at 9:30 am.`);
} else if (runnerAge > 18 && !isRunnerRegisteredEarly) {
  console.log(`Your race number is : ${raceNumber}. You will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is : ${raceNumber}. You will race at 12:30 pm.`);
} else {
  console.log('Please see the registration desk.');
}
```

## Challenges Faced
1. **Handling Different Scenarios**: The main challenge was ensuring that the program correctly assigns race numbers and times based on multiple conditions (age and registration time).
2. **Edge Cases**: Properly handling the special case for runners who are exactly 18 years old required careful logic to ensure they are directed to the registration desk.

## Lessons Learned
- **Control Flow Statements**: Gained experience in using `if/else` statements to handle multiple conditions and scenarios.
- **Random Number Generation**: Learned how to use `Math.random()` and `Math.floor()` to generate a random race number.
- **String Interpolation**: Improved skills in using template literals for clean and readable output messages.
- **Edge Case Handling**: Understood the importance of handling edge cases and exceptions in programming logic.

## Project Sources and Inspiration
This project was developed as part of Codecademy's Learn JavaScript course, which provides practical exercises to apply and reinforce JavaScript fundamentals.

## Technologies Used
- **JavaScript**: The primary language used to implement the registration and race time logic.
- **Codecademy**: The learning platform where the project was developed and learned.

## Installation and Usage
To run this project:
1. Ensure you have a JavaScript runtime environment (like Node.js) or access to a web browser console.
2. Copy the provided JavaScript code into your environment or a `.js` file.
3. Execute the code to simulate race registration and timing.

Example with Node.js:
```bash
node raceDayRegistration.js
```

## Contributing
If you would like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Contributions are welcome!

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact Information
For any further queries or feedback, feel free to contact me:
- Email: pippaljob0@gmail.com
- LinkedIn: [oishik-biswas](https://www.linkedin.com/in/oishik-biswas/)
- GitHub: [pippal5536](https://github.com/pippal5536)
