class Cloud {
	constructor(posX, posY) {
		this.x = posX;
		this.y = posY;
		this.w = 20;
		this.h = 22;
		console.log("Top: " + this.y);
		console.log("Left: " + this.x);
		console.log("Width: " + this.w);
		console.log("Height: " + this.h);
	}
	drawCloud() {
		// Create image
		this.cloudImg = document.createElement("img");
		
		// Find image file
		this.cloudImg.setAttribute("src","images/cloud.png");
		
		// Add class attribute
		this.cloudImg.setAttribute("class","cloud");
		
		// Set dimensions and properties
		this.cloudImg.style.width = this.w + "%";
		this.cloudImg.style.height = this.h + "%";
		this.cloudImg.style.top = this.y + "%";
		this.cloudImg.style.left = this.x + "%";
		
		// Add hover action listener
		this.cloudImg.addEventListener("mouseover",function() {
			this.style.opacity = "0.5";
		});
		this.cloudImg.addEventListener("mouseout",function() {
			this.style.opacity = "1";
		})
		
		// Log success
		console.log("New instance created");
		
		// Add to document
		document.body.appendChild(this.cloudImg);		
	}
	setText(txt) {
		var header = document.createElement("h1");
		var text = document.createTextNode(txt);
		header.appendChild(text);
		header.setAttribute("class","text");
		this.cloudImg.appendChild(header);
	}
	setURL(url) {
		var anchor = document.createElement("a");
		anchor.setAttribute("href",url);
		this.cloudImg.appendChild(anchor);
	}
}

function init() {
	//Sky Canvas	
	var cvs = document.getElementById("bgCanvas");
	var ctx = cvs.getContext("2d");
	var grd = ctx.createRadialGradient(0,-20,0,5,5,45);
	//var grd = ctx.createLinearGradient(0,0,100,100);
		
	// Color stops
	grd.addColorStop(0,"orange");
	grd.addColorStop(0.65,"yellow");
	//grd.addColorStop(0.75,"#3728BD")
	grd.addColorStop(1,"#2873BD");
	
	// Fill Style
	ctx.fillStyle = grd;
	
	//fillRect(x,y,width,height);
	ctx.fillRect(0,0,500,500);
	
	var cloudArray = new Array();
	for (var i=0; i<4; i++) {
		let padding = 20 * i;
		console.log("cloud #" + (i+1));
		let cloud = new Cloud(18 + padding,4);
		cloudArray.push(cloud);
	}	
	
	// Iterate through cloud array
	cloudArray.forEach(function(currCloud, i) {
		currCloud.drawCloud();
	});
	
	// Set text of nav bar
	cloudArray[0].setText("Search");
	cloudArray[1].setText("About");
	cloudArray[2].setText("Environment Impact");
	cloudArray[3].setText("Profile");
	
	cloudArray[0].setURL("RecycleOps.html");
	cloudArray[1].setURL("");
	cloudArray[2].setURL("");
	cloudArray[3].setURL("userInput.html");
}
