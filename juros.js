	/* Função para afetuar o cálculo dos juros simples  */
	function jurosimples() {
		var capital = document.getElementById('capital').value;
		var txjuros = parseFloat(document.getElementById('txjuros').value);
		var tmeses = document.getElementById('tmeses').value;

		var jurosim = capital *(txjuros/100) * tmeses;

		
		document.getElementById('resultado').innerHTML = "Juros Simples R$:" + jurosim ;
		
		verificar();  
				
	}

        /* Função para afetuar o cálculo dos juros compostos  */
	function juroscompostos() {
		var capital = document.getElementById('capital').value;
		var txjuros = parseFloat(document.getElementById('txjuros').value);
		var tmeses = document.getElementById('tmeses').value;
		var convert = txjuros/100;
		var montante = capital * Math.pow((1+convert), tmeses);

		document.getElementById('compostos').innerHTML ="Juros Compostos R$:" + montante.toFixed(2); 
	}

	function verificar() {
		if (form1.capital.value=="" || form1.txjuros.value=="" || form1.tmeses.value=="") {
			alert("favor preencher");
			return false;
		} else {
			return true;
		}
	}
