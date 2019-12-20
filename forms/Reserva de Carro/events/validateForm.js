function validateForm(form){
	
	var state = getValue("WKNumState");
	
	if (state == 4) //Inicio - Registra Solicitacao
		if (form.getValue('Funcionario') == "") {
		     throw "O campo 'Nome do Beneficiado:' é obrigatorio.";
		}
		if (form.getValue('inputDesc') == "") {
		     throw "O campo 'Desc:' é obrigatorio.";
		}
		if (form.getValue('inputEmpr') == "") {
		     throw "O campo 'Empresa do Beneficiado:' é obrigatorio.";
		}
		if (form.getValue('ctt_custo') == "") {
		     throw "O campo 'Centro de custo destino:' é obrigatorio.";
		}
		if (form.getValue('email_gestor') == "") {
		     throw "O campo 'E-mail Gestor:' é obrigatorio.";
		}
		if (form.getValue('carro') == "") {
		     throw "O campo 'Recursos:' é obrigatorio.";
		}
		if (form.getValue('dateRecursode') == "") {
		     throw "O campo 'Data:' é obrigatorio.";
		}
		if (form.getValue('dateRecursoate') == "") {
		     throw "O campo 'até:' é obrigatorio.";
		}
		
	if (state == 5) //Inicio - Registra Solicitacao
		if (form.getValue('AprovaSolicitacao') == "") {
		     throw "O campo 'Aprovada Solicitação:' é obrigatorio.";
		}
}