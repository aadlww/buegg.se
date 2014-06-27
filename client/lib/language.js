/**
 * Created by andersaslund on 2014-06-27.
 */
// Set a default language.


i18n.setDefaultLanguage('en_US');


//@getLanguage = (language) ->
//if language.match /fr/
//    language = 'fr_FR'
//
//else
//language = 'en_US'
//
//return language


// Our translated strings.

i18n.map('en_US', {
    home: {
        what_is: 'What is',
        welcome: 'Welcome to',
        contact: 'Contact us on:'
    },
    links: {
        home: 'Home',
        news: 'News',
        admin: 'Admin'
    }
});

i18n.map('sv_SE', {
    home: {
        what_is: 'Vad är',
        welcome: 'Välkommen till',
        contact: 'Kontakta oss gärna på:'
    },
    links: {
        home: 'Hem',
        news: 'Nyheter',
        admin: 'Admin'
    }
});

//i18n.showMissing('[no translation for "<%= label %>" in <%= language %>]');