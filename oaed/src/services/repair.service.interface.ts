// repair.service.ts

import { Repair } from "../models/repair.model";


export interface RepairService {
    createRepair(repair: Repair): Promise<Repair>;
    updateRepair(repair: Repair): Promise<Repair>;
    deleteRepair(repairId: number): Promise<void>;
   // getRepairById(repairId: number): Promise<Repair>;
    getAllRepairs(): Promise<Repair[]>;
    getRepairsByProperty(propertyId: number): Promise<Repair[]>; // Method to list repairs by property
}
