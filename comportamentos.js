

/**
 * Seta a descrição na tabela se caso possuir descrição 
 * @export
 * @param int incremento
 * @return  boolean 
 */
export function setaDescricaoTabela(incremento) {
    let campoDescricao = document.getElementById('CampoDescricaoTarefa'),
        tabelaDescricao = document.getElementById('descricao_' + incremento);
    if (campoDescricao.value != '') {
        tabelaDescricao.innerHTML = campoDescricao.value;
        campoDescricao.value = '';
        return true;
    } else {
        return false;
    }
}

/**
 * Trata checkBox ao ser clicado
 * @export
 * @param int idCheckBox
 */
export function trataChecBoxSelecionado(idCheckBox) {
    const indeci = parseInt(idCheckBox.split('_')[1]),
        campoCheckox    = document.getElementById(idCheckBox),
        tabelaDescricao = document.getElementById('descricao_' + indeci);

    if (campoCheckox.checked) {
        tabelaDescricao.style.textDecoration = 'line-through';
    } else {
        tabelaDescricao.style.textDecoration = 'none';
    }
}


export function trataAcaoAlterar(idAlterar){
    debugger;
    const indeci = parseInt(idAlterar.split('_')[1]),
          tabelaDescricao = document.getElementById('descricao_' + indeci);
          alertAlterarDescricao(indeci,tabelaDescricao);

}

function alertAlterarDescricao(indeci,tabelaDescricao){
    debugger;
    let descricaoAnterior = tabelaDescricao.value;
    
    Swal.fire({
        title: "Are you sure?",
        text: `${descricaoAnterior}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}