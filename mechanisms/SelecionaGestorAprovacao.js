function resolve(process,colleague){

    var userList = new java.util.ArrayList();
	
	var email_gestor = hAPI.getCardValue("email_gestor");
	var filtroEmail = DatasetFactory.createConstraint("mail", email_gestor, email_gestor, ConstraintType.MUST);
    var filtros = new Array(filtroEmail);
    var dsUsuario = DatasetFactory.getDataset("colleague", null, filtros, null);
	
    log.info(" ***************** " + dsUsuario.getValue(0, "colleaguePK.colleagueId"));
	
    hAPI.setCardValue("cod_gestor",dsUsuario.getValue(0, "colleaguePK.colleagueId"));
    
    userList.add(dsUsuario.getValue(0, "colleaguePK.colleagueId"));
    
    return userList;

}