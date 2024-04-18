import { add, Checkout } from "./gds";
describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(add(10, 5)).toBe(15);
  });
  it("should return 5 for add(2,3)", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("checkout functionallity", ()=>{
  it("should return 0 when no products are added",()=>{
    const checkout = new Checkout()
    expect(checkout.total()).toBe(0)
    
  })
  it("should return  3.11 when passed FR1",()=>{
    const checkout =  new Checkout()
    checkout.scan("FR1")
    expect(checkout.total()).toBe(3.11)
  })
  it("should implement bogof on fruit tea",()=>{
    const checkout = new Checkout()
    checkout.scan("FR1")
    expect(checkout.total()).toBe(3.11)
    checkout.scan("FR1")
    expect(checkout.total()).toBe(3.11)
    checkout.scan("FR1")
    expect(checkout.total()).toBe(6.22)
    checkout.scan("FR1")
    expect(checkout.total()).toBe(6.22)
    checkout.scan("FR1")
    expect(checkout.total()).toBe(9.33)

  })
  it("should charge 4.50 if 3 or more strawberries are bought",()=>{
    const checkout = new Checkout()
    checkout.scan("SR1") //1
    checkout.scan("SR1")  //2
    expect(checkout.total()).toBe(10)
    checkout.scan("SR1")  //3
    expect(checkout.total()).toBe(13.50)
    checkout.scan("SR1")  //4
    expect(checkout.total()).toBe(18)
    checkout.scan("SR1")  //5
    expect(checkout.total()).toBe(22.50)

  })
})


