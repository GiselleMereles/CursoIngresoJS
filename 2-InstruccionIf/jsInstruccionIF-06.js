function mostrar()
{
	let edad;

	edad = txtIdEdad.value
	edad = parseInt(edad);
	
	if(edad>17)
	{
		alert("La persona es mayor de edad");
	}
	else 
	{
		if(edad>12)
		{
			alert("La persona es adolescente");
		}	
		else
		{
			alert("La persona es un niño")
		}

	}	




}
//Al ingresar una edad debemos informar
// si la persona es mayor de edad (mas de 18 años) 
//o adolescente (entre 13 y 17 años) o niño (menor a 13 años).