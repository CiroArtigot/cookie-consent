// JavaScript Document


	var lng = window.navigator.userLanguage || window.navigator.language;
	//es-ES o en-EN

	if(lng=='es-ES') {
		
		var asmconfig = {
			gaid : 'xxxxxx',
			ad_not_acepted : 'Estado: <strong>Aceptas</strong> las cookies necesarias.',
			ad_acepted : 'Estado: <strong>Has aceptado</strong> todas las cookies.',
			ad_acepted_stats : 'Estado: <strong>Has aceptado</strong> las cookies necesarias y de estadísticas.',
			aviso : '<p>Este sitio utiliza cookies necesarias, y otras que se usan para funciones avanzadas, estadísticas o acciones de marketing.</p><p>Puedes aceptarlas todas o configurar su uso:</p>',
			aviso2 : 'Pincha <a href="/cookies" class="asm-more-info">aquí</a> para saber más.',
			pie : '<div class="pieadvice"><a href="https://algosemueve.es/asm-cookie-consent" class="asmlink" target="_blank">ASM Cookie Consent</a></div>',	
			taceptar1 : 'Aceptar solo necesarias',
			taceptar2 : 'Aceptar estadísticas',
			taceptar3 : 'Aceptar todas',
			tconfig: 'Configurar'
		}				
		
	} else {
		
		var asmconfig = {
			gaid : 'xxxx',
			ad_not_acepted : 'State: <strong>Aceptas</strong> las cookies necesarias.',
			ad_acepted : 'State: <strong>Has aceptado</strong> todas las cookies.',
			ad_acepted_stats : 'State: <strong>Has aceptado</strong> las cookies necesarias y de estadísticas.',
			aviso : '<p>Este sitio ultiliza cookies necesarias, y otras que se usan para funciones avanzadas, estadísticas o acciones de marketing.</p><p>Puedes aceptarlas todas o configurar su uso:</p>',
			aviso2 : 'Click <a href="/cookies" class="asm-more-info">here</a> for more info.',
			pie : '<div class="pieadvice"><a href="https://algosemueve.es/en/asm-cookie-consent" class="asmlink" target="_blank">ASM Cookie Consent</a></div>',
			taceptar1 : 'Accept only necesary',
			taceptar2 : 'accept stats',
			taceptar3 : 'Accept all',
			tconfig: 'Config'
		}	

	}
