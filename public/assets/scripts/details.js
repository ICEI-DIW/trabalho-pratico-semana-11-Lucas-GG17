
const params = new URLSearchParams(location.search);
const id = Number(params.get('id'));

// Seleciona os elementos da página
const exibir = document.getElementById('exibedetail');
const lightboxGallery = document.getElementById('lightbox-gallery');

fetch('../db/db.json')
  .then(res => res.json())
  .then(data => {

    const filme = data.filmes.find(f => f.id == id);
    if (filme) {
        exibir.innerHTML = `
            <h2>${filme.titulo}</h2>
            <img src="${filme.imagem}" alt="${filme.titulo}" class="img-fluid">
            <p>${filme.descricao}</p>
            <span>Autor: ${filme.autor} | Data: ${filme.data}</span>
        `;

        let fotosRelacionadas = data.fotos.find(item => item.itemId === id);

        if (fotosRelacionadas && fotosRelacionadas.fotos.length > 0) {
            fotosRelacionadas.fotos.forEach(foto => {
                let fotoElement = document.createElement('a');
                fotoElement.href = foto.src;
                fotoElement.classList.add('lightbox-thumbnail');
                fotoElement.setAttribute('data-bs-toggle', 'modal');
                fotoElement.setAttribute('data-bs-target', '#exampleModal');

                fotoElement.innerHTML = `
                    <img src="${foto.src}" alt="${foto.titulo}" class="img-thumbnail">
                `;

                lightboxGallery.appendChild(fotoElement);
            });
        } else {
            lightboxGallery.innerHTML = 'Nenhuma foto disponível';
        }

    } else {
        exibir.innerHTML = 'Filme não encontrado';
    }
  });

