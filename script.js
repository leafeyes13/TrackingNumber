const items = [

{ id: 1 , email: "abcr", tracking: "OB392601205TH"},
{ id: 2 , email: "byun", tracking: "OB392601276TH"},
{ id: 3 , email: "5_ys", tracking: "OB392601174TH"},
{ id: 4 , email: "3722", tracking: "OB392601302TH"},
{ id: 5 , email: "gate", tracking: "OB392601130TH"},
{ id: 6 , email: "neit", tracking: "OB392601280TH"},
{ id: 7 , email: "karw", tracking: "OB392601404TH"},
{ id: 8 , email: "saya", tracking: "OB392601381TH"},
{ id: 9 , email: "saya", tracking: "OB392601395TH"},
{ id: 10 , email: "korn", tracking: "OB392601214TH"},
{ id: 11 , email: "cimo", tracking: "OB392601191TH"},
{ id: 12 , email: "puii", tracking: "OB392601364TH"},
{ id: 13 , email: "1348", tracking: "ОВ392601320ТН"},
{ id: 14 , email: "mwan", tracking: "OB392601293TH"},
{ id: 15 , email: "b007", tracking: "OB392601435TH"},
{ id: 16 , email: "2545", tracking: "OB392601262TH"},
{ id: 17 , email: "eeew", tracking: "OB392601259TH"},
{ id: 18 , email: "alee", tracking: "OB392601378TH"},
{ id: 19 , email: "orld", tracking: "OB392601245TH"},
{ id: 20 , email: "o.44", tracking: "OB392601449TH"},
{ id: 21 , email: "1248", tracking: "OB392601452TH"},
{ id: 22 , email: "Niti", tracking: "OB392601316TH"},
{ id: 23 , email: ".srp", tracking: "OB392601316TH"},
{ id: 24 , email: ".931", tracking: "OB392601466TH"},
{ id: 25 , email: "ing0", tracking: "ОВ392601165ТН"},
{ id: 26 , email: "aton", tracking: "OB392601188TH"},
{ id: 27 , email: "hcha", tracking: "OB392601421TH"},
{ id: 28 , email: "suga", tracking: "OB392601418TH"},
{ id: 29 , email: "kquy", tracking: "OB392601347TH"},
{ id: 30 , email: "aruk", tracking: "OB392601333TH"},
{ id: 31 , email: "ata2", tracking: "OB392601355TH"},
{ id: 32 , email: ".tmr", tracking: "OB392601143TH"},
{ id: 33 , email: "iri2", tracking: "OB392601157TH"},
{ id: 34 , email: "nngd", tracking: "OB392601231TH"},
{ id: 35 , email: "bf18", tracking: "OB392601228TH"},
{ id: 36 , email: ".cha", tracking: "XXXTH"},



];

function searchItems() {
    const query = document.getElementById("search-input").value.trim().toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (query === "") {
        resultsDiv.style.display = "none"; // Hide if empty
        return;
    }

    // Keep only the last 4 characters
    if (query.length > 4) {
        query.value = inputValue.slice(-4);
    }

    // Filter the "database" for exact match
    const results = items.filter(item => item.email.toLowerCase() === query);

    // Show results if there's an exact match
    resultsDiv.style.display = results.length > 0 ? "block" : "none";

    results.forEach(item => {
        const resultElement = document.createElement("div");
        resultElement.innerHTML = `<strong>${item.tracking}</strong>`;
        resultsDiv.appendChild(resultElement);
    });
}
