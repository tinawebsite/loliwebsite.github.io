function waterPlantNowClick (plantName, currentDate) {
	allPlantsDict[plantName] = returnOnlyDateFormat1(currentDate);
	localStorage.setItem("allPlants", JSON.stringify(allPlantsDict));
	updateValues("", "");
}