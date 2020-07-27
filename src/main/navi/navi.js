$(document).ready(function(){

   let $visual = $('#visual').offset().top ;
   let $business = $('#business').offset().top ;
   let $tab = $('#tab').offset().top ;
   let $archive = $('#archive').offset().top ;
   let $more = $('#more').offset().top ;
   let $news = $('#news').offset().top ;
   let $service = $('#service').offset().top ;
   let $notice = $('#notice').offset().top ;
   let $collection = $('#collection').offset().top ;
   let $offset = 300;

   $(window).on('scroll', function(){

        if($(this).scrollTop() > $visual - $offset ) {
            $('#navi li a').removeClass('on');
            $('#navi li a').eq(0).addClass('on');
        }
       if($(this).scrollTop() > $business - $offset ) {
            $('#navi li a').removeClass('on');
            $('#navi li a').eq(1).addClass('on');
            $('#business').addClass('on');
        }
        if($(this).scrollTop() > $tab - $offset ) {
            $('#navi li a').removeClass('on');
            $('#navi li a').eq(2).addClass('on');
            $('#tab').addClass('on');
        }
        if($(this).scrollTop() > $archive - $offset ) {
            $('#navi li a').removeClass('on');
            $('#navi li a').eq(3).addClass('on');
            $('#archive').addClass('on');
        }
        if($(this).scrollTop() > $more - $offset ) {
            $('#navi li a').removeClass('on');
            $('#navi li a').eq(4).addClass('on');
            $('#more').addClass('on');
        }
        if($(this).scrollTop() > $news - $offset ) {
            $('#navi li a').removeClass('on');
            $('#navi li a').eq(5).addClass('on');
            $('#news').addClass('on');
        }
        if($(this).scrollTop() > $service - $offset ) {
            $('#navi li a').removeClass('on');
            $('#navi li a').eq(6).addClass('on');
            $('#service').addClass('on');
        }
        if($(this).scrollTop() > $notice - $offset ) {
            $('#navi li a').removeClass('on');
            $('#navi li a').eq(7).addClass('on');
            $('#notice').addClass('on');
        }
        if($(this).scrollTop() > $collection - $offset ) {
            $('#navi li a').removeClass('on');
            $('#navi li a').eq(8).addClass('on');
            $('#collection').addClass('on');
        }
   })



});

/*
 let pos1 = $('#visual').offset().top;
    let pos2 = $('#business').offset().top;
    let pos3 = $('#tab').offset().top;
    let pos4 = $('#archive').offset().top;
    let pos5 = $('#more').offset().top;
    let pos6 = $('#news').offset().top;
    let pos7 = $('#service').offset().top;
    let pos8 = $('#notice').offset().top;
    let pos9 = $('#collection').offset().top;

    let base = -300;

    $(window).on('scroll', function(){

        let scroll = $(this).scrollTop();


        // for(i=1 ; i<=8 ; i++){
        //     if(scroll >= pos+$i+base && scroll < pos+($i+1)+base){
        //         $('#navi li a').removeClass('on');
        //         $('#navi li a').eq(i-1).addClass('on');
        //     }
        // }
        // 반복문으로
  
        if(scroll >= pos1+base && scroll < pos2+base){
			$('#navi li a').removeClass('on');
            $('#navi li a').eq(0).addClass('on');
		}
        if(scroll >= pos2+base && scroll < pos3+base){
			$('#navi li a').removeClass('on');
            $('#navi li a').eq(1).addClass('on');
            
		}
		if(scroll >= pos3+base && scroll < pos4+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(2).addClass('on');
		}
		if(scroll >= pos4+base && scroll < pos5+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(3).addClass('on');
        }
        if(scroll >= pos5+base && scroll < pos6+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(4).addClass('on');
        }
        if(scroll >= pos6+base && scroll < pos7+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(5).addClass('on');
        }
        if(scroll >= pos7+base && scroll < pos8+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(6).addClass('on');
        }
        if(scroll >= pos8+base && scroll < pos9+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(7).addClass('on');
        }
        if(scroll >= pos9+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(8).addClass('on');
		}

        

    })
*/