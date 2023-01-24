function signn(){
    let namaa = document.getElementById("nnaammaa").value;
    if(namaa == "" || namaa == null){
      document.getElementById("muncul").style = "display:none";
    }
    else{
      document.getElementById('table1').innerHTML = namaa;
      document.getElementById("muncul ").style = "display:inline;";
    }
    
    let usernamee = document.getElementById("user").value;
    if(usernamee == "" || usernamee == null){
      document.getElementById("muncul").style = "display:none";
    }
    else{
      
      document.getElementById('table2').innerHTML = usernamee;
      document.getElementById("muncul").style = "display:inline;";
    }
    
    let pass = document.getElementById("pas").value;
    if(pass == "" || pass == null){
      document.getElementById("muncul").style = "display:none";
    }
    else{
      
      document.getElementById('table3').innerHTML = pass;
      document.getElementById("muncul").style = "display:inline;";
    }

    // let tanggal = document.getElementById("tgl").value;
    // if(tanggal == "" || tanggal == null){
    //   document.getElementById("muncul").style = "display:none";
    // }
    // else{
      
    //   document.getElementById('table4').innerHTML = tanggal;
    //   document.getElementById("muncul").style = "display:inline;";
    // }

    let emaill = document.getElementById("mail").value;
    if(emaill == "" || emaill == null){
      document.getElementById("muncul").style = "display:none";
    }
    else{
      
      document.getElementById("table4").innerHTML = emaill;
      document.getElementById("muncul").style = "display:inline;";
    }

    let minimal = document.getElementById("amat").value;
        minimal = kalimat.length;
    if(minimal <= 30){
      document.getElementById("muncul").style = "display:none";
    }
    else{
      document.getElementById('table5').innerHTML = minimal;
      document.getElementById("muncul").style = "display:inline;";
    }
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
    } else if (emaill == "" || emaill == null) {
      alert("Alamat Belum Diisi!!");
    }
}



function cck() {
  var minLength = 15;
  var $textarea = document.getElementById("amat");
  if($textarea.text().split(/\s+/).length < minLength) {
    alert('You need to enter at least ' + minLength + ' words');
      return false;
  }
  }

// let alamatt = document.getElementById("amat").value;
// let minimal = at.length;
//     if(minimal<=30){
//         document.getElementById("amat").innerHTML = "Karakter < 30 Karakter";
//      // document.getElementById("amat").style = "display: none";
//   }
//     else{
//         document.getElementById("amat").innerHTML = "";
//      // document.getElementById("amat").innerHTML = "display: inline";
//   }
 

function reseet(){
    document.getElementById("nnaammaa").value = "";
    document.getElementById("user").value = "";
    document.getElementById("pas").value = "";
    document.getElementById("tgl").value = "";
    document.getElementById("jenis").value = "";
    document.getElementById("amat").value = "";
}

document.getElementById("user").onkeyup = function(){
  let nn = document.getElementById("user").value;
  let nn2 = nn.toUpperCase();
  document.getElementById("user").value = nn2;
}


const userlog = "syarif";
const passlog = "5555";

function login(){
 
    let username;
    let password
    username = document.getElementById("usernm").value;
    password = document.getElementById("passw").value;
    if((userlog == username) && (passlog == password)){
        alert("Login Berhasil");
        alert("Proses login : "+ username + " - " + password);
        // window.location = url;
    }else{
        alert("Login Gagal!!!");
        clear();
    }

    if(username == userlog){
        alert("Username Berhasil!!!");
    }else{
        alert("Username Salah!!");
        username = document.getElementById("user").value= "";
    }

    if(password == passlog){
        alert("Password Berhasil!!!");
    }else{
        alert("Passward salah!!!");
        password = document.getElementById("pas").value= "";
    }
 }

 document.getElementById("nnaammaa").onchange = function(){
    let nn = document.getElementById("nnaammaa").value;
    let nn2 = nn.toLowerCase();
    document.getElementById("nnaammaa").value = nn2;
  }

document.getElementById("yabody").onload = function() {
    let kode1 = "MB"
    let kode2 = "001"
    let tanggal = new Date();
    let tanggalsekarang = tanggal.getFullYear();
    document.getElementById("kodd").value = kode1 + tanggalsekarang + kode2;

}


 


  

