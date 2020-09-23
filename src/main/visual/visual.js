$(document).ready(function(){

    var container = $('.slideshow');
    var slideGroup = container.find('.slideshowSlides');
    var slides = slideGroup.find('a');
    var nav = container.find('.slideshowNav');
    var indicator = container.find('.indicator');
    var slideCount = slides.length;
    var indicatorHtml = '';
    var currentIndex = 0;
    var duration = 500;
    var interval = 3000;
    var timer;


    slides.each(function(i){
        var newLeft = (i * 100) + '%';

        //float 대신. 가로로 배열
        $(this).css({left : newLeft});

        //a 갯수만큼 인디케이터 생성
        indicatorHtml += '<a href="#">'+(i+1)+'</a>'
    });

    indicator.html(indicatorHtml);

    //슬라이드 이동
    function goToSlide(index){
        slideGroup.animate({left : (-100 * index) + '%'}, duration);
        currentIndex = index;
        //console.log(currentIndex);
        updateNav();
    }

    function updateNav(){
        var navPrev = nav.find('.visualPrev');
        var navNext = nav.find('.visualNext');

        if(currentIndex == 0) {
            navPrev.addClass('disabled');
        } else {
            navPrev.removeClass('disabled');
        }

        if (currentIndex == slideCount - 1) {
            navNext.addClass('disabled');
        } else {
            navNext.removeClass('disabled');
        }

        indicator.find('a').eq(currentIndex).addClass('active').siblings().removeClass('active');
    }

    //인디케이터 클릭 슬라이드 이동
    indicator.find('a').on('click', function(e){
        e.preventDefault();

        var idx = $(this).index();

        goToSlide(idx);
    });

    nav.find('a').on('click', function(e){
        e.preventDefault();

        if( $(this).hasClass('visualPrev') ){
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(currentIndex + 1);
        }
    });

    updateNav();

    //자동 슬라이드
    function startTimer(){
        timer = setInterval(function(){
            var nextIndex = (currentIndex + 1) % slideCount;
            goToSlide(nextIndex);
        }, interval);
    }

    startTimer();

    function stopTimer(){
        clearInterval(timer);
    }

    container.mouseenter(function(){
        stopTimer();
    });
    container.mouseleave(function(){
        startTimer();
    });

});