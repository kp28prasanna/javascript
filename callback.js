function main(callback){
    console.log('main function called')
    callback()
}
function xyz(){
    console.log('testing')
}
main(xyz)