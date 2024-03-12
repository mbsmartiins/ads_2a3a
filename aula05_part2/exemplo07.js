/*IMC peso / altura(altura*altura)
anaixo de 18.5 = desnutrição
entre 18.5 e 25 = peso normal
entre 25 e 30 = sobrepeso
entre 30 e 35 = obesidade
entre 35 e 40 = obesidade II
acima de 40 = obesidade III 
*/

calcularIMC(45, 1.73)


function calcularIMC(argPeso, argAltura) {
    let imc 
    imc = argPeso / (argAltura ** 2)
    console.log(imc)
}
