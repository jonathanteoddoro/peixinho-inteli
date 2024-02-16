// Definição da configuração do jogo
var config = { 
    type: Phaser.AUTO, // O navegador escolhe automaticamente o tipo de renderizador
    width: 800, // Largura da tela do jogo
    height: 600, // Altura da tela do jogo

    // Definição das cenas do jogo
    scene: {
        preload: preload, // Função de pré-carregamento de recursos
        create: create, // Função de criação dos elementos do jogo
        update: update // Função de atualização do jogo
    }
};  

// Criação de uma nova instância do jogo Phaser com a configuração fornecida
var game = new Phaser.Game(config)

// Declaração de variáveis globais para os peixes
var peixinho;
var peixeMal;

// Função para pré-carregar os recursos do jogo
function preload(){
    // Carregamento das imagens necessárias
    this.load.image('mar', 'assets/bg_azul-claro.png'); // Fundo do mar
    this.load.image('logo', 'assets/logo-inteli_azul.png'); // Logo do jogo
    this.load.image('peixe', 'assets/peixinho_laranja.jpg'); // Imagem do peixe principal
    this.load.image('logoPeixe', 'assets/peixe_logo.png'); // Logo do jogo (símbolo)
    this.load.image('ruim', 'assets/ruim.png'); // Imagem do peixe antagonista
    this.load.image('coral', 'assets/coral.png'); // Imagem do coral (decorativo)
}

// Função para criar os elementos do jogo
function create(){
    // Adição da imagem de fundo do mar
    this.add.image(400, 300, 'mar');
    // Adição da logo do jogo
    this.add.image(400, 525, 'logo').setScale(0.5);
    // Adição do logo do jogo como um símbolo
    this.add.image(50, 30, 'logoPeixe').setScale(0.5);
    // Adição de texto com o título do jogo
    this.add.text(100, 15, 'JOGO DO PEIXE', { fontFamily: 'Impact', fontSize: '28px' });

    // Adição de elementos decorativos
    this.add.image(650, 475, 'coral').setScale(0.5); // Coral

    // Adição do antagonista (peixe mal)
    peixeMal = this.add.image(400, 300, 'ruim').setScale(0.25);
    peixeMal.setFlip(true, false); // Espelhamento horizontal
    peixeMal.setRotation(Phaser.Math.DegToRad(10)); // Rotação do peixe antagonista

    // Adição do peixe principal
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false); // Peixe principal
}

// Função para atualizar o jogo
function update(){
    // Atualização da posição do peixe principal de acordo com o cursor do mouse
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
    
    // Posicionamento do antagonista em relação ao peixe principal
    peixeMal.x = (peixinho.x - 250);
    peixeMal.y = (peixinho.y - 110);
}
