🎬 Prime Flix - Plataforma de Catálogo de Filmes
https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge

📸 Visualizações do Projeto
<div align="center">
🖥️ Interface Principal - Carrossel de Destaques
<img src="./images/tela.png" alt="Homepage Carrossel" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/> *Carrossel interativo com filmes em cartaz - navegação suave com controles personalizados*
🎬 Layout de Grade Responsiva
<img src="./images/tela2.png" alt="Lista de Filmes" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin-top: 20px;"/> *Grade adaptável de filmes com design card moderno e hover effects*
📱 Experiência Mobile
<img src="./images/tela1.png" alt="Mobile View" width="300" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin-top: 20px;"/> *Interface otimizada para dispositivos móveis com touch-friendly interactions*</div>
✨ Sobre o Projeto
Prime Flix é uma aplicação web sofisticada desenvolvida em React.js que consome a API do TMDB (The Movie Database) para apresentar um catálogo cinematográfico completo e dinâmico. O projeto demonstra excelência em desenvolvimento front-end com foco em experiência do usuário e responsividade.

🎓 Projeto Acadêmico
Desenvolvido durante o curso "Projeto Completo NodeJS, React, React Native, TypeScript"
Ministrado por Matheus Fraga | Plataforma Udemy

🚀 Demonstração ao Vivo
🌐 Acesse a aplicação: https://prime-flix-wheat.vercel.app/

🎨 Funcionalidades Implementadas
🎯 Carrossel Interativo
Navegação suave com controles personalizados

Scroll horizontal programático usando useRef

Loading states elegantes com feedback visual

Otimização de performance com lazy loading de imagens

javascript
// Implementação do carrossel com useRef
const scroll = (offset) => {
  if (carouselRef.current) {
    carouselRef.current.scrollBy({
      left: offset,
      behavior: 'smooth',
    });
  }
};
📊 Seção de Catálogo Dinâmico
Grid responsivo com layout adaptativo

Paginação inteligente utilizando slice arrays

Cards informativos com posters otimizados

Links dinâmicos para páginas de detalhes

🎪 Experiência do Usuário Premium
Design moderno com estética cinematográfica

Feedback visual imediato em todas as interações

Navegação intuitiva entre seções

Performance otimizada com estados de carregamento

🛠️ Arquitetura Técnica
⚙️ Stack Tecnológico
json
{
  "frontend": "React 18+",
  "linguagem": "JavaScript ES6+",
  "estilização": "CSS3 Modules",
  "roteamento": "React Router DOM",
  "consumo": "REST API - TMDB",
  "hooks": "useState, useEffect, useRef",
  "deploy": "Vercel Platform"
}
🔗 Integração com API TMDB
javascript
// Configuração e consumo da API
useEffect(() => {
  async function loadFilmes() {
    const response = await api.get('movie/now_playing', {
      params: {
        api_key: 'e42927b0097dec5ab37664bf19721ab9',
        language: 'pt-BR',
        page: 1,
      },
    });
    setFilmes(response.data.results);
    setLoading(false);
  }
  loadFilmes();
}, []);
📐 Padrões de Desenvolvimento
🎯 Componentização Avançada
jsx
// Estrutura modularizada e reutilizável
<Container>
  <CarouselSection>
    <CarouselWrapper>
      <NavigationArrows />
      <FilmCarousel ref={carouselRef} />
    </CarouselWrapper>
  </CarouselSection>
  
  <MovieGridSection>
    <MovieGrid films={filmes} />
  </MovieGridSection>
</Container>
📱 Design Responsivo Profissional
css
/* Mobile First Approach */
.container {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.lista-filmes {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
  
  .lista-filmes {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .lista-filmes {
    grid-template-columns: repeat(4, 1fr);
  }
}
🌟 Diferenciais Técnicos
⚡ Performance e Otimização
CDN de imagens do TMDB para carregamento rápido

Renderização eficiente com keys únicas e estáveis

Gestão de estado otimizada com useState

Efeitos colaterais controlados com useEffect dependencies

🎨 Experiência Visual
Hierarquia visual clara e intuitiva

Tipografia escalável e legível

Paleta de cores temática cinematográfica

Microinterações suaves e profissionais

🔧 Qualidade de Código
Princípios Clean Code aplicados

Reutilização de componentes

Minimização de prop drilling

Error handling robusto

📊 Métricas e Estatísticas
Aspecto	Detalhes	Impacto
Componentes	5+ componentes reutilizáveis	♻️ Manutenibilidade
Hooks	2 useState + 1 useEffect + 1 useRef	⚡ Performance
API Calls	1 endpoint principal otimizado	🚀 Velocidade
Responsividade	3 breakpoints estratégicos	📱 Adaptabilidade
Imagens	CDN TMDB + lazy loading	🖼️ Otimização
🎓 Contexto de Desenvolvimento
"O Prime Flix representa um marco significativo na minha jornada de aprendizado em desenvolvimento front-end. Mais do que simplesmente implementar funcionalidades, busquei compreender profundamente os conceitos do React.js e as melhores práticas de desenvolvimento web moderno, sempre com foco na experiência do usuário final."

📈 Evolução Técnica Demonstrada
✅ Domínio de React Hooks (useState, useEffect, useRef)

✅ Gestão de Estado local e assíncrono

✅ Consumo de APIs RESTful com tratamento de erros

✅ CSS Responsivo avançado com Mobile-First

✅ Arquitetura de Componentes modular

✅ Deploy Profissional na Vercel

✅ Otimização de Performance front-end

🔮 Roadmap Futuro
🚀 Próximas Implementações Planejadas
Funcionalidade	Status	Complexidade
Sistema de busca em tempo real	📋 Planejado	🟡 Média
Sistema de favoritos com localStorage	📋 Planejado	🟢 Baixa
Filtros avançados por gênero/ano	📋 Planejado	🟡 Média
Página de detalhes expandida	📋 Planejado	🟢 Baixa
Migração para TypeScript	🔄 Futuro	🔴 Alta
Testes unitários com Jest	🔄 Futuro	🟡 Média
Capacidades PWA	🔄 Futuro	🟡 Média
📁 Estrutura do Projeto
text
prime-flix/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Home/
│   │       ├── home.js
│   │       └── home.css
│   ├── services/
│   │   └── api.js
│   ├── routes/
│   │   └── filme/
│   │       └── [id].js
│   └── App.js
├── images/
│   ├── home-carrossel.png
│   ├── movie-grid.png
│   └── mobile-view.png
└── README.md
👨‍💻 Desenvolvimento
Diogo Cruz Maia
Desenvolvedor Front-end Júnior | React Specialist

https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white

📞 Contato
📧 Email: diogocrmaia03@gmail.com
💼 LinkedIn: Diogo Cruz Maia
🐙 GitHub: DioCrM22
🌐 Portfólio: Repositórios GitHub

🎬 "O Prime Flix não é apenas um projeto - é a materialização do meu compromisso com a excelência em desenvolvimento front-end. Cada linha de código representa horas de aprendizado, experimentação e paixão por criar experiências digitais memoráveis que unem tecnologia e design em perfeita harmonia."

<div align="center">
⭐️ Se este projeto te impressionou, deixe uma estrela no repositório!
"Do código à experiência: transformando ideias em realidade digital"

https://api.visitorbadge.io/api/visitors?path=https%253A%252F%252Fgithub.com%252FDioCrM22%252FPrime-Flix&label=VISITANTES&countColor=%2523263759&style=flat

</div>
