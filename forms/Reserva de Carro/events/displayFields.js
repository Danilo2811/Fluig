function displayFields(form,customHTML){ 
 var state = getValue("WKNumState");
 customHTML.append("<script language='javascript'> \n"); 
 
 if (state == 0) //Inicio da solicitação
 {

	 ocultaCampos(customHTML,"#pn_Gestor");
 } 
    
 else if (state == 5) //Aprovação do Gestor
 {
	 bloqueiaCampos(customHTML,"#pn_DadosSolicitacao");
	 bloqueiaCampos(customHTML,"#pn_DadosSolicitacao");
	 bloqueiaCampos(customHTML,"#pn_Justificativa");
	 
	 ocultaCampos(customHTML,"#pn_Solicitante_revis");
	 ocultaCampos(customHTML,"#pn_just_gestor");

 }
 
 
customHTML.append("</script> \n"); 
 
}

function bloqueiaCampos(customHTML,id)
{
 customHTML.append(" $('"+id+" .input-group-addon').removeAttr('onclick'); \n");
 customHTML.append(" $('"+id+" input').attr('readonly',true); \n");
 customHTML.append(" $('"+id+" textarea').attr('readonly',true); \n");
 customHTML.append(" $('"+id+" select option:not(:selected)').attr('disabled', 'true'); \n");
 customHTML.append(" $('"+id+"').attr('onclick', 'return false'); \n");
 customHTML.append(" $('"+id+" .fluigicon-trash').removeAttr('onclick'); \n");
 customHTML.append(" $('"+id+" input').removeAttr('onclick'); \n");
}

function ocultaCampos(customHTML,id)
{
 customHTML.append(" $('"+id+"').attr('style','display:none;'); \n");
}
