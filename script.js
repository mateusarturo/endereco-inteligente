document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-endereco");
  const cepInput = document.getElementById("cep");
  const logradouroInput = document.getElementById("logradouro");
  const numeroInput = document.getElementById("numero");
  const ufInput = document.getElementById("uf");

  // Máscara automática de CEP
  cepInput.addEventListener("input", (e) => {
    let value = e.target.value.replaceAll(/\D/g, ""); // Remove tudo que não é número
    if (value.length > 5) {
      value = value.replace(/(\d{5})(\d{1,3})/, "$1-$2");
    }
    e.target.value = value;
  });

  // Converter UF automaticamente para maiúsculo
  ufInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.toUpperCase();
  });

  // Validação do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cep = cepInput.value.trim();
    const logradouro = logradouroInput.value.trim();
    const numero = numeroInput.value.trim();
    const uf = ufInput.value.trim();

    // Validações
    const cepRegex = /^\d{5}-\d{3}$/;
    const ufRegex = /^[A-Z]{2}$/;

    if (!cep) {
      alert("O campo CEP é obrigatório.");
      return;
    }
    if (!cepRegex.test(cep)) {
      alert("CEP inválido. Use o formato 00000-000.");
      return;
    }

    if (!logradouro || logradouro.length < 5) {
      alert("O campo Logradouro deve conter pelo menos 5 caracteres.");
      return;
    }

    if (!numero || !/^\d+$/.test(numero)) {
      alert("O campo Número deve conter apenas números.");
      return;
    }

    if (!uf) {
      alert("O campo UF é obrigatório.");
      return;
    }
    if (!ufRegex.test(uf)) {
      alert("UF inválido. Use apenas 2 letras maiúsculas (ex: SP, RJ).");
      return;
    }

    // Se tudo estiver válido:
    alert("Endereço cadastrado com sucesso!");
    form.reset();
  });
});
