
// Seleciona todos os links do menu
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Previne o comportamento padrão do clique
        const targetId = link.getAttribute('href'); // Obtém o ID do destino
        const targetElement = document.querySelector(targetId); // Localiza o elemento alvo
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // Calcula a posição do elemento
                behavior: 'smooth', // Faz o scroll suave
            });
        }
    });
});


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    // 📌 ANIMAÇÃO PARA DESKTOP (largura maior que 768px)
    "(min-width: 769px)": function() {
        // Timeline principal para a seção '.two'
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger: '.two',
                start: '0% 95%',
                end: '70% 65%',
                scrub: true,
                // markers: true, // Remova depois de testar
            },
        });

        tl.to('#dev', { top: '120%', left: '5%' }, 'orange');
        tl.to('#csharp', { top: '170%', left: '25%' }, 'orange');
        tl.to('#css', { width: '15%', top: '175%', right: '10%' }, 'orange');
        tl.to('#php', { width: '10%', top: '103%', rotate: '750deg', left: '70%' }, 'orange');
        tl.to('#python', { top: '110%', rotate: '530deg', left: '0%' }, 'orange');

        // Timeline para a seção '.three'
        var tl2 = gsap.timeline({
            scrollTrigger:{
                trigger: '.three',
                start: '0% 95%',
                end: '70% 80%',
                scrub: true,
                // markers: true, // Remova depois de testar
            },
        });

        tl2.from('.monitor1', { rotate: '-90deg', x: '50vw', y: '110vh' }, 'ca');
        tl2.from('#borges', { rotate: '-90deg', x: '50vw', y: '110vh' }, 'ca');
        tl2.from('.monitor2', { rotate: '90deg', x: '-50vw', y: '110vh' }, 'ca');
        tl2.from('#bere', { rotate: '90deg', x: '-50vw', y: '110vh' }, 'ca');

        tl2.to('#csharp', { width: '10%', left: '37.5%', top: '204%' }, 'ca');
        tl2.to('#dev', { width: '25%', left: '37.5%', top: '215%' }, 'ca');

        // Timeline para a seção '.for'
        var tl3 = gsap.timeline({
            scrollTrigger:{
                trigger: '.for',
                start: '10% 95%',
                end: '70% 80%',
                scrub: true,
                // markers: true, // Remova depois de testar
            },
        });

        tl3.from('#mian', { rotate: '1030deg', left: '0%', top: '100%' }, 'perfil');
    }
});


// ANIMAÇÃO MOBILE
// Menu Mobile
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Alterna a classe 'active' no menu
});

// Fechar o menu ao clicar em um link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active'); // Fecha o menu
    });
});

// Restante do código GSAP mobile e ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    // Animações para mobile
    "(max-width: 768px)": function() {
        var tlMobile = gsap.timeline({
            scrollTrigger: {
                trigger: '.two',
                start: '0% 100%',  // A animação começa quando o elemento ".two" toca o topo da tela
                end: '40% 65%',
                scrub: true, // Sincroniza a animação com o scroll
                //markers: true, // Mostra os marcadores para depuração (remova depois de testar)
                immediateRender: true, // Garante que a animação já esteja pronta
            }
        });
        
        tlMobile.to(
            '#dev',
            {
                top: '145%', //Move o elemento id dev para 120% do topo
                width: '70%',
                left: '40%', //Move o elemento para 0% a esquerda
            },
            'mobile'
        ); //Nomeando este trecho de animação como 'orange' para sincronização

        tlMobile.to(
            '#csharp',
            {
                width: '29%',
                top: '88%', //Move o elemento id laranja cortada para 160% do topo
                left: '7%', //Move o elemento para 23% a esquerda
                rotate: '360%',
            },
            'mobile'
        ); //Nomeando este trecho de animação como 'orange' para sincronização

        tlMobile.to(
            '#css',
            {
                width: '45%', //Reduz a largura do elemento laranja para 15%
                top: '120%', //Move o elemento id laranja para 160% do topo
                right: '15%', //Move o elemento para 10% a direita
            },
            'mobile'
        ); //Nomeando este trecho de animação como 'orange' para sincronização

        tlMobile.to(
            '#php',
            {
                width: '25%',
                top: '103%', //Move o elemento id folha para 110% do topo
                rotate: '720deg', // Rotacionar em 130graus quanto maior mais "vezes" faz a animação
                left: '70%', //Move o elemento para 70% da esquerda
            },
            'mobile'
        ); //Nomeando este trecho de animação como 'orange' para sincronização

        tlMobile.to(
            '#python',
            {
                width: '35%',
                top: '135%', //Move o elemento id folha2 para 110% do topo
                rotate: '720deg', // Rotacionar em 130graus
                left: '0%', //Move o elemento para 0% da esquerda
            },
            'mobile'
        ); //Nomeando este trecho de animação como 'orange' para sincronização
        // Garante que o ScrollTrigger seja recalculado ao carregar a página        
        
        var tlMobileCard1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.three',
                start: '0% 100%',
                end: '30% 90%',
                scrub: true,
                //markers: true, // Remova depois de testar
            },
        });
        
        tlMobileCard1.from('.monitor1', {
            rotate: '180deg',
            opacity: 0, // Faz a imagem aparecer suavemente
            scale: 0.8, // Escala a imagem para dar um efeito de zoom
        }, 'card1');
        
        tlMobileCard1.from('#borges', {
            rotate: '180deg',
            opacity: 0, // Faz a imagem aparecer suavemente
            scale: 0.8, // Escala a imagem para dar um efeito de zoom
        }, 'card1');
        
        var tlMobileCard2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.three',
                start: '45% 100%',
                end: '60% 90%',
                scrub: true,
                //markers: true, // Remova depois de testar
            },
        });

        tlMobileCard2.to('#csharp', { 
            width: '35%', 
            left: '5%', 
            top: '295%' }, 
            'card2');

        tlMobileCard2.to('#dev', { 
            width: '90%', 
            left: '50%', 
            top: '365%' }, 
            'card2');       
    }
});