//共享onload事件：把多个函数绑定到window.onload上
function addLoadEvent(func) {
	//把现有的window.onload事件处理函数的值存入变量oldonload
	var oldonload = window.onload;
	if(typeof window.onload != "function"){
		//如果window.onload还没有绑定任何函数，就像平时那样把新函数添加给它
		window.onload = func;
	}else{
		//如果已经绑定了一些函数，就把新函数追加到现有指令的末尾
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
