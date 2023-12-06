// Using Arrow Functions
const main = (a) => {
    return outer = (b) => {
        return inner = (c) => {
            console.log(a,b,c)
        }
    }
}
main("hello")(4)("world")

// Using Function Declaration
function main(a){
    return function outer(b){
        return function inner(c='test'){
            console.log(a,b,c)
        }
    }
}
main("hello")(4)("world")