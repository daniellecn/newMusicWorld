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
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./Services/user.service");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var AppComponent = /** @class */ (function () {
    function AppComponent(userService, snackBar) {
        this.userService = userService;
        this.snackBar = snackBar;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.connectedUser()
            .subscribe(function (_a) {
            var data = _a.data;
            _this.user = data.userQueries.me;
        });
        this.userService.subscribeToNewUsers()
            .subscribe(function (_a) {
            var userCreated = _a.userCreated;
            _this.snackBar.open(userCreated.firstName + " " + userCreated.lastName + " joined our app YAYYY", 'Created', {
                duration: 2000
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './Views/app.component.html',
            styleUrls: ['./CSS/app.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, material_1.MdSnackBar])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map