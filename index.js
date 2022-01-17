const people = [`Guadalupe`, `Ollie`, `Aki`]

function writeCards(person) {
    let newArray = [];
    for (let i = 0; i < person.length; i++) {
        let message = `Thank you, ${person[i]}, for the wonderful surprise gift!`
        newArray.push(message)
    }
    return newArray;
}

writeCards(people);

function countDown() {
    let number = 11
    while (number > 0) {
        number -= 1
        console.log(number)
    }
}
countDown();





























//function writeCards(person) {
  //  let array = [];
    //for (let i = 0; i < person.length; i++) {
      //  let message = (`Thank you, ${person[i]}, for the wonderful surprise gift!`)
        //array.push(message);
    //}
    //return array;
//}

//writeCards(people);

//function countDown() {
  //  let count = 11
    //while (count > 0) {
      //  count -= 1;
    //console.log(count);
    //}
//}

//countDown();


