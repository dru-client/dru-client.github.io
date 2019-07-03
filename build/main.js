webpackJsonp([1],{

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.module": [
		302,
		0
	],
	"../pages/login/login.module": [
		166
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_solicitacao_service_solicitacao_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SolicitacaoPage = (function () {
    function SolicitacaoPage(navCtrl, navParams, solicitacaoService, loadingController, toastCtrl, cookieService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.solicitacaoService = solicitacaoService;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.cookieService = cookieService;
        this.hasFilter = false;
        this.mostraSearchbar = false;
        this.mostraNova = false;
        this.mostraAutorizada = false;
        this.mostraNegada = false;
        this.tituloToolBar = "Solicitação";
        this.situacao = navParams.get("situacao");
        this.loading = loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });
        this.usuarioLogado = JSON.parse(this.cookieService.get("usuarioAtual"));
        this.usuario_cpf = this.usuarioLogado.cpf;
    }
    SolicitacaoPage.prototype.ionViewWillEnter = function () {
        switch (this.situacao.toUpperCase()) {
            case 'NOVA':
                this.tituloToolBar = "Solicitações a analisar";
                this.doSolicitacoesNovas();
                break;
            case 'AUTORIZADA':
                this.tituloToolBar = "Solicitações autorizadas";
                this.doSolicitacoesAprovadas();
                break;
            case 'NEGADA':
                this.tituloToolBar = "Solicitações negadas";
                this.doSolicitacoesNegadas();
                break;
            default:
                this.tituloToolBar = "Solicitações a analisar";
                this.doSolicitacoesNovas();
                break;
        }
    };
    SolicitacaoPage.prototype.doSolicitacoesNovas = function () {
        var _this = this;
        this.solicitacoes = this.noFilter;
        this.loading.present();
        this.tornarFalsaVariaveisMostrar();
        this.mostraNova = true;
        this.solicitacaoService.getSolicitacoesNovas(this.usuario_cpf).subscribe(function (response) {
            _this.solicitacoes = response;
            _this.loading.dismiss();
            _this.noFilter = _this.solicitacoes;
            _this.hasFilter = false;
        }, function (error) {
            _this.loading.dismiss();
            console.warn(error);
        });
    };
    SolicitacaoPage.prototype.doSolicitacoesAprovadas = function () {
        var _this = this;
        this.solicitacoes = this.noFilter;
        this.loading.present();
        this.tornarFalsaVariaveisMostrar();
        this.mostraAutorizada = true;
        this.solicitacaoService.getSolicitacoesAutorizadas(this.usuario_cpf).subscribe(function (response) {
            _this.solicitacoes = response;
            _this.loading.dismiss();
            _this.noFilter = _this.solicitacoes;
            _this.hasFilter = false;
        }, function (error) {
            _this.loading.dismiss();
            console.warn(error);
        });
    };
    SolicitacaoPage.prototype.doSolicitacoesNegadas = function () {
        var _this = this;
        this.solicitacoes = this.noFilter;
        this.loading.present();
        this.tornarFalsaVariaveisMostrar();
        this.mostraNegada = true;
        this.solicitacaoService.getSolicitacoesNegadas(this.usuario_cpf).subscribe(function (response) {
            _this.solicitacoes = response;
            _this.loading.dismiss();
            _this.noFilter = _this.solicitacoes;
            _this.hasFilter = false;
        }, function (error) {
            _this.loading.dismiss();
            console.warn(error);
        });
    };
    SolicitacaoPage.prototype.doClickContact = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
    };
    SolicitacaoPage.prototype.filtrarRegistros = function () {
        var _this = this;
        this.hasFilter = false;
        this.solicitacoes = this.noFilter.filter(function (item) {
            return (item.solicitanteCpf.toLowerCase().indexOf(_this.termoPesquisa.toLowerCase()) > -1 ||
                item.solicitanteNome.toLowerCase().indexOf(_this.termoPesquisa.toLowerCase()) > -1 ||
                item.solicitanteEmail.toLowerCase().indexOf(_this.termoPesquisa.toLowerCase()) > -1);
        });
    };
    SolicitacaoPage.prototype.alternarSearchbar = function () {
        this.mostraSearchbar = !this.mostraSearchbar;
    };
    SolicitacaoPage.prototype.autorizarConsulta = function (solicitacao) {
        var _this = this;
        this.solicitacaoService.getAutorizarSolicitacao(solicitacao.id).subscribe(function (response) {
            _this.retorno = response;
        }, function (error) {
            console.warn(error);
        });
        var indice = this.solicitacoes.indexOf(solicitacao);
        this.solicitacoes.splice(indice, 1);
        var toast = this.toastCtrl.create({
            message: "Autorizada consulta solicitada por " + solicitacao.solicitanteNome,
            duration: 6000,
            showCloseButton: true,
            closeButtonText: "FECHAR"
        });
        toast.present();
    };
    SolicitacaoPage.prototype.negarConsulta = function (solicitacao) {
        var _this = this;
        this.solicitacaoService.getSolicitacoesNegadas(solicitacao.id).subscribe(function (response) {
            _this.retorno = response;
        }, function (error) {
            console.warn(error);
        });
        var indice = this.solicitacoes.indexOf(solicitacao);
        this.solicitacoes.splice(indice, 1);
        var toast = this.toastCtrl.create({
            message: "Negada consulta solicitada por " + solicitacao.solicitanteNome,
            duration: 6000,
            showCloseButton: true,
            closeButtonText: "FECHAR"
        });
        toast.present();
    };
    SolicitacaoPage.prototype.tornarFalsaVariaveisMostrar = function () {
        this.mostraNegada = false;
        this.mostraAutorizada = false;
        this.mostraNova = false;
    };
    SolicitacaoPage.prototype.removerMinhaSolicitacao = function (solicitacao) {
        var _this = this;
        this.solicitacaoService.deletarMinhaSolicitacao(solicitacao.id).subscribe(function (response) {
            _this.retorno = response;
        }, function (error) {
            console.warn(error);
        });
        var indice = this.solicitacoes.indexOf(solicitacao);
        this.solicitacoes.splice(indice, 1);
        var toast = this.toastCtrl.create({
            message: "Deletada solicitacao feita por " + solicitacao.solicitanteNome,
            duration: 6000,
            showCloseButton: true,
            closeButtonText: "FECHAR"
        });
        toast.present();
    };
    return SolicitacaoPage;
}());
SolicitacaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'solicitacao-page',template:/*ion-inline-start:"C:\Users\android\dru\dru-sd-front\src\pages\solicitacao\solicitacao.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      {{tituloToolBar}}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="alternarSearchbar()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-toolbar *ngIf="mostraSearchbar">\n\n    <ion-searchbar [(ngModel)]="termoPesquisa" (ionInput)="filtrarRegistros()" animated="true" placeholder="Pesquisar">\n\n    </ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n\n\n  <ion-list no-padding>\n\n\n\n    <ion-item no-padding *ngFor="let solicitacao of solicitacoes">\n\n\n\n      <ion-icon padding name="thumbs-up" class="medio" color="cinza-claro" item-left *ngIf="mostraAutorizada">\n\n      </ion-icon>\n\n      <ion-icon padding name="thumbs-down" class="medio" color="cinza-claro" item-left *ngIf="mostraNegada"></ion-icon>\n\n \n\n      <h3><b>{{solicitacao.solicitanteNome}}</b></h3>\n\n      <h4>{{solicitacao.solicitanteCpf}}</h4>\n\n      <h4>{{solicitacao.solicitanteEmail}}</h4>\n\n      <h4>Solicitado em: {{solicitacao.solicitadoEm | date: \'dd/MM/yyyy HH:mm:ss\'}}</h4>\n\n      <span *ngIf="mostraAutorizada"><h4>Autorizada em: <b>{{solicitacao.modificacaoEm | date: \'dd/MM/yyyy HH:mm:ss\'}}</b></h4></span>\n\n      <span *ngIf="mostraNegada"><h4>Negada em: <b>{{solicitacao.modificacaoEm | date: \'dd/MM/yyyy HH:mm:ss\'}}</b></h4></span>\n\n\n\n\n\n\n\n      <ion-icon padding name="thumbs-up" class="medio" color="secondary" item-right\n\n        (click)="autorizarConsulta(solicitacao)" *ngIf="mostraNova"></ion-icon>\n\n      <ion-icon name="thumbs-down" class="medio" color="danger" item-right (click)="negarConsulta(solicitacao)"\n\n        *ngIf="mostraNova"></ion-icon>\n\n\n\n        <ion-icon padding name="trash" class="medio" color="dark" item-right (click)="removerMinhaSolicitacao(solicitacao)" *ngIf="mostraNova"></ion-icon>\n\n\n\n        <ion-icon padding name="trash" class="medio" color="danger" item-right (click)="removerMinhaSolicitacao(solicitacao)" *ngIf="mostraAutorizada || mostraNegada"></ion-icon>\n\n        \n\n\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\android\dru\dru-sd-front\src\pages\solicitacao\solicitacao.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__providers_solicitacao_service_solicitacao_service__["a" /* SolicitacaoServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_solicitacao_service_solicitacao_service__["a" /* SolicitacaoServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]])
], SolicitacaoPage);

//# sourceMappingURL=solicitacao.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaSolicitacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_solicitacao_service_solicitacao_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visualizar_visualizar__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MinhaSolicitacaoPage = (function () {
    function MinhaSolicitacaoPage(navCtrl, navParams, solicitacaoService, loadingController, toastCtrl, cookieService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.solicitacaoService = solicitacaoService;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.cookieService = cookieService;
        this.hasFilter = false;
        this.mostraSearchbar = false;
        this.tituloToolBar = "Minhas Solicitações";
        this.situacao = navParams.get("situacao");
        this.loading = loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });
        this.usuarioLogado = JSON.parse(this.cookieService.get("usuarioAtual"));
        this.usuario_cpf = this.usuarioLogado.cpf;
    }
    MinhaSolicitacaoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.solicitacoes = this.noFilter;
        this.loading.present();
        this.solicitacaoService.getMinhasSolicitacoes(this.usuario_cpf).subscribe(function (response) {
            _this.solicitacoes = response;
            _this.loading.dismiss();
            _this.noFilter = _this.solicitacoes;
            _this.hasFilter = false;
        }, function (error) {
            _this.loading.dismiss();
            console.warn(error);
        });
    };
    MinhaSolicitacaoPage.prototype.doClickContact = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
    };
    MinhaSolicitacaoPage.prototype.filtrarRegistros = function () {
        var _this = this;
        this.hasFilter = false;
        this.solicitacoes = this.noFilter.filter(function (item) {
            return (item.solicitadoCpf.toLowerCase().indexOf(_this.termoPesquisa.toLowerCase()) > -1 ||
                item.solicitadoNome.toLowerCase().indexOf(_this.termoPesquisa.toLowerCase()) > -1 ||
                item.solicitadoEmail.toLowerCase().indexOf(_this.termoPesquisa.toLowerCase()) > -1);
        });
    };
    MinhaSolicitacaoPage.prototype.alternarSearchbar = function () {
        this.mostraSearchbar = !this.mostraSearchbar;
    };
    MinhaSolicitacaoPage.prototype.removerMinhaSolicitacao = function (solicitacao) {
        var _this = this;
        this.solicitacaoService.deletarMinhaSolicitacao(solicitacao.id).subscribe(function (response) {
            _this.retorno = response;
        }, function (error) {
            console.warn(error);
        });
        var indice = this.solicitacoes.indexOf(solicitacao);
        this.solicitacoes.splice(indice, 1);
        var toast = this.toastCtrl.create({
            message: "Deletada solicitacao feita para " + solicitacao.solicitadoNome,
            duration: 6000,
            showCloseButton: true,
            closeButtonText: "FECHAR"
        });
        toast.present();
    };
    MinhaSolicitacaoPage.prototype.visualizar = function (solicitacao) {
        console.log("solicitacao.situacao.toUpperCase()");
        console.log(solicitacao.situacao.toUpperCase());
        if (solicitacao.situacao.toUpperCase() == "AUTORIZADA") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__visualizar_visualizar__["a" /* VisualizarPage */], { solicitacao: solicitacao });
        }
    };
    return MinhaSolicitacaoPage;
}());
MinhaSolicitacaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'minhasolicitacao-page',template:/*ion-inline-start:"C:\Users\android\dru\dru-sd-front\src\pages\minhasolicitacao\minhasolicitacao.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      {{tituloToolBar}}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="alternarSearchbar()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n  <ion-toolbar *ngIf="mostraSearchbar">\n\n    <ion-searchbar [(ngModel)]="termoPesquisa" (ionInput)="filtrarRegistros()" animated="true" placeholder="Pesquisar">\n\n    </ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n\n\n  <ion-list  no-padding>\n\n\n\n    <ion-item no-padding *ngFor="let solicitacao of solicitacoes" (click)="solicitacao.situacao != \'AUTORIZADA\' || visualizar(solicitacao)">\n\n\n\n          <ion-icon padding name="help-circle" class="medio" color="cinza-claro" item-left\n\n            *ngIf="solicitacao.situacao == \'NOVA\'"></ion-icon>\n\n          <ion-icon padding name="thumbs-up" class="medio" color="secondary" item-left\n\n            *ngIf="solicitacao.situacao == \'AUTORIZADA\'"></ion-icon>\n\n          <ion-icon padding name="thumbs-down" class="medio" color="danger" item-left\n\n            *ngIf="solicitacao.situacao == \'NEGADA\'"></ion-icon>\n\n\n\n          <h3><b>{{solicitacao.solicitadoNome}}</b></h3>\n\n          <h4>{{solicitacao.solicitadoCpf}}</h4>\n\n          <h4>{{solicitacao.solicitadoEmail}}</h4>\n\n          <h4>Solicitado em: {{solicitacao.solicitadoEm | date: \'dd/MM/yyyy HH:mm:ss\'}}</h4>\n\n\n\n          <ion-icon padding name="trash" class="medio" color="danger" item-right\n\n            (click)="removerMinhaSolicitacao(solicitacao)"></ion-icon>\n\n\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\android\dru\dru-sd-front\src\pages\minhasolicitacao\minhasolicitacao.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__providers_solicitacao_service_solicitacao_service__["a" /* SolicitacaoServiceProvider */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_solicitacao_service_solicitacao_service__["a" /* SolicitacaoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_solicitacao_service_solicitacao_service__["a" /* SolicitacaoServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _f || Object])
], MinhaSolicitacaoPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=minhasolicitacao.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_dru_service_dru_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VisualizarPage = (function () {
    function VisualizarPage(navCtrl, druService, loadingController, cookieService, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.druService = druService;
        this.loadingController = loadingController;
        this.cookieService = cookieService;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.loading = loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });
        this.solicitacaoAtual = this.navParams.get("solicitacao");
    }
    VisualizarPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loading.present();
        this.druService.getDRUbyCpf(this.solicitacaoAtual.solicitadoCpf).subscribe(function (response) {
            _this.retorno = response;
            _this.usuario_nome = _this.retorno.nome;
            _this.usuario_email = _this.retorno.email;
            _this.usuario_cidade = _this.retorno.cidade;
            _this.usuario_cpf = _this.retorno.cpf;
            _this.usuario_endereco = _this.retorno.endereco;
            _this.usuario_id = _this.retorno.id;
            _this.usuario_sexo = _this.retorno.sexo;
            _this.usuario_telefone = _this.retorno.telefone;
            _this.usuario_uf = _this.retorno.uf;
            switch (_this.usuario_uf.toLowerCase()) {
                case "ac":
                    _this.usuario_uf_extenso = "Acre";
                    break;
                case "al":
                    _this.usuario_uf_extenso = "Alagoas";
                    break;
                case "am":
                    _this.usuario_uf_extenso = "Amazonas";
                    break;
                case "ap":
                    _this.usuario_uf_extenso = "Amapá";
                    break;
                case "ba":
                    _this.usuario_uf_extenso = "Bahia";
                    break;
                case "ce":
                    _this.usuario_uf_extenso = "Cerá";
                    break;
                case "df":
                    _this.usuario_uf_extenso = "Distrito Federal";
                    break;
                case "es":
                    _this.usuario_uf_extenso = "Espírito Santo";
                    break;
                case "go":
                    _this.usuario_uf_extenso = "Goias";
                    break;
                case "ma":
                    _this.usuario_uf_extenso = "Maranhão";
                    break;
                case "mg":
                    _this.usuario_uf_extenso = "Minas Gerais";
                    break;
                case "ms":
                    _this.usuario_uf_extenso = "Mato Grosso do Sul";
                    break;
                case "mt":
                    _this.usuario_uf_extenso = "Mato Grosso";
                    break;
                case "pa":
                    _this.usuario_uf_extenso = "Pará";
                    break;
                case "pb":
                    _this.usuario_uf_extenso = "Paraíba";
                    break;
                case "pe":
                    _this.usuario_uf_extenso = "Pernambuco";
                    break;
                case "pi":
                    _this.usuario_uf_extenso = "Piauí";
                    break;
                case "pr":
                    _this.usuario_uf_extenso = "Paraná";
                    break;
                case "rj":
                    _this.usuario_uf_extenso = "Rio de Janeiro";
                    break;
                case "rn":
                    _this.usuario_uf_extenso = "Rio Grande do Norte";
                    break;
                case "rr":
                    _this.usuario_uf_extenso = "Roraima";
                    break;
                case "rs":
                    _this.usuario_uf_extenso = "Rio Grande do Sul";
                    break;
                case "sc":
                    _this.usuario_uf_extenso = "Santa Catarina";
                    break;
                case "se":
                    _this.usuario_uf_extenso = "Sergipe";
                    break;
                case "sp":
                    _this.usuario_uf_extenso = "São Paulo";
                    break;
                case "to":
                    _this.usuario_uf_extenso = "Tocantins";
                    break;
                default:
                    _this.usuario_uf_extenso = "Brasil";
                    break;
            }
            _this.usuario_sexo_extenso = "Masculino";
            if (_this.usuario_sexo.toUpperCase() != "M") {
                _this.usuario_sexo_extenso = "Feminino";
            }
            _this.loading.dismiss();
            console.log(_this.dru);
        }, function (error) {
            _this.loading.dismiss();
        });
    };
    VisualizarPage.prototype.doClickContact = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
    };
    return VisualizarPage;
}());
VisualizarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'visualizar-page',template:/*ion-inline-start:"C:\Users\android\dru\dru-sd-front\src\pages\visualizar\visualizar.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Visualizar DRU\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  \n\n  <ion-list padding>\n\n  \n\n  \n\n  \n\n      <ion-item padding>\n\n  \n\n          <ion-icon name="person" class="medio" color="primary" item-left></ion-icon>\n\n      \n\n          <h2><b>{{usuario_nome}}</b></h2>\n\n          <h3>{{usuario_cpf}}</h3>\n\n          <h3>{{usuario_sexo_extenso}}</h3>\n\n          \n\n      \n\n        </ion-item>\n\n      \n\n        <ion-item padding>\n\n  \n\n            <ion-icon name="mail" class="medio" color="cinza-claro" item-left></ion-icon>\n\n            <h3>{{usuario_email}}</h3>\n\n            <h3>{{usuario_telefone}}</h3>\n\n        \n\n          </ion-item>\n\n        \n\n            \n\n    <ion-item padding>\n\n  \n\n      <ion-icon name="clock" class="medio" color="cinza-claro" item-left></ion-icon>\n\n  \n\n      <h3>Solicitado em : {{solicitacaoAtual.solicitadoEm  | date: \'dd/MM/yyyy HH:mm:ss\'}}</h3>\n\n      <h3>Autorizado em : {{solicitacaoAtual.modificacaoEm | date: \'dd/MM/yyyy HH:mm:ss\'}}</h3>\n\n\n\n    </ion-item>\n\n  \n\n         \n\n    <ion-item padding>\n\n  \n\n        <ion-icon name="pin" class="medio" color="cinza-claro" item-left></ion-icon>\n\n    \n\n        <h3><b>{{usuario_uf}}</b></h3>\n\n        <h3>{{usuario_uf_extenso}}</h3>\n\n        <h3>{{usuario_cidade}}</h3>\n\n  \n\n      </ion-item>\n\n      \n\n  \n\n  \n\n  </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\android\dru\dru-sd-front\src\pages\visualizar\visualizar.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__providers_dru_service_dru_service__["a" /* DruServiceProvider */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__providers_dru_service_dru_service__["a" /* DruServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_dru_service_dru_service__["a" /* DruServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _f || Object])
], VisualizarPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=visualizar.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dru_service_dru_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = ContactPage_1 = (function () {
    function ContactPage(navCtrl, navParams, formBuilder, nav, druservice, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.druservice = druservice;
        this.loadingController = loadingController;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.doClickAbout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    ContactPage.prototype.doClickContact = function () {
        this.navCtrl.setRoot(ContactPage_1);
    };
    ContactPage.prototype.carregarDRU = function () {
    };
    return ContactPage;
}());
ContactPage = ContactPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\android\dru\dru-sd-front\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the ContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n      <ion-buttons start>\n\n          <button ion-button (click)="doClickContact()">\n\n            <ion-icon name="contact"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Contato\n\n        </ion-title>\n\n        <ion-buttons end>\n\n          <button ion-button (click)="doClickAbout()">\n\n            <ion-icon name="more"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <ion-label>\n\n      <h2>Informações dos Alunos</h2>\n\n    </ion-label>\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-icon name="name" slot="start"></ion-icon>\n\n            <ion-label>\n\n              <p>Nome:</p>\n\n              <h2>Daniel</h2>\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="phone" slot="start"></ion-icon>\n\n            <ion-label>\n\n              <p>Whatsapp:</p>\n\n              <h2>(12)99106-5737</h2>\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="mail" slot="start"></ion-icon>\n\n            <ion-label>\n\n              <p>Email</p>\n\n              <h2>danisantosalves@gmail.com</h2>\n\n            </ion-label>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-icon name="name" slot="start"></ion-icon>\n\n              <ion-label>\n\n                <p>Nome:</p>\n\n                <h2>Danilo</h2>\n\n              </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name="phone" slot="start"></ion-icon>\n\n              <ion-label>\n\n                <p>Whatsapp:</p>\n\n                <h2>(12)98269-1615</h2>\n\n              </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name="mail" slot="start"></ion-icon>\n\n              <ion-label>\n\n                <p>Email</p>\n\n                <h2>daniloeng.ribeiro@gmail.com</h2>\n\n              </ion-label>\n\n            </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon name="name" slot="start"></ion-icon>\n\n        <ion-label>\n\n          <p>Nome:</p>\n\n          <h2>Gilson</h2>\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="phone" slot="start"></ion-icon>\n\n        <ion-label>\n\n          <p>Whatsapp:</p>\n\n          <h2>(19)99248-5023</h2>\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="mail" slot="start"></ion-icon>\n\n        <ion-label>\n\n          <p>Email</p>\n\n          <h2>gilsonsilva.cintra@gmail.com</h2>\n\n        </ion-label>\n\n      </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-icon name="name" slot="start"></ion-icon>\n\n              <ion-label>\n\n                <p>Nome:</p>\n\n                <h2>João Lemos</h2>\n\n              </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name="phone" slot="start"></ion-icon>\n\n              <ion-label>\n\n                <p>Whatsapp:</p>\n\n                <h2>(12)98858-7061 ou (12)99248-4020</h2>\n\n              </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name="mail" slot="start"></ion-icon>\n\n              <ion-label>\n\n                <p>Email</p>\n\n                <h2>joaojol@fab.com</h2>\n\n              </ion-label>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-icon name="name" slot="start"></ion-icon>\n\n                <ion-label>\n\n                  <p>Nome:</p>\n\n                  <h2>Renan</h2>\n\n                </ion-label>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-icon name="phone" slot="start"></ion-icon>\n\n                <ion-label>\n\n                  <p>Whatsapp:</p>\n\n                  <h2>(12)98808-9706</h2>\n\n                </ion-label>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-icon name="mail" slot="start"></ion-icon>\n\n                <ion-label>\n\n                  <p>Email</p>\n\n                  <h2>renanru_zao@hotmail.com</h2>\n\n                </ion-label>\n\n              </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n\n\n  \n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\android\dru\dru-sd-front\src\pages\contact\contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_dru_service_dru_service__["a" /* DruServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], ContactPage);

var ContactPage_1;
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_InterceptorHttpService__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_Utils__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_consulta_consulta__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_solicitacao_solicitacao__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_minhasolicitacao_minhasolicitacao__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_visualizar_visualizar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_login_service_login_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_dru_service_dru_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ComponentInicial */],
            __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_consulta_consulta__["a" /* ConsultaPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_minhasolicitacao_minhasolicitacao__["a" /* MinhaSolicitacaoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_visualizar_visualizar__["a" /* VisualizarPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ComponentInicial */], {}, {
                links: [
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ComponentInicial */],
            __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_consulta_consulta__["a" /* ConsultaPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_minhasolicitacao_minhasolicitacao__["a" /* MinhaSolicitacaoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_visualizar_visualizar__["a" /* VisualizarPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__entity_Utils__["a" /* Utils */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_1__providers_InterceptorHttpService__["a" /* InterceptorHttpService */], multi: true
            },
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__providers_login_service_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_dru_service_dru_service__["a" /* DruServiceProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Utils__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilServiceProvider = (function () {
    function PerfilServiceProvider(http) {
        this.http = http;
        this.perfilUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "perfil/";
    }
    PerfilServiceProvider.prototype.getPerfis = function () {
        console.log((this.perfilUrl));
        return this.http.get(this.perfilUrl);
    };
    return PerfilServiceProvider;
}());
PerfilServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
], PerfilServiceProvider);

//# sourceMappingURL=perfil-service.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Utils__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsultaServiceProvider = (function () {
    function ConsultaServiceProvider(http) {
        this.http = http;
        this.consultaUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "dru/";
    }
    /// Nao deveria existir este consulta service. 
    // Deveria estar dentro do dru-service 
    ConsultaServiceProvider.prototype.getRegistros = function () {
        console.log((this.consultaUrl));
        return this.http.get(this.consultaUrl);
    };
    return ConsultaServiceProvider;
}());
ConsultaServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
], ConsultaServiceProvider);

//# sourceMappingURL=consulta-service.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Solicitacao; });
var Solicitacao = (function () {
    function Solicitacao() {
        this.id = null;
        this.solicitanteCpf = "";
        this.solicitanteNome = "";
        this.solicitanteEmail = "";
        this.solicitadoCpf = "";
        this.solicitadoNome = "";
        this.solicitadoEmail = "";
        this.solicitadoEm = null;
        this.expiraEm = null;
        this.modificacaoEm = null;
        this.situacao = "NOVA";
        this.visualizado = "N";
    }
    return Solicitacao;
}());

//# sourceMappingURL=Solicitacao.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_service_login_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_finally__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var InterceptorHttpService = (function () {
    function InterceptorHttpService(cookieService, loginService) {
        this.cookieService = cookieService;
        this.loginService = loginService;
    }
    InterceptorHttpService.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req.clone({
            setHeaders: { Authorization: 'Bearer ' + this.cookieService.get("accessToken") }
        })).catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpErrorResponse */]) {
                switch (error.status) {
                    case 401:
                        return _this.getAccessToken(req, next);
                    case 0:
                        return _this.getAccessToken(req, next);
                }
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            }
        });
    };
    InterceptorHttpService.prototype.getAccessToken = function (req, next) {
        var _this = this;
        return this.loginService.getAccessToken(this.cookieService.get("refreshToken")).switchMap(function (resp) {
            _this.cookieService.put("accessToken", resp.access_token);
            console.log("Autorizado:" + resp.access_token);
            return next.handle(req.clone({
                setHeaders: { Authorization: 'Bearer ' + _this.cookieService.get("accessToken") }
            }));
        });
    };
    return InterceptorHttpService;
}());
InterceptorHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_0__login_service_login_service__["a" /* LoginServiceProvider */]])
], InterceptorHttpService);

//# sourceMappingURL=InterceptorHttpService.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentInicial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_consulta_consulta__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_perfil_perfil__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_solicitacao_solicitacao__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_minhasolicitacao_minhasolicitacao__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { TabsPage } from './../pages/tabs/tabs';








var ComponentInicial = (function () {
    function ComponentInicial(platform, statusBar, splashScreen, requestOptions, cookieService, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.requestOptions = requestOptions;
        this.cookieService = cookieService;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        this.usuarioOnLine = new Array();
        this.initializeApp();
        this.events.subscribe('user:actual', function (user) {
            _this.usuarioOnLine = user;
        });
        if (this.cookieService.getObject("usuarioAtual")) {
            this.requestOptions.headers.set('Authorization', "Bearer " + this.cookieService.get("accessToken"));
            //this.usuarioOnLine = JSON.parse(this.cookieService.get("usuarioAtual"));   
            this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        }
    }
    ComponentInicial.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    ComponentInicial.prototype.doRefresh = function (event) {
        this.usuarioOnLine = JSON.parse(this.cookieService.get("usuarioAtual"));
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    ComponentInicial.prototype.logout = function () {
        this.cookieService.removeAll();
        this.requestOptions.headers.set('Authorization', "Bearer ");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    ComponentInicial.prototype.pushPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_consulta_consulta__["a" /* ConsultaPage */]);
    };
    ComponentInicial.prototype.doClickConsulta = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_consulta_consulta__["a" /* ConsultaPage */]);
    };
    ComponentInicial.prototype.doClickPerfil = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_perfil_perfil__["a" /* PerfilPage */]);
    };
    ComponentInicial.prototype.doClickAbout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */]);
    };
    ComponentInicial.prototype.doClickContact = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */]);
    };
    ComponentInicial.prototype.doClickHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
    };
    ComponentInicial.prototype.doClickMinhasSolicitacoes = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_minhasolicitacao_minhasolicitacao__["a" /* MinhaSolicitacaoPage */]);
    };
    ComponentInicial.prototype.doClickSolicitacoesNovas = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */], { situacao: "NOVA" });
    };
    ComponentInicial.prototype.doClickSolicitacoesAutorizadas = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */], { situacao: "AUTORIZADA" });
    };
    ComponentInicial.prototype.doClickSolicitacoesNegadas = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */], { situacao: "NEGADA" });
    };
    return ComponentInicial;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Nav */])
], ComponentInicial.prototype, "nav", void 0);
ComponentInicial = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\android\dru\dru-sd-front\src\app\app.html"*/'<ion-menu side="start"  [content]="content" no-padding>\n\n\n\n    <ion-content no-padding class="no-scroll">\n\n  \n\n  \n\n      <div padding class="background-sidemenu">\n\n  \n\n        <!-- <ion-icon name="contact" class="gigante" item-left></ion-icon> -->\n\n  \n\n        <img src="../assets/images/usuario.png">\n\n  \n\n        <p>\n\n          <font color="white">\n\n            <b>Online:</b><br>\n\n            {{usuarioOnLine.email}}<br>\n\n            {{usuarioOnLine.cpf}}<br>\n\n            </font>\n\n        </p>\n\n  \n\n      </div>\n\n  \n\n      <!-- Default Refresher -->\n\n        <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n          <ion-refresher-content></ion-refresher-content>\n\n        </ion-refresher>\n\n  \n\n      <ion-list no-padding no-lines class="fundo-branco">\n\n  \n\n        <button ion-item menuClose (click)="doClickHome()">\n\n          <ion-icon name="home" item-left></ion-icon>\n\n          Home\n\n        </button>\n\n  \n\n        <button ion-item menuClose (click)="doClickConsulta()">\n\n          <ion-icon name="search" item-left></ion-icon>\n\n          Consultar\n\n        </button>\n\n  \n\n        <!--button ion-item menuClose (click)="doClickConsulta()">\n\n          <ion-icon name="create" item-left></ion-icon>\n\n          Alterar\n\n        </button-->\n\n  \n\n       \n\n        <button ion-item menuClose (click)="doClickMinhasSolicitacoes()">\n\n          <ion-icon name="pricetags" color="primary" item-left></ion-icon>\n\n          Minhas solicitações\n\n        </button>\n\n  \n\n \n\n  \n\n        <br>\n\n        \n\n        <ion-item-divider>\n\n            <h2>Solicitaram pra mim</h2>\n\n        </ion-item-divider>\n\n  \n\n         \n\n        <button ion-item menuClose (click)="doClickSolicitacoesNovas()">\n\n          <ion-icon name="pricetag" item-left></ion-icon>\n\n          Analisar\n\n        </button>\n\n  \n\n\n\n        <button ion-item menuClose (click)="doClickSolicitacoesAutorizadas()">\n\n          <ion-icon name="thumbs-up" color="secondary" item-left></ion-icon>\n\n          Autorizadas\n\n        </button>\n\n  \n\n        <button ion-item menuClose (click)="doClickSolicitacoesNegadas()">\n\n          <ion-icon name="thumbs-down" color="danger" item-left></ion-icon>\n\n          Negadas\n\n        </button>\n\n  \n\n  \n\n       \n\n        <ion-item-divider>\n\n        </ion-item-divider>\n\n\n\n        <br>\n\n  \n\n        <!--button ion-item menuClose (click)="doClickPerfil()">\n\n          <ion-icon name="people" color="primary" item-left></ion-icon>\n\n          Perfis de Usuários\n\n        </button-->\n\n  \n\n  \n\n        <button ion-item menuClose (click)="doClickAbout()">\n\n          <ion-icon name="information-circle" item-left></ion-icon>\n\n          Sobre\n\n        </button>\n\n  \n\n        <button ion-item menuClose (click)="logout()">\n\n          <ion-icon name="lock" item-left></ion-icon>\n\n          Sair\n\n        </button>\n\n  \n\n      </ion-list>\n\n  \n\n  \n\n    </ion-content>\n\n  </ion-menu>\n\n\n\n\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\android\dru\dru-sd-front\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */],
        __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */]])
], ComponentInicial);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\android\dru\dru-sd-front\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <!--ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab-->\n\n  <!--ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab-->\n\n  <!--ion-tab [root]="tab3Root" tabTitle="Perfil" tabIcon="contacts"></ion-tab-->\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\android\dru\dru-sd-front\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var Utils = (function () {
    function Utils() {
    }
    Utils.getUrlBackend = function () {
        //return "http://localhost:8080/";
        return "https://dru-server.herokuapp.com/";
        //return "/api/"
    };
    return Utils;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = AboutPage_1 = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.doClickAbout = function () {
        this.navCtrl.setRoot(AboutPage_1);
    };
    AboutPage.prototype.doClickContact = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    return AboutPage;
}());
AboutPage = AboutPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\android\dru\dru-sd-front\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n    <ion-buttons start>\n\n      <button ion-button (click)="doClickContact()">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Sobre\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="doClickAbout()">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    Esse é o projeto denominado "Documento de Registro Único (DRU) da disciplina de Sistemas Distruídos pela UNIFESP.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\android\dru\dru-sd-front\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], AboutPage);

var AboutPage_1;
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_perfil_service_perfil_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilPage = (function () {
    function PerfilPage(navCtrl, perfilService, loadingController) {
        this.navCtrl = navCtrl;
        this.perfilService = perfilService;
        this.loadingController = loadingController;
        this.hasFilter = false;
        this.mostraSearchbar = false;
        this.loading = this.loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });
    }
    PerfilPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.perfis = this.noFilter;
        this.loading.present();
        this.perfilService.getPerfis().subscribe(function (response) {
            _this.perfis = response;
            _this.loading.dismiss();
            _this.noFilter = _this.perfis;
            _this.hasFilter = false;
        }, function (error) {
            console.log(error);
            _this.loading.dismiss();
        });
    };
    PerfilPage.prototype.filtrarPerfis = function () {
        var _this = this;
        this.hasFilter = false;
        this.perfis = this.noFilter.filter(function (item) {
            return item.nome.toLowerCase().indexOf(_this.termoPesquisa.toLowerCase()) > -1;
        });
    };
    PerfilPage.prototype.alternarSearchbar = function () {
        this.mostraSearchbar = !this.mostraSearchbar;
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'perfil-page',template:/*ion-inline-start:"C:\Users\android\dru\dru-sd-front\src\pages\perfil\perfil.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Perfis de Usuários\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n          <button ion-button icon-only (click)="alternarSearchbar()">\n\n            <ion-icon name="search"></ion-icon>\n\n          </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-toolbar *ngIf="mostraSearchbar">\n\n    <ion-searchbar\n\n      [(ngModel)]="termoPesquisa"\n\n      (ionInput)="filtrarPerfis()"\n\n      animated="true"\n\n      placeholder="Pesquisar" >\n\n   </ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n\n\n  <ion-list padding>\n\n\n\n    <ion-item no-padding  *ngFor="let perfil of perfis">\n\n\n\n      <ion-icon name="ribbon" class="medio" item-left></ion-icon>\n\n      <h2><b>{{perfil.nome}}</b></h2>\n\n\n\n      <ion-icon name="create" class="normal" color="primary" item-right></ion-icon>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\android\dru\dru-sd-front\src\pages\perfil\perfil.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__providers_perfil_service_perfil_service__["a" /* PerfilServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_perfil_service_perfil_service__["a" /* PerfilServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DruServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Utils__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DruServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DruServiceProvider = (function () {
    function DruServiceProvider(http) {
        this.http = http;
        this.druUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "dru/";
    }
    DruServiceProvider.prototype.getDRUbyId = function (id) {
        return this.http.get(this.druUrl + id);
    };
    DruServiceProvider.prototype.getDRUbyCpf = function (cpf) {
        return this.http.get(this.druUrl + cpf + "/cpf/");
    };
    DruServiceProvider.prototype.getDRUbyEmail = function (email) {
        return this.http.get(this.druUrl + email + "/email/");
    };
    DruServiceProvider.prototype.getDRUList = function () {
        return this.http.get(this.druUrl);
    };
    return DruServiceProvider;
}());
DruServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
], DruServiceProvider);

//# sourceMappingURL=dru-service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__consulta_consulta__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_perfil__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_dru_service_dru_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = HomePage_1 = (function () {
    function HomePage(navCtrl, cookieService, requestOptions, menuCtrl, druService, loadingController) {
        this.navCtrl = navCtrl;
        this.cookieService = cookieService;
        this.requestOptions = requestOptions;
        this.menuCtrl = menuCtrl;
        this.druService = druService;
        this.loadingController = loadingController;
        this.registros = Object.keys;
        this.hasFilter = false;
        this.loading = this.loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });
    }
    HomePage.prototype.logout = function () {
        this.cookieService.removeAll();
        this.requestOptions.headers.set('Authorization', "Bearer ");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.pushPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__consulta_consulta__["a" /* ConsultaPage */]);
    };
    HomePage.prototype.doClickConsulta = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__consulta_consulta__["a" /* ConsultaPage */]);
    };
    HomePage.prototype.doClickPerfil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__perfil_perfil__["a" /* PerfilPage */]);
    };
    HomePage.prototype.doClickAbout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.doClickContact = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__contact_contact__["a" /* ContactPage */]);
    };
    HomePage.prototype.doClickHome = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        this.registros = this.noFilter;
        this.loading.present();
        this.usuarioLogado = JSON.parse(this.cookieService.get("usuarioAtual"));
        this.druService.getDRUbyEmail(this.usuarioLogado.email).subscribe(function (response) {
            _this.registros = response;
            _this.usuario_nome = _this.registros.nome;
            _this.usuario_email = _this.registros.email;
            _this.usuario_cidade = _this.registros.cidade;
            _this.usuario_cpf = _this.registros.cpf;
            _this.usuario_endereco = _this.registros.endereco;
            _this.usuario_id = _this.registros.id;
            _this.usuario_sexo = _this.registros.sexo;
            _this.usuario_telefone = _this.registros.telefone;
            _this.usuario_uf = _this.registros.uf;
            _this.loading.dismiss();
            console.log(_this.usuarioLogado);
        }, function (error) {
            _this.loading.dismiss();
        });
    };
    return HomePage;
}());
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\android\dru\dru-sd-front\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n\n\n<ion-content padding>\n\n  <!--\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        <h1><b>Projeto de Documento Único</b></h1>\n\n        </ion-card-title>\n\n      <p>\n\n        Sistema multiplataforma que permite a todos que possuem acesso realizar consultas detalhadas de documentos.\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  -->\n\n\n\n  <div>\n\n    <ion-label class="borda">\n\n      <h2>Informações do DRU</h2>\n\n    </ion-label>\n\n    <form>\n\n      <ion-item>\n\n        <ion-icon name="name" slot="start"></ion-icon>\n\n        <ion-label floating>Nome:</ion-label>\n\n        <ion-input outline type="text" value="{{usuario_nome}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Telefone:</ion-label>\n\n        <ion-input outline type="text" value="{{usuario_telefone}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>E-mail:</ion-label>\n\n        <ion-input outline type="email" value="{{usuario_email}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>CPF:</ion-label>\n\n        <ion-input outline type="text" value="{{usuario_cpf}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Cidade:</ion-label>\n\n        <ion-input outline type="text" value="{{usuario_cidade}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Estado:</ion-label>\n\n        <ion-input outline type="text" value="{{usuario_uf}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>CEP:</ion-label>\n\n        <ion-input outline type="text" value="{{usuario_endereco}}"></ion-input>\n\n      </ion-item>\n\n      <br>\n\n      <button ion-button icon-start>\n\n        <ion-icon name="create"></ion-icon>\n\n        Atualizar\n\n      </button>\n\n    </form>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\android\dru\dru-sd-front\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__providers_dru_service_dru_service__["a" /* DruServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
        __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_dru_service_dru_service__["a" /* DruServiceProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */]])
], HomePage);

var HomePage_1;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_login_service_login_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = LoginPage_1 = (function () {
    function LoginPage(navCtrl, navParams, formBuilder, nav, loginService, cookieService, requestOptions, loadingController, alertController, menuCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.loginService = loginService;
        this.cookieService = cookieService;
        this.requestOptions = requestOptions;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.loginForm = formBuilder.group({
            email: [''],
            senha: ['']
        });
        this.loading = this.loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.loading.present();
            this.loginService.login(this.loginForm.value).subscribe(function (res) {
                _this.loading.present();
                _this.loading.dismiss();
                _this.loginSuccess(res);
            }, function (err) {
                _this.loading.present();
                _this.loading.dismiss();
                _this.loginFailed(err);
            });
        }
        else {
            this.loading.present();
            this.loading.dismiss();
        }
    };
    LoginPage.prototype.loginSuccess = function (res) {
        var _this = this;
        this.cookieService.removeAll();
        this.cookieService.put("accessToken", res.access_token);
        this.cookieService.put("refreshToken", res.refresh_token);
        this.loginService.getUsuarioAtual(res.access_token).subscribe(function (res) { return _this.redirectPage(res); });
    };
    LoginPage.prototype.loginFailed = function (err) {
        this.cookieService.removeAll();
        this.navCtrl.setRoot(LoginPage_1);
        var msg = this.alertController.create({
            title: "Login",
            message: "E-mail ou senha incorretos!",
            buttons: [{ text: "Fechar" }]
        });
        msg.present();
    };
    LoginPage.prototype.redirectPage = function (res) {
        this.cookieService.putObject("usuarioAtual", res);
        this.events.publish('user:actual', JSON.parse(this.cookieService.get("usuarioAtual")));
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.redirectUser = function (response) {
        this.cookieService.removeAll();
        this.cookieService.put("accessToken", response.access_token);
        this.cookieService.put("refreshToken", response.refresh_token);
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\android\dru\dru-sd-front\src\pages\login\login.html"*/'<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">\n\n<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>\n\n<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n\n<!------ Include the above in your HEAD tag ---------->\n\n\n\n<!DOCTYPE html>\n\n<html>\n\n\n\n<head>\n\n  <title>My Awesome Login Page</title>\n\n  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"\n\n    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">\n\n  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>\n\n  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"\n\n    integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">\n\n</head>\n\n<!--Coded with love by Mutiullah Samim-->\n\n\n\n<body>\n\n  <div class="container h-100">\n\n    <div class="d-flex justify-content-center h-100">\n\n      <div class="user_card">\n\n        <div class="d-flex justify-content-center">\n\n          <div class="brand_logo_container">\n\n            <img src="assets/images/background/files.png" class="brand_logo" alt="Logo">\n\n          </div>\n\n        </div>\n\n        <div class="d-flex justify-content-center form_container">\n\n          <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n            <div class="row responsive-md">\n\n              <div class="col col-50 col-offset-25">\n\n                <div class="input-group mb-3">\n\n                  <div class="input-group-append">\n\n                    <span class="input-group-text"><i class="fas fa-user fa-2x fa-white"></i></span>\n\n                  </div>\n\n                  <ion-item>\n\n                    <span class="input-group-text"><i class="fas fa-user"></i></span>\n\n                    <ion-input #email formControlName="email" type="email" placeholder="Seu email"\n\n                      [class.invalid]="!loginForm.controls.email.valid && loginForm.controls.email.dirty"></ion-input>\n\n                  </ion-item>\n\n                  <ion-item class="error-message"\n\n                    *ngIf="!loginForm.controls.email.valid  && loginForm.controls.email.dirty">\n\n                    <p>Por favor coloque um email válido.</p>\n\n                  </ion-item>\n\n                </div>\n\n\n\n                <div class="input-group mb-3">\n\n                  <div class="input-group-append">\n\n                    <span class="input-group-text"><i class="fas fa-lock fa-2x "></i></span>\n\n                  </div>\n\n                  <ion-item>\n\n                    <ion-input #password formControlName="senha" type="password" placeholder="Sua senha"\n\n                      [class.invalid]="!loginForm.controls.senha.valid && loginForm.controls.senha.dirty"></ion-input>\n\n                  </ion-item>\n\n                  <ion-item class="error-message"\n\n                    *ngIf="!loginForm.controls.senha.valid  && loginForm.controls.senha.dirty">\n\n                    <p></p>\n\n                  </ion-item>\n\n                </div>\n\n\n\n                <button ion-button block type="submit">\n\n                  Acessar\n\n                </button>\n\n\n\n              </div>\n\n            </div>\n\n          </form>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</body>\n\n\n\n</html>'/*ion-inline-end:"C:\Users\android\dru\dru-sd-front\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_login_service_login_service__["a" /* LoginServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__["CookieService"],
        __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Utils__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginServiceProvider = (function () {
    function LoginServiceProvider(http, requestOptions) {
        this.http = http;
        this.requestOptions = requestOptions;
        this.loginUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "oauth/token?grant_type=password&username=";
        this.refreshUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "oauth/token?grant_type=refresh_token&refresh_token=";
        this.userUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "usuario/logado";
    }
    LoginServiceProvider.prototype.login = function (usuario) {
        this.loginUrl + usuario.email + "&password=" + encodeURIComponent(usuario.senha);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            "Authorization": "Basic " + btoa("cliente" + ':' + "123")
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.loginUrl + usuario.email + "&password=" +
            encodeURIComponent(usuario.senha), {}, options)
            .map(function (res) { return res.json(); });
    };
    LoginServiceProvider.prototype.getUsuarioAtual = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Authorization': "Bearer " + token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.requestOptions.headers.set('Authorization', "Bearer " + token);
        return this.http.get(this.userUrl, options)
            .map(function (res) { return res.json(); });
    };
    LoginServiceProvider.prototype.getAccessToken = function (refreshToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            "Authorization": "Basic " + btoa("cliente" + ':' + "123")
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.refreshUrl + refreshToken, {}, options)
            .map(function (res) { return res.json(); });
    };
    return LoginServiceProvider;
}());
LoginServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]])
], LoginServiceProvider);

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_consulta_service_consulta_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_solicitacao_service_solicitacao_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entity_Solicitacao__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConsultaPage = (function () {
    function ConsultaPage(navCtrl, consultaService, solicitacaoService, loadingController, cookieService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.consultaService = consultaService;
        this.solicitacaoService = solicitacaoService;
        this.loadingController = loadingController;
        this.cookieService = cookieService;
        this.toastCtrl = toastCtrl;
        this.hasFilter = false;
        this.mostraSearchbar = false;
        this.loading = loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });
    }
    ConsultaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.registros = this.noFilter;
        this.loading.present();
        this.consultaService.getRegistros().subscribe(function (response) {
            _this.registros = response;
            _this.loading.dismiss();
            _this.noFilter = _this.registros;
            _this.hasFilter = false;
        }, function (error) {
            _this.loading.dismiss();
            console.warn(error);
        });
    };
    ConsultaPage.prototype.doClickContact = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__contact_contact__["a" /* ContactPage */]);
    };
    ConsultaPage.prototype.apresentarToast = function (consultado) {
        var _this = this;
        this.usuarioLogado = JSON.parse(this.cookieService.get("usuarioAtual"));
        this.solicitacaoAtual = new __WEBPACK_IMPORTED_MODULE_6__entity_Solicitacao__["a" /* Solicitacao */]();
        this.solicitacaoAtual.solicitanteCpf = this.usuarioLogado.cpf;
        this.solicitacaoAtual.solicitanteNome = this.usuarioLogado.nome;
        this.solicitacaoAtual.solicitanteEmail = this.usuarioLogado.email;
        this.solicitacaoAtual.solicitadoCpf = consultado.cpf;
        this.solicitacaoAtual.solicitadoNome = consultado.nome;
        this.solicitacaoAtual.solicitadoEmail = consultado.email;
        this.solicitacaoService.geraSolicitacao(this.solicitacaoAtual).subscribe(function (response) {
            _this.retorno = response;
        }, function (error) {
            console.warn(error);
        });
        var toast = this.toastCtrl.create({
            message: "Pedido enviado para " + consultado.nome + " (" + consultado.email + ")",
            duration: 6000,
            showCloseButton: true,
            closeButtonText: "FECHAR"
        });
        toast.present();
    };
    ConsultaPage.prototype.filtrarRegistros = function () {
        var _this = this;
        this.hasFilter = false;
        this.registros = this.noFilter.filter(function (item) {
            return (item.nome.toLowerCase().indexOf(_this.termoPesquisa.toLowerCase()) > -1 ||
                item.cpf.toLowerCase().indexOf(_this.termoPesquisa.toLowerCase()) > -1 ||
                item.email.toLowerCase().indexOf(_this.termoPesquisa.toLowerCase()) > -1);
        });
    };
    ConsultaPage.prototype.alternarSearchbar = function () {
        this.mostraSearchbar = !this.mostraSearchbar;
    };
    return ConsultaPage;
}());
ConsultaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'consulta-page',template:/*ion-inline-start:"C:\Users\android\dru\dru-sd-front\src\pages\consulta\consulta.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Consulta\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n          <button ion-button icon-only (click)="alternarSearchbar()">\n\n            <ion-icon name="search"></ion-icon>\n\n          </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-toolbar *ngIf="mostraSearchbar">\n\n    <ion-searchbar\n\n      [(ngModel)]="termoPesquisa"\n\n      (ionInput)="filtrarRegistros()"\n\n      animated="true"\n\n      placeholder="Pesquisar" >\n\n   </ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-list no-padding>\n\n\n\n    <ion-item no-padding  *ngFor="let consulta of registros">\n\n      \n\n      <!-- Apesentar icone conforme a UF -->\n\n      <img item-left padding src="../../assets/images/{{consulta.uf | lowercase}}.gif">\n\n\n\n      <h3><b>{{consulta.nome}}</b></h3>\n\n      <h4>{{consulta.cpf}}</h4>\n\n      <!--<h4>{{consulta.email}}</h4>-->\n\n\n\n      <!-- Apesentar icone conforme o sexo -->\n\n      <ion-icon padding [name]="consulta.sexo == \'M\'? \'man\' :\'woman\'"  class="medio" item-right [color]="consulta.sexo == \'M\'? \'dark\' :\'pink\'" ></ion-icon>\n\n\n\n      <ion-icon name="add-circle" class="medio" color="primary" item-right (click)="apresentarToast(consulta)"></ion-icon>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\android\dru\dru-sd-front\src\pages\consulta\consulta.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__providers_consulta_service_consulta_service__["a" /* ConsultaServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_solicitacao_service_solicitacao_service__["a" /* SolicitacaoServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_consulta_service_consulta_service__["a" /* ConsultaServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1__providers_solicitacao_service_solicitacao_service__["a" /* SolicitacaoServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */]])
], ConsultaPage);

//# sourceMappingURL=consulta.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitacaoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Utils__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SolicitacaoServiceProvider = (function () {
    function SolicitacaoServiceProvider(http) {
        this.http = http;
        this.solicitacaoUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "solicitacao/";
    }
    SolicitacaoServiceProvider.prototype.getMinhasSolicitacoes = function (cpf) {
        this.urlMinhasSolicitacoes = this.solicitacaoUrl + cpf + "/cpf/";
        return this.http.get(this.urlMinhasSolicitacoes);
    };
    SolicitacaoServiceProvider.prototype.getSolicitacoesNovas = function (cpf) {
        this.urlSolicitacoesNovas = this.solicitacaoUrl + cpf + "/novas/";
        return this.http.get(this.urlSolicitacoesNovas);
    };
    SolicitacaoServiceProvider.prototype.getSolicitacoesAutorizadas = function (cpf) {
        this.urlSolicitacoesAutorizadas = this.solicitacaoUrl + cpf + "/autorizadas/";
        return this.http.get(this.urlSolicitacoesAutorizadas);
    };
    SolicitacaoServiceProvider.prototype.getSolicitacoesNegadas = function (cpf) {
        this.urlSolicitacoesNegadas = this.solicitacaoUrl + cpf + "/negadas/";
        return this.http.get(this.urlSolicitacoesNegadas);
    };
    SolicitacaoServiceProvider.prototype.geraSolicitacao = function (solicitacao) {
        this.urlSolicitarConsulta = this.solicitacaoUrl + "criar/" +
            solicitacao.solicitanteCpf + "/" +
            solicitacao.solicitanteNome + "/" +
            solicitacao.solicitanteEmail + "/" +
            solicitacao.solicitadoCpf + "/" +
            solicitacao.solicitadoNome + "/" +
            solicitacao.solicitadoEmail + "/";
        return this.http.get(this.urlSolicitarConsulta);
    };
    SolicitacaoServiceProvider.prototype.getNegarSolicitacao = function (id) {
        this.urlNegarConsulta = this.solicitacaoUrl + "negar/" + id + "/";
        return this.http.get(this.urlNegarConsulta);
    };
    SolicitacaoServiceProvider.prototype.getAutorizarSolicitacao = function (id) {
        this.urlAutorizarConsulta = this.solicitacaoUrl + "aprovar/" + id + "/";
        return this.http.get(this.urlAutorizarConsulta);
    };
    SolicitacaoServiceProvider.prototype.deletarMinhaSolicitacao = function (id) {
        this.urlDeletarMinhaSolicitacao = this.solicitacaoUrl + id + "/";
        return this.http.delete(this.urlDeletarMinhaSolicitacao);
    };
    return SolicitacaoServiceProvider;
}());
SolicitacaoServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
], SolicitacaoServiceProvider);

//# sourceMappingURL=solicitacao-service.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map