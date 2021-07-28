// T A S K  1
console.log('T A S K  1');
sumOfMin =(a, ...rest) =>{

    arr1=[a, ...rest];
    sum = 0;

    let minarr1= arr1.map(item => Math.min(...item));

    for (i=0; i<minarr1.length; i++) {
        sum += minarr1[i];
    };

    console.log(`sum of mins is: `);
    return sum;
};
console.log(sumOfMin([2, 3, 7], [5, 8, 11], [1, 7, 2], [5, 3, 2]));

// T A S K  2
console.log('T A S K  2');

function twoOldestAges(array2) {
    return [...new Set(array2)].sort((a,b) => b - a).slice(0,2).sort((a,b)=>a - b);
}

console.log(twoOldestAges([14, 5, 66, 9, 17]));

// T A S K  3
console.log('T A S K  3');

findTheShortestWord = (string) => {
    let shortestWord = string.split(' ').reduce((acc, cur) => acc.length <= cur.length ? acc : cur);
    return shortestWord;
};
console.log(findTheShortestWord('Look, this green frog just has jumped over the lazy fox!'));