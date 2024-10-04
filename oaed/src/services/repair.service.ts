// repair.service.ts
import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { RepairService } from './repair.service.interface';
import { Repair } from '../models/repair.model';

@Injectable({
    providedIn: 'root',
})
export class RepairServiceImpl implements RepairService {
    // private baseUrl = 'nikos koukos'; 

    constructor(/* private http: HttpClient */) {}

    createRepair(repair: Repair): Promise<Repair> {
        // return this.http.post<Repair>(this.baseUrl, repair).toPromise();
        console.log("Creating repair:", repair); 
        return Promise.resolve(repair); 
    }

    updateRepair(repair: Repair): Promise<Repair> {
        // return this.http.put<Repair>(`${this.baseUrl}/${repair.id}`, repair).toPromise();
        console.log("Updating repair:", repair); 
        return Promise.resolve(repair); 
    }

    deleteRepair(repairId: number): Promise<void> {
        // return this.http.delete<void>(`${this.baseUrl}/${repairId}`).toPromise();
        console.log("Deleting repair with ID:", repairId); 
        return Promise.resolve(); 
    }

    // getRepairById(repairId: number): Promise<Repair> {
    //     // return this.http.get<Repair>(`${this.baseUrl}/${repairId}`).toPromise();
    //     console.log("Getting repair with ID:", repairId); // Placeholder for implementation
    //     return Promise.resolve({ id: repairId, date: new Date(), type: '', description: '', address: '', status: '', cost: 0, ownerId: 0 }); // Placeholder for implementation
    // }

    getAllRepairs(): Promise<Repair[]> {
        // return this.http.get<Repair[]>(this.baseUrl).toPromise();
        console.log("Getting all repairs"); 
        return Promise.resolve([]); 
    }

    getRepairsByProperty(propertyId: number): Promise<Repair[]> {
        // return this.http.get<Repair[]>(`${this.baseUrl}/property/${propertyId}`).toPromise();
        console.log("Getting repairs for property with ID:", propertyId); 
        return Promise.resolve([]); 
    }
}
