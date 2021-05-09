var allPlantsDict = JSON.parse(localStorage.getItem("allPlants")) //format// {plantName:lastWateredDate}
//var allPlantsDict = {}

var submitButton = document.getElementById("submitButton");
var plantNameInput = document.getElementById("plantNameInput");
var lastWateredDateInput = document.getElementById("lastWateredDateInput");
var tableBody = document.getElementById("tbody");

submitButton.addEventListener("click", function(){
	allPlantsDict[plantNameInput.value] = lastWateredDateInput.value
	localStorage.setItem("allPlants", JSON.stringify(allPlantsDict));
	getNewPlantValues();
});



var tableBody = document.getElementById('tbody');

function getNewPlantValues (){
	for (plant in allPlantsDict){
		let plantName = plant;
		let date = allPlantsDict[plant];		
		if(plantName != "" && date != ""){	
			//tableBody.innerHTML = "";
			document.getElementById("wholePlantTable").style.visibility = "visible"
			addValuesToTable(plantName, date);
			
		} else {
			alert("Please enter a valid name and/or date.");
		}
		
	}
}

//ADDING INFO INTO TABLE
function addValuesToTable (plantNameValue, dateValue) {
	let newRow = tableBody.insertRow(-1)
	let newNameCell = newRow.insertCell(0);
	let newDateCell = newRow.insertCell(1);
	let newNameText = document.createTextNode(plantNameValue);
	let newDateText = document.createTextNode(dateValue);
  	newNameCell.appendChild(newNameText);
  	newDateCell.appendChild(newDateText);
}