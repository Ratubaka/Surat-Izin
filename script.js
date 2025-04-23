
function buatSurat() {
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const tanggal = document.getElementById("tanggal").value;
  const alasan = document.getElementById("alasan").value;

  const surat = `
    <p>Yth. Bapak/Ibu Guru Wali Kelas ${kelas}</p>
    <p>Dengan hormat,</p>
    <p>Saya yang bertanda tangan di bawah ini:</p>
    <p>Nama: <strong>${nama}</strong><br>
    Kelas: <strong>${kelas}</strong></p>
    <p>Dengan ini mengajukan izin tidak dapat mengikuti kegiatan belajar pada tanggal <strong>${tanggal}</strong>, dikarenakan <strong>${alasan}</strong>.</p>
    <p>Demikian surat ini saya buat dengan sebenar-benarnya. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.</p>
    <br>
    <p>Hormat saya,<br><strong>${nama}</strong></p>
  `;

  document.getElementById("hasilSurat").innerHTML = surat;
}
