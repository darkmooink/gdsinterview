import { add, arrayDiff, mult3or5, spinString, spinWords, squareDigits, whoLikesIt } from "../src/calc";
describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(add(10, 5)).toBe(15);
  });
  it("should return 5 for add(2,3)", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("test mltiplying all numbers upto x that are a multiple of 3 or 5", ()=>{
  const testData = [{given:10, answer:23},
    {given:-10, answer:0}]
  testData.forEach((test)=>{
    it(`should return ${test.answer} if given ${test.given}`, ()=>{
      expect(mult3or5(test.given)).toBe(test.answer)
    })
  })
})


describe("test spinning words of 5 or more chars", ()=>{
  const testData = [{given:"Hey fellow warriors", answer:"Hey wollef sroirraw"},
  {given:"This is a test", answer:"This is a test"},
  {given:"This is another test", answer:"This is rehtona test"}]
  testData.forEach((test)=>{
    it(`should return ${test.answer} if given ${test.given}`, ()=>{
      expect(spinWords(test.given)).toBe(test.answer)
    })
  })
})
describe("test spinning strings", ()=>{
  const testData = [{given:"fellow", answer:"wollef"},
  {given:"warriors", answer:"sroirraw"},
  {given:"another", answer:"rehtona"}]
  testData.forEach((test)=>{
    it(`should return ${test.answer} if given ${test.given}`, ()=>{
      expect(spinString(test.given)).toBe(test.answer)
    })
  })
})

describe("test spinning strings", ()=>{
  const testData = [{given:9119, answer:811181},
    {given:765, answer:493625},
    {given:-765, answer:493625},
    {given:7.65, answer:493625}]
  testData.forEach((test)=>{
    it(`should return ${test.answer} if given ${test.given}`, ()=>{
      expect(squareDigits(test.given)).toBe(test.answer)
    })
  })
})


describe("test spinning strings", ()=>{
  const testData = [{given:[], answer:"no one likes this"},
  {given:["Peter"], answer:"Peter likes this"},
  {given:["Jacob", "Alex"], answer:"Jacob and Alex like this"},
  {given:["Max", "John", "Mark"], answer:"Max, John and Mark like this"},
  {given:["Alex", "Jacob", "Mark", "Max"], answer:"Alex, Jacob and 2 others like this"}]
  testData.forEach((test)=>{
    it(`should return ${test.answer} if given ${test.given}`, ()=>{
      expect(whoLikesIt(test.given)).toBe(test.answer)
    })
  })
})

describe("test spinning strings", ()=>{
  const testData = [{given:[[1,2], [2]], answer:[1]},
    {given:[[1,2,2,2,3],[2]], answer:[1,3]},
  ]
  testData.forEach((test)=>{
    it(`should return ${test.answer} if given ${test.given}`, ()=>{
      expect(arrayDiff(test.given[0],test.given[1])).toEqual(test.answer)
    })
  })
})