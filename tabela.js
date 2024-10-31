const btnAddTarefa = document.getElementById('btnAdicionaTarefa'),
      tbody        = document.getElementById('corpoTabela');

let   incremento   = 0;

/**
 * dispara evento ao clicar no botão de adicionar tarefas
 */
btnAddTarefa.addEventListener('click', function ()  {
    criarDinamicamenteTabela();
})

function criarDinamicamenteTabela() {
    incremento++;
    const tr          = document.createElement('tr'),
          tdCheckList = document.createElement('td'),
          tdDescricao = document.createElement('td'),
          tdAlterar   = document.createElement('td'),
          tdExcluir   = document.createElement('td'),

          checkList = document.createElement('input'),
          descricao = document.createElement('td'),
          alterar   = document.createElement('button'),
          excluir   = document.createElement('button');
    

    // adicionar id para cada elemento
     tr.id        = 'linha_'    + incremento;
     checkList.id = 'checkox_'  + incremento;
     descricao.id = 'descricao_'+ incremento;
     alterar.id   = 'alterar'   + incremento;
     excluir.id   = 'excluir'   + incremento;

    // adicionar class para as colunas
    tdCheckList.classList.add('td_checkox');
    tdDescricao.classList.add('td_descricao');
    tdAlterar.classList.add  ('td_alterar');
    tdExcluir.classList.add  ('td_excluir');
    
    // Adicionar class para os elementos
    tr.classList.add('linhas');
    checkList.classList.add('campoCheckBox');
    descricao.classList.add('campoDescricao');
    alterar.classList.add('campoAlterar');
    excluir.classList.add('campoExcluir');

    //adicionar checkbox no tdCheck
    checkList.type = 'checkbox';

    checkList.addEventListener("click", function(event) {
        trataChecBoxSelecionado(event.target.id);
      });


    //adicionar sgv nos botões
    const svgAlterar  = addSvgAlterar();
    const svgExcluir  = addSvgExcluir();

    alterar.appendChild(svgAlterar);
    excluir.appendChild(svgExcluir);

    //adiciona os elementos criados no html
    tbody.appendChild(tr);
    tr.appendChild(tdCheckList);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdAlterar);
    tr.appendChild(tdExcluir);
    tdCheckList.appendChild(checkList);
    tdDescricao.appendChild(descricao);
    tdAlterar.appendChild(alterar);
    tdExcluir.appendChild(excluir);
    if(!setaDescricaoTabela()){
        tr.remove();
    }
    
}

/**
 * Retorna o svg do alterar
 * @returns object
 */
function addSvgAlterar(){
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('class', 'bi bi-pencil');
    svg.setAttribute('viewBox', '0 0 16 16');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325');
    svg.appendChild(path);
    return svg;    
}

/**
 * Retorna o svg do excluir
 * @returns object
 */
function addSvgExcluir(){
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('class', 'bi bi-trash3');
    svg.setAttribute('viewBox', '0 0 16 16');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5');
    svg.appendChild(path);

    return svg;  
}

function setaDescricaoTabela(){
    let campoDescricao  = document.getElementById('CampoDescricaoTarefa'),
        tabelaDescricao = document.getElementById('descricao_'+ incremento);
        if(campoDescricao.value != ''){
            tabelaDescricao.innerHTML  = campoDescricao.value;
            campoDescricao.value = '';
            return true;
        } else {
            return false;
        }
}

function trataChecBoxSelecionado(idCheckBox){
    const indeci          = parseInt(idCheckBox.split('_')[1]),
          campoCheckox    = document.getElementById(idCheckBox),
          tabelaDescricao = document.getElementById('descricao_'+ indeci);

    if(campoCheckox.checked){
        tabelaDescricao.style.textDecoration = 'line-through';
    } else {
        tabelaDescricao.style.textDecoration = 'none';
    }
}

function trataAcaoAlterar(){
        
}

function alertAlterarDescricao(){
    Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
          try {
            const githubUrl = `
              https://api.github.com/users/${login}
            `;
            const response = await fetch(githubUrl);
            if (!response.ok) {
              return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
      });


    Swal.fire({
        title: "Tem certeza que deseja alterar ?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Alterado!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}