var readlineSync = require('readline-sync');
let score=0;

// Get user name
var userName = readlineSync.question("Hi There What's your name ? -> ");
console.log('--------------------------------------------------------');
// print the welocome msg with the layers name
console.log("Hello " + userName + "\nWelcome to the End-Game 'How well you know Sarthak Phatate'" );
console.log("--------------------------------------------------------");

// function to implement he game logic
function start_game(question, answer, n){
  var ans = readlineSync.question("Q"+ (n+1) + ". " + question + " -> ");

  if(ans.toLowerCase() === answer){
    console.log("nice!! that's correct");
    score+=1;
  }else{
    console.log("Ohh!! that's wrong");
  }

  console.log("your score : " + score);
  console.log("--------------------------------------------------------");
}

var topScorers = [{name: "Sarthak", score: 7},{name: "Rahul", score: 5}]

// array of questions to ask
var questions = [
  {
  question: "Which is my favourite movie?",
  answer: "dilwale"
},{
  question: "Who is my favorite superhero?",
  answer: "hritik roshan"
},{
  question: "What is my favorite food?",
  answer: "pani puri"
},{
  question: "Which is my favorite OTT series?",
  answer: "loki"
},{
  question: "Who is my best friend?",
  answer: "ram"
},{
  question: "What's my dream to be?",
  answer: "Engineer"
},{
  question: "What is my favourite colour?",
  answer: "blue"
},{
  question: "Which song I like the most?",
  answer: "raatan lambiyan"
}]

// loop over each question
for(var i=0; i<questions.length; i++){
  start_game(questions[i].question,questions[i].answer,i);
}

// print the final score
console.log("Yay!! You SCORED -> "+ score + "/" + questions.length);

//check for highest score
if(score > topScorers[0].score){
  console.log("CONGRATULATION!!!!!\n"+ userName + " you are the top scorer in game\nsend your score screen shot to update the record")
}else{
  console.log("Top Scorer of Game:")
  for(var i=0; i<topScorers.length; i++){
    console.log("name:" + topScorers[i].name + "  score:" + topScorers[i].score)
  }
}