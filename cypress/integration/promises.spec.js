it ('sem testes, ainda', () => {})

// const getSomething = () => 10

// const system = () => {
//     console.log('init');
//     const something = getSomething();
//     console.log(`Something is ${something}`);
//     console.log('end')
// }

// system();

// const getSomething = callback => {
//     setTimeout(() => {
//         callback(12);
//     }, 1000)
// }

// const system = () => {
//     console.log('init');
//     getSomething(some => console.log(`Something is ${some}`));
//     console.log('end')
// }

// system();

const getSomething = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
}

const system = () => {
    console.log('init');
    getSomething().then(some => {
        console.log(`Something is ${some}`)
    })
    
    console.log('end')
}

system();