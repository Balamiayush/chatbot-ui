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
// Update every second
setInterval(updateDateTime, 1000);
const extendbtn = document.querySelector(".extendbtn");
const botContainer = document.querySelector(".botContainer");
const input = document.querySelector("#chatInput");
const askBtn = document.querySelector(".askBtn");
const chatMessages = document.querySelector("#chatMessages");
const centerContainer = document.querySelector("#centerBotContainer");

// Toggle Expand
extendbtn.addEventListener("click", () => {
  botContainer.classList.toggle("expand");
});

async function sendMessage() {
  let userText = input.value.trim();
  if (!userText) return;

  // UI Changes
  centerContainer.style.display = "none";
  chatMessages.style.display = "flex";

  // Append User Message
  let userMsg = document.createElement("div");
  userMsg.classList.add("user");
  userMsg.innerText = userText;
  chatMessages.appendChild(userMsg);

  input.value = "";

  // Typing Indicator
  let typing = document.createElement("div");
  typing.classList.add("typing");
  typing.innerText = "TingTing is thinking...";
  chatMessages.appendChild(typing);

  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {
    let res = await fetch("https://api.affiliateplus.xyz/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: userText,
        botname: "TingTing",
        ownername: "Aryan",
      }),
    });

    let data = await res.json();
    typing.remove();

    // Create Bot Message Wrapper
    let botWrapper = document.createElement("div");
    botWrapper.classList.add("botMessage");

    botWrapper.innerHTML = `
                  <div class="botHeader">
          <img src="assets/aiagentsvg.svg" class="botAvatar" />
          <div class="tingtingAi">
              <span class="tingtingAiSapn">TingTing Agent</span>
              <div class="botBubble">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae fugiat dolorem voluptas, perspiciatis at laudantium expedita debitis nam laborum.</div>
          </div>
          </div>
              `;

    chatMessages.appendChild(botWrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (e) {
    // Create Bot Message Wrapper
    let botWrapper = document.createElement("div");
    botWrapper.classList.add("botMessage");

    botWrapper.innerHTML = `
                  <div class="botHeader">
          <img src="assets/aiagentsvg.svg" class="botAvatar" />
          <div class="tingtingAi">
              <span class="tingtingAiSapn">TingTing Agent</span>
              <div class="botBubble">Customer communication shouldn't feel scattered. With TingTing, every voice, survey, and message comes together in one intelligent flow - powered by AI that speaks your language, listens contextually, and delivers at scale.</div>
          </div>
          </div>
              `;

    chatMessages.appendChild(botWrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

askBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
