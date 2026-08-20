const slides = [
    {
        name: "Max Verstappen",
        photo: "images/verstappen.jpg",
        text: "It's not about where you start: it's about where you finish"
    },
    {
        name: "Roronova Zoro",
        photo: "images/zoro.png",
        text: "I'm sorry. I never pray to God."
    },
    {
        name: "Toji Fushiguro",
        photo: "images/toji.jpeg",
        text: "But you guys with all your blessings lost to a monkey like me who can't even use Jujutsu."
    }
];

const imgel = document.querySelector("img")
const textel = document.querySelector(".text") 
const nameel = document.querySelector(".username")
let idx = 0;

function update(){
    imgel.src = slides[idx].photo;
    textel.textContent = slides[idx].text;
    nameel.textContent = slides[idx].name;
    idx++;
    if (idx==slides.length){
        idx=0;
    }
}

update();
setInterval(update,5000);