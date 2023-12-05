import { Model } from 'mongoose';
import { SupplierDocument } from '../schema/supplier.schema';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
export declare class SuppliersService {
    private roleModel;
    constructor(roleModel: Model<SupplierDocument>);
    createRole(roleDto: CreateSupplierDto): Promise<SupplierDocument>;
    findAllRoles(pagination: any, filter: any): Promise<{
        data: SupplierDocument[];
        paginations: {
            page: any;
            pageSize: any;
            total: number;
            totalPage: number;
        };
        messenger: string;
    }>;
    findRoleById(id: string): Promise<SupplierDocument | null>;
    updateRole(id: string, roleDto: CreateSupplierDto): Promise<SupplierDocument | null>;
    deleteRole(id: string): Promise<SupplierDocument | null>;
}
