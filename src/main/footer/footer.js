$(document).ready(function(){

    let wid = $('.partners li').outerWidth();
    let num = $('.partners li').length;
    let totalWid = wid*num;
    $('.partners').width(totalWid);
    let mleft = 0;


    let timer = setInterval(move,20);

    rwd_browser();
    $(window).on('resize', rwd_browser);

    $('.banner').on('mouseenter', function(){
        clearInterval(timer);
    });

    $('.banner').on('mouseleave', function(){
        timer = setInterval(move, 20);
    });

    function rwd_browser(){
        let browser_wid = $(this).width();
        
        if(browser_wid >= 1180) get_browser(5);
        if(browser_wid > 639 && browser_wid <= 1179) get_browser(4);
        if(browser_wid <= 639) get_browser(2);

    }


    function move(){ 
        mleft -=2;

        if(mleft < -wid){
            $('.partners li').first().appendTo('.partners');
            mleft = 0;
        }
        $('.partners').css({marginLeft : mleft});
    }


    function get_browser(num){
        
        $('.partners').css({marginLeft : (-100/num)+'%'});
        
        $('.btnPrev, .btnNext').off();
            
        $('.btnPrev').on('click', function(e){
            e.preventDefault();

            $('.partners').animate({marginLeft : '0%'}, 300, function(){
                $(this).children('li').last().prependTo(this);
                $(this).css({marginLeft : (-100/num)+'%'});
            });
        });

        $('.btnNext').on('click', function(e){
            e.preventDefault();

            $('.partners').animate({marginLeft : (-100/num)*2+'%'}, 300, function(){
                $(this).children('li').first().appendTo(this);
                $(this).css({marginLeft : (-100/num)+'%'});
            });
        });

    }

    //쿠키
    //today=done; path=/; expires=날짜

    console.log(document.cookie);

    let cookiedata = document.cookie;

    if(cookiedata.indexOf('today=done')<0){
        //쿠키 없는 경우 (-1)
        $('#cookiePop').show();
    } else {
        //쿠키 있음
        $('#cookiePop').hide();
    }

    //닫기
    $('.ck_close').on('click', function(){

        if($('#ck').is(':checked')){
           setCookie('today','done',1);
        }

        $('#cookiePop').hide();
    })

    //쿠키 삭제
    $('.ck_del').on('click', function(){
        setCookie('today','done',0);
    })

    
    //쿠키생성
    function setCookie(name, value, expiredays){
        let today = new Date();
        let duedate = today.getDate() + expiredays;
        today.setDate(duedate);
        let result = today.toGMTString();

        document.cookie = name+'='+value+'; path=/; expires='+result+';'
        // today=done; path=/; expires=내일 날짜   <-  setCookie로 쿠키 생성됨
    }





});