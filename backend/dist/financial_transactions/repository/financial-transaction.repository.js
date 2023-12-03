<<<<<<< HEAD
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialTransactionRepository = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const financial_transaction_schema_1 = require("../schema/financial-transaction.schema");
let FinancialTransactionRepository = class FinancialTransactionRepository {
    constructor(FinancialTransactionModel) {
        this.FinancialTransactionModel = FinancialTransactionModel;
    }
    async findOne(filter) {
        return this.FinancialTransactionModel.findOne(filter);
    }
    async create(createDto) {
        const created = new this.FinancialTransactionModel(createDto);
        return await created.save();
    }
    async update(id, updateDto) {
        return this.FinancialTransactionModel.findByIdAndUpdate(id, updateDto, { new: true });
    }
    async findAll(filter) {
        return this.FinancialTransactionModel.find(filter);
    }
    async delete(_id) {
        return await this.FinancialTransactionModel.findByIdAndDelete(_id);
    }
};
FinancialTransactionRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(financial_transaction_schema_1.FinancialTransaction.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], FinancialTransactionRepository);
exports.FinancialTransactionRepository = FinancialTransactionRepository;
=======
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialTransactionRepository = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const financial_transaction_schema_1 = require("../schema/financial-transaction.schema");
let FinancialTransactionRepository = class FinancialTransactionRepository {
    constructor(FinancialTransactionModel) {
        this.FinancialTransactionModel = FinancialTransactionModel;
    }
    async findOne(filter) {
        return this.FinancialTransactionModel.findOne(filter);
    }
    async create(createDto) {
        const created = new this.FinancialTransactionModel(createDto);
        return await created.save();
    }
    async update(id, updateDto) {
        return this.FinancialTransactionModel.findByIdAndUpdate(id, updateDto, {
            new: true,
        });
    }
    async findAll(filter, skip, limit) {
        return this.FinancialTransactionModel.find(filter)
            .skip(skip)
            .limit(limit)
            .exec();
    }
    async delete(_id) {
        return await this.FinancialTransactionModel.findByIdAndDelete(_id);
    }
    async countAll(filter) {
        return this.FinancialTransactionModel.countDocuments(filter).exec();
    }
};
FinancialTransactionRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(financial_transaction_schema_1.FinancialTransaction.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], FinancialTransactionRepository);
exports.FinancialTransactionRepository = FinancialTransactionRepository;
>>>>>>> master
//# sourceMappingURL=financial-transaction.repository.js.map