$(document).ready(function() {$.ajax({
		url:"https://data.edmonton.ca/resource/kx42-g5ky.json",
		method:"GET",
		data: {
			"$limit" : 500,
			"$$app_token":"pFs8HDX3REzxbH5unoQDqrR8h"
		}
	}).done(function(data) {
		$materials = data;
		$srcQuerry = "";
		$points = 0;
	});
	$("[name='searchBar']").click(function() {
		$("#dropDown").slideDown();
	});
	$("#bgCanvas").click(function() {
		$("#dropDown").slideUp();
	});
	$("[name='searchBar']").keyup(function() {
		$srcQuerry = document.querySelector("[name='searchBar'").value;
		document.querySelector("#dropDown").innerHTML = "";
		
		$materials.forEach(function(material) {
			if(material.material_name.indexOf($srcQuerry) != -1) {
				var e = document.createElement("h5");
				var t = document.createTextNode(material.material_title);
				
				e.appendChild(t);
				e.addEventListener("click",function() {
					var conf = confirm("This item can be disposed through: " + material.stream_title + "\nAdd Points? Confirm to add");
					if(conf)
						$points += 1;
				});
				
				document.querySelector("#dropDown").appendChild(e);
				console.log($points);
			}
		});
	});
	$("#save").click(function() {
		$first = document.getElementById("fname").value;
		$last = document.getElementById("lname").value;
		$pass = document.getElementById("pwd").value;
		
		$info = JSON.stringify({
				"fname":$first,
				"lname":$last,
				"password":$pass
			});
		console.log($first + "<br />" + $last + "<br />" + $pass + "<br />");
		
		
		$.ajax({
			url:"saveUser.php",
			method:"POST",
			data: $info
		}).done(function() {
			console.log("Saved");
		})
	});
});