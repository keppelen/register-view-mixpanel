function  abUser( config ) {

	var now = {
		day: new Date().getUTCDate(),
		month: new Date().getUTCMonth() + 1,
		nextMonth: new Date().getUTCMonth() + 2,
		year: new Date().getUTCFullYear()
	};

	if ( now.month >= 12 ) {
		now.nextMonth = 1;
	}

	var cookieName = 'gt_TesteAB_' + slug(config.name),
		cookieExpire = now.year + '/' + now.nextMonth + '/' + now.day,
		cookieValue;
		

	if ( hasCookie(cookieName) ) {
		cookieValue = hasCookie(cookieName);
		return  cookieValue;
	}
	else {
		setCookie( cookieName, randon( cookieName ),  cookieExpire );
		setProperty();
		return randon();
	}


	function hasCookie( name ) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		
		if ( parts.length == 2 ) {
			var result = parts.pop().split(";").shift();
			return parseInt(result, 10);
		}
		else {
			return false;
		}
	}


	function randon( ) {
		var name = md5(cookieName),
			timeStamp = new Date().getTime();

		return (parseInt(name.substring(10), 32) + timeStamp) % config.variation;
	}


	function setProperty() {
		var objMixpanel = {};
			objMixpanel[cookieName] = randon();

		mixpanel.register( objMixpanel );
	}


	function setCookie(name, value, expires) {
		document.cookie = name + "=" + value + "; expires="+ new Date(expires) +"; path=/";
	}


	function slug(str) {
		return str.toLowerCase().replace(/\s/g, '_');
	}

}