


$(document).ready(function(){

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

      $("#articleContainer").hide();


  $("#video").click(function(){
      $("#articleContainer").hide();

      $("#vedioContainer").fadeIn(300);
      $(".DesktopArticleNav").hide();

      if(document.body.clientWidth >= 1224){
          $(".prev").show();
          $(".next").show();
      }

      // $("#video").css("background-color", "#FFC964");
      $("#video").css("color", "#EF6F14");
      // $("#article").css("background-color", "#71D5C7");
      $("#article").css("color", "#fff");
    
  });

  $("#article").click(function(){
      $("#vedioContainer").hide();
      $("#articleContainer").fadeIn(300);


      if(document.body.clientWidth >= 1224){
          $(".prev").hide();
          $(".next").hide();
          $(".DesktopArticleNav").fadeIn(300);
      }
      // $("#article").css("background-color", "#FFC964");
      $("#article").css("color", "#EF6F14");
      // $("#video").css("background-color", "#71D5C7");
      $("#video").css("color", "#fff");
  });

  $("#page1btn").click(function(){
      $("#page2").hide();
      $("#page1").fadeIn(300);
  });

  $("#DesktopArticlePrev").click(function(){
      $("#page2").hide();
      $("#page1").fadeIn(300);
  });
  $("#page2btn").click(function(){
      $("#page1").hide();
      $("#page2").fadeIn(300);
  });
  $("#DesktopArticleNext").click(function(){
      $("#page1").hide();
      $("#page2").fadeIn(300);
  });


  $(".list-group-item").attr("target", "_blank");

     $(".search-icon").click(function(){




        if($("#search-bar").val()==""){
          alert("Please indicate where are you.");

        }else{
          window.location.href='ProviderQuery.html';

        }

    });




});


  function scrollRight() {


    vedioContainer.scrollLeft+=900;
  }
  function scrollLeft2() {

      vedioContainer.scrollLeft-=900;
  }


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("list-group");
var dots = document.getElementsByClassName("dot");
  // if (n > slides.length) {slideIndex = 1}    
  // if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n-1].style.display = "block";  
  dots[n-1].className += " active";
}




