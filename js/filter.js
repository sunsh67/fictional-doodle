var users=new Array();

var users0 = '{'+
    '"IMG": "./Images/Pros/user1.png",'+
    '"NAME": "Nikki",'+
    '"ADDRESS": "Capitol Hill, Seattle, WA, 98102",'+
    '"CATEGORY":{'+
            '"walking":'+
                '{'+
                    '"validation": "1",'+
                    '"price": "15"'+
                '},'+
            '"training":'+
                '{'+
                    '"validation": "1",'+
                    '"price": "30"'+
                '},'+
            '"sitting":'+
                '{'+
                    '"validation": "1",'+
                    '"price": "10"'+
                '},'+
            '"grooming":'+
                '{'+
                    '"validation": "1",'+
                    '"price": "25"'+
                '}'+
    '},'+
    '"REVIEW": ['+
        '{"name": "Jason",'+
            '"date": "04/18/2017",'+
            '"content": "Nikki is a   wonderful sitter. She is always responsive and reliable, and takes great pictures! I highly recommend her."'+
        '},'+
        '{"name": "Mike",'+
            '"date": "04/08/2017",'+
            '"content": "Nikki did a super great job looking in on our cat for a couple days. She was very content when we got home. Thanks Nikki!"'+
        '}'+
    '],'+
    '"STARTDATE": "04/20/2017",'+
    '"ENDDATE": "05/31/2017",'+
    '"WEEK":{'+
        '"monday": "1",'+
        '"tuesday": "0",'+
        '"wednesday": "1",'+
        '"thursday": "0",'+
        '"friday": "1",'+
        '"saturday": "0",'+
        '"sunday": "0"'+
    '},'+
    '"TIME": {'+
        '"t0": "1",'+
        '"t1": "1",'+
        '"t2": "1"'+
	' },'+
    '"LARGE": {'+
        '"l1": "1",'+
        '"l2": "1",'+
        '"l3": "0",'+
        '"l4": "0"'+
	' },'+
   ' "ABOUT": "I have always loved dogs and can\'t picture my life without them. I feel lucky to live in a city filled with other dog lovers and plenty of  parks! I have a 4.5 yr old 12 lb Pomeranian that enjoys visiting parks    and night time cuddle sessions. I live in a 1,000 sq foot condo    across the street from Fairview park where all the neighborhood dogs  go to play. I\'m a working professional with a flexible schedule. I   enjoy taking pictures and can provide frequent updates (if you like)  of your dog as well as send video clips. I live alone with my dog, Benjamin and both of us will be more than happy to welcome your furry companion into our home :). Thanks for checking out our profile!"}';



var users1 = '{'+
    '"IMG": "./Images/Pros/user2.png",'+
    '"NAME": "Mary",'+
    '"ADDRESS": "Central District, Seattle, WA, 98122",'+
    '"CATEGORY":'+
        '{'+
            '"walking":'+
                '{'+
                    '"validation": "1",'+
                    '"price": "12"'+
                '},'+
            '"training":'+
                '{'+
                    '"validation": "1",'+
                    '"price": "28"'+
                '},'+
            '"sitting":'+
                '{'+
                    '"validation": "1",'+
                    '"price": "12"'+
                '},'+
            '"grooming":'+
                '{'+
                    '"validation": "1",'+
                    '"price": "30"'+
                '}'+
        '},'+
    '"REVIEW": ['+
        '{'+
            '"name": "Sida",'+
            '"date": "04/05/2017",'+
            '"content": "Mary has been fantastic with my dog Bonnie. She has helped her settle in to a new routine and is helping her socialize more politely while on leash. I feel reassured when I leave for work in the morning that Bonnie is in good hands and will get a nice walk in the middle of the day."'+
        '},'+
        '{'+
            '"name": "Zac",'+
            '"date": "04/08/2017",'+
            '"content": "Mary took great care of our pets during our five-day vacation. We received updates on every visit made (3x/day). Also, Mary kept the pet feeding and litter areas very well groomed!"'+
        '}'+
    '],'+
    '"STARTDATE": "04/20/2017",'+
    '"ENDDATE": "05/31/2017",'+
    '"WEEK":'+
        '{'+
            '"monday": "1",'+
            '"tuesday": "0",'+
            '"wednesday": "1",'+
            '"thursday": "0",'+
            '"friday": "1",'+
            '"saturday": "0",'+
            '"sunday": "0"'+
	    '},'+
    '"TIME": {'+
            '"t0": "1",'+
            '"t1": "1",'+
            '"t2": "1"'+
        '},'+
		
    '"LARGE": {'+
        '"l1": "1",'+
        '"l2": "1",'+
        '"l3": "0",'+
        '"l4": "0"'+
	' },'+

    '"ABOUT": "I began pet sitting dogs around the age of ten or so for my next door neighbors.In my mid teenage years I volunteered at SICSA walking dogs twice a week. My love for animals has continued on through years, I have volunteered in Africa taking care of lions and other wild animals at a refuge in the Jungle. I am currently my friends go to person for any type of animal care due to my reliability, activeness outdoors, and love of animals. Your dog will be the only animal in my home, so they will have special individual care."'+
'}';
 

var users2 = '{'+
    '"IMG": "./Images/Pros/user3.png",'+
    '"NAME": "Jamie",'+
    '"ADDRESS": "South Lake Union, Seattle, WA, 98109",'+
    '"CATEGORY": '+
        '{'+
            '"walking": '+
                '{'+
                    '"validation": "1",'+
                    '"price": "15"'+
               ' },'+
            '"training": '+
                '{'+
                    '"validation": "1",'+
                    '"price": "25"'+
                '},'+
            '"sitting": '+
                '{'+
                    '"validation": "0",'+
                    '"price": "12"'+
                '},'+
            '"grooming": '+
                '{'+
                    '"validation": "0",'+
                    '"price": "30"'+
                '}'+
	    '},'+
    '"REVIEW": ['+
        '{'+
            '"name": "Zhikun",'+
            '"date": "04/15/2017",'+
            '"content": "Jamie was friendly, accommodating, and easy to work with in the booking process. He took good care of Winston and he got some time to play with her pup too! He came home happy & healthy. Thanks!"'+
        '},'+
        '{'+
            '"name": "Pai",'+
            '"date": "04/08/2017",'+
            '"content": "Jamie was an absolutely fantastic sitter for my dog Stella. Stella stayed with her for 4 days , and she had a great time. According to Jamie she made herself right at home, which for me meant she was comfortable. Jamie provided me daily updates with pictures and I knew she was in great hands so didn\'t need to worry and could enjoy my vacation."'+
        '}'+
    '],'+
    '"STARTDATE": "04/20/2017",'+
    '"ENDDATE": "05/15/2017",'+
    '"WEEK": {'+
            '"monday": "0",'+
            '"tuesday": "1",'+
            '"wednesday": "0",'+
            '"thursday": "1",'+
            '"friday": "0",'+
            '"saturday": "1",'+
            '"sunday": "0"'+
    '},'+
    '"TIME": {'+
            '"t0": "1",'+
            '"t1": "0",'+
            '"t2": "1"'+
    '},'+
    '"LARGE": {'+
        '"l1": "1",'+
        '"l2": "1",'+
        '"l3": "0",'+
        '"l4": "0"'+
	' },'+

    '"ABOUT": "I have been an animal lover my entire life, but I am especially fond of dogs. I have been around dogs for as long as I can remember but unfortunately can\'t have one of my own for a while until I am done with school (trying to get into med school). I have always been the go-to pet sitter for all of my family and friends whenever they are out of town and their dogs and cats have become my 4-legged nieces and nephews -- gotta live up to that Uncle Jesse title. Your pets will always be treated as family in my book."'+
'}';


var users3 = '{'+
    '"IMG": "./Images/Pros/user4.png",'+
    '"NAME": "Charlie",'+
    '"ADDRESS": "First Hill, Seattle, WA, 98101",'+
    '"CATEGORY": '+
        '{'+
            '"walking":'+
                '{'+
                   ' "validation": "1",'+
                    '"price": "16"'+
                '},'+
            '"training": '+
                '{'+
                    '"validation": "1",'+
                    '"price": "30"'+
                '},'+
                '"sitting": '+
                '{'+
                    '"validation": "0",'+
                    '"price": "12"'+
                '},'+
            '"grooming": '+
                '{'+
                    '"validation": "0",'+
                    '"price": "30"'+
                '}'+
        '},'+
    '"REVIEW": ['+
        '{'+
            '"name": "Yalin",'+
            '"date": "04/12/2017",'+
            '"content": "Charlie was great and super helpful! I can tell that my dog, Sanuk felt right at home with her in his home. He didn\'t seem stressed at all when we picked him up and he seems like he had a great time."'+
       ' },'+
        '{'+
            '"name": "Rose",'+
            '"date": "04/08/2017",'+
            '"content": "We had a great experience with Charlie, dog was happy and so are we. We will definitely use Charlie again."'+
       ' }'+
    '],'+
    '"STARTDATE": "04/20/2017",'+
    '"ENDDATE": "05/15/2017",'+
    '"WEEK": '+
        '{'+
            '"monday": "0",'+
            '"tuesday": "1",'+
            '"wednesday": "0",'+
            '"thursday": "1",'+
            '"friday": "0",'+
            '"saturday": "1",'+
            '"sunday": "0"'+
        '},'+
    '"TIME": '+
        '{'+
            '"t0": "1",'+
            '"t1": "0",'+
            '"t2": "1"'+
        '},'+
    	'"LARGE": {'+
        '"l1": "1",'+
        '"l2": "1",'+
        '"l3": "1",'+
        '"l4": "0"'+
	' },'+

    '"ABOUT": "I love having dogs along for active adventures or even just walks/runs around nearby parks. I live next to Greenlake and Woodland Park, so I have lots of options for meaningful outings to give your dog some much needed exercise. I also love being able to take dogs out on hiking trips in the area if they\'re up for the challenge. I am always attentive and affectionate with animals and can vary from active sitting, to just calm cuddle time inside if that\'s what makes the dog happiest."'+
'}';

var users4 = '{'+
    '"IMG": "./Images/Pros/user5.png",'+
    '"NAME": "Diana",'+
    '"ADDRESS": "Belltown, Seattle, WA, 98121",'+
    '"CATEGORY":'+
        '{'+
            '"walking": '+
                '{'+
                    '"validation": "1",'+
                    '"price": "12"'+
                '},'+
            '"training":'+
                '{'+
                    '"validation": "0",'+
                    '"price": "30"'+
                '},'+
            '"sitting":'+
                '{'+
                    '"validation": "0",'+
                    '"price": "12"'+
                '},'+
            '"grooming": '+
                '{'+
                    '"validation": "1",'+
                    '"price": "32"'+
                '}'+
	    '},'+
    '"REVIEW": ['+
        '{'+
            '"name": "Yue",'+
            '"date": "04/12/2017",'+
            '"content": "Dianawasgreat! Diana tookcareofpuppywhilewewereawayfortheday.She took Lucy for a long walk and Lucy came home happy and tired. We will definitely book with Diana again."'+
        '},'+
        '{'+
            '"name": "Niu",'+
            '"date": "04/20/2017",'+
            '"content": "Diana is amazing! My dog Lola loves her and she sends lots of photos so I\'m updated. Highly recommend her!"'+
        '}'+
    '],'+
    '"STARTDATE": "04/20/2017",'+
    '"ENDDATE": "05/5/2017",'+
    '"WEEK":{ '+
            '"monday": "1",'+
            '"tuesday": "1",'+
            '"wednesday": "1",'+
            '"thursday": "1",'+
            '"friday": "1",'+
            '"saturday": "0",'+
            '"sunday": "0"'+
        '},'+
    '"TIME": {'+
            '"t0": "0",'+
            '"t1": "1",'+
            '"t2": "0"'+
        '},'+
    '"LARGE": {'+
        '"l1": "1",'+
        '"l2": "1",'+
        '"l3": "1",'+
        '"l4": "0"'+
	' },'+

    '"ABOUT": "Who doesn\'t love dogs? I sure do however I am a flight attendant and sadly not home enough to give a pup the full attention he/she deserves! Having the opportunity to take care of your best friend would be a wonderful pleasure! I grew up with a black lab and enjoy going for run/walks, taking them swimming, playing catch and constant belly rubs! My job allows me to have full days off with out any distractions so I am free to play and care as long as you may need. I understand how stressful it may be to leave your family member for the day or night so however I can be of help to alleviate that worry is what I\'m here for! Hope to meet your pal soon while creating a new trusted and reliable sitter for you!"'+
'}';

var users5 = '{'+
    '"IMG": "./Images/Pros/user6.png",'+
    '"NAME": "Anthony",'+
    '"ADDRESS": "Belltown, Seattle, WA, 98121",'+
    '"CATEGORY": '+
        '{'+
            '"walking": '+
                '{'+
                    '"validation": "1",'+
                    '"price": "16"'+
                '},'+
           ' "training": '+
                '{'+
                    '"validation": "0",'+
                    '"price": "30"'+
                '},'+
            '"sitting": '+
                '{'+
                    '"validation": "0",'+
                    '"price": "12"'+
                '},'+
            '"grooming": '+
                '{'+
                    '"validation": "1",'+
                    '"price": "30"'+
                '}'+
	    '},'+
    '"REVIEW": ['+
        '{'+
            '"name": "Kelly",'+
            '"date": "04/12/2017",'+
            '"content": "Anthony was the most thoughtful, responsible dog sitter I have ever had! He took amazing care of Brody and went above and beyond to make sure he had a great time! He is so so sweet and even gave us a ride home because I don\'t have a car. Simply the best! I would highly recommend him!"'+
       ' },'+
        '{'+
            '"name": "Mike",'+
            '"date": "04/20/2017",'+
            '"content": "Anthony was really good with taking care of Mona. He sent me pictures throughout the days keeping me up to date, and took better pictures of Mona than I have ever done. Mona was a little sad when I brought her back home which makes me think she had a wonderful time with Anthony."'+
        '}'+
    '],'+
    '"STARTDATE": "04/20/2017",'+
    '"ENDDATE": "05/5/2017",'+
    '"WEEK": {'+
            '"monday": "1",'+
            '"tuesday": "1",'+
            '"wednesday": "1",'+
            '"thursday": "1",'+
            '"friday": "1",'+
            '"saturday": "0",'+
            '"sunday": "0"'+
    '},'+
    '"TIME": '+
        '{'+
            '"t0": "0",'+
            '"t1": "1",'+
            '"t2": "0"'+
'},'+
'"LARGE": {'+
        '"l1": "1",'+
        '"l2": "1",'+
        '"l3": "1",'+
        '"l4": "0"'+
	' },'+
    '"ABOUT": "Frequently walked, dog sat, and house sat for family, friends and family friends back in St. Louis, New to Seattle with some time on my hands. Love dogs of all sizes and breeds. Can run, walk, hike w/ dog depending on preference. I have been apart of two separate puppy births, assisted in one, watched the other. I live with 4 dogs now, 2 30-35 lbs mutts, a 55 lb german shepherd collie mix and 65 lb Husky lab mix and walk them all at once at least once a day. You can count of me to be timely, professional and respectful. I follow instructions well and will provide regular updates of my time with your pets. Happy to help out whenever you need it!"'+
'}';


var users6 = '{'+
    '"IMG": "./Images/Pros/user7.png",'+
    '"NAME": "Scott",'+
    '"ADDRESS": "First Hill, Seattle, WA, 98101",'+
    '"CATEGORY": '+
        '{'+
            '"walking": '+
                '{'+
                    '"validation": "0",'+
                    '"price": "16"'+
                '},'+
            '"training": '+
                '{'+
                    '"validation": "1",'+
                    '"price": "30"'+
                '},'+
            '"sitting": '+
                '{'+
                    '"validation": "1",'+
                    '"price": "10"'+
                '},'+
            '"grooming": '+
                '{'+
                    '"validation": "0",'+
                    '"price": "30"'+
                '}'+
	    '},'+
    '"REVIEW": ['+
        '{'+
            '"name": "Kong",'+
            '"date": "04/12/2017",'+
            '"content": "Scott took excellent care of Bear! He obviously knows a lot about dogs and was very sensitive to our dogs individual needs. He sent updates every night and got up early to take the dog to the park every morning, even without asking! Plus,itwasobviousBearreallyLikedScott Iwouldhighlyrecommendhim,he is perfect for the job!"'+
        '},'+
        '{'+
            '"name": "Jay",'+
            '"date": "04/20/2017",'+
            '"content": "Scott and her family were absolutely the best! Can\'t wait to send Zoe there again."'+
        '}'+
    '],'+
    '"STARTDATE": "04/20/2017",'+
    '"ENDDATE": "05/20/2017",'+
    '"WEEK": '+
        '{'+
            '"monday": "0",'+
            '"tuesday": "0",'+
            '"wednesday": "0",'+
            '"thursday": "0",'+
            '"friday": "0",'+
            '"saturday": "1",'+
            '"sunday": "1"'+
        '},'+
    '"TIME": '+
        '{'+
            '"t0": "0",'+
            '"t1": "1",'+
            '"t2": "1"'+
        '},'+
    '"LARGE": {'+
        '"l1": "1",'+
        '"l2": "1",'+
        '"l3": "1",'+
        '"l4": "0"'+
	' },'+

    '"ABOUT": "We have enjoyed dogs and other animals all our lives! We have a large dog-proof fenced yard that is great to play in. Close by are several parks, a beach we walk to and a dog park only a 4 min drive away! There is almost always at least one adult home at all times. We have our own 5 year old lab mix, Obi, who is friendly, a good playmate and just plain fun to have around. He enjoys having play-friends come over to visit, but won\'t smother them if they need their space. We would love the opportunity to care for your dog. Whether it\'s a few nights, just the day or you need someone to run over to walk pooch for 30 minutes please don\'t hesitate to call us!"'+
'}';


var users7 = '{'+
    '"IMG": "./Images/Pros/user8.png",'+
    '"NAME": "Vivian",'+
    '"ADDRESS": "Capitol Hill, Seattle, WA, 98102",'+
    '"CATEGORY": '+
        '{'+
            '"walking": '+
                '{'+
                    '"validation": "0",'+
                    '"price": "16"'+
                '},'+
            '"training": '+
                '{'+
                    '"validation": "1",'+
                    '"price": "25"'+
                '},'+
            '"sitting": '+
                '{'+
                    '"validation": "1",'+
                    '"price": "15"'+
                '},'+
            '"grooming": '+
                '{'+
                    '"validation": "0",'+
                    '"price": "30"'+
                '}'+
	    '},'+
    '"REVIEW": ['+
        '{'+
            '"name": "Jin",'+
            '"date": "04/02/2017",'+
            '"content": "Vivian is such a great babysitter for my three-year-old Maltipoo. Her apartment was very clean and she took such great pictures of my dog and send them my way when I traveled. Duke looked like he had a lot of fun with Mandy.I\'ll definitely book her again the next time I travel!"'+
        '},'+
        '{'+
            '"name": "Alice",'+
            '"date": "04/20/2017",'+
            '"content": "Vivian was wonderful watching my pup Lola for me for the day! I needed a last minute drop in visit and she was able to assist. I received multiple pictures of Lola (which I love) and knew she was in good hands. I would highly recommend Mandy and use her services again. Thanks Vivian!"'+
        '}'+
    '],'+
    '"STARTDATE": "04/20/2017",'+
    '"ENDDATE": "05/20/2017",'+
    '"WEEK": '+
        '{'+
            '"monday": "0",'+
            '"tuesday": "0",'+
            '"wednesday": "0",'+
            '"thursday": "0",'+
            '"friday": "0",'+
            '"saturday": "1",'+
            '"sunday": "1"'+
        '},'+
    '"TIME": '+
        '{'+
            '"t0": "0",'+
            '"t1": "1",'+
            '"t2": "1"'+
	    '},'+
     '"LARGE": {'+
        '"l1": "1",'+
        '"l2": "1",'+
        '"l3": "1",'+
        '"l4": "0"'+
	' },'+

    '"ABOUT": "I have worked with dogs, including my own, in obedience and agility training for 10 plus years. So no matter what your dog\'s needs are I am prepared to walk and play with them. I have been walking dogs in the Seattle area for the last year and a half and I absolutely love it. I also have an adorable little orange cat named Milo who I love hanging out and playing with, so I also have quite a bit of experience with cats and their many different moods. Animals are my passion so please feel free to reach out as I am happy to talk and answer any questions you may have to make sure I am the right fit for you and your pets!"'+
'}';

users.push(users0);
users.push(users1);
users.push(users2);
users.push(users3);
users.push(users4);
users.push(users5);
users.push(users6);
users.push(users7);

var storage=window.localStorage;
storage.setItem("user1",users0);
storage.setItem("user2",users1);
storage.setItem("user3",users2);
storage.setItem("user4",users3);
storage.setItem("user5",users4);
storage.setItem("user6",users5);
storage.setItem("user7",users6);
storage.setItem("user8",users7);


function filter(){
	for (var i = 0; i < 8; i++) {
		var user = JSON.parse(users[i]);
		var catagory = new Array();
		var cat = user.CATEGORY;
		var c1 = cat.walking.validation, c2 = cat.training.validation, c3 = cat.sitting.validation, c4 = cat.grooming.validation;
		catagory.push(c1);		catagory.push(c2); 		catagory.push(c3);		catagory.push(c4);

		var cataSel = -1;
		if ($("#subCat").val() == "dog-walking") {
			cataSel = 0;
		} else if ($("#subCat").val() == "dog-sitting"){
			cataSel = 1;
		}else if ($("#subCat").val() == "dog-training"){
			cataSel = 2;
		}else if ($("#subCat").val() == "dog-grooming"){
			 cataSel= 3;
		}
		
		if (catagory[cataSel] == '0') {
			document.getElementById("user" + i).style.display='none';
		}
		
		if (cataSel == 0) {
			var week = new Array();		
			var day = user.WEEK;
			var week1 = day.monday, week2 = day.tuesday, week3 =  day.wednesday, week4 = day.thursday, week5 = day.friday, week6 = day.saturday, week7 = day.sunday;
			week.push(week1);			week.push(week2);			week.push(week3);			week.push(week4);			week.push(week5);			week.push(week6);			week.push(week7);
			
			
			var weekSet = new Set();
			for (var a = 0; a < 7; a++) {
				if (week[a] == '1'){
					weekSet.add(a);
				}
			}
			
			var flag = false;
			for (var b = 0; b < 7; b++) {
				if (document.getElementById("w"+b).checked==true && weekSet.has(b)) {
					flag = true;
				}
			}
			if (flag == false) {
				var j = i + 1;
				document.getElementById("user" + j).style.display='none';
			} else {
				var j = i + 1;
				document.getElementById("user" + j).style.display='initial';
			}
			//alert(flag);
			
			var time = new Array();
			var t0 = user.TIME.t0, t1 = user.TIME.t1, t2 = user.TIME.t2;
			time.push(t0);   time.push(t1); time.push(t2);
 			var tSet = new Set();
			
			for (var c = 0; c < 3; c++) {
				if (time[c] == '1'){
					tSet.add(c);
				}
			}
			
		    flag2 = false;
			for (var d = 0; d < 3; d++) {
				if (document.getElementById("t"+d).checked==true && tSet.has(d)) {
					flag2 = true;
				}
			}
			flag3 = size(user, i);
			flag2 = flag && flag2 && flag3;
			
			var k = i + 1;
			if (flag2 == false) { 
				document.getElementById("user" + k).style.display='none';
			} else {
				document.getElementById("user" + k).style.display='initial';
			}
		
		}
		if (cataSel == 1 || cataSel == 2) {
			size(user,i);
		}
		if (cataSel == 3) {
			var k = i + 1;
			if (size(user,i) && time1(user,i) == true){
				document.getElementById("user" + k).style.display='initial';
			}else {
				document.getElementById("user" + k).style.display='none';
			}
		}
	}
}

function size(user,i){
	var size = new Array();
	var s0 = user.LARGE.l1, s1 = user.LARGE.l2, s2 = user.LARGE.l3, s3 = user.LARGE.l4;
	size.push(s0);   size.push(s1); size.push(s2); size.push(s3);
 	var set = new Set();
	
	for (var c = 0; c < 4; c++) {
		if (size[c] == '1'){
			set.add(c);
		}
	}
			
	var flag2 = false;
	for (var d = 0; d < 4; d++) {
		var k = d+1;
		if (document.getElementById("l"+k).checked==true && set.has(d)) {
			flag2 = true;
		}
	}
	var kk = i + 1;
	if (flag2 == false) { 
		document.getElementById("user" + kk).style.display='none';
	} else {
		document.getElementById("user" + kk).style.display='initial';
	}
	return flag2;
}

function time1(user,i){
	var time = new Array();
	var t0 = user.TIME.t0, t1 = user.TIME.t1, t2 = user.TIME.t2;
	time.push(t0);   time.push(t1); time.push(t2);
 	var tSet = new Set();
			
	for (var c = 0; c < 3; c++) {
		if (time[c] == '1'){
			tSet.add(c);
			}
		}
			
		var flag2 = false;
		for (var d = 0; d < 3; d++) {
			if (document.getElementById("t"+d).checked==true && tSet.has(d)) {
				flag2 = true;
			}
		}
	return flag2;
}

















