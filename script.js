/* links 4 buttons */

document.getElementById("btn1").addEventListener("click",function(){

window.open("https://acpcalaquian.github.io/CS3_1stQtrPortfolio/","_blank")

})

document.getElementById("btn2").addEventListener("click",function(){

window.open("https://acpcalaquian.github.io/2QPortfolioCsCalaquian/","_blank")

})

document.getElementById("btn3").addEventListener("click",function(){

window.open("https://acpcalaquian.github.io/3rd-Qtr-Repository/","_blank")

})


/* about */

const aboutBtn=document.getElementById("btn4")
const aboutBox=document.getElementById("aboutBox")

aboutBtn.addEventListener("click",function(){

if(aboutBox.style.display==="block"){

aboutBox.style.display="none"

}else{

aboutBox.style.display="block"

}

})

// Get the elements
const cinemaBtn = document.getElementById("cinemaBtn");
const musicBtn = document.getElementById("musicBtn");
const gamesBtn = document.getElementById("gamesBtn");

const aboutContent = document.getElementById("aboutContent");
const aboutMain = document.getElementById("aboutMain");

// Function to show content and hide main About Me
function showContent(title, text) {
  aboutMain.style.display = "none"; // hide About Me
  aboutContent.style.display = "block"; // show content

  // Add content + back button
  aboutContent.innerHTML = `
    <h4>${title}</h4>
    <p>${text}</p>
    <span class="backBtn" id="backBtn">← Back to About Me</span>
  `;

  // Add event listener for back button
  document.getElementById("backBtn").addEventListener("click", function() {
    aboutContent.style.display = "none"; // hide dynamic content
    aboutMain.style.display = "block"; // show main About Me
  });
}

// Click events
cinemaBtn.addEventListener("click", function () {
  showContent("cinema", "b99, greys anatomy, good place, modern family, superstore, friends, gilmore girls, gossip girl, pll, tsitp, asoue, the rookie, aot, demon slayer, death note, jjk, ao haru ride, kimi ni todoke, lotr, star wars, mcu, dc, hunger games, pjo, ");
});

musicBtn.addEventListener("click", function () {
  showContent("music", "clairo, faye webster, the maries, daniel caesar, laufey, beabadoobee, olivia dean, malcolm todd, frank ocean, childish gambino, steve lacy, brent faiyaz, don toliver, sza, tyler the creator,");
});
/* music */

const audio=document.getElementById("audio")
const playBtn=document.getElementById("playBtn")
const nextBtn=document.getElementById("nextBtn")
const prevBtn=document.getElementById("prevBtn")
const songInfo=document.getElementById("songInfo")


const songs=[

{title:"Heaven",artist:"Clairo",file:"/assets/heaven.mp3"},
{title:"Add Up My Love",artist:"Clairo",file:"/assets/addupmylove.mp3"},
{title:"Love Songs",artist:"Clairo",file:"/assets/lovesongs.mp3"}

]

let currentSong=0
let isPlaying=false


function loadSong(i){

audio.src=songs[i].file
songInfo.textContent=songs[i].title+" – "+songs[i].artist

}


playBtn.addEventListener("click",function(){

if(isPlaying){

audio.pause()
playBtn.textContent="▶"
isPlaying=false

}else{

audio.play()
playBtn.textContent="⏸"
isPlaying=true

}

})


nextBtn.addEventListener("click",function(){

currentSong=(currentSong+1)%songs.length
loadSong(currentSong)
audio.play()

})


prevBtn.addEventListener("click",function(){

currentSong=(currentSong-1+songs.length)%songs.length
loadSong(currentSong)
audio.play()

})


loadSong(currentSong)