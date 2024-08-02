// Generate a random race number between 0 and 999.
// Math.random() produces a random decimal between 0 (inclusive) and 1 (exclusive).
// Multiplying by 1000 scales this to a range between 0 and 999.999...,
// and Math.floor() rounds it down to the nearest integer, giving a number between 0 and 999.
let raceNumber = Math.floor(Math.random() * 1000);

// Boolean variable indicating if the runner is registered early.
// This is set to true for this example, meaning the runner is registered early.
let isRunnerRegisteredEarly = true;

// Variable representing the age of the runner.
// In this case, the runner is 19 years old.
let runnerAge = 19;

// Check if the runner is an adult (age > 18) and is registered early.
// If both conditions are true, add 1000 to the race number to differentiate early registrants.
if (runnerAge > 18 && isRunnerRegisteredEarly) {
  raceNumber += 1000;
}

// Check the runner's age and registration status to determine the race time.
// If the runner is an adult and registered early, they will race at 9:30 am.
// If the runner is an adult but not registered early, they will race at 11:00 am.
// If the runner is under 18 years old, they will race at 12:30 pm.
// If none of these conditions are met (which is unlikely with the given conditions), ask the runner to visit the registration desk.
if (runnerAge > 18 && isRunnerRegisteredEarly) {
  console.log(`Your race number is : ${raceNumber}. You will race at 9:30 am.`);
} else if (runnerAge > 18 && !isRunnerRegisteredEarly){
  console.log(`Your race number is : ${raceNumber}. You will race at 11:00 am.`);
} else if (runnerAge < 18){
  console.log(`Your race number is : ${raceNumber}. You will race at 12:30 pm.`);
} else {
  console.log('Please see the registration desk.');
}
