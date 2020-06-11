<?php



$dbh = new PDO('mysql:host=localhost;dbname=datamahasiswa', 'root', '');

$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->FetchAll(PDO::FETCH_ASSOC);


$data = json_encode($mahasiswa);
echo $data;
