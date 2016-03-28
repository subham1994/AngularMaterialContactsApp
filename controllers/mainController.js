(function() {
    
    /**
     * Main Controller for the Angular Material Contacts App
     * @param userService
     * @param $mdSidenav
     * @param $mdToast
     * @param $mdDialog
     */
    
    var mainController = function(userService, $mdSidenav, $mdToast, $mdDialog, $mdMedia) {
        var self = this;
        
        self.users = [];
        self.selected = null;
        self.searchText = '';
        self.selectedTab = 0;
        
        userService.loadAllUsers().then(function(users) {
            self.users = [].concat(users);
            self.selected = users[0];
        });
        
        var openToast = function(message) {
            var toast = $mdToast.simple()
                                .textContent(message)
                                .position('top right')
                                .hideDelay(3000);
            $mdToast.show(toast);
        };
        
        self.toggleSideNav = function() {
            $mdSidenav('left').toggle();
        };
        
        self.selectUser = function(user) {
            self.selected = user;
            self.selectedTab = 0;
            var sideNav = $mdSidenav('left');
            if(sideNav.isOpen()) {
                sideNav.close();
            }
        };
        
        self.removeNote = function(note) {
            var index = self.selected.notes.indexOf(note);
            self.selected.notes.splice(index, 1);
            openToast("Note deleted successfully !");
        };
        
        self.clearNotes = function($event) {
            var confirmDialog = $mdDialog.confirm()
                                         .title('Are you sure you want to delete all notes?')
                                         .textContent('WARNING: All notes will be deleted, you can\'t undo this action!')
                                         .targetEvent($event)
                                         .ok('Yes')
                                         .cancel('No');
            $mdDialog.show(confirmDialog).then(function() {
                self.selected.notes = [];
                openToast('Notes deleted successfully !');
            });
        };
        
        self.addUser = function($event) {
            var useFullScreen = $mdMedia('sm') || $mdMedia('xs');
            $mdDialog.show({
                templateUrl: './views/newUserDialog.html',
                parent: angular.element(document.body),
                controller: addUserDialogController,
                controllerAs: 'ctrl',
                targetEvent: $event,
                clickOutsideToClose: false,
                fullscreen: useFullScreen
            }).then(function (user) {
                self.users.push(user);
                self.selected = user;
                openToast("User added");
            }, function () {
                console.log('You cancelled the dialog.');
            });
        };
    };
    
    var addUserDialogController = function($mdDialog) {
        var self = this;
        self.avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4', 'svg-5'];
        
        self.cancel = function() {
            $mdDialog.cancel();
        };
        
        self.save = function() {
            self.user.name = self.user.firstName + ' ' + self.user.lastName;
            $mdDialog.hide(self.user);
        };
    };
    
    angular.module('ContactManagerApp')
        .controller("mainController", ['userService', '$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia', mainController]);

}());