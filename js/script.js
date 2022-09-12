// For Owl carousel on Home Page
$('.home-banner-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.product-slider').owlCarousel({
loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

// For categories on home page
$(".category-btn1").click(function () {
    $(".dropdown-category-1 ").slideToggle();
})

$(".category-btn2").click(function () {
    $(".dropdown-category-2 ").slideToggle();
})

// For hamburger
$(document).ready(function(){
	$(".hamburger button").click(function(){
		$(this).toggleClass('active');
        $("nav.navbar").toggleClass('active');
	});
});

// For Overlay 
$(document).ready(function(){
	$(".hamburger button").click(function(){
        $(".overlay").toggleClass('active');
        $("body").toggleClass('active');
	});
});

// Tabbing on Blog Page
$(".tabContent").hide();
    $("ul.tabs li:first").addClass("active").show();
    $(".tabContent:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tabContent").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });

// var elementToView = document.getElementById("home-categories");
// elementToView.scrollIntoView({behavior: "smooth"}); 

[...document.querySelectorAll('.product-page-view')].forEach((item)=>{
    item.addEventListener('click' , addActiveClass);
})

function addActiveClass(){
    let btn = [...document.querySelectorAll('.product-page-view')];
    console.log(btn);
    // for(key in btn){  
    //    if(btn[key].classList.contains('active')){
    //        btn[key].classList.remove('active')
    //    }
    //    console.log(btn[key].classList)
    // }
    btn.forEach((item)=>{
        if(item.classList.contains('active')){
            item.classList.remove('active');
        } else{
            item.classList.add('active');
        }
        console.log('hahdah')
    });  
}

// document.querySelector('.product-page-view1').addEventListener('click' , addActiveClass);


// function addActiveClass(){
//     let btn = document.querySelector('.product-page-view1');
//     console.log(btn);
    
//         if(btn.classList.contains('active')){
//             // btn.classList.remove('active');
//         } else{
//             btn.classList.add('active');
//         }
//         console.log('hahdah')  
// }

// document.querySelector('.product-page-view2').addEventListener('click' , addActiveClass2);


// function addActiveClass2(){
//     let btn = document.querySelector('.product-page-view2');
//     console.log(btn);
    
//         if(btn.classList.contains('active')){
//             // btn.classList.remove('active');
//         } else{
//             btn.classList.add('active');
//         }
//         console.log('hahdah')  
// }