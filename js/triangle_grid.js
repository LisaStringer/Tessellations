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
	var left_calc = 100;
	var left_start = 100;
	var top_calc = 10;
	var start_shape = "UP";
	for (t = 0; t <= 8; t++) {
		if (t%2==0){
			console.log(t+": EVEN");
			start_shape = "UP"
		}else{
			start_shape="DOWN"
		}
	for (n = 0; n <= 20; n++) { 
		addSection("_"+t+"_"+n, top_calc, left_calc, start_shape);
		//console.log("clip_"+t+"_"+n)
		left_calc = left_calc + 108;
		//console.log(left_calc);
	}
		top_calc = top_calc + 98;
		left_start = left_start -55;
		left_calc = left_start;
			
		
	}
	//addSection("clip0", 10, 0);
	//addSection("clip1", 10, 210);
	//addSection("clip1", 10, 420);
	activateSVGPaths();
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
	
	var triangle_up = document.createElement("div");
	triangle_up.innerHTML = "<svg width='118' height='102' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='hidden'><defs><clipPath  id='clip_U"+id+"' ><rect x='690' y='236' width='118' height='102'/></clipPath></defs><g clip-path='url(#clip0)' transform='translate(-690 -236)'><path id='fill_U"+id+"' class='hover' d='M693.5 336.5 749 240.5 804.5 336.5Z' stroke='#2F528F' stroke-width='3' stroke-miterlimit='8' stroke-dasharray='3 3' fill='#FFFFFF' fill-rule='evenodd'/></g></svg>";
	var triangle_down = document.createElement("div");
	triangle_down.innerHTML = "<svg width='119' height='102' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='hidden'><defs><clipPath  id='clip_D"+id+"' ><rect x='745' y='237' width='119' height='102'/></clipPath></defs><g clip-path='url(#clip0)' transform='translate(-745 -237)'><path id='fill_D"+id+"' class='hover' d='M0 96 55.5 0 111 96Z' stroke='#2F528F' stroke-width='3' stroke-miterlimit='8' stroke-dasharray='3 3' fill='#FFFFFF' fill-rule='evenodd' transform='matrix(1 0 0 -1 749.5 335.5)'/></g></svg>";
	
	var triangle_up_hit = document.createElement("div");
	triangle_up_hit.id="hit_U"+id;
	triangle_up_hit.className="hit_area"
	//triangle_up_hit.ondrop="drop(event)";
	//triangle_up_hit.ondragover="allowDrop(event)"

	var triangle_down_hit = document.createElement("div");
	triangle_down_hit.id="hit_D"+id;
	triangle_down_hit.className="hit_area"
	triangle_up_hit.style.left=left+32+"px";
	triangle_up_hit.style.top=top+5+"px";
	triangle_down_hit.style.left=left+85+"px";
	triangle_down_hit.style.top=top+5+"px";
	
	triangle_up.style.left=left+"px";
	triangle_down.style.left=left+52+"px";
	
	
	triangle_up.style.top=top+"px";
	triangle_up.style.position="absolute";
	triangle_down.style.top=top+"px";
	triangle_down.style.position="absolute";
	
	container.appendChild(triangle_up);
	container.appendChild(triangle_down);
	container.appendChild(triangle_up_hit);
	container.appendChild(triangle_down_hit);
	console.log(triangle_up)
	console.log(triangle_down)
}

function showFill(fill_area_id){
	console.log("showFill: "+fill_area_id.id)
	var pattern_path_id = fill_area_id.id;
	var	top_num = pattern_path_id.substr(7, 1);
	
	top_num = Number(top_num)
	var left_num = pattern_path_id.substr(9, 2);
	left_num = Number(left_num)
	
	var triangle_type = pattern_path_id.substr(5, 1);
	console.log("TOP: "+top_num+" LEFT: "+left_num+" TYPE: "+triangle_type)
	fill_area_id.setAttributeNS(null, 'fill', curr_color);
	
	//if U calculate from top
	if (triangle_type == "U"){
	var td01 = document.getElementById("fill_D_"+(top_num+1)+"_"+(left_num-1))
	td01.setAttributeNS(null, 'fill', curr_color);
	var td02 = document.getElementById("fill_D_"+(top_num+1)+"_"+left_num)
	td02.setAttributeNS(null, 'fill', curr_color);
	var td03 = document.getElementById("fill_D_"+(top_num+1)+"_"+(left_num+1))
	td03.setAttributeNS(null, 'fill', curr_color);
	var tu01 = document.getElementById("fill_U_"+(top_num+1)+"_"+(left_num))
	tu01.setAttributeNS(null, 'fill', curr_color);
	var tu02 = document.getElementById("fill_U_"+(top_num+1)+"_"+(left_num+1))
	tu02.setAttributeNS(null, 'fill', curr_color);
	}
	//if D calculate from center
	if (triangle_type == "D"){
	var td01 = document.getElementById("fill_D_"+(top_num)+"_"+(left_num-1))
	td01.setAttributeNS(null, 'fill', curr_color);
	var td02 = document.getElementById("fill_D_"+(top_num)+"_"+(left_num+1))
	td02.setAttributeNS(null, 'fill', curr_color);
	
	var tu01 = document.getElementById("fill_U_"+(top_num-1)+"_"+(left_num))
	tu01.setAttributeNS(null, 'fill', curr_color);
	var tu02 = document.getElementById("fill_U_"+(top_num)+"_"+(left_num))
	tu02.setAttributeNS(null, 'fill', curr_color);
	var tu03 = document.getElementById("fill_U_"+(top_num)+"_"+(left_num+1))
	tu03.setAttributeNS(null, 'fill', curr_color);
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
	var control_color="#D9D9D9"
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
/*function mouseOverEffect() {
  //fill_area_id.classList.add("shape-highlight");
	console.log("MOUSE OVER: "+this.id)
	var pattern_path_id = this.id;
	var	top_num = pattern_path_id.substr(6, 1);
	
	top_num = Number(top_num)
	var left_num = pattern_path_id.substr(8, 2);
	left_num = Number(left_num)
	
	var triangle_type = pattern_path_id.substr(5, 1);
	console.log("TOP: "+top_num+" LEFT: "+left_num+" TYPE: "+triangle_type)
	//if U calculate from top
	
	var td01 = document.getElementById("fill_D_"+(top_num+1)+"_"+(left_num-1))
	td01.setAttributeNS(null, 'fill', "#4472C4");
	var td02 = document.getElementById("fill_D_"+(top_num+1)+"_"+left_num)
	td02.setAttributeNS(null, 'fill', "#4472C4");
	var td03 = document.getElementById("fill_D_"+(top_num+1)+"_"+(left_num+1))
	td03.setAttributeNS(null, 'fill', "#4472C4");
	var tu01 = document.getElementById("fill_U_"+(top_num+1)+"_"+(left_num-1))
	tu01.setAttributeNS(null, 'fill', "#4472C4");
	var tu02 = document.getElementById("fill_U_"+(top_num+1)+"_"+(left_num))
	tu02.setAttributeNS(null, 'fill', "#4472C4");
	
}*/
/*function mouseOutEffect() {
	console.log("MOUSE OUt")
  //this.classList.remove("shape-highlight");
		console.log("MOUSE OVER: "+this.id)
	var pattern_path_id = this.id;
	var	top_num = pattern_path_id.substr(6, 1);
	
	top_num = Number(top_num)
	var left_num = pattern_path_id.substr(8, 2);
	left_num = Number(left_num)
	
	var triangle_type = pattern_path_id.substr(5, 1);
	console.log("TOP: "+top_num+" LEFT: "+left_num+" TYPE: "+triangle_type)
	//if U calculate from top
	
	var td01 = document.getElementById("fill_D_"+(top_num+1)+"_"+(left_num-1))
	td01.setAttributeNS(null, 'fill', "#ffffff");
	var td02 = document.getElementById("fill_D_"+(top_num+1)+"_"+left_num)
	td02.setAttributeNS(null, 'fill', "#ffffff");
	var td03 = document.getElementById("fill_D_"+(top_num+1)+"_"+(left_num+1))
	td03.setAttributeNS(null, 'fill', "#ffffff");
	var tu01 = document.getElementById("fill_U_"+(top_num+1)+"_"+(left_num-1))
	tu01.setAttributeNS(null, 'fill', "#ffffff");
	var tu02 = document.getElementById("fill_U_"+(top_num+1)+"_"+(left_num))
	tu02.setAttributeNS(null, 'fill', "#ffffff");
}*/
function activateSVGPaths(){
	var lineclassElements = document.getElementsByClassName("hit_area");
	
	for(var i = 0; i < lineclassElements.length; i++){
     //console.log(lineclassElements[i].id);
		//lineclassElements[i].setAttributeNS(null, 'stroke', '#4472C4');
		var hit_area_id = lineclassElements[i].id;
		var fill_area_id = "fill"+hit_area_id.substr(3, 7);
		//console.log("HIT AREA ID: "+fill_area_id)
		//var fill_area=document.getElementById(fill_area_id)
		//lineclassElements[i].setAttributeNS(null, 'cursor', "hand");
		lineclassElements[i].setAttributeNS(null, 'onclick',"showFill("+fill_area_id+")");
		lineclassElements[i].setAttributeNS(null, 'ondrop',"drop(event, "+fill_area_id+")");
	lineclassElements[i].setAttributeNS(null, 'ondragover',"allowDrop(event)")
		//lineclassElements[i].addEventListener("mouseover", mouseOverEffect(fill_area_id));
		//lineclassElements[i].addEventListener('mouseover', mouseOverEffect);
   		//lineclassElements[i].addEventListener('mouseout', mouseOutEffect);
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