// --- COMPLETE QUIZ DATASET (9 Categories, 90 Questions) ---
        const quizData = [
            {
                id: 'planetas',
                name: 'Planetas',
                icon: 'fa-solid fa-globe',
                color: 'from-blue-600 to-cyan-500',
                emoji: '🪐',
                questions: [
                    { q: "Qual é o maior planeta do Sistema Solar?", options: ["Terra", "Júpiter", "Saturno", "Netuno"], correct: 1 },
                    { q: "Qual é o planeta mais próximo do Sol?", options: ["Vênus", "Terra", "Mercúrio", "Marte"], correct: 2 },
                    { q: "Qual planeta é conhecido como Planeta Vermelho?", options: ["Marte", "Júpiter", "Urano", "Vênus"], correct: 0 },
                    { q: "Qual planeta possui os anéis mais famosos do Sistema Solar?", options: ["Netuno", "Saturno", "Mercúrio", "Marte"], correct: 1 },
                    { q: "Qual é o planeta mais quente do Sistema Solar?", options: ["Mercúrio", "Marte", "Vênus", "Júpiter"], correct: 2 },
                    { q: "Qual planeta é conhecido por girar praticamente deitado em relação ao seu plano orbital?", options: ["Terra", "Urano", "Marte", "Mercúrio"], correct: 1 },
                    { q: "Qual é o planeta mais distante do Sol entre os oito planetas?", options: ["Saturno", "Urano", "Netuno", "Júpiter"], correct: 2 },
                    { q: "Qual planeta possui a Grande Mancha Vermelha?", options: ["Júpiter", "Marte", "Vênus", "Netuno"], correct: 0 },
                    { q: "Qual planeta possui uma densidade média menor que a da água?", options: ["Terra", "Saturno", "Marte", "Mercúrio"], correct: 1 },
                    { q: "Quantos planetas existem atualmente no Sistema Solar?", options: ["7", "8", "9", "10"], correct: 1 }
                ]
            },
            {
                id: 'galaxias',
                name: 'Galáxias',
                icon: 'fa-solid fa-galaxy',
                color: 'from-purple-600 to-pink-500',
                emoji: '🌌',
                questions: [
                    { q: "Qual é o nome da galáxia onde está localizado o Sistema Solar?", options: ["Andrômeda", "Via Láctea", "Olho Negro", "Sombrero"], correct: 1 },
                    { q: "Qual é a galáxia grande mais próxima da Via Láctea?", options: ["Andrômeda", "Triângulo", "Sombrero", "Centaurus A"], correct: 0 },
                    { q: "Qual é a classificação morfológica da Via Láctea?", options: ["Elíptica", "Irregular", "Espiral barrada", "Anã esférica"], correct: 2 },
                    { q: "O que é uma galáxia?", options: ["Um conjunto de planetas", "Um sistema formado por estrelas, gás, poeira e matéria escura", "Uma única estrela gigante", "Um conjunto de satélites naturais"], correct: 1 },
                    { q: "Qual é o nome do buraco negro supermassivo no centro da Via Láctea?", options: ["Cygnus X-1", "TON 618", "Sagittarius A*", "M87*"], correct: 2 },
                    { q: "Qual destas galáxias possui formato espiral?", options: ["Andrômeda", "M87", "Galáxia Anã de Sagitário", "NGC 1275"], correct: 0 },
                    { q: "Como são chamadas as galáxias que não apresentam uma forma bem definida?", options: ["Espirais", "Elípticas", "Irregulares", "Anelares"], correct: 2 },
                    { q: "Qual é a galáxia que está em rota de colisão com a Via Láctea?", options: ["Andrômeda", "Sombrero", "Olho Negro", "Redemoinho"], correct: 0 },
                    { q: "O que mantém estrelas e outros componentes unidos dentro de uma galáxia?", options: ["Magnetismo exclusivamente", "Gravidade", "Vento solar", "Pressão atmosférica"], correct: 1 },
                    { q: "Como são chamadas as pequenas galáxias que possuem relativamente poucas estrelas?", options: ["Galáxias anãs", "Galáxias gigantes", "Galáxias quasares", "Galáxias solares"], correct: 0 }
                ]
            },
            {
                id: 'estrelas',
                name: 'Estrelas',
                icon: 'fa-solid fa-star',
                color: 'from-amber-500 to-yellow-300',
                emoji: '⭐',
                questions: [
                    { q: "O que é uma estrela?", options: ["Uma bola de gás que produz energia por fusão nuclear", "Um planeta iluminado", "Um satélite natural", "Uma rocha espacial"], correct: 0 },
                    { q: "Qual é a estrela mais próxima da Terra?", options: ["Sirius", "Próxima Centauri", "Sol", "Betelgeuse"], correct: 2 },
                    { q: "Qual é a cor das estrelas mais quentes?", options: ["Vermelha", "Azul", "Amarela", "Laranja"], correct: 1 },
                    { q: "Como é chamado o fenômeno em que uma estrela explode violentamente no final de sua evolução?", options: ["Eclipse", "Supernova", "Nebulosa", "Aurora"], correct: 1 },
                    { q: "Qual é o principal elemento químico utilizado pelo Sol em sua fusão nuclear?", options: ["Oxigênio", "Ferro", "Hidrogênio", "Carbono"], correct: 2 },
                    { q: "O que é uma anã branca?", options: ["Uma estrela em formação", "O núcleo remanescente de uma estrela de baixa ou média massa", "Um planeta congelado", "Uma galáxia pequena"], correct: 1 },
                    { q: "Qual destas estrelas é conhecida por apresentar uma cor avermelhada e ser uma supergigante?", options: ["Betelgeuse", "Sirius", "Sol", "Vega"], correct: 0 },
                    { q: "O que determina principalmente a cor de uma estrela?", options: ["Sua distância da Terra", "Sua temperatura superficial", "Seu número de planetas", "Seu tamanho aparente"], correct: 1 },
                    { q: "Como é chamada uma estrela de nêutrons que emite pulsos regulares de radiação?", options: ["Quasar", "Pulsar", "Asteroide", "Cometa"], correct: 1 },
                    { q: "O que acontece quando uma estrela como o Sol esgota o combustível necessário para manter a fusão em seu núcleo?", options: ["Ela se transforma imediatamente em um buraco negro", "Ela evolui e pode se tornar uma gigante vermelha", "Ela vira um planeta", "Ela desaparece instantaneamente"], correct: 1 }
                ]
            },
            {
                id: 'buracos-negros',
                name: 'Buracos negros',
                icon: 'fa-solid fa-circle-dot',
                color: 'from-gray-900 via-indigo-950 to-purple-900',
                emoji: '🕳️',
                questions: [
                    { q: "O que é um buraco negro?", options: ["Uma região do espaço com gravidade extremamente intensa", "Um planeta sem atmosfera", "Uma estrela comum", "Uma região sem estrelas"], correct: 0 },
                    { q: "O que é o horizonte de eventos?", options: ["O centro luminoso de uma galáxia", "O limite a partir do qual nada consegue escapar do buraco negro", "Uma região de formação de estrelas", "Uma camada de poeira espacial"], correct: 1 },
                    { q: "A luz consegue escapar de dentro do horizonte de eventos?", options: ["Sim, sempre", "Apenas durante o dia", "Não", "Apenas quando o buraco negro gira"], correct: 2 },
                    { q: "Qual é o nome do buraco negro supermassivo no centro da Via Láctea?", options: ["TON 618", "Sagittarius A*", "Sirius A", "Betelgeuse"], correct: 1 },
                    { q: "Como os cientistas conseguem detectar buracos negros que não emitem luz diretamente?", options: ["Observando seus efeitos sobre a matéria ao redor", "Escutando seus sons", "Observando suas cores", "Medindo sua temperatura com termômetros"], correct: 0 },
                    { q: "O que é um disco de acreção?", options: ["Um conjunto de planetas", "Matéria aquecida que orbita e pode cair em um buraco negro", "Uma camada sólida do buraco negro", "Uma nuvem de gelo"], correct: 1 },
                    { q: "Qual é o nome do fenômeno em que a luz tem sua trajetória desviada pela gravidade?", options: ["Refração atmosférica", "Lente gravitacional", "Fusão nuclear", "Radiação solar"], correct: 1 },
                    { q: "O que acontece com o tempo nas proximidades de um buraco negro, quando comparado ao tempo para um observador distante?", options: ["O tempo pode passar mais lentamente", "O tempo deixa de existir em todo o Universo", "O tempo passa sempre mais rápido", "O tempo não sofre influência da gravidade"], correct: 0 },
                    { q: "Qual foi o primeiro buraco negro cuja imagem foi divulgada diretamente por uma equipe científica, em 2019?", options: ["Sagittarius A*", "Cygnus X-1", "M87*", "TON 618"], correct: 2 },
                    { q: "O que são ondas gravitacionais?", options: ["Ondas de rádio emitidas por planetas", "Ondulações no espaço-tempo", "Ondas sonoras no espaço", "Correntes de vento solar"], correct: 1 }
                ]
            },
            {
                id: 'lua-satelites',
                name: 'Lua e satélites',
                icon: 'fa-solid fa-moon',
                color: 'from-slate-400 to-slate-200',
                emoji: '🌙',
                questions: [
                    { q: "Qual é o satélite natural da Terra?", options: ["Fobos", "Lua", "Europa", "Titã"], correct: 1 },
                    { q: "Qual é a principal causa das marés terrestres?", options: ["A gravidade da Lua e do Sol", "Os ventos solares", "A rotação de Marte", "As explosões solares"], correct: 0 },
                    { q: "Qual é a maior lua do Sistema Solar?", options: ["Titã", "Europa", "Ganimedes", "Lua"], correct: 2 },
                    { q: "Qual planeta possui a lua Titã?", options: ["Júpiter", "Saturno", "Netuno", "Marte"], correct: 1 },
                    { q: "Por que sempre vemos praticamente a mesma face da Lua?", options: ["Porque ela não gira", "Porque sua rotação e sua translação ao redor da Terra têm períodos semelhantes", "Porque o Sol ilumina apenas um lado", "Porque a Terra impede sua rotação"], correct: 1 },
                    { q: "Como é chamado o fenômeno em que a Lua fica entre a Terra e o Sol?", options: ["Eclipse lunar", "Eclipse solar", "Solstício", "Equinócio"], correct: 1 },
                    { q: "Qual é o nome da região escura e extensa da superfície lunar, formada por antigas planícies de lava?", options: ["Mares lunares", "Polos solares", "Anéis lunares", "Crateras de gelo"], correct: 0 },
                    { q: "Qual é a lua de Júpiter que apresenta fortes evidências de um oceano subterrâneo?", options: ["Calisto", "Europa", "Io", "Ganimedes"], correct: 1 },
                    { q: "Quantos dias aproximadamente dura o ciclo completo das fases da Lua?", options: ["7 dias", "15 dias", "29,5 dias", "365 dias"], correct: 2 },
                    { q: "Qual foi o primeiro país a enviar uma missão tripulada que pousou na Lua?", options: ["União Soviética", "Estados Unidos", "China", "Japão"], correct: 1 }
                ]
            },
            {
                id: 'exploracao',
                name: 'Exploração espacial',
                icon: 'fa-solid fa-shuttle-space',
                color: 'from-red-600 to-orange-500',
                emoji: '🚀',
                questions: [
                    { q: "Qual foi o primeiro satélite artificial lançado ao espaço?", options: ["Explorer 1", "Sputnik 1", "Apollo 11", "Voyager 1"], correct: 1 },
                    { q: "Quem foi o primeiro ser humano a viajar para o espaço?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"], correct: 2 },
                    { q: "Qual foi a primeira missão tripulada a pousar na Lua?", options: ["Apollo 8", "Apollo 11", "Apollo 13", "Gemini 4"], correct: 1 },
                    { q: "Qual é o nome da agência espacial dos Estados Unidos?", options: ["ESA", "NASA", "Roscosmos", "JAXA"], correct: 1 },
                    { q: "Qual telescópio espacial foi lançado em 1990?", options: ["James Webb", "Hubble", "Kepler", "Chandra"], correct: 1 },
                    { q: "Qual é o principal objetivo do rover Perseverance em Marte?", options: ["Construir uma cidade", "Investigar o ambiente marciano e procurar sinais de vida antiga", "Transportar astronautas", "Alterar a atmosfera do planeta"], correct: 1 },
                    { q: "Qual é o nome da estação espacial que orbita a Terra e recebe astronautas de diferentes países?", options: ["Estação Espacial Internacional", "Estação Lunar Apollo", "Voyager Station", "Hubble Station"], correct: 0 },
                    { q: "Qual sonda espacial visitou Plutão em 2015?", options: ["Cassini", "New Horizons", "Juno", "Parker Solar Probe"], correct: 1 },
                    { q: "Qual é o nome da primeira mulher a viajar para o espaço?", options: ["Sally Ride", "Valentina Tereshkova", "Mae Jemison", "Eileen Collins"], correct: 1 },
                    { q: "Qual é o principal combustível utilizado por foguetes para produzir empuxo?", options: ["Apenas energia solar", "Propelentes, que podem incluir combustível e oxidante", "Ar atmosférico comum", "Água do mar"], correct: 1 }
                ]
            },
            {
                id: 'asteroides-cometas',
                name: 'Asteroides e cometas',
                icon: 'fa-solid fa-meteor',
                color: 'from-emerald-600 to-teal-500',
                emoji: '☄️',
                questions: [
                    { q: "Onde está localizada a maior parte dos asteroides do Sistema Solar?", options: ["Entre a Terra e Vênus", "Entre Marte e Júpiter", "Além de Netuno", "Próximo ao Sol"], correct: 1 },
                    { q: "Do que são compostos principalmente os cometas?", options: ["Ferro líquido", "Gelo, poeira e rochas", "Apenas gases", "Plasma solar"], correct: 1 },
                    { q: "O que é um meteoro?", options: ["Um corpo que está fora da atmosfera", "O fenômeno luminoso causado pela entrada de um meteoroide na atmosfera", "Um planeta pequeno", "Uma estrela cadente verdadeira"], correct: 1 },
                    { q: "Como é chamado um fragmento espacial que chega à superfície da Terra?", options: ["Asteroide", "Meteoro", "Meteorito", "Cometa"], correct: 2 },
                    { q: "Qual é o nome da região além de Netuno que contém muitos corpos gelados?", options: ["Cinturão de Kuiper", "Cinturão de Asteroides", "Nuvém Solar", "Cinturão de Vênus"], correct: 0 },
                    { q: "O que provoca a formação da cauda de um cometa?", options: ["A gravidade da Terra", "O aquecimento solar e a ação do vento solar e da radiação", "A colisão com asteroides", "A luz das estrelas distantes"], correct: 1 },
                    { q: "Qual planeta anão está localizado no Cinturão de Kuiper?", options: ["Ceres", "Plutão", "Mercúrio", "Europa"], correct: 1 },
                    { q: "Qual é o nome do famoso cometa que retorna aproximadamente a cada 76 anos?", options: ["Hale-Bopp", "Halley", "NEOWISE", "Encke"], correct: 1 },
                    { q: "O que é um asteroide?", options: ["Um pequeno corpo rochoso ou metálico que orbita o Sol", "Uma estrela em formação", "Um planeta gasoso", "Uma nuvem de plasma"], correct: 0 },
                    { q: "O que pode acontecer quando um grande asteroide colide com um planeta?", options: ["Nada acontece", "Pode formar uma grande cratera e provocar efeitos ambientais", "O planeta deixa de girar automaticamente", "O planeta se transforma em estrela"], correct: 1 }
                ]
            },
            {
                id: 'fenomenos',
                name: 'Fenômenos astronômicos',
                icon: 'fa-solid fa-sun',
                color: 'from-amber-600 to-red-500',
                emoji: '🔭',
                questions: [
                    { q: "O que é um eclipse solar?", options: ["A Terra fica entre o Sol e a Lua", "A Lua fica entre a Terra e o Sol", "Marte bloqueia a luz solar", "O Sol deixa de emitir luz"], correct: 1 },
                    { q: "O que é uma aurora boreal?", options: ["Uma explosão de estrelas", "Um fenômeno luminoso causado pela interação de partículas carregadas com a atmosfera", "Um eclipse lunar", "Uma chuva de meteoros"], correct: 1 },
                    { q: "O que causa as estações do ano na Terra?", options: ["A distância entre a Terra e o Sol", "A inclinação do eixo terrestre durante sua órbita ao redor do Sol", "A distância da Lua", "A velocidade das estrelas"], correct: 1 },
                    { q: "O que é uma chuva de meteoros?", options: ["A queda de estrelas sobre a Terra", "A observação de vários meteoros associados à entrada de partículas na atmosfera", "Uma tempestade de asteroides na superfície", "Uma chuva de fragmentos solares"], correct: 1 },
                    { q: "O que é um eclipse lunar?", options: ["A Lua fica entre o Sol e a Terra", "A Terra fica entre o Sol e la Lua", "Marte fica entre a Terra e a Lua", "O Sol fica atrás de Júpiter"], correct: 1 },
                    { q: "O que é uma supernova?", options: ["Uma explosão estelar extremamente energética", "Um planeta recém-formado", "Uma galáxia em rotação", "Uma chuva de cometas"], correct: 0 },
                    { q: "O que é a expansão do Universo?", options: ["O crescimento físico de todas as estrelas", "O aumento das distâncias entre galáxias em grandes escalas", "O aumento do tamanho dos planetas", "A aproximação de todas as galáxias"], correct: 1 },
                    { q: "Como é chamado o ponto da órbita em que um planeta está mais próximo do Sol?", options: ["Afélio", "Periélio", "Equinócio", "Apogeu"], correct: 1 },
                    { q: "O que é uma conjunção astronômica?", options: ["Quando dois astros parecem próximos no céu", "Quando duas estrelas explodem juntas", "Quando um planeta deixa sua órbita", "Quando uma galáxia desaparece"], correct: 0 },
                    { q: "O que é o solstício?", options: ["Um momento em que ocorre a maior diferença anual entre a duração do dia e da noite", "Uma explosão solar", "Um alinhamento entre todas as estrelas", "Um eclipse total da Lua"], correct: 0 }
                ]
            },
            {
                id: 'vida-extraterrestre',
                name: 'Vida extraterrestre',
                icon: 'fa-solid fa-user-astronaut',
                color: 'from-pink-600 to-purple-600',
                emoji: '👽',
                questions: [
                    { q: "O que é um exoplaneta?", options: ["Um planeta localizado fora do Sistema Solar", "Uma lua de Júpiter", "Um asteroide gigante", "Um planeta anão do Sistema Solar"], correct: 0 },
                    { q: "Qual é a estrela mais próxima do Sol?", options: ["Sirius", "Proxima Centauri", "Betelgeuse", "Vega"], correct: 1 },
                    { q: "O que significa zona habitável de uma estrela?", options: ["Uma região onde existem necessariamente alienígenas", "Uma região onde, dependendo das condições atmosféricas, pode existir água líquida na superfície de um planeta", "Uma região sem radiação", "Uma região onde todos os planetas possuem vida"], correct: 1 },
                    { q: "Qual planeta do Sistema Solar é frequentemente estudado na busca por sinais de vida passada?", options: ["Marte", "Mercúrio", "Saturno", "Júpiter"], correct: 0 },
                    { q: "Qual lua de Saturno possui lagos e mares de metano e etano líquidos em sua superfície?", options: ["Europa", "Titã", "Fobos", "Io"], correct: 1 },
                    { q: "O que é a astrobiologia?", options: ["O estudo da vida no contexto do Universo", "O estudo exclusivo das estrelas", "O estudo dos foguetes", "O estudo das galáxias espirais"], correct: 0 },
                    { q: "Qual método permite detectar exoplanetas observando pequenas diminuições no brilho de uma estrela?", options: ["Método de trânsito", "Método de escavação", "Método de reflexão lunar", "Método de eclipse terrestre"], correct: 0 },
                    { q: "A descoberta de água em outro planeta significa necessariamente que existe vida nele?", options: ["Sim, sempre", "Não, a presença de água não comprova a existência de vida", "Sim, desde que exista gelo", "Apenas em planetas rochosos"], correct: 1 },
                    { q: "Qual projeto científico busca detectar possíveis sinais de civilizações extraterrestres?", options: ["SETI", "Apollo", "Voyager", "Artemis"], correct: 0 },
                    { q: "Qual é uma das principais dificuldades para encontrar vida fora da Terra?", options: ["Todos os planetas possuem atmosferas iguais", "As enormes distâncias e a dificuldade de detectar sinais de vida", "A ausência de estrelas no Universo", "A falta de gravidade em outros planetas"], correct: 1 }
                ]
            }
        ];

        // --- LOCAL PROFILE / SETTINGS ---
        const QUIZ_STORAGE_KEY = 'universoQuizProfileV2';
        const SETTINGS_STORAGE_KEY = 'universoQuizSettingsV2';
        function readStoredJSON(key, fallback) {
            try { return JSON.parse(localStorage.getItem(key)) || fallback; }
            catch (error) { return fallback; }
        }
        let gameStats = readStoredJSON(QUIZ_STORAGE_KEY, {
            completedGames: 0, totalCorrect: 0, totalQuestions: 0, bestScores: {}
        });
        let gameSettings = readStoredJSON(SETTINGS_STORAGE_KEY, {
            soundEnabled: true, animationsEnabled: true
        });
        function saveStats() {
            try { localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(gameStats)); } catch (error) {}
        }
        function saveSettings() {
            try { localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(gameSettings)); } catch (error) {}
            document.body.classList.toggle('reduced-effects', !gameSettings.animationsEnabled);
            if (gameSettings.animationsEnabled) animateStars();
            else if (window.starContext && window.starCanvas) window.starContext.clearRect(0, 0, window.starCanvas.width, window.starCanvas.height);
        }
        function playAnswerSound(isCorrect) {
            if (!gameSettings.soundEnabled) return;
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtx) return;
                const audio = new AudioCtx();
                const oscillator = audio.createOscillator();
                const gain = audio.createGain();
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(isCorrect ? 660 : 220, audio.currentTime);
                if (isCorrect) oscillator.frequency.exponentialRampToValueAtTime(990, audio.currentTime + .13);
                gain.gain.setValueAtTime(.0001, audio.currentTime);
                gain.gain.exponentialRampToValueAtTime(.10, audio.currentTime + .02);
                gain.gain.exponentialRampToValueAtTime(.0001, audio.currentTime + .2);
                oscillator.connect(gain); gain.connect(audio.destination);
                oscillator.start(); oscillator.stop(audio.currentTime + .21);
                oscillator.onended = () => audio.close();
            } catch (error) {}
        }
        function recordCompletedQuiz() {
            const id = appState.selectedCategory.id;
            const total = appState.selectedCategory.questions.length;
            gameStats.completedGames = (gameStats.completedGames || 0) + 1;
            gameStats.totalCorrect = (gameStats.totalCorrect || 0) + appState.score;
            gameStats.totalQuestions = (gameStats.totalQuestions || 0) + total;
            gameStats.bestScores = gameStats.bestScores || {};
            gameStats.bestScores[id] = Math.max(gameStats.bestScores[id] || 0, appState.score);
            saveStats();
        }

        // Small custom vector scenes: each subject gets its own illustration, embedded in the HTML.
        const artworkScenes = {
            'planetas': `<ellipse cx="410" cy="172" rx="250" ry="75" transform="rotate(-16 410 172)" fill="none" stroke="#83dfff" stroke-opacity=".42" stroke-width="3"/><circle cx="400" cy="155" r="78" fill="url(#planet)"/><path d="M330 129 Q385 98 466 135 M328 177 Q402 204 468 169" fill="none" stroke="#b5f5ff" stroke-opacity=".36" stroke-width="15" stroke-linecap="round"/><ellipse cx="400" cy="168" rx="128" ry="34" transform="rotate(-16 400 168)" fill="none" stroke="#9deaff" stroke-width="13" stroke-opacity=".7"/><circle cx="610" cy="80" r="31" fill="#c78aff"/><circle cx="185" cy="245" r="22" fill="#54c9e8"/><circle cx="185" cy="245" r="31" fill="none" stroke="#8defff" stroke-opacity=".5"/>`,
            'galaxias': `<g fill="none" stroke-linecap="round"><path d="M400 165 C480 60 618 98 588 184 C565 251 427 259 342 205 C274 162 298 82 374 63 C468 39 547 113 520 177 C493 239 382 244 342 184" stroke="#b18cff" stroke-width="25" stroke-opacity=".22"/><path d="M400 165 C478 81 579 111 560 179 C542 232 435 239 362 198" stroke="#75eaff" stroke-width="10" stroke-opacity=".68"/><path d="M400 165 C447 115 499 136 486 174" stroke="#fff1c9" stroke-width="5"/></g><circle cx="400" cy="165" r="25" fill="#fff5d7"/><circle cx="400" cy="165" r="52" fill="#9c7cff" opacity=".16"/>`,
            'estrelas': `<circle cx="405" cy="162" r="110" fill="#ffb94d" opacity=".12"/><path d="M405 48 L433 126 L515 99 L463 168 L528 222 L445 207 L405 285 L372 205 L284 225 L346 164 L294 96 L377 127 Z" fill="url(#planet)" stroke="#ffe8a1" stroke-width="3"/><circle cx="405" cy="162" r="39" fill="#fff4c1"/><path d="M405 15 V65 M405 260 V310 M257 162 H310 M500 162 H555 M300 55 L337 91 M477 231 L515 268 M510 55 L475 91 M335 235 L295 270" stroke="#ffe6a5" stroke-width="5" stroke-linecap="round" opacity=".65"/>`,
            'buracos-negros': `<ellipse cx="410" cy="164" rx="245" ry="72" transform="rotate(-18 410 164)" fill="none" stroke="#a47aff" stroke-width="26" stroke-opacity=".45"/><ellipse cx="410" cy="164" rx="190" ry="48" transform="rotate(-18 410 164)" fill="none" stroke="#ffd58b" stroke-width="9" stroke-opacity=".9"/><circle cx="410" cy="164" r="78" fill="#02020b" stroke="#17142e" stroke-width="7"/><circle cx="410" cy="164" r="94" fill="none" stroke="#7b58e8" stroke-opacity=".25" stroke-width="14"/><path d="M160 160 Q290 45 400 111" fill="none" stroke="#64e9ff" stroke-opacity=".55" stroke-width="5"/>`,
            'lua-satelites': `<circle cx="395" cy="160" r="105" fill="url(#planet)"/><circle cx="355" cy="120" r="19" fill="#71829e" opacity=".34"/><circle cx="440" cy="196" r="27" fill="#71829e" opacity=".28"/><circle cx="430" cy="109" r="11" fill="#71829e" opacity=".3"/><path d="M540 87 L612 48 L660 81 L589 124 Z" fill="#d8eaff" stroke="#82dfff" stroke-width="4"/><path d="M558 101 L512 137 M632 74 L680 42 M587 124 L574 167" stroke="#8ceaff" stroke-width="5"/><path d="M600 160 Q685 195 720 254" fill="none" stroke="#78ddff" stroke-opacity=".5" stroke-width="2"/><ellipse cx="395" cy="160" rx="174" ry="45" transform="rotate(18 395 160)" fill="none" stroke="#c6e9ff" stroke-width="3" stroke-opacity=".35"/>`,
            'exploracao': `<path d="M387 65 Q475 112 484 203 L420 265 L350 206 Q330 124 387 65Z" fill="url(#planet)" stroke="#b8f8ff" stroke-width="4"/><path d="M387 65 Q415 25 439 59 L448 105 L392 115Z" fill="#f3f7ff"/><circle cx="414" cy="154" r="23" fill="#0b2448" stroke="#8df6ff" stroke-width="8"/><path d="M350 177 L284 220 L345 231 M465 177 L530 220 L475 231" fill="#967bff" stroke="#b7a5ff" stroke-width="4"/><path d="M385 251 L399 308 L428 264Z" fill="#ffae67"/><path d="M407 254 L425 310 L446 247Z" fill="#6beaff"/><path d="M155 240 Q245 190 300 205 M540 110 Q625 72 700 105" fill="none" stroke="#8cefff" stroke-opacity=".35" stroke-width="3" stroke-dasharray="8 12"/>`,
            'asteroides-cometas': `<path d="M170 230 Q315 155 505 88 Q380 168 195 263Z" fill="url(#planet)" opacity=".75"/><path d="M170 230 Q315 155 505 88" stroke="#b8efff" stroke-width="4" stroke-opacity=".7" fill="none"/><g fill="#a6a7c9" stroke="#d7d9ed" stroke-opacity=".45" stroke-width="3"><path d="M516 99 l22 -26 33 8 15 31 -20 31 -37 -4 -22 -21Z"/><path d="M650 235 l15 -19 27 3 14 23 -17 22 -31 -7Z"/><path d="M290 75 l12 -17 22 5 7 20 -18 15 -22 -8Z"/><path d="M393 265 l13 -15 26 7 7 20 -24 14 -20 -10Z"/></g><circle cx="555" cy="109" r="12" fill="#e7c0ff"/><circle cx="670" cy="244" r="6" fill="#fff"/>`,
            'fenomenos': `<path d="M0 205 Q120 80 255 186 T520 155 T800 120 V320 H0Z" fill="#55e9d4" opacity=".23"/><path d="M0 240 Q160 95 290 204 T570 158 T800 175" fill="none" stroke="#71ffda" stroke-width="22" stroke-opacity=".38"/><path d="M0 272 Q150 153 300 240 T600 190 T800 210" fill="none" stroke="#9b8aff" stroke-width="16" stroke-opacity=".5"/><circle cx="590" cy="95" r="53" fill="#ffd27d" opacity=".95"/><circle cx="612" cy="78" r="50" fill="#121333"/><path d="M580 95 H720 M590 95 L555 57 M590 95 L555 133" stroke="#ffe3a8" stroke-width="3" opacity=".6"/>`,
            'vida-extraterrestre': `<circle cx="610" cy="95" r="68" fill="#6c4bd6" opacity=".8"/><path d="M560 85 Q610 35 660 85" fill="none" stroke="#c4afff" stroke-width="13" opacity=".45"/><path d="M310 100 Q400 34 490 100 L515 192 Q495 269 400 278 Q305 269 285 192Z" fill="url(#planet)" stroke="#b2a6ff" stroke-width="4"/><ellipse cx="360" cy="166" rx="15" ry="23" fill="#071326"/><ellipse cx="440" cy="166" rx="15" ry="23" fill="#071326"/><circle cx="365" cy="160" r="5" fill="#fff"/><circle cx="445" cy="160" r="5" fill="#fff"/><path d="M372 221 Q400 240 428 221" fill="none" stroke="#e8dcff" stroke-width="6" stroke-linecap="round"/><path d="M400 100 V63 M400 62 Q375 29 350 52" fill="none" stroke="#a6f8ff" stroke-width="7" stroke-linecap="round"/><circle cx="350" cy="52" r="10" fill="#83f5ff"/>`
        };
        const artPalettes = {
            'planetas':['#0b1740','#173b70','#39d7ee'], 'galaxias':['#21124c','#582878','#c188ff'], 'estrelas':['#3b1c26','#9a4c25','#ffd37c'],
            'buracos-negros':['#08091e','#281346','#a47aff'], 'lua-satelites':['#172b48','#51647f','#b8dfff'], 'exploracao':['#102b4c','#155f83','#76f4ff'],
            'asteroides-cometas':['#102b3a','#28566a','#80eaff'], 'fenomenos':['#073b45','#214c75','#7dffdc'], 'vida-extraterrestre':['#23143d','#573080','#e18aff']
        };
        function getCategoryArtwork(cat) {
            const palette = artPalettes[cat.id] || ['#101a3d','#283b76','#75eaff'];
            const stars = Array.from({length:25},(_,i)=>`<circle cx="${(i*97+31)%790+5}" cy="${(i*53+19)%300+5}" r="${i%4===0?2:1}" fill="#fff" opacity="${i%3===0?.8:.4}"/>`).join('');
            return `<svg viewBox="0 0 800 320" role="img" aria-label="Ilustração de ${cat.name}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg-${cat.id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${palette[0]}"/><stop offset=".58" stop-color="${palette[1]}"/><stop offset="1" stop-color="#080b22"/></linearGradient><radialGradient id="planet" cx="35%" cy="28%"><stop stop-color="#fff"/><stop offset=".2" stop-color="${palette[2]}"/><stop offset="1" stop-color="${palette[1]}"/></radialGradient><filter id="glow-${cat.id}"><feGaussianBlur stdDeviation="13"/></filter></defs><rect width="800" height="320" fill="url(#bg-${cat.id})"/><circle cx="400" cy="160" r="125" fill="${palette[2]}" opacity=".10" filter="url(#glow-${cat.id})"/>${stars}<g style="color:${palette[2]}">${artworkScenes[cat.id] || ''}</g></svg>`;
        }
        function renderHeroArtwork() {
            return `<svg class="hero-planet-art" viewBox="0 0 640 440" role="img" aria-label="Nave explorando um planeta no espaço"><defs><radialGradient id="heroWorld"><stop stop-color="#c8fbff"/><stop offset=".24" stop-color="#28a9d6"/><stop offset=".72" stop-color="#233c91"/><stop offset="1" stop-color="#101333"/></radialGradient><linearGradient id="heroShip" x2="1" y2="1"><stop stop-color="#fff"/><stop offset=".5" stop-color="#7af3ff"/><stop offset="1" stop-color="#786aff"/></linearGradient><filter id="heroGlow"><feGaussianBlur stdDeviation="15"/></filter></defs><circle cx="340" cy="220" r="145" fill="#40dfff" opacity=".13" filter="url(#heroGlow)"/><circle cx="340" cy="220" r="125" fill="url(#heroWorld)"/><path d="M225 205 Q285 135 375 155 Q440 170 452 215 Q390 188 342 222 Q284 260 225 205Z" fill="#64d8c7" opacity=".45"/><path d="M270 275 Q345 238 420 267" stroke="#a5edff" stroke-opacity=".28" stroke-width="15" fill="none"/><ellipse cx="340" cy="223" rx="205" ry="60" transform="rotate(-18 340 223)" fill="none" stroke="#9d91ff" stroke-opacity=".8" stroke-width="4"/><path d="M138 87 Q191 31 246 69 L217 96Z" fill="#fff" opacity=".6"/><path d="M110 310 Q176 260 230 295" stroke="#68edff" stroke-width="4" stroke-dasharray="5 12" fill="none"/><g transform="translate(465 96) rotate(28)"><path d="M0 0 Q45 28 28 100 L0 129 L-28 100 Q-45 28 0 0Z" fill="url(#heroShip)" stroke="#e5ffff" stroke-width="3"/><circle cx="0" cy="57" r="13" fill="#0e2860" stroke="#fff" stroke-width="5"/><path d="M-27 77 L-61 110 L-25 105 M27 77 L61 110 L25 105" fill="#8e79ff"/><path d="M-9 127 L0 178 L9 127" fill="#ffb66e"/><path d="M0 130 L0 186" stroke="#67f2ff" stroke-width="9" opacity=".8"/></g><g fill="#fff"><circle cx="116" cy="126" r="3"/><circle cx="520" cy="298" r="3"/><circle cx="570" cy="160" r="2"/><circle cx="190" cy="365" r="2"/></g></svg>`;
        }

        // --- APP STATE ---
        let appState = {
            currentView: 'start', // start, home, quiz, results, stats, settings, howto, about
            menuOpen: false,
            selectedCategory: null,
            currentQuestionIndex: 0,
            score: 0,
            userAnswers: [],
            isAnswered: false,

            cancelPendingTransition() {
                if (this.nextQuestionTimer) {
                    clearTimeout(this.nextQuestionTimer);
                    this.nextQuestionTimer = null;
                }
                this.isAnswered = false;
            },
            showStart() {
                this.cancelPendingTransition();
                this.menuOpen = false;
                this.currentView = 'start';
                this.selectedCategory = null;
                renderApp();
            },
            toggleMenu() { this.menuOpen = !this.menuOpen; syncQuickMenu(); },
            openMenu() { this.menuOpen = true; syncQuickMenu(); },
            closeMenu() { this.menuOpen = false; syncQuickMenu(); },
            showCategories() { this.cancelPendingTransition(); this.menuOpen = false; this.currentView = 'home'; renderApp(); },
            goHome() { this.showCategories(); },
            showStats() { this.cancelPendingTransition(); this.menuOpen = false; this.currentView = 'stats'; renderApp(); },
            showSettings() { this.cancelPendingTransition(); this.menuOpen = false; this.currentView = 'settings'; renderApp(); },
            showHowTo() { this.cancelPendingTransition(); this.menuOpen = false; this.currentView = 'howto'; renderApp(); },
            showAbout() { this.cancelPendingTransition(); this.menuOpen = false; this.currentView = 'about'; renderApp(); },

            startQuiz(categoryId) {
                this.cancelPendingTransition();
                this.menuOpen = false;
                const cat = quizData.find(c => c.id === categoryId);
                if (!cat) return;
                this.selectedCategory = cat;
                this.currentView = 'quiz';
                this.currentQuestionIndex = 0;
                this.score = 0;
                this.userAnswers = [];
                this.isAnswered = false;
                renderApp();
            },

            answerQuestion(optionIndex) {
                if (this.isAnswered) return;
                this.isAnswered = true;
                const currentQ = this.selectedCategory.questions[this.currentQuestionIndex];
                const isCorrect = optionIndex === currentQ.correct;
                if (isCorrect) this.score++;
                playAnswerSound(isCorrect);
                this.userAnswers.push({
                    question: currentQ.q, selected: optionIndex, correct: currentQ.correct,
                    isCorrect: isCorrect, options: currentQ.options
                });
                updateQuizUI(optionIndex, currentQ.correct);
                this.nextQuestionTimer = setTimeout(() => {
                    this.nextQuestionTimer = null;
                    this.isAnswered = false;
                    if (this.currentQuestionIndex < this.selectedCategory.questions.length - 1) {
                        this.currentQuestionIndex++;
                        renderApp();
                    } else {
                        recordCompletedQuiz();
                        this.currentView = 'results';
                        renderApp();
                    }
                }, 1400);
            },

            retryQuiz() {
                if (!this.selectedCategory) return;
                this.startQuiz(this.selectedCategory.id);
            }
        };

        appState.toggleSetting = function(key) {
            if (!(key in gameSettings)) return;
            gameSettings[key] = !gameSettings[key];
            saveSettings();
            renderApp();
        };
        appState.resetStats = function() {
            if (!confirm('Deseja realmente apagar todo o seu progresso salvo neste navegador?')) return;
            gameStats = { completedGames: 0, totalCorrect: 0, totalQuestions: 0, bestScores: {} };
            saveStats();
            renderApp();
        };

        // --- RENDER ENGINE ---
        function renderApp() {
            const container = document.getElementById('view-container');
            container.innerHTML = '';
            const views = {
                start: renderStartView, menu: renderMenuView, home: renderHomeView,
                quiz: renderQuizView, results: renderResultsView, stats: renderStatsView,
                settings: renderSettingsView, howto: renderHowToView, about: renderAboutView
            };
            container.innerHTML = (views[appState.currentView] || renderStartView)();
            syncQuickMenu();
        }

        function syncQuickMenu() {
            const menu = document.getElementById('quick-menu');
            const toggle = document.getElementById('menu-toggle');
            if (!menu || !toggle) return;
            const isOpen = !!appState.menuOpen;
            menu.classList.toggle('is-open', isOpen);
            menu.setAttribute('aria-hidden', String(!isOpen));
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
            toggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i><span class="menu-btn-label">FECHAR</span>'
                : '<i class="fa-solid fa-bars-staggered"></i><span class="menu-btn-label">MENU</span>';
        }

        function renderStartView() {
            const played = gameStats.completedGames || 0;
            return `
                <section class="screen-shell">
                    <div class="start-panel">
                        <div class="start-copy">
                            <div class="start-kicker"><span class="live-dot"></span> Central de exploração • Online</div>
                            <h2 class="start-title hero-title">O universo<br><span>espera por você.</span></h2>
                            <p class="start-description">Embarque em uma jornada pelo cosmos. Explore planetas, descubra galáxias, enfrente desafios científicos e prove o quanto você conhece o espaço.</p>
                            <div class="start-actions">
                                <button class="start-primary" onclick="appState.showCategories()"><i class="fa-solid fa-rocket"></i> INICIAR JORNADA <i class="fa-solid fa-arrow-right"></i></button>
                                <button class="start-secondary" onclick="appState.showHowTo()"><i class="fa-regular fa-circle-question"></i> COMO JOGAR</button>
                            </div>
                            <div class="start-metrics">
                                <div class="start-metric"><strong>9</strong><span>Setores cósmicos</span></div>
                                <div class="start-metric"><strong>90</strong><span>Desafios</span></div>
                                <div class="start-metric"><strong>${played}</strong><span>Missões concluídas</span></div>
                            </div>
                        </div>
                        <div class="start-art">${renderHeroArtwork()}<div class="absolute bottom-8 right-7 text-[10px] tracking-[.2em] text-cyan-100/50 uppercase">Exploração iniciada <i class="fa-solid fa-satellite ml-2"></i></div></div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                        <div class="glass-card rounded-2xl px-5 py-4 flex items-center gap-3"><i class="fa-solid fa-compass text-cyan-300 text-xl"></i><div><b class="text-sm text-slate-200">9 áreas de conhecimento</b><p class="text-xs text-slate-500">Dos planetas à busca por vida fora da Terra</p></div></div>
                        <div class="glass-card rounded-2xl px-5 py-4 flex items-center gap-3"><i class="fa-solid fa-trophy text-amber-300 text-xl"></i><div><b class="text-sm text-slate-200">Pontue e evolua</b><p class="text-xs text-slate-500">Acompanhe seus resultados</p></div></div>
                        <div class="glass-card rounded-2xl px-5 py-4 flex items-center gap-3"><i class="fa-solid fa-brain text-violet-300 text-xl"></i><div><b class="text-sm text-slate-200">Aprenda explorando</b><p class="text-xs text-slate-500">Desafios rápidos e educativos</p></div></div>
                    </div>
                </section>`;
        }

        function renderMenuView() {
            return `
                <section class="screen-shell">
                    <div class="menu-heading"><div><div class="eyebrow mb-3"><span class="live-dot"></span> Painel de navegação</div><h2 class="plain-title">Central de comando</h2><p class="mt-2">Escolha seu próximo destino, consulte seu desempenho ou personalize a experiência.</p></div><button class="back-menu" onclick="appState.showStart()"><i class="fa-solid fa-house mr-2"></i>Tela inicial</button></div>
                    <div class="menu-grid">
                        <button class="menu-tile" style="--tile-glow:rgba(0,226,255,.19)" onclick="appState.showCategories()"><span class="tile-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><div class="menu-tile-icon"><i class="fa-solid fa-earth-americas"></i></div><h3>Explorar assuntos</h3><p>Escolha uma das 9 categorias e comece uma nova missão pelo universo.</p></button>
                        <button class="menu-tile" style="--tile-glow:rgba(255,193,90,.18)" onclick="appState.showStats()"><span class="tile-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><div class="menu-tile-icon" style="color:#ffd17d;background:rgba(255,193,90,.09);border-color:rgba(255,193,90,.2)"><i class="fa-solid fa-chart-line"></i></div><h3>Meu progresso</h3><p>Veja missões concluídas, acertos acumulados e seus melhores resultados.</p></button>
                        <button class="menu-tile" style="--tile-glow:rgba(167,139,250,.2)" onclick="appState.showSettings()"><span class="tile-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><div class="menu-tile-icon" style="color:#c1a9ff;background:rgba(167,139,250,.1);border-color:rgba(167,139,250,.2)"><i class="fa-solid fa-sliders"></i></div><h3>Configurações</h3><p>Ative ou desative os efeitos sonoros e as animações visuais.</p></button>
                        <button class="menu-tile" style="--tile-glow:rgba(106,255,198,.15)" onclick="appState.showHowTo()"><span class="tile-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><div class="menu-tile-icon" style="color:#8ef8ca;background:rgba(106,255,198,.08);border-color:rgba(106,255,198,.18)"><i class="fa-solid fa-book-open"></i></div><h3>Como jogar</h3><p>Entenda as regras, a pontuação e como concluir cada desafio.</p></button>
                        <button class="menu-tile" style="--tile-glow:rgba(255,124,206,.16)" onclick="appState.showAbout()"><span class="tile-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><div class="menu-tile-icon" style="color:#ff9bd9;background:rgba(255,124,206,.08);border-color:rgba(255,124,206,.18)"><i class="fa-solid fa-satellite"></i></div><h3>Sobre o projeto</h3><p>Conheça o Universo Quiz e os temas que fazem parte desta jornada.</p></button>
                    </div>
                </section>`;
        }

        const categoryDescriptions = {
            'planetas':'Mundos rochosos, gigantes gasosos e os segredos do Sistema Solar.',
            'galaxias':'Estruturas gigantescas formadas por estrelas, poeira e matéria escura.',
            'estrelas':'Nascimento, energia, cores e os ciclos de vida das estrelas.',
            'buracos-negros':'Gravidade extrema, horizonte de eventos e mistérios cósmicos.',
            'lua-satelites':'Luas naturais, satélites e suas relações com os planetas.',
            'exploracao':'Missões espaciais, sondas, astronautas e descobertas humanas.',
            'asteroides-cometas':'Corpos rochosos, cometas gelados e visitantes do espaço.',
            'fenomenos':'Eclipses, auroras, supernovas e eventos que iluminam o cosmos.',
            'vida-extraterrestre':'Exoplanetas, habitabilidade e a busca por vida fora da Terra.'
        };
        function renderHomeView() {
            let html = `
                <section class="screen-shell">
                    <div class="section-toolbar"><div><div class="eyebrow mb-3"><span class="live-dot"></span> Mapa estelar • 9 setores</div><h2 class="page-heading plain-title">Escolha sua missão</h2><p class="page-subtitle mt-2">Cada setor é uma nova jornada. Selecione um assunto para iniciar seu desafio.</p></div><div class="category-toolbar-note"><i class="fa-solid fa-compass"></i> Selecione um setor para começar</div></div>
                    <div class="category-grid">`;
            quizData.forEach(cat => {
                const best = (gameStats.bestScores && gameStats.bestScores[cat.id] !== undefined) ? `<span class="category-chip">Recorde ${gameStats.bestScores[cat.id]}/${cat.questions.length}</span>` : `<span class="category-chip">Nova missão</span>`;
                html += `
                    <button onclick="appState.startQuiz('${cat.id}')" class="category-card group" aria-label="Iniciar categoria ${cat.name}">
                        <div class="category-art">${getCategoryArtwork(cat)}</div>
                        <div class="category-content">
                            <div class="category-meta"><span class="category-count">${cat.questions.length} questões</span>${best}</div>
                            <h3>${cat.emoji} ${cat.name}</h3><p>${categoryDescriptions[cat.id] || 'Explore este assunto e teste seus conhecimentos.'}</p>
                            <div class="category-footer"><span>Iniciar exploração</span><i class="fa-solid fa-arrow-right"></i></div>
                        </div>
                    </button>`;
            });
            html += `</div></section>`;
            return html;
        }

        function renderStatsView() {
            const completed = gameStats.completedGames || 0;
            const correct = gameStats.totalCorrect || 0;
            const questions = gameStats.totalQuestions || 0;
            const accuracy = questions ? Math.round(correct / questions * 100) : 0;
            let bestRows = quizData.map(cat => {
                const best = gameStats.bestScores && gameStats.bestScores[cat.id];
                return `<div class="flex items-center justify-between gap-3 py-3 border-b border-indigo-900/40"><span class="text-sm text-slate-300">${cat.emoji} ${cat.name}</span><span class="text-xs font-bold text-cyan-200">${best === undefined ? 'Ainda não jogado' : `${best}/${cat.questions.length} acertos`}</span></div>`;
            }).join('');
            return `<section class="screen-shell"><div class="section-toolbar"><div><div class="eyebrow mb-3">Relatório de exploração</div><h2 class="page-heading plain-title">Meu progresso</h2><p class="page-subtitle mt-2">Seus resultados ficam salvos neste navegador.</p></div><button class="back-menu" onclick="appState.showCategories()"><i class="fa-solid fa-arrow-left mr-2"></i>Voltar aos assuntos</button></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5"><div class="info-panel"><div class="stat-number">${completed}</div><div class="stat-label">Missões concluídas</div></div><div class="info-panel"><div class="stat-number">${correct}</div><div class="stat-label">Respostas corretas</div></div><div class="info-panel"><div class="stat-number">${accuracy}%</div><div class="stat-label">Precisão geral</div></div></div><div class="info-panel"><h3 class="text-lg font-extrabold text-slate-100">Melhores resultados por setor</h3><div class="mt-3">${bestRows}</div><div class="mt-5 flex flex-wrap gap-3"><button class="start-secondary" onclick="appState.showCategories()"><i class="fa-solid fa-play"></i> Jogar agora</button><button class="back-menu" onclick="appState.resetStats()"><i class="fa-solid fa-rotate-left mr-2"></i> Zerar progresso</button></div></div></section>`;
        }

        function renderSettingsView() {
            return `<section class="screen-shell"><div class="section-toolbar"><div><div class="eyebrow mb-3">Preferências da nave</div><h2 class="page-heading plain-title">Configurações</h2><p class="page-subtitle mt-2">Personalize alguns efeitos da experiência.</p></div><button class="back-menu" onclick="appState.showCategories()"><i class="fa-solid fa-arrow-left mr-2"></i>Voltar aos assuntos</button></div><div class="info-panel"><div class="setting-row"><div><h3 class="text-slate-100 font-extrabold">Efeitos sonoros</h3><p>Sons curtos ao acertar ou errar uma resposta.</p></div><button class="toggle-btn ${gameSettings.soundEnabled?'active':''}" onclick="appState.toggleSetting('soundEnabled')">${gameSettings.soundEnabled?'ATIVADO':'DESATIVADO'}</button></div><div class="setting-row"><div><h3 class="text-slate-100 font-extrabold">Animações e efeitos</h3><p>Movimentos do fundo, brilhos e transições da interface.</p></div><button class="toggle-btn ${gameSettings.animationsEnabled?'active':''}" onclick="appState.toggleSetting('animationsEnabled')">${gameSettings.animationsEnabled?'ATIVADO':'DESATIVADO'}</button></div><p class="text-xs text-slate-500 mt-5"><i class="fa-solid fa-circle-info mr-2"></i>As preferências são salvas automaticamente neste navegador.</p></div></section>`;
        }

        function renderHowToView() {
            return `<section class="screen-shell"><div class="section-toolbar"><div><div class="eyebrow mb-3">Manual de bordo</div><h2 class="page-heading plain-title">Como jogar</h2><p class="page-subtitle mt-2">Prepare-se antes de iniciar sua missão.</p></div><button class="back-menu" onclick="appState.showCategories()"><i class="fa-solid fa-arrow-left mr-2"></i>Voltar aos assuntos</button></div><div class="info-panel"><div class="info-grid"><div class="info-item"><h3><i class="fa-solid fa-earth-americas text-cyan-300 mr-2"></i>1. Escolha um setor</h3><p>Após a tela inicial, os 9 assuntos aparecem automaticamente. Selecione um tema para iniciar.</p></div><div class="info-item"><h3><i class="fa-solid fa-list-check text-violet-300 mr-2"></i>2. Responda às questões</h3><p>Leia a pergunta e escolha uma das quatro alternativas. Cada categoria possui 10 questões.</p></div><div class="info-item"><h3><i class="fa-solid fa-star text-amber-300 mr-2"></i>3. Faça pontos</h3><p>Cada resposta correta vale 1 ponto. Ao final, você recebe sua pontuação e uma classificação em estrelas.</p></div><div class="info-item"><h3><i class="fa-solid fa-chart-simple text-emerald-300 mr-2"></i>4. Acompanhe seu progresso</h3><p>Os resultados das missões concluídas ficam registrados em “Meu progresso” neste navegador.</p></div></div><div class="mt-7"><button class="start-primary" onclick="appState.showCategories()"><i class="fa-solid fa-rocket"></i> ESCOLHER UMA MISSÃO</button></div></div></section>`;
        }

        function renderAboutView() {
            return `<section class="screen-shell"><div class="section-toolbar"><div><div class="eyebrow mb-3">Arquivo da missão</div><h2 class="page-heading plain-title">Sobre o Universo Quiz</h2><p class="page-subtitle mt-2">Conhecimento, exploração e curiosidade em uma única jornada.</p></div><button class="back-menu" onclick="appState.showCategories()"><i class="fa-solid fa-arrow-left mr-2"></i>Voltar aos assuntos</button></div><div class="info-panel"><div class="text-5xl mb-5">🌌</div><h3 class="text-2xl font-black text-slate-100 mb-3">Uma viagem pelo conhecimento cósmico.</h3><p class="text-slate-300 leading-8">O Universo Quiz é um jogo educativo de perguntas e respostas sobre astronomia e exploração espacial. Seu objetivo é transformar a curiosidade sobre o espaço em uma experiência interativa, com categorias temáticas, pontuação e acompanhamento de desempenho.</p><div class="grid grid-cols-2 gap-4 mt-7"><div class="info-item"><div class="stat-number">9</div><div class="stat-label">Categorias</div></div><div class="info-item"><div class="stat-number">90</div><div class="stat-label">Questões no total</div></div></div></div></section>`;
        }

        function renderQuizView() {
            const cat = appState.selectedCategory;
            const qIndex = appState.currentQuestionIndex;
            const q = cat.questions[qIndex];
            const progress = ((qIndex + 1) / cat.questions.length) * 100;

            let html = `
                <div class="max-w-3xl mx-auto w-full">
                    <!-- Quiz Header / Progress -->
                    <div class="glass-card p-4 rounded-2xl mb-6 flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <button onclick="appState.showCategories()" class="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-900 transition-colors">
                                <i class="fa-solid fa-arrow-left"></i>
                            </button>
                            <div>
                                <span class="text-xs font-bold text-neon-cyan uppercase tracking-wider">${cat.emoji} ${cat.name}</span>
                                <h4 class="text-sm font-semibold text-slate-200">Questão ${qIndex + 1} de ${cat.questions.length}</h4>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-xs text-slate-400">Pontuação atual</span>
                            <div class="text-lg font-bold text-neon-gold">${appState.score} pts</div>
                        </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="w-full bg-indigo-950/60 rounded-full h-2 mb-8 overflow-hidden border border-indigo-900/50">
                        <div class="bg-gradient-to-r from-neon-cyan to-neon-purple h-full transition-all duration-500 rounded-full" style="width: ${progress}%"></div>
                    </div>

                    <!-- Question Card -->
                    <div class="glass-card p-6 md:p-10 rounded-3xl mb-6 shadow-2xl border-indigo-500/20">
                        <div class="flex items-center gap-2 mb-4 text-[10px] uppercase tracking-[.22em] text-cyan-200/60"><span class="w-6 h-px bg-cyan-300/60"></span> Transmissão recebida <span class="w-6 h-px bg-cyan-300/60"></span></div><h3 class="text-xl md:text-2xl font-bold text-slate-100 mb-8 leading-snug">${q.q}</h3>

                        <div class="grid grid-cols-1 gap-4" id="options-container">
            `;

            q.options.forEach((opt, idx) => {
                const letters = ['A', 'B', 'C', 'D'];
                html += `
                    <button onclick="appState.answerQuestion(${idx})" id="option-${idx}" class="option-btn text-left p-4 md:p-5 rounded-2xl glass-card flex items-center space-x-4 transition-all duration-200 hover:border-neon-cyan hover:bg-indigo-900/40 group">
                        <span class="w-9 h-9 rounded-xl bg-indigo-950/80 border border-indigo-800 flex items-center justify-center text-neon-cyan font-bold text-sm group-hover:bg-neon-cyan group-hover:text-space-900 transition-colors">${letters[idx]}</span>
                        <span class="text-slate-200 font-medium text-base md:text-lg flex-grow">${opt}</span>
                    </button>
                `;
            });

            html += `
                        </div>
                    </div>
                </div>
            `;
            return html;
        }

        function updateQuizUI(selectedIndex, correctIndex) {
            const buttons = document.querySelectorAll('.option-btn');
            buttons.forEach((btn, idx) => {
                btn.disabled = true;
                if (idx === correctIndex) {
                    btn.classList.remove('glass-card');
                    btn.classList.add('bg-emerald-600/30', 'border-emerald-500', 'shadow-lg', 'shadow-emerald-950/50');
                    btn.querySelector('span').classList.remove('bg-indigo-950/80', 'text-neon-cyan');
                    btn.querySelector('span').classList.add('bg-emerald-500', 'text-white');
                } else if (idx === selectedIndex && idx !== correctIndex) {
                    btn.classList.remove('glass-card');
                    btn.classList.add('bg-rose-600/30', 'border-rose-500', 'shadow-lg', 'shadow-rose-950/50', 'animate-pulse');
                    btn.querySelector('span').classList.remove('bg-indigo-950/80', 'text-neon-cyan');
                    btn.querySelector('span').classList.add('bg-rose-500', 'text-white');
                } else {
                    btn.style.opacity = '0.5';
                }
            });
        }

        function renderResultsView() {
            const cat = appState.selectedCategory;
            const total = cat.questions.length;
            const score = appState.score;
            const percentage = Math.round((score / total) * 100);

            // Star Rating calculation
            let stars = 1;
            if (percentage >= 80) stars = 3;
            else if (percentage >= 50) stars = 2;

            let message = "Continue explorando o cosmos para melhorar seus conhecimentos!";
            let iconClass = "fa-meteor text-amber-400";
            if (percentage === 100) {
                message = "Incrível! Você gabaritou a missão e é um verdadeiro Astrônomo Mestre!";
                iconClass = "fa-trophy text-neon-gold animate-bounce";
            } else if (percentage >= 70) {
                message = "Excelente trabalho! Seu conhecimento estelar está impressionante!";
                iconClass = "fa-medal text-neon-cyan";
            } else if (percentage >= 40) {
                message = "Bom esforço! O universo guarda muitos segredos, continue estudando!";
                iconClass = "fa-rocket text-purple-400";
            }

            let html = `
                <div class="max-w-3xl mx-auto w-full text-center">
                    <div class="glass-card p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>
                        
                        <div class="w-20 h-20 mx-auto rounded-2xl bg-indigo-950/80 border border-indigo-800 flex items-center justify-center text-4xl mb-6 shadow-xl">
                            <i class="fa-solid ${iconClass}"></i>
                        </div>

                        <span class="text-xs font-bold text-neon-cyan uppercase tracking-widest">${cat.emoji} ${cat.name}</span>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-100 mt-2 mb-4">Missão Concluída!</h2>
                        <p class="text-slate-300 text-base md:text-lg mb-8 max-w-lg mx-auto">${message}</p>

                        <!-- Star Rating Display -->
                        <div class="flex justify-center space-x-3 mb-8 text-3xl">
                            <i class="fa-solid fa-star ${stars >= 1 ? 'text-neon-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]' : 'text-slate-700'}"></i>
                            <i class="fa-solid fa-star ${stars >= 2 ? 'text-neon-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]' : 'text-slate-700'}"></i>
                            <i class="fa-solid fa-star ${stars >= 3 ? 'text-neon-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]' : 'text-slate-700'}"></i>
                        </div>

                        <!-- Score Stats Box -->
                        <div class="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
                            <div class="glass-card p-4 rounded-2xl border-indigo-900/50">
                                <span class="text-xs text-slate-400 uppercase tracking-wider">Acertos</span>
                                <div class="text-2xl font-black text-emerald-400 mt-1">${score} / ${total}</div>
                            </div>
                            <div class="glass-card p-4 rounded-2xl border-indigo-900/50">
                                <span class="text-xs text-slate-400 uppercase tracking-wider">Aproveitamento</span>
                                <div class="text-2xl font-black text-neon-cyan mt-1">${percentage}%</div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button onclick="appState.retryQuiz()" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-cyan to-blue-600 text-space-900 font-bold hover:opacity-90 transition-all shadow-lg shadow-neon-cyan/20 flex items-center justify-center space-x-2">
                                <i class="fa-solid fa-rotate-right"></i>
                                <span>Tentar Novamente</span>
                            </button>
                            <button onclick="appState.showCategories()" class="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card border-indigo-800 text-slate-200 font-bold hover:bg-indigo-900/40 hover:border-neon-purple transition-all flex items-center justify-center space-x-2">
                                <i class="fa-solid fa-compass"></i>
                                <span>Escolher Outra Categoria</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            return html;
        }

        // --- STARFIELD BACKGROUND ANIMATION ---
        const canvas = document.getElementById('starfield');
        const ctx = canvas.getContext('2d');
        window.starCanvas = canvas;
        window.starContext = ctx;
        let stars = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        }

        function initStars() {
            stars = [];
            const count = Math.floor((canvas.width * canvas.height) / 6000);
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    alpha: Math.random(),
                    speed: Math.random() * 0.02 + 0.005
                });
            }
        }

        function animateStars() {
            if (!gameSettings.animationsEnabled) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                return;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#030014';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.alpha += star.speed;
                if (star.alpha > 1 || star.alpha < 0) {
                    star.speed = -star.speed;
                }
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
                ctx.fill();
            });

            requestAnimationFrame(animateStars);
        }

        window.addEventListener('resize', resizeCanvas);
        document.addEventListener('click', function(event) {
            if (!appState.menuOpen) return;
            const menu = document.getElementById('quick-menu');
            const toggle = document.getElementById('menu-toggle');
            if (menu && toggle && !menu.contains(event.target) && !toggle.contains(event.target)) {
                appState.closeMenu();
            }
        });
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && appState.menuOpen) appState.closeMenu();
        });

        // --- INITIALIZE APPLICATION ---
        window.onload = function() {
            resizeCanvas();
            document.body.classList.toggle('reduced-effects', !gameSettings.animationsEnabled);
            if (gameSettings.animationsEnabled) animateStars();
            renderApp();
        };

(function(){
const rnd=s=>{const x=Math.sin(s*9301+49297)*233280;return x-Math.floor(x)};
const on=()=>gameSettings.animationsEnabled;
/* ---------- ARTWORK ---------- */
function stars(){let o='';for(let i=0;i<70;i++){const x=(rnd(i+1)*800).toFixed(1),y=(rnd(i+101)*320).toFixed(1),r=(rnd(i+201)*1.3+.3).toFixed(2),d=(rnd(i+301)*3+2).toFixed(1);o+=`<circle cx="${x}" cy="${y}" r="${r}" fill="#fff"><animate attributeName="opacity" values="${(.2+rnd(i)*.3).toFixed(2)};1;${(.2+rnd(i)*.3).toFixed(2)}" dur="${d}s" begin="${(rnd(i+5)*3).toFixed(1)}s" repeatCount="indefinite"/></circle>`}return o}
function rock(p,cx,cy,r,s,dur){const pts=[];for(let i=0;i<9;i++){const a=i/9*Math.PI*2,rr=r*(.72+rnd(s+i)*.45);pts.push((Math.cos(a)*rr).toFixed(1)+','+(Math.sin(a)*rr).toFixed(1))}
return `<g transform="translate(${cx} ${cy})"><g><animateTransform attributeName="transform" type="rotate" from="0" to="${s%2?360:-360}" dur="${dur}s" repeatCount="indefinite"/><polygon points="${pts.join(' ')}" fill="url(#${p}-rock)" stroke="#d6d2e8" stroke-opacity=".35" stroke-width="1.2"/><circle cx="${-r*.25}" cy="${-r*.15}" r="${r*.2}" fill="#000" opacity=".28"/><circle cx="${r*.3}" cy="${r*.25}" r="${r*.14}" fill="#000" opacity=".28"/></g></g>`}
const shade=p=>`url(#${p}-shade)`;
const scenes={
planetas:p=>`<defs><radialGradient id="${p}-j" cx="35%" cy="30%"><stop stop-color="#fff0d6"/><stop offset=".5" stop-color="#d79a63"/><stop offset="1" stop-color="#6b3a1f"/></radialGradient><clipPath id="${p}-jc"><circle cx="500" cy="165" r="108"/></clipPath><radialGradient id="${p}-s" cx="35%" cy="30%"><stop stop-color="#fff6d8"/><stop offset=".5" stop-color="#e3c27d"/><stop offset="1" stop-color="#6e5430"/></radialGradient><radialGradient id="${p}-e" cx="35%" cy="30%"><stop stop-color="#c6f6ff"/><stop offset=".5" stop-color="#2a87d6"/><stop offset="1" stop-color="#0a2a5e"/></radialGradient><radialGradient id="${p}-m" cx="35%" cy="30%"><stop stop-color="#ffb08a"/><stop offset="1" stop-color="#7a2a14"/></radialGradient><clipPath id="${p}-fr"><rect x="80" y="120" width="200" height="80"/></clipPath></defs>
<circle cx="500" cy="165" r="130" fill="#ffb066" opacity=".2" filter="url(#${p}-glow)"/><circle cx="500" cy="165" r="108" fill="url(#${p}-j)"/>
<g clip-path="url(#${p}-jc)"><rect x="380" y="78" width="240" height="16" fill="#b2713f" opacity=".55"/><rect x="380" y="110" width="240" height="10" fill="#f4d9b0" opacity=".5"/><rect x="380" y="132" width="240" height="22" fill="#9c5a32" opacity=".5"/><rect x="380" y="170" width="240" height="14" fill="#f1cf9f" opacity=".45"/><rect x="380" y="198" width="240" height="20" fill="#a2623a" opacity=".5"/><rect x="380" y="236" width="240" height="12" fill="#e8c28f" opacity=".4"/><ellipse cx="545" cy="192" rx="28" ry="15" fill="#c8452e"/><ellipse cx="545" cy="192" rx="17" ry="8" fill="#e8744d"/></g>
<circle cx="500" cy="165" r="108" fill="${shade(p)}"/>
<g transform="rotate(-20 170 130)"><ellipse cx="170" cy="130" rx="86" ry="19" fill="none" stroke="#e9d6a6" stroke-width="8" opacity=".5"/><circle cx="170" cy="130" r="42" fill="url(#${p}-s)"/><circle cx="170" cy="130" r="42" fill="${shade(p)}"/><g clip-path="url(#${p}-fr)"><ellipse cx="170" cy="130" rx="86" ry="19" fill="none" stroke="#f3e2b4" stroke-width="8" opacity=".9"/><ellipse cx="170" cy="130" rx="70" ry="15" fill="none" stroke="#c9ae78" stroke-width="3" opacity=".8"/></g></g>
<circle cx="300" cy="256" r="26" fill="url(#${p}-e)"/><path d="M285 250 q10-12 22-4 q-6 14-22 4z M302 264 q8-4 12 2 q-8 6-12-2z" fill="#4ad38a" opacity=".75"/><circle cx="300" cy="256" r="26" fill="${shade(p)}"/><circle cx="300" cy="256" r="29" fill="none" stroke="#7fd9ff" stroke-opacity=".4" stroke-width="3"/>
<circle cx="680" cy="70" r="16" fill="url(#${p}-m)"/><circle cx="680" cy="70" r="16" fill="${shade(p)}"/>`,
galaxias:p=>{let d='';for(let a=0;a<2;a++)for(let i=0;i<170;i++){const t=i/170*5.2,r=10+t*28,ang=t*1.25+a*Math.PI,sp=(rnd(i+a*300)-.5)*(8+t*9),x=Math.cos(ang)*(r+sp),y=Math.sin(ang)*(r+sp),col=t<1.6?'#ffe9b0':t<3.2?'#c7b3ff':'#6fe8ff';d+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(rnd(i*3+a)*1.9+.5).toFixed(1)}" fill="${col}" opacity="${(.45+rnd(i+7)*.5).toFixed(2)}"/>`}
return `<defs><radialGradient id="${p}-core"><stop stop-color="#fff8dc"/><stop offset=".35" stop-color="#ffd28a" stop-opacity=".8"/><stop offset="1" stop-color="#a78bfa" stop-opacity="0"/></radialGradient></defs>
<g transform="translate(400 160) rotate(-18) scale(1 .42)"><circle r="165" fill="#8f6bff" opacity=".13" filter="url(#${p}-glow)"/><g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="140s" repeatCount="indefinite"/>${d}</g><circle r="46" fill="url(#${p}-core)"/></g>
<g transform="translate(655 70) rotate(25) scale(1 .5)" opacity=".85"><ellipse rx="42" ry="42" fill="#ff9ad5" opacity=".15"/><circle r="14" fill="url(#${p}-core)"/></g><g transform="translate(130 250) rotate(-30) scale(1 .45)" opacity=".8"><ellipse rx="30" ry="30" fill="#6fe8ff" opacity=".15"/><circle r="10" fill="url(#${p}-core)"/></g>`},
estrelas:p=>{let rays='';for(let i=0;i<16;i++){rays+=`<line x1="0" y1="-100" x2="0" y2="${-(125+(i%2)*38)}" stroke="#ffd98a" stroke-width="${i%2?3:5}" stroke-linecap="round" transform="rotate(${i*22.5})" opacity=".7"/>`}
return `<defs><radialGradient id="${p}-sun" cx="40%" cy="35%"><stop stop-color="#fffbe0"/><stop offset=".35" stop-color="#ffc83d"/><stop offset=".8" stop-color="#ee6a1c"/><stop offset="1" stop-color="#9b2a0e"/></radialGradient><radialGradient id="${p}-blue" cx="40%" cy="35%"><stop stop-color="#fff"/><stop offset=".5" stop-color="#8fd3ff"/><stop offset="1" stop-color="#3b6cff"/></radialGradient><radialGradient id="${p}-red" cx="38%" cy="35%"><stop stop-color="#ffc6a0"/><stop offset=".5" stop-color="#e0452c"/><stop offset="1" stop-color="#5a0f12"/></radialGradient></defs>
<circle cx="400" cy="160" r="150" fill="#ff9b32" opacity=".28" filter="url(#${p}-glow)"><animate attributeName="r" values="140;165;140" dur="4s" repeatCount="indefinite"/></circle>
<g transform="translate(400 160)"><g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="50s" repeatCount="indefinite"/>${rays}</g><circle r="86" fill="url(#${p}-sun)"/><g fill="#ff8a1f" opacity=".35"><circle cx="-30" cy="-20" r="14"/><circle cx="25" cy="30" r="18"/><circle cx="40" cy="-35" r="9"/><circle cx="-35" cy="40" r="10"/></g><path d="M-60 -60 C-100 -120 -20 -130 -30 -84 M70 -50 C130 -90 120 -20 92 -10" fill="none" stroke="#ff7a2a" stroke-width="6" stroke-linecap="round" opacity=".8"/></g>
<circle cx="150" cy="92" r="30" fill="#6fa8ff" opacity=".4" filter="url(#${p}-glow)"/><circle cx="150" cy="92" r="13" fill="url(#${p}-blue)"/><path d="M150 66v52M124 92h52" stroke="#bfe0ff" stroke-width="2" opacity=".7"/>
<circle cx="660" cy="236" r="38" fill="url(#${p}-red)"/><circle cx="660" cy="236" r="38" fill="${shade(p)}"/>`},
'buracos-negros':p=>`<defs><linearGradient id="${p}-disk" x1="0" x2="1"><stop stop-color="#7a3cff"/><stop offset=".35" stop-color="#ff8a3d"/><stop offset=".5" stop-color="#fff2c4"/><stop offset=".65" stop-color="#ff8a3d"/><stop offset="1" stop-color="#7a3cff"/></linearGradient><linearGradient id="${p}-jet" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#6fe8ff" stop-opacity="0"/><stop offset=".5" stop-color="#9fb6ff" stop-opacity=".5"/><stop offset="1" stop-color="#6fe8ff" stop-opacity="0"/></linearGradient><clipPath id="${p}-low"><rect x="100" y="160" width="600" height="120"/></clipPath></defs>
<rect x="394" y="10" width="12" height="300" fill="url(#${p}-jet)" filter="url(#${p}-soft)"/>
<circle cx="400" cy="160" r="105" fill="none" stroke="#ff9b4d" stroke-width="16" opacity=".35" filter="url(#${p}-glow)"><animate attributeName="opacity" values=".25;.5;.25" dur="4s" repeatCount="indefinite"/></circle>
<g transform="rotate(-12 400 160)"><ellipse cx="400" cy="160" rx="250" ry="54" fill="none" stroke="url(#${p}-disk)" stroke-width="22" opacity=".55" filter="url(#${p}-soft)"/><ellipse cx="400" cy="160" rx="215" ry="42" fill="none" stroke="url(#${p}-disk)" stroke-width="7"/></g>
<circle cx="400" cy="160" r="64" fill="#000"/><circle cx="400" cy="160" r="66" fill="none" stroke="#ffe3b0" stroke-width="3" opacity=".95"/><circle cx="400" cy="160" r="82" fill="none" stroke="#ffb066" stroke-width="5" opacity=".55"/>
<g transform="rotate(-12 400 160)" clip-path="url(#${p}-low)"><ellipse cx="400" cy="160" rx="215" ry="42" fill="none" stroke="url(#${p}-disk)" stroke-width="11"/><ellipse cx="400" cy="160" rx="250" ry="54" fill="none" stroke="url(#${p}-disk)" stroke-width="5" opacity=".7"/></g>
<g transform="rotate(-12 400 160)"><circle r="3.5" fill="#fff"><animateMotion dur="6s" repeatCount="indefinite" path="M185,160 a215,42 0 1,0 430,0 a215,42 0 1,0 -430,0"/></circle><circle r="2.5" fill="#ffd9a0"><animateMotion dur="9s" begin="-3s" repeatCount="indefinite" path="M150,160 a250,54 0 1,0 500,0 a250,54 0 1,0 -500,0"/></circle></g>`,
'lua-satelites':p=>{const cr=[[255,120,20],[330,205,28],[285,175,11],[350,125,12],[240,215,14],[320,90,9]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#5c6678" opacity=".55"/><circle cx="${x-r*.18}" cy="${y-r*.18}" r="${r*.85}" fill="#9aa5b8" opacity=".5"/>`).join('');
return `<defs><radialGradient id="${p}-moon" cx="35%" cy="30%"><stop stop-color="#f4f6fb"/><stop offset=".55" stop-color="#adb7c9"/><stop offset="1" stop-color="#4a5468"/></radialGradient><radialGradient id="${p}-earth" cx="35%" cy="30%"><stop stop-color="#c8f4ff"/><stop offset=".45" stop-color="#2b86dc"/><stop offset="1" stop-color="#08265a"/></radialGradient></defs>
<circle cx="300" cy="165" r="125" fill="#cfe4ff" opacity=".12" filter="url(#${p}-glow)"/><circle cx="300" cy="165" r="108" fill="url(#${p}-moon)"/><ellipse cx="270" cy="150" rx="46" ry="34" fill="#6b7589" opacity=".35"/><ellipse cx="340" cy="140" rx="30" ry="22" fill="#6b7589" opacity=".3"/>${cr}<circle cx="300" cy="165" r="108" fill="${shade(p)}"/>
<circle cx="650" cy="270" r="84" fill="#5cc4ff" opacity=".25" filter="url(#${p}-soft)"/><circle cx="650" cy="270" r="76" fill="url(#${p}-earth)"/><path d="M610 245 q18-20 40-6 q4 18-18 22 q-12 14-22-16z M660 285 q22-8 30 12 q-20 14-30-12z" fill="#52d68d" opacity=".8"/><path d="M600 270 q30-10 60 0 M625 232 q26 6 50-4" stroke="#fff" stroke-width="5" opacity=".4" fill="none" stroke-linecap="round"/><circle cx="650" cy="270" r="76" fill="${shade(p)}"/>
<ellipse cx="300" cy="165" rx="210" ry="62" transform="rotate(-14 300 165)" fill="none" stroke="#9fd8ff" stroke-opacity=".35" stroke-dasharray="3 7"/>
<g transform="rotate(-14 300 165)"><g><animateMotion dur="14s" repeatCount="indefinite" rotate="auto" path="M90,165 a210,62 0 1,0 420,0 a210,62 0 1,0 -420,0"/><rect x="-7" y="-5" width="14" height="10" rx="2" fill="#e8f1ff" stroke="#7fdcff"/><rect x="-24" y="-3" width="14" height="6" fill="#4b7bff"/><rect x="10" y="-3" width="14" height="6" fill="#4b7bff"/><circle r="1.8" fill="#ff4d6d"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></circle></g></g>`},
exploracao:p=>`<defs><radialGradient id="${p}-earth" cx="50%" cy="0%" r="90%"><stop stop-color="#7fe3ff"/><stop offset=".25" stop-color="#2b7fe0"/><stop offset="1" stop-color="#06143a"/></radialGradient><linearGradient id="${p}-body" x1="0" x2="1"><stop stop-color="#aab6d8"/><stop offset=".45" stop-color="#fff"/><stop offset="1" stop-color="#8a94b8"/></linearGradient><linearGradient id="${p}-flame" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff"/><stop offset=".3" stop-color="#ffd36b"/><stop offset=".7" stop-color="#ff6a2a"/><stop offset="1" stop-color="#ff2a2a" stop-opacity="0"/></linearGradient></defs>
<circle cx="400" cy="520" r="318" fill="#59d0ff" opacity=".35" filter="url(#${p}-soft)"/><circle cx="400" cy="520" r="300" fill="url(#${p}-earth)"/><path d="M250 232 q40-14 70 4 q-20 20-48 10z M430 224 q50-16 90 8 q-30 18-70 8z M590 250 q30-6 50 10 q-26 10-50-10z" fill="#4ad38a" opacity=".55"/><path d="M130 280 Q400 190 680 280" stroke="#bff3ff" stroke-width="3" fill="none" opacity=".6"/>
<path d="M90 190 Q250 160 330 110" stroke="#8cefff" stroke-opacity=".4" stroke-width="2" stroke-dasharray="6 10" fill="none"/>
<g transform="translate(520 118) rotate(32)"><g transform="translate(0 62)"><path d="M-12 0 L0 70 L12 0Z" fill="url(#${p}-flame)"><animateTransform attributeName="transform" type="scale" values="1 1;1 1.35;1 .9;1 1.25;1 1" dur=".35s" repeatCount="indefinite"/></path></g>
<path d="M-26 40 L-52 78 L-26 70Z M26 40 L52 78 L26 70Z" fill="#e0405a"/><path d="M0 -70 Q30 -30 26 62 L-26 62 Q-30 -30 0 -70Z" fill="url(#${p}-body)"/><path d="M0 -70 Q16 -50 20 -28 L-20 -28 Q-16 -50 0 -70Z" fill="#e0405a"/><circle cy="-4" r="12" fill="#0e2860" stroke="#7fe8ff" stroke-width="4"/><circle cx="-4" cy="-8" r="3" fill="#fff" opacity=".8"/><rect x="-26" y="34" width="52" height="6" fill="#e0405a"/></g>
<g transform="translate(150 80)"><rect x="-8" y="-5" width="16" height="10" rx="2" fill="#dfe6ff"/><rect x="-46" y="-3" width="34" height="6" fill="#4b7bff"/><rect x="12" y="-3" width="34" height="6" fill="#4b7bff"/><animateTransform attributeName="transform" type="translate" values="150 80;162 76;150 80" dur="7s" repeatCount="indefinite"/></g>`,
'asteroides-cometas':p=>`<defs><radialGradient id="${p}-rock" cx="35%" cy="30%"><stop stop-color="#cfd0e6"/><stop offset=".6" stop-color="#7f809e"/><stop offset="1" stop-color="#3a3b56"/></radialGradient><linearGradient id="${p}-tail" gradientUnits="userSpaceOnUse" x1="250" y1="190" x2="770" y2="40"><stop stop-color="#e8fbff"/><stop offset=".3" stop-color="#7fe8ff" stop-opacity=".7"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient><linearGradient id="${p}-dust" gradientUnits="userSpaceOnUse" x1="250" y1="190" x2="760" y2="150"><stop stop-color="#ffe3b0"/><stop offset=".4" stop-color="#e0a0ff" stop-opacity=".5"/><stop offset="1" stop-color="#e0a0ff" stop-opacity="0"/></linearGradient></defs>
<path d="M250 190 Q500 150 770 150 L770 215 Q500 215 250 200Z" fill="url(#${p}-dust)" opacity=".7" filter="url(#${p}-soft)"/><path d="M250 180 L770 20 L770 80 L250 204Z" fill="url(#${p}-tail)" opacity=".85" filter="url(#${p}-soft)"/>
<circle cx="250" cy="192" r="46" fill="#9ff0ff" opacity=".5" filter="url(#${p}-glow)"><animate attributeName="r" values="40;54;40" dur="3s" repeatCount="indefinite"/></circle><circle cx="250" cy="192" r="22" fill="#fff" opacity=".9"/><circle cx="250" cy="192" r="11" fill="#4a4d6e"/>
${rock(p,520,230,26,3,40)}${rock(p,610,105,18,4,30)}${rock(p,430,70,13,5,24)}${rock(p,690,250,10,6,20)}${rock(p,140,60,15,7,34)}${rock(p,120,250,9,8,26)}`,
fenomenos:p=>`<defs><linearGradient id="${p}-au1" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#7dffb4" stop-opacity="0"/><stop offset=".5" stop-color="#4dffc0" stop-opacity=".8"/><stop offset="1" stop-color="#6fe8ff" stop-opacity="0"/></linearGradient><linearGradient id="${p}-au2" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#c4a0ff" stop-opacity="0"/><stop offset=".6" stop-color="#b57cff" stop-opacity=".6"/><stop offset="1" stop-color="#ff7cd0" stop-opacity="0"/></linearGradient><radialGradient id="${p}-cor"><stop offset=".4" stop-color="#fff" stop-opacity=".95"/><stop offset=".55" stop-color="#ffd68a" stop-opacity=".6"/><stop offset="1" stop-color="#ffd68a" stop-opacity="0"/></radialGradient></defs>
<g filter="url(#${p}-soft)"><path d="M-20 130 Q120 20 260 110 T520 80 T830 120 L830 220 Q660 150 520 190 T260 200 T-20 220Z" fill="url(#${p}-au1)"><animateTransform attributeName="transform" type="translate" values="0 0;30 -10;0 0" dur="9s" repeatCount="indefinite"/></path><path d="M-20 160 Q160 70 300 150 T560 120 T830 170 L830 250 Q640 190 500 230 T240 240 T-20 250Z" fill="url(#${p}-au2)"><animateTransform attributeName="transform" type="translate" values="0 0;-26 8;0 0" dur="11s" repeatCount="indefinite"/></path></g>
<circle cx="620" cy="85" r="110" fill="url(#${p}-cor)"/><g stroke="#fff" stroke-linecap="round" opacity=".6"><path d="M620 85 L740 40 M620 85 L520 10 M620 85 L730 150 M620 85 L510 150" stroke-width="3"/></g><circle cx="620" cy="85" r="46" fill="#02020a"/><circle cx="620" cy="85" r="47" fill="none" stroke="#ffe9b8" stroke-width="2"/><circle cx="586" cy="62" r="6" fill="#fff"><animate attributeName="opacity" values="1;.4;1" dur="2.5s" repeatCount="indefinite"/></circle>
<path d="M0 320 L0 262 L70 214 L130 252 L210 190 L290 258 L370 226 L460 272 L560 220 L660 268 L740 236 L800 262 L800 320Z" fill="#070a1f"/><path d="M0 320 L0 290 L60 272 L120 296 L200 268 L300 298 L420 280 L540 300 L660 276 L800 298 L800 320Z" fill="#03040f"/><g fill="#03040f"><path d="M40 300 l10-34 10 34z M62 300 l8-26 8 26z M690 300 l10-36 10 36z M715 300 l8-28 8 28z"/></g>`,
'vida-extraterrestre':p=>`<defs><radialGradient id="${p}-pl" cx="35%" cy="25%"><stop stop-color="#d6fff4"/><stop offset=".4" stop-color="#3fc3b0"/><stop offset="1" stop-color="#1a2a6a"/></radialGradient><radialGradient id="${p}-ex" cx="35%" cy="30%"><stop stop-color="#f0d8ff"/><stop offset=".5" stop-color="#9d6cff"/><stop offset="1" stop-color="#2a1568"/></radialGradient><linearGradient id="${p}-sauc" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#f4f8ff"/><stop offset=".5" stop-color="#9fb0d6"/><stop offset="1" stop-color="#4b5688"/></linearGradient><linearGradient id="${p}-beam" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#9dffd8" stop-opacity=".7"/><stop offset="1" stop-color="#9dffd8" stop-opacity="0"/></linearGradient></defs>
<circle cx="240" cy="360" r="215" fill="#6fe8ff" opacity=".3" filter="url(#${p}-soft)"/><circle cx="240" cy="360" r="205" fill="url(#${p}-pl)"/><path d="M110 250 q40-20 90-10 M300 200 q40-8 70 10" stroke="#fff" stroke-opacity=".3" stroke-width="5" fill="none" stroke-linecap="round"/>
<g transform="translate(120 70) rotate(-18)"><ellipse rx="54" ry="11" fill="none" stroke="#e6c8ff" stroke-width="5" opacity=".5"/><circle r="26" fill="url(#${p}-ex)"/><circle r="26" fill="${shade(p)}"/><path d="M-54 0 a54 11 0 0 0 108 0" fill="none" stroke="#f0dcff" stroke-width="5" opacity=".9"/></g>
<g><animateTransform attributeName="transform" type="translate" values="0 0;14 -8;0 0" dur="5s" repeatCount="indefinite"/><path d="M520 118 L475 300 L645 300 L600 118Z" fill="url(#${p}-beam)" opacity=".8"><animate attributeName="opacity" values=".5;.9;.5" dur="2s" repeatCount="indefinite"/></path><path d="M534 100 a26 26 0 0 1 52 0z" fill="#9dffd8" opacity=".6" stroke="#d8fff0"/><ellipse cx="560" cy="108" rx="66" ry="17" fill="url(#${p}-sauc)" stroke="#dfe8ff" stroke-opacity=".6"/><circle cx="520" cy="110" r="4" fill="#ff7cd0"><animate attributeName="fill" values="#ff7cd0;#7cf5ff;#ffd36b;#ff7cd0" dur="1.5s" repeatCount="indefinite"/></circle><circle cx="560" cy="117" r="4" fill="#7cf5ff"><animate attributeName="fill" values="#7cf5ff;#ffd36b;#ff7cd0;#7cf5ff" dur="1.5s" repeatCount="indefinite"/></circle><circle cx="600" cy="110" r="4" fill="#ffd36b"><animate attributeName="fill" values="#ffd36b;#ff7cd0;#7cf5ff;#ffd36b" dur="1.5s" repeatCount="indefinite"/></circle></g>`
};
getCategoryArtwork=function(cat){
 const p='a-'+cat.id,pal=artPalettes[cat.id]||['#101a3d','#283b76','#75eaff'];
 return `<svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Ilustração de ${cat.name}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${p}-bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${pal[0]}"/><stop offset=".6" stop-color="${pal[1]}"/><stop offset="1" stop-color="#050816"/></linearGradient><radialGradient id="${p}-n1" cx="22%" cy="30%" r="55%"><stop stop-color="${pal[2]}" stop-opacity=".38"/><stop offset="1" stop-color="${pal[2]}" stop-opacity="0"/></radialGradient><radialGradient id="${p}-n2" cx="82%" cy="78%" r="50%"><stop stop-color="#a78bfa" stop-opacity=".32"/><stop offset="1" stop-color="#a78bfa" stop-opacity="0"/></radialGradient><radialGradient id="${p}-shade" cx="35%" cy="30%" r="75%"><stop offset=".45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#00000f" stop-opacity=".78"/></radialGradient><filter id="${p}-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10"/></filter><filter id="${p}-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3"/></filter></defs><rect width="800" height="320" fill="url(#${p}-bg)"/><rect width="800" height="320" fill="url(#${p}-n1)"/><rect width="800" height="320" fill="url(#${p}-n2)"/>${stars()}${(scenes[cat.id]||(()=>''))(p,pal)}</svg>`};

/* ---------- FX CANVAS ---------- */
const fx=document.createElement('canvas');fx.id='fxlayer';document.body.appendChild(fx);
const c=fx.getContext('2d');let W=0,H=0;const dpr=Math.min(devicePixelRatio||1,2);
function size(){W=innerWidth;H=innerHeight;fx.width=W*dpr;fx.height=H*dpr;c.setTransform(dpr,0,0,dpr,0,0)}
size();addEventListener('resize',size);
let parts=[],shoots=[],warp=null,last=performance.now(),nextShoot=2500;
const R=Math.random;
function burst(x,y,col,n){n=n||28;for(let i=0;i<n;i++){const a=R()*6.283,s=1.5+R()*5;parts.push({t:'d',x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-1,g:.12,l:0,m:40+R()*30,s:1.5+R()*2.5,col})}parts.push({t:'r',x,y,l:0,m:34,col})}
function confetti(){const pal=['#55f4ff','#a78bfa','#f472d0','#ffd700','#34f5a8','#fff'];for(let i=0;i<150;i++)parts.push({t:'c',x:R()*W,y:-20-R()*H*.35,vx:(R()-.5)*3,vy:2+R()*4,g:.05,l:0,m:170+R()*90,w:6+R()*6,h:3+R()*4,rot:R()*6,vr:(R()-.5)*.3,col:pal[i%pal.length]})}
function floatText(x,y,txt,col){const d=document.createElement('div');d.className='fx-float';d.textContent=txt;d.style.left=x+'px';d.style.top=y+'px';d.style.color=col;document.body.appendChild(d);setTimeout(()=>d.remove(),1250)}
function startWarp(){if(!on())return;warp={t:0,l:performance.now(),dur:1700,s:Array.from({length:240},()=>({a:R()*6.283,d:R()*40,v:.4+R()*1.2}))}}
function loop(now){const dt=Math.min(50,now-last)/16.67;last=now;c.clearRect(0,0,W,H);
 if(!on()){parts.length=0;shoots.length=0;warp=null;requestAnimationFrame(loop);return}
 if(now>nextShoot){shoots.push({x:W*(.35+R()*.65),y:R()*H*.4,vx:-(8+R()*5),vy:3+R()*3,l:0,m:55});nextShoot=now+3500+R()*5000}
 shoots=shoots.filter(s=>{s.l+=dt;s.x+=s.vx*dt;s.y+=s.vy*dt;const a=Math.sin(Math.min(1,s.l/s.m)*Math.PI);const g=c.createLinearGradient(s.x,s.y,s.x-s.vx*9,s.y-s.vy*9);g.addColorStop(0,`rgba(200,250,255,${a})`);g.addColorStop(1,'rgba(200,250,255,0)');c.strokeStyle=g;c.lineWidth=1.8;c.beginPath();c.moveTo(s.x,s.y);c.lineTo(s.x-s.vx*9,s.y-s.vy*9);c.stroke();return s.l<s.m});
 parts=parts.filter(p=>{p.l+=dt;if(p.l>p.m)return false;const k=p.l/p.m;
  if(p.t==='r'){c.globalAlpha=1-k;c.strokeStyle=p.col;c.lineWidth=2;c.beginPath();c.arc(p.x,p.y,8+k*60,0,6.283);c.stroke()}
  else{p.vy+=p.g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;c.globalAlpha=p.t==='c'?Math.min(1,(1-k)*3):1-k;c.fillStyle=p.col;
   if(p.t==='c'){p.rot+=p.vr*dt;c.save();c.translate(p.x,p.y);c.rotate(p.rot);c.fillRect(-p.w/2,-p.h/2,p.w,p.h);c.restore()}
   else{c.shadowColor=p.col;c.shadowBlur=10;c.beginPath();c.arc(p.x,p.y,p.s*(1-k*.5),0,6.283);c.fill();c.shadowBlur=0}}
  c.globalAlpha=1;return true});
 if(warp){warp.t+=now-warp.l;warp.l=now;const k=Math.min(1,warp.t/warp.dur),a=1-k*k,cx=W/2,cy=H/2,mx=Math.hypot(W,H)/2;
  c.fillStyle=`rgba(3,0,20,${a*.97})`;c.fillRect(0,0,W,H);c.strokeStyle=`rgba(160,240,255,${a})`;c.lineWidth=1.5;c.beginPath();
  warp.s.forEach(s=>{s.d+=(1.5+k*k*45)*s.v*dt;if(s.d>mx){s.d=R()*30}const l=4+k*k*130*s.v,co=Math.cos(s.a),si=Math.sin(s.a);c.moveTo(cx+co*s.d,cy+si*s.d);c.lineTo(cx+co*(s.d+l),cy+si*(s.d+l))});c.stroke();
  c.fillStyle=`rgba(200,250,255,${a})`;c.font='800 30px Outfit,sans-serif';c.textAlign='center';c.fillText('UNIVERSO QUIZ',cx,cy+10);if(k>=1)warp=null}
 requestAnimationFrame(loop)}
requestAnimationFrame(loop);startWarp();

/* ---------- CURSOR GLOW + TILT ---------- */
const glow=document.createElement('div');glow.id='cursor-glow';document.body.appendChild(glow);
let gx=0,gy=0,tx=0,ty=0,tiltEl=null;
addEventListener('pointermove',e=>{if(e.pointerType==='touch'||!on())return;tx=e.clientX;ty=e.clientY;glow.style.opacity=1;
 const el=e.target.closest&&e.target.closest('.category-card,.menu-tile');
 if(tiltEl&&tiltEl!==el){tiltEl.style.transform='';tiltEl=null}
 if(!el)return;tiltEl=el;const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
 el.style.transform=`perspective(900px) rotateX(${((.5-y)*9).toFixed(2)}deg) rotateY(${((x-.5)*11).toFixed(2)}deg) translateY(-7px) scale(1.02)`;
 el.style.setProperty('--mx',x*100+'%');el.style.setProperty('--my',y*100+'%')});
document.addEventListener('pointerleave',()=>{glow.style.opacity=0},true);
(function gl(){gx+=(tx-gx)*.12;gy+=(ty-gy)*.12;glow.style.transform=`translate(${gx}px,${gy}px)`;requestAnimationFrame(gl)})();

/* ---------- SOUND ---------- */
playAnswerSound=function(ok){if(!gameSettings.soundEnabled)return;try{const A=new(window.AudioContext||window.webkitAudioContext)(),t=A.currentTime,notes=ok?[523.25,659.25,783.99,1046.5]:[196,155.56];
 notes.forEach((f,i)=>{const o=A.createOscillator(),g=A.createGain(),s=t+i*(ok?.07:.12);o.type=ok?'triangle':'sawtooth';o.frequency.value=f;g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(ok?.09:.05,s+.02);g.gain.exponentialRampToValueAtTime(.0001,s+.28);o.connect(g);g.connect(A.destination);o.start(s);o.stop(s+.3)});setTimeout(()=>A.close(),900)}catch(e){}};

/* ---------- QUIZ FEEDBACK ---------- */
let streak=0;
const _sq=appState.startQuiz;appState.startQuiz=function(id){streak=0;return _sq.call(this,id)};
const _uq=updateQuizUI;
updateQuizUI=function(sel,cor){_uq(sel,cor);if(!on())return;
 const last=appState.userAnswers[appState.userAnswers.length-1],ok=last&&last.isCorrect,b=document.getElementById('option-'+sel),cb=document.getElementById('option-'+cor);
 if(cb)cb.classList.add('fx-correct');if(!b)return;const r=b.getBoundingClientRect(),x=r.left+60,y=r.top+r.height/2;
 if(ok){streak++;burst(x,y,'#34f5a8',34);floatText(x+50,y,'+1 ponto','#34f5a8');if(streak>=2)floatText(W/2,120,'🔥 Sequência x'+streak,'#ffd700')}
 else{streak=0;b.classList.add('fx-wrong');burst(x,y,'#ff4d7e',24);const card=document.querySelector('#view-container .glass-card.rounded-3xl');if(card)card.classList.add('fx-shake')}};

/* ---------- POST RENDER ---------- */
function countUp(el,to,fmt){const t0=performance.now();(function f(n){const k=Math.min(1,(n-t0)/1000),e=1-Math.pow(1-k,3);el.textContent=fmt(Math.round(to*e));if(k<1)requestAnimationFrame(f)})(t0)}
const _r=renderApp;
renderApp=function(){_r();if(!on())return;const v=appState.currentView;
 document.querySelectorAll('#view-container .category-card,.menu-tile,.option-btn,.info-item,.info-panel,.start-metric').forEach((el,i)=>{el.classList.add('fx-in');el.style.animationDelay=(i*55)+'ms'});
 if(v==='quiz'&&appState.selectedCategory){const card=document.querySelector('#view-container .glass-card.rounded-3xl');if(card){const d=document.createElement('div');d.className='quiz-banner';d.innerHTML=getCategoryArtwork(appState.selectedCategory)+'<div class="quiz-banner-fade"></div>';card.insertBefore(d,card.firstChild)}}
 if(v==='results'&&appState.selectedCategory){const tot=appState.selectedCategory.questions.length,sc=appState.score,pct=Math.round(sc/tot*100);
  const els=document.querySelectorAll('#view-container .text-2xl.font-black');if(els[0])countUp(els[0],sc,n=>n+' / '+tot);if(els[1])countUp(els[1],pct,n=>n+'%');
  document.querySelectorAll('#view-container .flex.justify-center.space-x-3 i').forEach((s,i)=>{s.classList.add('fx-pop');s.style.animationDelay=(500+i*250)+'ms'});
  setTimeout(()=>{if(pct>=70)confetti();else burst(W/2,H/3,'#55f4ff',40)},400)}
 if(v==='stats')document.querySelectorAll('.stat-number').forEach(el=>{const n=parseInt(el.textContent)||0,pc=el.textContent.includes('%');countUp(el,n,x=>x+(pc?'%':''))})};
})();
