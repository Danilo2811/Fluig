function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    //Cria as colunas do Dataset Personalisado
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("horario");

    //Cria a constraint para buscar os dados dos formulários ativos no dataset do Formulário
    var constraints = new Array();
    constraints.push(DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST));

    // No lugar do "Documentos_Contratos" você coloca o dataset do seu formulário
    var datasetPrincipal = DatasetFactory.getDataset("dsPesquisaDeSalas", null, constraints, null);

    for (var i = 0; i < datasetPrincipal.rowsCount; i++) {
                //Adiciona os valores nas colunas respectivamente.
                dataset.addRow(new Array(datasetPrincipal.getValue(i, "contratada_razao")));
    }
    return dataset;
}
function onMobileSync(user) {

}