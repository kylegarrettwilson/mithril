

var m = require("mithril");
var User = require("../models/User");

module.exports = {
    oninit: function(vnode) {User.load(vnode.attrs.id)},


    /*

    this is a the original form creation

    view: function() {
        return m("form", [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]"),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]"),
            m("button.button[type=button]", "Save")
        ])
    }

    */


    // this is the save form where the client info can be updated. oninput allows it to be saved.


    view: function() {
        return m("form", {
            onsubmit: function(e) {
                e.preventDefault();
                User.save()
            }
        }, [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
                oninput: m.withAttr("value", function(value) {User.current.firstName = value}),
                value: User.current.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]", {
                oninput: m.withAttr("value", function(value) {User.current.lastName = value}),
                value: User.current.lastName
            }),
            m("button.button[type=submit]", "Save")
        ])
    }



};

