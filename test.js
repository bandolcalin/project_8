fetch(MENU_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(responseBody) {

        var responseBodyEntries = Object.entries(responseBody.menu);

        for (var i = 0; i < responseBodyEntries.length; i++) {
            var preparate = []
            console.log(responseBodyEntries[i]);
            preparate.push( {
                id: responseBodyEntries[i][0],
                preparat: responseBodyEntries[i][1]
            });

            let body = document.getElementById('body');
            let table = document.createElement('table');
            table.className.add = 'main-table';
            body.appendChild(table);

            let imagineProdustd = document.createElement('td');
            let imagineProdus = document.createElement('img');
            imagineProdus.src = responseBodyEntries[i][1].imagine;
            table.appendChild(imagineProdustd);
            imagineProdustd.appendChild(imagineProdus);

            let numeProdus = document.createElement('td');
            numeProdus.innerHTML = responseBodyEntries[i][1].nume;
            table.appendChild(numeProdus);
            numeProdus.className.add = 'nume-produs';

            let ingredienteProdus = document.createElement('td');
            ingredienteProdus.innerHTML = responseBodyEntries[i][1].ingrediente;
            table.appendChild(ingredienteProdus);
            ingredienteProdus.className.add = 'ingrediente-produs';

            let detaliiProdus = document.createElement('td');
            detaliiProdusbtn = document.createElement('button');
            table.appendChild(detaliiProdusbtn);
            detaliiProdusbtn.appendChild(detaliiProdus);
            detaliiProdusbtn.className.add = 'detalii-produs';
            detaliiProdus.innerHTML = 'Detalii rețetă';
            detaliiProdusbtn.addEventListener('click', function () {
                retetaProdus.style.visibility = "visible";
                retetaProdus.style.display = "flex";
            });

            let retetaProdus = document.createElement('td');
            retetaProdus.innerHTML = responseBodyEntries[i][1].reteta;
            table.appendChild(retetaProdus);
            retetaProdus.className.add = 'reteta-produs';
            retetaProdus.style.visibility = "hidden";
            retetaProdus.style.display = "none"
            retetaProdus.style.backgroundImage = "url(https://i.pinimg.com/originals/be/43/0e/be430e739509b9c5bd547e5228669fc8.jpg)";
            retetaProdus.style.borderRadius = "40px"
        }
    });