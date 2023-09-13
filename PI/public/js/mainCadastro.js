document.addEventListener('DOMContentLoaded', function () {
    const btnCadastrar = document.querySelector('#btnCadastrar');
    const nomeInput = document.querySelector('#nome');
    const emailInput = document.querySelector('#email');
    const cpfInput = document.querySelector('#cpf');
    const senhaInput = document.querySelector('#senha');
  
    btnCadastrar.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Obtenha os valores dos campos de entrada
      const nome = nomeInput.value;
      const email = emailInput.value;
      const cpf = cpfInput.value;
      const senha = senhaInput.value;
  
      // Crie uma URL com parâmetros de consulta para enviar os dados para a página de lista de usuários
      const url = `listaUsuarios.html?nome=${nome}&email=${email}&cpf=${cpf}&senha=${senha}`;

  
      // Redirecione para a página de lista de usuários com os dados
      window.location.href = url;
    });
  });
  