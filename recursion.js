const flattenArray = (arr) =>{
    let result = []
    for(const item of arr){
        if(Array.isArray(item)){
            result = [...result,...flattenArray(item)]
        }else{
            result.push(item)
        }
    }
    return result
}
console.log(flattenArray([1,[2,3],[[4,5],[6]]]))