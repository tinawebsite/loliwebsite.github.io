var allPlantsDict = JSON.parse(localStorage.getItem("allPlants")) //format// {plantName:lastWateredDate}
console.log(allPlantsDict);

var tableBody = document.getElementById("tbody");
var submitButton = document.getElementById("addSubmitButton");
var wholeTable = document.getElementById("wholePlantTable");
var dateInput = document.getElementById("lastWateredDateInput");

var currentDate = new Date();

if (allPlantsDict == null){
	updateValues('example plant', currentDate);
	console.log(allPlantsDict);
}

dateInput.value = returnOnlyDateFormat2(currentDate);

if(Object.keys(allPlantsDict).length === 0){
	wholeTable.style.visibility = "hidden";
} else {
	updateValues("", "")
	wholeTable.style.visibility = "visible";
}

function updateValues (pName, pDate) {
	tableBody.innerHTML = "";		
	if(pName != "" && pDate != ""){

		allPlantsDict[pName] = returnOnlyDateFormat1(pDate);
		localStorage.setItem("allPlants", JSON.stringify(allPlantsDict));

		wholeTable.style.visibility = "visible";
	}

	for(i in allPlantsDict){
		addRowToTable(i, allPlantsDict[i]);
	}
	
}

function addRowToTable (plantNameValue, dateValue) {
	let newRow = tableBody.insertRow(-1);
	let waterButtonCell = newRow.insertCell(0);
	let newNameCell = newRow.insertCell(1);
	let newDateCell = newRow.insertCell(2);
	let newRemoveCell = newRow.insertCell(3);

	var waterButtonContent = document.createElement("img");
	waterButtonContent.src = "waterDrop.png";
	waterButtonContent.width = 25;
	waterButtonContent.id = plantNameValue.replace(/\s+/g, '') + "WaterButton";
	
	var removeButtonCellContent = document.createElement("button");
	removeButtonCellContent.innerHTML = "Remove";
	removeButtonCellContent.className = "button"
	removeButtonCellContent.id = plantNameValue.replace(/\s+/g, '') + "RemoveButton";
	
	let newNameText = document.createTextNode(plantNameValue);
	let newDateText = document.createTextNode(dateValue);
  	
  	waterButtonCell.appendChild(waterButtonContent);
  	newNameCell.appendChild(newNameText);
  	newDateCell.appendChild(newDateText);
  	newRemoveCell.appendChild(removeButtonCellContent);

  	document.getElementById(waterButtonContent.id).addEventListener("click", function () {
		waterPlantNowClick(plantNameValue, currentDate);
	})
	document.getElementById(removeButtonCellContent.id).addEventListener("click", function () {
		//code to delete plant
		removePlant(plantNameValue);
	})
}


function returnOnlyDateFormat1 (dateObj) {
	var month = dateObj.getUTCMonth() + 1;
	var day = dateObj.getUTCDate();
	var year = dateObj.getUTCFullYear();

	newdate = day + "/" + month + "/" + year;
	return newdate;
}

function returnOnlyDateFormat2 (dateObj) {
	var month = dateObj.getUTCMonth() + 1;
	var day = dateObj.getUTCDate();
	var year = dateObj.getUTCFullYear();

	if(month.toString().length == 1) {
		month = "0" + month;
	}
	if(day.toString().length == 1) {
		day = "0" + day;
	}
	newdate = year + "-" + month + "-" + day;
	return newdate;
}