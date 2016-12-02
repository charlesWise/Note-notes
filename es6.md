******************************************************************
`html结构之类的`  ${变量名}

Destructuring 解构

let cat = 'ken';
let dog = 'lihua';
let zoo = {cat: cat, dog: dog};
ES6:
let cat = 'ken';
let dog = 'lihua';
let zoo = {cat, dog};
反过来:
let zoo = {cat: cat, dog: dog};
let {cat, dog} = zoo;
console.log(cat, dog);

function animate(type) {
    type = type || 'cat';
}
ES6:
function animate(type= 'cat') {

}

function animates(...types) {
    console.log(types);
}
animates('cat', 'dog', 'fish'); //['cat', 'dog', 'fish']


ES6 module高级用法:
//content.js
export default 'A cat'
export function say() {
    return 'Hello!';
}
export const type= 'dog';

//index.js要调用content.js
import animate, {say, type} from './content';   //此处的animate 是default默认的值'A cat',方法/变量对外接口的名称要对应相同
let says= say();
console.log(${says}  ${type}  ${animate});

//as 修改对外接口名字的变量名   此处改type为animateType
import animate, {say, type as animateType} from './content';
let says= say();
console.log(${says}  ${animateType}  ${animate});

//(*)星号指定一个对象,所有输出的值都加载到这个对象上
import animate, * as content from './content';
let says= content.say();
console.log(${content.type}  ${says}  ${animate});

******************************************************************
let input
<input ref={v => {
          input = v
        }} />
console.log(input.value)    //就是input的值
******************************************************************
function getKey(enabled) {
    retrue: enabled;
}
//bad不推荐
const obj = {
    id: 5,
    name: 'San Francisco',
};
obj[getKey('enabled')] = true;

//good
const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
};
******************************************************************
const obj = [name: 'chen', age: 18, sex: '男'];
[...items] = obj;
console.log(items);  //[name: 'chen', age: 18, sex: '男']
******************************************************************
//bad
function handThings(opts) {
    opts = opts || {};
}
//good
function handThings(opts = {}) {
    
}
******************************************************************