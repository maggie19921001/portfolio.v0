const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// 當網頁載入完成後，讓元素淡入並從左側滑入
$(document).ready(function() {
    $('.intro').css({
        'opacity': '1',               
        'transform': 'translateX(0)'   
    });
});

//往下滾動，右側滑入＋淡入
$(window).on("scroll",function(){
    $('.service').each(function(){
        let elementTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop()+$(window).height();
        if (windowBottom > elementTop){
            $(this).css({
                'visibility': 'visible', 
                'opacity': '1',           
                'transform': 'translateX(0)'  
            });
        }
    })
})

// 根據滾動距離改變背景位置，實現視差滾動
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $('.my-services').css({
        'background-position': 'center ' + (scrollTop * -0.1) + 'px' // 改變圖片位置
    });
});

$(window).on("scroll",function(){
    $('.section__title--about, .section__subtitle--about, .about-me__body, .section__title--work, .section__subtitle--work,.portfolio').each(function(){
        let elementTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop()+$(window).height();
        if (windowBottom > elementTop){
            $(this).css({
                'visibility': 'visible', 
                'opacity': '1',           
                'transform': 'translateY(0)'  
            });
        }
    })
})
