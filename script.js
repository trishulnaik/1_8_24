function timer() {
    const targetDate = new Date('August 10, 2024 00:00:00'); // Replace with your target date
    const intervalId = setInterval(() => {
      const now = new Date();
      const differenceInMilliseconds = targetDate - now;
  
      if (differenceInMilliseconds <= 0) {
        clearInterval(intervalId);
        document.getElementById('safeTimerDisplay').innerHTML = 'Timer expired';
        return;
      }
  
      let seconds = Math.floor(differenceInMilliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
  
      const displaySeconds = seconds % 60;
      const displayMinutes = minutes % 60;
      const displayHours = hours % 24;
  
      const formattedTime = `${days}d ${displayHours}h ${displayMinutes}m ${displaySeconds}s`;
      document.getElementById('safeTimerDisplay').innerHTML = formattedTime;
    }, 1000);
  }
  
timer();