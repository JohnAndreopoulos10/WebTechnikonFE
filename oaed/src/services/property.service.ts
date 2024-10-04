// property.service.ts
import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

import { PropertyService } from './property.service.interface';
import { Property } from '../models/property.model';

@Injectable({
    providedIn: 'root',
})
export class PropertyServiceImpl implements PropertyService {
    // private baseUrl = 'nikos koukos'; // work in progress

    constructor(/* private http: HttpClient */) {}

    createProperty(property: Property): Promise<Property> {
        // return this.http.post<Property>(this.baseUrl, property).toPromise();
        console.log("Creating property:", property); 
        return Promise.resolve(property); 
    }

    updateProperty(property: Property): Promise<Property> {
        // return this.http.put<Property>(`${this.baseUrl}/${property.id}`, property).toPromise();
        console.log("Updating property:", property); 
        return Promise.resolve(property); 
    }

    deleteProperty(propertyId: number): Promise<void> {
        // return this.http.delete<void>(`${this.baseUrl}/${propertyId}`).toPromise();
        console.log("Deleting property with ID:", propertyId); 
        return Promise.resolve(); 
    }

    // getPropertyById(propertyId: number): Promise<Property> {
    //     // return this.http.get<Property>(`${this.baseUrl}/${propertyId}`).toPromise();
    //     console.log("Getting property with ID:", propertyId); 
    //     return Promise.resolve({ id: propertyId, propertyId: '', address: '', yearOfConstruction: 0, ownerId: 0 }); 
    // } 

    getAllProperties(): Promise<Property[]> {
        // return this.http.get<Property[]>(this.baseUrl).toPromise();
        console.log("Getting all properties"); 
        return Promise.resolve([]); 
    }
}
