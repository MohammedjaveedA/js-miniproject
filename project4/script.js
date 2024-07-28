let randomnum=parseInt(Math.random()*100 + 1)
const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const guessslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevguess=[]
let numguess=1
let playgame=true

if(playgame){
    submit.addEventListener('click',function(e){
       e.preventDefault()
       const guess=parseInt(userinput.value)
    //    console.log(guess)
       validateguess(guess)
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a number more than 1')
    }else if(guess>100){
        alert('please enter a number less than 100')
    }else{
        prevguess.push(guess)
        if(numguess === 11){
            displayguess(guess)
            displaymessage(`Game over.Random number was ${randomnum}`)
            endgame()
            
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }

}

function checkguess(guess){
    if(guess === randomnum){
        displaymessage(`you guessed it right`)
        endgame()

    }else if(guess<randomnum){
        displaymessage('number is too Low')
    }else if(guess>randomnum){
        displaymessage('number is too High')
    }

}
function displayguess(guess){ //cleanup function
     userinput.value=''
     guessslot.innerHTML += `${guess}  `
     numguess++
     remaining.innerHTML=`${11-numguess}`
}
function displaymessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}

function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p)
    playgame=false
    newgame();

}
function newgame(){
     const newgamebutton=document.querySelector('#newGame')
     newgamebutton.addEventListener('click',function(e){
        randomnum=parseInt(Math.random()*100 + 1)
        prevguess=[]
        numguess=1
        guessslot.innerHTML=''
        remaining.innerHTML=`${11-numguess}`
        userinput.removeAttribute('disabled')
        startOver.removeChild(p)
        playgame=true
    })
}
        
        
        
