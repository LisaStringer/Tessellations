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
var base_color = "#F2F2F2";
var nav_bar = document.getElementById("nav_bar");
var pentamino01 = ['00','01','02','11','21'];
var pentamino01_flip = ['01', '11', '20', '21', '22'];

var pentamino02 = ['00','01','02','03','13'];
var pentamino03 = ['00','01','02','12','22'];
var pentamino04 = ['01','10','11','12','13'];
var pentamino05 = ['00','10','11','21','31'];
var pentamino06 = ['01','02','10','11','21'];
var pentamino01_rotation = []
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
	var row_num = Math.floor((window.innerHeight-400)/70);
	var col_num = Math.floor(window.innerWidth/70);
	for (t = 0; t <= row_num; t++) {
		//make the names consistent 
		if (t<10){t="0"+t}				 
	for (n = 0; n <= col_num; n++) { 
		//make the names consistent 
		if (n<10){n="0"+n}
		addSection("_"+t+"_"+n, top_calc, left_calc, "square");
		//console.log("clip_"+t+"_"+n)
		left_calc = left_calc + 67;
		//console.log(left_calc);
	}
		top_calc = top_calc + 67;
		left_start = left_start;
		left_calc = left_start;
	}
	
	activateSVGPaths();
}
function createSample(sample_name){
	console.log("sample: "+sample_name);
	
	var left_calc = 10;
	var left_start = 10;
	var top_calc = 1000;
}
/*function addDropShapes(){
	var shape01_up = document.createElement("div");
	shape01_up.innerHTML="<img id='drag1' src='../images/shape01.svg' draggable='true' ondragstart='drag(event)' width='333' height='195'>";
	shape01_up.draggable="true";
	shape01_up.ondragstart="drag(event)";
	shape01_up.bottom="25px"
	shape01_up.left="10px"

	container.appendChild(shape01_up);
	console.log(shape01_up)
}*/
function addSection(id, top, left, start){
	//console.log(id);
	var tile = document.createElement("div");
	tile.innerHTML = "<svg width='71' height='72' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='hidden'><defs><clipPath id='clip0'><rect x='65' y='74' width='71' height='72'/></clipPath></defs><g clip-path='url(#clip0)' transform='translate(-65 -74)' <path><rect id='fill"+id+"' x='67.5001' y='76.5001' width='67' height='68' stroke='#4472C4' stroke-width='3' stroke-miterlimit='8' stroke-dasharray='3 3' fill='#F2F2F2'/></g></svg>";
	
	var tile_hit = document.createElement("div");
	tile_hit.id="hit"+id;
	tile_hit.className="hit_area"
	tile_hit.style.left=left+2+"px";
	tile_hit.style.top=top+2+"px";
	
	tile_hit.style.height="70px";
	tile_hit.style.width="70px";
	tile.style.left=left+"px";	
	tile.style.top=top+"px";
	tile.style.position="absolute";
	
	container.appendChild(tile);
	container.appendChild(tile_hit);
}

function showFill(fill_area_id){
	//console.log("showFill: "+fill_area_id.id)
	var pattern_path_id = fill_area_id.id;
	if(pattern_path_id!=undefined){
			
	var	top_num = pattern_path_id.substr(5,2);
	console.log("current FILL row number: "+top_num);
	top_num = Number(top_num);
		
	var left_num = pattern_path_id.substr(8, 2);
		console.log("current FILL col number: "+left_num);
	left_num = Number(left_num)
	//console.log("MOUSE OVER: "+this.id);
		
	for(var i = 0; i < current_pattern.length; i++){
		var tile_id = current_pattern[i];
		var row_num = Number(tile_id.substr(0,1));
		console.log("add this top number: "+row_num);
		var col_num = Number(tile_id.substr(1,1));
		console.log("add this left number: "+col_num);
		//make names consistent
		var row_id = top_num+row_num;
		if (row_id <10){row_id="0"+row_id}
		var col_id = left_num+col_num;
		if (col_id <10){col_id="0"+col_id}
		console.log("fill_"+row_id+"_"+col_id)
		var td01 = document.getElementById("fill_"+row_id+"_"+col_id);
		console.log(td01)
	if(td01 != null){
	td01.setAttributeNS(null, 'fill', curr_color);
		//td01.style["background-color"] = curr_color;
		
	}			
	}
	}
	
	//var path = document.getElementById("fill"+path_substr)
	
	
	//fill_area_id.removeEventListener('mouseout', mouseOutEffect);
	/*var control_color = path_name.getAttribute('fill');
	//toggle stroke width and color
	if (control_color=="#D9D9D9"){
		control_color="#4472C4"
		pattern_color='#404040'
		pattern_width = "6"
	}else{
		control_color="#D9D9D9"
		pattern_color='#D9D9D9'
		pattern_width = "1"
		 }
	*/
	
	//path_name.setAttributeNS(null, 'fill', control_color);
/*	var lineclassElements = document.getElementsByClassName("line");
	for(var i = 0; i < lineclassElements.length; i++){
		var line_path_str = lineclassElements[i].id
		line_path_str = line_path_str.substr(-3, 3);
		if (line_path_str == path_str){
			
			lineclassElements[i].setAttributeNS(null, 'stroke', pattern_color);
			lineclassElements[i].setAttributeNS(null, 'stroke-width', pattern_width);
		}
	}*/
}
function setPattern(shape_name){
	//get all buttons by attribute shape_button
	var all_buttons = document.getElementsByClassName("shape_button");
	
	//reset all buttons
	for(var i = 0; i < all_buttons.length; i++){
		all_buttons[i].style.backgroundColor = "gainsboro";
		all_buttons[i].style.opacity = "100%";
	}
	//highlight current shape
	var current_button = document.getElementById(shape_name);
	current_button.style.backgroundColor = "white";
	current_button.style.opacity = "25%";
	current_pattern = eval(shape_name);
	var sample_window = document.getElementById("sample_window");
	sample_window.innerHTML="<img class='sample_image' src='images/"+shape_name+".svg'/>"
	
	
}
function transformPattern(transform_method){
	var change_button = document.getElementById(change_name);
	if (change_name == "flip_up"){
		change_button.innerHTML="<img src='images/flip_down.svg'>"}
}

function mouseOverEffect() {
  //fill_area_id.classList.add("shape-highlight");
	
	if(this!=undefined){
			var pattern_path_id = this.id;
	var	top_num = pattern_path_id.substr(4,2);
	//console.log("current row number: "+top_num);
	top_num = Number(top_num);
		
	var left_num = pattern_path_id.substr(7, 2);
		//console.log("current col number: "+left_num);
	left_num = Number(left_num)
	//console.log("MOUSE OVER: "+this.id);
		
	for(var i = 0; i < current_pattern.length; i++){
		var tile_id = current_pattern[i];
		var row_num = Number(tile_id.substr(0,1));
		//console.log("add this top number: "+row_num);
		var col_num = Number(tile_id.substr(1,1));
		//console.log("add this left number: "+col_num);
		//make names consistent
		var row_id = top_num+row_num;
		if (row_id <10){row_id="0"+row_id}
		var col_id = left_num+col_num;
		if (col_id <10){col_id="0"+col_id}
		//console.log("hit_"+row_id+"_"+col_id)
		var td01 = document.getElementById("hit_"+row_id+"_"+col_id);
		//console.log(td01)
	if(td01 != null){
	//td01.setAttributeNS(null, 'background-color', curr_color);
		td01.style["background-color"] = curr_color;
	}			
	}
	}
}
		
		
	

function mouseOutEffect() {
	//console.log("MOUSE OUt")
 if(this!=undefined){
			var pattern_path_id = this.id;
	var	top_num = pattern_path_id.substr(4,2);
	//console.log("current row number: "+top_num);
	top_num = Number(top_num);
		
	var left_num = pattern_path_id.substr(7, 2);
		//console.log("current col number: "+left_num);
	left_num = Number(left_num)
	//console.log("MOUSE OVER: "+this.id);
		
	for(var i = 0; i < current_pattern.length; i++){
		var tile_id = current_pattern[i];
		var row_num = Number(tile_id.substr(0,1));
		//console.log("add this top number: "+row_num);
		var col_num = Number(tile_id.substr(1,1));
		//console.log("add this left number: "+col_num);
		//make names consistent
		var row_id = top_num+row_num;
		if (row_id <10){row_id="0"+row_id}
		var col_id = left_num+col_num;
		if (col_id <10){col_id="0"+col_id}
		//console.log("hit_"+row_id+"_"+col_id)
		var td01 = document.getElementById("hit_"+row_id+"_"+col_id);
		//console.log(td01)
	if(td01 != null){
	//td01.setAttributeNS(null, 'background-color', curr_color);
		td01.style["background-color"] = "transparent";
	}			
	}
	}
}
function activateSVGPaths(){
	var lineclassElements = document.getElementsByClassName("hit_area");
	
	for(var i = 0; i < lineclassElements.length; i++){
     //console.log(lineclassElements[i].id);
		//lineclassElements[i].setAttributeNS(null, 'stroke', '#4472C4');
		var hit_area_id = lineclassElements[i].id;
		var fill_area_id = "fill"+hit_area_id.substr(3, 7);
		
		//console.log("FILL AREA ID: "+fill_area_id)
		//var fill_area=document.getElementById(fill_area_id)
		//lineclassElements[i].setAttributeNS(null, 'cursor', "hand");
		lineclassElements[i].setAttributeNS(null, 'onclick',"showFill("+fill_area_id+")");
		lineclassElements[i].setAttributeNS(null, 'ondrop',"drop(event, "+fill_area_id+")");
	lineclassElements[i].setAttributeNS(null, 'ondragover',"allowDrop(event)")
		//lineclassElements[i].addEventListener("mouseover", mouseOverEffect(fill_area_id));
		lineclassElements[i].addEventListener('mouseover', mouseOverEffect);
   		lineclassElements[i].addEventListener('mouseout', mouseOutEffect);
}
	/*for (n = 1; n <= 24; n++) { 
	var p1 = document.getElementById(id+"_p"+n);
		console.log(p1.id)
	p1.setAttributeNS(null, 'stroke', '#4472C4');
	p1.setAttributeNS(null, 'stroke-width', 6);
	p1.setAttributeNS(null, 'cursor', "pointer");
	p1.setAttributeNS(null, 'onclick',"alert('click!')");
	}*/
}
createPattern();
populateColors();

//addController("C1");