const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});


questions = {
  q1: "What's your name? Nicknames are also acceptable :)",
  q2: "What's an activity you like doing?",
  q3: "What do you listen to while doing that?",
  q4: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  q5: "What's your favourite thing to eat for that meal?",
  q6: "Which sport is your absolute favourite?",
  q7: "What is your superpower? In a few words, tell us what you are amazing at!"
  }


rl.question(questions.q1, (answer1) => {
  rl.question(questions.q2, (answer2) => {
    rl.question(questions.q3, (answer3) => {
      rl.question(questions.q4, (answer4) => {
        rl.question(questions.q5, (answer5) => {
          rl.question(questions.q6, (answer6) => {
            rl.question(questions.q7, (answer7) => {
              rl.close();
            });
          });
        });
      });
    });
  });
});
