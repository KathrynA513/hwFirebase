var config = {
    apiKey: "AIzaSyDHGDwZo7sRAEINItTtK6yBS752nGDYUNg",
    authDomain: "hwtrain-43837.firebaseapp.com",
    databaseURL: "https://hwtrain-43837.firebaseio.com",
    projectId: "hwtrain-43837",
    storageBucket: "",
    messagingSenderId: "622902631026"
};
firebase.initializeApp(config);
// Creating a variable for database data:
var db = firebase.database()


$("#subTrain").on('click', function (){
  event.preventDefault(); 
  // Getting Form Values
  var tName = $("#trainName").val
  var tDestination = $("#trainDestination").val
  var getDuration = parseInt($('#Duration').val());
  console.log(getDuration);
  var getMinutes = $('#Time').val();
  //Setting the moment
  now = moment()
  //Getting and Formatting Minute Values
  var retMinutes = moment(getMinutes, "mm")
  var formatM = moment(retMinutes," mm");
  console.log(formatM.minutes());
  // Calculating the difference between Times
  var timeDif = moment(now).diff(moment(retMinutes), "minutes");
  var timeRemain = timeDif % getDuration;
  var tMinutesTilArrival = getDuration - timeRemainiS;
  var arrival = moment().add(tMinutesTilArrival, "minutes");
  // setting Firebase Database Values
  db.ref().push({
    tName : tName,
    tDestination : tDestination,
    tMinutesTilArrival : tMinutesTilArrival,
    arrival : arrival
   })    	 
})

  // adding to the table when the database is added to:
  db.ref().on("child_added", function(snapshot){
  //setting variables
    var table = $("#trainData");
    var childtName = snapshot.val().tName;
    var childtDestination = snapshot.val().tDestination;
    var childtMinutesTilArrival = snapshot.val().tMinutesTilArrival;
    var childarrival = snapshot.val().arrival;
    //adding variables to table
    table.append(
    "<tr><td>" + childtName + "<td>" +
    "<tr><td>" + childtDestination + "<td>" +
    "<tr><td>" + childtMinutesTilArrival+ "<td>" +
    "<tr><td>" + childtarrival + "<td>"
    );
 })