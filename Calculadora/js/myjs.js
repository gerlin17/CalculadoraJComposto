function calculaJuros() {
  var capital= $('#capital').val();
  var taxaJuros= $('#taxaJuros').val();
  var tempoAplicacao= $('#tempoAplicacao').val();
  var taxaJuros = taxaJuros/100;
  var montante = capital*Math.pow((1+taxaJuros),tempoAplicacao);
  var tot =  montante.toString();
  var men = tot/tempoAplicacao; 
  $('#total').val(tot);
  $('#mensal').val(men);
}