
function calcular_area()
{
    const base_mayor=document.getElementById("base1").value 
    const base_menor=document.getElementById("base2").value 
    const altura=document.getElementById("altura").value
    
    const parte1= parseInt(base_mayor)+parseInt(base_menor)
    const parte2=parte1*altura
    const resultado= parte2/2 
}