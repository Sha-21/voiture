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
exports.MoteurDiesel = void 0;
var Moteur_1 = require("../Moteur");
var MoteurDiesel = /** @class */ (function (_super) {
    __extends(MoteurDiesel, _super);
    //Constructeur
    function MoteurDiesel(vitesse, kilometrage, certificatVert) {
        var _this = _super.call(this, vitesse, kilometrage) || this;
        _this._certificatVert = certificatVert;
        return _this;
    }
    Object.defineProperty(MoteurDiesel.prototype, "certificatVert", {
        //Getters & Setters
        get: function () {
            return this.certificatVert;
        },
        set: function (certificatVert) {
            this.certificatVert = certificatVert;
        },
        enumerable: false,
        configurable: true
    });
    return MoteurDiesel;
}(Moteur_1.Moteur));
exports.MoteurDiesel = MoteurDiesel;
