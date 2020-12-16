// JavaScript Document
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  //ev.dataTransfer.setData("text", ev.target.id);
	console.log("drag")
}

function drop(ev, fill_area_id) {
  ev.preventDefault();
  //var data = ev.dataTransfer.getData("text");
  //ev.target.appendChild(document.getElementById(data));
	
	var fill_area_id = "fill"+ev.target.id.substr(3, 7);
	console.log("TARGET: "+fill_area_id)
	showFill(fill_area_id)
}