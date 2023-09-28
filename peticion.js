const url = " https://api.jikan.moe/v4/anime?q=";

let showSpinner = function () {
	document.getElementById("spinner-wrapper").style.display = "block";
};
let hideSpinner = function () {
	document.getElementById("spinner-wrapper").style.display = "none";
};
function getJsonData(dato) {
	showSpinner();
	return fetch(url + dato + "&sfw")
		.then(response => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			hideSpinner();
			return response.json();
		})

		.catch(err => console.log("err"));
}
