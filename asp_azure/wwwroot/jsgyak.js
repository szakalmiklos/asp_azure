window.onload = () => {
    console.log("betöltődött")
}

var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

for (var sor = 0; sor < 10; sor++) {
    var newdivsor = document.createElement("div");
    newdivsor.classList.add("sor");
    document.getElementById("pascal").appendChild(newdivsor);
    for (var oszlop = 0; oszlop <= sor; oszlop++) {
        var newdivelem = document.createElement("div");
        newdivelem.classList.add("elem");
        newdivelem.innerHTML = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor-oszlop));
        newdivsor.appendChild(newdivelem);
        
    }
}