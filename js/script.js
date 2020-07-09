// SIMON SAYS
// Un alert espone 5 numeri casuali (univoci).
//5 numbers list to fill

var i = 0; //counter for cycle
var finded = false; // support variable to enter or exit e cycle

var cpuArray =arrayOfUniqueNumbers(cpuArray,5,1,100);
alert(cpuArray + " " + " Memorizza questi numeri ");
console.log("numeri lista",cpuArray);

// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

var games = setTimeout(function(){
  simonSais();
},30000);


// ----------MY FUNCTION----------------------------------------------

  function simonSais(){
    var userArray=[];  //list to grow with userNumbers via prompt
      while(i < cpuArray.length && finded == false)  {
      var userNumbers= parseInt(prompt("Inserisci i numeri che hai visto:"));  // (1) type a number!
        if((isNaN(userNumbers) == true) || (isInArray(userArray,userNumbers) == true)  ) { // (2) if User types a number that's already inside userList
          i--;                                                                            // leave the counter at the same time!
          alert("You have typed the same number! Please, Try an other one:");             // alert the user
        } else if (cpuArray.length == userArray.length){        //  (4) Once user have typed all the numbers
          trovato = true;                                       // EXIT WHILE CYCLE
        } else{                                                 // (3) If the number is correct and has passed previous rules
            userArray.push(userNumbers);                        // . add numbers to the list
            console.log("userList: ", userNumbers);
        }i++;
    }                                                           // EXIT WHILE CYCLE
        console.log("userArray ", userArray);
        var result= getDuplicateArrayElements(userArray, cpuArray); //search same items in two different arrays
        console.log("Numeri dell'utente", userArray);
        console.log("numeri che corrispondono",result);
          if (result.length == cpuArray.length){
            console.log("Bravissimo hai indovinato tutti e 5 i numeri: ", result);

            document.getElementById("result").innerHTML = "BRAVISSIMO! hai indovinato tutti e 5 i numeri!";
            document.getElementById("resultNum").innerHTML = "Ecco la sequenza di numeri indovinati: " + "(" + result.slice() + ")";
            document.getElementById("cpuNum").innerHTML = "Ti mostro la lista di partenza: " + "(" + cpuArray.slice() + ")";
          } else{
            console.log("hai indovinato ", result.length , " numeri! I numeri indovinati sono ", result);

            document.getElementById("result").innerHTML = "CI HAI PROVATO! hai indovinato " + result.length + " numeri!";
            document.getElementById("resultNum").innerHTML = "Ecco la sequenza di numeri indovinati: " + "(" + result.slice() + ")";
            document.getElementById("cpuNum").innerHTML = "Ti mostro la lista di partenza: " + "(" + cpuArray.slice() + ")";

      }clearTimeout(games);
    }

// My functions SECTION-----------------------------------------------------------------

// function used to return a list with unique elements; need to pass the array, its length, min and max value included
function arrayOfUniqueNumbers(array,length,min,max){
  var array =[];
  var i =0;
  while(i < length){
    var num = Math.floor(Math.random()* (max - min + 1)+min);
    if(array.indexOf(num) === -1){
      array.push(num);
    }
    i++;
  }
    return array;
}

// end of this function---------------------


// function to return the matched elements of two arrays; need to pass two arrays
function getDuplicateArrayElements(array1,array2){
    var arr = array1.concat(array2);      // combine two arrays in one
    var sorted_arr = arr.slice().sort(); //slice all array elements and sort them
    var result = [];
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] === sorted_arr[i]) {
            result.push(sorted_arr[i]);
        }
    }
    return result;
}

// end of this function---------------------


function isInArray(array,item){ //verify is the item is inside an array.
  var i = 0;
  var finded = false;
  while (i< array.length && finded ==false){
    if (array[i] == item){
      finded = true;
    }
    i++;
  }
  return finded;
}

// end of this function---------------------
