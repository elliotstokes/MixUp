define(['settings'], function(settings) {
	var oAuth = {};

	oAuth.checkForAccessToken = function(url) {
		var accessToken = null;
		return accessToken;
	};

	oAuth.requestAccessToken = function() {
		var requestUrl = settings.authorizeUrl + '?client_id=' + settings.clientId + '&redirect_uri=' + settings.redirectUrl + '&response_type=token';
		window.location = requestUrl;
	};

	return oAuth;

});