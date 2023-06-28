const argv = require('yargs').argv;

const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const listContacts = await contacts.listContacts();
            return console.log(listContacts);
        case 'get':
            const getContact = await contacts.getContactById(id);
            return console.log(getContact);
        case 'add':
            const newContact = await contacts.addContact({name, email, phone});
            return console.log(newContact);
        case 'remove':
            const removedContact = await contacts.removeContact(id);
            return console.log(removedContact);
        default:
             console.warn("\x1B[31m Unknown action type!");
    }
};

invokeAction(argv);