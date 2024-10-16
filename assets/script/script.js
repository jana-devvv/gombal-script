const messages = [
    'Kamu itu seperti matematika, bikin aku penasaran terus tiap hari!',
    'Kalau disuruh nyari harta karun, aku nggak perlu peta, karena harta karunku ada di senyumanmu.',
    'Aku nggak perlu jadi superhero, cukup jadi temen main kamu aja udah bikin dunia aku lebih seru!',
    'Kamu itu kayak es krim, setiap deket kamu rasanya manis dan bikin adem hati!',
    'Kalau main petak umpet, aku nggak akan susah nyari kamu, soalnya kamu selalu ada di pikiran aku.'
];

let currentMessageIndex = 0;
const messageElement = document.getElementById('message');
const audioElement = document.getElementById('click-sound');
const nextButton = document.getElementById('next-btn');
let isTyping = false; // Flag untuk menghindari spam click

function typeMessage(message, index = 0) {
    if (index === 0) {
        messageElement.innerHTML = ''; // Reset pesan di awal
    }

    if (index < message.length) {
        messageElement.innerHTML += message.charAt(index);
        setTimeout(() => {
            typeMessage(message, index + 1);
        }, 100);
    } else {
        // Setelah pesan selesai diketik, enable tombol
        isTyping = false;
        nextButton.disabled = false;
    }
}

function nextMessage() {
    if (!isTyping && currentMessageIndex < messages.length) {
        isTyping = true; // Set flag menjadi true saat mulai mengetik
        nextButton.disabled = true; // Disable tombol sementara

        audioElement.play(); // Mainkan suara

        typeMessage(messages[currentMessageIndex]);
        currentMessageIndex++;
    } else if (currentMessageIndex >= messages.length) {
        // Jika pesan terakhir sudah selesai, tampilkan pesan akhir
        messageElement.innerHTML = "Itu aja sih... Terima kasih udah mau baca 💖";
        nextButton.style.display = "none"; // Sembunyikan tombol setelah semua pesan ditampilkan
    }
}

// Event listener untuk tombol
nextButton.addEventListener('click', nextMessage);