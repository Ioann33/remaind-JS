let human = {
    name: 'vasya',
    secondName: 'pupko',
    child: {
        name: 'kolya',
        secondName: 'pupko',
        car: {
            brand: 'hyundai',
            model: 'tucson',
        },
        child: {
            name: 'olya',
            secondName: 'zubko',
            child: {
                name: 'aleg',
                secondName: 'zubko',
                bike: {
                    brand: 'harley',
                    model: 'fat boy',
                },
                child: {
                    name: 'natasha',
                    secondName: 'sapko',
                }
            }
        }
    }
}

function description(obj, prefix = '') {
    let result = '';

    for (let key in obj){
        result+= prefix;
        if (typeof obj[key] === 'object'){

            result += `${key} : \n ${description(obj[key], prefix+'-')}`;
        }else {
            result += `${key} : ${obj[key]}\n`;
        }

    }
    return result;
}

alert(description(human));
