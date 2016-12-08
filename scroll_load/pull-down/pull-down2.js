var page=1; //当前页的页码
var allpage; //总页码，会从后台获取
function showAjax(page){
    $.ajax({
        url:"",
        type:"",
        data:"",
        success:function(data){
            //要执行的内容
            showContent();
            page++;  //页数加1
        }
    })
}
function scrollFn(){
//真实内容的高度
    var pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight);
//视窗的高度
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
//隐藏的高度
    var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(pageHeight - viewportHeight - scrollHeight < 20){//如果满足触发条件，执行
        showAjax(page);
    }
}
$(window).bind("scroll",scrollFn);//绑定滚动事件