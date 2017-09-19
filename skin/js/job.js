$(function(){
    function resize(){
        var deviceWidth = document.documentElement.clientWidth>640?640:document.documentElement.clientWidth;
        //alert(deviceWidth);
        document.documentElement.style.fontSize = (deviceWidth/6.4)+'px';
    }
    resize();
    $(window).resize(function(){
        resize();
    });
});
window.onload = function(){
    /*薪资轮播*/
    var ol = document.getElementById("ol");
    var mess = [{
        "name":"赵*远",
        "schooling":"大专",
        "major":"表面组装",
        "employ":"*和软件",
        "salsry":"￥6500",
        "address":"南京"
    },{
        "name":"王*玲",
        "schooling":"本三",
        "major":"工商管理",
        "employ":"南*信息",
        "salsry":"￥6000",
        "address":"南京"
    },{
        "name":"田*",
        "schooling":"本二",
        "major":"资源环境",
        "employ":"武汉**成",
        "salsry":"￥5500",
        "address":"合肥"
    },{
        "name":"周*",
        "schooling":"大专",
        "major":"计算机网络",
        "employ":"苏**商",
        "salsry":"￥7500",
        "address":"南京"
    },{
        "name":"于*洲",
        "schooling":"大专",
        "major":"汽车检修",
        "employ":"集*科技",
        "salsry":"￥6000",
        "address":"杭州"
    },{
        "name":"陈*",
        "schooling":"大专",
        "major":"建筑装饰",
        "employ":"翔*科技",
        "salsry":"￥4000",
        "address":"南京"
    },{
        "name":"符**",
        "schooling":"本三",
        "major":"工商管理",
        "employ":"软*动力",
        "salsry":"￥7500",
        "address":"南京"
    },{
        "name":"相*",
        "schooling":"本二",
        "major":"动画",
        "employ":"软*动力",
        "salsry":"￥6700",
        "address":"南京"
    },{
        "name":"肖*盛",
        "schooling":"大专",
        "major":"电子信息工程",
        "employ":"上海*通",
        "salsry":"￥6000",
        "address":"上海"
    },{
        "name":"邱*",
        "schooling":"本二",
        "major":"土木工程",
        "employ":"中*国际",
        "salsry":"￥5500",
        "address":"南京"
    },{
        "name":"盛*峰",
        "schooling":"本二",
        "major":"材料成型",
        "employ":"中*国际",
        "salsry":"￥7500",
        "address":"南京"
    },{
        "name":"*凡",
        "schooling":"大专3+2",
        "major":"计算机网络",
        "employ":"南京中*软",
        "salsry":"￥4800",
        "address":"南京"
    },{
        "name":"*强",
        "schooling":"本一",
        "major":"包装工程",
        "employ":"中*国际",
        "salsry":"￥7800",
        "address":"南京"
    },{
        "name":"张*",
        "schooling":"大专",
        "major":"电子信息",
        "employ":"南*科技",
        "salsry":"￥5000",
        "address":"南京"
    }];
    for(var i = 0;i<mess.length;i++){
        var li = document.createElement("li");
        li.innerHTML +=
            '<span class="name">'+mess[i].name+'</span>'+
            '<span class="schooling">'+mess[i].schooling+'</span>'+
            '<span class="major">'+mess[i].major+'</span>'+
            '<span class="employ">'+mess[i].employ+'</span>'+
            '<span class="salsry">'+mess[i].salsry+'</span>'+
            '<span class="address">'+mess[i].address+'</span>'	;
        ol.appendChild(li);
    }
    ol.appendChild(ol.children[0].cloneNode(true));
    var salaryNum = 0;
    var salaryTimer = setInterval(salaryFn,10);
    function salaryFn(){
        salaryNum++;
        ol.style.top = -salaryNum + "px";
        if(salaryNum > ol.children[0].offsetHeight*(ol.children.length-10)){
            salaryNum = 0;
        }
    }
    ol.onmouseover = function(){
        clearInterval(salaryTimer);
    }
    ol.onmouseout = function(){
        salaryTimer = setInterval(salaryFn,10);
    }
}