import { Client, Account, Databases,Storage} from 'appwrite';

export const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_Url)
    .setProject(import.meta.env.VITE_Project_Id); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID } from 'appwrite';
