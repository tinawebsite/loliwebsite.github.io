function removePlant (plantToRemove) { 
 	var r = confirm("You are about to permanantly delete the plant called '" + plantToRemove + "' and its records.");
	if(r == true){
		delete allPlantsDict[plantToRemove]
		localStorage.setItem("allPlants", JSON.stringify(allPlantsDict));
		updateValues("", "");
	} 
}