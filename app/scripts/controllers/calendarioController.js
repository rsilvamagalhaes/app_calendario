'use strict';
angular.module('appCalendarioApp');
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
    
    $scope.dragdrop = function() {
        $( "ul.droptrue" ).sortable({
      connectWith: "ul"
    });
 
    $( "ul.dropfalse" ).sortable({
      connectWith: "ul",
      dropOnEmpty: false
    });
 
    $( "#sortable1, #sortable2, #sortable3, .diastyle" ).disableSelection();
    };
    
    $scope.dragdrop();
    
    $scope.dias = [
        {dia: 1},
        {dia: 2},
        {dia: 3},
        {dia: 4},
        {dia: 5}
    ];
};