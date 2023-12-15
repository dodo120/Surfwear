
function recupererValeurs() {
    // Récupérer les valeurs des champs de formulaire
    var email = document.getElementById("floatingInput").value;
    var password = document.getElementById("floatingPassword").value;

    // Faire quelque chose avec les valeurs (par exemple, les afficher dans la console)
    console.log("Email: " + email);
    console.log("Password: " + password);

    window.location.href = "../html/home.html";
}

function goToMyCommand() {

    window.location.href = "../html/mycommands.html";
}

function goToNewCommand() {

    window.location.href = "../html/newcommand.html";
}

function ajouterAuPanier(article) {
    console.log(document.querySelector(`.${article}`))
    const taille = document.getElementById(`taille-${article}`).value;
    const quantite = document.getElementById(`quantite-${article}`).value;
    const nom = document.getElementById(`nom-${article}`).textContent;
    const reference = document.getElementById(`ref-${article}`).textContent.split(":")[1].trim();
    const prix = document.getElementById(`prix-${article}`).textContent.split(":")[1].trim();

    const panier = document.getElementById("panier");
    const nouvelElement = document.createElement("li");
    nouvelElement.innerHTML = `<strong>${nom}</strong> (Réf: ${reference}, Taille: ${taille}, Quantité: ${quantite}, Prix: ${prix})`;
    panier.appendChild(nouvelElement);
}
