let Random = {

    DrawPairs: (arrayList) => {
		let arrayDraw = new Array();
		while (arrayList.length > 3) {
			let names = "";
			for (let count = 1; count <= 2; count++ ){
				let objectItens = Random.Randomize(arrayList);
				names = names + (count > 1 ? " + " : "") + objectItens.Name;
				arrayList = objectItens.ArrayList;
			}
			arrayDraw.push(names);
		}
		if (arrayList.length > 0)	{
			let lastNames = arrayList.join(" + ");
			arrayDraw.push(lastNames);
		}										
		return arrayDraw;
	},

	Randomize: (arrayList) => {
		let position = Math.floor(Math.random() * arrayList.length);
		let name = arrayList[position];
		arrayList.splice(position, 1);
		return { "Name": name, "ArrayList": arrayList };
	}
}