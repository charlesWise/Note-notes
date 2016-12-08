// 无限下拉
// 所有配制项都在列表的ul上
;(function(){
    var $page = $('#jInfinite'),
        bodyRemainH = 0,
        startY = 0,
        endY = 0,
        $loadding = $('#loaddingList'),
        tmpl = '<li><h1>编号：{id}</h1><div _id="{id}" class="box drawImgCenter"><img src="{img}" alt=""></div><div class="praise"><span class="heart">赞：{num}</span><i class="icon_praise_xin"></i></div></li>',
        isStart, $curContent;

    if(!$page.length) return;
    $page.on('touchstart', function(e) {
        // 找出显示的
        $curContent = $('.jInfiniteContent').filter(function (index) {
            if($(this).css('display') != 'none' && $(this.parentNode).css('display') != 'none') {
                return this;
            }
        });
        var isHasNextPage = $curContent.attr('_continue') == 1;
        if(!isHasNextPage || !$curContent.length) return;
        isStart = true;
        bodyRemainH = $page[0].scrollHeight - $page[0].scrollTop - $page.height();

        startY = e.targetTouches[0].pageY;
        endY = 0;
    })
    $page.on('touchmove', function(e) {
        if(!isStart) return;
        endY = e.targetTouches[0].pageY;
    })
    // android微信不直接touchend,,用touchcancel替代
    $page.on('touchend touchcancel', function(e) {
        if(!isStart) return;
        isStart = false;
        var diff = startY - endY;
        if(bodyRemainH - diff <= 20 && endY) {
            getAjax();
        }
    })

    // 拉取数据
    function getAjax() {
        var pararms = {act: $curContent.attr('_act'), p: ($curContent.attr('_num') || 2)};
        $loadding.show();
        $page[0].scrollTop = $page[0].scrollTop + $loadding.height() + 50;
        $.get('/Mobile/ActMonkey/monkeyList', pararms, function(data) {
            if(data.boolen == 1) {
                createItems(data.data.list);
                $curContent.attr('_num', ++ pararms.p);
                $curContent.attr('_continue', data.data.continue ? 1: 0);
            } else {
                alert(data.message);
            }
            $loadding.hide();
        }, 'json')
    }

    // 生成dom
    function createItems(list) {
        var str = '';
        list.forEach(function(v) {
            str += tmpl.replace(/\{([^\}]+)\}/g, function(all, item) {
                return v[item];
            })
        });
        $curContent.append(str);
    }
}());