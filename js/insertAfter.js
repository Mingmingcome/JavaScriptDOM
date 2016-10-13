//在现有元素后插入一个新元素
function insertAfter(newElement,targetElement){
	//把目标元素的parentNode属性值保存到变量parent
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		//如果目标元素是parent的最后一个子元素，则用appendChild()即可
		parent.appendChild(newElement);
	}else{
		//如果目标元素不是parent的最后一个子元素
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
