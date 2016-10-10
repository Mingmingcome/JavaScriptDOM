//移动元素
function moveElement(elementID, final_x, final_y, interval) {
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	//如果没有clearTimeout，当鼠标在链接上的时候，图片会左右“摇晃” 1px
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) {
		return true;
	}
	if (xpos < final_x) {
		xpos++;
	}
	if (xpos > final_x) {
		xpos--;
	}
	if (ypos < final_y) {
		ypos++;
	}
	if (ypos > final_y) {
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
	//既不能用全局变量（会报错），也不能用局部变量（与clearTimeout没有上下文），所以赋给elem一个属性
	elem.movement = setTimeout(repeat, interval);
	/*
		上面两行也可以这样：（我更喜欢这样,第一个参数是函数名（func),第三个及其后的参数是传入func的参数）
		movement = setTimeout(movement, interval, elemnentID, final_x, final_y, interval);
	*/
}
