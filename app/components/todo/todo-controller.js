app.controller('TodoController', function($scope){
   
    
    /** TASK MODEL
     * {
     *   task: String,
     *   dueDate: Date,
     *   responsibleParty: String,
     *   estTime: Number
     * }
     */
    
    $scope.todos = [{
        task: 'Walk Dog',
        dueDate: Date.now(),
        responsibleParty: 'Chance',
        estTime: 15,
    },{
        task: 'Toilet Duty',
        dueDate: new Date(2022, 4, 1),
        responsibleParty: 'John',
        estTime: 15,
    },{
        task: 'Pop Popcorn',
        dueDate: Date.now(),
        responsibleParty: 'Chance',
        estTime: 10,
    },{
        task: 'Write CODE!!!',
        dueDate: new Date(2016, 5, 28),
        responsibleParty: 'Class',
        estTime: 1500,
    }];
    
    $scope.addItem = function(){
        if($scope.newTask){
            $scope.todos.push($scope.newTask);
            $scope.newTask = '';
        }
    }
    
    $scope.removeItem = function(i){
        $scope.todos.splice(i, 1);
    }
    
})