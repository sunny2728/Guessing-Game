const max = prompt("Enter the maximum Number");

const random = Math.floor(Math.random()*max)+1;

let guess= prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }

    if(guess==random){
        console.log("You are right congrats!");
        break;
    }
    else if (guess<random){
        guess = prompt("Hint: Your guess was too small");
    }
    else{
        guess=prompt("Hint: Your guess was too large");
    }
}