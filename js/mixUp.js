

(function () {

  require.config({
  });

	require([
		'oAuth',
		'instagram'
	], function(oAuth, instagram) {


		var token = oAuth.checkForAccessToken();

		var loginButton = document.getElementById('login-button');

		loginButton.addEventListener('click', function() {
			oAuth.requestAccessToken();
		});
   });
})();