console.log("hi there")
let random = Math.floor(Math.random() * 6) + 1;
console.log(random);
let ramdomimage = "images/dice" + random + ".png";
console.log(ramdomimage);
document.querySelector("img.img1").setAttribute("src", `${ramdomimage}`);



let random1 = Math.floor(Math.random() * 6) + 1;
console.log(random1);
let ramdomimage1 = "images/dice" + random1 + ".png";
console.log(ramdomimage1);
document.querySelector("img.img2").setAttribute("src", `${ramdomimage1}`);




if (random > random1) {
    document.querySelector("h1").innerText = "Player 1 Wins"
}
else {
    document.querySelector("h1").innerText = "Player 2 Wins"
}



function reloadPage() {
    window.location.reload();
}

document.querySelector("#reloadButton").addEventListener("click", reloadPage);