export function add(x: number, y: number): number {
  return x + y;
}

export function mult3or5(upto:number):number{
  if (upto<0) return 0

  let total:number=0
  for(let x=1; x<upto; x++){
    if(x%3===0 || x%5===0){
      total += x
    }
  }
  return total
}

export function spinWords(sentance:string):string{
  const words = sentance.split(" ")
  return words.map((word)=>{
    if(word.length>5){
      return spinString(word)
    }else{
      return word
    }
  }).join(" ")
}
export function spinString(input:string):string{
  input.split("").reverse().join("")
  return input.split("").reverse().join("")
}

export function squareDigits(input:number):number{
  if (input <0)input * -1

  const inputDigits = input.toString().replace(/\D/,"").split("")
  const inputSquares = inputDigits.map((digit)=>{
    const digitNum = Number.parseInt(digit)
    return digitNum ** 2
  }
  )
  return Number.parseInt(inputSquares.join(""))
}

export function whoLikesIt(who:string[]):string{
  if(who.length === 0) return "no one likes this"
  if(who.length === 1) return `${who[0]} likes this`
  if(who.length === 2) return `${who[0]} and ${who[1]} like this`
  if(who.length === 3) return `${who[0]}, ${who[1]} and ${who[2]} like this`
  if(who.length > 3) return `${who[0]}, ${who[1]} and ${who.length-2} others like this`
  return ""
}

export function arrayDiff(arr1:number[], arr2:number[]):number[]{
  return arr1.filter((num)=>{
    console.log(`${num} is not in ${arr2} = ${!arr2.includes(num)}`)
    return !arr2.includes(num)
  })
}