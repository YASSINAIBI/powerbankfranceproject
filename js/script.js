// document.body.style.zoom = "100%";


window.devicePixelRatio = 1.25;



// $(document).ready(function(){
//     $("div").animate({
//         top : '100px',
//     }, "slow");
//     $("div").animate({
//         width : '600px',
//     }, 1500);
//     $("div").animate({
//         height : '400px',
//     }, 2000);
//     $("div").animate({
//         borderRadius : '40px',
//     }, 2500);
//     $("div").animate({
//         fontSize : '40px',
//         color : 'red',
//     }, 1200);
//     $("div").fadeOut(500);
//     $("div").fadeIn(500, function(){
//         $("span").show("fast");
//     });
//     $("span").animate({
//         fontSize: "50px",
//         fontWeight: "bold",
//     },"slow");
// });

$(document).ready(function(){
    function animate() {
    $('.animatecharger').animate({opacity:'1'}, 500, function(){ 
        $('.animatecharger1').animate({opacity:'1'}, 500, function(){
            $('.animatecharger2').animate({opacity:'1'}, 500, function(){
                $('.animatecharger3').animate({ opacity:'1'}, 500, function(){
                    $('.animatecharger4').animate({opacity:'1'}, 500, function(){
                                        $('.animatecharger').animate({opacity:'.3'}, 0.1, function(){
                                            $('.animatecharger1').animate({opacity:'.3'}, 0.1, function(){
                                                $('.animatecharger2').animate({opacity:'.3'}, 0.1, function(){
                                                    $('.animatecharger3').animate({opacity:'.3'}, 0.1, function(){
                                                        $('.animatecharger4').animate({opacity:'.3'}, 0.1, function(){
                                                            animate();
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
    }
    animate();
});

$(document).ready(function(){
    $('.navbar ul li a').click(function(){
      $('.navbar li a').removeClass("active");
      $(this).addClass("active");
  });

});

// if(Math.round(window.devicePixelRatio * 100==125) || Math.round(window.devicePixelRatio * 100==138) || Math.round(window.devicePixelRatio * 100==156)){
//     document.body.style.zoom = "100%";
//   }
// 138 156
// in 100% margin-left: 146px width: 37px
//   Math.round(window.devicePixelRatio * 100);
// (window.outerWidth - 8) / window.innerWidth;
// $('.MyCentredImg .animatecharger .MyCentredImg .animatecharger1 .MyCentredImg .animatecharger2 .MyCentredImg .animatecharger3 .MyCentredImg .animatecharger4').css({"margin-left":"146px", "width":"37px"})
// moz-device-pixel-ratio





// 0.9947916666666666
// window.innerWidth