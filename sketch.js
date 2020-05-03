
var canvas;
var score;
var initialInput;
var submitButton;
var database;
var checked = 0;
var numberOfLosers;


function setup() {
  canvas = createCanvas(1, 1);

  var config = {
    apiKey: "AIzaSyCE_8CVn1Zio1f-EXpEgZtp-8aoyxpteVk",
    authDomain: "bestcamera-7e901.firebaseapp.com",
    databaseURL: "https://bestcamera-7e901.firebaseio.com",
    projectId: "bestcamera-7e901",
    storageBucket: "bestcamera-7e901.appspot.com",
    messagingSenderId: "1087271452402",
    appId: "1:1087271452402:web:9c34a3417a21237ebe5a6b",
    measurementId: "G-3J20J96NZX"

  };
  firebase.initializeApp(config);
  database = firebase.database();

  var ref = database.ref('jale');
  ref.on('value',gotData,errData);

} 

function gotData(data){
  console.log("Meh");
  console.log(data.val());

  var keys = Object.keys(data.val());
  var scores = data.val();
  var k = keys[0];     // == losers
  numberOfLosers = scores[k]+1;
  document.getElementById("people_counter").innerHTML = numberOfLosers;
  if(checked == 0 ){
    checked = 1;
    updateLosers(numberOfLosers);
  }
}

function errData(err){
  console.log('Jale..');
  console.log(err);
}


function  updateLosers(newNumOfUsers) {
  var ref = database.ref('jale');
  ref.update({'losers':newNumOfUsers});

}





