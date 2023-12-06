// Closure example1
function x(){
    const a = 7
    function y(){
        console.log(a)
    }
    y()
}
x()


// closure example2
function x(){
    const a = 7
    return function y(){
        console.log(a)
    }
}
// const z = x()
x()() //output is 7

