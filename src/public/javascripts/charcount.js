function charCountController($scope) {
    $scope.mainText = "";

    $scope.grid = [
        {id:"a", value:1, amount:0},
        {id:"b", value:2, amount:0},
        {id:"c", value:3, amount:0},
        {id:"d", value:4, amount:0},
        {id:"e", value:5, amount:0},
        {id:"f", value:6, amount:0},
        {id:"g", value:7, amount:0},
        {id:"h", value:8, amount:0},
        {id:"i", value:9, amount:0},
        {id:"j", value:10, amount:0},
        {id:"k", value:20, amount:0},
        {id:"l", value:30, amount:0},
        {id:"m", value:40, amount:0},
        {id:"n", value:50, amount:0},
        {id:'\u00f1', value:60, amount:0},
        {id:"o", value:70, amount:0},
        {id:"p", value:80, amount:0},
        {id:"q", value:90, amount:0},
        {id:"r", value:100, amount:0},
        {id:"s", value:200, amount:0},
        {id:"t", value:300, amount:0},
        {id:"u", value:400, amount:0},
        {id:"v", value:500, amount:0},
        {id:"w", value:600, amount:0},
        {id:"x", value:700, amount:0},
        {id:"y", value:800, amount:0},
        {id:"z", value:900, amount:0}
    ];

    $scope.total = 0;
    $scope.count = function () {
        // Reset values in the table
        for (var c in $scope.grid) {
            $scope.grid[c].amount = 0;
        }

        // First go through the text adding char by char
        var mainText = $scope.mainText.toLowerCase();
        console.log("LowerCase is : "+mainText);
        for (var i = 0; i < $scope.mainText.length; i++) {
            console.log("Found char "+mainText.charAt(i));
            for (var c in $scope.grid) {
                console.log("  -> "+$scope.grid[c].id);
                if ($scope.grid[c].id == mainText.charAt(i)) {
                    $scope.grid[c].amount++;
                    console.log("For char "+$scope.grid[c].id+ " we have "+$scope.grid[c].amount);
                    break;
                }
                var charTotalValue = $scope.grid[c].value * $scope.grid[c].amount;
                $scope.total = $scope.total + charTotalValue;
            }
        }

        $scope.total = 0;
        for (var c in $scope.grid) {
            var charTotalValue = $scope.grid[c].value * $scope.grid[c].amount;
            $scope.total = $scope.total + charTotalValue;
        }
    };

    //alert("Hi there");
}