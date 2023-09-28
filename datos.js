let valorInput = document.getElementById("search");
let boton = document.getElementById("button");
let datos = [];

function showAnime() {
	console.log(datos);
	let appendDiv = "";

	for (let i = 0; i < datos.length; i++) {
		appendDiv += `
		<div class="cart">
		<div class="img">
			<img src="${datos[i].images.jpg.image_url}" alt="" class=" img">
		</div>
		<div class="name">
			<h3>${datos[i].title}</h3>
		</div>
		</div>
		`;
	}

	document.getElementById("Area-contenido").innerHTML = appendDiv;
}

document.addEventListener("DOMContentLoaded", function () {
	getJsonData(valorInput.value)
		.then(data => {
			datos = data.data;
			showAnime();
		})
		.catch(err => {
			console.error("Error:", err);
		});

	boton.addEventListener("click", function () {
		//pedirDatos(info);
		getJsonData(valorInput.value)
			.then(data => {
				datos = data.data;
				showAnime();
			})
			.catch(err => {
				console.error("Error:", err);
			});
	});
});
