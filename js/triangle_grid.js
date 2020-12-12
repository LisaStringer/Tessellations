// JavaScript Document
var container = document.getElementById("container");
var nav_bar = document.getElementById("nav_bar");
function createPattern(){
	var left_calc = 10;
	var top_calc = 10;
	var start_shape = "UP";
	for (t = 0; t <= 4; t++) {
		if (t%2==0){
			console.log(t+": EVEN");
			start_shape = "UP"
		}else{
			start_shape="DOWN"
		}
	for (n = 0; n <= 10; n++) { 
		addSection("_"+t+"_"+n, top_calc, left_calc, start_shape);
		//console.log("clip_"+t+"_"+n)
		left_calc = left_calc + 108;
		//console.log(left_calc);
	}
		top_calc = top_calc + 98;
		if (left_calc == 1198){
			//left_calc = -44;
			left_calc = 10;
		}else{
			left_calc = 10;
		}
		
	}
	//addSection("clip0", 10, 0);
	//addSection("clip1", 10, 210);
	//addSection("clip1", 10, 420);
	activateSVGPaths();
}
function addSection(id, top, left, start){
	//console.log(id);
	
	var triangle_up = document.createElement("div");
	triangle_up.innerHTML = "<svg width='118' height='102' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='hidden'><defs><clipPath  id='clip_U"+id+"' ><rect x='690' y='236' width='118' height='102'/></clipPath></defs><g clip-path='url(#clip0)' transform='translate(-690 -236)'><path id='fill_U"+id+"' class='hover' d='M693.5 336.5 749 240.5 804.5 336.5Z' stroke='#2F528F' stroke-width='3' stroke-miterlimit='8' stroke-dasharray='3 3' fill='#FFFFFF' fill-rule='evenodd'/></g></svg>";
	var triangle_down = document.createElement("div");
	triangle_down.innerHTML = "<svg width='119' height='102' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='hidden'><defs><clipPath  id='clip_D"+id+"' ><rect x='745' y='237' width='119' height='102'/></clipPath></defs><g clip-path='url(#clip0)' transform='translate(-745 -237)'><path id='fill_D"+id+"' class='hover' d='M0 96 55.5 0 111 96Z' stroke='#2F528F' stroke-width='3' stroke-miterlimit='8' stroke-dasharray='3 3' fill='#FFFFFF' fill-rule='evenodd' transform='matrix(1 0 0 -1 749.5 335.5)'/></g></svg>";
	
	var triangle_up_hit = document.createElement("div");
	triangle_up_hit.id="hit_U"+id;
	triangle_up_hit.className="hit_area"
	

	var triangle_down_hit = document.createElement("div");
	triangle_down_hit.id="hit_D"+id;
	triangle_down_hit.className="hit_area"
	triangle_up_hit.style.left=left+32+"px";
	triangle_up_hit.style.top=top+50+"px";
	triangle_down_hit.style.left=left+85+"px";
	triangle_down_hit.style.top=top+5+"px";
	triangle_up.style.left=left+"px";
	triangle_down.style.left=left+52+"px";
	
	if(start=="DOWN"){
	triangle_up_hit.style.left=left+85+"px";
	triangle_down.style.left=left+"px";
	triangle_up.style.left=left+52+"px";
	triangle_up_hit.style.top=top+50+"px";
	triangle_down_hit.style.left=left+32+"px";
	triangle_down_hit.style.top=top+5+"px";
	}
	triangle_up.style.top=top+"px";
	triangle_up.style.position="absolute";
	triangle_down.style.top=top+"px";
	triangle_down.style.position="absolute";
	
	container.appendChild(triangle_up);
	container.appendChild(triangle_down);
	container.appendChild(triangle_up_hit);
	container.appendChild(triangle_down_hit);
	
}

function showFill(fill_area_id){
	
	var pattern_path_id = fill_area_id.id
	var	top_num = pattern_path_id.substr(7, 1);
	
	top_num = Number(top_num)
	var left_num = pattern_path_id.substr(9, 2);
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
	
	//if D calculate from center
	
	//var path = document.getElementById("fill"+path_substr)
	
	fill_area_id.setAttributeNS(null, 'fill', "#4472C4");
	
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
function activateSVGPaths(){
	var lineclassElements = document.getElementsByClassName("hit_area");
	
	for(var i = 0; i < lineclassElements.length; i++){
     //console.log(lineclassElements[i].id);
		//lineclassElements[i].setAttributeNS(null, 'stroke', '#4472C4');
		var hit_area_id = lineclassElements[i].id;
		var fill_area_id = "fill"+hit_area_id.substr(3, 7);
		console.log("HIT AREA ID: "+fill_area_id)
		//var fill_area=document.getElementById(fill_area_id)
		lineclassElements[i].setAttributeNS(null, 'cursor', "hand");
		lineclassElements[i].setAttributeNS(null, 'onclick',"showFill("+fill_area_id+")");
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

//addController("C1");