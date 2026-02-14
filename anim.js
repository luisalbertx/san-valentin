// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Desde que llegaste a mi vida.", time: 10 },
  { text: "todo cambió de una manera que nunca imaginé.", time: 18 },
  { text: "No fue algo ruidoso ni exagerado, fue algo suave…", time: 27 },
  { text: "pero tan fuerte que transformó mi mundo sin que me diera cuenta.", time: 32 },
  { text: "Contigo entendí que el amor no es solo decir", time: 36 },
  { text: "“TE QUIERO”,", time: 41 },
  { text: "es sentir paz en medio del caos, es sonreír sin motivo.", time: 47 },
  { text: "es pensar en alguien y que el corazón lata un poquito más rápido.", time: 54 },
  { text: "Me enseñaste que amar no es necesitar", time: 59 },
  { text: "sino elegir todos los días.", time: 67 },
  { text: "Y yo te elijo a ti, hoy y siempre", time: 72 },
  { text: "Elijo tu risa, tu forma de mirar,", time: 78 },
  { text: "tus abrazos que parecen hogar.", time: 83 },
  { text: "Elijo tus defectos, tus manías, tus sueños y todo lo que eres.", time: 91 },
  { text: "Porque contigo no solo encontré amor, encontré compañerismo, complicidad", time: 97 },
  { text: "y una felicidad que no sabía que existía.", time: 104 },
  { text: "Si alguna vez dudas de lo importante que eres para mí,", time: 108 },
  { text: "recuerda esto:", time: 115 },
  { text: "llegaste a mi vida y la hiciste mejor. Y eso es algo que jamás voy a dejar de agradecer.", time: 120 },
  { text: "Te quiero más de lo que las palabras pueden explicar. ❤️", time: 143 },
  {text: "Gracias por todo pequis , siempre agradecere a la vida por haberte conocido. ❤️", time: 150 },
 
 
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);