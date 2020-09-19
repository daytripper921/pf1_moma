$(document).ready(function(){
    //main/collection.js
    responsive();
    $(window).on('resize', responsive);

    $('.arts ul li').last().prependTo('.arts ul');

    function responsive(){
        let wid = $(this).width();

        if(wid>=1180) resizing(4);
        if(wid>=640 && wid<1180) resizing(2);
        if(wid<640) resizing(1);
    }


    function resizing(num){
        $('.arts ul').css({marginLeft : (-100/num)+'%'});

        $('.colPrev, .colNext').off();

        $('.colPrev').on('click', function(e){
            e.preventDefault();
    
            $('.arts ul').animate({marginLeft : '0'}, 500, function(){
                $(this).children('li').last().prependTo(this);
                $(this).css({marginLeft : (-100/num)+'%'});
            });
        });
    
        $('.colNext').on('click', function(e){
            e.preventDefault();
    
            $('.arts ul').animate({marginLeft : (-100/num) * 2 +'%'}, 500, function(){
                $(this).children('li').first().appendTo(this);
                $(this).css({marginLeft : (-100/num)+'%'});
            });
        });
    }


});