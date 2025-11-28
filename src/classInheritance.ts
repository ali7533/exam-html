class car{
    brand:string
    constructor(brand:string){
        this.brand=brand
    }
    returnBrand(){
        return this.brand
    }
}
class model extends car{
    model:string
    constructor(brand:string,model:string){
        super(brand)
        this.model=model
    }
    printCarDe(){
        console.log(this.returnBrand()+" "+this.model)
    }
}
let car1=new model("ford",'12')
car1.printCarDe()