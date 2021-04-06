const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// selecciona los items contenidos en tab
function selectItem(e) {
	//  Elimina el tab mostrado y el borde
	removeBorder();
	removeShow();
	// agrega el borde a la nueva tab
	this.classList.add('tab-border');
	// Selecciona los contenidos desde el DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Muestra la clase
	tabContentItem.classList.add('show');
}

// Remueve el borde de todos los tabs
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remueve los contenidos de los tabs
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Eventos para las clases
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
