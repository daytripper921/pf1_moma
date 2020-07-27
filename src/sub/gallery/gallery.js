$(document).ready(function(){


    let url_search = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
    let key = '673aecd9f0fe2c86bdcaa64b50aca0ca';
    let per_page = 20;
    let page_num = 1;
    let tags = 'modern art';

    call_data(url_search, key, page_num, per_page, tags);

    //search
    $('.btnSearch').on('click', function(){

        tags = $('#keyword').val();
        page_num = 1;

        $('.paging a').removeClass('on');
        $('.paging a').eq(0).addClass('on');

        call_data(url_search, key, page_num, per_page, tags);
    });

    $('#keyword').on('keydown', function(keyword){
        
        tags = $('#keyword').val();
        page_num = 1;

        if(keyword.keyCode == 13){
            $('.paging a').removeClass('on');
            $('.paging a').eq(0).addClass('on');
    
            call_data(url_search, key, page_num, per_page, tags);
            //$('#keyword').val('');
        }
       

    })


    //pagenation
    $('.paging a').on('click', function(){
        

        page_num = $(this).index()+1;
        call_data(url_search, key, page_num, per_page, tags);

        $('.paging a').removeClass('on');
        $(this).addClass('on');
    });



    //데이터 호출
    function call_data(url_search, key, page_num, per_page, tags){
            
        $.ajax({
            url : url_search,
            dataType : 'json',
            data : {
                api_key : key,
                page : page_num,
                per_page : per_page,
                tags : tags,
                tagmode : 'any',
                privacy_filter : 5,
                format : 'json',
                nojsoncallback : 1
            }
        })
        .success(function(data){
            console.log(data);
            create_dom(data);           

        })
        .error(function(){
            alert('Fail to load data')
        });
    }


    //DOM 생성
    function create_dom(data){
        $('.wrap').removeClass('on');
        $('.wrap>ul').empty();

        let items = data.photos.photo;

        $(items).each(function(){

            $('.gallery .wrap>ul')
                .append(
                    $('<li>')
                    .append(
                    $('<div>')
                        .append(
                            $('<a>').attr({href : 'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_b.jpg'}) 
                            .append(
                                $('<img>').attr({src : 'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_m.jpg'})
                            )
                        )
                    )
                )
                                        
                setTimeout(function(){
                    iso_layout('.wrap>ul');

                    setTimeout(function(){
                        $('.wrap').addClass('on');
                    },300);
                }, 500);

        });
    }




    $('body').on('click', '.gallery .wrap>ul>li>div', function(e){
        e.preventDefault();

        let imgSrc = $(this).children('a').attr('href');

        $('.bigImg>img').attr({src : imgSrc});
        $('.bigImg').fadeIn();

        // $('.bigImg span').on('click', function(){
        //     $('.bigImg').fadeOut();
        // })

        //닫기
        $('.bigImg').on('click', function(){
   
            $('.bigImg').fadeOut(1);
        })

    });
   
    

    //isotope 함수
    function iso_layout(target){
        iso = new Isotope( target, {     
            itemSelector: '.wrap>ul>li',
            columnWidth :  '.wrap>ul>li',
            transitionDuration: '0.8s',
            percentPosition : true               
        }); 
    }

});


/* 레이어팝업
 

 $('body').append('<div id="back></div><div id="main></div>')
 */