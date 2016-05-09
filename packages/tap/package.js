Package.describe({
    name: "pack:tap",
    version: "0.0.1",
    summary: "Generic utilities",
    git: "",
    documentation: "README.md"
});


function configurePackage(api) {
    api.versionsFrom("METEOR@1.3.2.4");

    var impliedPackages = [
        "standard-app-packages",
        "tap:i18n@1.8.0",
        "ecmascript"
    ];

    api.use(impliedPackages);
    api.imply(impliedPackages);

    api.addFiles("lib/imports/startup/client/i18n_startup.js");

    api.addFiles("server/main.js", ["server"]);

    api.addFiles([
        "client/main.html",
        "client/main.css",
        "client/main.js"], ["client"]);

}



Package.onUse(function(api) {
    configurePackage(api);
});

Package.onTest(function(api) {
    configurePackage(api);
    api.use("tinytest");
    api.use(["practicalmeteor:mocha@2.1.0_6"]);

    api.addFiles("server/main.js", ["server"]);
});
