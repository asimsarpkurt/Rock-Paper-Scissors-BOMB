const getUserChoice = function(userinput) {
    userinput = userinput.toLowerCase();
    if (userinput === 'rock' || userinput === 'paper' || userinput === 'scissors' || userinput === 'bomb') {
        return userinput;
    } else {
        console.log('Wrong input has written.')
    }
}

function getComputerChoice() {
    randomnumber = Math.floor(Math.random() * 3);
    switch (randomnumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function determineWinner(userchoice, computerchoice) {
    if (userchoice === computerchoice) {
        return 'The game is a tie!';
    }
    if (userchoice === 'rock') {
        if (computerchoice === 'paper') {
            return 'Computer won!';
        } else {
            return 'User won!';
        }
    }
    if (userchoice === 'paper') {
        if (computerchoice === 'rock') {
            return 'User won!';
        } else {
            return 'Computer won!';
        }
    }
    if (userchoice === 'scissors') {
        if (computerchoice === 'paper') {
            return 'User won!';
        } else {
            return 'Computer won!';
        }
    }
    if (userchoice === 'bomb') {
        return 'User won!'
    }
}

function playGame() {
    const userchoice = getUserChoice('rock');
    const computerchoice = getComputerChoice();
    console.log('User threw ' + userchoice + '!')
    console.log('Computer threw ' + computerchoice + '!')
    console.log(determineWinner(userchoice, computerchoice));
}
playGame();