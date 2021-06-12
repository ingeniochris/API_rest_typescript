"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authCtrl_1 = require("../controllers/authCtrl");
const router = express_1.Router();
router.route("/").
    get(authCtrl_1.authStart);
exports.default = router;
//# sourceMappingURL=auth.js.map