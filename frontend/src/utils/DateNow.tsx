export const DateNow = () => {
  const date = new Date();

  const hari = String(date.getDate()).padStart(2, "0");

  const bulanIndo = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const bulan = bulanIndo[date.getMonth()];
  const tahun = date.getFullYear();

  const jam = String(date.getHours()).padStart(2, "0");
  const menit = String(date.getMinutes()).padStart(2, "0");

  return `${hari} ${bulan} ${tahun} pukul ${jam}.${menit}`;
};
