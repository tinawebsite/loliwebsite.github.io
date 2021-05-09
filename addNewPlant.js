var allPlantsDict = JSON.parse(localStorage.getItem("allPlants"));

var plantNameInput = document.getElementById("plantNameInput");
var lastWateredDateInput = document.getElementById("lastWateredDateInput");
var currentDate = new Date();

function addNewPlantClickSubmit () {
	let plantName = plantNameInput.value;
	let plantDate = lastWateredDateInput.valueAsDate;

	if (allPlantsDict.hasOwnProperty(plantName) == true){
		alert("You have already registered a plant with this name."); 
	} else if(plantName != "" && plantDate != ""  && allPlantsDict.hasOwnProperty(plantName) == false && plantDate <= currentDate){	
		updateValues(plantName, plantDate);
		plantNameInput.value = "";
	} else if (plantDate > currentDate){
		alert("That date is in the future! Please select the correct date.")
	} 
	else{
		alert("Please enter a valid name and/or date.");
	} 
}