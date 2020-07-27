$(document).ready(function(){
    let $tab = $('#tab');
    let $btn = $tab.find('.left li');
    let $photo = $tab.find('.photo li');
    let $txt = $tab.find('.txt li');

    $btn.on('click',function(e){
        e.preventDefault();

        let i = $(this).index();

        $btn.removeClass('on');
        $photo.removeClass('on');
        $txt.removeClass('on');

        $btn.eq(i).addClass('on');
        $photo.eq(i).addClass('on');
        $txt.eq(i).addClass('on');
    });


})