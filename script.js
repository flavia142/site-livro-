const livros = document.querySelectorAll('.livro');
const carrinho = document.getElementById('itens-carrinho');
const totalDisplay = document.getElementById('total');
let total = 0;

livros.forEach(livro => {
    livro.querySelector('.comprar').addEventListener('click', () => {
        const titulo = livro.querySelector('h3').innerText;
        const preco = parseFloat(livro.querySelector('p:nth-child(3)').innerText.replace('R$ ', '').replace(',', '.'));
        
        // Adiciona item ao carrinho
        const li = document.createElement('li');
        li.innerText = `${titulo} - R$ ${preco.toFixed(2)}`;
        carrinho.appendChild(li);
        
        // Atualiza total
        total += preco;
        totalDisplay.innerText = `Total: R$ ${total.toFixed(2)}`;
    });
});

document.getElementById('finalizar-compra').addEventListener('click', () => {
    alert('Compra finalizada com sucesso!');
    carrinho.innerHTML = '';
    total = 0;
    totalDisplay.innerText = `Total: R$ 0,00`;
});
