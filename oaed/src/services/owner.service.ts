// owner.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwnerService } from './owner.service.interface';
import { Owner } from '../models/owner.model';
import { Property } from '../models/property.model';
import { Repair } from '../models/repair.model';

@Injectable({
    providedIn: 'root',
})
export class OwnerServiceImpl implements OwnerService {
    // private baseUrl = 'nikos koukos'; // work in progress

    constructor(/* private http: HttpClient */) {}

    createOwner(owner: Owner): Promise<Owner> {
        // return this.http.post<Owner>(this.baseUrl, owner).toPromise();
        console.log("Creating owner:", owner); 
        return Promise.resolve(owner); 
    }

    updateOwner(owner: Owner): Promise<Owner> {
        // return this.http.put<Owner>(`${this.baseUrl}/${owner.id}`, owner).toPromise();
        console.log("Updating owner:", owner); 
        return Promise.resolve(owner); 
    }

    deleteOwner(ownerId: number): Promise<void> {
        // return this.http.delete<void>(`${this.baseUrl}/${ownerId}`).toPromise();
        console.log("Deleting owner with ID:", ownerId); 
        return Promise.resolve(); 
    }

    // getOwnerById(ownerId: number): Promise<Owner> {
    //     // return this.http.get<Owner>(`${this.baseUrl}/${ownerId}`).toPromise();
    //     console.log("Getting owner with ID:", ownerId); 
    //     return Promise.resolve({ id: ownerId, vatNumber: '', name: '', surname: '', address: '', phoneNumber: '', email: '', password: '' }); 
    // }

    getAllOwners(): Promise<Owner[]> {
        // return this.http.get<Owner[]>(this.baseUrl).toPromise();
        console.log("Getting all owners"); 
        return Promise.resolve([]); 
    }

    getOwnerProperties(ownerId: number): Promise<Property[]> {
        // return this.http.get<Property[]>(`${this.baseUrl}/${ownerId}/properties`).toPromise();
        console.log("Getting properties for owner with ID:", ownerId); 
        return Promise.resolve([]); 
    }

    getOwnerRepairs(ownerId: number): Promise<Repair[]> {
        // return this.http.get<Repair[]>(`${this.baseUrl}/${ownerId}/repairs`).toPromise();
        console.log("Getting repairs for owner with ID:", ownerId); 
        return Promise.resolve([]); 
    }
}
