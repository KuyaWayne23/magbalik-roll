document.addEventListener('DOMContentLoaded', function () {
	const VideoPlayer = document.getElementById('my-video');

	VideoPlayer.addEventListener('play', function (event) {
		event.preventDefault();

		// alert(`Video Has Played`);
		document.getElementById('itchafrank').innerText = 'SIKE! YOU JUST GOT MAGBALIK-ROLLED!';
	});
});