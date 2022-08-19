// Code your solutions in this file
const countDown = (number) => {
    let no = number;
    while (no >= 0){
        console.log(no--)
    }
}

function writeCards(names, content){
    const messages = []

    for(let x = 0; x < names.length; x++){
        const message = `Thank you, ${names[x]}, for the wonderful ${content} gift!`
        messages.push(message)
    }

    // names.forEach((name) => {
    //     let message = `Thank you, ${names}, for the wonderful ${content} gift!`
    //     messages.push(message)
    // });

    return messages;
}

console.log(writeCards(['Chalrs', 'Scah'], "crazy")) 