
$(document).ready(
  function(){
    $(".navigation-container").click(
      function(){
        $(this).toggleClass("change");     
      });
  });

$(document).ready(function(){
        // Show hide popover
        $(".navigation-container").click(function(){
            $(this).find(".dropdown-content").slideToggle("slow");
        });
    });
    $(document).on("click", function(event){
        var $trigger = $(".navigation-container");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-content").delay(2000).slideUp("fast");
            $trigger.toggleClass("change");
        }            
    });
$(document).ready( function(){

$('.navigation-container').click( function(event){
    event.stopPropagation();
    $('.dropdown-content').toggle();
});

$(document).click( function(){
    $('.dropdown-content').hide();
});
});
$(window).scroll(function(){
  var height = $("#linktohowitworks").height() + 250;
  if($(this).scrollTop() > height ) {
    $("#easysteps").delay(500).fadeIn();
    $("#stepOne").delay(1500).fadeIn();
    $("#stepTwo").delay(2500).fadeIn();
    $("#stepThree").delay(3500).fadeIn();

  }
});

 $(document).ready(
    function(){
      $(".button").hover(
        function(){
          $(this).css("background-color","#ffb838");
        },
        function(){
          $(this).css("background-color","transparent");
        });

       $(".loginBtn").hover(
        function(){
          $(this).css("background-color","#fff");
          $(this).css("color","#49bcab");
        },
        function(){
           $(this).css("background-color","#49bcab");
          $(this).css("color","#fff");
        });

       $(".loginBtn").click(
        function(){
          $(".modal").delay(1000).css("display","block");
        });
       $("#closeIcon").click(
        function(){
          $(".modal").css("display","none");
        });

       $("input").focus(function(){
        $(this).css("background-color", "#ffdb99");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
        $(".submitBtn").hover(
        function(){
          $(this).css("background-color","#ffb838");
          $(this).css("color","#fff");
        },
        function(){
           $(this).css("background-color","#fff");
           $(this).css("color","#ffb838");

        });

    });

$(document).ready(
    function(){
      $("#dogWalkingicon").hover(function(){
        $(".getStartedBtn").css("display","none");

        $("#dogTrainingicon").attr('src','./Images/icons/dogTraining.svg');
        $("#dogFeedingicon").attr('src','./Images/icons/dogFeeding.svg');
        $("#dogGroomingicon").attr('src','./Images/icons/dogGrooming.svg');
        $(this).attr('src','./Images/icons/dogWalking2.svg');
      });

      $('#dogTrainingicon').hover(function(){
        //clear other icons
        $(".getStartedBtn").css("display","none");
        $("#dogWalkingicon").attr('src','./Images/icons/dogWalking.svg');
        $("#dogFeedingicon").attr('src','./Images/icons/dogFeeding.svg');
        $("#dogGroomingicon").attr('src','./Images/icons/dogGrooming.svg');
        $(this).attr('src','./Images/icons/dogTraining2.svg');

      });

         $('#dogFeedingicon').hover(function(){
        //clear other icons
        $(".getStartedBtn").css("display","none");
        $("#dogWalkingicon").attr('src','./Images/icons/dogWalking.svg');
        $("#dogTrainingicon").attr('src','./Images/icons/dogTraining.svg');
        $("#dogGroomingicon").attr('src','./Images/icons/dogGrooming.svg');

        $(this).attr('src','./Images/icons/dogFeeding2.svg');

      });

       $('#dogGroomingicon').hover(function(){
        //clear other icons
        $(".getStartedBtn").css("display","none");
        $("#dogWalkingicon").attr('src','./Images/icons/dogWalking.svg');
        $("#dogFeedingicon").attr('src','./Images/icons/dogFeeding.svg');
        $("#dogTrainingicon").attr('src','./Images/icons/dogTraining.svg');

        $(this).attr('src','./Images/icons/dogGrooming2.svg');


      });
    });

