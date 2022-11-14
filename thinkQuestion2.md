JavaScript有哪些数据类型，与其他语言不同的地方在哪里？

​		字符串型（string)、数字（number）、布尔（boolean）、null、undefined以及对象（object）

​		不同点:

​				JS不区分整数值和浮点数值，JS中所有数字均用浮点数值表示

​				字符串常量可以由单引号或双引号括起来,且没有单个字符

​				布尔类型只有两个值，true或false。任意JS的值都可以转为布尔值

​				null值对象值，表示数字、字符串、对象是“无值”的。

​				undefined 它是变量的一种取值，表明没有初始化。

​				js是弱类型语言，var来声明变量，可重复声明变量

有哪些判断数据类型的方法，他们的优缺点是什么？

​				typeof，获取类型，但返回值都是字符串类型的。

​				instanceof 这是一种判断是不是某种类型的方法，后面跟着类型，返回布尔值

​				Object.prototype.toString.call(对象)  返回类型,缺点是太长了

​				A.constructor === B 优点高于第二类，可以判断基本数据类型。

​				

​				