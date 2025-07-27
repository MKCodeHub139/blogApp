import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_Url)
    .setProject(import.meta.env.VITE_Database_Id); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
