function mostrarCadastro() {
    loginBox.style.display = "none";
    cadastroBox.style.display = "block";
    recuperarSenhaBox.style.display = "none";
}

function mostrarRecuperacao() {
    loginBox.style.display = "none";
    cadastroBox.style.display = "none";
    recuperarSenhaBox.style.display = "block";
}

function voltarLogin() {
    loginBox.style.display = "block";
    cadastroBox.style.display = "none";
    recuperarSenhaBox.style.display = "none";
}

function trocar(tipo) {
    pf.style.display = tipo === "pf" ? "flex" : "none";
    pj.style.display = tipo === "pj" ? "flex" : "none";
}

/* ===== RECUPERAÇÃO DE SENHA ===== */
function enviarRecuperacao(event) {
    event.preventDefault();

    const email = document.getElementById("emailRecuperacao").value;

    if (!email) {
        alert("Informe um e-mail válido.");
        return;
    }

    // 🔐 Simulação de token (backend fará isso depois)
    const token = "ABC123TOKEN";

    alert("Link de recuperação enviado para o e-mail!");

    // 👉 Redireciona para a tela de nova senha
    window.location.href = `nova-senha.html?token=${token}`;
}
