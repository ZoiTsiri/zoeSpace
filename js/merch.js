let url = "https://quotes.rest/qod"

fetch (url)
.then((data) => data.json())
.then((response) => document.getElementById("qot").innerHTML = response.contents.quotes[0].quote);