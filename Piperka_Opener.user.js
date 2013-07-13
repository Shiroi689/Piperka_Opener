// ==UserScript==
// @name        Piperka Opener
// @namespace   Shiroi689
// @description Opens webcomic links from Piperka updates page
// @include     http://piperka.net/updates.html
// @version     1
// @grant       none


for(i=0;i<100;i++){
	document.getElementsByTagName("li")[i].id=i;
	alert(i);
	}
// ==/UserScript==