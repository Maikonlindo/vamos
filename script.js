// Função para rolar suavemente para um elemento com um determinado ID
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        // Rola para o elemento com comportamento suave
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Adiciona eventos de clique nos links do menu para rolar suavemente
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href'); // Obter o destino do link
        if (href.startsWith("#")) { // Verifica se é um link interno
            e.preventDefault(); // Impede a ação padrão do navegador
            const targetId = href.substring(1); // Remove o "#" para obter o ID
            scrollToElement(targetId); // Chama a função para rolar até o elemento
        }
    });
});

// Capturar o evento de clique para o botão "Compre agora"
document.getElementById('comprar-agora').addEventListener('click', () => {
    scrollToElement('produtos'); // Rolar suavemente para a seção de produtos
});

