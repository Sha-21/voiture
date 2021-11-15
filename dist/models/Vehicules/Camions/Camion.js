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
exports.Camion = void 0;
var Vehicule_1 = require("../Vehicule");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    //Constructeur
    function Camion(marque, couleur, prix, moteur, volumeRemorque) {
        var _this = _super.call(this, marque, couleur, prix, moteur) || this;
        _this._volumeRemorque = volumeRemorque;
        return _this;
    }
    Object.defineProperty(Camion.prototype, "volumeRemorque", {
        //Getters and Setters
        get: function () {
            return this.volumeRemorque;
        },
        set: function (volumeRemorque) {
            this.volumeRemorque = volumeRemorque;
        },
        enumerable: false,
        configurable: true
    });
    return Camion;
}(Vehicule_1.Vehicule));
exports.Camion = Camion;
