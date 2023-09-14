let arr = ["hello", "world", "java", "hello", "java", "hi", "he"]

function countWord(p){
    let count = {};
    p.forEach((item) => {
        if (count[item]){
            count[item]++
        } else {
            count [item] = 1
        }
    })

    return count;
}

console.log(countWord(arr));