'use strict';
/*
// dom manipulation
console.log(document.querySelector('.message').textContent);//element of classname message

document.querySelector(`.message`).textContent = `Correct`;

document.querySelector(`.number`).textContent = 12;



//to set value
document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

//handling click of button

let secretNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

//document.querySelector(`.number`).textContent = secretNum;


document.querySelector(`.again`).addEventListener(`click`, function () {

    //Again button
    /*
        let ag = (document.querySelector(`.again`).value)
    
        if (ag == true) {
    
    
            document.getElementsByClassName(`guess`).reset();
            document.getElementsByClassName(`message`).reset();
        }
    */
    score = 20;
    secretNum = Math.trunc(Math.random() * 20) + 1;  //reasign the value

    //resetting the values .
    document.querySelector(`.message`).textContent = `Start Guessing`;
    document.querySelector(`.score`).textContent = score;

    document.querySelector(`.guess`).value = ``;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).textContent = `?`;


    //to make 
    document.querySelector(`.check`).disabled = false;
    document.querySelector(`.guess`).disabled = false;


})

document.querySelector(`.check`).addEventListener(`click`, function () {

    /*let guess = console.log(document.querySelector(`.guess`).value);*/

    let myguess = Number(document.querySelector(`.guess`).value)

    console.log(typeof Number(myguess))

    if (!myguess) {
        document.querySelector(`.message`).textContent = `no number`;

    } else if (myguess > 20 || myguess < 1) {   // my edit
        document.querySelector(`.message`).textContent = `enter number between 1 to 20 only`

    } else if (myguess == secretNum) {

        document.querySelector(`.message`).textContent = `Correct Numebr`;
        document.querySelector(`.number`).textContent = secretNum;


        //  document.querySelector(`.highscore`).textContent = secretNum;

        //css for winner
        document.querySelector(`body`).style.backgroundColor = `green`;


        if (score > highscore) {
            highscore = score;
            document.querySelector(`.highscore`).textContent = highscore;
        }

        // to avoid user to continue play when the green screen is on after guessing correct num.
        document.querySelector(`.check`).disabled = true;
        document.querySelector(`.guess`).disabled = true;

        document.querySelector(`.number`).style.width = `30rem`


        //refactoring
    } else if (myguess !== secretNum) {

        if (score > 1) {

            //css for too high
            document.querySelector(`.message`).textContent = myguess > secretNum ? ` High!` : ` Low`;
            score--;

            document.querySelector(`.score`).textContent = score;
        } else {
            //css for lost
            document.querySelector(`.message`).textContent = `Lost`;
        }
    }
}





    /* else if (myguess > secretNum) {

        if (score > 1) {

            //css for too high
            document.querySelector(`.message`).textContent = ` High!`;
            score--;

            document.querySelector(`.score`).textContent = score;
        } else {
            //css for lost

            document.querySelector(`.message`).textContent = `Lost`
        }
    } else if (myguess < secretNum) {
        if (score > 0) {
            document.querySelector(`.message`).textContent = ` Low`;
            score--;
            document.querySelector(`.score`).textContent = score; //span class score
        } else {
            document.querySelector(`.message`).textContent = `Lost`;
        }

    }
} */
)



