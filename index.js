// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    return [...cats.slice(0, 3), 'Broom', ...cats.slice(3)];
}

function prependCat(name){
    return [...cats.slice(0,0), 'Arnold', ...cats.slice(0)];
}

function removeLastCat(name) {
        removeLastCat = cats.slice(0, -1);
        return removeLastCat;
    }

function removeFirstCat(name) {
        removeFirstCat = cats.slice(1);
        return removeFirstCat;
    }


