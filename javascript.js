function atualizarDataHora() {
  const elemento = document.getElementById("dataHora");

  if (!elemento) {
    return;
  }

  const agora = new Date();
  const data = agora.toLocaleDateString("pt-BR");
  const hora = agora.toLocaleTimeString("pt-BR");

  elemento.textContent = `${data} ${hora}`;
}

setInterval(atualizarDataHora, 1000);
atualizarDataHora();

const formCadastro = document.getElementById("formCadastro");
const mensagemCadastro = document.getElementById("mensagemCadastro");

if (formCadastro) {
  formCadastro.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeCliente = document.getElementById("nomeCliente").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const sexo = document.getElementById("sexo").value;
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const nomePet = document.getElementById("nomePet").value.trim();
    const racaPet = document.getElementById("racaPet").value.trim();
    const idadePet = document.getElementById("idadePet").value.trim();
    const portePet = document.querySelector('input[name="portePet"]:checked');

    if (
      nomeCliente === "" ||
      cpf === "" ||
      endereco === "" ||
      sexo === "" ||
      telefone === "" ||
      email === "" ||
      nomePet === "" ||
      racaPet === "" ||
      idadePet === "" ||
      !portePet
    ) {
      mensagemCadastro.innerHTML =
        '<div class="erro">Preencha todos os campos obrigatórios do cadastro.</div>';
      return;
    }

    mensagemCadastro.innerHTML = `
      <div class="sucesso">
        Cadastro realizado com sucesso!<br>
        <strong>Cliente:</strong> ${nomeCliente}<br>
        <strong>Pet:</strong> ${nomePet}<br>
        <strong>Raça:</strong> ${racaPet}
      </div>
    `;

    formCadastro.reset();
  });
}

const formAgendamento = document.getElementById("formAgendamento");
const mensagemAgendamento = document.getElementById("mensagemAgendamento");

if (formAgendamento) {
  formAgendamento.addEventListener("submit", function (event) {
    event.preventDefault();

    const clienteAgenda = document.getElementById("clienteAgenda").value.trim();
    const petAgenda = document.getElementById("petAgenda").value.trim();
    const servico = document.getElementById("servico").value;
    const metodo = document.getElementById("metodo").value;
    const dataAgendamento = document.getElementById("dataAgendamento").value;
    const horaAgendamento = document.getElementById("horaAgendamento").value;

    if (
      clienteAgenda === "" ||
      petAgenda === "" ||
      servico === "" ||
      metodo === "" ||
      dataAgendamento === "" ||
      horaAgendamento === ""
    ) {
      mensagemAgendamento.innerHTML =
        '<div class="erro">Preencha todos os campos do agendamento.</div>';
      return;
    }

    mensagemAgendamento.innerHTML = `
      <div class="sucesso">
        Agendamento realizado com sucesso!<br>
        <strong>Cliente:</strong> ${clienteAgenda}<br>
        <strong>Pet:</strong> ${petAgenda}<br>
        <strong>Serviço:</strong> ${servico}<br>
        <strong>Método:</strong> ${metodo}<br>
        <strong>Data:</strong> ${dataAgendamento}<br>
        <strong>Horário:</strong> ${horaAgendamento}
      </div>
    `;

    formAgendamento.reset();
  });
}
