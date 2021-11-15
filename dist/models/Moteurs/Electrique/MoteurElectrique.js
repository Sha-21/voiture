"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoteurElectrique = void 0;
var Moteur_1 = require("../Moteur");
var MoteurElectrique = /** @class */ (function (_super) {
    __extends(MoteurElectrique, _super);
    //Constructeur
    function MoteurElectrique(vitesse, kilometrage, tempsCharge) {
        var _this = _super.call(this, vitesse, kilometrage) || this;
        _this._tempsCharge = tempsCharge;
        return _this;
    }
    Object.defineProperty(MoteurElectrique.prototype, "tempsCharge", {
        //Getters & Setters
        get: function () {
            return this.tempsCharge;
        },
        set: function (tempsCharge) {
            this.tempsCharge = tempsCharge;
        },
        enumerable: false,
        configurable: true
    });
    return MoteurElectrique;
}(Moteur_1.Moteur));
exports.MoteurElectrique = MoteurElectrique;
