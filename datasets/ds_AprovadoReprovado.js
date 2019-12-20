function createDataset(fields, constraints, sortFields) {

    var newDataset = DatasetBuilder.newDataset();
    newDataset.addColumn("aprovacao");

    newDataset.addRow(new Array("Aprovado"));
    newDataset.addRow(new Array("Reprovado"));

    return newDataset; 
}