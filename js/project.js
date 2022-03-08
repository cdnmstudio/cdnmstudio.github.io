function status(name, color, weight){
	this.name = name;
	this.color = color;
	this.weight = weight;
}
var statuses = new Array(6);
statuses[0] = new status("Анонс","#000000",400);
statuses[1] = new status("В разработке","#00A550",700);
statuses[2] = new status("В долгом ящике","#ED1C24",400);
statuses[3] = new status("Альфа-тест","#BA8759",400);
statuses[4] = new status("Бета-тест","#D4AF37",700);
statuses[5] = new status("Релиз","#000000",700);
function load(){
	var data2 = JSON.parse(JSON.stringify(data));
	var projectsDoc = document.getElementById("projects");
	for(var w = 0; w<data2["projects"].length; w++){		
		var project = document.createElement("div");
		project.align = "left";
		project.className = "project";
		var linkAuthor = document.createElement("a");
		linkAuthor.href = data2["members"][data2["projects"][w]["author"]]["feedback"];
		var logoAuthor = document.createElement("img");
		logoAuthor.src = data2["members"][data2["projects"][w]["author"]]["avatar"];
		logoAuthor.className = "logo-author";
		var nickAuthor = document.createElement("div");
		var br = document.createElement("br");
		var specAuthor = document.createElement("div");
		nickAuthor.className = "name-author";
		specAuthor.className = "spec-author";
		var nickAuthorText = document.createTextNode(data2["members"][data2["projects"][w]["author"]]["nick"])
		var specAuthorText = document.createTextNode(data2["members"][data2["projects"][w]["author"]]["spec"])
		var intro = document.createElement("img");
		intro.className = "intro-project";
		if(data2["projects"][w]["intro"]=="")
			intro.src = "images/TempIntro.png";
		else
			intro.src = data2["projects"][w]["intro"];
		var name = document.createElement("a");
		name.className = "name-project";
		name.href = data2["projects"][w]["git"];
		var nameText = document.createTextNode(data2["projects"][w]["name"]);
		var statusMain = document.createElement("div");
		statusMain.className = "status-project";
		var statusKey = document.createElement("div");
		statusKey.style.right = "6px";
		statusKey.style.position = "relative";
		statusKey.style.display = "inline-block";	
		var statusKeyText = document.createTextNode("Статус:")
		var statusValue = document.createElement("div");
		statusValue.style.display = "inline-block";
		statusValue.style.float = "right";
		var statusValueBlock = document.createElement("div");
		statusValueBlock.style.color = statuses[data2["projects"][w]["status"]].color;
		statusValueBlock.style.fontWeight = statuses[data2["projects"][w]["status"]].weight;
		var statusValueText = document.createTextNode(statuses[data2["projects"][w]["status"]].name)
		var typeMain = document.createElement("div");
		typeMain.className = "type-project";
		var typeKey = document.createElement("div");
		typeKey.style.right = "6px";
		typeKey.style.position = "relative";
		typeKey.style.display = "inline-block";	
		var typeValue = document.createElement("div");
		typeValue.style.display = "inline-block";
		typeValue.style.float = "right";
		var typeKeyText = document.createTextNode("Тип:");
		var typeValueText = document.createTextNode(data2["projects"][w]["class"]);

		projectsDoc.appendChild(project);
		project.appendChild(linkAuthor);
		linkAuthor.appendChild(logoAuthor);
		linkAuthor.appendChild(nickAuthor);
		nickAuthor.appendChild(nickAuthorText);
		nickAuthor.appendChild(br);
		nickAuthor.appendChild(specAuthor);
		specAuthor.appendChild(specAuthorText);
		project.appendChild(intro);
		project.appendChild(name);
		name.appendChild(nameText);
		project.appendChild(statusMain);
		statusMain.appendChild(statusKey);
		statusMain.appendChild(statusValue);
		statusKey.appendChild(statusKeyText);
		statusValue.appendChild(statusValueBlock);
		statusValueBlock.appendChild(statusValueText);
		project.appendChild(typeMain);
		typeMain.appendChild(typeKey);
		typeMain.appendChild(typeValue);
		typeKey.appendChild(typeKeyText);
		typeValue.appendChild(typeValueText);
	}
}