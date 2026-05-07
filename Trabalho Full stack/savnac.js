const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// fundo preto
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// cor das linhas
ctx.strokeStyle = "#0044ff";
ctx.lineWidth = 4;

// ==========================
// CONTORNO EXTERNO
// ==========================

ctx.beginPath();

// começa
ctx.moveTo(50, 50);

// topo
ctx.lineTo(450, 50);

// curva canto superior direito
ctx.quadraticCurveTo(470, 50, 470, 70);

// direita
ctx.lineTo(470, 430);

// curva inferior direita
ctx.quadraticCurveTo(470, 450, 450, 450);

// baixo
ctx.lineTo(50, 450);

// curva inferior esquerda
ctx.quadraticCurveTo(30, 450, 30, 430);

// esquerda
ctx.lineTo(30, 70);

// curva superior esquerda
ctx.quadraticCurveTo(30, 50, 50, 50);

ctx.stroke();


// ==========================
// SEGUNDA LINHA (INTERNA)
// ==========================

ctx.beginPath();

ctx.moveTo(60, 60);

ctx.lineTo(440, 60);

ctx.quadraticCurveTo(460, 60, 460, 80);

ctx.lineTo(460, 420);

ctx.quadraticCurveTo(460, 440, 440, 440);

ctx.lineTo(60, 440);

ctx.quadraticCurveTo(40, 440, 40, 420);

ctx.lineTo(40, 80);

ctx.quadraticCurveTo(40, 60, 60, 60);

ctx.stroke();