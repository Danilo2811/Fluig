function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
       
    dataset.addColumn("opcao");
    dataset.addRow(new Array("SIM"));
    dataset.addRow(new Array("NAO"));	
    return dataset;
}