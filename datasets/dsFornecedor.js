function createDataset(fields, constraints, sortFields) {
      
    var sqlStr ="SELECT TOP 50 A2_COD + ' - ' + RTRIM(LTRIM(A2_NREDUZ)) + ' - ' + A2_NOME AS NOME " +
                "FROM MP12.dbo.SA2010 SRA(NOLOCK) " +
                "WHERE SRA.D_E_L_E_T_ <>'*' " 

    
    if (constraints != null) {
        log.info('----------------' + constraints  )
        for (var i = 0; i < constraints.length; i++) {
        	log.info('----------------' + constraints[i].fieldName)
            if (constraints[i].fieldName == "NOME") {
                log.info('----------------' + constraints[i].fieldName)
                
                sqlStr = sqlStr + " AND (A2_NREDUZ LIKE '%" + constraints[i].initialValue + "%' "
				sqlStr = sqlStr + " OR A2_NOME LIKE '%" + constraints[i].initialValue + "%' "
				sqlStr = sqlStr + " OR A2_COD LIKE '%" + constraints[i].initialValue + "%') "
                
                log.info('----------------' + sqlStr)
            }
        }
    }

    sqlStr += " UNION SELECT '0000 - OUTROS' ";
    
    var cst1 = DatasetFactory.createConstraint("SQL", sqlStr , sqlStr, ConstraintType.MUST);
    
    var filtro = new Array(cst1);
     
    var dataset = DatasetFactory.getDataset("dsSQL", null, filtro, null);
     
    return dataset;
}