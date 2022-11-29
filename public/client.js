//Apply this function to a submit button
function submitQuery() {

    //get elementbyId for queryType and value
    queryType = document.getElementById("querySelect").value;

    console.log("QuerySelect: " + queryType);

    // %% Need to create an element for this %%
    value = document.getElementById("queryField").value;

    console.log("QueryField: " + value);

    if (queryType === "1") {
        fetch("/query/byId?id=" + value)
            .then((response) => response.json())
            .then((data) => buildResultDisplay2(data));
    } else if (queryType === "2") {
        fetch("/query/byName?name=" + value)
            .then((response) => response.json())
            .then((data) => buildResultDisplay2(data));
    } else if (queryType === "3") {
        fetch("/query/byState?state=" + value)
            .then((response) => response.json())
            .then((data) => buildResultDisplay2(data));
    } else if (queryType === "4") {
        fetch("/query/byCity?city=" + value)
            .then((response) => response.json())
            .then((data) => buildResultDisplay2(data));
    } else {
        buildError2();
    }
}

function buildResultDisplay(data) {

    console.log(data);

    if(!data.animal_id) {
       buildError();
    } else {
        for(let i = 0; i < data.length; i++) {
            let paragraph1 = document.createElement("p");
            let resultString = document.createTextNode("Query Result (" + i + "):");
            paragraph1.appendChild(resultString);
            let paragraph2 = document.createElement("p");
            let id = document.createTextNode("ID: " + data.animal_id);
            paragraph2.appendChild(id);
            let paragraph3 = document.createElement("p");
            let name = document.createTextNode("Name: " + data.scientific_name);
            paragraph3.appendChild(name);
            let paragraph4 = document.createElement("p");
            let city = document.createTextNode("City: " + data.city_name);
            paragraph4.appendChild(city);
            let paragraph5 = document.createElement("p");
            let state = document.createTextNode("State: " + data.state_name);
            paragraph5.appendChild(state);
            let separateDiv = document.createElement("div");
            separateDiv.appendChild(paragraph1);
            separateDiv.appendChild(paragraph2);
            separateDiv.appendChild(paragraph3);
            separateDiv.appendChild(paragraph4);
            separateDiv.appendChild(paragraph5);
            let resultDiv = document.getElementById("queryResult");
            resultDiv.innerHTML = ""; 
            resultDiv.append(separateDiv);
        }
    }
}

function buildResultDisplay2(data) {

    let count = 1;

    console.log(data);

    htmlToAdd = "";

    data.array.forEach(query => {
        let result =`<div>
                            <p>Query Result (${count})</p>
                            <p>ID: ${data.animal_id}</p>
                            <p>Name: ${data.scientific_name}</p>
                            <p>City: ${data.city_name}</p>
                            <p>State: ${data.state_name}</p>
                          </div>`
        count++;
        htmlToAdd += result; 
    });

    if(htmlToAdd == "") {
        buildError2();
    } else {
        let resultDiv = document.getElementById("queryResult");
        resultDiv.innerHTML = htmlToAdd;
    }
}

function buildError() {
    let resultDiv = document.getElementById("queryResult");
    resultDiv.innerHTML = "";
    let errorP = document.createElement("p");
    let errorMessage = document.createTextNode("Error. Unable to match query");
    errorP.appendChild(errorMessage); 
    resultDiv.append(errorP);
    console.log("Error. Unable to match query");
}

function buildError2() {
    let error = `<p>Error. Unable to match query</p>`
    let resultDiv = document.getElementById("queryResult");
    resultDiv.innerHTML = error;
}