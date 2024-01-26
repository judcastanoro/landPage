"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_landpage_landpage_module_ts"],{

/***/ 21452:
/*!***********************************************************!*\
  !*** ./src/app/pages/landpage/landpage-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandpageRoutingModule": () => (/* binding */ LandpageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proyects/proyects.component */ 8230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: 'proyects',
        component: _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_0__.ProyectsComponent
    },
    {
        path: '',
        component: _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_0__.ProyectsComponent,
    }
];
class LandpageRoutingModule {
}
LandpageRoutingModule.ɵfac = function LandpageRoutingModule_Factory(t) { return new (t || LandpageRoutingModule)(); };
LandpageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LandpageRoutingModule });
LandpageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandpageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 27470:
/*!***************************************************!*\
  !*** ./src/app/pages/landpage/landpage.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandpageModule": () => (/* binding */ LandpageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _landpage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landpage-routing.module */ 21452);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proyects/proyects.component */ 8230);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _layout_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout-routing.module */ 82419);
/* harmony import */ var _layout_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/news.service */ 39644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);









class LandpageModule {
}
LandpageModule.ɵfac = function LandpageModule_Factory(t) { return new (t || LandpageModule)(); };
LandpageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: LandpageModule });
LandpageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _layout_news_service__WEBPACK_IMPORTED_MODULE_4__.NewsService,
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _landpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandpageRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbStepperModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbRouteTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbStepperModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbListModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbAccordionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbUserModule,
        _layout_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__.LayoutRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbLayoutModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LandpageModule, { declarations: [_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_1__.ProyectsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _landpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandpageRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbStepperModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbRouteTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbStepperModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbListModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbAccordionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbUserModule,
        _layout_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__.LayoutRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbLayoutModule] }); })();


/***/ }),

/***/ 8230:
/*!***************************************************************!*\
  !*** ./src/app/pages/landpage/proyects/proyects.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProyectsComponent": () => (/* binding */ ProyectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 96953);




class ProyectsComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.firstForm = this.fb.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        });
        this.thirdForm = this.fb.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        });
    }
    onFirstSubmit() {
        this.firstForm.markAsDirty();
    }
    onThirdSubmit() {
        this.thirdForm.markAsDirty();
    }
}
ProyectsComponent.ɵfac = function ProyectsComponent_Factory(t) { return new (t || ProyectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormBuilder)); };
ProyectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProyectsComponent, selectors: [["ngx-proyects"]], decls: 117, vars: 1, consts: [[1, "card1"], [1, "col-xxxl-16", "col-xxxl-16", "col-xxxl-16"], ["size", "giant"], ["orientation", "vertical", 3, "linear"], ["label", "ABOUT ME"], [1, "lorem"], [1, "centrar-imagen"], ["src", "../../../../assets/images/aboutme.jpg", "alt", "About Me"], [1, "alinear"], ["nbButton", "", "disabled", "", "nbStepperNext", "", "size", "large"], ["nbButton", "", "nbStepperNext", "", "size", "large"], ["label", "PROYECTS"], [1, "col-md-6"], ["src", "../../../../assets/images/Restaurante1.png", "alt", "About Me"], ["src", "../../../../assets/images/Restaurante2.png", "alt", "About Me"], ["href", "https://github.com/JuanCarrill0/ProyectoTIC", "target", "_blank"], ["src", "../../../../assets/images/Restaurante3.png", "alt", "About Me"], ["src", "../../../../assets/images/Restaurante4.png", "alt", "About Me"], ["href", "https://github.com/judcastanoro/Restaurante", "target", "_blank"], ["label", "STUDIES AND CERTIFICATIONS"], ["fullWidth", ""], ["tabTitle", "COURSES"], ["src", "../../../../assets/images/Cer1.png", "alt", "About Me"], ["src", "../../../../assets/images/Cer2.png", "alt", "About Me"], ["src", "../../../../assets/images/Cer3.png", "alt", "About Me"], ["src", "../../../../assets/images/Cer4.png", "alt", "About Me"], ["tabTitle", "CERTIFICATIONS"], ["src", "../../../../assets/images/Cer5.png", "alt", "About Me"], ["src", "../../../../assets/images/Cer6.png", "alt", "About Me"], ["label", "CONTACT ME"], ["href", "www.linkedin.com/in/juan-david-castano-rodriguez-31ba51251", "target", "_blank"], [1, "col-12", ".col-lg-12"], ["href", "github.com/judcastanoro", "target", "_blank", 1, "ion", "ion-social-github"], ["src", "../../../../assets/images/GIT.png", "alt", "About Me"], ["href", "www.linkedin.com/in/juan-david-castano-rodriguez-31ba51251", "target", "_blank", 1, "ion", "ion-social-github"], ["src", "../../../../assets/images/linkedin.png", "alt", "About Me"]], template: function ProyectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card", 2)(3, "nb-card-body")(4, "nb-stepper", 3)(5, "nb-step", 4)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " I am from Bogot\u00E1, Colombia. I am currently studying Computer Science at the National University of Colombia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Enthusiastic about information technology, I am actively seeking professional opportunities that align with my passion for software development, with a primary focus on web and design applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8)(16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nb-step", 11)(21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Proyects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nb-accordion")(24, "nb-accordion-item")(25, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " ELECTION SIMULATOR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nb-accordion-item-body")(28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Creation of a complete CRUD web service simulating the registry's election results with microservices. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Among the functions of the web service is the registration of voters, parties and representatives, authentication, recording of votes and displaying the results of the elections. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12)(33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12)(36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "See it in more details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "HERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "nb-accordion-item")(44, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " RESTAURANT RESERVATION SYSTEM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "nb-accordion-item-body")(47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Creation of a complete CRUD web service in which you can register, log in, see the menu and hours available to make reservations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 12)(50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 12)(53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "See it in more details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "HERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 8)(61, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "nb-step", 19)(66, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "nb-card")(69, "nb-card-body")(70, "nb-tabset", 20)(71, "nb-tab", 21)(72, "div")(73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div")(76, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div")(79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div")(82, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "nb-tab", 26)(85, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 8)(90, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "nb-step", 29)(95, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Coadfasfa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 31)(100, "div", 12)(101, "div", 6)(102, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Coadfasfa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 12)(107, "div", 6)(108, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 8)(111, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Coadfasfa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", false);
    } }, dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbStepperComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbStepComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbStepperNextDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbTabsetComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbTabComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbAccordionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbAccordionItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbAccordionItemHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbAccordionItemBodyComponent], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%]     nb-stepper .step-content {\n  text-align: center;\n  \n}\n[_nghost-%COMP%]     nb-stepper .step-content button {\n  cursor: pointer;\n  margin: 0.5rem;\n}\n[_nghost-%COMP%]     nb-stepper .step-content .centrar-imagen {\n  text-align: center;\n}\n[_nghost-%COMP%]     nb-stepper .step-content .centrar-imagen img {\n  max-width: 100%; \n  height: auto; \n}\n[_nghost-%COMP%]     nb-stepper .step-content .col-md-4 {\n  display: inline-flex;\n}\n[_nghost-%COMP%]     nb-stepper .step-content .col-md-6 {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3llY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0VBa0JBOzs7O0lBQUE7QUFYRjtBQUxFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFPSjtBQUZFO0VBQ0Usa0JBQUE7QUFJSjtBQURFO0VBQ0UsZUFBQSxFQUFBLHVEQUFBO0VBQ0EsWUFBQSxFQUFBLGdFQUFBO0FBR0o7QUFNRTtFQUNFLG9CQUFBO0FBSko7QUFPRTtFQUNFLG9CQUFBO0FBTEoiLCJmaWxlIjoicHJveWVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgbmItc3RlcHBlciAuc3RlcC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLmNlbnRyYXItaW1hZ2VuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNlbnRyYXItaW1hZ2VuIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIEFzZWd1cmEgcXVlIGxhIGltYWdlbiBubyBzdXBlcmUgc3UgdGFtYcOxbyBvcmlnaW5hbCAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAvKiBIYWNlIHF1ZSBsYSBhbHR1cmEgc2UgYWp1c3RlIGF1dG9tw6F0aWNhbWVudGUgc2Vnw7puIGVsIGFuY2hvICovXHJcbiAgfVxyXG5cclxuICAvKi5hbGluZWFye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH0qL1xyXG5cclxuICAuY29sLW1kLTQge1xyXG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICB9XHJcblxyXG4gIC5jb2wtbWQtNiB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIH1cclxuICBcclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_landpage_landpage_module_ts.js.map