function ValidaDataset() {

	var parametro_carro = $('#carro').val();
	var parametro_dateRecursode = $('#dateRecursode').val();
	var parametro_dateRecursoate = $('#dateRecursoate').val();
	var parametro_aprovada = "SolicitacaoAprovada";

	console.log(parametro_carro);
	console.log(parametro_dateRecursode);
	console.log(parametro_dateRecursoate);
	console.log(parametro_aprovada);

	if (parametro_dateRecursoate > parametro_dateRecursode){
	
    var c1 = DatasetFactory.createConstraint("carro", parametro_carro, parametro_carro, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("dateRecursode", parametro_dateRecursode, parametro_dateRecursode, ConstraintType.SHOULD);
    var c3 = DatasetFactory.createConstraint("dateRecursoate", parametro_dateRecursoate, parametro_dateRecursoate, ConstraintType.SHOULD);
    var c4 = DatasetFactory.createConstraint("AprovaSolicitacao", parametro_aprovada, parametro_aprovada, ConstraintType.MUST);
    var constraints = new Array(c1,c2,c3,c4);

    console.log(c1);
    console.log(c2);
    console.log(c3);
    console.log(c4);
    console.log(constraints);

    
    try {
        var dataset = DatasetFactory.getDataset("DSReservadeCarro", null, constraints, null);
        console.log(dataset.values.length);
        
        console.log(constraints);
        
		if (dataset.values.length >= 1)
		{
			console.log("Recurso ja alocado");
			var myModal = FLUIGC.modal({
				title: 'Aviso',
				content: '<h3>Recurso alocado de &nbsp;&nbsp;'+ dataset.values[0]["dateRecursode"] + '&nbsp;&nbsp; até &nbsp;&nbsp;&nbsp;' + dataset.values[0]["dateRecursoate"],
				id: 'fluig-modal',
				actions: [{
					'label': 'Close',
					'autoClose': true
				}]
			}, function(err, data) {
				if(err) {
					// do error handling
				} else {
					// do something with data
				}
			});
			
		}
		//for(var i = 0; i < dataset.values.length; i++) {
		//	console.Log(dataset.values[i]["carro"]);
		//}
    } catch(erro) {
        console.log(erro);
    }
}
	else{
		console.log("Data invalida");
	}
}