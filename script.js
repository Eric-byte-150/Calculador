function calcular(n1,n2) {
    n1= parseFloat(document.getElementById("n1").value)
    n2= parseFloat(document.getElementById("n2").value)
    

    selector=document.getElementById("selector").value


    switch (selector) {
        case'+':
            calculo=(n1+n2)
            if (Number.isNaN(calculo)) {
                document.getElementById("Resultado").innerHTML=`Insira um número válido`
            }
            else{
                document.getElementById("Resultado").innerHTML=`O resultado da soma de ${n1} + ${n2} é ${calculo}`
            }
            break

            case'-':
            calculo=(n1-n2)
            if (Number.isNaN(calculo)) {
                document.getElementById("Resultado").innerHTML=`Insira um número válido`
            }
            else{
                document.getElementById("Resultado").innerHTML=`O resultado da subtração de ${n1}-${n2} é ${calculo}`
            }

            break

            case'/':
            calculo=(n1/n2)
            document.getElementById("Resultado").innerHTML=`O resultado da divisão de ${n1} / ${n2} é ${calculo}`
            if (Number.isNaN(calculo)) {
                document.getElementById("Resultado").innerHTML=`Insira um número válido`
            }
            else{
                document.getElementById("Resultado").innerHTML=`O resultado da divisão de ${n1} / ${n2} é ${calculo}`}
            break

            case'*':
            calculo=(n1*n2)
            if (Number.isNaN(calculo)) {
                document.getElementById("Resultado").innerHTML=`Insira um número válido`
            }else{
                document.getElementById("Resultado").innerHTML=`O resultado da Multiplicação de ${n1} * ${n2} é ${calculo}`
            }
                
            break
        
    }

    
}



