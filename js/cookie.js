var storage=window.localStorage;
function setLoginCookie() {
	// document.domain = '163.com';
	username=getCookie('username');
	
	if (username!=null && username!="")
	{alert('Welcome again '+username+'!');}
	else {
		username=document.getElementById("useremail").value;
		if (username!=null && username!=""){
			setCookie('username',username,365);
			storage.setItem("userName",username);
		}
	}
	//document.getElementsByClassName("loginBtnContainer")
	document.getElementById("showName").style.color = '#fff';
	document.getElementById("showName").innerHTML = "<a href='usersPage.html'>"+username+"</a>";
	document.getElementById("loginForm").style.display='none';
	document.getElementById("log").style.display='none';
}


function setCookie(c_name,value,expiredays)
{
	// document.domain = '163.com';
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}


function getCookie(c_name){
	// document.domain = '163.com';
	if (document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start!=-1){ 
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return "";
}
$( document ).ready(function() {
    getShowName();
});

function getShowName() {
	// document.domain = '163.com';
	// username = getCookie('username');
	var username=storage.getItem("userName");
	$("#username").text(username);


}