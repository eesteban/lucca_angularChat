luccaChatRoom.controller('ChatRoomCtrl', function($scope) {
    const colors = ['#FFDB00', '#FF7A00', '#299617', '#FA5B3D', '#A83731', '#E936A7', '#5E8C31', '#4F86F7'];
    $scope.selectedUser = 0;
    $scope.users = [
        {
            name: 'User 1',
            color: getRandomColor()
        }
    ];
    $scope.messages = [
        {
            userIndex: 0,
            text: 'Hi!',
            date: new Date()
        }
    ];

    $scope.send = function () {
        var newMessage = {
            userIndex: $scope.selectedUser,
            text: $scope.message,
            date: new Date()
        };
        $scope.messages.push(newMessage);
    };
    $scope.setUser = function (index) {
        $scope.selectedUser = index;
    };
    $scope.addUser = function () {
        var index = $scope.users.length;
        var newUser = {
            name: 'User ' + (index+1),
            color: getRandomColor()
        };
        $scope.users.push(newUser);
        $scope.selectedUser = index;
    };

    function getRandomColor() {
        var index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }
});
