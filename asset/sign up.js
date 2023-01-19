function signn(){
    let namaa = document.getElementById("nnaammaa").value;
    let usernamee = document.getElementById("user").value;
    let pass = document.getElementById("pas").value;
    let tanggal = document.getElementById("tgl").value;
    let emaill = document.getElementById("mail").value;
    if (namaa == "" || namaa == null) {
      alert("Nama Belum Diisi!!");
    } else if (usernamee == "" || usernamee == null) {
      alert("Username Belum Diisi!!");
    } else if (pass == "" || pass == null) {
      alert("Password Belum Diisi!!");
    } else if (tanggal == "" || tanggal == null) {
      alert("Tanggal Belum Diisi!!");
    } else if (emaill == "" || emaill == null) {
      alert("Email Belum Diisi!!");
    }
}

function reseet(){
    document.getElementById("nnaammaa").value = "";
    document.getElementById("user").value = "";
    document.getElementById("pas").value = "";
    document.getElementById("tgl").value = "";
    let j = "";
    let jj = "";
    if(document.getElementById("j1").checked == true){
      j = document.getElementById("j1").value;
    }
    if(document.getElementById("j2").checked == true){
      jj = document.getElementById("j2").value;
    }
    document.getElementById("mail").value = "";
}

// // document.getElementById("signn").onclick = function(){
//   let nama = document.getElementById('nnaammaa').value;
//   combobox();
// }