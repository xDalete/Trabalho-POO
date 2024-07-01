function adicionar() {
    // Criar um novo div para o formulário
    let formContainer = document.createElement("div");
    formContainer.className = "form-container";

    // Criar o elemento do formulário
    let form = document.createElement("form"); // Usar form ao invés de div

    // Criar e adicionar os campos de entrada
    let fields = [
        { label: "Nome", type: "text", name: "nome" },
        { label: "Nome Fantasia", type: "text", name: "nomeFantasia" },
        { label: "Email", type: "email", name: "email" },
        { label: "Telefone", type: "tel", name: "telefone" },
        { label: "CPF/CNPJ", type: "text", name: "cpfCnpj" }
    ];

    fields.forEach(field => {
        let fieldContainer = document.createElement("div");
        fieldContainer.className = "field-container";
        
        let label = document.createElement("label");
        label.textContent = field.label;
        
        let input = document.createElement("input");
        input.type = field.type;
        input.name = field.name;
        
        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        form.appendChild(fieldContainer);
    });

    // Criar o botão de envio
    let button = document.createElement("button");
    button.id = "submit-button";
    button.type = "button"; 
    button.textContent = "Adicionar ";
    
    
    form.appendChild(button);

    // Adicionar o formulário ao container do formulário
    formContainer.appendChild(form);

    // Adicionar o container do formulário ao div com id "screen"
    let screen = document.getElementById("screen");
    screen.appendChild(formContainer);
}

