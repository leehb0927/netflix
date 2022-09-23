$(function(){
    //h2에 마우스 올리면 모두보기 등장
    $('.content-title').hover(function(){
        $(this).find('.viewAll').css('opacity','1')
    },function(){
        $(this).find('.viewAll').css('opacity','0')
    });




    //스크롤 하면 gnb 모양 변경
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $('.gnb').addClass('active');
        }else{
            $('.gnb').removeClass('active');
        }
    });



    //썸네일 클릭하면 팝업 나타남
    $('section .swiper-slide').click(function(e){
        e.preventDefault()

        $('.focus-wrapper').css('display','block');
        $('body').addClass('overflow-h')
    });
    //클릭하면 나오는 화면 닫기
    $('.focus-wrapper .preview-close').click(function(){
        $('.focus-wrapper').css('display','none')
        $('.info-inner2 .btn-list').css('display','none')
    });


    //팝업 시즌 선택 버튼
    $('.focus-wrapper .season-btn button').click(function(){
        if($(this).siblings('.btn-list').css('display') == 'block'){
            $(this).siblings('.btn-list').slideUp();
        }else{
            $(this).siblings('.btn-list').slideDown();
        }
    });
    //팝업 회차 리스트에 마우스 올리면 재생 아이콘 나타남
    $('.focus-wrapper .info-inner2 .season-item').hover(function(){
        $(this).find('svg').fadeIn(300).css('display','block');
    },function(){
        $(this).find('svg').fadeOut(300).css('display','none');
    });
});







fetch('./assets/data/data.json')
.then((response) => response.json())
.then((json) => {
    items = json.items

//content1 swiper
    var content1 = items.filter(function(parm){return parm.cate == "content1"});
    console.log(content1)

    content1Html = '';
    content1.forEach(movies => {
        content1Html +=`
        <div class="swiper-slide">
            <a>
                <div class="img-box">
                    <img src=${movies.thumbs}></img>
                </div>
            </a>
        </div>
        `
    });

    $('.sc-content1 .swiper-wrapper').html(content1Html);
    swiper('.swiper');




//content2 swiper
    var content2 = items.filter(function(parm){return parm.cate == "content2"});
    content2Html = '';
    content2.forEach(movies => {
        content2Html +=`
        <div class="swiper-slide">
            <div class="img-box">
                <img src=${movies.thumbs}></img>
            </div>
        </div>
        `
    });

    $('.sc-content2 .swiper-wrapper').html(content2Html);
    swiper('.swiper');




//content3 swiper
    var content3 = items.filter(function(parm){return parm.cate == "content3"});
    content3Html = '';
    content3.forEach(movies => {
        content3Html +=`
        <div class="swiper-slide">
            <div class="img-box">
                <img src=${movies.thumbs}></img>
            </div>
        </div>
        `
    });

    $('.sc-content3 .swiper-wrapper').html(content3Html);
    swiper('.swiper');




//.sc-top1 swiper





//.sc-content4 swiper
    var content5 = items.filter(function(parm){return parm.cate == "content5"});
    content5Html = '';
    content5.forEach(movies => {
        content5Html += `
        <div class="swiper-slide">
            <div class="img-box">
                <img src=${movies.thumbs}></img>
            </div>
        </div>
        `
    });
    $('.sc-content4 .swiper-wrapper').html(content5Html);
    swiper('.swiper');






//.sc-content5 swiper
    var content7 = items.filter(function(parm){return parm.cate == "content7"});
    content7Html = '';
    content7.forEach(movies => {
        content7Html += `
        <div class="swiper-slide">
            <div class="img-box">
                <img src=${movies.thumbs}></img>
            </div>
        </div>
        `
    });
    $('.sc-content5 .swiper-wrapper').html(content7Html);
    swiper('.swiper');





//.sc-content6 swiper
    var content8 = items.filter(function(parm){return parm.cate == "content8"});
    content8Html = '';
    content8.forEach(movies => {
        content8Html += `
        <div class="swiper-slide">
            <div class="img-box">
                <img src=${movies.thumbs}></img>
            </div>
        </div>
        `
    });
    $('.sc-content6 .swiper-wrapper').html(content8Html);
    swiper('.swiper');





//.sc-content7 swiper
    var content9 = items.filter(function(parm){return parm.cate == "content9"});
    content9Html = '';
    content9.forEach(movies => {
        content9Html += `
        <div class="swiper-slide">
            <div class="img-box">
                <img src=${movies.thumbs}></img>
            </div>
        </div>
        `
    });
    $('.sc-content7 .swiper-wrapper').html(content9Html);
    swiper('.swiper');
});


















//썸네일 누르면 새 창 열림
$(document).on('click', 'section .swiper', function(){
    $('.focus-wrapper').css('display','block')
});
//스와이퍼
function swiper(name) {
    var swiper = new Swiper(name, {
        slidesPerView: 3.01,
        slidesPerGroup: 3,
        //모바일 크기 800미만일 때 스와이퍼
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            800: {
                slidesPerView: 4.01,
                slidesPerView: 4
            },
            //800이상 1100미만일 때 스와이퍼
            1100:{
                slidesPerView: 5.01,
                slidesPerView: 5
            }
            //1100이상일 때 스와이퍼
        }    
    });
};
//스와이퍼에 마우스 올리면 좌우 버튼 나타남
$('.content .swiper').hover(function(){
    $(this).find('.btn-bg').css('display','block');
    $(this).find('.swiper-btn').css('display','block');
},function(){
    $(this).find('.btn-bg').css('display','none');
    $(this).find('.swiper-btn').css('display','none');
})