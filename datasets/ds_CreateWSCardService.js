function createDataset(fields, constraints, sortFields)
{
	var dataset = DatasetBuilder.newDataset();
	dataset.addColumn("RETORNO");
	
	//DEFINICAO DAS VARIAVEIS PARA A CHAMADA DA FUNCAO createData()
	var company = parseInt(getValue("WKCompany"));
	var user = "danilo.mariano";
	var password = "@Danilo1990@";
	
	//CHAMADA DA FUNCAO PARA A CRIACAO DOS REGISTROS DE FORMULARIO
	var retorno = createData(company, user, password);
	dataset.addRow([retorno]);
	
	return dataset;
}

function createData(company, user, password)
{
	try
	{
	
		var properties = {};
		properties["disable.chunking"] = "true";
		properties["log.soap.messages"] = "true";
		
		//CHAMADA DO SERVICO E INSTANCIAÇAO DAS CLASSES PARA A CHAMADA DO METODO	
		var serviceManager = ServiceManager.getService("WSCardService");
		var serviceInstance = serviceManager.instantiate("com.totvs.technology.ecm.dm.ws.ECMCardServiceService");
		var service = serviceInstance.getCardServicePort();	    		    
		var customClient = serviceManager.getCustomClient(service, "com.totvs.technology.ecm.dm.ws.CardService", properties);
		
		var attachment = serviceManager.instantiate("com.totvs.technology.ecm.dm.ws.Attachment");
		var relatedDocument = serviceManager.instantiate("com.totvs.technology.ecm.dm.ws.RelatedDocumentDto");
		var documentSecurity = serviceManager.instantiate("com.totvs.technology.ecm.dm.ws.DocumentSecurityConfigDto");
		var approver = serviceManager.instantiate("com.totvs.technology.ecm.dm.ws.ApproverDto");
		
		var datasetFuncionariosERP = DatasetFactory.getDataset("ds_Aniversariantes", null, null, null);
		
		var nomeCompleto = null;
		var dia = null;
		var mes = null;
		
		for (var i = 0; i < datasetFuncionariosERP.rowsCount; i++)
		{		
			var result = null;
			
			nomeCompleto = datasetFuncionariosERP.getValue(i, "nomfun");
			mes = datasetFuncionariosERP.getValue(i, "mes");
			dia = datasetFuncionariosERP.getValue(i, "dia");
			
			//CRIACAO DA CONSTRAINT PARA VERIFICAR SE O FUNCIONARIO JA NAO ESTA SINCRONIZADO NO FORMULARIO DE DESTINO			
			var c1 = DatasetFactory.createConstraint("fullname", nomeCompleto, nomeCompleto, ConstraintType.MUST);
			var constraints   = new Array(c1);
			var dsAniverKit = DatasetFactory.getDataset("kit_aniversariantes", null, constraints, null);
			
			if (dsAniverKit.values.length > 0 )
			{
				log.info("###### FUNCIONARIO JA SINCRONIZADO!");
				continue;
			}
			else 
			{
				log.info("###### FUNCIONARIO NAO SINCRONIZADO AINDA!");
				
				//A CADA ITERACAO, SE O USUARIO NAO FOI SINCRONIZADO É PRECISO INSTANCIAR AS VARIÁVEIS ABAIXO,
				//PARA QUE NAO HAJA DUPLICIDADE DOS REGISTROS DO FORMULARIO (CAUSANDO A CRIACAO DE MAIS DE UM REGISTRO DE FORMULARIO PARA O MESMO REGISTRO DO FOR) 
				
				var cardDtoArray = serviceManager.instantiate("com.totvs.technology.ecm.dm.ws.CardDtoArray");
				var cardDto = serviceManager.instantiate("com.totvs.technology.ecm.dm.ws.CardDto");		
				
				var cardFieldDto1 = serviceManager.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");
				var cardFieldDto2 = serviceManager.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");
				var cardFieldDto3 = serviceManager.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");
				
				cardDto.getAttachs().add(attachment);
				cardDto.getReldocs().add(relatedDocument);
				cardDto.getDocsecurity().add(documentSecurity);
				cardDto.getDocapprovers().add(approver);
				
				//ADICIONA NO ARRAY OS METADADOS DO REGISTRO DE FORMULARIO 
				cardDto.setDocumentDescription(nomeCompleto);
				cardDto.setAdditionalComments("");
				cardDto.setParentDocumentId(10);
				cardDto.setColleagueId("<SENHA_DO_USUARIO>");
				cardDto.setExpires(false);
				cardDto.setUserNotify(false);
				cardDto.setInheritSecurity(true);
				cardDto.setTopicId(1);
				cardDto.setVersionDescription("");
				cardDto.setDocumentKeyWord("");
				
				//ADICIONA NO ARRAY OS DADOS DOS CAMPOS DO FORMULARIO: NOME E O VALOR	
				cardFieldDto1.setField("fullName");
				cardFieldDto1.setValue(nomeCompleto);
				cardDto.getCardData().add(cardFieldDto1);
				
				cardFieldDto2.setField("birthDay");
				cardFieldDto2.setValue(dia);
				cardDto.getCardData().add(cardFieldDto2);
				
				cardFieldDto3.setField("birthMonth");
				cardFieldDto3.setValue(mes);
				cardDto.getCardData().add(cardFieldDto3);
				
				// ADICIONA O REGISTRO NO ARRAY DO REGISTRO DE FORMULARIO
				cardDtoArray.getItem().add(cardDto);
				
				//CHAMADA METODO PARA CRIACAO DOS REGISTROS DE FORMULARIO
				result = customClient.create(company, user, password, cardDtoArray);
				log.info("###### FUNCIONARIO SINCRONIZADO!");
				
			}		
		}
		if (result.getItem().get(0).getWebServiceMessage().equals("ok")) {
			return "Sincronização completada com sucesso!" ;
		} else {
			return result.getItem().get(0).getWebServiceMessage();
		}
	}
	catch(e)
	{
		log.error('###### Erro ao sincronizar os aniversariantes. '+e.message);
		return;
	}
}