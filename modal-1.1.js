const MODAL_CONFIG = {
	appendClose: true,
	fade: false,
	fadeSpeed: 500,
}

class Modal {

	constructor(modal, config) {
		// Configuration
		var assigned = Object.assign(MODAL_CONFIG, config);

		this.config = config;
		this.modal = modal;

		this.buttons = this.getButton();
		this.closeButton = this.makeCloseButton();

		// Append close button
		this.modal.appendChild(this.closeButton);

		// Click events
		this.buttons.forEach(button => {
			button.addEventListener('click', this.open.bind(this), false);
		})
		this.closeButton.addEventListener('click', this.close.bind(this), false);
	}

	open(e) {
		e.preventDefault();
		e.stopPropagation();

		this.modal.style.display = 'block';
	}

	close(e) {
		e.preventDefault();
		e.stopPropagation();

		this.modal.style.display = '';
	}

	getButton() {
		var id = this.modal.getAttribute('id'),
				selector = `[data-for="${id}"].modal-button`;
		return document.querySelectorAll(selector);
	}

	makeCloseButton() {
		var button = document.createElement('BUTTON');
		var text = document.createTextNode(this.config.closeText || 'close');

		button.appendChild(text);

		return button;
	}
}
