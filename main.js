const paragraph = document.querySelector(".guul");
const paragraph2 = document.querySelector(".qasaaro");


const firstperson = () => {
    let randomNumber = Math.random()
    if (randomNumber < 0.5) {
        paragraph.innerHTML = 'You Succeed';
    } else {
        paragraph2.innerHTML = 'You are Looser'
    }
}
const secondperson = () => {
    let randomNumber = Math.random()
    if (randomNumber > 0.5) {
        paragraph.innerHTML = 'You Succeed'
    } else {
        paragraph2.innerHTML = 'You are Looser'
    }
}