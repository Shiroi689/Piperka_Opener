// ==UserScript==
// @name        Piperka Opener
// @namespace   Shiroi689
// @description Opens webcomic links from Piperka updates page
// @include     http://piperka.net/updates.html
// @version     1
// @grant       none

	function findUpdates(el){
		var patt1 = new RegExp("\\((\\d+) new\\)");
		return patt1.exec(el.innerHTML)[1];
	}

	var list = document.getElementsByTagName("li");
	var i = list.length-1
	var up = findUpdates(list[i]);
	if(up>20){
		alert("No minor updates available.");
		return 0}
	var flag=0;
	if(up>=3){
		alert("The opened comics will have three or more updates.");
		flag=1;
	}
	if(up<3) alert("The opened comics will have "+up+" update");
	var n=up;
	while(i>=0&&n<21&&(flag||n==up)){
		window.open(list[i].firstChild.href);
		i--;
		n=findUpdates(list[i]);
	}
// ==/UserScript==