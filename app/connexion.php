<?php

$servername = "db";
$username = "root";
$password = "password";
$database= "data";

// Création de la connexion
$db = mysqli_connect($servername, $username, $password, $database);
if ($db->connect_error) {
    die("Connexion pas réussi: " . $db->connect_error);
}

/*
//Ajouter un Post
if (InputContent !== undefined) {

    const bodyInsertContent = new URLSearchParams(
      {
          content: InputContent,
        title: InputTitle,
        id: 1,

      }
    )



    const headersInsertPost = new Headers({
        'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ddddddddddddd:dddddddddddddddddddddd`

    })
    fetch(`http://localhost:2345/insertPost.php`, {
      method: 'POST',
      headers: headersInsertPost,
      body: bodyInsertContent,
      mode: 'cors',
      credentials: 'include',
    })
      .then(resInsertPost => resInsertPost.json())
      .then(dataInsertPost => console.log(dataInsertPost))

  }*/