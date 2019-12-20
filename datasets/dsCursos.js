function createDataset(fields, constraints, sortFields) {
	  
	var sqlStr = "SELECT RA1_CURSO, RTRIM(LTRIM(RA1_DESC)) RA1_DESC " +
				"FROM MP11.dbo.RA1010 (NOLOCK) WHERE D_E_L_E_T_ <> '*' "+
				" UNION " +
				" SELECT '0000','OUTROS' ";
	
	if (constraints != null) {
    	for (var i = 0; i < constraints.length; i++) {
    		if (constraints[i].fieldName == "RA1_DESC") {
    			sqlStr = sqlStr + " AND RA1_DESC LIKE '%" + constraints[i].initialValue + "%'";
    		}
    	}
    }
	
	var cst1 = DatasetFactory.createConstraint("SQL", sqlStr , sqlStr, ConstraintType.MUST);
    
    var filtro = new Array(cst1);
     
    var dataset = DatasetFactory.getDataset("dsSQL", null, filtro, null);
     
    return dataset;
}