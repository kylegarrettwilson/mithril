
// src/models/User.js
var m = require("mithril");



var User = {
    list: [],


    loadList: function() {

        // get the users

        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true
        })
            .then(function(result) {
                User.list = result.data
            })


    },


    // get users with respected id's

    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true
        })
            .then(function(result) {
                User.current = result
            })
    },


    // save the new name info


    save: function() {
        return m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
            data: User.current,
            withCredentials: true
        })
    }




};

module.exports = User;