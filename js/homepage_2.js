$(document).ready(function(){
  if(localStorage.getItem("status") != null){
    insertInner();
  }

  moveAnimation();
  setInterval(moveAnimation,1000);

  $("#category .inner").click(function(){
    localStorage.setItem("status", this.id);
    console.log(this.id);
  });
});

// function insertInner(){
//   var inners = $("#category .inner");
//   var parent = $(inners).parent();
//   var first = "";
//   var rest = "";

//   for(var i = 0; i < inners.length; i++){
//     if($(inners[i]).attr("id") == localStorage.getItem("status")){
//       first += $(inners[i]).prop("outerHTML");
//     }
//     else{
//       rest += $(inners[i]).prop("outerHTML");
//     }
//   };

//   parent.html(first + rest);
// }

var moveAnimation = function(){

  $('#arrow').animate({bottom:'20px'},500).animate({bottom:'0px'},500);

};
