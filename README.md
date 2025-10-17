# 🏠 Cadastro de Endereço

Projeto desenvolvido como parte da atividade prática solicitada pelo professor Leonardo Dias, com o objetivo de criar uma página HTML contendo um formulário de **cadastro de endereço** com **validações de entrada** e **formatação automática de campos** utilizando **JavaScript**.

---

## 🚀 Funcionalidades

- 🧩 **Formulário de cadastro completo**
- ✅ **Validação dos campos obrigatórios**
- ✉️ **Máscara automática de CEP** (`00000-000`)
- 🔠 **Conversão automática para maiúsculo** no campo UF
- ⚠️ **Alertas de erro** personalizados para cada tipo de entrada inválida
- 💬 **Mensagem de sucesso** ao validar todos os campos

---

## 🧱 Estrutura do Projeto

```
📂 endereco-inteligente/
├── 📄 endereco.html
├── 📄 script.js
└── 📄 README.md
```

---

## 💻 Tecnologias Utilizadas

- **HTML5** — Estrutura da página e dos campos do formulário  
- **CSS3** — Estilização e layout  
- **JavaScript (ES6+)** — Validação e formatação dinâmica dos campos  

---

## 📋 Campos do Formulário

| Campo | Obrigatório | Regras de Validação |
|--------|--------------|--------------------|
| **CEP** | ✅ | Formato `00000-000`. Máscara automática e validação por regex. |
| **Logradouro** | ✅ | Mínimo de 5 caracteres. |
| **Número** | ✅ | Aceita apenas números. |
| **UF** | ✅ | Somente 2 letras maiúsculas (ex: SP, RJ). Regex e conversão automática. |
| **Complemento** | ❌ | Campo opcional. |

---

## ⚙️ Regras de Comportamento

- O envio do formulário é controlado com `addEventListener("submit", ...)` e `preventDefault()`.
- Cada campo inválido exibe um **alert** específico informando o erro.
- O **campo CEP** é formatado automaticamente enquanto o usuário digita.
- O **campo UF** é convertido para letras maiúsculas automaticamente.
- Caso todos os campos estejam válidos, é exibida a mensagem:
