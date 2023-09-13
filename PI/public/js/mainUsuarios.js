// ... O código anterior ...

// Função para adicionar uma nova linha na tabela com base nas informações do modal
function adicionarLinha() {
    const nome = sNome.value;
    const funcao = sFuncao.value;
    const salario = sSalario.value;
  
    // Verifique se todos os campos foram preenchidos
    if (!nome || !funcao || !salario) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Crie uma nova linha na tabela
    const newRow = document.createElement('tr');
  
    // Crie as células para a linha
    const cellNome = document.createElement('td');
    const cellFuncao = document.createElement('td');
    const cellSalario = document.createElement('td');
    const cellAcao = document.createElement('td');
  
    // Defina o conteúdo das células
    cellNome.textContent = nome;
    cellFuncao.textContent = funcao;
    cellSalario.textContent = salario;
  
    // Adicione botões para habilitar e desabilitar a linha
    const botaoHabilitar = document.createElement('button');
    botaoHabilitar.textContent = 'Habilitar';
    botaoHabilitar.addEventListener('click', function() {
      // Lógica para habilitar a linha aqui
      // Você pode adicionar classes CSS ou fazer qualquer outra ação necessária
    });
  
    const botaoDesabilitar = document.createElement('button');
    botaoDesabilitar.textContent = 'Desabilitar';
    botaoDesabilitar.addEventListener('click', function() {
      // Lógica para desabilitar a linha aqui
      // Você pode adicionar classes CSS ou fazer qualquer outra ação necessária
    });
  
    // Adicione os botões à célula de ação
    cellAcao.appendChild(botaoHabilitar);
    cellAcao.appendChild(botaoDesabilitar);
  
    // Adicione as células à linha
    newRow.appendChild(cellNome);
    newRow.appendChild(cellFuncao);
    newRow.appendChild(cellSalario);
    newRow.appendChild(cellAcao);
  
    // Adicione a linha à tabela
    tbody.appendChild(newRow);
  
    // Feche o modal após adicionar a linha
    fecharModal();
  
    // Limpe os campos de entrada após adicionar a linha
    sNome.value = '';
    sFuncao.value = '';
    sSalario.value = '';
  }
  
  // ... O código anterior ...
  
  // Event listener para adicionar uma nova linha quando o botão "Salvar" for clicado
  btnSalvar.addEventListener('click', adicionarLinha);
  