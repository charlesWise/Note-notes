Boolean(!this.props.noArrow)
sceneConfigs: Navigator.SceneConfigs.PushFromRight //通过这个参数可以修改界面在导航时候切换的动画。
router.push(Routes.COMMON_PDF_READER, {
    title: item.name,
    passProps: {
        url: item.url,
    },
    sceneConfigs : Navigator.SceneConfigs.PushFromRight,
})
global.LOCAL_FUND_TYPE_LIST //类似window
item.annual_rate.split('.')[0]
parseFloat(item.collect_process, 10)
Array.isArray(fundInfo.yield)
router.push(Routes.USERLOGIN, {
    passProps: {
        fromRoute: router.currentRoute,
    }
});
<ITextInput
    textStyle = {[styles.textRemarkInput, styles.textAmount]}
    onChangeText = {(amount) => {
        this.setState({
            amount: amount
        });
    } }
    value={this.state.amount} />
router.resetTo(Routes.MAIN, {
    passProps: {
        selectedTab: 3
    }
});
let userBaseInfo = Object.assign(iResponseUser.responseData.data, {
    userToken: iResponse.responseData.user_token, // 登录token
    userMobile: this.state.mobile, // 用户手机号
});

<ITextInput
    textStyle = {[styles.textInput, {width: Base.layouts.vSeparations.v220}]}
    placeholder="点击搜索产品名称"
    onChangeText = {(fund_name_search) => {
        this.setState({
            fund_name_search: fund_name_search,
        });
        this._searchFundList(fund_name_search);
    } }
    onFocus = {() => {
        this.state.is_focus = true;
    } }
    value = {this.state.fund_name_search}
/>


var str = "我们都是好孩子";
undefined
str.split('都是');
["我们", "好孩子"]
<Text style = {styles.pullDownText}>
{itemArr[0]}
<Text style = {styles.pullDownTextColor}>{this.state.fund_name_search}</Text>
{itemArr[1]}
</Text>

var keys = Object.keys(params);
var o = {
    mobile: 13890890989,
    type: 'REGISTER',
    typeName: '注册',
}
undefined
Object.keys(o)
["mobile", "type", "typeName"]

Array.isArray(this.state.order_amount_detail) && Boolean(this.state.order_amount_detail.length) &&
this.state.order_amount_detail.map((detail, index, arr) => {
    return (
    <View key = {'detail' + index}>
    <View style={styles.item}>
    <Text>{detail.title}</Text>
    <Text>¥{detail.amount}万</Text>
    </View>
    {
        Boolean(index !== this.state.order_amount_detail.length - 1) &&
        <View style={[CommonStyle.lineStyle, styles.line]} />
    }
    </View>
    );
})

let newUserInfo = Object.assign(this.state.userInfo, { address: this.state.address });
// 更新本地用户数据
CM.post(new IRequest(APIConstants.UPDATE_USER_INFO, newUserInfo, this), () => {
    router.replacePreviousAndPop(Routes.USERDATA);
});

******************************************************************
var REQUEST_PREFIX = AppInfo.API_HOST+ServiceAPI.verifyCode;

class ValidCode extends Component {

    constructor(...props) {
    super(...props);

    this.state = {
    codeUri : REQUEST_PREFIX+'?key='+this.props.type+'&t='+(new Date().getTime())
};
}

    _refreshCode() {
    this.setState({
    codeUri : REQUEST_PREFIX+'?key='+this.props.type+'&t='+(new Date().getTime())
});
}

    render() {
    return (
    <View style={styles.wapper}>
    <Image style={styles.code} source={{uri: this.state.codeUri}} resizeMode='stretch'/>
    <TouchableOpacity
    activeOpacity={1}
    type = {this.props.type}
    onPress={this._refreshCode.bind(this)}
    >
    <Text style={styles.refreshText}>刷新字符</Text>
    </TouchableOpacity>
    </View>
    );
}
}
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
 