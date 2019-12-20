function createDataset(fields, constraints, sortFields) {
      
    var sqlStr ="SELECT TOP 50 AH_UNIMED  + ' - ' + RTRIM(LTRIM(AH_DESCPO )) AS NOME " +
			"FROM MP12.dbo.SAH010 SRA(NOLOCK) WHERE D_E_L_E_T_ <> '*' "

    
    if (constraints != null) {
        for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == "NOME") {             
                sqlStr = sqlStr + " AND (AH_DESCPO LIKE '%" + constraints[i].initialValue + "%' "
				sqlStr = sqlStr + " OR AH_UNIMED LIKE '%" + constraints[i].initialValue + "%') "
                
                log.info('----------------' + sqlStr)
            }
        }
    }

    
    var cst1 = DatasetFactory.createConstraint("SQL", sqlStr , sqlStr, ConstraintType.MUST);
    
    var filtro = new Array(cst1);
     
    var dataset = DatasetFactory.getDataset("dsSQL", null, filtro, null);
     
    return dataset;
}