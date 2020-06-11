$mahasiswa = [
    [
        "nama" => "kevin jayadi ahmad",
        "npm" => "13115699",
        "email" => "kevin@arcelon.co.id"

    ],
    [
        "nama" => "raya adinda jayadi ahmad",
        "npm" => "15223411",
        "email" => "raya@gmail.co.id"

    ]
];

let mahasiswa = {
    nama: "kevin jayadi ahmad",
    npm: "13115699",
    email: "kevin@arcelon.co.id",
  };
  
  console.log(JSON.stringify(mahasiswa));


  
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let mahasiswa = JSON.parse(this.responseText);
    console.log(mahasiswa);
  }
};

xhr.open("GET", "coba.json", true);
xhr.send();

$.getJSON("coba.json", function (data) {
  console.log(data);
});
