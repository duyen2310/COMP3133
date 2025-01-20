console.log("Week 1 - BUffer Examples")

let b1= Buffer.from('A Hello World')
console.log(b1)
console.log(b1.toString())
console.log(b1.length)

b1[13]='Z'
console.log(b1[13])

let b2= Buffer.alloc(15)
console.log(b2)
b2[0]=65
b2[1]=66
b2[2]=0x67

console.log(b2)
console.log(b2.toString())

b2.fill('A')
console.log(b2.toString())

b1.copy(b2, 2, 5,10 )
console.log(b2.toString())//A hello Wo

let b3=Buffer.from('TEST 🤡')
console.log(b3)
console.log(b3.length)
console.log(b3.toString())

b2.write('Canada 🦦')
b3.copy(b2,11, 5, 9  )

console.log(b2.toString())


for (c of b2.entries()){
    console.log(c)
}

console.log(Buffer.isBuffer(b2))
console.log(Buffer.isBuffer(100))

const objJSON =b2.toJSON()
console.log(objJSON.data)

let b4 = Buffer.from(objJSON.data)
console.log(b4.toString())


let bufferArray = new ArrayBuffer(10); // Create an ArrayBuffer with 12 bytes

let uint8View = new Uint8Array(bufferArray); // Create a Uint8Array view (1 byte per element)
uint8View[0] = 65; // Add 65 to position 0

console.log(bufferArray)


let b5 = Buffer.concat([b1, b2])
console.log(b5.toString())


let b6 = Buffer.alloc(15)
// b6.write()

console.log(b6.toString())
console.log(b6)