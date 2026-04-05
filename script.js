// FUNÇÃO PARA ENTRAR NO SITE
function logar() {
    const email = document.getElementById('userEmail').value;
    
    // Validação simples: se tiver @ e algo escrito, ele entra
    if(email.includes("@") && email.length > 5) {
        document.getElementById('login-area').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        alert("Ops! Insira um e-mail válido para acessar seu painel.");
    }
}

// FUNÇÃO DOS BOTÕES DE NICHO
function selecionarNicho(nicho) {
    console.log("Nicho escolhido: " + nicho);
    
    // Redireciona para as páginas que você vai criar
    if (nicho === 'games') {
        window.location.href = "games.html"; 
    } else if (nicho === 'curiosidades') {
        window.location.href = "curiosidades.html";
    }
}

// AVISO PARA QUEM NÃO É PRO
function alertaPro() {
    alert("🔒 Este nicho é exclusivo para membros PRO. Adquira seu acesso na Kiwify abaixo!");
    // Faz o site rolar suavemente até o card de compra
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
