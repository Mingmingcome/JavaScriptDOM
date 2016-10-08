function displayAbbreviations(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode)
		return false;
	//取得所有缩略词
	var abbrs = document.getElementsByTagName("abbr");
	if(abbrs.length < 1) return false;
	var defs = new Array();
	//遍历所有缩略词
	for (var i = 0; i < abbrs.length; i++) {
		var current_abbr = abbrs[i];
		if(current_abbr.childNodes.length < 1)
			continue;
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	//创建定义列表
	var dlist = document.createElement("dl");
	//循环获得定义内容
	for(key in defs){
		var definition = defs[key];
		//创建定义标题
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把它们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if(dlist.childNodes.length < 1)
		return false;
	//创建标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//把标题添加到页面主体
	document.body.appendChild(header);
	//把定义列表添加到页面主体
	document.body.appendChild(dlist);
}

function displayCitations(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode)
		return false;
	//取得所有引用
	var quotes = document.getElementsByTagName("blockquote");
	//遍历引用
	for(var i=0;i<quotes.length;i++){
		//如果没有cite属性，继续循环
		if(!quotes[i].getAttribute("cite"))
			continue;
		//保存cite属性
		var url = quotes[i].getAttribute("cite");
		//取得引用中的最后一个元素节点
		var quoteChildren = quotes[i].getElementsByTagName("*");
		//如果没有元素节点，继续循环
		if(quoteChildren.length < 1)
			continue;
		//取得引用中的最后一个元素节点
		var elem = quoteChildren[quoteChildren.length-1];
		//创建标记
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		//把标记添加到引用中的最后一个元素节点
		elem.appendChild(superscript);
	}
}

function displayAccesskeys(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode)
		return false;
	//取得文档中的所有链接
	var links = document.getElementsByTagName("a");
	//
	var akeys = new Array();
	//
	for(var i=0;i<links.length;i++){
		var current_link = links[i];
		//
		if(!current_link.getAttribute("accesskey"))
			continue;
		//
		var key = current_link.getAttribute("accesskey");
		//
		var text = current_link.lastChild.nodeValue;
		//
		akeys[key] = text;
	}
	//
	var list = document.createElement("ul");
	//
	for(key in akeys){
		var text = akeys[key];
		//
		var str = key + ": " + text+ " " ;
		//
		var item = document.createElement("li");
		var item_text = document.createTextNode(str);
		item.appendChild(item_text);
		//
		list.appendChild(item);
	}
	//
	var header = document.createElement("h3");
	var header_text = document.createTextNode("Accesskey");
	header.appendChild(header_text);
	//
	document.body.appendChild(header);
	//
	document.body.appendChild(list);
}

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccesskeys);