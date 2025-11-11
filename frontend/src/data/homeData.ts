import aboutIcon1 from "/image/home/about/icon1.png";
import aboutIcon2 from "/image/home/about/icon2.png";
import aboutIcon3 from "/image/home/about/icon3.png";
import person1 from "/image/home/testimonial/person1.png";
import person2 from "/image/home/testimonial/person2.png";
import person3 from "/image/home/testimonial/person3.png";
import person4 from "/image/home/testimonial/person4.png";
import person5 from "/image/home/testimonial/person5.png";
import person6 from "/image/home/testimonial/person6.png";
import person7 from "/image/home/testimonial/person7.png";
import imageNews1 from "/image/home/news/image1.png";
import imageNews2 from "/image/home/news/image2.png";
import imageNews3 from "/image/home/news/image3.png";

const aboutData = [
    {
        id: 1,
        img: aboutIcon1,
        title: "Program Edukasi Digital",
        desc: "Kami menyediakan berbagai materi edukatif yang interaktif dan mudah dipahami  mulai dari pengenalan bahaya judi online, cara melindungi diri di dunia digital, hingga strategi membangun kebiasaan positif dalam menggunakan teknologi."
    },
    {
        id: 2,
        img: aboutIcon2,
        title: "Kolaborasi Komunitas & Lembaga",
        desc: "Out Gamble berkolaborasi dengan komunitas, sekolah, dan lembaga sosial untuk membangun gerakan sadar digital melalui pelatihan, seminar, dan kampanye online."
    },
    {
        id: 3,
        img: aboutIcon3,
        title: "Kemitraan Pemerintah & Organisasi Sosial",
        desc: "Kami juga bekerja sama dengan instansi pemerintah dan organisasi non profit untuk memperluas dampak gerakan anti-judi online."
    },
];


const serviceData = [
    {
        id: 1,
        img: 'M38.25 59.5C39.4542 59.5 40.4643 59.092 41.2803 58.276C42.0963 57.46 42.5028 56.4513 42.5 55.25C42.4972 54.0487 42.0892 53.04 41.276 52.224C40.4628 51.408 39.4542 51 38.25 51C37.0458 51 36.0372 51.408 35.224 52.224C34.4108 53.04 34.0028 54.0487 34 55.25C33.9972 56.4513 34.4052 57.4614 35.224 58.2802C36.0428 59.0991 37.0515 59.5057 38.25 59.5ZM34 42.5H42.5V17H34V42.5ZM22.3125 76.5L0 54.1875V22.3125L22.3125 0H54.1875L76.5 22.3125V54.1875L54.1875 76.5H22.3125Z',
        title: "Pelaporan Judi Online",
        desc: "Fitur untuk melaporkan situs, aplikasi, atau akun yang terindikasi mengandung judi online secara anonim dan aman."
    },
    {
        id: 2,
        img: 'M58.1719 46.4844H26.4795C26.9609 57.1924 29.335 67.0537 32.7051 74.2754C34.5977 78.3428 36.6396 81.2148 38.5322 82.9746C40.3916 84.7178 41.6699 85 42.334 85C42.998 85 44.2764 84.7178 46.1357 82.9746C48.0283 81.2148 50.0703 78.3262 51.9629 74.2754C55.333 67.0537 57.707 57.1924 58.1885 46.4844H58.1719ZM26.4629 38.5156H58.1553C57.6904 27.8076 55.3164 17.9463 51.9463 10.7246C50.0537 6.67383 48.0117 3.78516 46.1191 2.02539C44.2598 0.282227 42.9814 0 42.3174 0C41.6533 0 40.375 0.282227 38.5156 2.02539C36.623 3.78516 34.5811 6.67383 32.6885 10.7246C29.3184 17.9463 26.9443 27.8076 26.4629 38.5156ZM18.4941 38.5156C19.0752 24.3047 22.7441 11.1064 28.1064 2.44043C12.8164 7.85254 1.56055 21.7812 0 38.5156H18.4941ZM0 46.4844C1.56055 63.2188 12.8164 77.1475 28.1064 82.5596C22.7441 73.8936 19.0752 60.6953 18.4941 46.4844H0ZM66.1406 46.4844C65.5596 60.6953 61.8906 73.8936 56.5283 82.5596C71.8184 77.1309 83.0742 63.2188 84.6348 46.4844H66.1406ZM84.6348 38.5156C83.0742 21.7812 71.8184 7.85254 56.5283 2.44043C61.8906 11.1064 65.5596 24.3047 66.1406 38.5156H84.6348Z',
        title: "Deteksi Situs Judi",
        desc: "Gunakan sistem deteksi otomatis kami untuk memeriksa apakah suatu situs berpotensi terkait dengan aktivitas judi online."
    },
    {
        id: 3,
        img: 'M15 15H37.5V37.5H15V15ZM75 15V37.5H52.5V15H75ZM52.5 56.25H60V48.75H52.5V41.25H60V48.75H67.5V41.25H75V48.75H67.5V56.25H75V67.5H67.5V75H60V67.5H48.75V75H41.25V60H52.5V56.25ZM60 56.25V67.5H67.5V56.25H60ZM15 75V52.5H37.5V75H15ZM22.5 22.5V30H30V22.5H22.5ZM60 22.5V30H67.5V22.5H60ZM22.5 60V67.5H30V60H22.5ZM15 41.25H22.5V48.75H15V41.25ZM33.75 41.25H48.75V56.25H41.25V48.75H33.75V41.25ZM41.25 22.5H48.75V37.5H41.25V22.5ZM7.5 7.5V22.5H0V7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0L22.5 0V7.5H7.5ZM82.5 0C84.4891 0 86.3968 0.790176 87.8033 2.1967C89.2098 3.60322 90 5.51088 90 7.5V22.5H82.5V7.5H67.5V0H82.5ZM7.5 67.5V82.5H22.5V90H7.5C5.51088 90 3.60322 89.2098 2.1967 87.8033C0.790176 86.3968 0 84.4891 0 82.5V67.5H7.5ZM82.5 82.5V67.5H90V82.5C90 84.4891 89.2098 86.3968 87.8033 87.8033C86.3968 89.2098 84.4891 90 82.5 90H67.5V82.5H82.5Z',
        title: "Deteksi QR Code Judi",
        desc: "Pindai QR code dari brosur, situs, atau media sosial untuk mengetahui apakah mengarah ke situs judi atau konten berisiko."
    },
];

const actionData = [
    {
        id: 1,
        text: "Lindungi"
    },
    {
        id: 2,
        text: "Deteksi"
    },
    {
        id: 3,
        text: "Laporkan"
    },
    {
        id: 4,
        text: "Sadar"
    },
    {
        id: 5,
        text: "Lindungi"
    },
    {
        id: 6,
        text: "Deteksi"
    },
    {
        id: 7,
        text: "Laporkan"
    },
    {
        id: 8,
        text: "Sadar"
    },
]

const testimonialData = [
    {
        id: 1,
        img: person1,
        name: "Setio Nugraha",
        text: "Awalnya cuma iseng main judi online bareng teman, cuma taruhan kecil. Tapi lama-lama keterusan sampai bikin stres dan utang di mana-mana. Waktu nemu Out Gamble, aku ngerasa dapet tempat buat mulai dari nol. Panduan dan motivasi yang dikasih bikin aku sadar kalau masih ada hidup yang lebih berharga dari sekadar menang taruhan."
    },
    {
        id: 2,
        img: person2,
        name: "Pandu Tria Adyatama",
        text: "Awalnya cuma iseng main judi online bareng teman, cuma taruhan kecil. Tapi lama-lama keterusan sampai bikin stres dan utang di mana-mana. Waktu nemu Out Gamble, aku ngerasa dapet tempat buat mulai dari nol. Panduan dan motivasi yang dikasih bikin aku sadar kalau masih ada hidup yang lebih berharga dari sekadar menang taruhan."
    },
    {
        id: 3,
        img: person3,
        name: "Muhammad Khadafi",
        text: "Awalnya cuma iseng main judi online bareng teman, cuma taruhan kecil. Tapi lama-lama keterusan sampai bikin stres dan utang di mana-mana. Waktu nemu Out Gamble, aku ngerasa dapet tempat buat mulai dari nol. Panduan dan motivasi yang dikasih bikin aku sadar kalau masih ada hidup yang lebih berharga dari sekadar menang taruhan."
    },
    {
        id: 4,
        img: person4,
        name: "Ashif Bumi Nusantara",
        text: "Awalnya cuma iseng main judi online bareng teman, cuma taruhan kecil. Tapi lama-lama keterusan sampai bikin stres dan utang di mana-mana. Waktu nemu Out Gamble, aku ngerasa dapet tempat buat mulai dari nol. Panduan dan motivasi yang dikasih bikin aku sadar kalau masih ada hidup yang lebih berharga dari sekadar menang taruhan."
    },
    {
        id: 5,
        img: person5,
        name: "Ciko Lakocik",
        text: "Awalnya cuma iseng main judi online bareng teman, cuma taruhan kecil. Tapi lama-lama keterusan sampai bikin stres dan utang di mana-mana. Waktu nemu Out Gamble, aku ngerasa dapet tempat buat mulai dari nol. Panduan dan motivasi yang dikasih bikin aku sadar kalau masih ada hidup yang lebih berharga dari sekadar menang taruhan."
    },
    {
        id: 6,
        img: person6,
        name: "Ganesha Hatibi",
        text: "Awalnya cuma iseng main judi online bareng teman, cuma taruhan kecil. Tapi lama-lama keterusan sampai bikin stres dan utang di mana-mana. Waktu nemu Out Gamble, aku ngerasa dapet tempat buat mulai dari nol. Panduan dan motivasi yang dikasih bikin aku sadar kalau masih ada hidup yang lebih berharga dari sekadar menang taruhan."
    },
    {
        id: 7,
        img: person7,
        name: "Tyan Es Kul Kul",
        text: "Awalnya cuma iseng main judi online bareng teman, cuma taruhan kecil. Tapi lama-lama keterusan sampai bikin stres dan utang di mana-mana. Waktu nemu Out Gamble, aku ngerasa dapet tempat buat mulai dari nol. Panduan dan motivasi yang dikasih bikin aku sadar kalau masih ada hidup yang lebih berharga dari sekadar menang taruhan."
    },
];

const tipsData = [
    {
        id: 1,
        title: "Langkah 1: Kenali Pemicu",
        text: "Sadari kapan dan kenapa kamu tergoda berjudi. Setelah tahu penyebabnya, isi waktu luangmu dengan hal yang lebih bermanfaat seperti olahraga, membaca, atau ngobrol dengan teman."
    },
    {
        id: 2,
        title: "Langkah 2: Batasi Akses",
        text: "Batasi akses ke situs atau aplikasi yang berisiko. Gunakan pengingat waktu atau blocker agar kamu tetap fokus pada hal positif."
    },
    {
        id: 3,
        title: "Langkah 3: Cari Dukungan",
        text: "Kalau mulai merasa kesulitan, mintalah bantuan dari orang terdekat atau komunitas pendukung. Dukungan kecil bisa jadi kekuatan besar untuk memulai hidup baru."
    },
];

const newsData = [
    {
        id: 1,
        img: imageNews1,
        title: "Tingkat Candu Judi Online Seperti Zat Adiktif",
        desc: "Kementerian Kesehatan Republik Indonesia (Kemenkes) menyatakan...",
        date: "Kamis 3  Desember, 2025",
        link: "https://kemkes.go.id/eng/tingkat-candu-judi-online-seperti-zat-adiktif"
    },
    {
        id: 2,
        img: imageNews2,
        title: "Kerugian Akibat Judi Online Bisa Capai Rp 1.000T",
        desc: "Laporan dari Kementerian Komunikasi dan Informatika menyebut bahwa kerugian...",
        date: "Selasa 5 Februari, 2025",
        link: "https://joglosemarnews.com/2025/05/jika-tak-diintervensi-dirjen-komdigi-potensi-kerugian-judi-online-capai-rp-1-000-t/"
    },
    {
        id: 3,
        img: imageNews3,
        title: "komdigi Kembali Tutup Situs dan Akun Judi",
        desc: "Kementerian Komunikasi dan Digital (Kemkomdigi) menutup situs dan akun...",
        date: "Jumat 15 Maret, 2025",
        link: "https://www.komdigi.go.id/berita/rilis-gpr/detail/lagi-kemkomdigi-takedown-situs-dan-akun-besar-terafiliasi-judol"
    },
];

export { aboutData, serviceData, actionData, testimonialData, tipsData, newsData }