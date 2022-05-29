function calcularTicket($value){
var cantidad = parseInt(document.getElementById('Cantidad').value);
var descuentoEstudiante = cantidad * 200 * 0.8;
var descuentoTrainee = cantidad * 200 * 0.5;
var descuentoJunior = cantidad * 200 * 0.15;
var entradaEstudiante = cantidad * 200 - descuentoEstudiante;
var entradaTrainee = cantidad * 200 - descuentoTrainee;
var entradaJunior = cantidad * 200 - descuentoJunior;  
      
    if($value=="Estudiante")
    {document.getElementById('Total').value = entradaEstudiante}
    else if($value=="Trainee")
    {document.getElementById('Total').value = entradaTrainee}
    else if($value=="Junior")
    {document.getElementById('Total').value = entradaJunior}
}
