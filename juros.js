	function jurosimples() {
		var capital = document.getElementById('capital').value;
		var txjuros = parseFloat(document.getElementById('txjuros').value);
		var tmeses = document.getElementById('tmeses').value;

		var jurosim = capital *(txjuros/100) * tmeses;

		document.getElementById('resultado').innerHTML = "Juros Simples R$:" + jurosim;
	}

	function juroscompostos() {
		var capital = document.getElementById('capital').value;
		var txjuros = parseFloat(document.getElementById('txjuros').value);
		var tmeses = document.getElementById('tmeses').value;
		var convert = txjuros/100;
		var montante = capital * Math.pow((1+convert), tmeses);

		document.getElementById('compostos').innerHTML ="Juros Compostos R$:" + montante.toFixed(2); 
	}