# Character Creation App 🎲

Aplicação de criação de personagens inspirada em D&D, com interface em tema pergaminho (claro e escuro) evocando manuscritos antigos.

## ✨ Features

- Criação de personagens (atributos, classe, raça, background, alinhamento, história)
- Tema claro: tons de pergaminho (bege, creme, sépia suave)
- Tema escuro: pergaminho noturno (tons quentes terrosos + contraste “tinta”)
- Gradientes sutis em ambos os temas
- Layout responsivo
- Lista e visualização detalhada (dialog) do personagem
- Persistência via API (json-server)
- Alternância de tema (light/dark) com classe .dark

## 🛠️ Tecnologias

- React + TypeScript
- Vite
- Tailwind CSS v4 (CSS variables + design tokens)
- React Router DOM
- Lucide React (ícones)
- Recoil (estado global)
- sonner (toasts)
- json-server (API mock)

## 🎨 Tema (Light & Dark)

Light:

- Fundo pergaminho claro
- Cartões e popovers em camadas sutis
- Primária sépia / âmbar suave

Dark:

- Fundo “pergaminho envelhecido” profundo
- Contraste de texto equilibrado (ink-like)
- Highlights âmbar/mel
- Gradiente mais forte simulando desgaste

Tokens principais (exemplos):

- --background / --foreground
- --card / --card-foreground
- --primary / --primary-foreground
- --muted / --accent
- --background-gradient (ambos os temas)

## 🚀 Setup

Pré-requisitos:

- Node.js 16+

Instalação:

```bash
git clone https://github.com/your-username/character-creation-app.git
cd character-creation-app
npm install
```

Dev (frontend):

```bash
npm run dev
# http://localhost:5173
```

API (json-server):

```bash
npm run start
# http://localhost:3000
```

Build:

```bash
npm run build
npm run preview
```

## 📁 Estrutura

```
src/
  components/
  pages/
  state/
  lib/
  api/
  types/
  index.css
```

## 🧪 Scripts

- npm run dev
- npm run start (json-server)
- npm run build
- npm run preview



