function getpin() {
  const randomNumber = Math.round(Math.random() * 10000);
  const pinString = randomNumber + "";
  if (pinString.length == 4) {
    return randomNumber;
  } else {
    console.log("get 3 digit and call again", randomNumber);
    return getpin();
  }
}

function generatePin() {
  const pin = getpin();
  document.getElementById("display-input").value = pin;
}

// key pad
document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const pinDisplay = document.getElementById("display-keys");

  if (isNaN(number) == true) {
    if (number == "C") {
      pinDisplay.value = "";
    }
  } else {
    const prevCalc = pinDisplay.value;
    const newCalc = prevCalc + number;
    pinDisplay.value = newCalc;
  }
});

// verifypin
function verifyPin() {
  const displayPin = document.getElementById("display-input");
  const displaykeys = document.getElementById("display-keys");
  const successMsg = document.getElementById("sucessMsg");
  const errorMsg = document.getElementById("errorMsg");
  if (displayPin.value == displaykeys.value) {
    successMsg.style.display = "block";
    errorMsg.style.display = "none";
  } else {
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
  }
}
