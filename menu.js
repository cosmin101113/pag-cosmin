function desplegarPlegarMenu()
		{
			
			if(document.getElementsByTagName("nav")[0].style.top !="60px" )
			{
				
				document.getElementsByTagName("nav")[0].style.top = "60px";
				document.getElementById("boton").innerHTML="<i class='fas fa-minus'></i>";
				document.getElementById("boton").style.color = "#A2A2A2";

				
			}
			else
			{
				document.getElementsByTagName("nav")[0].style.top = "-11.9px";
				document.getElementById("boton").innerHTML="<i class='fas fa-plus'></i>";
				document.getElementById("boton").style.color = "#A2A2A2";

			}	
		}
		function desplegarMenu()
		{
				
			if(document.getElementsByTagName("nav")[0].style.top !="60px" )
			{
				document.getElementsByTagName("nav")[0].style.top = "60px";
				document.getElementById("boton").innerHTML="<i class='fas fa-minus'></i>";
				document.getElementById("boton").style.color = "#A2A2A2";
				
			}
			
		}