let sum = 0
let biedri = [
    {vards: "jance", loma: "biedrs", stundas: 35},
    {vards: "bobijs", loma: "biedrs", stundas: 41},
    {vards: "haralds", loma: "līderis", stundas: 62},
    {vards: "jansons", loma: "biedrs", stundas: 38},
    {vards: "sofija", loma: "biedrs", stundas: 23},
    {vards: "roberts", loma: "līderis", stundas: 59},
    {vards: "kristaps", loma: "biedrs", stundas: 20},
]

    for(i = 0; i < biedri.length; i ++){
           if(biedri[i].loma === "līderis")
        console.log("cilvēks ar lomu līderis: " + biedri[i].vards)
    sum = sum + biedri[i].stundas
    }
console.log(sum)