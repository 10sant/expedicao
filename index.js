






//EXPANDIR MENU LATERAL//
document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
})

/*
const button = document.querySelector("#openModal");
const modal = document.querySelector("#modal");
const buttonClose = document.querySelector("#closeModal");

button.onclick = function(){
    modal.showModal();
}

buttonClose.onclick = function(){
    modal.close();
}
*/

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchButton").addEventListener("click", performSearch);
});

function performSearch() {
    // Obtém o valor da pesquisa digitado
    var query = document.getElementById("searchInput").value;
    
    // Verifica se o campo de busca não está vazio
    if (query) {
        // Redireciona para uma nova página com a query como parâmetro da URL
        window.open('resultados.html?search=' + encodeURIComponent(query), '_blank');
    } else {
        alert('Por favor, insira um termo de pesquisa.');
    }
}










//QR Code//
// Adiciona o evento de clique para abrir o modal/dialog e iniciar o QR code scanner
document.getElementById("openModal").addEventListener("click", function() {
    var modal = document.getElementById("modal");
    modal.showModal();
    startQrCodeScanner(); // Inicia automaticamente o leitor de QR Code
});

// Função para inicializar o leitor de QR Code
function startQrCodeScanner() {
    const qrReader = document.getElementById('qr-reader');
    // Inicialize o leitor de QR code aqui (ex: com html5-qrcode ou outra biblioteca)
    console.log("QR Code scanner iniciado");
    // Aqui vai a lógica do QR code
}

// Função de pesquisa (para ser implementada)
function performSearch() {
    const searchInput = document.getElementById('searchInput').value;
    console.log("Procurando por: " + searchInput);
}













