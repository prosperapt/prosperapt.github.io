const pub = 1;
const des = "https://disney.com/";
const img = "/0/pub.jpg";
const tex = "Miau! Este é um texto promocional deste <a id='pub'>produto maravilhoso</a> que deve comprar. Pode conter legalmente até 120 caracteres!";

/** Não mexer. **/
if ( pub != 0 ) {
	const h = document.createElement("header");
	h.innerHTML = "<span><small>PUB.</small></span><span><a id='pub1'><img id='pub2' alt='Publicidade'></a></span><span>" + tex + "<span>";
	document.body.insertBefore(h, document.body.firstChild);
	document.getElementById("pub").href= des;
	document.getElementById("pub1").href= des;
	document.getElementById("pub2").src= img;
}
