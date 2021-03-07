/* QOT */
// url to get the quote of the day
let url = "https://quotes.rest/qod"

fetch (url)
.then((data) => data.json())
// get the response from this api
// inside the qot element put the quote extracted from the json
.then((response) => document.getElementById("qot").innerHTML = response.contents.quotes[0].quote);

/* /QOT */