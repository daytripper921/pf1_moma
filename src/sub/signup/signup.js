$(document).ready(function(){

    $('#join').on('submit', function(e){
        e.preventDefault();

        let agreed = $('#terms').is(':checked');
        let len = $('.required').length;
        let i = 0;
        let pwd = $('#userpw').val();
        let pwd2 = $('#userpw2').val();
        let radio = $('input[name=gender]').is(':checked');
        //let radio = $('input[type=radio]'); 이렇게 해도 됨

        let isRequired = false;
        let isPwd = false;
        let isGender = false;

        //체크했으면 빨간거 다시 지워야..
        $('textarea, input, td').removeClass('red');

        /* 
        1. 약관 동의 체크
        2. 필수데이터 입력 체크
        3. 비밀번호 2개 값 같은지 체크
        */

        if(!agreed) {
            //약관 동의 안했을 때

            alert('약관에 동의해주세요.');
            $('.agreement textarea').addClass('red');
            //여기서 스크롤 맨 위로 갈 수 있나
        } else {
            //약관 동의했을 때

            //필수 텍스트 입력사항 반복문으로 체크
            $('.required').each(function(index){
                let data = $(this).val();
                let txt = $(this).attr('placeholder');
                
                if(!data){
                    alert(txt);
                    $(this).addClass('red');
                } else {
                    i++;
                }
            });

            //네 개 다 체크했을 경우
            if(i==len){
                isRequired = true;
            } 

            //비밀번호 같은지 체크
            if(pwd !== pwd2){
                alert('비밀번호를 동일하게 입력해주세요.');
                $('#userpw, #userpw2').addClass('red');
            } else {
                isPwd = true;
            }

            //라디오버튼 체크
            if(!radio){
                alert('성별을 선택해주세요.');
                $('input[name=gender]').parent('td').addClass('red');
            }else {
                isGender = true;
            }

            //최종 인증 처리
            if(isRequired && isPwd && isGender){
                alert('회원가입이 완료되었습니다.')

                //원래 백엔드로 보내야함
                //입력한 값들 비우기
                $('.required').val('');
                $('#comments').val('');
                $('#terms').prop('checked', false); //약관 - 강제로 체크 해제
                $('input[name=gender]').prop('checked', false);
                $('input[type=checkbox]').prop('checked', false);
            }
        } 

    });

});