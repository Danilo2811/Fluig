function createDataset(fields, constraints, sortFields) {
	  
	var sqlStr = " SELECT RA_MAT,DAY(CONVERT(DATE,RA_NASC))AS dia,  MONTH(CONVERT(DATE,RA_NASC)) AS mes, YEAR(CONVERT(DATE,RA_NASC)) AS ANO, RTRIM(LTRIM(RA_NOME)) AS nomfun " +
				 " FROM MP12.dbo.SRA010 (NOLOCK) WHERE D_E_L_E_T_ <> '*' AND RA_SITFOLH <> 'D' "


	var nomeCompleto = nomeCompleto;
	var dia = dia;
	var mes = mes;
	
	var cst1 = DatasetFactory.createConstraint("SQL", sqlStr , sqlStr, ConstraintType.MUST);
    
    var filtro = new Array(cst1);
     
    var dataset = DatasetFactory.getDataset("dsSQL", null, filtro, null);
     
    return dataset;
}