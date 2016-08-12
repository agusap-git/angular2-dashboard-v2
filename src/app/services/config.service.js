"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
require('rxjs/add/operator/map');
var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('src/app/config/env.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (env_data) {
                _this._env = env_data;
                _this.http.get('src/app/config/' + env_data.env + '.json')
                    .map(function (res) { return res.json(); })
                    .catch(function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                })
                    .subscribe(function (data) {
                    _this._config = data;
                    resolve(true);
                });
            });
        });
    };
    ConfigService.prototype.getEnv = function (key) {
        return this._env[key];
    };
    ConfigService.prototype.get = function (key) {
        return this._config[key];
    };
    ConfigService.prototype.setCustom = function (key, val) {
        this._configCustom[key] = val;
    };
    ConfigService.prototype.getCustom = function (key) {
        return this._configCustom[key];
    };
    ConfigService = __decorate([
        core_1.Injectable()
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
;
//# sourceMappingURL=config.service.js.map