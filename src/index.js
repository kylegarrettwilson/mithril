// src/index.js
var m = require("mithril");

var UserList = require("./views/UserList");
var UserForm = require("./views/UserForm");
var Layout = require("./views/Layout");



// m.mount renders the userlist script page into the DOM of index.html

//m.mount(document.body, UserList)

/*
m.route(document.body, "/list", {
    "/list": UserList,
    "/edit/:id": UserForm,
})

*/



// this is the routing system for the app and allows you to move throughout the different clients

m.route(document.body, "/list", {
    "/list": {
        render: function() {
            return m(Layout, m(UserList))
        }
    },

    // the :id is a route parameter and is telling the DOM to present the info that matches the correct client Id
    "/edit/:id": {
        render: function(vnode) {
            return m(Layout, m(UserForm, vnode.attrs))
        }
    }
});




