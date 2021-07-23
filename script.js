data = {}

function addItem() {
	// body...
	const f = document.getElementById('itemData');
	data["name"] = f.elements['name'].value;
}

console.log(data)