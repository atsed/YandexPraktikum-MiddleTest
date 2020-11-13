var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

const patternCanvas = document.createElement('canvas');
const patternContext = patternCanvas.getContext('2d');

let x1 = (400 - 176) / 2;
let y1 = 144;
let a1 = 16;
let b1 = 150;

let x2 = 176 + 112 - 16;
let y2 = 144;
let a2 = 16;
let b2 = 150;

let x3 = 150;
let y3 = (400 - 188) / 2;
let a3 = 100;
let b3 = 16;


patternCanvas.width = canvas.width;
patternCanvas.height = canvas.height;

patternContext.fillStyle = "white";
patternContext.rect(x1, y1, a1, b1);
patternContext.rect(x2, y2, a2, b2);
patternContext.rect(x3, y3, a3, b3);
patternContext.fill();

const pattern = ctx.createPattern(patternCanvas, 'repeat');
const matrix = new DOMMatrix();

pattern.setTransform(matrix);
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas.width, canvas.height);



document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp') {
        console.log('Up');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        matrix.translateSelf(0, -25);
        pattern.setTransform(matrix);

    }
    if (event.code == 'ArrowDown') {
        console.log('Down');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        matrix.translateSelf(0, 25);
        pattern.setTransform(matrix);

    }
    if (event.code == 'ArrowLeft') {
        console.log('Left');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        matrix.translateSelf(-25, 0);
        pattern.setTransform(matrix);

    }
    if (event.code == 'ArrowRight') {
        console.log('Right');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        matrix.translateSelf(25, 0);
        pattern.setTransform(matrix);

    }
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});