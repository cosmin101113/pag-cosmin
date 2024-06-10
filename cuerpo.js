var tiempoPermanecia = 2000;
		var contador = 1;
		/*definimos los 3 manejadores de evento*/
		function AbrirVentanaModal(abrir)
		{
			
			if(abrir == "Verde")
			{	
			var cModal=document.getElementById("ventanaModalVerde");/*cuando yo quiero que se abra tengo asignarle la clase visible*/
			}
			else if( abrir =="Azul")
			{
				var cModal=document.getElementById("ventanaModalAzul");
			}	
			else
			{
				var cModal=document.getElementById("ventanaModalNaranja");
			}	
			cModal.classList.add("visible"); /*le asigno la clase visible*/
			
		}

		
		function cerrarVentanaModal(cerrar)

		{

			
			if (cerrar ="Verde")
			{	
			var cModal=document.getElementById("ventanaModalVerde");
			cModal.classList.remove("visible");
			}
			if (cerrar ="Azul")
			{
			var cModal=document.getElementById("ventanaModalAzul");
			cModal.classList.remove("visible");
			}
			if(cerrar ="Naranja") 
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
