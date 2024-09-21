const coding =  ["Python", "Js", "Java", "Ruby"];


coding.forEach(element => {
    console.log(element);
});
let langCollection = [
{
    langName : 'Java',
    langShort : 'java'
},
{
    langName : 'Python',
    langShort : 'py'
},
{
    langName : 'Javascript',
    langShort : 'Js'
}

]


langCollection.forEach( (element) => {
    console.log(`language is ${element.langName} and extension is ${element.langShort}`)
} )


