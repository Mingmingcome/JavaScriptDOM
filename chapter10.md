### 第10章 用JavaScript实现动画效果
本章基础知识

	1. 动画基础知识
	2. 用动画丰富网页的浏览效果

### 10.1 动画基础知识
简单的说，动画就是让元素的位置、样式随着时间而不断地发生变化。
#### 10.1.1 位置
position属性的合法值有static、fixed、relative和absolute四种。

static：有关元素将按照它们在标记里出现的先后顺序出现在浏览器窗口里。

relative：position属性等于relative的元素还可以（通过应用float属性）从文档的正常显示顺序里脱离出来（我之前一直以为是什么元素都可以float的，看到这一句我才知道，那个float的前提是：position:relative)

absolute：如果把某个元素的position属性设置为absolute，我们就可以把它摆放在容纳它的“容器”的任何位置。这个容器要么是文档本身，要么是一个有着fixed或absolute属性的父元素。（absolute元素参照物原来是这个）

<pre><code>function positionMessage(){}
function moveMessage(){}</code></pre>


#### 10.1.2 时间
JavaScript函数setTimeout能够让某个函数在经过一段预定的时间之后才开始执行。
var timeoutID = window.setTimeout(func,delay,[param1,param2,...]);
var timeoutID = window.setTimeout(code,delay);
说明：

	1. timeoutID 是该延时操作的数字ID, 此ID可以用来作为window.clearTimeout方法的参数.

	2. func 是你想要在delay毫秒之后执行的函数.

	3. code 在第二种语法,是指你想要在delay毫秒之后执行的字符串形式的代码 
	(使用该语法是不推荐的, 字符串会在全局作用域内被解释执行,
	所以当setTimeout()函数执行完毕后,字符串中的变量不可用.)

	4. delay 是延迟的毫秒数 (一秒等于1000毫秒),函数的调用会在该延迟之后发生.
	但是实际的延迟时间可能会稍长一点.

	5. 需要注意的是,IE不支持第一种语法中向延迟函数传递额外参数的功能。

（原来setTimeout是这样用的，我还以为就是简简单单地过了一段时间就去做一件事）
#### 10.1.3 时间递增量
#### 10.1.4 抽象
<pre><code>function moveMessage(){} => 
function moveElement(elementID,final_x,final_y,interval){}</code></pre>
### 10.2 实用的动画
>除非浏览器允许用户“冻结”移动着的内容，否则就应该避免让内容在页面中移动。如果页面上有移动着的内容，就应该用脚本或插件的机制允许用户冻结这种移动或动态更新行为。

问题的关键在于用户能不能控制，解决的方法：根据用户行为移动一个页面元素可能起到增强网页的效果。
#### 10.2.1 提出问题
当用户把鼠标指针悬停在其中的某个链接上时，我们想用一种先睹为快的方式告诉用户链接要把他们带往何方。
<pre><code>list.html</code></pre>
沿用图片库案例中的脚本——只需把每个链接上的事件处理函数从click改为onmouseover。缺点：图片显示不够流畅
#### 10.2.2 解决问题

	1. 为所有的预览图片生成为一张“集体照”形式的图片。
	2. 隐藏这张“集体照”图片的绝大部分。
	3. 当用户把鼠标指针悬停在某个链接的上方是，只显示这张“集体照”图片的相应部分。

#### 10.2.3 CSS
overflow属性：
visible：不裁剪溢出的内容。
hidden：隐藏溢出的内容。
scroll：显示滚动条。
auto：只在确实发生溢出时才显示滚动条。
#### 10.2.4 JavaScript

<pre><code>function prepareSlideshow(){}</code></pre>
#### 10.2.5 变量作用域问题
setTimeout返回值，既不能使用全局变量，也不能用局部变量。我们需要一种介乎它们二者之间的东西，需要一个只与正在被移动的那个元素有关的变量。
<pre><code>element.property = value</code></pre>
#### 10.2.6 改进动画效果
<pre><code>Math.ceil(向上取整) Math.floor(向下取整) Math.round(四舍五入)</code></pre>
#### 10.2.7 添加安全检查
<pre><code>if(!elem.style.left){
  elem.style.left = "0px";
}
if(!elem.style.right){
  elem.style.right = "0px";
}</code></pre>

#### 10.2.8 生成HTML标记

### 10.3 小结
