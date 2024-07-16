"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const auth_1 = require("../../middelware/auth");
const route = (0, express_1.Router)();
route.post("/order", (0, auth_1.auth)('admin'), order_controller_1.orderController.createOrder);
exports.orderRouter = route;
