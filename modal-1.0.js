class Modal {

	constructor(button, config) {
		var selector = config.selector || button.getAttribute('href');

		this.b = button;
		this.m = document.querySelector(selector);
		this.config = config;

		this.c = this.makeCloseButton(this.config);

		// Append close button
		this.m.appendChild(this.c);

		// Click events
		this.b.addEventListener('click', this.open.bind(this), false);
		this.c.addEventListener('click', this.close.bind(this), false);
		
	}

	open(e) {
		e.preventDefault();
		e.stopPropagation();

		this.m.style.display = 'block';
	}

	close(e) {
		e.preventDefault();
		e.stopPropagation();

		this.m.style.display = '';
	}

	makeCloseButton(config) {
		var button = this.m.querySelector(':scope > button');

		// Button already exists
		if ( button ) {
			return button
		}

		button = document.createElement('BUTTON');
		var text = document.createTextNode(this.config.closeText || 'close');

		button.appendChild(text);

		return button;
	}
}
