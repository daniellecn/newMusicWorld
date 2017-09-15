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
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = require("graphql-tag");
var UserService = /** @class */ (function () {
    function UserService(apollo) {
        this.apollo = apollo;
    }
    UserService.prototype.login = function (userName, password) {
        var loginUser = (_a = ["\n        mutation loginUser($userName: String!, $password:String!) {\n            userMutations {\n              loginUser(userName: $userName, password: $password) {\n                __typename \n                id\n                userName\n                firstName\n                lastName\n                isAdmin\n              }\n            }\n          }\n        "], _a.raw = ["\n        mutation loginUser($userName: String!, $password:String!) {\n            userMutations {\n              loginUser(userName: $userName, password: $password) {\n                __typename \n                id\n                userName\n                firstName\n                lastName\n                isAdmin\n              }\n            }\n          }\n        "], graphql_tag_1.default(_a));
        return this.apollo.mutate({
            mutation: loginUser,
            variables: {
                userName: userName,
                password: password
            },
            updateQueries: {
                // update apollo store
                connectedUser: function (prev, _a) {
                    var mutationResult = _a.mutationResult;
                    if (!mutationResult.data) {
                        return prev;
                    }
                    return Object.assign({}, prev, {
                        userQueries: {
                            me: mutationResult.data.userMutations.loginUser
                        },
                    });
                },
            },
        });
        var _a;
    };
    UserService.prototype.register = function (user) {
        var registerUser = (_a = ["\n        mutation registerUser($userName: String!, $password:String!, $firstName: String!, $lastName: String!) {\n          userMutations {\n            createUser(userName: $userName, password:$password, firstName:$firstName, lastName:$lastName) {\n                __typename \n              id\n              userName\n              firstName\n              lastName\n              isAdmin\n            }\n          }\n        }\n        "], _a.raw = ["\n        mutation registerUser($userName: String!, $password:String!, $firstName: String!, $lastName: String!) {\n          userMutations {\n            createUser(userName: $userName, password:$password, firstName:$firstName, lastName:$lastName) {\n                __typename \n              id\n              userName\n              firstName\n              lastName\n              isAdmin\n            }\n          }\n        }\n        "], graphql_tag_1.default(_a));
        return this.apollo.mutate({
            mutation: registerUser,
            variables: user,
            updateQueries: {
                // update apollo store
                connectedUser: function (prev, _a) {
                    var mutationResult = _a.mutationResult;
                    if (!mutationResult.data) {
                        return prev;
                    }
                    return Object.assign({}, prev, {
                        userQueries: {
                            me: mutationResult.data.userMutations.createUser
                        },
                    });
                },
            },
        });
        var _a;
    };
    UserService.prototype.logout = function () {
        var logoutUser = (_a = ["\n        mutation logoutUser {\n          userMutations {\n            disconnect\n          }\n        }\n        "], _a.raw = ["\n        mutation logoutUser {\n          userMutations {\n            disconnect\n          }\n        }\n        "], graphql_tag_1.default(_a));
        return this.apollo.mutate({
            mutation: logoutUser,
            updateQueries: {
                // update apollo store
                connectedUser: function (prev, _a) {
                    var mutationResult = _a.mutationResult;
                    if (!mutationResult.data) {
                        return prev;
                    }
                    return Object.assign({}, prev, {
                        userQueries: {
                            me: null
                        },
                    });
                },
            },
        });
        var _a;
    };
    UserService.prototype.connectedUser = function () {
        var connectedUser = (_a = ["\n        query connectedUser {\n          userQueries {\n            me {\n              __typename \n              id\n              userName\n              firstName\n              lastName\n              isAdmin\n            }\n          }\n        }\n        "], _a.raw = ["\n        query connectedUser {\n          userQueries {\n            me {\n              __typename \n              id\n              userName\n              firstName\n              lastName\n              isAdmin\n            }\n          }\n        }\n        "], graphql_tag_1.default(_a));
        return this.apollo.watchQuery({
            query: connectedUser
        });
        var _a;
    };
    UserService.prototype.subscribeToNewUsers = function () {
        var newUser = (_a = ["\n        subscription newUser{\n            userCreated {\n              id\n              userName\n              firstName\n              lastName\n            }\n          }\n        "], _a.raw = ["\n        subscription newUser{\n            userCreated {\n              id\n              userName\n              firstName\n              lastName\n            }\n          }\n        "], graphql_tag_1.default(_a));
        return this.apollo.subscribe({
            query: newUser
        });
        var _a;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map