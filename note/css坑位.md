### css与scss坑位
* 字体的居中与显示  
&ensp;&ensp;&ensp;&ensp;在进行响应式布局时尽量不要用rem，用px通过媒体查询完成;中文字体的最底部一般相当于英文字母的a、v等；g之类的字母往往要比汉字底；从绝对意义上来看`line-height`与`height`值相等中文字体也未必上下居中。