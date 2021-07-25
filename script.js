// var productContainer = document.getElementById('product-info');
// var btn = document.getElementById("btn");

function display() {
	// body...
	var c = localStorage.length + 1;
	var name = document.getElementById('name').value;
	var desc = document.getElementById('desc').value;
	var q = document.getElementById('quantity').value;
	var price = document.getElementById('price').value;
	var mfd =  document.getElementById('mfd').value;
	var exp = document.getElementById('exp').value;
	var pic = document.getElementById('image').value;
	var obj = {"name" : name, "description" : desc, "quantity" : q, "price" : price, "manufactured" : mfd, "expiry" : exp, "picture" : pic};
	localStorage.setItem(c, JSON.stringify(obj));
	foo();
}

function foo() {
	// body...
	document.getElementById('row').innerHTML = "";
	for(let i=0; i<localStorage.length; i++){
		var key = localStorage.key(i);
		var val = JSON.parse(localStorage.getItem(key));
		document.getElementById('row').innerHTML += '<div class="column"><div class="card"><img src="1.jpg" style="height: 30%;"><h1>' + val["name"] + '</h1><p>Quantity : ' + val["quantity"] + ' Kilos</p><p class="price">Price : &#x20b9;' + val["price"] + '</p><p>Manufactured on : ' + val["manufactured"] + '</p><p>Best Before : ' + val["expiry"] + '</p><p>' + val["description"] + '</p><p><button>Add to Cart</button></p></div></div>';
	}
}

window.onload = function(){
	foo();
}

// btn.addEventListener("click", function () {
// 	// body...
// 	console.log("button clicked");
// 	// var ourRequest = new XMLHttpRequest();
// 	// ourRequest.open('GET','data.json');
// 	// ourRequest.onload = function () {
// 	// 	// body...
// 	// 	console.log(this);
// 	// 	var ourData = JSON.parse(this.responseText);
// 	// 	renderHTML(ourData);
// 	// };
// 	// ourRequest.send();
// });

// function renderHTML(data){
// 	productContainer.insertAdjacentHTML('beforeend', 'testing123');

// }

// // function addItem() {
// // 	// body...
// // 	var newItem = {};
// // 	const f = document.getElementById('itemData');
// // 	newItem["name"] = f.elements['name'].value;
// // 	newItem["description"] = f.elements['desc'].value;
// // 	newItem["price"] = f.elements['price'].value;
// // 	newItem["manufactured"] = f.elements['mfd'].value;
// // 	newItem["expiry"] = f.elements['exd'].value;
// // 	data.push(newItem);
// // 	console.log(data)
// // }