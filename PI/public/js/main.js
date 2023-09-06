function login() {
    var selectedUserType = document.querySelector('input[name="gender"]:checked').ariaValueMax;

    if (selectedUserType == "Cliente") {
        window.location.href = "http://127.0.0.1:5500/src/ListaProdutos/two.html";
    } else if (selectedUserType == "Administrador") {
        window.location.href = "http://127.0.0.1:5500/src/ListaUsuario/new.html";
    }
}