// JavaScript Document
var container = document.getElementById("container");
var nav_bar = document.getElementById("nav_bar");
function createPattern(){
	var left_calc = 10;
	var top_calc = 10;
	for (t = 0; t <= 4; t++) {
	for (n = 0; n <= 10; n++) { 
		addSection("clip_"+t+"_"+n, top_calc, left_calc);
		//console.log("clip_"+t+"_"+n)
		left_calc = left_calc + 210;
		console.log(left_calc);
	}
		top_calc = top_calc + 178;
		if (left_calc == 2320){
			left_calc = -95;
		}else{
			left_calc = 10;
		}
		
	}
	//addSection("clip0", 10, 0);
	//addSection("clip1", 10, 210);
	//addSection("clip1", 10, 420);
	
}
function addSection(id, top, left){
	console.log(id);
	var section = document.createElement("div");
	section.innerHTML = "<svg width='242' height='243' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='hidden'><defs><clipPath id='"+id+"' ><rect x='519' y='239' width='242' height='243'/></clipPath></defs><g clip-path='url(#clip0)' transform='translate(-519 -239)'><path class='circle' id='"+id+"_p0' d='M520.5 361.5C520.5 295.226 574.226 241.5 640.5 241.5 706.774 241.5 760.5 295.226 760.5 361.5 760.5 427.774 706.774 481.5 640.5 481.5 574.226 481.5 520.5 427.774 520.5 361.5Z' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/><path class='line' id='"+id+"_p01' d='M0 0 35.3034 59.4016' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(1 0 0 -1 605.5 301.902)'/><path class='line' id='"+id+"_p02' d='M675.5 301.248 640.5 242.5' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/><path class='line' id='"+id+"_p03' d='M745.803 301.7 675.5 301.5' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='line' id='"+id+"_p04' d='M0 0 34.427 57.4176' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 744.927 302.5)'/><path class='line' id='"+id+"_p05' d='M710.5 360.5 745.803 419.847' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='line' id='"+id+"_p06' d='M675.5 419.5 745.804 419.7' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='line' id='"+id+"_p07' d='M0 0 34.9936 59.9928' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(1 0 0 -1 640.5 479.493)'/><path class='line' id='"+id+"_p08' d='M640.577 480.899 605.5 420.5' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='line' id='"+id+"_p09' d='M0 0 69.0509 0.000104987' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 605.551 420.5)'/><path class='line' id='"+id+"_p10' d='M0 0 34.5255 59.702' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 571.026 360.5)'/><path class='line' id='"+id+"_p11' d='M570.177 360.697 537.5 301.5' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='line' id='"+id+"_p12' d='M0 0 70.2268 0.000104987' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 605.727 301.5)'/><path class='line' id='"+id+"_p13' d='M0 0 103.445 59.7807' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 640.945 241.5)'/><path class='line' id='"+id+"_p14' d='M745.067 301.635 639.5 241.5' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='line' id='"+id+"_p15' d='M745.576 419.913 745.5 302.5' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/><path class='line' id='"+id+"_p16' d='M0 0 105.304 62.2697' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(1 0 0 -1 640.5 480.77)'/><path class='line' id='"+id+"_p17' d='M535.5 419.5 639.723 479.94' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='line' id='"+id+"_p18' d='M0 0 1.09627 118.145' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 536.596 301.5)'/><path class='line' id='"+id+"_p19' d='M0 0 70.2268 0.000104987' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 675.727 301.5)'/><path class='line' id='"+id+"_p20' d='M0 0 35.1134 58.4654' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 605.613 302.5)'/><path class='line' id='"+id+"_p21' d='M569.5 360.5 604.921 420.982' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='line' id='"+id+"_p22' d='M0 0 71.6587 0.681365' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(1 0 0 -1 604.5 420.181)'/><path class='line' id='"+id+"_p23' d='M0 0 33.9108 58.2356' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(1 0 0 -1 676.5 418.736)'/><path class='line' id='"+id+"_p24' d='M709.801 360.864 675.5 302.5' stroke='#D9D9D9' stroke-width='1' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/></g></svg>";
	section.style.left=left+"px";
	section.style.top=top+"px";
	section.style.position="absolute";
	container.appendChild(section);
	
}
function addController(id){
	console.log(id);
	var controller = document.createElement("div");
	controller.innerHTML = "<svg width='242' height='243' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='hidden'><defs><clipPath id='"+id+"' ><rect x='519' y='239' width='242' height='243'/></clipPath></defs><g clip-path='url(#clip0)' transform='translate(-519 -239)'><path class='circle' id='"+id+"_p0' d='M520.5 361.5C520.5 295.226 574.226 241.5 640.5 241.5 706.774 241.5 760.5 295.226 760.5 361.5 760.5 427.774 706.774 481.5 640.5 481.5 574.226 481.5 520.5 427.774 520.5 361.5Z' stroke='#D9D9D9' stroke-width='2' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/><path class='clickable' id='"+id+"_p01' d='M0 0 35.3034 59.4016' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(1 0 0 -1 605.5 301.902)'/><path class='clickable' id='"+id+"_p02' d='M675.5 301.248 640.5 242.5' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/><path class='clickable' id='"+id+"_p03' d='M745.803 301.7 675.5 301.5' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='clickable' id='"+id+"_p04' d='M0 0 34.427 57.4176' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 744.927 302.5)'/><path class='clickable' id='"+id+"_p05' d='M710.5 360.5 745.803 419.847' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='clickable' id='"+id+"_p06' d='M675.5 419.5 745.804 419.7' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='clickable' id='"+id+"_p07' d='M0 0 34.9936 59.9928' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(1 0 0 -1 640.5 479.493)'/><path class='clickable' id='"+id+"_p08' d='M640.577 480.899 605.5 420.5' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='clickable' id='"+id+"_p09' d='M0 0 69.0509 0.000104987' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 605.551 420.5)'/><path class='clickable' id='"+id+"_p10' d='M0 0 34.5255 59.702' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 571.026 360.5)'/><path class='clickable' id='"+id+"_p11' d='M570.177 360.697 537.5 301.5' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='clickable' id='"+id+"_p12' d='M0 0 70.2268 0.000104987' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 605.727 301.5)'/><path class='clickable' id='"+id+"_p13' d='M0 0 103.445 59.7807' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 640.945 241.5)'/><path class='clickable' id='"+id+"_p14' d='M745.067 301.635 639.5 241.5' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='clickable' id='"+id+"_p15' d='M745.576 419.913 745.5 302.5' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/><path class='clickable' id='"+id+"_p16' d='M0 0 105.304 62.2697' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(1 0 0 -1 640.5 480.77)'/><path class='clickable' id='"+id+"_p17' d='M535.5 419.5 639.723 479.94' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='clickable' id='"+id+"_p18' d='M0 0 1.09627 118.145' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 536.596 301.5)'/><path class='clickable' id='"+id+"_p19' d='M0 0 70.2268 0.000104987' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 675.727 301.5)'/><path class='clickable' id='"+id+"_p20' d='M0 0 35.1134 58.4654' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(-1 0 0 1 605.613 302.5)'/><path class='clickable' id='"+id+"_p21' d='M569.5 360.5 604.921 420.982' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/>	<path class='clickable' id='"+id+"_p22' d='M0 0 71.6587 0.681365' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(1 0 0 -1 604.5 420.181)'/><path class='clickable' id='"+id+"_p23' d='M0 0 33.9108 58.2356' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd' transform='matrix(1 0 0 -1 676.5 418.736)'/><path class='clickable' id='"+id+"_p24' d='M709.801 360.864 675.5 302.5' stroke='#D9D9D9' stroke-width='8' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/></g></svg>";
	controller.className = "controller";
	
	nav_bar.appendChild(controller);
	activateSVGPaths();
}
function showPath(path_name){
	var path_str = path_name.id;
	var path_str = path_str.substr(-3, 3);
	var control_color = path_name.getAttribute('stroke');
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
	
	path_name.setAttributeNS(null, 'stroke', control_color);
	var lineclassElements = document.getElementsByClassName("line");
	for(var i = 0; i < lineclassElements.length; i++){
		var line_path_str = lineclassElements[i].id
		line_path_str = line_path_str.substr(-3, 3);
		if (line_path_str == path_str){
			
			lineclassElements[i].setAttributeNS(null, 'stroke', pattern_color);
			lineclassElements[i].setAttributeNS(null, 'stroke-width', pattern_width);
		}
	}
}
function activateSVGPaths(){
	var lineclassElements = document.getElementsByClassName("clickable");
	console.log(lineclassElements)
	for(var i = 0; i < lineclassElements.length; i++){
     //console.log(lineclassElements[i].id);
		//lineclassElements[i].setAttributeNS(null, 'stroke', '#4472C4');
		lineclassElements[i].setAttributeNS(null, 'cursor', "pointer");
		lineclassElements[i].setAttributeNS(null, 'onclick',"showPath("+lineclassElements[i].id+")");
		
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
addController("C1");