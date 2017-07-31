/*创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.

 给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}),
 而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一的元素组成的集合
 (A △ B = C = {1, 4}).
 对于传入的额外集合 (如 D = {2, 3}),
 你应该安装前面原则求前两个集合的结果与新集合的对等差分集合
 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

 */


/*新知识点
*
*   Array.reduce()
*   arr3 = arr1.concat(arr2)
*   Array.from()
*
*
*
* */


function sym(args) {
    var a = Array.from(arguments);
    var temp = a.reduce(function(pre,now,index,arr){
        var b = pre.filter(function(item){
            return now.indexOf(item)<0;
        });
        var c = now.filter(function(item){
            return pre.indexOf(item)<0
        });
        return b.concat(c);
    });
    var b= temp.filter(function(item,index){
        return temp.indexOf(item) ===index;
    });
    console.log(b);
    return b;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
