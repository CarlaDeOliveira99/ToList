let oBtnAddTarefa  = document.getElementById('btnAdicionaTarefa'),
    iIncrementar   = 0;

oBtnAddTarefa.addEventListener('click', function ()  {
    let td = document.createElement('td');
    td.classList('linha'); 

    let oTrDescricao = document.createElement('tr');
    oTrDescricao.id('tr_descricao_' + iIncrementar);
    oTrDescricao.classList.add('trDescricao');

})