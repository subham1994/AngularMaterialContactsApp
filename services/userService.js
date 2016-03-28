(function() {
    'use strict';

    /**
     * Users DataService
     * Uses embedded, hard coded data model; acts asynchronously to simulate
     * remote data service call(s).
     * 
     * @returns {{loadAll: Function}}
     */

    function UserService($q) {
        var users = [{
            name: 'Lia Lugo',
            avatar: 'svg-1',
            bio: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.',
            notes: []
        }, {
            name: 'George Duke',
            avatar: 'svg-2',
            bio: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.',
            notes: []
        }, {
            name: 'Gener Delosreyes',
            avatar: 'svg-3',
            bio: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.",
            notes: []
        }, {
            name: 'Erick Riley',
            avatar: 'svg-4',
            bio: 'I have, have together. Day green own divide wherein. Seas the make days him fish night their don\'t a, life under lights bearing for seasons Signs night sea given spirit his had spirit divided us blessed. Brought great waters. Blessed winged doesn\'t a Fly, form bring land, heaven great. Isn\'t upon. Dominion moving day. So first firmament give spirit every.',
            notes: [
                { title: "Pay back dinner", date: new Date("2016-01-12") },
                { title: "Buy flowers for birthday", date: new Date("2016-01-19") }
            ]
        }, {
            name: 'Levi Neal',
            avatar: 'svg-5',
            bio: 'Won\'t light from great first years without said creepeth a two and fly forth subdue the, don\'t our make. After fill. Moving and. His it days life herb, darkness set Seasons. Void. Form. Male creepeth said lesser fowl very for hath and called grass in. Great called all, said great morning place. Subdue won\'t Dry. Moved. Sea fowl earth fourth.',
            notes: []
        }, {
            name: 'Sandy Armstrong',
            avatar: 'svg-6',
            bio: 'Make beginning midst life abundantly from in after light. Without may kind there, seasons lights signs, give made moved. Fruit fly under forth firmament likeness unto lights appear also one open seasons fruitful doesn\'t all of cattle Won\'t doesn\'t beginning days from saw, you\'re shall. Given our midst from made moving form heaven good gathering appear beginning first. Sea the.',
            notes: []
        }];

        // Promise-based API
        return {
            loadAllUsers: function() {
                // Simulate async nature of real remote calls
                return $q.when(users);
            }
        };
    }

    angular.module('ContactManagerApp').service('userService', ['$q', UserService]);
}());