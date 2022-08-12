import { v4 as uuidV4 } from 'uuid';

class Client {
    id?: string;
    username!: string;
    password!: string;
    
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
export { Client };