/*Objeto: diccionario */
/*const persona = {

	fetch("grilla.json")
	.then(response => response.json())
	.then(json => console.log(json));
}*/
	function mostrar()
	{
		const foto=document.getElementById("foto");
		foto.src="img/imagen1.jpg"
	}

	 function GenerateTable() {
            //Build an array containing Customer records.
            let portafolio = new Array();
            portafolio.push(["Eventos", "Artistas", "Lugares"]);
            portafolio.push(["img/imagen1.jpg", "img/imagen2.jpg", "img/imagen3.jpg"]);
           	portafolio.push(["img/imagen4.jpg", "img/imagen5.jpg", "img/imagen6.jpg"]);
            portafolio.push(["img/imagen7.jpg", "img/imagen8.jpg", "img/imagen9.jpg"]);
            portafolio.push(["img/imagen10.jpg", "img/imagen11.jpg", "img/imagen3.jpg"]);

            //Create a HTML Table element.
            let table = document.createElement("TABLE");
            table.border = "0.2";

            //Get the count of columns.
            let columnCount = portafolio[0].length;

            //Add the header row.
            let row = table.insertRow(-1);
            for (let i = 0; i < columnCount; i++) {
                let headerCell = document.createElement("TH");
                headerCell.innerHTML = portafolio[0][i];
                row.appendChild(headerCell);
            }

            //Add the data rows.
            for (let i = 1; i < portafolio.length; i++) {
                row = table.insertRow(-1);
                for (let j = 0; j < columnCount; j++) {
                    let cell = row.insertCell(-1);
                    if (j < 2) {
                        //cell.innerHTML = portafolio[i][j];
                        let img = document.createElement("IMG");
                        img.src = portafolio[i][j];
                        cell.appendChild(img);
                    } else {
                        let img = document.createElement("IMG");
                        img.src = portafolio[i][j];
                        cell.appendChild(img);
                    }
                }
            }

            let dvTable = document.getElementById("dvTable");
            dvTable.innerHTML = "";
            dvTable.appendChild(table);
        }