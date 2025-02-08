const product = []

function insert(arr, product){
    if(!arr || !product) return

    try{
        if(arr.incudes(product)){
            throw new Error("Product Exists")
        }

            product.push(product)
    }catch(error){
        console.error(error.message, error.trace)
        throw error
}
}

try{
    insert(product, "Apples")
    console.log(product)
    insert(product, "Apples")
}catch(error){
  console.log(error.message)
}