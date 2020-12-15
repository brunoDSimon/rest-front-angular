(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\frotend\rest-front-angular\src\main.ts */"zUnb");


/***/ }),

/***/ "0qup":
/*!*********************************************************!*\
  !*** ./src/app/features/login/service/login.service.ts ***!
  \*********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/service */ "Hrew");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "QUrN");







class LoginService extends src_app_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["Service"] {
    constructor(http, dateFormatPipe) {
        super();
        this.http = http;
        this.dateFormatPipe = dateFormatPipe;
    }
    auth(body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + `auth`, body, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return this.filter(res);
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            throw this.handleError(error);
        })));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_moment__WEBPACK_IMPORTED_MODULE_5__["DateFormatPipe"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: ngx_moment__WEBPACK_IMPORTED_MODULE_5__["DateFormatPipe"] }]; }, null); })();


/***/ }),

/***/ "3sMM":
/*!******************************************!*\
  !*** ./src/app/shared/models/messege.ts ***!
  \******************************************/
/*! exports provided: Messege */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messege", function() { return Messege; });
const Messege = {
    'erro_inesperado': 'erro ao executar serviço'
};


/***/ }),

/***/ "8YXx":
/*!*****************************************************!*\
  !*** ./src/app/shared/service/UsersData.service.ts ***!
  \*****************************************************/
/*! exports provided: UsersDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDataService", function() { return UsersDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_store_9__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-store-9 */ "vypF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class UsersDataService {
    constructor(router) {
        this.router = router;
        this._userInfo = [];
        this._auth = [];
    }
    get userInfo() {
        return this._userInfo;
    }
    get auth() {
        return this._auth;
    }
    setAuth(_auth) {
        this._auth.push(_auth);
    }
    setUserInfo(_userInfo) {
        this._userInfo.push(_userInfo);
    }
    clearAll() {
        this._auth = [];
        this._userInfo = [];
        this.router.navigate(['/login']);
    }
}
UsersDataService.ɵfac = function UsersDataService_Factory(t) { return new (t || UsersDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UsersDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersDataService, factory: UsersDataService.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_store_9__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"])()
], UsersDataService.prototype, "_userInfo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_store_9__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"])()
], UsersDataService.prototype, "_auth", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { _userInfo: [], _auth: [] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api_url: 'http://localhost:3333/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HdKI":
/*!*********************************************!*\
  !*** ./src/app/shared/pipe/mes-ano.pipe.ts ***!
  \*********************************************/
/*! exports provided: MesAnoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesAnoPipe", function() { return MesAnoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MesAnoPipe {
    transform(value, tipo = 'sigla', apenasMes = false, textConcat, explodir = false) {
        if (value === null || value.length < 6) {
            return null;
        }
        let mes;
        let ano;
        if (explodir) {
            const periodo = value.split('/');
            mes = periodo[0];
            ano = periodo[1];
        }
        else {
            mes = String(value).substr(4, 6);
            ano = String(value).substr(0, 4);
        }
        let retorno = null;
        if (tipo === 'sigla') {
            retorno = this.getSiglaMes(mes);
        }
        else {
            retorno = this.getNomeMes(mes);
        }
        if (apenasMes) {
            return retorno;
        }
        if (typeof textConcat !== 'undefined') {
            return retorno + `${textConcat}` + ano;
        }
        return retorno + ' ' + ano;
    }
    getSiglaMes(mes) {
        let sigla = '';
        switch (mes) {
            case '02':
                sigla = 'Fev';
                break;
            case '03':
                sigla = 'Mar';
                break;
            case '04':
                sigla = 'Abr';
                break;
            case '05':
                sigla = 'Mai';
                break;
            case '06':
                sigla = 'Jun';
                break;
            case '07':
                sigla = 'Jul';
                break;
            case '08':
                sigla = 'Ago';
                break;
            case '09':
                sigla = 'Set';
                break;
            case '10':
                sigla = 'Out';
                break;
            case '11':
                sigla = 'Nov';
                break;
            case '12':
                sigla = 'Dez';
                break;
            default:
                sigla = 'Jan';
        }
        return sigla;
    }
    getNomeMes(mes) {
        let nome = '';
        switch (mes) {
            case '02':
                nome = 'Fevereiro';
                break;
            case '03':
                nome = 'Março';
                break;
            case '04':
                nome = 'Abril';
                break;
            case '05':
                nome = 'Maio';
                break;
            case '06':
                nome = 'Junho';
                break;
            case '07':
                nome = 'Julho';
                break;
            case '08':
                nome = 'Agosto';
                break;
            case '09':
                nome = 'Setembro';
                break;
            case '10':
                nome = 'Outubro';
                break;
            case '11':
                nome = 'Novembro';
                break;
            case '12':
                nome = 'Dezembro';
                break;
            default:
                nome = 'Janeiro';
        }
        return nome;
    }
}
MesAnoPipe.ɵfac = function MesAnoPipe_Factory(t) { return new (t || MesAnoPipe)(); };
MesAnoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "mesAno", type: MesAnoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MesAnoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'mesAno'
            }]
    }], null, null); })();


/***/ }),

/***/ "Hrew":
/*!*******************************************!*\
  !*** ./src/app/shared/service/service.ts ***!
  \*******************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_messege__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/messege */ "3sMM");




class Service {
    constructor() {
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    get headers() {
        return this._headers;
    }
    filter(response, calllback) {
        if ((response.data && response.status.value == "0") || (response.codigo && response.codigo.valor === '0')) {
            return response.data;
        }
        else if (response.status && response.status.messege) {
            throw new Error(response.status.messege);
        }
        else if (response.codigo && response.codigo.descricao) {
            throw new Error(response.codigo.descricao);
        }
        else if (response.access_token) {
            return response;
        }
        else {
            throw new Error(_models_messege__WEBPACK_IMPORTED_MODULE_2__["Messege"].erro_inesperado);
        }
    }
    handleError(err) {
        if (!(err instanceof Error)) {
            return new Error(_models_messege__WEBPACK_IMPORTED_MODULE_2__["Messege"].erro_inesperado);
        }
        else {
            return err;
        }
    }
}
Service.ɵfac = function Service_Factory(t) { return new (t || Service)(); };
Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Service, factory: Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lz8R":
/*!*****************************************************************!*\
  !*** ./src/app/features/login/interceptor/token.interceptor.ts ***!
  \*****************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login.service */ "0qup");
/* harmony import */ var src_app_shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/UsersData.service */ "8YXx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class TokenInterceptor {
    constructor(loginService, userData, router) {
        this.loginService = loginService;
        this.userData = userData;
        this.router = router;
    }
    intercept(request, next) {
        const requestUrl = request.url.split('/');
        const apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url.split('/');
        const token = this.userData.auth[0];
        if (token && (requestUrl[2] === apiUrl[2])) {
            const newRequest = request.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } });
            return next.handle(newRequest);
        }
        else {
            return next.handle(request);
        }
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_3__["UsersDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: src_app_shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_3__["UsersDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "MHl7":
/*!*****************************************************!*\
  !*** ./src/app/features/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/UsersData.service */ "8YXx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_service_CompaniesData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/CompaniesData.service */ "yhyF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






const _c0 = function () { return ["/financeiro"]; };
const _c1 = function () { return ["/financeiro/adicionar-empresa"]; };
const _c2 = function () { return ["/financeiro/adicionar-modelo"]; };
const _c3 = function () { return ["/financeiro/list-producao"]; };
const _c4 = function () { return ["/dashboard"]; };
class HeaderComponent {
    constructor(userData, router, companiesService) {
        this.userData = userData;
        this.router = router;
        this.companiesService = companiesService;
        this._open = false;
        this._logado = false;
    }
    ngOnInit() {
        if (this.userData.auth.length) {
            this._logado = true;
        }
        else {
            this._logado = false;
        }
    }
    get logado() {
        return this._logado;
    }
    get open() {
        return this._open;
    }
    abri() {
        return this._open = !this._open;
    }
    sair() {
        this.companiesService.clear();
        this.userData.clearAll();
        this.router.navigate(['/login']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_1__["UsersDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_CompaniesData_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesDataService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 26, vars: 10, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "shadow", "fixed-top"], [1, "container"], ["href", "#", 1, "navbar-brand", "font-weight-lighter"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLinkActive", "router-link-active", 1, "nav-link", "text-dark", "font-italic", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "nav-link", "text-dark", "font-italic", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Souza Simon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Financeiro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Empresas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Adicionar Modelo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Produ\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_24_listener() { return ctx.sair(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Sair ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".vertical-nav[_ngcontent-%COMP%] {\n  min-width: 17rem;\n  width: 17rem;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);\n  transition: all 0.4s;\n  z-index: 999999;\n}\n.page-content[_ngcontent-%COMP%] {\n  width: calc(100% - 17rem);\n  margin-left: 17rem;\n  transition: all 0.4s;\n}\n\n#sidebar.active[_ngcontent-%COMP%] {\n  margin-left: -17rem;\n}\n#content.active[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  #sidebar[_ngcontent-%COMP%] {\n    margin-left: -17rem;\n  }\n\n  #sidebar.active[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  #content[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n\n  #content.active[_ngcontent-%COMP%] {\n    margin-left: 17rem;\n    width: calc(100% - 17rem);\n  }\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #599fd9;\n  background: linear-gradient(to right, #599fd9, #c2e59c);\n  min-height: 100vh;\n  overflow-x: hidden;\n}\n.text-uppercase[_ngcontent-%COMP%] {\n  letter-spacing: 0.1em;\n}\n.text-gray[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztDQUFBO0FBUUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQUo7QUFHRSx3QkFBQTtBQUVBO0VBQ0UsbUJBQUE7QUFESjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUFESjtBQUlFO0VBQ0U7SUFDRSxtQkFBQTtFQURKOztFQUdFO0lBQ0UsY0FBQTtFQUFKOztFQUVFO0lBQ0UsV0FBQTtJQUNBLFNBQUE7RUFDSjs7RUFDRTtJQUNFLGtCQUFBO0lBQ0EseUJBQUE7RUFFSjtBQUNGO0FBQ0U7Ozs7OztDQUFBO0FBUUE7RUFDRSxtQkFBQTtFQUVBLHVEQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBS0U7RUFDRSxxQkFBQTtBQUZKO0FBS0U7RUFDRSxXQUFBO0FBRkoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKlxyXG4qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIENVU1RPTSBVVElMIENMQVNTRVNcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKlxyXG4qL1xyXG5cclxuLnZlcnRpY2FsLW5hdiB7XHJcbiAgICBtaW4td2lkdGg6IDE3cmVtO1xyXG4gICAgd2lkdGg6IDE3cmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE3cmVtKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxN3JlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIH1cclxuICBcclxuICAvKiBmb3IgdG9nZ2xlIGJlaGF2aW9yICovXHJcbiAgXHJcbiAgI3NpZGViYXIuYWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTdyZW07XHJcbiAgfVxyXG4gIFxyXG4gICNjb250ZW50LmFjdGl2ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjc2lkZWJhciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTdyZW07XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgICNjb250ZW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgICNjb250ZW50LmFjdGl2ZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxN3JlbTtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE3cmVtKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLypcclxuICAqXHJcbiAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAqIEZPUiBERU1PIFBVUlBPU0VcclxuICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICpcclxuICAqL1xyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzU5OWZkOTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTk5ZmQ5LCAjYzJlNTljKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU5OWZkOSwgI2MyZTU5Yyk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLnRleHQtdXBwZXJjYXNlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtZ3JheSB7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_1__["UsersDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_shared_service_CompaniesData_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesDataService"] }]; }, null); })();


/***/ }),

/***/ "OEJG":
/*!************************************************************************!*\
  !*** ./src/app/features/login/interceptor/RefrashToken.interceptor.ts ***!
  \************************************************************************/
/*! exports provided: RefrashTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefrashTokenInterceptor", function() { return RefrashTokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/login.service */ "0qup");
/* harmony import */ var src_app_shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/UsersData.service */ "8YXx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class RefrashTokenInterceptor {
    constructor(loginService, userData, router) {
        this.loginService = loginService;
        this.userData = userData;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                switch (error.status) {
                    case 401:
                        return this.handle401Error(error);
                }
            }
            else {
            }
        }));
    }
    handle401Error(error) {
        if (error.status === 401 && error.error.err === 'Token expired') {
            console.log('caiu no handle', error.status === 401 && error.error.err === 'Token expired');
            this.userData.clearAll();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
}
RefrashTokenInterceptor.ɵfac = function RefrashTokenInterceptor_Factory(t) { return new (t || RefrashTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_5__["UsersDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RefrashTokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RefrashTokenInterceptor, factory: RefrashTokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefrashTokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: src_app_shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_5__["UsersDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _features_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/header/header.component */ "MHl7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'projectAngular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_features_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "T5gh":
/*!**************************************!*\
  !*** ./src/app/guards/auth-guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _features_login_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/login/service/login.service */ "0qup");
/* harmony import */ var _shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/UsersData.service */ "8YXx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGuard {
    constructor(loginService, userData, router) {
        this.loginService = loginService;
        this.userData = userData;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.userData.auth.length) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_features_login_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_2__["UsersDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _features_login_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _shared_service_UsersData_service__WEBPACK_IMPORTED_MODULE_2__["UsersDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_modules_pipe_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/modules/pipe.module */ "fvzC");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "QUrN");
/* harmony import */ var ngx_store_9__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-store-9 */ "vypF");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _features_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/header/header.component */ "MHl7");
/* harmony import */ var _features_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/footer/footer.component */ "lvcI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-currency */ "TT0I");
/* harmony import */ var _features_login_service_login_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/login/service/login.service */ "0qup");
/* harmony import */ var _features_login_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./features/login/interceptor/token.interceptor */ "Lz8R");
/* harmony import */ var _features_login_interceptor_RefrashToken_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./features/login/interceptor/RefrashToken.interceptor */ "OEJG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "JqCM");























Object(_angular_common__WEBPACK_IMPORTED_MODULE_18__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ngx_moment__WEBPACK_IMPORTED_MODULE_5__["DateFormatPipe"],
        _features_login_service_login_service__WEBPACK_IMPORTED_MODULE_15__["LoginService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _features_login_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _features_login_interceptor_RefrashToken_interceptor__WEBPACK_IMPORTED_MODULE_17__["RefrashTokenInterceptor"], multi: true },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'pt' }
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_14__["NgxCurrencyModule"],
            _shared_modules_pipe_module__WEBPACK_IMPORTED_MODULE_0__["PipeModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_14__["NgxCurrencyModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"].forRoot(),
            ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
            ngx_store_9__WEBPACK_IMPORTED_MODULE_6__["WebStorageModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _features_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _features_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_currency__WEBPACK_IMPORTED_MODULE_14__["NgxCurrencyModule"],
        _shared_modules_pipe_module__WEBPACK_IMPORTED_MODULE_0__["PipeModule"],
        ngx_currency__WEBPACK_IMPORTED_MODULE_14__["NgxCurrencyModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
        ngx_store_9__WEBPACK_IMPORTED_MODULE_6__["WebStorageModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _features_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _features_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_14__["NgxCurrencyModule"],
                    _shared_modules_pipe_module__WEBPACK_IMPORTED_MODULE_0__["PipeModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_14__["NgxCurrencyModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"].forRoot(),
                    ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
                    ngx_store_9__WEBPACK_IMPORTED_MODULE_6__["WebStorageModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"]
                ],
                providers: [
                    ngx_moment__WEBPACK_IMPORTED_MODULE_5__["DateFormatPipe"],
                    _features_login_service_login_service__WEBPACK_IMPORTED_MODULE_15__["LoginService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _features_login_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _features_login_interceptor_RefrashToken_interceptor__WEBPACK_IMPORTED_MODULE_17__["RefrashTokenInterceptor"], multi: true },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'pt' }
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fqHQ":
/*!*******************************************!*\
  !*** ./src/app/shared/pipe/reais.pipe.ts ***!
  \*******************************************/
/*! exports provided: ReaisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReaisPipe", function() { return ReaisPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ReaisPipe {
    transform(value, currencySign = 'R$ ', decimalLength = 2, chunkDelimiter = '.', decimalDelimiter = ',', chunkLength = 3) {
        value = Number(value);
        if (isNaN(value)) {
            value = 0;
        }
        const result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
        const num = value.toFixed(Math.max(0, ~~decimalLength));
        return currencySign + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
    }
}
ReaisPipe.ɵfac = function ReaisPipe_Factory(t) { return new (t || ReaisPipe)(); };
ReaisPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "reais", type: ReaisPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReaisPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'reais'
            }]
    }], null, null); })();


/***/ }),

/***/ "fvzC":
/*!***********************************************!*\
  !*** ./src/app/shared/modules/pipe.module.ts ***!
  \***********************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _pipe_reais_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pipe/reais.pipe */ "fqHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pipe_mes_ano_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipe/mes-ano.pipe */ "HdKI");




class PipeModule {
}
PipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PipeModule });
PipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PipeModule_Factory(t) { return new (t || PipeModule)(); }, providers: [
        _pipe_reais_pipe__WEBPACK_IMPORTED_MODULE_0__["ReaisPipe"],
        _pipe_mes_ano_pipe__WEBPACK_IMPORTED_MODULE_2__["MesAnoPipe"]
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PipeModule, { declarations: [_pipe_reais_pipe__WEBPACK_IMPORTED_MODULE_0__["ReaisPipe"],
        _pipe_mes_ano_pipe__WEBPACK_IMPORTED_MODULE_2__["MesAnoPipe"]], exports: [_pipe_reais_pipe__WEBPACK_IMPORTED_MODULE_0__["ReaisPipe"],
        _pipe_mes_ano_pipe__WEBPACK_IMPORTED_MODULE_2__["MesAnoPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _pipe_reais_pipe__WEBPACK_IMPORTED_MODULE_0__["ReaisPipe"],
                    _pipe_mes_ano_pipe__WEBPACK_IMPORTED_MODULE_2__["MesAnoPipe"]
                ],
                providers: [
                    _pipe_reais_pipe__WEBPACK_IMPORTED_MODULE_0__["ReaisPipe"],
                    _pipe_mes_ano_pipe__WEBPACK_IMPORTED_MODULE_2__["MesAnoPipe"]
                ],
                exports: [
                    _pipe_reais_pipe__WEBPACK_IMPORTED_MODULE_0__["ReaisPipe"],
                    _pipe_mes_ano_pipe__WEBPACK_IMPORTED_MODULE_2__["MesAnoPipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lvcI":
/*!*****************************************************!*\
  !*** ./src/app/features/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth-guard */ "T5gh");





const routes = [
    {
        path: 'financeiro',
        loadChildren: () => Promise.all(/*! import() | features-financeiro-financeiro-module */[__webpack_require__.e("default~features-dashboard-dashboard-module~features-financeiro-financeiro-module~features-login-login-module"), __webpack_require__.e("features-financeiro-financeiro-module")]).then(__webpack_require__.bind(null, /*! ./features/financeiro/financeiro.module */ "Yxk5")).then(m => m.FinanceiroModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | features-dashboard-dashboard-module */[__webpack_require__.e("default~features-dashboard-dashboard-module~features-financeiro-financeiro-module~features-login-login-module"), __webpack_require__.e("features-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./features/dashboard/dashboard.module */ "IAk5")).then(m => m.DashboardModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | features-login-login-module */[__webpack_require__.e("default~features-dashboard-dashboard-module~features-financeiro-financeiro-module~features-login-login-module"), __webpack_require__.e("features-login-login-module")]).then(__webpack_require__.bind(null, /*! ./features/login/login.module */ "vm+o")).then(m => m.LoginModule),
    },
    {
        path: '',
        redirectTo: 'financeiro',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'financeiro',
        pathMatch: 'full'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yhyF":
/*!*********************************************************!*\
  !*** ./src/app/shared/service/CompaniesData.service.ts ***!
  \*********************************************************/
/*! exports provided: CompaniesDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesDataService", function() { return CompaniesDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_store_9__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-store-9 */ "vypF");





class CompaniesDataService {
    constructor(session) {
        this.session = session;
        this._companies = [];
        this._users = [];
    }
    get companies() {
        return this._companies;
    }
    get users() {
        return this._users;
    }
    setCompanies(_companies) {
        this._companies.push(_companies);
    }
    setUsers(_users) {
        this._users.push(_users);
    }
    clear() {
        delete this._companies;
        delete this._users;
        this._companies = [];
        this._users = [];
    }
}
CompaniesDataService.ɵfac = function CompaniesDataService_Factory(t) { return new (t || CompaniesDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_store_9__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"])); };
CompaniesDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompaniesDataService, factory: CompaniesDataService.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_store_9__WEBPACK_IMPORTED_MODULE_2__["SessionStorage"])()
], CompaniesDataService.prototype, "_companies", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_store_9__WEBPACK_IMPORTED_MODULE_2__["SessionStorage"])()
], CompaniesDataService.prototype, "_users", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompaniesDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_store_9__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"] }]; }, { _companies: [], _users: [] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map