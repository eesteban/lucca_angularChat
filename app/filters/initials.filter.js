luccaChatRoom.filter('initials', function(){
    return function(input){
        return input.substring(0,1).toUpperCase();
    }
});
