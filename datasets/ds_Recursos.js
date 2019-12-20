function createDataset(fields, constraints, sortFields) {

    var newDataset = DatasetBuilder.newDataset();
    newDataset.addColumn("Recursos");

    newDataset.addRow(new Array("Carro 01"));
    newDataset.addRow(new Array("Carro 02"));
    newDataset.addRow(new Array("Carro 03"));
    newDataset.addRow(new Array("Carro 04"));
    newDataset.addRow(new Array("Carro 05"));
    newDataset.addRow(new Array("Carro 06"));



    return newDataset; 
}