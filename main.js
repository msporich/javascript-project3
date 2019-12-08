/* JavaScript Project */

let header = document.querySelector("header");
let section = document.querySelector("section");

let requestURL = "https://msporich.github.io/javascript-project3/products.json";

let request = new XMLHttpRequest(); 

request.open("GET", requestURL);

request.responseType = "json";

request.send();

request.onload = function() {

	let weirdDeals = request.response; 
	console.log(weirdDeals);
	populateHeader(weirdDeals); 
	topDeals(weirdDeals);  

}

function populateHeader(jsonObject) {

	let headerH1 = document.createElement("h1"); 
	headerH1.innerHTML = jsonObject["siteName"];
	header.appendChild(headerH1);

	let headerH2 = document.createElement("h2");
	headerH2.innerHTML = "<em>Site Established in Ye Olde " + jsonObject["yearMade"] + "</em>";
	header.appendChild(headerH2);

}

function topDeals(jsonObject) {

	let topDeals = jsonObject["topDeals"];

	for (let i = 0; i < topDeals.length; i++) {

		let article = document.createElement("article");
		let h2 = document.createElement("h2");
		let img = document.createElement("img");
		let p1 = document.createElement("p");
		let p2 = document.createElement("p");
		let list = document.createElement("ul");

		img.setAttribute("src", "https://msporich.github.io/javascript-project3/images/" + topDeals[i].image);
		img.setAttribute("alt", topDeals[i].image );

		h2.innerHTML = topDeals[i].name; 
		p1.innerHTML = topDeals[i].price; 
		p2.innerHTML = topDeals[i].description; 

		let features = topDeals[i].features;

		for(let j = 0; j < features.length; j++ ) {

			let listItem = document.createElement("li"); 
			listItem.innerHTML = features[j];
			list.appendChild(listItem); 

		}

		article.appendChild(img); 
		article.appendChild(h2);
		article.appendChild(p1); 
		article.appendChild(p2);
		article.appendChild(list);
		section.appendChild(article); 

	}

}

