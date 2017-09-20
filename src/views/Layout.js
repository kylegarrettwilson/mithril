
var m = require("mithril");

module.exports = {
    view: function(vnode) {

        return m("main.layout", [
            m("h1", {class: "title"}, "Client List"),
            m("nav.menu", [
                m("a[href='/list']", {oncreate: m.route.link}, "Back")
            ]),
            m("section", vnode.children)
        ])



    }


};