// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// Un alert espone 5 numeri casuali (univoci).
//5 numbers list to fill


// var cpuArray =arrayOfUniqueNumbers(cpuArray,5,1,100);
// alert(cpuArray);
// console.log("numeri lista",cpuArray);

// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.


// var stop = setTimeout(function(){
//   var userArray=[];
//     for (var i = 0; i < cpuArray.length; i++) {
//     var userNumbers= parseInt(prompt("Inserisci i numeri che hai visto:"));
//     console.log(userNumbers);
//     console.log(stop, "stop");
//     array.push(userNumbers);
//   } if (array == cpuArray ){
//     console.log("hai vinto");
//   } else{
//     console.log("Hai perso");
//   }
// }, 3000);
//
// console.log(myNumbers);

var num1 = [1,2,3,4];
console.log(num1);
var num2 = [4,5,6,1];
console.log(num2);
// var risultato = findArrayDifference(num1, num2);
// console.log(risultato);

var risultato = findArrayDifference(num1, num2);
console.log("numeri", risultato);


// ----------MY FUNCTION----------

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

function findArrayDifference(array1, array2){
  var risultato =[];
  var i =0;
  var lista=array1.concat(array2);
  console.log("lista", lista);
  var trovato = false;

  for (var i=0; i<array1.length; i++) {
  for (var j=i+1; j<array1.length; j++) {
  if(array1[i] == array2[j]) {
  alert("agli indici "+i+" e "+j+" ci sono valori uguali");
  }
  }
  }return risultato;
}



//   for (var i = 0; i < array1.length; i++) {
//     if(array1[i] == array2[i]){
//       risultato.push(array1[i]);
//
//     }
//   }
//
//  return risultato;
// }

//
// function isInArray (array, element){
//   var trovato = false;
//   var i =0;
//   while (i<array.length && trovato ==false){
//     if(array[i] ==  array[i]){
//       trovato = true;
//     }i++;
//   } return i;
// }
