import { Client } from "fauna";

const client = new Client({
    secret: process.env.NEXT_PUBLIC_SECRET_FAUNA
});
export default client