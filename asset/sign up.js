function sign() {
    let namaa = document.getElementById("nama").value;
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
    document.getElementById("nama").value = "";
    document.getElementById("user").value = "";
    document.getElementById("pas").value = "";
    document.getElementById("tgl").value = "";
    document.getElementById("mail").value = "";
}