const { Board, Servo, Led } = require("johnny-five");
const board = new Board();

board.on("ready", function () {
	const led = new Led(13);
	const servoH = new Servo({
		pin: 8,
		range: [0, 90],
		startAt: 0,
	});
	const servoV = new Servo({
		pin: 3,
		range: [120, 180],
		startAt: 180,
	});

	led.blink(500);

	servoH.sweep();
	servoV.sweep();

	board.on("exit", () => {
		led.off();
		servoV.stop();
		servoH.stop();
	})
});
