# 📸 Lumen Photography

**Lumen** é o site de portfólio de duas irmãs fotógrafas apaixonadas por capturar momentos que contam histórias. O projeto apresenta uma identidade visual elegante e moderna, com uma galeria interativa, seção "Sobre Nós" e informações de contato, desenvolvido para oferecer uma experiência de usuário dinâmica e responsiva.

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)

## 🚀 Demonstração

Acesse o site em produção: [https://lumen-rho.vercel.app/](https://lumen-rho.vercel.app/)

## ✨ Sobre o Projeto

A Lumen Photography foi criada para ser a vitrine digital de duas fotógrafas que transformam cada clique em uma obra de arte. O site comunica a paixão pela fotografia e a habilidade de capturar a essência única de cada cliente, destacando momentos que serão apreciados por gerações.

### Navegação e Seções

- **Hero:** Apresentação visual impactante com a chamada "Veja o melhor de você".
- **About:** Explica a missão da Lumen, destacando a experiência e a paixão das fotógrafas.
- **Portfolio:** Galeria interativa com categorias como Model, Book e Product.
- **Call to Action:** Convite para criar momentos e registrar emoções, com botão para contato.
- **Contato:** Área para clientes entrarem em contato.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **[Next.js 14](https://nextjs.org/):** Framework React para renderização e estruturação do site (Pages Router).
- **[React](https://reactjs.org/):** Biblioteca para construção da interface do usuário.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de CSS utilitário para estilização rápida e responsiva.
- **[Vercel](https://vercel.com/):** Plataforma para deploy e hospedagem.

## 📦 Estrutura de Pastas

A estrutura principal do projeto é:

Lumen/\
├── public/ # Arquivos estáticos (imagens, ícones, etc.)\
├── src/\
│ └── pages/ # Diretório principal do Next.js (Pages Router)\
│ ├── api/ # Rotas de API\
│ ├── _app.js # Componente principal da aplicação\
│ ├── _document.js # Personalização do documento HTML\
│ └── index.js # Página inicial\
├── .eslintrc.json # Configuração do ESLint\
├── .gitignore # Arquivos ignorados pelo Git\
├── jsconfig.json # Configuração do caminho base para importações\
├── next.config.mjs # Configuração do Next.js\
├── package.json # Dependências e scripts do projeto\
├── postcss.config.mjs # Configuração do PostCSS para o Tailwind\
└── tailwind.config.js # Configuração do Tailwind CSS\


## 💻 Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter o Node.js (versão 18 ou superior) e o npm (ou yarn, pnpm) instalados.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/alisonnRB/Lumen.git
    cd Lumen
    ```

2. **Instale as dependências:**
  ```bash
  npm install
  # ou
  yarn install
  # ou
  pnpm install
  ```

3. **Execute o servidor de desenvolvimento:**
  ```bash
  npm run dev
  # ou
  yarn dev
  # ou
  pnpm dev
  # ou
  bun dev
  ```

4. **Abra o navegador:**\
Acesse http://localhost:3000 para ver o resultado.


## 🧠 Aprendizados e Melhorias Futuras

Este projeto foi uma excelente oportunidade para praticar a criação de portfólios elegantes com Next.js e Tailwind CSS. Para o futuro, algumas melhorias podem ser implementadas:

    Galeria Dinâmica: Conectar a galeria a um CMS para facilitar a atualização das fotos.

    Formulário de Contato: Tornar o formulário de contato funcional (ex: com EmailJS ou uma API).

    Animações: Adicionar animações mais suaves e interativas para melhorar a experiência do usuário.

    SEO: Aprimorar ainda mais as práticas de SEO para aumentar a visibilidade nos mecanismos de busca.
