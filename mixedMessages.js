
const message = {
    message1: ['Trust the timing of your Life', 'Wherever life plants you,bloom with grace', 'Say yes to new adventures', 'You are your home', 'You do not find the happy life.You make it'],
    message2: ['Expect nothing,appreciate everything', 'Mindset is everything', 'You get,what you give', 'Keep going... everything comes to you at right time', 'Be happy for this moment.this moment is your life'],
    message3: ['Do not lose your present to your past', 'Your best teacher is your last mistake', 'In the end, we only regret the chances we did not take', 'There is beauty in simplicity', 'Hope is a waking dream']
};
/*function generateMessages(arr1,arr2,arr3){
    let result=[];
    
    let m1=Math.floor(Math.random()*arr1.length);
   
    result.push(arr1[m1]);
    let m2=Math.floor(Math.random()*arr2.length);
    result.push(arr2[m2]);
    let m3=Math.floor(Math.random()*arr3.length);
    result.push(arr3[m3]);
   //console.log(result);
    return result;

    
}*/
function generateRandomNumber(num) {
    let randomNum = Math.floor(Math.random() * num);
    return randomNum;
}


//let messages=generateMessages(message1,message2,message3);

/*messages.forEach(element => {
    console.log(element);
});*/

let result = [];
for (let msg in message) {
    let index = generateRandomNumber(message[msg].length);
    switch (msg) {
        case 'message1':
            result.push(message[msg][index]);
            break;
        case 'message2':
            result.push(message[msg][index]);
            break;
        case 'message3':
            result.push(message[msg][index]);
            break;
        default:
            result.push('there is not enough info');
    }
}

function displayMessage(result){
result.forEach(element => {
    console.log(element);
});
}

displayMessage(result);