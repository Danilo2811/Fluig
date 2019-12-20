function setSelectedZoomItem(selectedItem) {  

if(selectedItem.inputId == "ctt_custo")
{
    $("#email_gestor").val(selectedItem["EMAIL_RESPONSAVEL"]);
    
    var email_gestor = $("#email_gestor").val();
    
    console.log(email_gestor);
    

    /*
    var filtroEmail = DatasetFactory.createConstraint("mail", email_gestor, email_gestor, ConstraintType.MUST);
    var filtros = new Array(filtroEmail);
    var dsUsuario = DatasetFactory.getDataset("colleague", null, filtros, null);
    
    console.log(dsUsuario.getValue(0, colleaguePK.colleagueId));
    
    $("#cod_gestor").val(dsUsuario.getValue(0, colleaguePK.colleagueId));
    */
}

if(selectedItem.inputId.includes("Funcionario"))
{
	
	$("#inputDesc").val(selectedItem["RA_NOME"]);
	
	console.log("inputDesc");
}

}