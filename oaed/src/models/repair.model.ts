// src/app/models/repair.model.ts

import { Property } from './property.model';
import { RepairType } from '../enums/repair-type.enum';
import { RepairStatus } from '../enums/repair-status.enum';

export interface Repair {
    repairId: number;
    repairType: RepairType; // Should be defined as enum
    shortDescription?: string; // Optional field
    dateOfSubmission?: Date; // Optional field
    descriptionOfWork?: string; // Optional field
    proposedDateOfStart?: Date; // Optional field
    proposedDateOfEnd?: Date; // Optional field
    proposedCost?: number; // Using number to represent BigDecimal
    acceptance?: boolean; // Optional field
    repairStatus?: RepairStatus; // Should be defined as enum
    dateOfStart?: Date; // Optional field
    dateOfEnd?: Date; // Optional field
    deletedRepair?: boolean; // Optional field
    property: Property; // Relationship to Property
}
