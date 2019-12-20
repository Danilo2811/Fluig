function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	log.info(constraints [0] + "-----------")
	var dataset = DatasetBuilder.newDataset();




	var sqlStr = "SELECT TOP 50 RTRIM(LTRIM(B1_COD)) B1_COD, RTRIM(LTRIM(B1_DESC)) B1_DESC " +
	"FROM MP12.dbo.SB1010 SB1 WITH (NOLOCK) WHERE D_E_L_E_T_ <> '*' " +
	"AND SB1.B1_MSBLQL <> '1' AND SB1.B1_TIPO IN ('AI') " 

	
	
	
	if (constraints != null) {
		for (var i = 0; i < constraints.length; i++) {
			if (constraints[i].fieldName == "B1_DESC") {
				sqlStr = sqlStr + " AND (B1_COD LIKE '%" + constraints[i].initialValue + "%'"
				sqlStr = sqlStr + " OR B1_DESC LIKE '%" + constraints[i].initialValue + "%' )"
				
			}
		}
	}

	
	sqlStr += " UNION ALL SELECT '100888','OUTROS' "

    var cst1 = DatasetFactory.createConstraint("SQL", sqlStr , sqlStr, ConstraintType.MUST);
	var cst2 = DatasetFactory.createConstraint("dataSource", 'protheus' , 'protheus', ConstraintType.MUST);
		
	var filtro2 = new Array(cst1, cst2);
		
	dataset = DatasetFactory.getDataset("dsSQL", null, filtro2, null);
	
	return dataset;
	
}

function onMobileSync(user) {

}