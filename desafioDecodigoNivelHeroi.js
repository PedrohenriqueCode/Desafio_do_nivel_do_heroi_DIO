const heroi = "nomedoheroi";
const xp = 0;
let level = " ";

if (xp < 1000) {
    level = "Ferro";
} else if (xp <= 2000) {
    level = "Bronze";
} else if (xp <= 5000) {
    level = "Prata";
} else if (xp <= 7000) {
    level = "Ouro";
} else if (xp <= 8000) {
    level = "Platina";
} else if (xp <= 9000) {
    level = "Ascendente";
} else if (xp <= 10000) {
    level = "Imortal";
} else {
    level = "Radiante";
}

console.log("O Herói de nome **{" + heroi + "}** está no nível de **{"+ level + "}**");
