// Aguarda o DOM (Document Object Model) ser completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // FUNCIONALIDADE: MOSTRAR/OCULTAR SENHA
    // ============================================
    
    // Obtém referências aos elementos do DOM
    const togglePassword = document.getElementById('togglePassword'); // Botão de mostrar/ocultar senha
    const passwordInput = document.getElementById('password'); // Campo de entrada da senha
    
    // Adiciona um listener de evento de clique ao botão de mostrar/ocultar senha
    togglePassword.addEventListener('click', function() {
        // Verifica o tipo atual do campo de senha
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        
        // Altera o tipo do campo (de password para text ou vice-versa)
        passwordInput.setAttribute('type', type);
        
        // Altera o texto do botão conforme o estado atual
        this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
    });

    // ============================================
    // FUNCIONALIDADE: VALIDAÇÃO DO FORMULÁRIO DE LOGIN
    // ============================================
    
    // Obtém referência ao formulário de login
    const loginForm = document.getElementById('loginForm');
    
    // Adiciona um listener para o evento de submissão do formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário (não recarrega a página)
        
        // Obtém os valores dos campos
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // ============ VALIDAÇÃO BÁSICA ============
        
        // Verifica se ambos os campos estão preenchidos
        if (!email || !password) {
            alert('Por favor, preencha todos os campos.');
            return; // Interrompe a execução se a validação falhar
        }
        
        // Validação do formato do e-mail usando expressão regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        
        // ============ SIMULAÇÃO DE LOGIN ============
        
        // Em um sistema real, isso seria substituído por uma chamada à API
        alert(`Login realizado com sucesso!\nE-mail: ${email}`);
        
        // Log para desenvolvedores (aparece no console do navegador)
        console.log('Tentativa de login:', { email, password });
        
        // ============ CÓDIGO PARA SISTEMA REAL (COMENTADO) ============
        /*
        // Exemplo de como seria uma chamada real à API:
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redireciona para o dashboard em caso de sucesso
                window.location.href = '/dashboard';
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao tentar fazer login. Tente novamente.');
        });
        */
    });

    // ============================================
    // FUNCIONALIDADE: RECUPERAÇÃO DE SENHA
    // ============================================
    
    // Obtém referência ao link "esqueceu sua senha"
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    
    // Adiciona listener para o clique no link
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        
        // Tenta obter o e-mail do campo preenchido, ou pede ao usuário
        const email = document.getElementById('email').value || prompt('Digite seu e-mail para recuperar a senha:');
        
        // Se o usuário forneceu um e-mail (ou já tinha preenchido)
        if (email) {
            // Validação do formato do e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(email)) {
                // Simulação do envio de e-mail de recuperação
                alert(`Um link para redefinição de senha foi enviado para: ${email}\n\n(Simulação - em um sistema real, um e-mail seria enviado com instruções para redefinir a senha)`);
                
                // Log para desenvolvedores
                console.log('Solicitação de recuperação de senha para:', email);
                
                // ============ CÓDIGO PARA SISTEMA REAL (COMENTADO) ============
                /*
                // Exemplo de chamada à API para recuperação de senha:
                fetch('/api/forgot-password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('E-mail de recuperação enviado com sucesso!');
                    } else {
                        alert('Erro ao enviar e-mail de recuperação.');
                    }
                });
                */
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        }
    });

    // ============================================
    // FUNCIONALIDADES ADICIONAIS (MELHORIAS DE UX)
    // ============================================
    
    // Coloca o foco automaticamente no campo de e-mail ao carregar a página
    document.getElementById('email').focus();
    
    // Obtém referências aos campos para validação em tempo real
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    
    // Validação em tempo real para o campo de e-mail
    emailField.addEventListener('input', function() {
        // Se o campo tiver conteúdo, muda a borda para a cor principal
        if (this.value) {
            this.style.borderColor = '#003049';
        }
    });
    
    // Validação em tempo real para o campo de senha
    passwordField.addEventListener('input', function() {
        // Se o campo tiver conteúdo, muda a borda para a cor principal
        if (this.value) {
            this.style.borderColor = '#003049';
        }
    });
    
    
});