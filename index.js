let indexPage = {
			
	NameParticipant : document.getElementById("nameParticipant"),
	ListParticipant : document.getElementById("listParticipant"),
	PairsParticipant : document.getElementById("pairsParticipant"),
				
	Init: () => {
		indexPage.SetEvents();
	},
				
	SetEvents: () => {
		document.getElementById("btnAdd").addEventListener("click", indexPage.AddButtonClick);
		document.getElementById("btnRandom").addEventListener("click", indexPage.RandomButtonClick);
		document.getElementById("btnClear").addEventListener("click", indexPage.ClearButtonClick);
		document.addEventListener("keypress", (event) => {
			if (event.keyCode === 13)	{																
				indexPage.AddButtonClick();
				event.preventDefault();
			}
		});
	},

	AddButtonClick: () => {
		indexPage.AddParticipant(indexPage.NameParticipant.value);
		indexPage.NameParticipant.value ="";	
		indexPage.NameParticipant.focus();
	},

	AddParticipant: (name) => {
		let itemData =	document.createTextNode(name);								
		let item = document.createElement("li");
		item.appendChild(itemData);
		indexPage.ListParticipant.appendChild(item);								
	},

	RandomButtonClick: () => {
		let arrayList = new Array();
		let listElements = indexPage.ListParticipant.getElementsByTagName('li');
		for(let index=0; index < listElements.length; index++){
			arrayList.push(listElements[index].innerText);
		}
		let arrayDraw = Random.DrawPairs(arrayList);
		indexPage.ShowRandomParticipant(arrayDraw);
	},

	ShowRandomParticipant: (arrayList) =>
	{
		indexPage.PairsParticipant.innerHTML = "";
		arrayList.forEach((element, index) => {
			let itemData =	document.createTextNode(element);
			let item = document.createElement("li");
			item.appendChild(itemData);
			indexPage.PairsParticipant.appendChild(item);
		});
	},

	ClearButtonClick:() => {
		indexPage.NameParticipant.value = '';
		indexPage.ListParticipant.innerHTML = '';
		indexPage.PairsParticipant.innerHTML = '';
	}
};
		
indexPage.Init();