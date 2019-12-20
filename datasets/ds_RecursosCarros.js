function createDataset(fields, constraints, sortFields) {

    var newDataset = DatasetBuilder.newDataset();
    newDataset.addColumn("Recursos");

    newDataset.addRow(new Array(""));
    newDataset.addRow(new Array("Gol GBF-4619"));
    newDataset.addRow(new Array("Gol FNG-7197"));
    newDataset.addRow(new Array("Gol FNE-5875"));
    newDataset.addRow(new Array("Gol EVY-5884"));
    newDataset.addRow(new Array("Gol EGH-0522"));
    newDataset.addRow(new Array("Saveiro EGH-0042"));
    newDataset.addRow(new Array("Saveiro DFR-5979"));



    return newDataset; 
}