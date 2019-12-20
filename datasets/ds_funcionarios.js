function createDataset(fields, constraints, sortFields) {
	  
	var sqlStr = "SELECT RA_MAT, RTRIM(LTRIM(RA_NOME)) RA_NOME " +
				"FROM MP11.dbo.SRA010 (NOLOCK) WHERE D_E_L_E_T_ <> '*' AND RA_SITFOLH <> 'D' "+
				" UNION " +
				" SELECT '0000','OUTROS' ";
	
	if (constraints != null) {
    	for (var i = 0; i < constraints.length; i++) {
    		if (constraints[i].fieldName == "RA_NOME") {
    			sqlStr = sqlStr + " AND RA_NOME LIKE '%" + constraints[i].initialValue + "%'";
    		}
    	}
    }
	
	var cst1 = DatasetFactory.createConstraint("SQL", sqlStr , sqlStr, ConstraintType.MUST);
    
    var filtro = new Array(cst1);
     
    var dataset = DatasetFactory.getDataset("dsSQL", null, filtro, null);
     
    return dataset;
}