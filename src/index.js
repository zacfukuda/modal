const MODAL_CONFIG = {
	annimation: false,
	annimationType: 'fade',
	appendClose: true,
	className: {
		active: 'active',
		close: 'modal-close',
	},
	fade: false,
	fadeSpeed: 500,
	scroll: false,
	style: {
		background: null,
		padding: 0,
	}
}

class Modal {

	constructor(modal, config) {
		this.modal = modal;

		this.config = this.configure(config);
		this.content = modal.querySelector('.modal-content');
		this.buttons = this.getButton();
		this.closeButton = this.makeCloseButton();		
		this.init();
	}

	configure(config) {
		return Object.assign(MODAL_CONFIG, config);
	}

	init () {
		// Append close button
		this.modal.appendChild(this.closeButton);

		// Add Events
		this.addEvent();

		// CSS
		this.style();
	}

	addEvent() {
		// Open
		this.buttons.forEach(button => {
			button.addEventListener('click', this.open.bind(this), false);
		})
		// Close
		this.modal.addEventListener('click', this.close.bind(this), false);
		this.content.addEventListener('click', e => {
			e.stopPropagation();
		}, false);
	}

	open(e) {
		e.preventDefault();
		e.stopPropagation();

		this.modal.classList.add('active');
	}

	close(e) {
		e.preventDefault();
		e.stopPropagation();

		this.modal.classList.remove('active');
	}

	getButton() {
		var id = this.modal.getAttribute('id'),
				selector = `[data-for="${id}"].modal-button`;
		return document.querySelectorAll(selector);
	}

	makeCloseButton() {
		var button = document.createElement('BUTTON');
		var text = document.createTextNode(this.config.closeText || 'close');

		button.className = 'modal-close';
		button.appendChild(text);

		return button;
	}

	style() {
		// Padding
		var p = this.config.padding;
		if ( p ) {
			this.modal.style.padding = isNaN(p) ? p : p + 'px';
		}
	}
}
