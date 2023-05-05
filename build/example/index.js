"use strict";
(function run() {
    function connect() {
        var schemaPromise = fetch("https://unpkg.com/enigma.js/schemas/3.2.json").then(function (response) { return response.json(); });
        var openDoc = function (appId) {
            return schemaPromise.then(function (schema) {
                return window.enigma
                    .create({
                    schema: schema,
                    url: "ws://".concat(window.location.hostname || "localhost", ":9076/app/").concat(encodeURIComponent(appId)),
                })
                    .open()
                    .then(function (qix) { return qix.openDoc(appId); });
            });
        };
        return openDoc;
    }
    connect()("/apps/Executive_Dashboard.qvf").then(function (app) {
        // configure nucleus
        var nuked = window.stardust.embed(app, {
            types: [
                {
                    name: "action-button",
                    load: function () { return Promise.resolve(window["sn-action-button"]); },
                },
            ],
        });
        nuked.selections().then(function (s) { return s.mount(document.querySelector(".toolbar")); });
        // create a session object
        nuked.render({
            type: "action-button",
            element: document.querySelector(".object"),
            properties: {
                actions: [
                    {
                        actionType: "selectValues",
                        field: "Region",
                        value: "Americas;Asia",
                        softLock: false,
                    },
                ],
                style: {
                    label: "Make selections",
                    font: {
                        size: 0.8,
                        style: {
                            bold: true,
                        },
                    },
                    background: {
                        color: "SpringGreen",
                    },
                    border: {
                        useBorder: true,
                        radius: 1,
                        width: 0,
                        color: "Green",
                    },
                    icon: {},
                },
            },
        });
        // create another session object
        nuked.render({
            type: "action-button",
            element: document.querySelectorAll(".object")[1],
            properties: {
                actions: [
                    {
                        actionType: "clearAll",
                        softLock: false,
                    },
                ],
                style: {
                    label: "Clear Selections",
                    font: {
                        size: 0.7,
                        style: {
                            italic: true,
                        },
                    },
                    background: {
                        color: "Red",
                    },
                    border: {
                        useBorder: true,
                        radius: 0.25,
                        width: 0.1,
                        color: "DarkRed",
                    },
                    icon: {},
                },
            },
        });
    });
})();
