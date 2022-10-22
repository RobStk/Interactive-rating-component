const ratesElements = document.querySelectorAll(".rate");
ratesElements.forEach(element => {
    element.addEventListener("click", () => handleClick(element, ratesElements));
});

const ratingForm = document.querySelector("#ratingForm");
ratingForm.addEventListener("submit", handleSubmit);

function handleClick(element, elementsArr) {
    elementsArr.forEach(element => {
        if (element.classList.contains("selected")) element.classList.remove("selected");
    });
    element.classList.add("selected");
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const selectedRate = form.querySelector(".selected");
    console.log(selectedRate);

    if (selectedRate) displayThanks(selectedRate.textContent);
    else displayRateRequest(form);
}

function displayRateRequest(form) {
    const txt = "Please select a rating";
    const div = document.createElement("div");
    div.classList.add("rating-request");
    div.textContent = txt;
    form.appendChild(div);
}

function displayThanks(rate) {
    const thanksElementTemplate = document.querySelector("#thanksComponent");
    const thanksElement = thanksElementTemplate.content.cloneNode(true);
    const rateInfo = thanksElement.querySelector(".selectedInfo");
    rateInfo.textContent = `You selected ${rate} out of 5`;
    const ratingElement = document.querySelector("#ratingForm");
    const parent = ratingForm.parentElement;
    parent.replaceChild(thanksElement, ratingElement);
}