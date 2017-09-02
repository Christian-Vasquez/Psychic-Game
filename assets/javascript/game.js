      var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
          complett = Math.floor(Math.random() * letters.length),
          wins = 0,
          losses = 0,
          gcurrs = [],
          glefts = 3;

      function reset(){
          complett = Math.floor(Math.random() * letters.length);
          wins = 0;
          losses = 0;
          gcurrs = [];
          glefts = 3;
      }

      document.onkeyup = function(event) {

      glefts--;

      var letgss = String.fromCharCode(event.keyCode).toLowerCase();
      

      gcurrs.push(letgss);
      console.log(gcurrs);

      if (letgss === letters[complett]){
        wins++;
        document.getElementById("win").innerHTML = "Wins: " + wins;
      }
      else{
        losses++
        document.getElementById("lose").innerHTML = "Losses: " + losses;
      }

      if(glefts >= 0){
      document.getElementById("gleft").innerHTML = "Guesses Left:" + glefts;
      }
      else{
        reset();
      }

        document.getElementById("gcur").innerHTML = "Your Guesses So Far:" + gcurrs;
   };


