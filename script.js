var productContainer = document.getElementById('product-info');
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
	// body...
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'data.json');
	ourRequest.onload = function () {
		// body...
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};
	ourRequest.send();
});

function renderHTML(data){
	productContainer.insertAdjacentHTML('beforeend', 'testing123');
	
}

// function addItem() {
// 	// body...
// 	var newItem = {};
// 	const f = document.getElementById('itemData');
// 	newItem["name"] = f.elements['name'].value;
// 	newItem["description"] = f.elements['desc'].value;
// 	newItem["price"] = f.elements['price'].value;
// 	newItem["manufactured"] = f.elements['mfd'].value;
// 	newItem["expiry"] = f.elements['exd'].value;
// 	data.push(newItem);
// 	console.log(data)
// }