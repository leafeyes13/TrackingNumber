const items = [

    { id: 1, x: "@Blue272502", email: "parepraya21.abcr@gmail.com" , tracking: "OB392601205TH" },
{ id: 2 , x: "@_babyjikyu", email: "friend.babybyun@hotmail.com" , tracking: "OB392601276TH" },
{ id: 3 , x: "@myzls99", email: "maymay2475_ys@hotmail.com" , tracking: "OB392601174TH" },
{ id: 4 , x: "@urcuteasalways ", email: "prae3722@gmail.com" , tracking: "OB392601302TH" },
{ id: 5 , x: "@16satdec", email: "edward__newgate@hotmail.com" , tracking: "OB392601130TH" },
{ id: 6 , x: "@sakaiisato", email: "skyfahoneit@gmail.com" , tracking: "OB392601280TH" },
{ id: 7 , x: "@hewkao__", email: "ponkarw@gmail.com" , tracking: "OB392601404TH" },
{ id: 8 , x: "@benzwssy", email: "benzwisansaya@hotmail.com" , tracking: "OB392601381TH" },
{ id: 9 , x: "@25septemberrr", email: "" , tracking: "OB392601395TH" },
{ id: 10 , x: "@fxxxan_", email: "fannontakorn@gmail.com" , tracking: "OB392601214TH" },
{ id: 11 , x: "@FranNong2", email: "Ampika.decimo@gmail.com" , tracking: "OB392601191TH" },
{ id: 12 , x: "@pxyx96", email: "sucha.puii@hotmail.com" , tracking: "OB392601364TH" },
{ id: 13 , x: "@ppgkrk", email: "pream1348@gmail.com" , tracking: "ОВ392601320ТН" },
{ id: 14 , x: "@Bamieyummy", email: "thamonwan.nomwan@gmail.com" , tracking: "OB392601293TH" },
{ id: 15 , x: "@bOobi3girl", email: "boobiebobb007@gmail.com" , tracking: "OB392601435TH" },
{ id: 16 , x: "@pr_rwwww", email: "nongprow2545@gmail.com" , tracking: "OB392601262TH" },
{ id: 17 , x: "@pppppr__", email: "praeeeeew@gmail.com" , tracking: "OB392601259TH" },
{ id: 18 , x: "@Th3e4rtH", email: "watsawalee@hotmail.com" , tracking: "OB392601378TH" },
{ id: 19 , x: "@jaynevieveworld", email: "jaynevieveworld@gmail.com" , tracking: "OB392601245TH" },
{ id: 20 , x: "@letminhasleep", email: "darkwaltzno.44@gmail.com" , tracking: "OB392601449TH" },
{ id: 21 , x: "@Bambielo28", email: "sakura281248@gmail.com" , tracking: "OB392601452TH" },
{ id: 22 , x: "@Isummonmoney ", email: "Srp.Niti@gmail.com" , tracking: "OB392601316TH" },
{ id: 23 , x: "@bbabecollection", email: "praifah.srp@gmail.com" , tracking: "OB392601316TH" },
{ id: 24 , x: "@softlysundae", email: "praifa.931@gmail.com" , tracking: "OB392601466TH" },
{ id: 25 , x: "@omii494", email: "unspending0@gmail.com" , tracking: "ОВ392601165ТН" },
{ id: 26 , x: "@renokii", email: "reno.chaton@gmail.com" , tracking: "OB392601188TH" },
{ id: 27 , x: "@jouebonheurs", email: "kamsupichcha@gmail.com" , tracking: "OB392601421TH" },
{ id: 28 , x: "@suanmannsi", email: "mybias.minsuga@gmail.com" , tracking: "OB392601418TH" },
{ id: 29 , x: "@plaveinthehouse", email: "backquy@gmail.com" , tracking: "OB392601347TH" },
{ id: 30 , x: "@error404nf__", email: "chudkaruk@gmail.com" , tracking: "OB392601333TH" },
{ id: 31 , x: "@variancexhere", email: "good.tata2@gmail.com" , tracking: "OB392601355TH" },
{ id: 32 , x: "@paakitta", email: "jing.tmr@gmail.com" , tracking: "OB392601143TH" },
{ id: 33 , x: "@bnnah5", email: "wijisiri2@gmail.com" , tracking: "OB392601157TH" },
{ id: 34 , x: "@ttchanx", email: "fernngd@gmail.com" , tracking: "OB392601231TH" },
{ id: 35 , x: "@lake_lak", email: "butdeath.bf18@gmail.com" , tracking: "OB392601228TH" },
{ id: 36 , x: "@LeafeyeZ", email: "jenneth.cha@gmail.com" , tracking: "OB123456789TH" },
];

function searchItems() {
    const query = document.getElementById("search-input").value.trim().toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (query === "") {
        resultsDiv.style.display = "none"; // Hide if empty
        return;
    }

    // Filter the "database" for exact match
    const results = items.filter(item => item.email.toLowerCase() === query);

    // Show results if there's an exact match
    resultsDiv.style.display = results.length > 0 ? "block" : "none";

    results.forEach(item => {
        const resultElement = document.createElement("div");
        resultElement.innerHTML = `X Account:${item.x}<br><strong>${item.tracking}</strong>`;
        resultsDiv.appendChild(resultElement);
    });
}