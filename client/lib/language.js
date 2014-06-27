/**
 * Created by andersaslund on 2014-06-27.
 */
// Set a default language.
i18n.setDefaultLanguage('en_US');

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
        about: 'About',
        admin: 'Admin'
    },
    edit: {
        title: 'Title',
        title_descr: 'the text shown in the navigation bar',
        route: 'Route',
        route_descr: 'the text shown in the url',
        content: 'Content',
        save: 'Save',
        abort: 'Cancel',
        add: 'Add',
        edit: 'Edit',
        remove: 'X'
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
        about: 'Om företaget',
        admin: 'Admin'
    },
    edit: {
        title: 'Titel',
        title_descr: 'text som visas i menyn',
        route: 'Route',
        route_descr: 'text som skapar urlen',
        content: 'Innehåll',
        save: 'Spara',
        abort: 'Avbryt',
        add: 'Skapa',
        edit: 'Ändra',
        remove: 'X'
    }
});

//i18n.showMissing('[no translation for "<%= label %>" in <%= language %>]');