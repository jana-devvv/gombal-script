const messages = [
    'Kamu itu seperti matematika, bikin aku penasaran terus tiap hari!',
    'Kalau disuruh nyari harta karun, aku nggak perlu peta, karena harta karunku ada di senyumanmu.',
    'Aku nggak perlu jadi superhero, cukup jadi temen main kamu aja udah bikin dunia aku lebih seru!',
    'Kamu itu kayak es krim, setiap deket kamu rasanya manis dan bikin adem hati!',
    'Kalau main petak umpet, aku nggak akan susah nyari kamu, soalnya kamu selalu ada di pikiran aku.'
]

let index = 0
const messageElement = document.getElementById('message')
const audioElement = document.getElementById('click-sound')

function typeMessage(message, index = 0) {
    if(index < message.length) {
        messageElement.innerHTML += message.charAt(index)
        setTimeout(() => {
            typeMessage(message, index + 1)
        }, 100);
    }
}

function nextMessage() {
    if(index < messages.length) {
        audioElement.play()
        messageElement.innerHTML = "";

        typeMessage(messages[index])
        index++
    } else {
        messageElement.innerHTML = "Itu aja sih... Terima kasih udah mau baca 💖"

        document.getElementById('next-btn').style.display = "none"
    }
}