

$(document).ready(function(){

    var storage=window.localStorage;

    $(".mLocationtInput").children("input").attr("value",storage.getItem("zip")) ;

    $(".mMoreFliter").click(function(){
        $(".mAdvanced").slideToggle("slow");

        $(".moreIcon").toggleClass("rotated");


    });


    $(".proLink").click(function(){

      var selectedPro = $(this).parent("div").attr("id");

      storage.setItem("selectedPro",selectedPro);

      // alert(storage.getItem("selectedPro"));


    });



    $(".labelCheck").click(function(){

      if($(this).children("input").attr("type") == "radio"){ //radio 


          $(this).css("background-color", "#FFBC43");
          $(this).css("color", "#fff"); 

          $(this).siblings().css("background-color", "#fff");
          $(this).siblings().css("color", "#000");

      }else{    //checkbox

        if($(this).css("color") == "rgb(0, 0, 0)"){
          $(this).css("background-color", "#FFBC43");
          $(this).css("color", "#fff");        
        }else{
          $(this).css("background-color", "#fff");
          $(this).css("color", "#000");  
        }

      }


    });

});





