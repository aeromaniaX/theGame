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
  var db = firebase.firestore();
  
var counter;
var docRef = db.collection("entries info").doc("number_of_entries");

window.onload = function() {
	updateCounter();
	//console.log(counter);
}

var updateCounter = function() {
	
	var result;
	docRef.get().then(function(doc) {
		if(doc && doc.exists) {
			result = doc.data().nr;
			document.getElementById("people_counter").innerHTML = result;
			counter = result;
			updateDB();
		}
	}).catch(function(error) {
		console.log("Error loading data from firestore:", error);
	});
}

var updateDB = function() {
	var newCounter = parseInt(counter)+1;
	//console.log(typeof newCounter);
	return docRef.update({
		nr: newCounter
	})
	.then(function() {
		console.log("Document successfully updated!");
	})
	.catch(function(error) {
		console.error("Error updating document: ", error);
	})
}



