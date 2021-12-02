const person = [`Guadalupe`, `Ollie`, `Aki`]

function writeCards() {
    let array = [];
    for (let i = 0; i < person.length; i++) {
        let message = (`Thank you, ${person[i]}, for the wonderful surprise gift!`)
        array.push(message);
    }
    return array;
}

writeCards(person);

function countDown() {
    let count = 11
    while (count > 0) {
        count -= 1;
    console.log(count);
    }
}

countDown();


