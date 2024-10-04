// src/app/models/property.model.ts

import { Owner } from './owner.model';
import { PropertyType } from '../enums/property-type.enum';
import { Repair } from './repair.model';

export interface Property {
    propertyId: number;
    E9: number;
    propertyCode: number;
    address: string;
    yearOfConstruction: number;
    propertyType: PropertyType;
    owner: Owner;
    repairList?: Repair[]; // Optional field
    deletedProperty?: boolean; // Optional field
}
