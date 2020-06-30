const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
      rl.question('What\'s your favourite thing to eat for that meal? ', (answer4) => {
        rl.question('Which sport is your absolute favourite? ', (answer5) => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer6) => {
            console.log(`name: ${answer1}\nactivity: ${answer2}\nFavorite meal: ${answer3}\nFavorite thing to eat with the meal: ${answer4}\nFavorite sport: ${answer5}\nYour superpower: ${answer6}`);
            rl.close();
          });
        });
      });
    });
  });
});


