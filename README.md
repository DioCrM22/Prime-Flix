# 🎬 Prime Flix - Plataforma de Catálogo de Filmes  

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge)

</div>

## 📸 Visualizações do Projeto

<div align="center">

### 🏠 Interface Principal - Home
<img src="https://github.com/user-attachments/assets/e8783bc3-bd02-481d-9e46-f3e325e4b72e" alt="Interface Principal" width="800" style="border-radius: 10px; box-shadow: 0 8px 16px rgba(0,0,0,0.2); border: 1px solid #333;"/>

### ⭐ Página de Favoritos - Meus Filmes
<img src="https://github.com/user-attachments/assets/4ce0f0be-30f0-456f-a699-6fdce54e3f96" alt="Carrossel Interativo" width="800" style="border-radius: 10px; box-shadow: 0 8px 16px rgba(0,0,0,0.2); border: 1px solid #333; margin-top: 30px;"/>

### 🎬 Informções do Filme - Filme
<img src="https://github.com/user-attachments/assets/2b57f46b-0c6c-4f28-9226-2f5b78e73d19" alt="Design Responsivo" width="800" style="border-radius: 10px; box-shadow: 0 8px 16px rgba(0,0,0,0.2); border: 1px solid #333; margin-top: 30px;"/>


</div>


## ✨ Sobre o Projeto  

**Prime Flix** é uma aplicação web desenvolvida em **React.js** que consome a **API do TMDB (The Movie Database)** para apresentar um catálogo cinematográfico completo e dinâmico.  
O projeto demonstra excelência em desenvolvimento **front-end**, com foco em **experiência do usuário** e **responsividade**.

🎓 Desenvolvido durante o curso:  
> “Projeto Completo NodeJS, React, React Native, TypeScript”  
> Ministrado por **Matheus Fraga | Udemy**

---

## 🚀 Demonstração ao Vivo  

🌐 **Acesse a aplicação:**  
🔗 [https://prime-flix-wheat.vercel.app/](https://prime-flix-wheat.vercel.app/)

### 🌍 **Deploy & Hospedagem**
- **Plataforma:** Vercel
- **Status:** ✅ Production Ready
- **CI/CD:** Deploy automático com Git
  
---

## 🎨 Funcionalidades Implementadas  

### 🎯 Carrossel Interativo  
- Navegação suave com controles personalizados  
- Scroll horizontal programático usando `useRef`  
- Loading states elegantes com feedback visual  
- Otimização de performance com lazy loading de imagens  

## 📊 Seção de Catálogo Dinâmico
Grid responsivo com layout adaptativo

Paginação inteligente utilizando slice arrays

Cards informativos com posters otimizados

Links dinâmicos para páginas de detalhes

## 🎪 Experiência do Usuário Premium
Design moderno com estética cinematográfica

Feedback visual imediato em todas as interações

Navegação intuitiva entre seções

Performance otimizada com estados de carregamento

## 🛠️ Arquitetura Técnica
### ⚙️ Stack Tecnológico
json
Copiar código
```
{
  "frontend": "React 18+",
  "linguagem": "JavaScript ES6+",
  "estilização": "CSS3 Modules",
  "roteamento": "React Router DOM",
  "consumo": "REST API - TMDB",
  "hooks": "useState, useEffect, useRef",
  "deploy": "Vercel Platform"
}
```
## 🔗 Integração com API TMDB
javascript
```
Copiar código
// Configuração e consumo da API
useEffect(() => {
  async function loadFilmes() {
    const response = await api.get('movie/now_playing', {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'pt-BR',
        page: 1,
      },
    });
    setFilmes(response.data.results);
    setLoading(false);
  }
  loadFilmes();
}, []);
```
## 🛠️ Como Executar o Projeto

### 📋 Pré-requisitos
- Node.js 16+ instalado
- Gerenciador de pacotes (npm ou yarn)
- Chave da API TMDB

### 🚀 Instalação e Execução

```bash
# 1. Clone o repositório
git clone https://github.com/DioCrM22/Prime-Flix.git

# 2. Acesse a pasta do projeto
cd Prime-Flix

# 3. Instale as dependências
npm install

# 4. Configure a variável de ambiente
# Crie um arquivo .env na raiz com:
REACT_APP_API_KEY=sua_chave_tmdb_aqui

# 5. Execute o projeto
npm start

```

## 🎓 Contexto de Desenvolvimento
“O Prime Flix representa um marco significativo na minha jornada de aprendizado em desenvolvimento front-end.
Mais do que simplesmente implementar funcionalidades, busquei compreender profundamente os conceitos do React.js e as melhores práticas de desenvolvimento web moderno, sempre com foco na experiência do usuário final.”

## 📈 Evolução Técnica Demonstrada
✅ Domínio de React Hooks (useState, useEffect, useRef)

✅ Gestão de Estado local e assíncrono

✅ Consumo de APIs RESTful com tratamento de erros

✅ CSS Responsivo avançado com abordagem Mobile-First

✅ Arquitetura de Componentes modular

✅ Deploy Profissional na Vercel

✅ Otimização de Performance Front-end

---

📧 Email: diogocrmaia03@gmail.com

💼 LinkedIn: Diogo Cruz Maia

🐙 GitHub: DioCrM22

🌐 Portfólio: Repositórios GitHub
<div align="center">

⭐️ Se este projeto te impressionou, deixe uma estrela no repositório!

“Do código à experiência: transformando ideias em realidade digital.”

</div>

<div align="center">


</div>
