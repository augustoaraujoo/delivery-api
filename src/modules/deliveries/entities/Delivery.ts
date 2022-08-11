import { v4 as uuidV4 } from 'uuid';
export class Delivery {

    id?: string;
    item_name!: string;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
