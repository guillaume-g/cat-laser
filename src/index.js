const five = require("johnny-five");
const board = new five.Board();

const minX = 120;
const minY = 50;
const maxX = 180;
const maxY = 80;

board.on("ready", function () {
	var servoX = new five.Servo(11);
	var servoY = new five.Servo(10);
	this.repl.inject({
		servoX: servoX,
		servoY: servoY
	});
	setInterval(() => {
		const X = Math.floor(Math.random() * maxX) + minX;
		const Y = Math.floor(Math.random() * maxY) + minY;
		servoY.to(Y);
		servoX.to(X);
	}, 2000);
});