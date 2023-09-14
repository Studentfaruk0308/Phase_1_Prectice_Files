
function runFiveMiles() {
    console.log('Go for a five-mile run');
  }

  function liftWeights() {
    console.log('Pump iron');
  }
  
  function swimFortyLaps() {
    console.log('Swim 40 laps');
  }

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  function Monday() {
    exerciseRoutine(liftWeights);
  }

  Monday();

  exerciseRoutine(function() {
    console.log('Stretch! Work that core!');
  });

 console.log(exerciseRoutine());

 








  

