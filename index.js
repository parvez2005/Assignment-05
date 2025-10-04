function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//delegation

getElement("item-box").addEventListener("click", function (e) {
if (e.target.className.includes("call-btn")) {
  const callbutton = e.target;
  const emergencyTitle = callbutton.parentNode.parentNode.children[0].children[0].innerText;
  const emergencyNumber = callbutton.parentNode.parentNode.children[1].children[0].innerText;

  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const Coin = getElement("coin-count").innerText;

  
  if (Number(Coin) < 20) {
    alert("You don’t have enough coins to make this call!");
    return;
  }

  console.log(emergencyNumber);
  const historyContainer = getElement("History-container");
  const History = document.createElement("div");
  History.innerHTML = `
    <div class="bg-[#FAFAFA] flex justify-between rounded-xl items-center p-4">
      <div>
        <h1></h1>${emergencyTitle}
        <p>${emergencyNumber}</p>
      </div>
      <div>${timeString}</div>
    </div>
  `;

  alert(`📞 calling ${emergencyNumber}...`);
  historyContainer.append(History);

  const currentCoin = Number(Coin) - 20;
  getElement("coin-count").innerText = currentCoin;
}
})

document.getElementById("history-clear").addEventListener('click',function(){
const historyContainer=getElement('History-container');
historyContainer.innerHTML="";
})


getElement("item-box").addEventListener("click", function (e) {
  if (e.target.className.includes("copy-btn") || e.target.closest(".copy-btn")) {
    const copyButton = e.target.closest(".copy-btn");

    
    const emergencyNumber =
      copyButton.parentNode.parentNode.children[1].children[0].innerText;

    
    navigator.clipboard.writeText(emergencyNumber).then(() => {
      console.log("Copied:", emergencyNumber);

     
      const count = getElement("btn-copy-count").innerText;
      const currentCount = Number(count) + 1;
      getElement("btn-copy-count").innerText = currentCount;

      
      alert(`The number has been copied: ${emergencyNumber}`);
    });
  }
});


getElement("item-box").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-heart")) {
const count =getElement('heart-count').innerText;
const currentCount=Number(count)+1;
getElement("heart-count").innerText=currentCount;
  }});

