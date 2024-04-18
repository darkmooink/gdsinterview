export function add(x: number, y: number): number {
  return x + y;
}


export class Checkout{
  basket :any
  constructor(){
    this.basket = {
      FR1: {qty: 0, price: 3.11},
      SR1: {qty: 0, price: 5},
      CF1: {qty: 0, price: 11.23}
    }
  }

  scan(item:string) {
    this.basket[item].qty = this.basket[item].qty+1
  }

  total():number{
    let total = 0
    for(const item in this.basket){
      total += this.calcTotalPriceOfItem(item, this.basket[item].qty, this.basket[item].price)
    }

    return total
  }

  calcTotalPriceOfItem(code:string, qty:number,  price:number):number{
    let total:number
    if(code === "FR1"){
      total = Math.ceil(qty/2)*price
    }else if(code === "SR1" && qty >= 3){
      total = qty * 4.5
    }

    
    else{
      total = price*qty
    }
    return total
  }

}