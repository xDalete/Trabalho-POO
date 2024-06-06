let nvOrcamento = document.getElementById("nov");
let liOrcarmento = document.getElementById("orcamento");

let orcamentoCounter = 1;
let orcamentos = [];

function entrar(event) {
    event.target.style.backgroundColor = "darkblue";
    event.target.style.color = "white";
}

function sair(event) {
    event.target.style.backgroundColor = "#5196e9";
    event.target.style.color = "black";
}

function clicar() {
    // Criar um contêiner de entrada para adicionar novos itens
    let inputContainer = document.createElement("div");
    inputContainer.className = "input-container";

    // Criar os campos de entrada para os dados do cliente
    let clienteInfo = document.createElement("div");
    clienteInfo.className = "cliente-info";

    let nomeClienteInput = document.createElement("input");
    nomeClienteInput.type = "text";
    nomeClienteInput.placeholder = "Nome do Cliente";

    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "E-mail";

    let telefoneInput = document.createElement("input");
    telefoneInput.type = "tel";
    telefoneInput.placeholder = "Telefone";

    clienteInfo.appendChild(nomeClienteInput);
    clienteInfo.appendChild(emailInput);
    clienteInfo.appendChild(telefoneInput);

    // Adicionar os campos de entrada do cliente e a divisão
    inputContainer.appendChild(clienteInfo);
    inputContainer.appendChild(document.createElement("div")).className = "divider";

    // Criar os campos de entrada para os itens do orçamento
    let quantidadeInput = document.createElement("input");
    quantidadeInput.type = "number";
    quantidadeInput.placeholder = "Quantidade";

    let nomeInput = document.createElement("input");
    nomeInput.type = "text";
    nomeInput.placeholder = "Nome do Produto";

    let custoInput = document.createElement("input");
    custoInput.type = "number";
    custoInput.placeholder = "Preço de Custo (BRL)";

    let vendaInput = document.createElement("input");
    vendaInput.type = "number";
    vendaInput.placeholder = "Preço de Venda Unidade (BRL)";

    // Botão para adicionar o item
    let addButton = document.createElement("button");
    addButton.textContent = "Adicionar Item";
    addButton.addEventListener("click", function() {
        adicionarItem(quantidadeInput.value, nomeInput.value, custoInput.value, vendaInput.value);
    });

    // Adicionar os campos de entrada e botão ao contêiner
    inputContainer.appendChild(quantidadeInput);
    inputContainer.appendChild(nomeInput);
    inputContainer.appendChild(custoInput);
    inputContainer.appendChild(vendaInput);
    inputContainer.appendChild(addButton);

    // Substituir o conteúdo atual pela área de entrada
    liOrcarmento.innerHTML = '';
    liOrcarmento.appendChild(inputContainer);

    // Adicionar uma tabela para exibir os itens
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    tbody.id = "orcamento-tbody";

    let headers = ["Quantidade", "Nome do Produto", "Preço de Custo (BRL)", "Preço de Venda Unidade (BRL)", "Preço Total (BRL)"];
    let tr = document.createElement("tr");

    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);
    liOrcarmento.appendChild(table);

    // Botão para finalizar o orçamento
    let finalizarButton = document.createElement("button");
    finalizarButton.className = "finalizar";
    finalizarButton.textContent = "Finalizar Orçamento";
    finalizarButton.addEventListener("click", function() {
        finalizarOrcamento(nomeClienteInput.value, emailInput.value, telefoneInput.value);
    });
    liOrcarmento.appendChild(finalizarButton);
}

function adicionarItem(quantidade, nome, custo, venda) {
    if (quantidade && nome && custo && venda) {
        let tbody = document.getElementById("orcamento-tbody");

        let tr = document.createElement("tr");

        let tdQuantidade = document.createElement("td");
        tdQuantidade.textContent = quantidade;

        let tdNome = document.createElement("td");
        tdNome.textContent = nome;

        let tdCusto = document.createElement("td");
        tdCusto.textContent = parseFloat(custo).toFixed(2);

        let tdVenda = document.createElement("td");
        tdVenda.textContent = parseFloat(venda).toFixed(2);

        let tdTotal = document.createElement("td");
        let total = parseFloat(quantidade) * parseFloat(venda);
        tdTotal.textContent = total.toFixed(2);

        tr.appendChild(tdQuantidade);
        tr.appendChild(tdNome);
        tr.appendChild(tdCusto);
        tr.appendChild(tdVenda);
        tr.appendChild(tdTotal);

        tbody.appendChild(tr);

        // Limpar os campos de entrada após adicionar o item
        document.querySelectorAll('.input-container input').forEach(input => input.value = '');
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function finalizarOrcamento(nomeCliente, email, telefone) {
    if (!nomeCliente || !email || !telefone) {
        alert("Por favor, preencha todos os campos do cliente.");
        return;
    }

    let tbody = document.getElementById("orcamento-tbody");
    if (tbody.children.length === 0) {
        alert("Por favor, adicione pelo menos um item ao orçamento.");
        return;
    }

    let orcamentoDiv = document.createElement("div");
    orcamentoDiv.className = "orcamento-finalizado";
    orcamentoDiv.innerHTML = `<h3>Orçamento #${String(orcamentoCounter).padStart(3, '0')} - ${nomeCliente}</h3>
                              <p><strong>Email:</strong> ${email}</p>
                              <p><strong>Telefone:</strong> ${telefone}</p>`;

    let table = document.createElement("table");
    table.innerHTML = `<thead>
                           <tr>
                               <th>Quantidade</th>
                               <th>Nome do Produto</th>
                               <th>Preço de Custo (BRL)</th>
                               <th>Preço de Venda Unidade (BRL)</th>
                               <th>Preço Total (BRL)</th>
                           </tr>
                       </thead>`;

    let newTbody = document.createElement("tbody");
    Array.from(tbody.children).forEach(row => {
        newTbody.appendChild(row.cloneNode(true));
    });

    table.appendChild(newTbody);
    orcamentoDiv.appendChild(table);
    document.body.appendChild(orcamentoDiv);

    orcamentoCounter++;
    orcamentos.push({ nomeCliente, email, telefone, items: newTbody.innerHTML });

    liOrcarmento.innerHTML = 'Aqui aparecerá o orçamento.';
}

nvOrcamento.addEventListener('mouseenter', entrar);
nvOrcamento.addEventListener('mouseleave', sair);
nvOrcamento.addEventListener('click', clicar);
