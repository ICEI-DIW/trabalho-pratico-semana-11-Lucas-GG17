 let chamadaDetail = document.getElementById('chamadaDetail');
        let container = document.getElementById('chamadaDetail');

       // Parte da criação dos cards da pagina home 
       fetch('../db/db.json')
       .then(res => res.json())
       .then(data => {

                let card = ``;
                for(let i = 0; i < data.filmes.length; i++){
                    let filme = data.filmes[i];
                    card += `<div class="card-film" data-id="${filme.id}">
                        <h2>${filme.titulo}</h2>
                        <p>
                            <img src="${filme.imagem}" alt="" >
                        
                            ${filme.previa}
                        </p>
                    </div>`
                }
                let container = document.getElementById('chamadaDetail');
                container.innerHTML = card;

       })

        //Parte da criação do fluxo entre as paginas home e detalhes

        chamadaDetail.addEventListener('click', carregarDados);

        function carregarDados(event){

        
            let elementoClicado = event.target;

            
            while (elementoClicado && !elementoClicado.dataset.id) {
                elementoClicado = elementoClicado.parentElement;
            }

            if (elementoClicado && elementoClicado.dataset.id) {
                let id = elementoClicado.dataset.id;
                window.location.href = `detalhes.html?id=${id}`;
            }
        }



        // Parte para ajustar o menu 

            const itens = document.getElementById('itens');

            function clickMenu() {
            itens.classList.toggle('ativo');
            }


            function ajustarMenu() {
            if (window.innerWidth >= 768) {
                itens.classList.remove('ativo');
                itens.style.display = 'flex';
            } else {
                itens.style.display = ''; 
            }
            }

            window.addEventListener('resize', ajustarMenu);
            window.addEventListener('load', ajustarMenu);

















