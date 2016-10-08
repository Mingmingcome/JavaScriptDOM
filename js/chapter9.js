//下一个元素节点
function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}

//为h1元素的下一个同辈元素声明样式
function styleHeaderSiblings(){
	if(!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName("h1");
	var elem;
	for(var i=0; i<headers.length;i++){
		elem = getNextElement(headers[i].nextSibling);

		// addClass(elem,"intro");
		elem.style.fontWeight = "bold";
		elem.style.fontSize = "1.2em";
	}
}

//为表格添加斑马线效果
function striptTables(){
	if(!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	var odd,rows;
	for(var i=0; i<tables.length; i++){
		odd = false;
		rows = tables[i].getElementsByTagName("tr");
		for(var j=0; j<rows.length; j++){
			if(odd == true){
				//addClass(rows[j],"odd");
				rows[j].style.backgroundColor = "#ffc";
				odd = false;
			}else{
				odd = true;
			}
		}	
	}
}

//响应事件
function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var  rows = document.getElementsByTagName("tr");
	for(var i=0; i<rows.length; i++){
		rows[i].onmouseover = function(){
			this.style.fontWeight = "bold";
		}
		rows[i].onmouseout = function(){
			this.style.fontWeight = "normal";
		}
	}
}

//给一个元素追加新的class
function addClass(element,value){
	if(!element.className){
		element.className = value;
	}else{
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

addLoadEvent(styleHeaderSiblings);
addLoadEvent(striptTables);
addLoadEvent(highlightRows);