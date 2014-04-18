var Car = function() {
	this.wheel = null;
}

Car.prototype.run = function() {
	var res = this.wheel.run();
	console.log('run car...');
	return 'car ' + res;
}

module.exports = {
	id: "car",
	func: Car,
	props: [{
		name: "wheel",
		ref: "wheel"
	}]
};