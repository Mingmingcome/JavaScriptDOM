### 第9章 CSS-DOM
本章内容

	1. style属性
	2. 如何检索样式
	3. 如何改变样式

### 9.1 三位一体的网页
网页是由以下三层信息构成的一个共同体：

	1. 结构层
	2. 表示层
	3. 行为层

#### 9.1.1 结构层
网页的结构层（structural layer）由HTML或XHTML之类的标记语言负责创建。
#### 9.1.2 表示层
表示层（presentation layer）由CSS负责完成。CSS描述页面内容应该如何呈现。
#### 9.1.3 行为层
行为层（behavior layer）负责内容应该如何响应事件这一问题。这是JavaScript语言和DOM主宰的领域。

网页的表示层和行为层总是存在的，即使未明确地给出任何具体的指令也是如此。Web浏览器将应用它的默认样式和默认事件处理函数。
#### 9.1.4 分离
	1. 使用（X）HTML去搭建文档的结构
	2. 使用CSS去设置文档的呈现效果
	3. 使用DOM脚本去实现文档的行为

### 9.2 style属性
文档的每个元素节点还都有一个属性style。style属性包含着元素的样式，查询这个属性将返回一个对象而不是一个简单的字符串。样式都存在这个style对象的属性里：
<pre><code>element.style.property</code></pre>

#### 9.2.1 获取样式

当你需要引用一个中间带减号的CSS属性时，DOM要求你用驼峰命名法。

DOM在表示样式属性时采用的单位并不总是与它们在CSS样式表里的设置相同。如：
<pre><code>style = "color: #999999;"
而返回的是
element.style.color = "rgb(153,153,153)";</code></pre>
DOM能够解析像font这样的速记属性。

但……style属性只能返回内嵌样式。
#### 9.2.2 设置样式
style对象的各个属性就都是可读写的。我们不仅可以通过某个元素的style属性去获取样式，还可以通过它去更新样式。

element.style.property = value
style对象的属性值永远是一个字符串。style对象的属性的值必须放在引号里，单引号或双引号均可：
<pre><code>element.style.color = "black"
or
element.style.color = 'black'</code></pre>	
### 9.3 何时该用DOM脚本设置样式
就像你不应该利用DOM去创建重要的内容那样，你也不应该利用DOM为文档设置重要的样式。however，在使用CSS不方便的场合，还是可以利用DOM对文档的样式做一些小的增强，增强，增强 
#### 9.3.1 根据元素在节点树里的位置来设置样式
<pre><code>function styleHeaderSibling();</code></pre>
#### 9.3.2 根据某种条件反复设置某种样式
<pre><code>function stripeTable();</code></pre>
#### 9.3.3 响应事件
<pre><code>function highlightRows();</code></pre>

### 9.4 className属性
与其使用DOM直接改变某个元素的样式，不如通过JavaScript代码区更新这个元素的class属性。
<pre><code>function addClass(element,value);</code></pre>
获取和设置className方法：
<pre><code>element.getAttribute("class");
element.setAttribute("class","intro");
or
element.className;
element.className = value;</code></pre>

#### 对函数进行抽象
把一个非常具体的东西改进为一个较为通用的东西的过程就做抽象（abstraction）。
<pre><code>function styleHeaderSibling()</code></pre>改为<pre><code>function styleElementSibling(tag,theclass)</code></pre>

### 9.5 小结
