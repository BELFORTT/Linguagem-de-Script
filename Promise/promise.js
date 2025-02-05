const condition = true

const promise = new Promise((resolve, reject) => {

    if (condition) {
        resolve("Deu bom!")
    } 
    
    else {
        reject("Deu ruim!")
    }
})


function soma(a, b){
    return a + b
}

const promiseSoma = new Promise((resolver, rejeitar) => {
const a = -5
const b = 3

if (a + b >= 0) resolver(a + b)
else rejeitar("Número negativo")
})

promiseSoma
    .then((valor) => 
    {
        console.log(valor)
    }, 
    err => {
        console.log("Erro! " + err)
    })
    .catch(() => {console.log("Se caiu aqui, houve algo de errado")})
    .finally(
        /* fechar conexão */
    );


function sumPromise(a, b) {
    const promiseSoma = new Promise((resolver, rejeitar) => {
        setTimeout(
            () => {
                console.log("Primeiro codigo antes da promessa"),
                console.log("Segundo codigo antes da promessa")
            }, 3000
        )
        if (a + b >= 0) resolver(a + b)
        else rejeitar("Número negativo")
    })

    return promiseSoma
}

sumPromise(3, 9)
    .then(valor => sumPromise(valor, 10))
    .then(valor => console.log(valor))
    .catch(error => console.log("Erro: " + error))
    .finally()

setTimeout(
    () => {
        console.log("Terceiro codigo dps da promessa"), 4000
    }
)

/*Async e Await*/

async function sumPromiseAsync(a, b) {
    const promiseSoma = new Promise((resolver, rejeitar) => {
        setTimeout(
            () => {
                if (a + b >= 0) resolver(a + b)
                else rejeitar("Número negativo")
            }, 3000
        )
    })

}

async function print(){
    try{
        const resultado = await sumPromiseAsync(5, -10)
    } catch (error) {
        console.log("Erro!")
    } finally{
        console.log("fechado")
    }
}

print()
console.log("codigo depois do await")