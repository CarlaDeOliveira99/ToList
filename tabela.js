const oBtnAddTarefa = document.getElementById('btnAdicionaTarefa'),
      oTbody        = document.getElementById('corpoTabela');
let   iIncremento   = 0;

/**
 * dispara evento ao clicar no botão de adicionar tarefas
 */
oBtnAddTarefa.addEventListener('click', function ()  {
    criarDinamicamenteTabela();
    setaDescricaoTabela();
})

function criarDinamicamenteTabela() {
    iIncremento++;
    const oTr          = document.createElement('tr'),
          oTdCheckList = document.createElement('td'),
          oTdDescricao = document.createElement('td'),
          oTdAlterar   = document.createElement('td'),
          oTdExcluir   = document.createElement('td'),

          oCheckList = document.createElement('input'),
          oDescricao = document.createElement('td'),
          oAlterar   = document.createElement('button'),
          oExcluir   = document.createElement('button');
    

    // adicionar id para cada elemento
     oTr.id        = 'linha_'    + iIncremento;
     oCheckList.id = 'checkox_'  + iIncremento;
     oDescricao.id = 'descricao_'+ iIncremento;
     oAlterar.id   = 'alterar'   + iIncremento;
     oExcluir.id   = 'excluir'   + iIncremento;

    // adicionar class para as colunas
    oTdCheckList.classList.add('td_checkox');
    oTdDescricao.classList.add('td_descricao');
    oTdAlterar.classList.add  ('td_alterar');
    oTdExcluir.classList.add  ('td_excluir');
    
    // Adicionar class para os elementos
    oTr.classList.add('linhas');
    oCheckList.classList.add('campoCheckBox');
    oDescricao.classList.add('campoDescricao');
    oAlterar.classList.add('campoAlterar');
    oExcluir.classList.add('campoExcluir');

    //adicionar checkbox no tdCheck
    oCheckList.type = 'checkbox';


    //adicionar sgv nos botões
    const svgAlterar  = addSvgAlterar();
    const svgExcluir  = addSvgExcluir();

    oAlterar.appendChild(svgAlterar);
    oExcluir.appendChild(svgExcluir);

    //adiciona os elementos criados no html
    oTbody.appendChild(oTr);
    oTr.appendChild(oTdCheckList);
    oTr.appendChild(oTdDescricao);
    oTr.appendChild(oTdAlterar);
    oTr.appendChild(oTdExcluir);
    oTdCheckList.appendChild(oCheckList);
    oTdDescricao.appendChild(oDescricao);
    oTdAlterar.appendChild(oAlterar);
    oTdExcluir.appendChild(oExcluir);
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
    let oCampoDescricao      = document.getElementById('descricao_'+ iIncremento),
        oCampoCampoDescricao = document.getElementById('CampoDescricaoTarefa');
    if(oCampoDescricao){
        oCampoDescricao.innerHTML = oCampoCampoDescricao.value
        oCampoCampoDescricao.value = '';
    }
}
