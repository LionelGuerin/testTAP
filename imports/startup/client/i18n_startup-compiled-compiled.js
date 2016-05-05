/**
 * Created by rodrigoSoladana on 05/05/16.
 */
import { ReactiveDict } from 'meteor/reactive-dict';

Meteor.startup(function () {
    //Session.set("i18n", false);
    //
    TAPi18n.setLanguage('es-MX').done(function () {
        //Session.set("showLoadingIndicator", false);
        //console.log('hecho!!!');
    }).fail(function (error_message) {
        // Handle the situation
        console.log(error_message);
    });
});

//# sourceMappingURL=i18n_startup-compiled.js.map

//# sourceMappingURL=i18n_startup-compiled-compiled.js.map