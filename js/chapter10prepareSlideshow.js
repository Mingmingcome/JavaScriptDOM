//预览
function prepareSlideshow() {
	//
	if (!document.getElementsByTagName)  return false;
	if (!document.getElementById) return false;
	//
	if (!document.getElementById("linklist")) return false;
	if (!document.getElementById("preview")) return false;
	//
	var preview = document.getElementById("preview");
	preview.style.position = "absolute";
	preview.style.left = "0px";
	preview.style.top = "0px";
	//
	var list = document.getElementById("linklist");
	var links = list.getElementsByTagName("a");
	//
	links[0].onmouseover = function() {
		moveElement("preview", -100, 0, 10);
	}
	links[1].onmouseover = function() {
		moveElement("preview", -200, 0, 10);
	}
	links[2].onmouseover = function() {
		moveElement("preview", -300, 0, 10);
	}
}

addLoadEvent(prepareSlideshow);