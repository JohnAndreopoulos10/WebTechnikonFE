// src/app/models/owner.model.ts

import { Property } from "./property.model";


export interface Owner {
    ownerId: number;
    vatNumber: number;
    name: string;
    surName: string;
    address: string;
    phoneNumber: string;
    email: string;
    username: string;
    password: string;
    propertyList: Property[];
    deletedOwner?: boolean; // Optional field, default is false
}
