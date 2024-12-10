"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[674],{

/***/ 6674:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Add: function() { return /* binding */ Add; }
/* harmony export */ });
/* harmony import */ var o1js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(337);
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Basic Example
 * See https://docs.minaprotocol.com/zkapps for more info.
 *
 * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.
 * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.
 *
 * This file is safe to delete and replace with your own contract.
 */ class Add extends o1js__WEBPACK_IMPORTED_MODULE_0__/* .SmartContract */ .C3 {
    init() {
        super.init();
        this.num.set((0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(1));
    }
    async update() {
        const currentState = this.num.getAndRequireEquals();
        const newState = currentState.add(2);
        this.num.set(newState);
    }
    constructor(){
        super(...arguments);
        this.num = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
    }
}
__decorate([
    (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], Add.prototype, "num", void 0);
__decorate([
    o1js__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Add.prototype, "update", null); //# sourceMappingURL=Add.js.map


/***/ })

}]);