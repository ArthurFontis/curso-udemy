console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome= 'Bola'
//obj1['nome']= 'Bola2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //this ficou visivel para escopos de fora
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec() // nao precisou do console, pois já chamei la na funcao