// Смена надписи внутри кнопки подверждения отправки формы
const orderForms = document.querySelectorAll(".order-form");
orderForms.forEach(element => {
    element.addEventListener("submit", event => {
        event.preventDefault();
        event.target.querySelector(".order-form__submit-button").innerText = "Круто, спасибо за доверие!";
    })
})

// const orderForms = document.querySelectorAll(".order-form");
// orderForms.forEach(element => {
//     element.querySelector(".order-form__submit-button").addEventListener("click", event => {
//         event.preventDefault();
//         event.target.innerText = "Круто, спасибо за доверие!";
//     })
// })