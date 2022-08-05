const game = {
    title: "Guess the Number!",
  
    biggestNum: null,
  
    smallestNum: null,
  
    secretNum: null,
  
    prevGuesses: [],
  // runs the game.
  // sets the range
  // calculates the random number
  // prompts the guess and renders the answer 
    play: function() {
      this.range();
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      this.getGuess();
    },
  // sets the min and max numbers
  range: function(){
      this.smallestNum = parseInt(prompt('Please enter a number: '));
      this.biggestNum = parseInt(prompt('Please enter a bigger number: '));
      return this.biggestNum;
      return this.smallestNum;
    },
  // calls the guess variable then 
  getGuess: function() {
      let guess = null;
      while (guess != this.secretNum) {
        guess = parseInt(prompt(`Enter a guess between ${[this.smallestNum]} and ${[this.biggestNum]}`))
        this.render(guess);
      } /*I cannot figure out why this does not properly run within the code*/if (guess > this.biggestNum || guess < this.smallestNum) {
            alert(`You guessed outside of scope. Please try again.`)}
    },
  // takes the this.getGuess function and lets the player know if they guessed correctly or not
render: function(guess) {
  this.prevGuesses.push(guess);
        if (guess == this.secretNum) {
            alert(`Congrats! You guessed ${this.secretNum} correctly in ${this.prevGuesses.length} guesses`);
        } else if (guess > this.secretNum) {
            alert(`You guessed too high. 
Previous guesses ${this.prevGuesses.join()}`);
        } else { 
            alert(`You guessed too low. 
Previous guesses ${this.prevGuesses.join()}`);
        }
      }
  };

game.play();