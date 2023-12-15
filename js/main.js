//&----------> array of quotes 

var quotes=["The fool doth think he is wise, but the wise man knows himself to be a fool.","If you tell the truth, you don't have to remember anything.","Good friends, good books, and a sleepy conscience: this is the ideal life.","Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","Be the change that you wish to see in the world","In three words I can sum up everything I've learned about life: it goes on","A friend is someone who knows all about you and still loves you","To avoid criticism, say nothing, do nothing, be nothing.","Spread love everywhere you go. Let no one ever come to you without leaving happier","Do one thing every day that scares you","Go confidently in the direction of your dreams! Live the life you've imagined","Many of life’s failures are people who did not realize how close they were to success when they gave up","Not how long, but how well you have lived is the main thing","Curiosity about life in all of its aspects, I think, is still the secret of great creative people","You know you're in love when you can't fall asleep because reality is finally better than your dreams."];
var saidBy=["William Shakespeare","Mark Twain","Mark Twain","Martin Luther King Jr","Mahatma Gandhi","Robert Frost","Elbert Hubbard","Elbert Hubbard","Mother Teresa","Eleanor Roosevelt","Henry David","Thomas A. Edison","Seneca"," Leo Burnett","Dr. Seuss"];


//!----------> to get a random quote
function getRandomNumber(){
    var i=Math.trunc(Math.random()*quotes.length);
    return i;
}


//^-----------> to prevent Duplicate quotes
var randomNumber;
var oldQuote;

function check(){
    if(randomNumber==oldQuote){

        if(randomNumber==quotes.length-1){
           randomNumber=randomNumber-1;
            return randomNumber; 
        }
        else{
           randomNumber=randomNumber+1;
           return randomNumber;
        }
       }
    return randomNumber;
}


//*------------> to generate qoute
function getQuote(){
    randomNumber =getRandomNumber();
    randomNumber= check();

    document.getElementById("quote").innerHTML="\" "+quotes[randomNumber]+"\"";
    document.getElementById("saidBy").innerHTML="- "+saidBy[randomNumber] + " -";  
    oldQuote=randomNumber;
}
   