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

//准备占位符图片和其描述
function preparePlaceholder() {
	//对象检测：这个方法存在与否
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	//检测placeholder这个元素是否存在
	if(!document.getElementById("imagegallery")) return false;
	//创建img元素和其属性
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","https://github.com/Mingmingcome/JavaScriptDOM/blob/master/images/placeholder.jpg");
	placeholder.setAttribute("alt","my image gallery");
	//为了居中显示在js中设置了CSS代码，不知有没有不合这本书一直说的结构、表示、行为的分离
	placeholder.setAttribute("style","position: relative; margin-left: 50%; left: -250px; border-radius: 250px;")
	//创建p元素和其属性
	var description = document.createElement("p");
	description.setAttribute("id","description");
	//居中
	description.setAttribute("style","text-align:center;")
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}

//绑定点击事件
function prepareGallery() {
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i=0; i<links.length; i++){
		links[i].onclick = function(){
			return showPic(this);
		}
		links[i].onkeypress = links[i].onclick;
	}
}

//显示图片
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return true;
	//设置图片源
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	//添加描述
	if(!document.getElementById("description")) return false;
	if(whichpic.getAttribute("title")){
		var text = whichpic.getAttribute("title");
	}else{
		var text = "";
	}
	var description = document.getElementById("description");
	if(description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text;
	}
	return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
