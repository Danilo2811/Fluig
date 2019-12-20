function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
	var atv      = getValue("WKNumState");
	log.info("###### ATIVIDADE ATUAL (afterStateEntry): " + atv);
	
	if(atv == 4){
		var parametro_carro = hAPI.getCardValue("carro");
		var parametro_dateRecursode = hAPI.getCardValue("dateRecursode");
		var parametro_dateRecursoate = hAPI.getCardValue("dateRecursoate");
		var parametro_aprovada = "SolicitacaoAprovada";

		log.info(parametro_carro);
		log.info(parametro_dateRecursode);
		log.info(parametro_dateRecursoate);
		log.info(parametro_aprovada);

		if (parametro_dateRecursoate > parametro_dateRecursode){

			var c1 = DatasetFactory.createConstraint("carro", parametro_carro, parametro_carro, ConstraintType.MUST);
			var c2 = DatasetFactory.createConstraint("dateRecursode", parametro_dateRecursode, parametro_dateRecursode, ConstraintType.SHOULD);
    		var c3 = DatasetFactory.createConstraint("dateRecursoate", parametro_dateRecursoate, parametro_dateRecursoate, ConstraintType.SHOULD);
    		var c4 = DatasetFactory.createConstraint("AprovaSolicitacao", parametro_aprovada, parametro_aprovada, ConstraintType.MUST);
			var constraints = new Array(c1,c2,c3,c4);

			log.info("###### ATIVIDADE constraints (afterStateEntry): " + constraints);
			
			var dataset = DatasetFactory.getDataset("DSReservadeCarro", null, constraints, null);
			log.info("###### ATIVIDADE Adataset (afterStateEntry): " + dataset.values.length);
				
			
			
			
			//var teste = false;

				if (dataset.values.length > 1){
				//teste = true;
					throw "Carro já esta alocado para esta data !!!";
				}
				//else{
					
				//}
			//	if (!teste) {
					
			//	}

		}

		else{
			throw "A data inicio e maior que a data final.";
		}

	}
	if(atv == 5 && hAPI.getCardValue("AprovaSolicitacao") != "SolicitacaoReprovada" && hAPI.getCardValue("AprovaSolicitacao") != "SolicitacaoReavaliar"){
		
		var parametro_carro = hAPI.getCardValue("carro");
		var parametro_dateRecursode = hAPI.getCardValue("dateRecursode");
		var parametro_dateRecursoate = hAPI.getCardValue("dateRecursoate");
		var parametro_aprovasolicitacao = hAPI.getCardValue("AprovaSolicitacao");
		

		log.info(parametro_carro);
		log.info(parametro_dateRecursode);
		log.info(parametro_dateRecursoate);
		log.info(parametro_aprovada);

		if (parametro_dateRecursoate > parametro_dateRecursode){

			var c1 = DatasetFactory.createConstraint("carro", parametro_carro, parametro_carro, ConstraintType.MUST);
			var c2 = DatasetFactory.createConstraint("dateRecursode", parametro_dateRecursode, parametro_dateRecursode, ConstraintType.SHOULD);
    		var c3 = DatasetFactory.createConstraint("dateRecursoate", parametro_dateRecursoate, parametro_dateRecursoate, ConstraintType.SHOULD);
    		var c4 = DatasetFactory.createConstraint("AprovaSolicitacao", parametro_aprovasolicitacao, parametro_aprovasolicitacao, ConstraintType.MUST);
			var constraints = new Array(c1,c2,c3,c4);

			log.info("###### ATIVIDADE constraints (afterStateEntry): " + constraints);
			
			var dataset = DatasetFactory.getDataset("DSReservadeCarro", null, constraints, null);
			log.info("###### ATIVIDADE Adataset (afterStateEntry): " + dataset.values.length);
				
			
			
			
			//var teste = false;

				if (dataset.values.length > 1){
				//teste = true;
					throw "Carro já esta alocado para esta data !!!";
				}
				//else{
					
				//}
			//	if (!teste) {
					
			//	}

		}

		else{
			throw "A data inicio e maior que a data final.";
		}

	}
}
	
