<?php
// Configurações do Banco de Dados
$host = "localhost";
$user = "root";       // Usuário padrão do XAMPP
$pass = "";           // Senha padrão do XAMPP (vazia)
$dbname = "nota1000enem";

try {
    // Criando a conexão usando PDO para maior segurança (prevenção contra SQL Injection)
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    
    // Configurando o PDO para lançar exceções em caso de erro
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch(PDOException $e) {
    // Caso ocorra algum erro na conexão
    die("Erro na conexão com o banco de dados: " . $e->getMessage());
}
?>
