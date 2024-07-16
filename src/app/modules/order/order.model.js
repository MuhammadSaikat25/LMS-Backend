"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    courseId: {
        type: String,
    },
    payment_info: {
        type: Object,
    },
    userId: {
        type: String,
    },
}, { timestamps: true });
exports.OrderModel = (0, mongoose_1.model)("order", OrderSchema);
