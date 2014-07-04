var Player = function (options) {
	var options = options || {};
	this.sanity = options.sanity
}

var Monster = function (options) {
	var options = options || {};
	this.health = options.health;
	this.happiness = options.happiness;
}