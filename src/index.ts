let contacts = require( './data/contacts.json');
import readline from 'readline';
import { write, read } from './utils';

const getInput = async (question: string): Promise<string> => {
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        read.question(question, (answer) => {
            resolve(answer);
            read.close();
        });
    });
};

const addContact = async () => {
    const name: string = await getInput('Enter name: ');
    const phone: string = await getInput('Enter phone number: ');
    const email: string = await getInput('Enter email: ');
    const contact = { name, phone, email };
    contacts.push(contact);
    await write(contacts);
    console.log('Contact added successfully');
};

const viewContacts = async () => {
    console.log('Contacts:');
    console.table(contacts);
};

const editContact = async () => {
    const name: string = await getInput('Enter name: ');
    const phone: string = await getInput('Enter phone number: ');
    const email: string = await getInput('Enter email: ');
    const contactIndex = contacts.findIndex((contact: any) => contact.name === name);
    if (contactIndex === -1) {
        console.log('Contact not found');
        return;
    }
    if(phone){
        contacts[contactIndex].phone = phone;
    }
    if(email){
        contacts[contactIndex].email = email;
    }
    await write(contacts);
    console.log('Contact updated successfully');
};

const deleteContact = async () => {
    const name: string = await getInput('Enter name: ');
    const contactIndex = contacts.findIndex((contact: any) => contact.name === name);
    if (contactIndex === -1) {
        console.log('Contact not found');
        return;
    }
    contacts.splice(contactIndex, 1);
    await write(contacts);
    console.log('Contact deleted successfully');
};

const searchContact = async () => {
    const name: string = await getInput('Enter name: ');
    const contact = contacts.find((contact: any) => contact.name === name);
    if (!contact) {
        console.log('Contact not found');
        return;
    }
    console.table(contact);
};

const main = async () => {
    console.log('Welcome to contact manager');
    while (true) {
        console.log("Menu:");
        console.log('1. Add contact');
        console.log('2. View contacts');
        console.log('3. Edit contact');
        console.log('4. Delete contact');
        console.log('5. Search contact');
        console.log('6. Exit');
        const choice: any = await getInput('Enter your choice: ');
        if (choice === '6') {
            console.log('exiting...');
            break;
        } else if (choice === '1') {
            await addContact();
        } else if (choice === '2') {
            await viewContacts();
        } else if (choice === '3') {
            await editContact();
        } else if (choice === '4') {
            await deleteContact();
        } else if (choice === '5') {
            await searchContact();
        } else {
            console.log('Invalid choice');  
        }
    }
}

main();