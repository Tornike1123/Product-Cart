$(document).ready(function ($) {
  $(".red-button").on({
    click: function () {
      $("#change-image").attr("src", "beatsred.jpg");
    },
  });

  $(".blue-button").on({
    click: function () {
      $("#change-image").attr("src", "beatsblue.jpg");
    },
  });

  $(".gold-button").on({
    click: function () {
      $("#change-image").attr("src", "beatsgold.jpg");
    },
  });

  $(".blue-button").click(function () {
    $("body").css({
      "background-color": "#1c2d4b",
    });
  });
  $(".red-button").click(function () {
    $("body").css({
      "background-color": "#9b1121",
      
    });
  });

  $(".gold-button").click(function () {
    $("body").css({
      "background-color": "#cb9d2a",
      
    });
  });

  $(".gold-button").on({
    click: function () {
      $("#change-image").attr("src", "beatsgold.jpg");
    },
  });

  $(".cart").click(function () {
    $(this).css({
      "background-color": "#9b1121",
      
      
    });
  });
  $(".cart").click(function () {
    $(".addcart").css({
      "display": "none",
      
      
    });
  });


 $('.cart').click(function () {
    $(this).animate({
       
        "width": "40px",
        "height": "40px",
        "border-radius": "500px",
        "position" : "absolute",
        "left" : "60px",
        
        
        
      }, 1200)
      
     


      $('.hiden').animate({
        "top" : "-12px",
        "left" : "236px",
        "position" : "absolute",
        
        
      }, 2000)
      
      
   })
   
});




