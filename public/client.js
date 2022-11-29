//Apply this function to a submit button
function submitQuery() {

    //get elementbyId for queryType and value
    queryType = document.getElementById("querySelect").value;

    console.log("QuerySelect: " + queryType);

    // %% Need to create an element for this %%
    value = document.getElementById("queryField").value;

    console.log("QueryField: " + value);

    if (queryType === "1") {
        let num = Number(value);
        if(Number.isInteger(num)) {
            fetch("/query/byId?id=" + value)
            .then((response) => response.json())
            .then((data) => buildResultDisplay(data));
        } else {
            buildError();
        }
    } else if (queryType === "2") {
        fetch("/query/byName?name=" + value)
            .then((response) => response.json())
            .then((data) => buildResultDisplay(data));
    } else if (queryType === "3") {
        fetch("/query/byState?state=" + value)
            .then((response) => response.json())
            .then((data) => buildResultDisplay(data));
    } else if (queryType === "4") {
        fetch("/query/byCity?city=" + value)
            .then((response) => response.json())
            .then((data) => buildResultDisplay(data));
    } else {
        buildError();
    }
}

function buildResultDisplay(data) {

    let count = 1;

    console.log(data);

    htmlToAdd = "";

    data.forEach(query => {
        let result =`   <div>
                            <p>Query Result (${count})</p>
                            <p>ID: ${query.animal_id}</p>
                            <p>Name: ${query.scientific_name}</p>
                            <p>City: ${query.city_name}</p>
                            <p>State: ${query.state_name}</p>
                        </div>`
        count++;
        htmlToAdd += result; 
    });

    if(htmlToAdd == "") {
        buildError();
    } else {
        let resultDiv = document.getElementById("queryResult");
        resultDiv.innerHTML = htmlToAdd;
    }
}

function buildError() {
    let error = `<p>Error. Unable to match query</p>`
    let resultDiv = document.getElementById("queryResult");
    resultDiv.innerHTML = error;
}