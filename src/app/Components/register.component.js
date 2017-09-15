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
var user_1 = require("../Modules/user");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("./../Services/user.service");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.showRegError = false;
    }
    RegisterComponent.prototype.register = function (user) {
        var _this = this;
        this.userService.register(user)
            .subscribe(function (_a) {
            var data = _a.data;
            console.log('got data', data);
            _this.router.navigate(['']);
        }, function (error) {
            _this.showRegError = true;
            console.log('there was an error sending the query', error);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_1.User)
    ], RegisterComponent.prototype, "user", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './../Views/register.component.html'
            //   styleUrls: ['./CSS/login.component.css'],
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map