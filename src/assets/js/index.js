let api = "https://absen.rplsaci.tech/"

function getNav() {
    let navbar = document.getElementById("navbar-cta");
    navbar.classList.toggle("hidden");
}

async function absen(){
let namaAbsen = document.getElementById("namaAbsen").value  
let kelas = document.getElementById("kelas").value
let status = document.getElementById("status").value
let alasan = document.getElementById("alasan").value || "-"
let kelasStr = document.getElementById("kelasStr").value    
let res = await fetch(api+"api/absen", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nama: namaAbsen, kelas: kelas, status: status, alasan: alasan, kelasStr: kelasStr }),
});
let data = await res.json()
if(data.status === 401) {
    alert(data.message)
} else {
    alert(data.message)
}
}