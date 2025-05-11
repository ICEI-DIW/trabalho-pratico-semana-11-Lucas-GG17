//Parte para a criação dos cards
const filmes = [
    { id: 1, titulo: "Vingadores", 
        imagem: "https://f.i.uol.com.br/fotografia/2013/01/07/227204-970x600-1.jpeg", 
        descricao: " Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender <br>a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.", 
        previa: "Loki, o irmão de Thor...",
        categoria: "Ação", 
        autor: "Stan Lee", 
        data: "2012-04-27" 
    },
    { id: 2, titulo: "The Batman", 
        imagem: "https://files.tecnoblog.net/wp-content/uploads/2022/04/batman.jpg",
        descricao: "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis,<br> o vigilante solitário se estabelece como a personificação da vingança para a população.", 
        previa: " Após dois anos...",
        categoria: "Ação",
        autor: "Matt Reeves", 
        data: "2022-03-03" 
    },
    { id: 3, titulo: "Mufasa: O Rei Leão", 
        imagem: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/822D54D550B97C34D675DBA2BE53A7B3225FB337CEA4A707CD88D9C7BBE42A2F/scale?width=1200&aspectRatio=1.78&format=webp", 
        descricao: " Mufasa, um filhote órfão, perdido e sozinho, conhece um simpático leão chamado Taka, herdeiro de uma linhagem real. O encontro ao acaso dá início a uma grande jornada de um grupo <br> extraordinário em busca de seu destino, além de revelar a ascensão de um dos maiores reis das Terras do Orgulho.", 
        previa: "Mufasa, um filhote órfão...",
        categoria: "Drama/Ação", 
        autor: "Barry Jenkins", 
        data: "2024-12-19" 
    },
    { id: 4, titulo: "Bad Boys para sempre", 
        imagem: "https://s2-techtudo.glbimg.com/b9p98BWZvDnRFo-ibfJy8aWvvVU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/x/g/1sBrOaRtARQCoJZyXWnA/3q01acg0mwm0dekhvkpfcxypzsu.jpg", 
        descricao: "Os brincalhões polícias de Miami, Mike Lowrey e Marcus Burnett, embarcam em uma perigosa missão para limpar o nome do falecido capitão da polícia.", 
        previa: "Os brincalhões policiais...",
        categoria: "Drama/Ação", 
        autor: "George Gallo", 
        data: "2024-06-07" 
    }
];



const fotos = [
    {
        itemId: 1, // ID do primeiro item
        fotos: [
            { src: "https://f.i.uol.com.br/fotografia/2013/01/07/227204-970x600-1.jpeg", titulo: "Foto 1 - Cena Inicial" },
            { src: "https://img.odcdn.com.br/cdn-cgi/image/width=960,height=1200,fit=cover/wp-content/uploads/2022/08/fases-marvel-5.jpg", titulo: "Foto 2 - Clímax" },
            { src: "https://cdn.ome.lt/8v7QV7dYYs6TqP5Kchgx4BOAR2w=/1200x630/smart/extras/conteudos/vingadores-10-anos-o-impacto-do-filme.jpg", titulo: "Foto 3 - Final" }
        ]
    },
    {
        itemId: 2, // ID do segundo item
        fotos: [
            { src: "https://s2-g1.glbimg.com/qS9775Ck60mP73myStoe3OWChmA=/0x0:6000x4000/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/5/n/O7ArmoTOCKUxA1LCoNBg/the-batman-zoe-kravitz-robert-pattinson.jpeg", titulo: "Foto 1 - Introdução" },
            { src: "https://img.odcdn.com.br/wp-content/uploads/2022/02/the-batman-robert-pattinson.jpeg", titulo: "Foto 2 - Conflito" },
            { src: "https://ambrosia.com.br/wp-content/uploads/2023/01/the-batman-melhor-filme-batman.jpg", titulo: "Foto 3 - Resolução" }
        ]
    },
    {
        itemId: 3, // ID do terceiro item
        fotos: [
            { src: "https://lumiere-a.akamaihd.net/v1/images/pp_mufasathelionking_herobanner_mobile_791_bc1d5074.jpeg?region=0,0,640,480", titulo: "Foto 1 - Abertura" },
            { src: "https://i.ytimg.com/vi/AiauV09fK1U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD4MZmx-flpts_oKuqZqc0iAeSAqw", titulo: "Foto 2 - Ponto de virada" },
            { src: "https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/mufasa-the-lion-king/22012025/3840/background-mufasa-the-lion-king.jpg", titulo: "Foto 3 - Conclusão" }
        ]
    },
    {
        itemId: 4, // ID do quarto item
        fotos: [
            { src: "https://s2-techtudo.glbimg.com/jL8TPAhM-IABDMYvzF_R53UuL3M=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/E/R/NBqAu2ThOKSLfbK9MBxA/badboys.jpg", titulo: "Foto 1 - Começo da jornada" },
            { src: "https://s2-g1.glbimg.com/rOtKaO4exhLd6NSFFLc5fQi4SJM=/0x0:1920x1280/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/Q/G/QuQIEPQ12sNqdflVSZgQ/df-10053-r.jpg", titulo: "Foto 2 - Momento crucial" },
            { src: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/03/07/987318635-bad-boys4.jpg", titulo: "Foto 3 - Final emocionante" }
        ]
    }
];

















