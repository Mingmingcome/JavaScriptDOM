### 第7章 动态创建标记
#### 本章内容
传统技术：document.write和innerHTML

深入剖析DOM方法：createElemnt、createTextNode、appendChild和insertBefore.

#### 7.1
##### 7.1.1 document.write
即使把document.write语句挪到外部函数里，也还是需要在标记的<body>部分使用script标签才能调用那个函数。

结论：避免<body>部分乱用script标签，避免使用document.write方法。
##### 7.1.2 innerHTML属性
innerHTML属性无细节可言。要想获得细节，就必须使用DOM方法和属性。标准化的DOM像手术刀一样精细，innerHTML属性就像一把大锤一样粗放。
利用这个技术无法区分“出入一段HTML内容”和“替换一段HTML内容”。

#### 7.2 DOM方法
DOM是一天双车道。不仅可以获取文档的内容，还可以更新文档的内容。如果你改变了DOM节点树，文档在浏览器的呈现效果就会发生变化。
在浏览器看来，DOM节点树才是文档。
##### 7.2.1 createElement方法
语法：document.createElement(nodeName)

创建出来的是：游荡在JavaScript世界里的一个孤儿（我只是喜欢这句话）
##### 7.2.2 appendChild方法（成为现有节点的一个子节点）
语法：parent.appendChild(Child)

Child不再是这个世界的孤儿，他找到了他的父节点parent
##### 7.2.3 createTextNode方法
创建文本节点（nodeType=3）

#### 7.3 重回图片库
##### 7.3.1 在已有元素前插入一个新元素
insertBefore()方法
语法：parentElement.insertBefore(newElement,targetElement)
##### 7.3.2 在现有元素后插入一个新元素
insertAfter方法（DOM没有提供这个方法）

自己实现：
<pre><code>function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefor(newElement,targetElement.nextSibling);
	}
}</code></pre>

##### appendChild()和insertBefore()
看了jQuery的append()、prepend()、before()和after()用法的时候，比较了一下他们的区别：

append()、prepend()添加的是子节点，before()、after()添加同级元素，位置就按照他们的字面意思插入。
