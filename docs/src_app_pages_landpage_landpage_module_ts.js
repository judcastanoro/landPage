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
        _layout_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__.LayoutRoutingModule] });
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
        _layout_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__.LayoutRoutingModule] }); })();


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
        this.secondForm = this.fb.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        });
        this.thirdForm = this.fb.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        });
    }
    onFirstSubmit() {
        this.firstForm.markAsDirty();
    }
    onSecondSubmit() {
        this.secondForm.markAsDirty();
    }
    onThirdSubmit() {
        this.thirdForm.markAsDirty();
    }
}
ProyectsComponent.ɵfac = function ProyectsComponent_Factory(t) { return new (t || ProyectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormBuilder)); };
ProyectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProyectsComponent, selectors: [["ngx-proyects"]], decls: 43, vars: 0, consts: [[1, "steppers-container", "row"], [1, "col-md-12", "col-lg-6", "col-xxxl-6"], ["size", "medium"], ["orientation", "vertical"], ["label", "First step"], [1, "lorem"], ["nbButton", "", "disabled", "", "nbStepperNext", ""], ["nbButton", "", "nbStepperNext", ""], ["label", "Second step"], ["nbButton", "", "nbStepperPrevious", ""], ["label", "Third step"], ["label", "Fourth step"]], template: function ProyectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card", 2)(3, "nb-card-body")(4, "nb-stepper", 3)(5, "nb-step", 4)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Step content #1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis, commodo vel placerat quis, lobortis in ligula. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nb-step", 8)(15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Step content #2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Curabitur luctus mattis risus nec condimentum. Donec at dui turpis. Sed vehicula fringilla rutrum. Nullam sed ornare magna. Mauris vitae laoreet diam. Mauris fermentum ligula at lacinia semper. Nulla placerat dui eu sapien pellentesque, eu placerat leo luctus. Cras pharetra blandit fermentum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nb-step", 10)(24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Step content #3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis, commodo vel placerat quis, lobortis in ligula. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Curabitur luctus mattis risus nec condimentum. Donec at dui turpis. Sed vehicula fringilla rutrum. Nullam sed ornare magna. Mauris vitae laoreet diam. Mauris fermentum ligula at lacinia semper. Nulla placerat dui eu sapien pellentesque, eu placerat leo luctus. Cras pharetra blandit fermentum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nb-step", 11)(35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Step content #4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } }, dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbStepperComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbStepComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbStepperNextDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbStepperPreviousDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonComponent], styles: ["[_nghost-%COMP%]     nb-stepper .step-content {\n  text-align: center;\n}\n[_nghost-%COMP%]     nb-stepper .step-content button {\n  cursor: pointer;\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3llY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJwcm95ZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCBuYi1zdGVwcGVyIC5zdGVwLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_landpage_landpage_module_ts.js.map