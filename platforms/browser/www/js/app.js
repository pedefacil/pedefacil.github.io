$(document).ready(function() {
    $('select').material_select();
    $('ul.tabs').tabs();
});
        

function showToast(){
	//console.log('test');
//	Materialize.toast('Mensagem enviada', 4000);
 	
	console.log('chamando ajax');
 	$.ajax({
 		
		url: 'http://localhost:8080/selectProduto',

		success: function (resposta){
			Materialize.toast(resposta, 2000);
			console.log(resposta);
		},

		error: function(erro){
			Materialize.toast(erro.resposeText, 3000, 'red-text');
			console.log(erro.resposeText);
		}

	});
}



