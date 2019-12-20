function createDataset(fields, constraints, sortFields) {
	  
	//var sqlStr = "SELECT CTT_CUSTO, CTT_DESC01, CTT_BLOQ, CTT_CCSUP FROM MP12.dbo.CTT010 "
	//	+ "WHERE D_E_L_E_T_ <> '*' AND CTT_BLOQ <> 1 AND CTT_DTEXSF = '' AND CTT_CLASSE <> 1";
	
	var sqlStr = 
	"SELECT 	CTT_CUSTO, RTRIM(LTRIM(CTT_CUSTO))+' - '+RTRIM(LTRIM(CTT_DESC01)) AS CTT_DESC01, CTT_BLOQ, CTT_CCSUP, CTT_MAT 'MATRICULA_RESPONSAVEL',  "
		
	//+ "CTT_MAT 'MATRICULA_RESPONSAVEL', 'tic@vidroporto.com.br' 'EMAIL_RESPONSAVEL', "
	//+ "	CASE "
	//+ "WHEN CTT_CUSTO = '110101' THEN 'rafael.pucci@vidroporto.com.br' "
	//+ "ELSE 'tic@vidroporto.com.br' "
	//+ "END 'EMAIL_RESPONSAVEL', "
	//+ "CTT_MAT2 'MATRICULA_GERENTE', 'tic@vidroporto.com.br' 'EMAIL_GERENTE', "
	//+ "CTT_MAT3 'MATRICULA_DIRETOR', 'tic@vidroporto.com.br' 'EMAIL_DIRETOR' "
		
	+ "EMAIL_RESPONSAVEL.EMAIL 'EMAIL_RESPONSAVEL', "
	+ "CTT_MAT2 'MATRICULA_GERENTE', EMAIL_GERENTE.EMAIL 'EMAIL_GERENTE', " 
	+ "CTT_MAT3 'MATRICULA_DIRETOR', EMAIL_DIRETOR.EMAIL 'EMAIL_DIRETOR' "
	+ "FROM MP12.dbo.CTT010  "
	
	+ "LEFT JOIN MP12.dbo.EMAIL_USUARIOS EMAIL_RESPONSAVEL ON "
	+ "EMAIL_RESPONSAVEL.USUARIO = CTT010.CTT_MAT "
	
	+ "LEFT JOIN MP12.dbo.EMAIL_USUARIOS EMAIL_GERENTE ON "
	+ "EMAIL_GERENTE.USUARIO = CTT010.CTT_MAT2 "
	
	+ "LEFT JOIN MP12.dbo.EMAIL_USUARIOS EMAIL_DIRETOR ON "
	+ "EMAIL_DIRETOR.USUARIO = CTT010.CTT_MAT3 "
	
	+ "WHERE D_E_L_E_T_ <> '*' AND CTT_BLOQ <> 1 AND CTT_DTEXSF = '' AND CTT_CLASSE <> 1  "
	+ "AND CTT_DESC01 NOT LIKE 'RT %'  "
	+ "AND CTT_DESC01 NOT LIKE 'OSI-%'  "
	+ "AND CTT_DESC01 NOT LIKE 'O.S.I.%' " 
	+ "AND CTT_DESC01 NOT LIKE 'OSI %'  "
	+ "AND SUBSTRING(CTT_CUSTO, 1, 2) <> 'MP' "
	+ "AND SUBSTRING(CTT_CUSTO, 1, 5) <> 'ZZZZZ' "
	+ "AND CTT_CUSTO <> '7000' "
	+ "AND CTT_CUSTO <> '8061' "
	
	if (constraints != null) {
    	for (var i = 0; i < constraints.length; i++) {
    		if (constraints[i].fieldName == "CTT_DESC01") {
    			sqlStr = sqlStr + " AND CTT_CUSTO + CTT_DESC01 LIKE '%" + constraints[i].initialValue + "%'"
    			sqlStr = sqlStr + " OR CTT_DESC01 LIKE '%" + constraints[i].initialValue + "%' "
    		}
    	}
    }
	
	var cst1 = DatasetFactory.createConstraint("SQL", sqlStr , sqlStr, ConstraintType.MUST);
    
    var filtro = new Array(cst1);
     
    var dataset = DatasetFactory.getDataset("dsSQL", null, filtro, null);
     
    return dataset;
}