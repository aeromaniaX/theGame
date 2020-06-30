// JavaScript Document

 var firebaseConfig = {
    apiKey: "AIzaSyDIonfhH7h4wJzHWCS5Q2QZNkduFHSC7D0",
    authDomain: "thegame-firestore.firebaseapp.com",
    databaseURL: "https://thegame-firestore.firebaseio.com",
    projectId: "thegame-firestore",
    storageBucket: "thegame-firestore.appspot.com",
    messagingSenderId: "1092628210694",
    appId: "1:1092628210694:web:5b1b6385171b3598e2cf87",
    measurementId: "G-63H85D92BT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

window.onload = function() {
	document.getElementById("people_counter").innerHTML = 2;
}
	
