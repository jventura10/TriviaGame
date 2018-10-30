$(document).ready(function(){
  //Global Variables
  var time=21;    //Time Allotted per Question
  var clock;      //Variable to Hold Set Interval
  var answers=[];   //Array to Hold Booleans of Answer Being Right or Wrong
  var numRight=0;

//First Button to Start Quiz, When Clicked it Will Begin With Question 1
  $("#startBtn").on("click",function(){
    questionOne();
  });

//Timer Function that Decrements Time and Outputs it,
  function timer(){
    time--;

    $("#timeSpace").text("Time Left: "+time+"s");

    //If Time Runs Out Push False for the Answer of That Question
    if(time<=0){
      answers.push(false);

      //Depending On What Question User Was On Then Output Answer for That Question
      switch(answers.length){
        case 1:{
          answerOne();
          break;
        }
        case 2:{
          answerTwo();
          break;
        }
        case 3:{
          answerThree();
          break;
        }
        case 4:{
          answerFour();
          break;
        }
        case 5:{
          answerFive();
          break;
        }
        case 6:{
          answerSix();
          break;
        }
        case 7:{
          answerSeven();
          break;
        }
        case 8:{
          answerEight();
          break;
        }
        case 9:{
          answerNine();
          break;
        }
        case 10:{
          answerTen();
          break;
        }

      }
    }
  }

  function transitionTimer(){
    time--;

    $("#timeSpace").text("Time Left: "+time+"s");

    //If Time Runs Out Go To Next Question
    if(time<=0){
      //Depending On What Question User Was On Then Output Answer for That Question
      switch(answers.length){
        case 1:{
          questionTwo();
          break;
        }
        case 2:{
          questionThree();
          break;
        }
        case 3:{
          questionFour();
          break;
        }
        case 4:{
          questionFive();
          break;
        }
        case 5:{
          questionSix();
          break;
        }
        case 6:{
          questionSeven();
          break;
        }
        case 7:{
          questionEight();
          break;
        }
        case 8:{
          questionNine();
          break;
        }
        case 9:{
          questionTen();
          break;
        }
        case 10:{
          calcResults();
          break;
        }

      }
    }
  }

//Clear Interval/Timer
  function stopTimer(){
    clearInterval(clock);
  }

//Question Number 1
  function questionOne(){
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();
    time=21;
    clock = setInterval(timer,1000);

    $("#questionArea").text("What team has the most Champions League titles?");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionOne'>FC Barcelona</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionTwo'>Real Madrid CF</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionThree'>FC Bayern Munich</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionFour'>AC Milan</button><br>");

    $("#optionOne, #optionThree, #optionFour").on("click",function(){
        answers.push(false);
        answerOne();
    });

    $("#optionTwo").on("click",function(){
      answers.push(true);
      answerOne();
    });

  }

  //Answer To Question Number 1
  function answerOne(){
    stopTimer();
    time=6;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();

    clock = setInterval(transitionTimer,1000);

    if(answers[0]===true){
      $("#questionArea").text("That is correct!");
      $("#optionsArea").append("<img src='assets/images/explosion.gif'><br>");
    }
    else{
      $("#questionArea").text("Sorry, the answer was: Real Madrid CF");
      $("#optionsArea").append("<img src='assets/images/faceHit.gif'><br>");
    }


  }

  //Question Number 2
  function questionTwo(){
    stopTimer();
    time=21;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();
    clock = setInterval(timer,1000);

    $("#questionArea").text("What player has won the most Champions League titles?");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionOne'>Cristiano Ronaldo</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionTwo'>Paolo Maldini</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionThree'>Francisco Gento</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionFour'>Lionel Messi</button><br>");

    $("#optionOne, #optionTwo, #optionFour").on("click",function(){
        answers.push(false);
        answerTwo();
    });

    $("#optionThree").on("click",function(){
      answers.push(true);
      answerTwo();
    });
  }

  function answerTwo(){
    stopTimer();
    time=6;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();

    clock = setInterval(transitionTimer,1000);

    if(answers[1]===true){
      $("#questionArea").text("That is correct!");
      $("#optionsArea").append("<img src='assets/images/colombiaDance.gif'><br>");
    }
    else{
      $("#questionArea").text("Sorry, the answer was: Francisco Gento");
      $("#optionsArea").append("<img src='assets/images/attackerSteal.gif'><br>");
    }


  }

  function questionThree(){
    stopTimer();
    time=21;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();
    clock = setInterval(timer,1000);

    $("#questionArea").text("What player is the all-time top scorer in Champions League history?");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionOne'>Lionel Messi</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionTwo'>Raul Gonzalez</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionThree'>Thierry Henry</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionFour'>Cristiano Ronaldo</button><br>");

    $("#optionOne, #optionTwo, #optionThree").on("click",function(){
        answers.push(false);
        answerThree();
    });

    $("#optionFour").on("click",function(){
      answers.push(true);
      answerThree();
    });
  }

  function answerThree(){
    stopTimer();
    time=6;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();

    clock = setInterval(transitionTimer,1000);

    if(answers[2]===true){
      $("#questionArea").text("That is correct!");
      $("#optionsArea").append("<img src='assets/images/ronaldoExplosion.gif'><br>");
    }
    else{
      $("#questionArea").text("Sorry, the answer was: Cristiano Ronaldo");
      $("#optionsArea").append("<img src='assets/images/ronaldoSlip.gif'><br>");
    }
  }

  function questionFour(){
    stopTimer();
    time=21;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();
    clock = setInterval(timer,1000);

    $("#questionArea").text("Which of these teams has not received a UEFA badge of honor?");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionOne'>Paris Saint-Germain</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionTwo'>Ajax</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionThree'>Bayern Munich</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionFour'>Liverpool</button><br>");

    $("#optionFour, #optionTwo, #optionThree").on("click",function(){
        answers.push(false);
        answerFour();
    });

    $("#optionOne").on("click",function(){
      answers.push(true);
      answerFour();
    });
  }

  function answerFour(){
    stopTimer();
    time=6;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();

    clock = setInterval(transitionTimer,1000);

    if(answers[3]===true){
      $("#questionArea").text("That is correct!");
      $("#optionsArea").append("<img src='assets/images/mexicoBicycle.gif'><br>");
    }
    else{
      $("#questionArea").text("Sorry, the answer was: Paris Saint-Germain");
      $("#optionsArea").append("<img src='assets/images/robotMiss.gif'><br>");
    }

  }

  function questionFive(){
    stopTimer();
    time=21;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();
    clock = setInterval(timer,1000);

    $("#questionArea").text("What team holds the record for most consecutive clean sheets?");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionOne'>Manchester City</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionTwo'>Monaco</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionThree'>Arsenal</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionFour'>Benfica</button><br>");

    $("#optionOne, #optionTwo, #optionFour").on("click",function(){
        answers.push(false);
        answerFive();
    });

    $("#optionThree").on("click",function(){
      answers.push(true);
      answerFive();
    });
  }

  function answerFive(){
    stopTimer();
    time=6;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();

    clock = setInterval(transitionTimer,1000);

    if(answers[4]===true){
      $("#questionArea").text("That is correct!");
      $("#optionsArea").append("<img src='assets/images/giroudSlide.gif'><br>");
    }
    else{
      $("#questionArea").text("Sorry, the answer was: Arsenal");
      $("#optionsArea").append("<img src='assets/images/vanPersieMiss.gif'><br>");
    }
  }

  function questionSix(){
    stopTimer();
    time=21;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();
    clock = setInterval(timer,1000);

    $("#questionArea").text("What player has the most Champions League Appearances?");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionOne'>Xavi Hernandez</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionTwo'>Iker Casillas</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionThree'>Paolo Maldini</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionFour'>Clarence Seedorf</button><br>");

    $("#optionOne, #optionFour, #optionThree").on("click",function(){
        answers.push(false);
        answerSix();
    });

    $("#optionTwo").on("click",function(){
      answers.push(true);
      answerSix();
    });
  }

  function answerSix(){
    stopTimer();
    time=6;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();

    clock = setInterval(transitionTimer,1000);

    if(answers[5]===true){
      $("#questionArea").text("That is correct!");
      $("#optionsArea").append("<img src='assets/images/falcao.gif'><br>");
    }
    else{
      $("#questionArea").text("Sorry, the answer was: Iker Casillas");
      $("#optionsArea").append("<img src='assets/images/goalieSlip.gif'><br>");
    }
  }

  function questionSeven(){
    stopTimer();
    time=21;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();
    clock = setInterval(timer,1000);

    $("#questionArea").text("Where will the 2019 Champions League final be held?");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionOne'>Madrid, Spain</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionTwo'>Milan, Italy</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionThree'>London, England</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionFour'>Moscow, Russia</button><br>");

    $("#optionTwo, #optionFour, #optionThree").on("click",function(){
        answers.push(false);
        answerSeven();
    });

    $("#optionOne").on("click",function(){
      answers.push(true);
      answerSeven();
    });
  }

  function answerSeven(){
    stopTimer();
    time=6;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();

    clock = setInterval(transitionTimer,1000);

    if(answers[6]===true){
      $("#questionArea").text("That is correct!");
      $("#optionsArea").append("<img src='assets/images/firmino.gif'><br>");
    }
    else{
      $("#questionArea").text("Sorry, the answer was: Madrid, Spain");
      $("#optionsArea").append("<img src='assets/images/backHeelHit.gif'><br>");
    }

  }

  function questionEight(){
    stopTimer();
    time=21;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();
    clock = setInterval(timer,1000);

    $("#questionArea").text("How many Champions League titles do Juventus have?");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionOne'>2</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionTwo'>1</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionThree'>0</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionFour'>3</button><br>");

    $("#optionTwo, #optionFour, #optionThree").on("click",function(){
        answers.push(false);
        answerEight();
    });

    $("#optionOne").on("click",function(){
      answers.push(true);
      answerEight();
    });
  }

  function answerEight(){
    stopTimer();
    time=6;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();

    clock = setInterval(transitionTimer,1000);

    if(answers[7]===true){
      $("#questionArea").text("That is correct!");
      $("#optionsArea").append("<img src='assets/images/dybala.gif'><br>");
    }
    else{
      $("#questionArea").text("Sorry, the answer was: 2");
      $("#optionsArea").append("<img src='assets/images/goalieSlipperyHands.gif'><br>");
    }

  }

  function questionNine(){
    stopTimer();
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();
    time=21;
    clock = setInterval(timer,1000);

    $("#questionArea").text("Who has not scored in 14 consecutive Champions League seasons?");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionOne'>Lionel Messi</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionTwo'>Raul Gonzalez</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionThree'>Karim Benzema</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionFour'>Ruud Van Nistelrooy</button><br>");

    $("#optionOne, #optionThree, #optionTwo").on("click",function(){
        answers.push(false);
        answerNine();
    });

    $("#optionFour").on("click",function(){
      answers.push(true);
      answerNine();
    });
  }

  function answerNine(){
    stopTimer();
    time=6;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();
    clock=setInterval(transitionTimer,1000);

    if(answers[8]===true){
      $("#questionArea").text("That is correct!");
      $("#optionsArea").append("<img src='assets/images/ronaldoCelebration.gif'><br>");
    }
    else{
      $("#questionArea").text("Sorry, the answer was: Ruud Van Nistelrooy");
      $("#optionsArea").append("<img src='assets/images/davidLuizLaugh.gif'><br>");
    }
  }

  function questionTen(){
    stopTimer();
    time=21;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();
    clock = setInterval(timer,1000);

    $("#questionArea").text("Who has not won the Champions League as a player and coach?");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionOne'>Zinedine Zidane</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionTwo'>Diego Simeone</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionThree'>Giovanni Trapattoni</button><br>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='optionFour'>Pep Guardiola</button><br>");

    $("#optionOne, #optionFour, #optionThree").on("click",function(){
        answers.push(false);
        answerTen();
    });

    $("#optionTwo").on("click",function(){
      answers.push(true);
      answerTen();
    });
  }

  function answerTen(){
    stopTimer();
    time=6;
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();

    clock = setInterval(transitionTimer,1000);

    if(answers[9]===true){
      $("#questionArea").text("That is correct!");
      $("#optionsArea").append("<img src='assets/images/kovacic.gif'><br>");
    }
    else{
      $("#questionArea").text("Sorry, the answer was: Diego Simeone");
      $("#optionsArea").append("<img src='assets/images/ramiresSlip.gif'><br>");
    }
  }

  function calcResults(){
    stopTimer();
    $("#timeSpace").text(" ");
    $("#optionsArea").empty();

    for(var i=0;i<answers.length;i++){
      if(answers[i]===true){
        numRight++;
      }
    }

    var percent=(numRight/10.0)*100.0;

    $("#questionArea").text("Your Score: "+percent+"%");
    $("#optionsArea").append("<br><img src='assets/images/champions.gif'><br><br>");
    $("#optionsArea").append("<h4>Thanks for playing</h4>");
    $("#optionsArea").append("<br><button type='button' class='btn btn-info btn-lg' id='restartBtn'>Restart Quiz</button><br>");

    $("#restartBtn").on("click",function(){
      numRight=0;
      answers=[];
      questionOne();
    });
  }

});
