// var cats = [
// 	{name: "Fluffy", color: "green", url:"http://newsonia.com/media/upload/images/2014/09/19/SQK2tNq2QR3xnyPvE1DWllJcvFZmbVBn.jpg"},
// 	{name: "Duke", color: "black", url:"https://iheartcats.com/wp-content/uploads/2015/11/21542389884_4f32d956db_z.jpg"},
// 	{name: "Savage", color: "white", url:"https://kittybloger.files.wordpress.com/2013/08/white-cats-are-beautiful-30-photos-30.jpg"},
// ];

function domString(cats){
	var catString = '';
for (var i=0; i<cats.length; i++){
		catString += `<div class="catBox">`;
		catString += `<div class="catName">${cats[i].name}</div>`;
		//catString += `<div class="catColor">${cats[i].color}</div>`;
		catString += `<img class="catImage" src="${cats[i].url}">`;
		catString += `</div>`;
	}
	writeToDom(catString);

}
var catHolder = document.getElementById('kat-koral');

function writeToDom(strang){
	catHolder.innerHTML = strang;
}

//domString(cats);

function executeThisCodeAfterFileLoads(){
	console.log("this", this.responseText);
	var data = JSON.parse(this.responseText);
	domString(data.cats);
}

function executeThisCodeAfterFileErrors(){
	console.log("Shit Broke");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
myRequest.addEventListener('error', executeThisCodeAfterFileErrors);
myRequest.open('GET', 'cats.json');
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
myRequest.addEventListener('error', executeThisCodeAfterFileErrors);
myRequest.open('GET', 'dogs.json');
myRequest.send();





















