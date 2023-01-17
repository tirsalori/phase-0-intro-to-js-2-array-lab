// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}

function appendCat(name){
    const newCats = [...cats,name]
    return newCats
}

function prependCat(name){
    const newerCats = [name,...cats]
    return newerCats
}

function removeLastCat(){
    const lessCats = cats.slice(0,-1)
    return lessCats
}

function removeFirstCat(){
    const lesserCats = cats.slice(1)
    return lesserCats
}