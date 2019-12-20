function createDataset(fields, constraints, sortFields) {
	  
	var sqlStr = "SELECT RA_MAT Matricula, RTRIM(LTRIM(RA_NOME)) Nome, CTT.CTT_DESC01 'Setor' "+
	"FROM TESTEMP12.dbo.SRA010 SRA "+
	"LEFT JOIN TESTEMP12.dbo.CTT010 CTT ON RA_CC=CTT_CUSTO "+
	"WHERE SRA.D_E_L_E_T_ <>'*' AND CTT.D_E_L_E_T_<>'*' AND SRA.RA_SITFOLH <>'D' ";
	
	
	
	
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