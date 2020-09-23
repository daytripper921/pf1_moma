$(document).ready(function(){

    rwd_header();

    $(window).on('resize', rwd_header);
   
    //skip_navi
    $('#skip_navi a').on('focusin', function(){
        $(this).addClass('on');
    });

    $('#skip_navi a').on('focusout', function(){
        $(this).removeClass('on');
    });


    //rwd header
    $('.bars').on('click', function(e){
        e.preventDefault();

        let isOpen = $('#gnbMo').hasClass('on');

        //
        $(this).toggleClass('on');

        if(isOpen){
            $('#gnbMo').removeClass('on');
        } else {
            $('#gnbMo').addClass('on');
        }
    })

    $('#gnbMo>ul>li>a').on('click', function(e){
        e.preventDefault();
        
        var opened = $(this).hasClass('on');

        //패널 비활성화
        $('#gnbMo>ul>li>a').removeClass('on');
        $('#gnbMo>ul>li>ul').slideUp();

        if(opened){
           $(this).removeClass('on');
        } else {
            $(this).addClass('on');
            $(this).next('ul').slideDown();
        }
    });



    function rwd_header(){
        let wid = $(window).width();

        if(wid>=1180){

            $('#header').off('mouseenter');
            $('#header').off('mouseleave');
                    
            //header
            $('#header').on('mouseenter', openSub);
            $('#header').on('mouseleave', closeSub);

                    
            //gnb 1depth에 마우스오버시 버튼 활성화 유지
            $('#gnb>li').on('mouseenter', function(){
                $(this).children('a').addClass('on');
            });

            $('#gnb>li').on('mouseleave', function(){
                $(this).children('a').removeClass('on');
            });

            //focus 
            $('#gnb>li>a').on('focusin', function(){
                $('#gnb>li>ul').stop().slideDown();
                $('.bgGnb').stop().slideDown();
            });

            $('#gnb li').last('a').last().on('focusout', function(){
                $('#gnb').find('ul').stop().slideUp();
                $('.bgGnb').stop().slideUp();
            });

            $('#gnbMo').removeClass('on');

            //bars
            $('.bars').removeClass('on');


        } else {
            $('#header').off('mouseenter');
            $('#header').off('mouseleave');
        }
    }



    function openSub(){
        $('#gnb').find('ul').stop(true, true).slideDown();
        $('.bgGnb').stop(true, true).slideDown();
    }

    function closeSub(){
        $('#gnb').find('ul').stop().slideUp();
        $('.bgGnb').stop().slideUp();
    }
});