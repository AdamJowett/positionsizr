function AppController() {
	'use strict';
	this.initialised = false;
	this.init();
}

AppController.prototype.init = function () {
	'use strict';
	this.initialised = true;
};
