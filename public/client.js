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
            .then((data) => console.log(data));
    } else if (queryType === "2") {
        fetch("/query/byName?name=" + value)
            .then((response) => response.json())
            .then((data) => console.log(data));
    } else if (queryType === "3") {
        fetch("/query/byCity?city=" + value)
            .then((response) => response.json())
            .then((data) => console.log(data));
    } else if (queryType === "4") {
        fetch("/query/byState?state=" + value)
            .then((response) => response.json())
            .then((data) => console.log(data));
    } else {
        console.log("Error. Unable to match query");
    }
}