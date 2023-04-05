// Complete the solution so that the function will break up camel casing, using a space between words.

const solution = (str) => {
    let arr = str.split('')
    let spacing = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            spacing.push(' ')
            spacing.push(arr[i])
        } else {
            spacing.push(arr[i])
        }
    }

    return spacing.join('')
}


console.log(solution('camelCasingTest'))