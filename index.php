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
</head>
<body>
    
</body>
</html>