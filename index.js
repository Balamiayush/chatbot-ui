//hide and show using script
function updateDateTime() {
  const now = new Date();

  // Format Date (Mon 23, Feb)
  const options = { weekday: "short", day: "2-digit", month: "short" };
  const formattedDate = now.toLocaleDateString("en-US", options);

  // Format Time (21:26)
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const formattedTime = `Time: ${hours}:${minutes}`;

  // Update DOM
  document.getElementById("date").textContent = formattedDate;
  document.getElementById("time").textContent = formattedTime;
}

// Run once immediately
updateDateTime();
function aibtnfun() {
  const aibtn = document.querySelector(".aiBtn");
  const botContainer = document.querySelector(".botContainer");

  aibtn.addEventListener("click", () => {
    botContainer.classList.add("active"); // trigger animation
    aibtn.style.display = "none";
  });
}
aibtnfun();
function closebtn() {
  let closebtn = document.querySelector(".closebtn");
  let botContainer = document.querySelector(".botContainer");
  let aibtn = document.querySelector(".aiBtn");
  closebtn.addEventListener("click", () => {
    botContainer.classList.remove("active");
    aibtn.style.display = "block";
  });
}
closebtn();
function expandbtn() {
  const expandbtn = document.querySelector(".extendbtn");
  const botContainer = document.querySelector(".botContainer");
  let falsee = true;
  expandbtn.addEventListener("click", () => {
    if (falsee) {
      botContainer.classList.add("expand");
      falsee = false;
    } else {
      botContainer.classList.remove("expand");
      falsee = true;
    }
  });
}
function centerContainer(){
  let centerContainer = document.querySelector("#centerBotContainer");
let chatMessages = document.querySelector("#chatMessages");
let askbtn = document.querySelector(".askBtn");
askbtn.addEventListener("click",()=>{
  centerContainer.style.display = "none";
chatMessages.style.display = "flex";
})
}
centerContainer();
expandbtn();
