function ageChange(e) {
  const inputBox = document.getElementById("q_age");
  const errordiv = document.getElementById("errors-holder");
  const buttonSubmit = document.querySelector("button");
  const inputValue = parseInt(e.target.value);

  if (inputValue < 5) {
    errordiv.textContent = `You need to be atleast 5 years old to participate`;
    buttonSubmit.disabled = true;
  } else if (isNaN(inputValue)) {
    errordiv.textContent = "Please choose age";
    buttonSubmit.disabled = true;
  } else {
    errordiv.textContent = ``;
    buttonSubmit.disabled = false;
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const checkBox = document.getElementById("q_owns_phone");
  const inputValue = parseInt(document.getElementById("q_age").value);
  const resultdiv = document.getElementById("result-holder");
  const errordiv = document.getElementById("errors-holder");

  if (checkBox.checked) {
    if (inputValue === 0) {
      errordiv.textContent = "Please choose age";
    } else if (inputValue < 13) {
      resultdiv.textContent = `Use your phone in moderation`;
    } else {
      resultdiv.textContent = `You should get a phone`;
    }
  } else {
    if (inputValue === 0) {
      errordiv.textContent = "Please choose age";
    } else if (inputValue < 13) {
      resultdiv.textContent = `You will get a phone soon`;
    } else {
      resultdiv.textContent = `You should get a phone`;
    }
  }
}
