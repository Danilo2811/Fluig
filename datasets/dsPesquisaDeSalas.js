function createDataset(fields, constraints, sortFields) {

    var newDataset = DatasetBuilder.newDataset();
    newDataset.addColumn("horario");

    newDataset.addRow(new Array("07:00"));
    newDataset.addRow(new Array("07:30"));
    newDataset.addRow(new Array("08:00"));
    newDataset.addRow(new Array("08:30"));
    newDataset.addRow(new Array("09:00"));
    newDataset.addRow(new Array("09:30"));
    newDataset.addRow(new Array("10:00"));
    newDataset.addRow(new Array("10:30"));
    newDataset.addRow(new Array("11:00"));
    newDataset.addRow(new Array("11:30"));
    newDataset.addRow(new Array("12:00"));
    newDataset.addRow(new Array("12:30"));
    newDataset.addRow(new Array("13:00"));
    newDataset.addRow(new Array("13:30"));
    newDataset.addRow(new Array("14:00"));
    newDataset.addRow(new Array("14:30"));
    newDataset.addRow(new Array("15:00"));
    newDataset.addRow(new Array("15:30"));
    newDataset.addRow(new Array("16:00"));
    newDataset.addRow(new Array("16:30"));
    newDataset.addRow(new Array("17:00"));
    newDataset.addRow(new Array("17:30"));
    newDataset.addRow(new Array("18:00"));
    newDataset.addRow(new Array("18:30"));




    return newDataset; 
}