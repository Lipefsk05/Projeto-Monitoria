// Função para definir o estado inicial da página
function setInitialState() {
    showLogin(); // Inicialmente mostra a seção de login
}

// Adiciona um evento de carregamento da página
window.addEventListener('load', setInitialState);


// Função para mostrar a seção de login e ocultar a de cadastro
function showLogin() {
    document.getElementById('entrar').style.display = 'flex';
    document.getElementById('cadastrar').style.display = 'none';
    
    // Adiciona a classe 'active' ao botão 'Entrar' e remove do 'Inscrever-se'
    document.querySelector('#switch button:nth-child(1)').classList.add('active');
    document.querySelector('#switch button:nth-child(2)').classList.remove('active');
}

// Função para mostrar a seção de cadastro e ocultar a de login
function showSignup() {
    document.getElementById('entrar').style.display = 'none';
    document.getElementById('cadastrar').style.display = 'flex';
    
    // Adiciona a classe 'active' ao botão 'Inscrever-se' e remove do 'Entrar'
    document.querySelector('#switch button:nth-child(1)').classList.remove('active');
    document.querySelector('#switch button:nth-child(2)').classList.add('active');
}

// Função para adicionar ou remover o novo campo e alterar a margem do botão
function toggleNewField() {
    var checkbox = document.getElementById('aceitar');
    var additionalFields = document.getElementById('additionalFields');
    var cadastrarBtn = document.getElementById('cadastrarBtn');

    // Verifica se a caixa de seleção está marcada
    if (checkbox.checked) {
        // Cria um novo campo de entrada
        var newInput = document.createElement('input');
        newInput.type = 'Number';
        newInput.placeholder = 'Código de Monitor';

        // Adiciona o novo campo ao contêiner
        additionalFields.appendChild(newInput);
        
        // Altera a margem do botão 'Cadastrar'
        cadastrarBtn.style.marginTop = '10px'; // Ajuste a margem conforme necessário
    } else {
        // Remove o novo campo de entrada se a caixa de seleção for desmarcada
        additionalFields.innerHTML = '';
        
        // Restaura a margem do botão 'Cadastrar'
        cadastrarBtn.style.marginTop = '30px'; // Ajuste a margem original conforme necessário
    }
}
