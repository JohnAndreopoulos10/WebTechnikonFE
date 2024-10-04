// property.service.ts

import { Property } from "../models/property.model";


export interface PropertyService {
    createProperty(property: Property): Promise<Property>;
    updateProperty(property: Property): Promise<Property>;
    deleteProperty(propertyId: number): Promise<void>;
   // getPropertyById(propertyId: number): Promise<Property>;
    getAllProperties(): Promise<Property[]>;
}
