$(document).ready(function(){

    let url = "https://www.googleapis.com/youtube/v3/playlistItems"
    var key = "AIzaSyB7tquVfIONygz_IKksjLOnAJE21s2l2_8";
    let playlistId = "PLfYVzk0sNiGFVAWeeB7XVhMKZCyw3qrJr";

    let options = {
        part : 'snippet',
        key : key,
        maxResults : 12,
        playlistId : playlistId
    }

    load_youtube();

    //pop up deligation
    $('body').on('click', '.videos>article>img', function(){
        let vid_id = $(this).attr('data-vid');
        create_pop(vid_id);
    });

    $('body').on('click', '.video_pop .close', function(){
        remove_pop();
    });



    function load_youtube(){

        $.ajax({
            url : url,
            dataType : 'jsonp',
            data : options
        })
        .success(function(data){
            console.log(data);
            create_list(data);
        })
        .error(function(){
            alert('Fail to load data');
        })
    }

    function create_list(data){
        $(data.items).each(function(index, item){
            let thumb = item.snippet.thumbnails.medium.url;
            let title = item.snippet.title;
            let title_len = title.length;
            let vid_id = item.snippet.resourceId.videoId; 
            let date = item.snippet.publishedAt.substring(0,10);
            let result = '';

            if(title_len > 55){
                result = title.substring(0, 55) + '...';
            }else {
                result = title;
            }

            $('.videos')
                .append(
                    $('<article>')
                        .append(
                            $('<img>').attr({
                                src : thumb,
                                'data-vid' : vid_id
                            }),
                            $('<h2>').text(result),
                            $('<span>').text(date)
                        )
                )
        })

    }

        
    // 레이어 팝업
    function create_pop(id){
        $('body').append(
            $('<aside class="video_pop">')
                .css({
                    width: '90%',
                    padding : 40,
                    boxSizing : 'border-box',
                    position : 'fixed',
                    top : '50%',
                    left : '50%',
                    transform : 'translate(-50%, -50%)',
                    zIndex : 10,
                    backgroundColor : '#000'
                })
                .append(
                    $('<iframe>')
                        .attr({
                            width : '100%',
                            height : 600,
                            src : 'https://www.youtube.com/embed/'+id,
                            frameborder : 0,
                            allowfullscreen : true
                        }),
                    $('<span class="close">').text('close')
                        .css({
                            fontSize : 14,
                            font : 'Roboto',
                            color : '#fff',
                            position : 'absolute',
                            top : 15,
                            right : 15,
                            cursor : 'pointer'
                        })
                )
        )
        
    }

    function remove_pop(){
        $('.video_pop').remove();
    }



});