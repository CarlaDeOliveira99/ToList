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
    <div id="fundo" >
        <div style="background-color: blue;">
            <h1>TODO LIST </h1>
        </div>
        <div>
            <input type="text" name="CampoDescricaoTarefa" id="CampoDescricao" >
            <input id="adicionarTarefa" type="button" value="+">
        </div>
        <div>
            <table>
               <tbody>
               </tbody>
            </table>
        </div>

    </div>
</body>
</html>