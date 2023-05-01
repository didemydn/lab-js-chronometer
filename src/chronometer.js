class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }
  
  start(printTimeCallback) {
      this.intervalId = setInterval(() => {
      this.currentTime +=1;   
      if(printTimeCallback){
        printTimeCallback()
      } 
    }, 1000);
  }

 getMinutes() {
  return Math.floor(this.currentTime/60);
}

  getSeconds() {
    return Math.floor(this.currentTime%60);
  }

  computeTwoDigitNumber(value) {
    value = ("0" + value).slice(-2);
    return value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime= 0;

  }

  split() {
    // ... your code goes here
  }
}
