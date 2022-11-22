//Apply this function to a submit button
function submitQuery() {

    //get elementbyId for queryType and value
    queryType = document.getElementById("querySelect").value;

    console.log("QuerySelect: " + queryType);

    // %% Need to create an element for this %%
    value = document.getElementById("queryField").value;

    console.log("QueryField: " + value);

    if (queryType === "1") {
        //getByAnimalID(value);
        fetch("/query/byId?id=" + value)
            .then((response) => response.json())
            .then((data) => console.log(data));
    } else if (queryType === "2") {
        client.connect(err => {
            if (err) {
                console.error('Connection Error', err.stack)
            } else {
                getByAnimalName(value);
            }
        });
    } else if (queryType === "3") {
        client.connect(err => {
            if (err) {
                console.error('Connection Error', err.stack)
            } else {
                getByAnimalsByCityName(value);
            }
        });
    } else if (queryType === "4") {
        client.connect(err => {
            if (err) {
                console.error('Connection Error', err.stack)
            } else {
                getByAnimalsByStateName(value);
            }
        });
    } else {
        console.log("Error. Unable to match query");
    }
}