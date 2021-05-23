// JavaScript Document


	var gaid = asmconfig.gaid;

	var asm_cookie_consent = getCookie("asm_cookie_consent");
	var consent = 0;
	var accepted = false;

	var ad_not_acepted = asmconfig.ad_not_acepted;
	var ad_acepted = asmconfig.ad_acepted;
	var ad_acepted_stats = asmconfig.ad_acepted_stats;
	var aviso = asmconfig.aviso;
	var aviso2 = asmconfig.aviso2;
	var pie = asmconfig.pie; 

	if(asm_cookie_consent == "1") consent = 1;
	if(asm_cookie_consent == "2") consent = 2;


	// GOOGLE TAG CONFIGURATION
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	// if we have consent (by cookie) granted, if not, denied.
	if(consent == 1) gtag('consent', 'default', {analytics_storage: "granted"});
	if(consent == 2) gtag('consent', 'default', {'ad_storage': 'granted', analytics_storage: "granted"});
	if(consent == 0) gtag('consent', 'default', {'ad_storage': 'denied', analytics_storage: "denied"});	
		
	gtag('config', gaid);
	// END OF GOOGLE TAG CONFIGURATION
		
	//css
	document.write('<style>div#cookie_button {z-index: 999999999;position: fixed; bottom: 0; right:0; color: #fff;transition: all 2s ease-in;}.aviso.hidden{opacity:0; visibility:hidden; transition: all 1s ease-in;}.aviso {z-index: 999999999;visibility: visible;opacity: 1;position: fixed;;bottom: 0;right: 0;width: 100%;max-width: 100%;background-color: #fff;color: #000;PADDING: 50px;transition: opacity 1s;font-size: 16px;font-family: Arial;line-height: 20px;text-align: center;}.aviso p {margin: 0;margin-bottom: 10px;}.asm-button {padding: 10px;margin: 7px;border: 0;font-size: 15px;cursor: pointer; background-color: #fff;}a.asm-more-info {color: #fff;}svg#Capa_1 {width: 40px;height: 40px;fill: #ca7c1b;position: relative;top: 8px;left: 8px;}button#cookie_button_b {background-color: transparent;margin: 0;padding: 20px;border-radius: 140px 0 0;}button#acepta,button#acepta1, button#acepta2 {background-color: darkcyan;color: #fff;font-size: 16px;} svg#config{position: relative;top: 5px;margin-right: 3px;margin-top: -11px;fill: #333;}button#rechaza {background-color: #ccc;font-size: 16px;color: #333;}a.asm-more-info {color: #008b8b;font-weight: 700;text-decoration: underline;}div#asm_state {margin-top: 20px;margin-bottom: 10px;}.pieadvice {position: absolute;bottom: 10px;right: 10px;font-size: 12px;padding: 2px;color: #666;}button#acepta2, button#acepta1 {background-color: #757c7c;}svg#closeams {position: absolute;top: 20px;right: 20px;cursor: pointer;}</style>');
	
	//configuration button
	document.write('<div class="cookie_button" id="cookie_button" style=""><button type="button" id="cookie_button_b"  onclick="show_popup();" class="asm-button"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M501.791,236.285c-32.933-11.827-53.189-45.342-50.644-71.807c0-4.351-2.607-8.394-5.903-11.25 c-3.296-2.842-8.408-4.072-12.686-3.384c-50.186,7.363-96.14-29.352-100.693-80.962c-0.41-4.658-2.959-8.848-6.914-11.353 c-3.94-2.49-8.848-3.032-13.198-1.406C271.074,71.02,232.637,44.084,217.3,8.986c-2.871-6.563-9.99-10.181-17.007-8.628 C84.82,26.125,0.001,137.657,0.001,256.002c0,140.61,115.39,256,256,256s256-115.39,256-256 C511.584,247.068,511.522,239.771,501.791,236.285z M105.251,272.131c-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15 s15,6.714,15,15C120.251,265.415,113.534,272.131,105.251,272.131z M166.001,391.002c-24.814,0-45-20.186-45-45 c0-24.814,20.186-45,45-45c24.814,0,45,20.186,45,45C211.001,370.816,190.816,391.002,166.001,391.002z M181.001,211.002 c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30C211.001,197.54,197.539,211.002,181.001,211.002z M301.001,421.002c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30 C331.001,407.54,317.539,421.002,301.001,421.002z M316.001,301.002c-24.814,0-45-20.186-45-45c0-24.814,20.186-45,45-45 c24.814,0,45,20.186,45,45C361.001,280.816,340.816,301.002,316.001,301.002z M405.251,332.131c-8.284,0-15-6.716-15-15 c0-8.286,6.716-15,15-15s15,6.714,15,15C420.251,325.415,413.534,332.131,405.251,332.131z"/></g></g></svg></button></div>');

	document.write('<div class="aviso hidden" id="aviso" style=""><svg id="closeams" style="display:none;" onclick="hide_popup();"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>' + aviso + '<button type="button" style="display:none" class="asm-button asm-button-1" id="acepta1"  onclick="solo_necesarias();" >' + asmconfig.taceptar1 + '</button><button type="button" style="display:none" class="asm-button asm-button-2" id="acepta2"  onclick="aceptar(1);" >' + asmconfig.taceptar2 + '</button><button type="button" class="asm-button" id="acepta"  onclick="aceptar(2);" >' + asmconfig.taceptar3 + '</button><button type="button" id="rechaza" class="asm-button" onclick="rechazar();" ><svg id="config"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></g></svg>' + asmconfig.tconfig + '</button><div id="asm_state">' + ad_not_acepted + '</div><div id="aviso2">' + aviso2 + '</div>' + pie + '</div>');

	// if there is no consent we show the popup, if we have it, we will not display it.
	if(!consent) popup('show');
	document.getElementById("cookie_button").classList.remove("hidden");

	if(consent) {
		if(consent==1) document.getElementById("asm_state").innerHTML = ad_acepted_stats;
		if(consent==2) document.getElementById("asm_state").innerHTML = ad_acepted;
		document.addEventListener('DOMContentLoaded', function() {
			aceptar(consent);
		});		
	}

	function popup(option) {
		var el = document.getElementById("aviso");
		if(option == 'show') el.classList.remove("hidden");
		else el.classList.add("hidden");
		return '';
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
		c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
		}
		}
		return "";
	}

	function loadjs(file, child = '') {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = file;
		script.onload = function(){	
			if(child) {
				var scripts = document.getElementsByTagName('script');			
				for (var i = 0; i < scripts.length; i++) {
					if(scripts[i].type == 'text/plain' && scripts[i].	dataset.main == child) {	
						console.log('econtrado child:' + child);
						eval(scripts[i].innerHTML);					
					}
				}
			}
		};
		document.body.appendChild(script);
	}	

	function aceptar(modo) {
		
		document.getElementById("closeams").style.display = "block";
		
		if(modo==1) document.getElementById("asm_state").innerHTML = ad_acepted_stats;
		if(modo==2) document.getElementById("asm_state").innerHTML = ad_acepted;
		document.cookie = "asm_cookie_consent=" + modo + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
		
		if(!accepted){
			
			//UPDATE GTAG
			if(modo==1) gtag('consent', 'update', {'analytics_storage': 'granted'});	
			if(modo==2) gtag('consent', 'update', {'ad_storage': 'granted', 'analytics_storage': 'granted'});	
			
			//HERE YOU CAN ENTER YOUR OWN SCRIPTS
			//loadjs('/media/aceptar.js');			
			/* insert code here */	
			if(modo==2) {
				
				loadjs('https://cdn.onesignal.com/sdks/OneSignalSDK.js');
					window.OneSignal = window.OneSignal || [];
					OneSignal.push(function() {
					OneSignal.init({
					appId: "6e9d2ebf-e383-4e4d-9944-a1faf87f7a3d",
					});
					});	

				/* end code */

				var scripts = document.getElementsByTagName('script');			
				for (var i = 0; i < scripts.length; i++) {
					if(scripts[i].type == 'text/plain' && !scripts[i].dataset.main) {	
						if (scripts[i].src) loadjs(scripts[i].src, scripts[i].dataset.child);				
						else eval(scripts[i].innerHTML);
					}
				}

			}

		}

		accepted = true;
		popup('hide');
		return;
	}	
	
	function rechazar() {
		document.getElementById("acepta1").style.display = "inline-block";
		document.getElementById("acepta2").style.display = "inline-block";
		document.getElementById("acepta1").style.fontSize = "14px";
		document.getElementById("acepta2").style.fontSize = "14px";
		document.getElementById("acepta").style.fontSize = "14px";
		document.getElementById("rechaza").style.display = "none";
		return;
	}	


	function solo_necesarias() {
		document.getElementById("asm_state").innerHTML = ad_not_acepted;
		document.cookie = "asm_cookie_consent=0; expires=Thu, 01-Jan-1970 00:00:01 GMT UTC; path=/";
		popup('hide');
		return;
	}	


	function show_popup() { popup('show'); };
	function hide_popup() { popup('hide'); };

