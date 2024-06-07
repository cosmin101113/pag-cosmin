var tiempoPermanecia = 2000;
		var contador = 1;

		
		var arrayImagenes = new Array ();
		arrayImagenes[0] =["",""]; 
		arrayImagenes[1] =["imagenes/foto1.png","foto1"];
		arrayImagenes[2] =["imagenes/foto2.png","foto2"];
		arrayImagenes[3] =["imagenes/foto3.png","foto3"];
		arrayImagenes[4] =["imagenes/foto4.png","foto4"];
		arrayImagenes[5] =["imagenes/foto5.jpg","foto5"];


		function incrementarContador()
		{
			//document.getElementById("visorContador").innerHTML= contador + "/" + (arrayImagenes.length - 1) + ": " + arrayImagenes[contador][1];
			document.getElementById("visorImagen").src= arrayImagenes[contador][0];

			if (contador == (arrayImagenes.length-1))
			{
				contador=1;

			}
			else
			{	
				contador++;

			}

		}

		/*definimos los 3 manejadores de evento*/
		function AbrirVentanaModal(ciudad)
		{
			
			if(ciudad == "Verde")
			{	
			var cModal=document.getElementById("ventanaModalVerde");/*cuando yo quiero que se abra tengo asignarle la clase visible*/
			}
			else if( ciudad =="Azul")
			{
				var cModal=document.getElementById("ventanaModalAzul");
			}	
			else
			{
				var cModal=document.getElementById("ventanaModalNaranja");
			}	
			cModal.classList.add("visible"); /*le asigno la clase visible*/
			
		}

		
		function cerrarVentanaModal(ciudad)

		{

			
			if (ciudad ="Verde")
			{	
			var cModal=document.getElementById("ventanaModalVerde");
			cModal.classList.remove("visible");
			}
			if (ciudad ="Azul")
			{
			var cModal=document.getElementById("ventanaModalAzul");
			cModal.classList.remove("visible");
			}
			if(ciudad ="Naranja") 
			{
				var cModal=document.getElementById("ventanaModalNaranja");
				cModal.classList.remove("visible");
			}

			

			
		}
		

	
	
		




		function popitupformulario(url)
		{
			newwindow=window.open(url,'name','height=910,width=750, top=175,left=750'); 

			if (window.focus) {newwindow.focus()}
			return false;
		}