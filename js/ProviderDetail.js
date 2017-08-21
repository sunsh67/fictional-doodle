


$(document).ready(function(){

    var storage=window.localStorage;
      var userNum = storage.getItem("selectedPro");
      var userJson = storage.getItem(userNum);

      //get local
      
      //parse json
    var user = JSON.parse(userJson);





    $(".avatar").attr("src", user.IMG);
     $(".proNameSpan").text(user.NAME);
     $(".selfIntro").text(user.ABOUT);
     $(".address").text(user.ADDRESS);

     $(".personName1").text(user.REVIEW[0].name);
     $(".reviewTime1").text(user.REVIEW[0].date);
     $(".reviewContent1").children("p").text(user.REVIEW[0].content);

     $(".personName2").text(user.REVIEW[1].name);
     $(".reviewTime2").text(user.REVIEW[1].date);
     $(".reviewContent2").children("p").text(user.REVIEW[1].content);

     var count4main = 0;

     if(user.CATEGORY.walking.validation == "1"){
      var walking="<div class='skillBody'><div class='skillName'><h3 >Dog Walking</h3><div class='skillDesc'>30 minute walks</div></div><div class='proPrice'><div class='priceTag'>$"
                    +user.CATEGORY.walking.price+"</div><div class='UnitText-small'>per walk</div></div></div>";
      var walkingReq="<label class='walking labelCheck'><input type='radio' name='serviceChosen' value='walking'><span >Dog walking</span></label>";
      $(".mCategoryBody").append(walkingReq);

      $(".skillPanel42").append(walking);
      $(".skillPanel44").append(walking);
      count4main++;

     }
     if(user.CATEGORY.sitting.validation == "1"){
      var sitting="<div class='skillBody'><div class='skillName'><h3 >Dog Sitting</h3><div class='skillDesc'>Dropin or In your home</div></div><div class='proPrice'><div class='priceTag'>$"
                    +user.CATEGORY.sitting.price+"</div><div class='UnitText-small'>per night</div></div></div>";
      var sittingReq="<label class='walking labelCheck'><input type='radio' name='serviceChosen' value='sitting'><span >Dog sitting</span></label>";
      $(".mCategoryBody").append(sittingReq);

      $(".skillPanel42").append(sitting);
      $(".skillPanel44").append(sitting);
      count4main++;

     }

     if(user.CATEGORY.training.validation == "1"){
      var training="<div class='skillBody'><div class='skillName'><h3 >Dog Training</h3><div class='skillDesc'>Price may vary</div></div><div class='proPrice'><div class='priceTag'>$"
                    +user.CATEGORY.training.price+"</div><div class='UnitText-small'>per hour</div></div></div>";
      var trainingReq="<label class='walking labelCheck'><input type='radio' name='serviceChosen' value='training'><span >Dog training</span></label>";
      $(".mCategoryBody").append(trainingReq);

      if(count4main<2){
        count4main++;
        $(".skillPanel42").append(training);
      }
      $(".skillPanel44").append(training);
      

     }

     if(user.CATEGORY.grooming.validation == "1"){
      var grooming="<div class='skillBody'><div class='skillName'><h3 >Dog Grooming</h3><div class='skillDesc'>Make your dog beautiful</div></div><div class='proPrice'><div class='priceTag'>$"
                    +user.CATEGORY.grooming.price+"</div><div class='UnitText-small'>Once</div></div></div>";
      var groomingReq="<label class='walking labelCheck'><input type='radio' name='serviceChosen' value='grooming'><span >Dog grooming</span></label>";
      $(".mCategoryBody").append(groomingReq);

      if(count4main<2){
        count4main++;
        $(".skillPanel42").append(grooming);
      }
      $(".skillPanel44").append(grooming);
      

     }


       $(".moreReview").click(
        function(){
          $(".allReviewPanelSuper").delay(1000).css("display","block");
        });
       $(".cancelImg").click(
        function(){
          $(".allReviewPanelSuper").css("display","none");
        });

       
       $(".mMoreService").click(
        function(){
          $(".allPriceDetailSuper").delay(1000).css("display","block");
        });
       $(".cancelImg4S").click(
        function(){
          $(".allPriceDetailSuper").css("display","none");
        });

       $(".liveChat").click(
        function(){
          $("#liveChat").delay(1000).css("display","block");
        });
       $(".cancelImgLive").click(
        function(){
          $("#liveChat").css("display","none");
        });



       $(".requestService").click(
        function(){
          $("#requestServicePanel").delay(1000).css("display","block");
        });
       $(".cancelImgRS").click(
        function(){
          $("#requestServicePanel").css("display","none");
        });


       $(".sendBtnService").click(
        function(){
          $("#confirmationPanel").delay(1000).css("display","block");
          $("#requestServicePanel").css("display","none");
        });
       $(".cancelImgConfirmation").click(
        function(){
          $("#confirmationPanel").css("display","none");
        });

       


       $(".sendBtn").click(
          function(){


            var txt = $(".sendText").val();
            var txtres ="Please hold on. I'll catch up soon";
            if(txt == null || txt ==""){
              alert("Please say something before you send ");

            }else{
              var req = "<div class='userRequest'><div class='useSentRequest'><p class='request'>"+txt+"</p></div><div class='userImg'><img src='images/Pros/Avatar1.png'></div></div> ";
              var res = "<div class='proResponse'><div class='proImgResp'><img src='"+user.IMG+"'></div><div class='proSentResp'><p class='response'>"+txtres+"</p></div></div>";
              
              $(".chatMainPanel").append(req);
              setTimeout(function(){ $(".chatMainPanel").append(res); },1000);

              $(".sendText").val("");

              // $(".chatMainPanel").scrollBy(0, 100);
              $(".chatMainPanel").scrollTop();           
            }  

        });



    $(".labelCheck").click(function(){



          $(this).css("background-color", "#49bcab");
          $(this).css("color", "#fff"); 

          $(this).siblings().css("background-color", "#fff");
          $(this).siblings().css("color", "#49bcab");



    });


       
});

