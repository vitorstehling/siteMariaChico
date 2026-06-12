# Lar Maria e Chico – Site Institucional

Site estático (HTML/CSS/JS) inspirado no layout da [Amare](https://amare.net.br).

## Estrutura

```
KiroSiteLarMariaEChicho/
├── index.html          → página principal
├── css/
│   └── style.css       → todos os estilos
├── js/
│   └── main.js         → interatividade (menu, formulário, animações)
├── img/
│   └── LEIA-ME.txt     → instruções sobre quais imagens adicionar
└── README.md
```

## Como usar

1. Abra o arquivo `index.html` em qualquer navegador.
2. Adicione as fotos reais na pasta `img/` conforme o `LEIA-ME.txt`.
3. No arquivo `js/main.js`, altere o número de WhatsApp na variável `phone`.
4. Atualize textos, endereços e e-mail no `index.html`.

## Seções do site

| Seção | Descrição |
|---|---|
| Hero | Banner com chamada para WhatsApp |
| Quem Somos | Texto institucional + imagem |
| Serviços | 6 cards de serviços |
| Galeria | Grade de 6 fotos |
| Unidades | Cards das 2 unidades |
| Nossa História | Seção com fundo parallax |
| Contato | Informações + formulário |
| Footer | Créditos |

## Personalização rápida

- **Cores principais**: edite as variáveis CSS no início do `style.css` (seção `:root`)
- **WhatsApp**: altere `const phone` no `main.js`
- **Telefone/endereço**: busque e substitua no `index.html`
