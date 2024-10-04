// owner.service.interface.ts

import { Owner } from "../models/owner.model";
import { Property } from "../models/property.model";
import { Repair } from "../models/repair.model";


export interface OwnerService {
    createOwner(owner: Owner): Promise<Owner>;
    updateOwner(owner: Owner): Promise<Owner>;
    deleteOwner(ownerId: number): Promise<void>;
    //getOwnerById(ownerId: number): Promise<Owner>;
    getAllOwners(): Promise<Owner[]>;
    getOwnerProperties(ownerId: number): Promise<Property[]>;
    getOwnerRepairs(ownerId: number): Promise<Repair[]>;
}
