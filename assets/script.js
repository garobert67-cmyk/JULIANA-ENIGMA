 gsap.registerPlugin(SplitText,TextPlugin)

// Função que anima os h1 e p de uma screen específica
function animateScreen(screenElement) {
    const h1Elements = screenElement.querySelectorAll('h1');
    const pElements = screenElement.querySelectorAll('p');

    // Anima os h1 (split2) — chars com mask
    if (h1Elements.length > 0) {
        const splitH1 = new SplitText(h1Elements, { type: "chars", mask: "chars" });
        gsap.from(splitH1.chars, {
           x:100,
           stagger:0.01
        });
    }

    // Anima os p (split) — chars com mask
    if (pElements.length > 0) {
        const splitP = new SplitText(pElements, { type: "chars", mask: "chars" });
        gsap.from(splitP.chars, {
            x:100,
           stagger:0.01
        });
    }
}

// Anima a screen 1 (active no carregamento)
const initialScreen = document.querySelector('.screen.active');
if (initialScreen) {
    animateScreen(initialScreen);
}

        function next(number) {
            document.querySelectorAll('.screen').forEach(screen =>     
            screen.classList.remove('active'));

            const newScreen = document.getElementById('screen' + number);
            newScreen.classList.add('active');

            // Detecta que a nova screen recebeu .active e aplica a animação
            animateScreen(newScreen);
          
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }


        function checkLocation() {
            const answer =
                document
                    .getElementById('answer1')
                    .value
                    .trim()
                    .toLowerCase();
            const status =
                document
                    .getElementById('status1');
            if (
                answer === 'tóquio' ||
                answer === 'toquio' ||
                answer === 'tokyo'  || answer === 'TOKYO' || answer === 'TOQUIO' || answer ==='TÓQUIO'
            ) {
                status.innerHTML =
                    'LOCALIZAÇÃO CONFIRMADA ✓';
                status.className =
                    'status success';
                setTimeout(
                    () => next(3),
                    800
                );
            }
            else {
                status.innerHTML =
                    'LOCALIZAÇÃO INCORRETA. A investigação continua.';
                status.className =
                    'status error';
            }
        }


        function checkFinal() {

            const answer =
                document
                    .getElementById('answer2')
                    .value
                    .trim()
                    .toLowerCase();


            const status =
                document
                    .getElementById('status2');
            if (
                answer.includes('branco') &&
                answer.includes('inferno') || answer.includes('white hell') || answer.includes('WHITE HELL') || answer.includes('White hell') || answer.includes('inferno')
            ) {
                status.innerHTML =
                    'IDENTIDADE CONFIRMADA ✓';
                status.className =
                    'status success';
                setTimeout(
                    () => next(6),
                    900
                );
            }
            else {
                status.innerHTML =
                    'RESPOSTA INCORRETA. Procure mais uma vez.';
                status.className =
                    'status error';
            }
        }


