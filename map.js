const openButtons = document.querySelectorAll('.ouvre_popup');
const openButtons2 = document.querySelectorAll('.ouvre_popup2');
const allPopups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close');
const closeButtons2 = document.querySelectorAll('.launch-valider');

function closeAll() {
    allPopups.forEach(popup => {
        popup.classList.remove("on");
    });
}

openButtons.forEach(button => {
    button.addEventListener("click", () => {
        closeAll()

        const targetId = button.getAttribute('data-target');
        const targetPopup = document.getElementById(targetId);
        if (targetPopup) {
            targetPopup.classList.add("on"); /*Permet d'ajouter la class popup.on au button pour afficher la popup*/
        }
    });
});



openButtons2.forEach(button => {
    button.addEventListener("click", () => {
        closeAll()

        const targetId = button.getAttribute('data-target');
        const targetPopup = document.getElementById(targetId);
        if (targetPopup) {
            targetPopup.classList.add("on"); /*Permet d'ajouter la class popup.on au button pour afficher la popup*/
        }
    });
});




closeButtons.forEach(closeButton => {
    closeButton.addEventListener("click", () => {
        const parentPopup = closeButton.closest('.popup');

        if (parentPopup) {
            parentPopup.classList.remove("on"); /*Permet de retirer la class popup.on au button pour remettre sont display en none*/
        }
    });
});

closeButtons2.forEach(closeButton2 => {
    closeButton2.addEventListener("click", () => {
        const parentPopup = closeButton2.closest('.launch');

        if (parentPopup) {
            parentPopup.classList.remove("on"); /*Permet de retirer la class popup.on au button pour remettre sont display en none*/
        }
    });
});

