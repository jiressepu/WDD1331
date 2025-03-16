document.getElementById("captureForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs saisies
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Affichage dans la console (peut être envoyé à un serveur)
    console.log("Nom :", name);
    console.log("Email :", email);

    // Stockage local (exemple)
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    alert("Informations capturées avec succès !");
});
