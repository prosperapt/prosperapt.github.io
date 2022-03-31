const pub = 0;
const des = "https://placekitten.com/";
const img = "pub.jpg";
const tex = "Miau! Este é um texto promocional deste <a id='pub1'>produto maravilhoso</a> que deve comprar. Pode conter legalmente até 120 caracteres!";

/** Não mexer. **/
	const h = document.getElementsByTagName("header")[0];


if ( pub != 0 ) {
	h.innerHTML = "<figure><a id='pub2'><img id='pub3' alt='Publicidade'></a><figcaption><p><small>PUB.</small><p>" + tex + "</figcaption></figure>";
	document.body.insertBefore(h, document.body.firstChild);
	document.getElementById("pub1").href= des;
	document.getElementById("pub2").href= des;
	document.getElementById("pub3").src= img;
} else h.innerHTML = "";

const svg = "<p><a href='/'><svg viewBox='0 0 300 45'><path d='M0 43.367V.585h18.466q4.763 0 8.335 1.88 3.572 1.88 5.557 5.285 1.985 3.405 1.985 7.959 0 4.596-2.047 7.959-2.026 3.363-5.703 5.181-3.656 1.817-8.544 1.817H7.019v-9.024h8.69q2.047 0 3.489-.71 1.462-.731 2.235-2.068.794-1.337.794-3.154 0-1.838-.794-3.133-.773-1.316-2.235-2.005-1.441-.71-3.489-.71h-4.094v33.507zm35.599 0V.585h18.466q4.763 0 8.335 1.734 3.572 1.734 5.557 4.993 1.985 3.259 1.985 7.813 0 4.596-2.047 7.75-2.026 3.154-5.703 4.763-3.656 1.608-8.544 1.608h-11.03v-9.024h8.69q2.047 0 3.489-.501 1.462-.522 2.235-1.65.794-1.128.794-2.945 0-1.838-.794-2.987-.773-1.17-2.235-1.713-1.441-.564-3.489-.564h-4.094v33.507zm25.068-19.636l10.695 19.636H58.745L48.3 23.731zm52.645-1.755q0 7.144-2.778 12.053-2.778 4.888-7.499 7.416-4.721 2.507-10.528 2.507-5.849 0-10.57-2.528-4.7-2.549-7.478-7.437Q71.7 29.078 71.7 21.976q0-7.144 2.757-12.032 2.778-4.909 7.478-7.416Q86.657 0 92.506 0q5.807 0 10.528 2.528 4.721 2.507 7.499 7.416 2.778 4.888 2.778 12.032zm-11.949 0q0-3.844-1.024-6.476-1.003-2.653-2.987-4.011-1.964-1.379-4.846-1.379-2.883 0-4.867 1.379-1.964 1.358-2.987 4.011-1.003 2.632-1.003 6.476 0 3.844 1.003 6.497 1.024 2.632 2.987 4.011 1.985 1.358 4.867 1.358 2.883 0 4.846-1.358 1.985-1.379 2.987-4.011 1.024-2.653 1.024-6.497zm37.355-8.022q-.167-2.089-1.567-3.259-1.379-1.17-4.199-1.17-1.797 0-2.945.439-1.128.418-1.671 1.149-.543.731-.564 1.671-.042.773.272 1.4.334.606 1.044 1.107.71.48 1.817.877 1.107.397 2.632.71l3.509.752q3.551.752 6.079 1.985 2.528 1.232 4.136 2.904 1.608 1.65 2.361 3.718.773 2.068.794 4.512-.021 4.22-2.11 7.144-2.089 2.925-5.974 4.449-3.865 1.525-9.296 1.525-5.578 0-9.735-1.65-4.136-1.65-6.434-5.076-2.277-3.447-2.298-8.815h11.03q.104 1.964.982 3.301.877 1.337 2.465 2.026 1.608.689 3.823.689 1.859 0 3.113-.46 1.253-.46 1.901-1.274.648-.815.668-1.859-.021-.982-.648-1.713-.606-.752-2.005-1.337-1.4-.606-3.781-1.128l-4.261-.919q-5.682-1.232-8.962-4.115-3.259-2.904-3.238-7.917-.021-4.073 2.173-7.123 2.214-3.071 6.121-4.784Q127.876 0 132.952 0q5.181 0 8.962 1.734 3.781 1.734 5.828 4.888 2.068 3.133 2.089 7.332zm13.122 29.413V.585h18.466q4.763 0 8.335 1.88 3.572 1.88 5.557 5.285 1.985 3.405 1.985 7.959 0 4.596-2.047 7.959-2.026 3.363-5.703 5.181-3.656 1.817-8.544 1.817h-11.03v-9.024h8.69q2.047 0 3.489-.71 1.462-.731 2.235-2.068.794-1.337.794-3.154 0-1.838-.794-3.133-.773-1.316-2.235-2.005-1.441-.71-3.489-.71h-4.094v33.507zm35.6 0V.585h30.833v9.359h-19.218v7.353h17.631v9.359h-17.631v7.353h19.135v9.359zm33.594 0V.585H239.5q4.763 0 8.335 1.734 3.572 1.734 5.557 4.993 1.985 3.259 1.985 7.813 0 4.596-2.047 7.75-2.026 3.154-5.703 4.763-3.656 1.608-8.544 1.608h-11.03v-9.024h8.69q2.047 0 3.489-.501 1.462-.522 2.235-1.65.794-1.128.794-2.945 0-1.838-.794-2.987-.773-1.17-2.235-1.713-1.441-.564-3.489-.564h-4.094v33.507zm25.068-19.636l10.695 19.636H244.18l-10.445-19.636z'/><path d='M268.415 43.367h-12.534L270.002.585h15.876L300 43.367h-12.534l-9.359-31h-.334z'/></svg></a>";

h.innerHTML += svg;

h.innerHTML += "<nav><ul>" +
	"<li><a href='/investir/'>Investir</a>" +
	"<li><a href='/poupar/'>Poupar</a>" +
	"<li><a href='/planear/'>Planear</a>" +
	"</ul><ul>" +
//	"<li><a href='/podcast/'>Podcast</a>" +
//	"<li><a href='/rss/'>RSS</a>" +
	"<li><a href='/sobre/'>Sobre</a>" +
	"<li><a href='javascript:a();'>🔎</a>" +
	"<li><form method='get' action='https://duckduckgo.com/'><input type='hidden' name='sites' value='prospera.pt'><input type='hidden' name='k7' value='#ffffff'><input type='hidden' name='k8' value='#222222'><input type='hidden' name='k9' value='#006400'><input type='hidden' name='kx' value='#006400'><input type='hidden' name='kj' value='#006400'><input type='hidden' name='kt' value='p'><input type='text' name='q' id='pesq' placeholder='Procurar' onblur='javascript:b();'></form></ul></nav>";



const rod = document.createElement("footer");
	rod.innerHTML = svg + "<img src='https://api.countapi.xyz/hit/prospera/conta?img' alt=''>" +
	"<nav><ul>" +
	"<li><a href='/investir/'>Investir</a>" +
	"<li><a href='/poupar/'>Poupar</a>" +
	"<li><a href='/planear/'>Planear</a>" +
	"</ul><ul>" +
//	"<li><a href='/podcast/'>Podcast</a>" +
//	"<li><a href='/rss/'>RSS</a>" +
//	"</ul><ul>" +
	"<li><a href='/sobre/'>Sobre</a>" +
	"<li><a href='/z/manifesto/'>Manifesto</a>" +
//	"<li><a href='/anunciar'>Anunciar</a>" +
	"</ul><ul>" +
	"<li>Siga-nos:" +
//	"<li><a href='https://www.facebook.com/prospera.pt'>Facebook</a>" +
//	"<li><a href='https://www.twitter.com/'>Twitter</a>" +
//	"<li><a href='https://www.linkedin.com/'>LinkedIn</a>" +
	"<li><a href='https://www.instagram.com/prospera.pt/'>Instagram</a>" +
	"</ul></nav>" +
	"<p>A missão do Prospera é ajudar os portugueses a gerir as suas finanças pessoais. Escreva-nos com as suas dúvidas e as suas sugestões para <a href='mailto:correio@prospera.pt' style='color:var(--fundo)'>correio@prospera.pt</a>.";
	document.body.appendChild(rod);



function a(){
	let m = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[1].getElementsByTagName("li");
	for (let i = 0; i <= m.length - 1; i++) { m[i].style.display = 'none'; }
	m[m.length - 1].style.display = 'block';
	document.getElementById("pesq").focus();
}

function b(){
	let m = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[1].getElementsByTagName("li");
	for (let i = 0; i <= m.length - 1; i++) { m[i].style.display = 'block'; }
	m[m.length - 1].style.display = 'none';
}
