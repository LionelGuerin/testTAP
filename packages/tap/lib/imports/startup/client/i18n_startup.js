/**
 * Created by rodrigoSoladana on 05/05/16.
 */
import { ReactiveDict } from 'meteor/reactive-dict';

Meteor.startup(function() {
    //Session.set("i18n", false);
    //
    // TAPi18n.setLanguage('es-MX')
    TAPi18n.setLanguage('en')
        .done(function() {
            //Session.set("showLoadingIndicator", false);
            //console.log('hecho!!!');
        })
        .fail(function(error_message) {
            // Handle the situation
            console.log(error_message);
        });
});
