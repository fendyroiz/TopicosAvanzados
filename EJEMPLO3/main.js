const vowels = ['a', 'e','i','o','u']

//.map 
const newVowels = vowels.map((vowel) => {
    return vowel.toUpperCase()
})

console.log(newVowels);