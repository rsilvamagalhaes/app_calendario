'use strict';
angular.module('appCalendarioApp')
    .directive('dragDropDiretiva', function() {
        return function(scope, element) {
            scope.dragdrop();
        };
});

var calendarioController = function ($scope) {
    $scope.today = function() {
        $scope.dt = new Date();
    };
    
    $scope.today();
    
    $scope.showWeeks = true;
    $scope.toggleWeeks = function () {
        $scope.showWeeks = ! $scope.showWeeks;
    };
    
    $scope.clear = function () {
        $scope.dt = null;
    };
    
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = ( $scope.minDate ) ? null : new Date();
    };
    $scope.toggleMin();
    
    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
    
        $scope.opened = true;
    };
    
    $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1
    };
    
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];
    
    //Inicio calendario task
    $scope.mes = [{mesNome: "Janeiro", num: 1},
    {mesNome: "Fevereiro", num: 2},
    {mesNome: "Março", num: 3},
    {mesNome: "Abril", num: 4},
    {mesNome: "Maio", num: 5},
    {mesNome: "Junho", num: 6},
    {mesNome: "Julho", num: 7},
    {mesNome: "Agosto", num: 8},
    {mesNome: "Setembro", num: 9},
    {mesNome: "Outubro", num: 10},
    {mesNome: "Novembro", num: 11},
    {mesNome: "Dezembro", num: 12}];
    
    var getNomeMes = function(mes) {
        for(var pos = 0; pos <= $scope.mes.length; pos++) {
            if (mes === $scope.mes[pos].num) {
                return $scope.mes[pos].mesNome;
            }
        }
    };
    
    var diaAtual = new Date();
    $scope.numMes = diaAtual.getMonth() + 1;
    $scope.nomeMes = getNomeMes($scope.numMes);
    $scope.ano = diaAtual.getFullYear();
    
    $scope.getDias = function(mes, ano) {
        var qtdDias = new Date(ano, mes, 0).getDate();
        var dias = [];
        for(var i = 1; i<=qtdDias; i++){ 
            dias[i - 1] = {dia: i};
        }
        return dias;
    };

    $scope.dragdrop = function() {
        $( "li.droptrue" ).sortable({connectWith: "li"});
        $( "li.dropfalse" ).sortable({
          connectWith: "li",
          dropOnEmpty: false
        });
 
        $("#sortable1, #sortable2, #sortable3, .diastyle").disableSelection();
    };
//    $scope.dias = $scope.getDias(mes, ano);
};