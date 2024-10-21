<?php
// Conectar ao banco SQLite
$db = new PDO('sqlite:./Database/database.sqlite');

// Criar uma tabela (se não existir)
$db->exec("CREATE TABLE IF NOT EXISTS listTo (id INTEGER PRIMARY KEY, descricao TEXT, situacao integer, CONSTRAINT sitaucao_tolist check (situacao in (1,2)))");

?>

<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To List</title>
    <link rel="stylesheet" href="Estilo.css">
</head>

<body>
    <div id="fundo">
        <div id="tituloPrincipal">
            <h1>TODO LIST </h1>
        </div>
        <div id="areaAdicionarTarefa">
            <input type="text" name="CampoDescricaoTarefa" id="CampoDescricao">
            <button id="btnAdicionaTarefa" type="button" >
                <svg fill="#737373" width="30px" height="30px" viewBox="-3 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg">
                    <path d="M12.711 9.182a1.03 1.03 0 0 1-1.03 1.03H7.53v4.152a1.03 1.03 0 0 1-2.058 0v-4.152H1.318a1.03 1.03 0 1 1 0-2.059h4.153V4.001a1.03 1.03 0 0 1 2.058 0v4.152h4.153a1.03 1.03 0 0 1 1.029 1.03z" />
                </svg>
            </button>
        </div>
        <div id="areaTabela">
            <table>
                <tbody id="corpoTabela" >
                </tbody>
            </table>
        </div>
    </div>


    <script defer src="tabela.js"></script>
</body>

</html>