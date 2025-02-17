import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Siapa nama kamu? ", (nama) => {
    console.info(`Hallo ${nama}`)
    input.question("Jurusan kamu? ", (Jurusan) => {
        console.info(`Jurusan ${Jurusan}`)
        input.question("Universitas kamu? ", (Universitas) => {
          console.info(`univ ${Universitas}`)
            input.question("Umur kamu? ", (Umur) => {
                console.info(`umur ${Umur}`)
                input.close();
            })
        })
    })              
})