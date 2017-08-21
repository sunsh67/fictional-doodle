var allBlocks = ["mDate", "mWeekSup", "mTimeSup", "mDogWeight", "howmanydog", "dogWalkNum", "dogTrainNum"
                 , "travelOpt", "interestedIn", "coatType"];

$(document).ready(function() {
   initialize();
    
   $("#subCat").change(function() {
       var x = document.getElementById("subCat");
       var val = x.options[x.selectedIndex].value;
       console.log(val);
       if(val === "dog-walking") {
           displayAll();
           hideBlocks(["mDate", "dogTrainNum", "travelOpt", "interestedIn", "coatType"]);
       }
       if(val === "dog-sitting") {
           displayAll();
           hideBlocks(["mWeekSup", "mTimeSup", "dogWalkNum", "dogTrainNum", "travelOpt", "interestedIn", "coatType"]);
       }
       if(val === "dog-training") {
           displayAll();
           hideBlocks(["mWeekSup", "mTimeSup", "howmanydog", "dogWalkNum", "coatType"]);
       }
       if(val === "dog-grooming") {
           displayAll();
           hideBlocks(["mWeekSup", "howmanydog", "dogWalkNum", "dogTrainNum", "interestedIn"]);
       }
   });
});

function initialize() {
    displayAll();
    hideBlocks(["mDate", "dogTrainNum", "travelOpt", "interestedIn", "coatType"]);
}
    
function displayAll() {
    for(i = 0; i < allBlocks.length; i++){
        var className = allBlocks[i];
        $("." + className).show();
    }
}

function hideBlocks(blocks) {
    for(i = 0; i < blocks.length; i++){
        var className = blocks[i];
        $("." + className).hide();
    }
}