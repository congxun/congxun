$(document).ready(function() {  $(function(){  });

//操作DOM节点
    //插入
    $('input:eq(0)').click(function(){
        $('.node ul').append("<li>append</li>");
    });
    $('#appendTo').click(function(){
        $("<li>我是appendTo</li>").appendTo('.node ul');
    });
    $('#prepend').click(function(){
        $('.node ul').prepend("<li>prepend</li>");
    });
    $('#prependTo').click(function(){
        $("<li>prependTo</li>").prependTo('.node ul');
    });
    $('#after').click(function(){
        $('.node ul').after("<p>after</p>");
    });
    $('#insertAfter').click(function(){
        $("<p>insertAfter</p>").insertAfter('.node ul');
    });
    $('#before').click(function(){
        $('.node ul').before("<p>before</p>");
    });
    $('#insertBefore').click(function(){
        $("<p>insertBefore</p>").insertBefore('.node ul');
    });

    //复制
    $('#clone').click(function(){
        $('.node ul li:first').clone().appendTo('.node ul');
    });

    //替换
    $('#replaceWith').click(function(){
        $(".node ul li:last").replaceWith('<li>replaceWith</li>');
    });

    //删除
    $('#remove').click(function(){
        $('.node ul li:eq(0)').remove();
    });

//操作css样式
    $('#addClass').click(function(){
        $('.node li[title=orange]').addClass('color text');
    });
    $('#removeClass').click(function(){
        $('.node li[title=orange]').removeClass('text');
    });
    $('#toggleClass').click(function(){
        $('.node li:even').toggleClass('color');
    });

//attr操作
    var a = $('.link');
    show();
    $('#target').click(function(){
        a.attr('target','_blank');
        show();  
    });
    $('#href').click(function(){
        a.attr({'href':'http://www.dlut.edu.cn'});
        show();
    });

    function show(){
        $('.target-val').html(a.attr('target') || '_self');
        $('.href-val').text(a.attr('href'));
    }

// 事件和动画

    //toggle
    $('#toggle').on('click', function() {
        $('.toggle').toggle(1000);
    });

    //fadeIn  fadeOut
    var fadeBox = $('.fade-box');
    $('#fadein').click(function() {
        fadeBox.fadeIn('fast');
    });
    $('#fadeout').click(function() {
        fadeBox.fadeOut(3000);
    });

    //animate
    var moveBox = $('.move-box');
    $('#move-box').bind('click', function(){   	
    	moveBox.animate({left:'200px'},5000);
    	moveBox.animate({width:'350px',opacity:'0.4'},'slow');
    });
    //.stop(stopAll, goToEnd);
    $('#stop').bind('click', function(){
        moveBox.stop();
    });

    //chaining
    $('#chain').click(function(){
        $('.chain').css('color','red').slideUp(2000).slideDown(2000);
    });

    var panel = $('#panel');
    panel.click(function(){
        //create another four button
        $('<br><input type="button" class="panel-btn" value="click me" />'+
            '<input type="button" class="panel-btn" value="triggle click" />'+
            '<input type="button" class="panel-btn" value="detach handle" />'+
            '<input type="button" class="panel-btn" value="show/hide text" />').insertAfter(panel);
    
        btnEvent();
    });
    
    function btnEvent(){
        $('.panel-btn')
        .eq(0).click(function(){
            alert('you clicked me !');
        }).end()
        .eq(1).click(function(){
            $('.panel-btn:eq(0)').trigger('click');
        }).end()
        .eq(2).click(function(){
            $('.panel-btn:eq(0)').unbind('click');
        }).end()
        .eq(3).click(function(){
            $('.panel').toggle();
        });
    }
    
    //mouse
    var x=10;
    var y=20;
    $('#photos a.tooltip').mouseover(function(e){
        this.myTitle = this.title;
        this.title = '';
        var imgTitle = this.myTitle?'<br/>'+this.myTitle:'';
        var tooltip = '<div id="tooltip">'+'<img src="'+this.href+'" alt="放大提示" />'+imgTitle+'</div>';
        $('#photos').append(tooltip);
        $('#tooltip').css({
            'top':(e.pageY+y)+'px',
            'left':(e.pageX+x)+'px'
        }).show();

    }).mouseout(function(e){
        this.title = this.myTitle;
        $('#tooltip').remove();
    }).mousemove(function(e){
        $('#tooltip').css({
            'top':(e.pageY+y)+'px',
            'left':(e.pageX+x)+'px'
        });
    });


    //登录
    var login = $('#login');
    var shade = $('#shade');
    center(login);
    $(window).resize(function(){
        center(login);
    });
    $(window).scroll(function(){
        center(login);
    })

    $('#header .login').click(function(){
        center(login);
        // login.css('display','block');
        shade.show();
        login.show();
    });

    $('#login .close').bind('click', function(){
        // login.css('display','none');
        shade.hide();
        login.hide();
    });


    //百度分享
    var share = $('#share');
    //初始化位置
    share.css('top',($(window).height()-share.height())/2+$(document).scrollTop());
    //百度分享收缩效果
    $('#share').hover(function() {
        $(this).animate({left:0}, 400,'swing');
    }, function() {
        $(this).animate({left: -211});
    });
    $(window).resize(function(){
        share.css('top',($(window).height()-share.height())/2+$(document).scrollTop());
    });
    $(window).scroll(function(){
        share.css('top',($(window).height()-share.height())/2+$(document).scrollTop());    
    });

    //遮罩
    $('#shade').css({height:$(document).height(),width:$(document).width()});
    $(window).resize(function(){
        $('#shade').css({height:$(document).height(),width:$(document).width()});
    });
});


// 元素位于可视区中央
function center(element){
    var eleWidth = element.width();
    var eleHeight = element.height();
    var top = ($(window).height()-eleHeight)/2+$(document).scrollTop();
    var left = ($(window).width()-eleWidth)/2+$(document).scrollLeft();
    element.css({top:top,left:left});
}
