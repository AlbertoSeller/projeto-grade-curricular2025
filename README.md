# 📘 Matriz Curricular — Sistemas de Informação (UniSantos)

Este projeto apresenta a matriz curricular do curso **Sistemas de Informação** da **Universidade Católica de Santos (UniSantos)**, organizada em abas por semestre, com foco em acessibilidade, responsividade e manutenção simples do código.

---

## 🚀 Tecnologias Utilizadas

- **HTML5** (semântico e acessível)
- **CSS3** (custom properties, responsividade e animações leves)
- **JavaScript Vanilla** (tabs dinâmicas com suporte a teclado e ARIA)
- **WCAG Guidelines** para acessibilidade aprimorada

---

## 🎯 Objetivo do Projeto

Oferecer uma visualização clara, moderna e acessível da matriz curricular oficial, permitindo:

- Navegação rápida entre semestres  
- Leitura fácil em dispositivos móveis  
- Uso por leitores de tela  
- Alterações rápidas para futuras atualizações do curso  

---

## 📑 Funcionalidades Principais

### ✔ Sistema de Tabs com Acessibilidade
- Navegação por **teclado** (Enter, Espaço)
- Uso correto de `role="tab"` e `role="tabpanel"`
- Indicação de aba ativa via `aria-selected`
- Controle automático do `aria-hidden`

### ✔ Breadcrumb Dinâmico
Atualiza o semestre exibido conforme o usuário troca de aba.

### ✔ Tabelas Responsivas
Em telas pequenas, as tabelas tornam-se **cards**, preservando a leitura sem scroll lateral.

### ✔ Código Otimizado e Estruturado
- CSS organizado por seções com comentários profissionais  
- JavaScript enxuto, modular e sem dependências externas  
- Semântica HTML adequada para SEO e acessibilidade  

---

## 📂 Estrutura do Repositório
projeto-grade-curricular/
│
├── index.html
├── README.md
├── CHANGELOG.md
│
├── assets/
│ ├── css/
│ │ ├── style.css
│ │ └── style.min.css
│ ├── js/
│ │ ├── script.js
│ │ └── script.min.js
│ └── img/
│ ├── logo.png
│ └── logotipo.png


---

## 📎 PDF Oficial da Matriz

Para referência, o PDF oficial pode ser baixado diretamente no botão disponível na página.

---

## 🛠 Como Editar ou Expandir o Projeto

### Alterar disciplinas
Edite diretamente as tabelas dentro das `<section>` por semestre.

### Ajustar cores
No início do CSS, as **CSS Custom Properties** permitem alterar a paleta facilmente:

```css
:root {
  --primary: #004080;
  --secondary: #003366;
}
Melhorias futuras sugeridas

Dark mode

Versão com busca por disciplina

Exportação própria para PDF com layout customizado

API/JSON para leitura dinâmica da matriz

👨‍💻 Autor

Projeto otimizado com auxílio de IA para fins acadêmicos e profissionais.

📝 Licença

Este projeto é livre para estudo, modificação e utilização conforme necessidade (MIT License).
