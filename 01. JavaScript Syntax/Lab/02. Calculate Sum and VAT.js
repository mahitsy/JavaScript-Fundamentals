function total(input) {
    let sum = 0

    for (let price of input) {
        sum+=price
    }

    console.log(`sum = ${sum}`)
    console.log(`VAT = ${sum*0.2}`)
    console.log(`total = ${sum*1.20}`)
}

total([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445])