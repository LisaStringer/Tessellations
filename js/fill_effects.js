// JavaScript Document
var base_color = "#F2F2F2";
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
	var sample_window = document.getElementById("show_pattern");
	sample_window.innerHTML="<img class='sample_image' src='images/"+shape_name+".svg'/>"
	
	
}

function mouseOverEffect() {
  //fill_area_id.classList.add("shape-highlight");
	
	if(this!=undefined){
			var pattern_path_id = this.id;
	var	top_num = pattern_path_id.substr(5,2);
	console.log("current row number: "+top_num);
	top_num = Number(top_num);
		
	var left_num = pattern_path_id.substr(8, 2);
		console.log("current col number: "+left_num);
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
		console.log("fill_"+row_id+"_"+col_id)
		var td01 = document.getElementById("hit__"+row_id+"_"+col_id);
		//console.log(td01)
	if(td01 != null){
	//td01.setAttributeNS(null, 'background-color', curr_color);
		td01.style["background-color"] = curr_color;
		//td01.setAttributeNS(null, 'fill', curr_color);
	}			
	}
	}
}
		
		
function showFill(fill_area_id){
	//console.log("showFill: "+fill_area_id.id)
	var pattern_path_id = fill_area_id.id;
	if(pattern_path_id!=undefined){
			
	var	top_num = pattern_path_id.substr(5,2);
	//console.log("current FILL row number: "+top_num);
	top_num = Number(top_num);
		
	var left_num = pattern_path_id.substr(8, 2);
		//console.log("current FILL col number: "+left_num);
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
		//console.log("fill_"+row_id+"_"+col_id)
		
		var td01 = document.getElementById("fill_"+row_id+"_"+col_id);
		
		
		
	if(td01 != null){
	td01.setAttributeNS(null, 'fill', curr_color);
		td01.setAttributeNS(null, 'stroke', curr_color);
		
		td01.setAttributeNS(null, 'stroke-dasharray','0 0');
		
	}			
	}
	}
	
	
}	

function mouseOutEffect() {
	//console.log("MOUSE OUt")
 if(this!=undefined){
			var pattern_path_id = this.id;
	var	top_num = pattern_path_id.substr(5,2);
	//console.log("current row number: "+top_num);
	top_num = Number(top_num);
		
	var left_num = pattern_path_id.substr(8, 2);
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
		var td01 = document.getElementById("hit__"+row_id+"_"+col_id);
		
		console.log(td01)
	if(td01 != null){
	//td01.setAttributeNS(null, 'background-color', curr_color);
		td01.style["background-color"] = "transparent";
		//td01.setAttributeNS(null, 'fill', "#f2f2f2");
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
		console.log("HIT AREA: "+hit_area_id)
		var fill_area_id = "fill"+hit_area_id.substr(4, 7);
		
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