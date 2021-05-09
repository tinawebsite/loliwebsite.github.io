document.getElementById("resetValuesButton").addEventListener("click", function(){
	var wholeTable = document.getElementById("wholePlantTable");
 	var r = confirm("You are about to permanently delete all of your plant records. ");
	if(r == true){
		allPlantsDict = {};
		localStorage.setItem("allPlants", JSON.stringify(allPlantsDict));
		updateValues("", "");
		wholeTable.style.visibility = "hidden";
	} 
})