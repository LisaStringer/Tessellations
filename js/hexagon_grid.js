// JavaScript Document
var ultramarine_green = "#006A56"
var samba = "#A1232E"
var fired_brick = "#692E2A"
var sleet = "#94949E"
var amber_glow = "#DD7A3F"

var green_sheen = "#D9CE52"
var classic_blue = "#0E4B81"
var magenta_purple = "#6C254D"
var blue_depths = "#283057"
var military_olive = "#645639"
var curr_color = "#94949E";
var autumn_colors = ["ultramarine_green", "samba", "fired_brick", "amber_glow", "green_sheen", "classic_blue", "magenta_purple", "blue_depths", "military_olive", "sleet"]
var autumn = [ultramarine_green, samba, "#692E2A", "#DD7A3F", "#D9CE52", "#0E4B81", "#6C254D", "#283057", "#645639", "#94949E"]
var container = document.getElementById("container");
var color_container = document.getElementById("color_container");

var nav_bar = document.getElementById("nav_bar");
var pentahex01 = ['00','01','02','03','13'];
var pentahex01_Hflip = ['02', '10', '11', '12', '13'];

var pentahex02 = ['00','01','02','03','12'];
var pentahex03 = ['00','01','10','21','22'];
var pentahex04 = ['00','01','11','21','22'];
var pentahex05 = ['00','01','02','11','22'];
var pentahex06 = ['00','11','12','22','32'];
var pentahex01_rotation = []
var current_pattern = ['00','01','02','11','21'];



function setColor(hex_code){
	
	
	console.log("SET COLOR: "+hex_code);
	curr_color = hex_code;
	
}
function populateColors(){

	var curr_left = 0;
	for (n = 0; n < autumn.length; n++) { 
		curr_left = (n*10)+"%";
		var color_hitarea = document.createElement("div");
		
		color_hitarea.id = "color"+n;
		color_hitarea.className="color_swab";
		color_hitarea.style["background-color"] = autumn[n];
		var new_color = autumn[n];
		
		console.log(new_color)
		color_hitarea.style["left"] = curr_left;
		color_hitarea.innerHTML="<button class='button' span style='color:white'><div onclick='setColor("+autumn_colors[n]+")'>"+autumn[n]+"</div></span></button>";
		color_container.appendChild(color_hitarea);
		console.log(color_hitarea)
		
	}
}
function createPattern(){
	var left_calc = 10;
	var left_start = 10;
	var top_calc = 10;
	
	//calculate screen height and width
	//console.log("WIDTH: "+window.width +"HEIGHT: "+ window.height)
	var row_num = Math.floor((window.innerHeight-400)/60);
	var col_num = Math.floor(window.innerWidth/60);
	for (t = 0; t <= row_num; t++) {
		/*if (t%2==0){
			console.log(t+": EVEN");
			left_start = 45;
		}else{
			left_start = 10;
		}*/
		//make the names consistent 
		if (t<10){t="0"+t}				 
	for (n = 0; n <= col_num; n++) { 
		//make the names consistent 
		if (n<10){n="0"+n}
		addSection("_"+t+"_"+n, top_calc, left_calc, "hexagon");
		//console.log("clip_"+t+"_"+n)
		left_calc = left_calc + 67;
		//console.log(left_calc);
	}
		top_calc = top_calc + 57;
		left_start = left_start-35;
		left_calc = left_start;
	}
	
	activateSVGPaths();
}


function addSection(id, top, left, start){
	//console.log(id);
	
	var hexagon = document.createElement("div");
	hexagon.innerHTML = "<svg width='71' height='79' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='hidden'><defs><clipPath id='clip0'><rect  x='641' y='73' width='71' height='79'/></clipPath></defs><g clip-path='url(#clip0)' transform='translate(-641 -73)'><path id='fill"+id+"' d='M677 76.5 710.5 93.25 710.5 133.75 677 150.5 643.5 133.75 643.5 93.25Z' stroke='#4472C4' stroke-width='3' stroke-miterlimit='8' stroke-dasharray='3 3' fill='#F2F2F2' fill-rule='evenodd'/></g></svg>";
	hexagon.style.left=left+"px";
	hexagon.style.top=top+"px";
	hexagon.style.position="absolute";
	
	var hexagon_hit = document.createElement("div");
	hexagon_hit.id="hit_"+id;
	console.log("hexagon hit id: "+hexagon_hit.id)
	hexagon_hit.className="hit_area"
	
	hexagon_hit.style.left=left+10+"px";
	hexagon_hit.style.top=top+15+"px";
	
	hexagon_hit.style.width="50px";
	hexagon_hit.style.height="50px";
	container.appendChild(hexagon);
	container.appendChild(hexagon_hit);

}
createPattern();
populateColors();

//addController("C1");