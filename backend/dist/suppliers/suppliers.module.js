<<<<<<< HEAD
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppliersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const supplier_schema_1 = require("./schema/supplier.schema");
const suppliers_controller_1 = require("./controllers/suppliers.controller");
const suppliers_service_1 = require("./services/suppliers.service");
const supplier_repository_1 = require("./repository/supplier.repository");
let SuppliersModule = class SuppliersModule {
};
SuppliersModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: supplier_schema_1.Supplier.name, schema: supplier_schema_1.SupplierSchema }]),
        ],
        controllers: [suppliers_controller_1.SuppliersController],
        providers: [suppliers_service_1.SuppliersService, supplier_repository_1.SuppliersRepository],
    })
], SuppliersModule);
exports.SuppliersModule = SuppliersModule;
=======
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppliersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const supplier_schema_1 = require("./schema/supplier.schema");
const suppliers_controller_1 = require("./controllers/suppliers.controller");
const suppliers_service_1 = require("./services/suppliers.service");
let SuppliersModule = class SuppliersModule {
};
SuppliersModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: supplier_schema_1.Supplier.name, schema: supplier_schema_1.SupplierSchema }]),
        ],
        controllers: [suppliers_controller_1.SuppliersController],
        providers: [suppliers_service_1.SuppliersService],
    })
], SuppliersModule);
exports.SuppliersModule = SuppliersModule;
>>>>>>> master
//# sourceMappingURL=suppliers.module.js.map