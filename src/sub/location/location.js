window.onload = function () {

    //표시할 지역의 경도, 위도, 줌레벨 설정하여 인스턴스 생성
    let mapContainer = document.getElementById('map');
    let mapOption = {
        center: new kakao.maps.LatLng(37.4976637, 127.0258943),
        level: 4
    };
    let map = new kakao.maps.Map(mapContainer, mapOption);



    //좌표값과 마커이미지 갯수만큼 반복을 돌며 마커생성하고 버튼 이벤트 연결
    let markerOptions = [
        {
            title: '강남본점',
            latlng: new daum.maps.LatLng(37.4976637, 127.0258943),
            imgSrc: './img/pin.png',
            imgSize: new daum.maps.Size(40, 40),
            imgPos: { offset: new kakao.maps.Point(0, 0) },
            button: document.getElementById('branch1')
        },
        {
            title: '종로점',
            latlng: new daum.maps.LatLng(37.5715, 126.9890588),
            imgSrc: './img/pin.png',
            imgSize: new daum.maps.Size(40, 40),
            imgPos: { offset: new kakao.maps.Point(0, 0) },
            button: document.getElementById('branch2')
        },
        {
            title: '이태원점',
            latlng: new daum.maps.LatLng(37.5342356, 126.9935358),
            imgSrc: './img/pin.png',
            imgSize: new daum.maps.Size(40, 40),
            imgPos: { offset: new kakao.maps.Point(-10, 30) },
            button: document.getElementById('branch3')
        },
    ];

    for (let i = 0; i < markerOptions.length; i++) {
        new daum.maps.Marker({
            map: map,
            position: markerOptions[i].latlng,
            title: markerOptions[i].title,
            image: new daum.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
        });

        (function (index) {
            markerOptions[index].button.onclick = function () {
                moveTo(markerOptions[index].latlng);
                console.log(index);
            }
        })(i);
    }

    function moveTo(target) {
        let moveLatLan = target;
        map.setCenter(moveLatLan);
        return false;
    }


    //스카이뷰 컨트롤 표시
    let mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);


    //줌 컨트롤 표시
    let zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.BOTTOMRIGHT);


    //드래그기능 활성화
    setDraggable(true);
    function setDraggable(draggable) {
        map.setDraggable(draggable);
    }


    //줌기능 활성화
    setZoomable(false);
    function setZoomable(zoomable) {
        map.setZoomable(zoomable);
    }


    //버튼클릭시 교통정보 표시    
    let t_on = document.getElementById('t_on');
    let t_off = document.getElementById('t_off');

    t_on.onclick = function () {
        map.addOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC);
        return false;
    }
    t_off.onclick = function () {
        map.removeOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC);
        return false;
    }

    $('#traffic>li').on('click', function(){
        $('#traffic > li').removeClass('on');
        $(this).addClass('on');
    })

    $('#branch>li').on('click', function(){
        $('#branch>li').removeClass('on');
        $(this).addClass('on');
    })




}