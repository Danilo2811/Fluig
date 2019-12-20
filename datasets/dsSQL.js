function createDataset(fields, constraints, sortFields) {
	
	var minhaQuery = "SELECT * FROM PREFER_PASTA ";
	
	if (constraints != null) {
    	for (var i = 0; i < constraints.length; i++) {
    		if (constraints[i].fieldName == "SQL") {  
    			minhaQuery = constraints[i].initialValue;
    		}
    	}
     }

	if(fields != null){
		minhaQuery = fields[0];
	}
    var dataSource = "jdbc/FluigDS";
    log.info("###### SQL: " + minhaQuery);
    var newDataset = DatasetBuilder.newDataset();
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;
    try {
	   var conn = ds.getConnection();
	   var stmt = conn.createStatement();
	   var rs = stmt.executeQuery(minhaQuery);
	   var columnCount = rs.getMetaData().getColumnCount();
	   while(rs.next()) {
	       if(!created) {
	           for(var i=1;i<=columnCount; i++) {
	        	   newDataset.addColumn(rs.getMetaData().getColumnName(i));
	           }
	           created = true;
	       }
	       var Arr = new Array();
	       for(var i=1;i<=columnCount; i++) {
	           var obj = rs.getObject(rs.getMetaData().getColumnName(i));
	           if(null!=obj){
	        	   Arr[i-1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
	           }
	           else {
	        	   Arr[i-1] = "null";
	           }
	       }
	       newDataset.addRow(Arr);
	   }
    } catch(e) {
       log.info(" ####### ERRO==============> " + e.message);
    } finally {
       if(stmt != null) stmt.close();
       if(conn != null) conn.close();                     
    }
    return newDataset;
}
