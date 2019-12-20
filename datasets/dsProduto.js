function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();

	var sqlStr = "SELECT TOP 30 * FROM" +
	"(" +
	"	SELECT " +
	"	B1_COD CODIGO, B1_COD + ' - ' + B1_DESC DESCRICAO, B1_TIPO TIPO_ITEM, B1_UM UNIDADE_MEDIDA, B2_QATU QUANTIDADE, " +
	"	CASE " +
	"		WHEN B1_TIPO = 'PS' OR B1_TIPO = 'SV' THEN 'S' " +
	"		ELSE 'P' " +
	"	END TIPO " +
	"	FROM MP12.dbo.SB1010 SB1  " +
	"	INNER JOIN MP12.dbo.SB2010 SB2 ON  " +
	"	SB1.B1_COD = SB2.B2_COD  " +
	"	WHERE	SB1.D_E_L_E_T_ <> '*' AND	SB2.D_E_L_E_T_ <> '*' AND SB1.B1_TIPO NOT IN ('PA','PI','MO','AI','IN','ME') AND SB1.B1_MSBLQL <> '1' " +
	") AS PRODUTOS WHERE 1=1 "
    
    if (constraints != null) {
    	for (var i = 0; i < constraints.length; i++) {
    		if (constraints[i].fieldName == "DESCRICAO") { 
    			sqlStr = sqlStr + " AND CODIGO + DESCRICAO LIKE '%"+constraints[i].initialValue+"%'";
    		}
    		
    		else if (constraints[i].fieldName == "TIPO") { 
    			sqlStr = sqlStr + " AND TIPO = '"+constraints[i].initialValue+"'";
    		}
    	}
    }
    
    var cst1 = DatasetFactory.createConstraint("SQL", sqlStr , sqlStr, ConstraintType.MUST);
	var cst2 = DatasetFactory.createConstraint("dataSource", 'protheus' , 'protheus', ConstraintType.MUST);
		
	var filtro2 = new Array(cst1, cst2);
		
	dataset = DatasetFactory.getDataset("dsSQL", null, filtro2, null);
	
	return dataset;
	
}function onMobileSync(user) {

}