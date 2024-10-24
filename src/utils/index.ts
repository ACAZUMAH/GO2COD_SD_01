import fs from 'fs';

const contactsFile = './src/data/contacts.json';

export const write = async (contacts:any) =>{
    return fs.writeFileSync(
        contactsFile,
        JSON.stringify(contacts)
    );
};

export const read = async () =>{
    return fs.readFileSync(
        contactsFile,
        'utf-8'
    );
};