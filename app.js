function pesquisar () {
    let section = document.getElementById
    ("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if(!campoPesquisa){
section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase() 

    let resultados = "";
    let titulo = "";
    let Info = "";
    let tags = "";
    
    //PARA CADA DADO DEMTRO DA LISTA DE DADOS
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        Info = dado.Info.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (dado.titulo.includes(campoPesquisa) || dado.Info.includes(campoPesquisa) || tags.includes (campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                    <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.Info}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }
    
    if (!resultados) {
resultados ="<p>Nada foi encontrado</p>"
    }
    section.innerHTML = resultados;
    }