function calcular_X1 (d1,d2,d3)
{
    const parte1= Math.pow(d2,2)-(4*d1*d3)
    const parte2= Math.sqrt(parte1)
    const parte3= -(d2) + parte2
    const parte3b= -(d2) - parte2
    const resultado1 = (parte3/(2 * d1))
    const resultado2= (parte3b/(2*d1))
    return resultado1.toFixed(2) +' '+ resultado2.toFixed(2)
}
function mostrar_resultado (){
    const dato1 = document.getElementById("inp_a").value
    const dato2 = document.getElementById("inp_b").value 
    const dato3 = document.getElementById("inp_c").value
    const resultado_calc=calcular_X1(dato1,dato2,dato3)
    alert(resultado_calc)
}
