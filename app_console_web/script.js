const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");

// Função para adicionar texto à saída do console
function addToConsole(text) {
    outputElement.textContent += text + "\n";
    outputElement.scrollTop = outputElement.scrollHeight;
}

// Função para processar comandos
function handleCommand(command) {
    addToConsole(`> ${command}`);
    const args = command.split(" ");
    const cmd = args[0].toLowerCase();

    switch (cmd) {
        case "ajuda":
            addToConsole("Comandos disponíveis:");
            addToConsole("- ajuda: Exibe a lista de comandos disponíveis");
            addToConsole("- limpar: Limpa a tela");
            addToConsole("- saudacao [nome]: Exibe uma saudação personalizada");
            break;
        case "limpar":
            outputElement.textContent = "";
            break;
        case "saudacao":
            if (args.length >= 2) {
                const nome = args.slice(1).join(" ");
                addToConsole(`Olá, ${nome}!`);
            } else {
                addToConsole("Uso incorreto do comando 'saudacao'. Digite 'saudacao [nome]' para usá-lo.");
            }
            break;
        default:
            addToConsole("Comando não reconhecido. Digite 'ajuda' para ver os comandos disponíveis.");
            break;
    }
}

// Evento de pressionar Enter na entrada
inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const command = inputElement.value;
        inputElement.value = "";
        handleCommand(command);
    }
});

// Inicialização
addToConsole("Bem-vindo ao Console Web App!");
addToConsole("Digite 'ajuda' para ver os comandos disponíveis.");
