define(['settings'], function(settings) {
	var oAuth = {};

	oAuth.checkForAccessToken = function(url) {
		var accessToken = null;
		return accessToken;
	};

	oAuth.requestAccessToken = function() {
		var requestUrl = settings.authorizeUrl + '?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token';
	};

	return oAuth;

});