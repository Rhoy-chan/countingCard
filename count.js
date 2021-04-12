
  function result(){
    var count= 0;
    var msg = '';
   
    function cc(card) {
    
      switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          count++;
          break;
        case 7:
        case 8:
        case 9:
          count = count;
          break;
        case 10:
        case 1:
        case 11:
        case 12:
        case 13:
          count--;
          break;
      }
    
      if (count === 5) msg = "5 Bet";
      else if (count === 0) msg = "0 Hold";
      else if (count === -5) msg = "-5 Hold";
      else if (count === -1) msg = "-1 Hold";
      else if (count === 1) msg = "1 Bet";
    
    
      return msg;

    }
    var card1 = parseInt(document.getElementById("card1").value);
    var card2 = parseInt(document.getElementById("card2").value);
    var card3 = parseInt(document.getElementById("card3").value);
    var card4 = parseInt(document.getElementById("card4").value);
    var card5 = parseInt(document.getElementById("card5").value);
    cc(card1); cc(card2); cc(card3); cc(card4); cc(card5);
    document.getElementById("result").innerHTML= msg;
    }
  