(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/add-post/add-post.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/add-post/add-post.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/add-post/add-post.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/add-post/add-post.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8\"><div class=\"panel panel-default\">\r\n    <!--<div class=\"panel-heading\"></div>-->\r\n    <div class=\"panel-body\">\r\n        <form (ngSubmit)=\"onProductSubmit(ProductForm.value)\" #ProductForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Product Name :</label>\r\n                <input type=\"text\" class=\"form-control input-md\" name=\"productname\" #productname=\"ngModel\" (ngModel)=\"user.productname\" minlength=\"4\" required>\r\n                <div *ngIf=\"productname.invalid && (productname.dirty || productname.touched)\" class=\"text text-danger\">product name is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"email\">Product Description :</label>\r\n                <input type=\"text\" class=\"form-control input-md\" name=\"productdescription\" #productdescription=\"ngModel\" (ngModel)=\"user.productdescription\" minlength=\"4\" required>\r\n                <div *ngIf=\"productdescription.invalid && (productdescription.dirty || productdescription.touched)\" class=\"text text-danger\">product description is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"contact\">Product Uses:</label>\r\n                <input type=\"text\" class=\"form-control input-md\" name=\"productuses\" #productuses=\"ngModel\" (ngModel)=\"user.productuses\" minlength=\"4\" required>\r\n                <div *ngIf=\"productuses.invalid && (productuses.dirty || productuses.touched)\" class=\"text text-danger\">product uses is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"productImage\">Image:</label>\r\n                <input type=\"file\" class=\"form-control input-md\" (change)=\"onFileChange($event)\" id=\"productimage\" name=\"productimage\" required>\r\n            </div>\r\n            \r\n            <button type=\"submit\" [disabled]=\"!ProductForm.form.valid\" class=\"btn btn-primary btn-lg\">Submit</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/add-post/add-post.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/add-post/add-post.component.ts ***!
  \******************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../friends.service */ "./src/app/friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(friend) {
        this.friend = friend;
        this.image = null;
    }
    AddPostComponent.prototype.ngOnInit = function () {
    };
    AddPostComponent.prototype.onFileChange = function (event) {
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            this.image = event.target.files[0];
            console.log(this.image.name);
        }
    };
    AddPostComponent.prototype.onProductSubmit = function (data) {
        var vote = '0';
        var form = new FormData();
        form.append("productname", data.productname);
        form.append("productdescription", data.productname);
        form.append('vote', vote);
        form.append("productuses", data.productuses);
        form.append("productimage", this.image, this.image.name);
        console.log(form);
        this.friend.onAddProduct(form).subscribe(function (response) {
            console.log(data);
        });
    };
    AddPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-post',
            template: __webpack_require__(/*! ./add-post.component.html */ "./src/app/admin/add-post/add-post.component.html"),
            styles: [__webpack_require__(/*! ./add-post.component.css */ "./src/app/admin/add-post/add-post.component.css")]
        }),
        __metadata("design:paramtypes", [_friends_service__WEBPACK_IMPORTED_MODULE_1__["FriendsService"]])
    ], AddPostComponent);
    return AddPostComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-mainpage/admin-mainpage.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-mainpage/admin-mainpage.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-mainpage/admin-mainpage.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-mainpage/admin-mainpage.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin-mainpage works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-mainpage/admin-mainpage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-mainpage/admin-mainpage.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminMainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMainpageComponent", function() { return AdminMainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminMainpageComponent = /** @class */ (function () {
    function AdminMainpageComponent() {
    }
    AdminMainpageComponent.prototype.ngOnInit = function () {
    };
    AdminMainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-mainpage',
            template: __webpack_require__(/*! ./admin-mainpage.component.html */ "./src/app/admin/admin-mainpage/admin-mainpage.component.html"),
            styles: [__webpack_require__(/*! ./admin-mainpage.component.css */ "./src/app/admin/admin-mainpage/admin-mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminMainpageComponent);
    return AdminMainpageComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nli {\r\n    list-style: none;\r\n}\r\n\r\n.fa-close {\r\n    font-size: 21px;\r\n    float: right;\r\n    position: relative;\r\n    margin-right: 9px;\r\n    margin-top: 9px;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidenav {\r\n    box-shadow: 2px 3px 4px #f5f5f5;\r\n    background-color: #fff;\r\n    border: 3px solid rgb(238, 238, 238);\r\n}\r\n\r\n.sidenav li {\r\n        font-size: 16px;\r\n        padding: 7px 7px;\r\n        font-family: sans-serif;\r\n        letter-spacing: 1px;\r\n        \r\n        text-align: justify;\r\n        text-transform: capitalize;\r\n    }\r\n\r\n.sidenav li:hover {\r\n            box-shadow: 2px 2px 2px 2px lightgray;\r\n        }\r\n\r\n.container {\r\n    padding: 0px;\r\n}\r\n\r\na {\r\n    color: #000;\r\n}\r\n\r\n.sidenav li:hover a {\r\n    text-decoration: none;\r\n}\r\n\r\n.left {\r\n    text-align: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <button (click)=\"openNav()\" style=\"z-index:10000;position:fixed\"><i class=\"fa fa-bars\"></i></button>\r\n    <app-header>Loading...</app-header>\r\n    <ul *ngIf =\"show\" class=\"sidenav col-xs-12 col-md-4\" id=\"sidenav\" style=\"float:left;\">\r\n     <i class=\"fa fa-close\" (click)=\"closeNav()\"></i>\r\n        <li>\r\n            <a routerLink=\"viewallusers\">View All Users</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"viewallfriends\">view all friends and request</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"addpost\">Add post</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"viewallpost\">View all posts with votes</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"viewallrecommendedpost\">view all recommended posts</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"viewAllsearchhistory\">view all search History</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"tophitkchart\">ALL top k hit rate in chart</a>\r\n        </li>\r\n        <li>\r\n            <a (click)=\"logout()\">logout</a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"\"><router-outlet></router-outlet></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.show = true;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['/adminlogin']);
    };
    AdminComponent.prototype.closeNav = function () {
        this.show = false;
    };
    AdminComponent.prototype.openNav = function () {
        this.show = true;
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/top-krating-chart/top-krating-chart.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/top-krating-chart/top-krating-chart.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/top-krating-chart/top-krating-chart.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/top-krating-chart/top-krating-chart.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 wow fadeInRight col-xs-12 col-sm-12\" data-wow-delay=\".25s\" id=\"barchart\" style=\"float:right;\">\r\n</div>"

/***/ }),

/***/ "./src/app/admin/top-krating-chart/top-krating-chart.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/top-krating-chart/top-krating-chart.component.ts ***!
  \************************************************************************/
/*! exports provided: TopKRatingChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopKRatingChartComponent", function() { return TopKRatingChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopKRatingChartComponent = /** @class */ (function () {
    function TopKRatingChartComponent() {
    }
    TopKRatingChartComponent.prototype.ngOnInit = function () {
        Barchart();
    };
    TopKRatingChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-krating-chart',
            template: __webpack_require__(/*! ./top-krating-chart.component.html */ "./src/app/admin/top-krating-chart/top-krating-chart.component.html"),
            styles: [__webpack_require__(/*! ./top-krating-chart.component.css */ "./src/app/admin/top-krating-chart/top-krating-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopKRatingChartComponent);
    return TopKRatingChartComponent;
}());



/***/ }),

/***/ "./src/app/admin/view-all-post/view-all-post.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/view-all-post/view-all-post.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/view-all-post/view-all-post.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/view-all-post/view-all-post.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8\">\r\n    <h2 class=\"sideheading\">All Products with Votes</h2>\r\n    <div *ngFor=\"let request of product\" class=\"panel panel-default\">\r\n        <div class=\"panel-body pnl-body\">\r\n            <div class=\"col-md-4\"> <a routerLink=\"/user/viewprofile/{{request.productname}}\"><img src=\"http://localhost:3000/{{request.productimage}}\" class=\"img-circle\" width=\"70\" height=\"70\" style=\"float:left;\"></a></div>\r\n            <div class=\"col-md-8\">\r\n                <div class=\"right col-md-6 col-xs-6\"> product Name</div> <div class=\"left col-md-6\">{{request.productname}}</div>\r\n                <div class=\"right col-md-6\">votes</div>\r\n                <div class=\"left col-md-6 col-xs-6\">{{request.vote}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/view-all-post/view-all-post.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/view-all-post/view-all-post.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewAllPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllPostComponent", function() { return ViewAllPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../friends.service */ "./src/app/friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewAllPostComponent = /** @class */ (function () {
    function ViewAllPostComponent(auth, friend) {
        this.auth = auth;
        this.friend = friend;
    }
    ViewAllPostComponent.prototype.ngOnInit = function () {
        this.loadAllProducts();
    };
    ViewAllPostComponent.prototype.loadAllProducts = function () {
        var _this = this;
        this.friend.loadAllProducts().subscribe(function (data) {
            console.log(data);
            _this.product = data;
        });
    };
    ViewAllPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-all-post',
            template: __webpack_require__(/*! ./view-all-post.component.html */ "./src/app/admin/view-all-post/view-all-post.component.html"),
            styles: [__webpack_require__(/*! ./view-all-post.component.css */ "./src/app/admin/view-all-post/view-all-post.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"]])
    ], ViewAllPostComponent);
    return ViewAllPostComponent;
}());



/***/ }),

/***/ "./src/app/admin/view-all-recommended-post/view-all-recommended-post.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/view-all-recommended-post/view-all-recommended-post.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/view-all-recommended-post/view-all-recommended-post.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/view-all-recommended-post/view-all-recommended-post.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-md-8 wow fadeInRight col-xs-12 col-sm-12\" data-wow-delay=\".25s\" id=\"content\" style=\"float:right;\">\r\n    <h2> All recommandations</h2>\r\n    <table  class=\"table table-bordered\">\r\n        <thead>\r\n            <tr>\r\n                <th>Product</th>\r\n                <th>Recommended By</th>\r\n                <th>RecommendedTo</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let request of recommends\">\r\n                <td>{{request.productname}}</td>\r\n                <td>{{request.username}}</td>\r\n                <td>{{request.recommendTo}}</td>\r\n                    </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/admin/view-all-recommended-post/view-all-recommended-post.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/view-all-recommended-post/view-all-recommended-post.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ViewAllRecommendedPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllRecommendedPostComponent", function() { return ViewAllRecommendedPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../friends.service */ "./src/app/friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewAllRecommendedPostComponent = /** @class */ (function () {
    function ViewAllRecommendedPostComponent(auth, friend) {
        this.auth = auth;
        this.friend = friend;
    }
    ViewAllRecommendedPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friend.loadRecommendations().subscribe(function (data) {
            _this.recommends = data;
            console.log(_this.recommends);
        });
    };
    ViewAllRecommendedPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-all-recommended-post',
            template: __webpack_require__(/*! ./view-all-recommended-post.component.html */ "./src/app/admin/view-all-recommended-post/view-all-recommended-post.component.html"),
            styles: [__webpack_require__(/*! ./view-all-recommended-post.component.css */ "./src/app/admin/view-all-recommended-post/view-all-recommended-post.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"]])
    ], ViewAllRecommendedPostComponent);
    return ViewAllRecommendedPostComponent;
}());



/***/ }),

/***/ "./src/app/admin/view-all-search-history/view-all-search-history.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/view-all-search-history/view-all-search-history.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/view-all-search-history/view-all-search-history.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/view-all-search-history/view-all-search-history.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 wow fadeInRight col-xs-12 col-sm-12\" data-wow-delay=\".25s\" id=\"content\" style=\"float:right;\">\r\n    <br>\r\n    <h2>\r\n        Your Searched History\r\n        <button style=\"float:right;\" class=\"btn btn-info\" (click)=\"clearuserhistory()\">Clear History&emsp;<i class=\"fa fa-trash-o\"></i></button>\r\n    </h2>\r\n    <table class=\"table table-bordered\">\r\n        <tr>\r\n            <th>Username</th>\r\n            <th>searched content</th>\r\n            <th> date</th>\r\n        </tr>\r\n        <tbody>\r\n            <tr *ngFor=\"let h of history\">\r\n                <td>{{h.username}}</td>\r\n                 <td>{{h.searchedContent}}</td>\r\n                <td>{{h.date}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/view-all-search-history/view-all-search-history.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/view-all-search-history/view-all-search-history.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewAllSearchHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllSearchHistoryComponent", function() { return ViewAllSearchHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../friends.service */ "./src/app/friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewAllSearchHistoryComponent = /** @class */ (function () {
    function ViewAllSearchHistoryComponent(auth, friend) {
        this.auth = auth;
        this.friend = friend;
    }
    ViewAllSearchHistoryComponent.prototype.ngOnInit = function () {
        this.loadhistory();
    };
    ViewAllSearchHistoryComponent.prototype.loadhistory = function () {
        var _this = this;
        this.auth.loadAllHistory().subscribe(function (data) {
            console.log(data);
            _this.history = data;
        });
    };
    ViewAllSearchHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-all-search-history',
            template: __webpack_require__(/*! ./view-all-search-history.component.html */ "./src/app/admin/view-all-search-history/view-all-search-history.component.html"),
            styles: [__webpack_require__(/*! ./view-all-search-history.component.css */ "./src/app/admin/view-all-search-history/view-all-search-history.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"]])
    ], ViewAllSearchHistoryComponent);
    return ViewAllSearchHistoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/viewall-friend-request/viewall-friend-request.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/viewall-friend-request/viewall-friend-request.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/viewall-friend-request/viewall-friend-request.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/admin/viewall-friend-request/viewall-friend-request.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 wow fadeInRight col-xs-12 col-sm-12\" data-wow-delay=\".25s\" id=\"content\" style=\"float:right;\">\r\n    <br>\r\n    <h2> all friend request and Response details...</h2>\r\n    <table class=\"table table-bordered\">\r\n        <thead>\r\n            <tr>\r\n                <th>Username</th>\r\n                <th>Request sent to</th>\r\n                <th>status</th>\r\n                </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let request of friendRequest\">\r\n                <td>{{request.username}}</td>\r\n                <td>{{request.friend}}</td>\r\n                <td *ngIf=\"request.status==true\"><button>friends<i class=\"fa fa-check\"></i></button></td>\r\n                <td *ngIf=\"request.status==false\"><button class=\"btn btn-warning\">pending<i class=\"fa fa-loading\"></i></button></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/admin/viewall-friend-request/viewall-friend-request.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/viewall-friend-request/viewall-friend-request.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewallFriendRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewallFriendRequestComponent", function() { return ViewallFriendRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../friends.service */ "./src/app/friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewallFriendRequestComponent = /** @class */ (function () {
    function ViewallFriendRequestComponent(friend) {
        this.friend = friend;
    }
    ViewallFriendRequestComponent.prototype.ngOnInit = function () {
        this.loadFriendrequests();
    };
    ViewallFriendRequestComponent.prototype.loadFriendrequests = function () {
        var _this = this;
        this.friend.getAllFriendRequests().subscribe(function (data) {
            console.log(data);
            _this.friendRequest = data;
        });
    };
    ViewallFriendRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewall-friend-request',
            template: __webpack_require__(/*! ./viewall-friend-request.component.html */ "./src/app/admin/viewall-friend-request/viewall-friend-request.component.html"),
            styles: [__webpack_require__(/*! ./viewall-friend-request.component.css */ "./src/app/admin/viewall-friend-request/viewall-friend-request.component.css")]
        }),
        __metadata("design:paramtypes", [_friends_service__WEBPACK_IMPORTED_MODULE_1__["FriendsService"]])
    ], ViewallFriendRequestComponent);
    return ViewallFriendRequestComponent;
}());



/***/ }),

/***/ "./src/app/admin/viewallusers/viewallusers.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/viewallusers/viewallusers.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/viewallusers/viewallusers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/viewallusers/viewallusers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 col-sm-12\" id=\"content\" style=\"float:right;\">\r\n    <br>\r\n    <h2>ALL USERS</h2>\r\n    <table class=\"table table-bordered\">\r\n\r\n        <thead>\r\n            <tr>\r\n                <th>S.No</th>\r\n                <th>image</th>\r\n                <th>Username</th>\r\n                <th>email</th>\r\n                  <th>admin</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let u of users; let i=index\">\r\n                <td>{{i+1}}</td>\r\n                 <td><img src=\"http://localhost:3000/{{u.propic}}\" class=\"img-circle\" width=\"40\" height=\"40\"></td>\r\n                <td>{{u.username}}</td>\r\n                <td>{{u.email}}</td>\r\n                <td *ngIf=\"u.admin == 'false'\"><button class=\"btn btn-primary\" (click)=\"makeAdmin(u.username)\">make Admin</button></td>   \r\n                <td *ngIf=\"u.admin == 'true'\" ><button class=\"btn btn-success\">Admin <i class=\"fa fa-check\"></i></button></td>\r\n               \r\n            </tr>\r\n        </tbody>\r\n\r\n    </table>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/admin/viewallusers/viewallusers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/viewallusers/viewallusers.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewallusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewallusersComponent", function() { return ViewallusersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../friends.service */ "./src/app/friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewallusersComponent = /** @class */ (function () {
    function ViewallusersComponent(auth, friend) {
        this.auth = auth;
        this.friend = friend;
        this.user = [];
        this.friendRequests = [];
        this.requestStatus = 'Request';
    }
    ViewallusersComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    ViewallusersComponent.prototype.loadProfile = function () {
        var _this = this;
        this.auth.getAllProfiles().subscribe(function (data) {
            console.log(data);
            _this.users = data;
            console.log(_this.users);
        });
    };
    ViewallusersComponent.prototype.makeAdmin = function (data) {
        var _this = this;
        var username = { username: data };
        this.auth.makeAdmin(username).subscribe(function (data) {
            console.log(data);
            _this.loadProfile();
        });
    };
    ViewallusersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewallusers',
            template: __webpack_require__(/*! ./viewallusers.component.html */ "./src/app/admin/viewallusers/viewallusers.component.html"),
            styles: [__webpack_require__(/*! ./viewallusers.component.css */ "./src/app/admin/viewallusers/viewallusers.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"]])
    ], ViewallusersComponent);
    return ViewallusersComponent;
}());



/***/ }),

/***/ "./src/app/adminlogin/adminlogin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/adminlogin/adminlogin.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\r\n    top: 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/adminlogin/adminlogin.component.html":
/*!******************************************************!*\
  !*** ./src/app/adminlogin/adminlogin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n    <div class=\"content\">\r\n        <form class=\"login-form\" (ngSubmit)=\"onAdminLogin(adminloginForm.value)\" #adminloginForm=\"ngForm\">\r\n            <h3 class=\"form-title font-green\">Admin Sign In</h3>\r\n            <div class=\"alert alert-danger display-hide\">\r\n                <button class=\"close\" data-close=\"alert\"></button>\r\n                <span> Enter any username and password. </span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->\r\n                <label class=\"control-label visible-ie8 visible-ie9\">Email :</label>\r\n                <input class=\"form-control form-control-solid placeholder-no-fix\" type=\"text\" placeholder=\"Email\" name=\"email\" #email=\"ngModel\" (ngModel)=\"user.email\" minlength=\"4\" required>\r\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"text text-danger\">Email is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label visible-ie8 visible-ie9\">Password</label>\r\n                <input class=\"form-control form-control-solid placeholder-no-fix\" type=\"password\" placeholder=\"Password\" name=\"password\" #password=\"ngModel\" (ngModel)=\"user.password\" minlength=\"4\" required />\r\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text text-danger\">Password is required</div>\r\n            </div>\r\n            <div class=\"form-actions\">\r\n                <button type=\"submit\" [disabled]=\"!adminloginForm.form.valid\" class=\"btn green uppercase\">Login</button>\r\n                <label class=\"rememberme check mt-checkbox mt-checkbox-outline\">\r\n                    <input type=\"checkbox\" name=\"remember\" value=\"1\" />Remember\r\n                    <span></span>\r\n                </label>\r\n                <a href=\"javascript:;\" id=\"forget-password\" class=\"forget-password\">Forgot Password?</a>\r\n            </div>\r\n                      </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/adminlogin/adminlogin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/adminlogin/adminlogin.component.ts ***!
  \****************************************************/
/*! exports provided: AdminloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminloginComponent", function() { return AdminloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminloginComponent = /** @class */ (function () {
    function AdminloginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminloginComponent.prototype.ngOnInit = function () {
    };
    AdminloginComponent.prototype.onAdminLogin = function (user) {
        var _this = this;
        console.log(user);
        this.auth.adminLogin(user).subscribe(function (data) {
            _this.data = data;
            if (_this.data != null) {
                if (_this.data.user.admin == 'true') {
                    _this.auth.storageUserData(data);
                    _this.router.navigate(['/admin/adminmainpage']);
                }
                else {
                    _this.router.navigate(['/adminlogin']);
                }
            }
        });
    };
    AdminloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminlogin',
            template: __webpack_require__(/*! ./adminlogin.component.html */ "./src/app/adminlogin/adminlogin.component.html"),
            styles: [__webpack_require__(/*! ./adminlogin.component.css */ "./src/app/adminlogin/adminlogin.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminloginComponent);
    return AdminloginComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_usermainpage_usermainpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/usermainpage/usermainpage.component */ "./src/app/user/usermainpage/usermainpage.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _approute_approute_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./approute/approute.module */ "./src/app/approute/approute.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_user_side_bar_user_side_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user-side-bar/user-side-bar.component */ "./src/app/user/user-side-bar/user-side-bar.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/userprofile/userprofile.component */ "./src/app/user/userprofile/userprofile.component.ts");
/* harmony import */ var _user_view_all_my_friends_view_all_my_friends_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/view-all-my-friends/view-all-my-friends.component */ "./src/app/user/view-all-my-friends/view-all-my-friends.component.ts");
/* harmony import */ var _user_searchforpost_searchforpost_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/searchforpost/searchforpost.component */ "./src/app/user/searchforpost/searchforpost.component.ts");
/* harmony import */ var _user_mysearchhistory_mysearchhistory_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/mysearchhistory/mysearchhistory.component */ "./src/app/user/mysearchhistory/mysearchhistory.component.ts");
/* harmony import */ var _user_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/recommendation/recommendation.component */ "./src/app/user/recommendation/recommendation.component.ts");
/* harmony import */ var _user_user_interest_user_interest_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/user-interest/user-interest.component */ "./src/app/user/user-interest/user-interest.component.ts");
/* harmony import */ var _user_tophitkrate_tophitkrate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/tophitkrate/tophitkrate.component */ "./src/app/user/tophitkrate/tophitkrate.component.ts");
/* harmony import */ var _user_searchforfriend_searchforfriend_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/searchforfriend/searchforfriend.component */ "./src/app/user/searchforfriend/searchforfriend.component.ts");
/* harmony import */ var _user_viewprofile_viewprofile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/viewprofile/viewprofile.component */ "./src/app/user/viewprofile/viewprofile.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_viewallusers_viewallusers_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/viewallusers/viewallusers.component */ "./src/app/admin/viewallusers/viewallusers.component.ts");
/* harmony import */ var _admin_viewall_friend_request_viewall_friend_request_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/viewall-friend-request/viewall-friend-request.component */ "./src/app/admin/viewall-friend-request/viewall-friend-request.component.ts");
/* harmony import */ var _admin_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/add-post/add-post.component */ "./src/app/admin/add-post/add-post.component.ts");
/* harmony import */ var _admin_view_all_post_view_all_post_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/view-all-post/view-all-post.component */ "./src/app/admin/view-all-post/view-all-post.component.ts");
/* harmony import */ var _admin_view_all_recommended_post_view_all_recommended_post_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/view-all-recommended-post/view-all-recommended-post.component */ "./src/app/admin/view-all-recommended-post/view-all-recommended-post.component.ts");
/* harmony import */ var _admin_view_all_search_history_view_all_search_history_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/view-all-search-history/view-all-search-history.component */ "./src/app/admin/view-all-search-history/view-all-search-history.component.ts");
/* harmony import */ var _admin_top_krating_chart_top_krating_chart_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/top-krating-chart/top-krating-chart.component */ "./src/app/admin/top-krating-chart/top-krating-chart.component.ts");
/* harmony import */ var _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./adminlogin/adminlogin.component */ "./src/app/adminlogin/adminlogin.component.ts");
/* harmony import */ var _admin_admin_mainpage_admin_mainpage_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/admin-mainpage/admin-mainpage.component */ "./src/app/admin/admin-mainpage/admin-mainpage.component.ts");
/* harmony import */ var _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./view-product/view-product.component */ "./src/app/view-product/view-product.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _user_friend_profile_friend_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./user/friend-profile/friend-profile.component */ "./src/app/user/friend-profile/friend-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _user_usermainpage_usermainpage_component__WEBPACK_IMPORTED_MODULE_7__["UsermainpageComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _user_user_side_bar_user_side_bar_component__WEBPACK_IMPORTED_MODULE_12__["UserSideBarComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                _user_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__["UserprofileComponent"],
                _user_view_all_my_friends_view_all_my_friends_component__WEBPACK_IMPORTED_MODULE_15__["ViewAllMyFriendsComponent"],
                _user_searchforpost_searchforpost_component__WEBPACK_IMPORTED_MODULE_16__["SearchforpostComponent"],
                _user_mysearchhistory_mysearchhistory_component__WEBPACK_IMPORTED_MODULE_17__["MysearchhistoryComponent"],
                _user_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_18__["RecommendationComponent"],
                _user_user_interest_user_interest_component__WEBPACK_IMPORTED_MODULE_19__["UserInterestComponent"],
                _user_tophitkrate_tophitkrate_component__WEBPACK_IMPORTED_MODULE_20__["TophitkrateComponent"],
                _user_searchforfriend_searchforfriend_component__WEBPACK_IMPORTED_MODULE_21__["SearchforfriendComponent"],
                _user_viewprofile_viewprofile_component__WEBPACK_IMPORTED_MODULE_22__["ViewprofileComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"],
                _admin_viewallusers_viewallusers_component__WEBPACK_IMPORTED_MODULE_24__["ViewallusersComponent"],
                _admin_viewall_friend_request_viewall_friend_request_component__WEBPACK_IMPORTED_MODULE_25__["ViewallFriendRequestComponent"],
                _admin_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_26__["AddPostComponent"],
                _admin_view_all_post_view_all_post_component__WEBPACK_IMPORTED_MODULE_27__["ViewAllPostComponent"],
                _admin_view_all_recommended_post_view_all_recommended_post_component__WEBPACK_IMPORTED_MODULE_28__["ViewAllRecommendedPostComponent"],
                _admin_view_all_search_history_view_all_search_history_component__WEBPACK_IMPORTED_MODULE_29__["ViewAllSearchHistoryComponent"],
                _admin_top_krating_chart_top_krating_chart_component__WEBPACK_IMPORTED_MODULE_30__["TopKRatingChartComponent"],
                _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_31__["AdminloginComponent"],
                _admin_admin_mainpage_admin_mainpage_component__WEBPACK_IMPORTED_MODULE_32__["AdminMainpageComponent"],
                _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_33__["ViewProductComponent"],
                _user_friend_profile_friend_profile_component__WEBPACK_IMPORTED_MODULE_35__["FriendProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _approute_approute_module__WEBPACK_IMPORTED_MODULE_10__["ApprouteModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_34__["FlashMessagesModule"].forRoot(),
            ],
            providers: [_authenicate_service__WEBPACK_IMPORTED_MODULE_9__["AuthenicateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/approute/approute.module.ts":
/*!*********************************************!*\
  !*** ./src/app/approute/approute.module.ts ***!
  \*********************************************/
/*! exports provided: ApprouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprouteModule", function() { return ApprouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _user_usermainpage_usermainpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/usermainpage/usermainpage.component */ "./src/app/user/usermainpage/usermainpage.component.ts");
/* harmony import */ var _user_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/userprofile/userprofile.component */ "./src/app/user/userprofile/userprofile.component.ts");
/* harmony import */ var _user_searchforpost_searchforpost_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user/searchforpost/searchforpost.component */ "./src/app/user/searchforpost/searchforpost.component.ts");
/* harmony import */ var _user_tophitkrate_tophitkrate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user/tophitkrate/tophitkrate.component */ "./src/app/user/tophitkrate/tophitkrate.component.ts");
/* harmony import */ var _user_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user/recommendation/recommendation.component */ "./src/app/user/recommendation/recommendation.component.ts");
/* harmony import */ var _user_mysearchhistory_mysearchhistory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user/mysearchhistory/mysearchhistory.component */ "./src/app/user/mysearchhistory/mysearchhistory.component.ts");
/* harmony import */ var _user_searchforfriend_searchforfriend_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user/searchforfriend/searchforfriend.component */ "./src/app/user/searchforfriend/searchforfriend.component.ts");
/* harmony import */ var _user_user_interest_user_interest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../user/user-interest/user-interest.component */ "./src/app/user/user-interest/user-interest.component.ts");
/* harmony import */ var _user_viewprofile_viewprofile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../user/viewprofile/viewprofile.component */ "./src/app/user/viewprofile/viewprofile.component.ts");
/* harmony import */ var _user_view_all_my_friends_view_all_my_friends_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../user/view-all-my-friends/view-all-my-friends.component */ "./src/app/user/view-all-my-friends/view-all-my-friends.component.ts");
/* harmony import */ var _user_friend_profile_friend_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../user/friend-profile/friend-profile.component */ "./src/app/user/friend-profile/friend-profile.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_viewallusers_viewallusers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../admin/viewallusers/viewallusers.component */ "./src/app/admin/viewallusers/viewallusers.component.ts");
/* harmony import */ var _admin_viewall_friend_request_viewall_friend_request_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../admin/viewall-friend-request/viewall-friend-request.component */ "./src/app/admin/viewall-friend-request/viewall-friend-request.component.ts");
/* harmony import */ var _admin_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../admin/add-post/add-post.component */ "./src/app/admin/add-post/add-post.component.ts");
/* harmony import */ var _admin_view_all_post_view_all_post_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../admin/view-all-post/view-all-post.component */ "./src/app/admin/view-all-post/view-all-post.component.ts");
/* harmony import */ var _admin_view_all_recommended_post_view_all_recommended_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../admin/view-all-recommended-post/view-all-recommended-post.component */ "./src/app/admin/view-all-recommended-post/view-all-recommended-post.component.ts");
/* harmony import */ var _admin_view_all_search_history_view_all_search_history_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../admin/view-all-search-history/view-all-search-history.component */ "./src/app/admin/view-all-search-history/view-all-search-history.component.ts");
/* harmony import */ var _admin_top_krating_chart_top_krating_chart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../admin/top-krating-chart/top-krating-chart.component */ "./src/app/admin/top-krating-chart/top-krating-chart.component.ts");
/* harmony import */ var _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../adminlogin/adminlogin.component */ "./src/app/adminlogin/adminlogin.component.ts");
/* harmony import */ var _admin_admin_mainpage_admin_mainpage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../admin/admin-mainpage/admin-mainpage.component */ "./src/app/admin/admin-mainpage/admin-mainpage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    {
        path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: 'usermainpage', component: _user_usermainpage_usermainpage_component__WEBPACK_IMPORTED_MODULE_6__["UsermainpageComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'userprofile', component: _user_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_7__["UserprofileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'friendprofile/:username', component: _user_friend_profile_friend_profile_component__WEBPACK_IMPORTED_MODULE_16__["FriendProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'userinterest', component: _user_user_interest_user_interest_component__WEBPACK_IMPORTED_MODULE_13__["UserInterestComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'viewallmyfriends', component: _user_view_all_my_friends_view_all_my_friends_component__WEBPACK_IMPORTED_MODULE_15__["ViewAllMyFriendsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'viewprofile/:username', component: _user_viewprofile_viewprofile_component__WEBPACK_IMPORTED_MODULE_14__["ViewprofileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'recommend', component: _user_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_10__["RecommendationComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'searchforfriend', component: _user_searchforfriend_searchforfriend_component__WEBPACK_IMPORTED_MODULE_12__["SearchforfriendComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'tophitkrate', component: _user_tophitkrate_tophitkrate_component__WEBPACK_IMPORTED_MODULE_9__["TophitkrateComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'mysearchhistory', component: _user_mysearchhistory_mysearchhistory_component__WEBPACK_IMPORTED_MODULE_11__["MysearchhistoryComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'searchforpost', component: _user_searchforpost_searchforpost_component__WEBPACK_IMPORTED_MODULE_8__["SearchforpostComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
        ]
    },
    {
        path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
        children: [
            { path: 'adminmainpage', component: _admin_admin_mainpage_admin_mainpage_component__WEBPACK_IMPORTED_MODULE_27__["AdminMainpageComponent"] },
            { path: 'viewallusers', component: _admin_viewallusers_viewallusers_component__WEBPACK_IMPORTED_MODULE_19__["ViewallusersComponent"] },
            { path: 'viewallfriends', component: _admin_viewall_friend_request_viewall_friend_request_component__WEBPACK_IMPORTED_MODULE_20__["ViewallFriendRequestComponent"] },
            { path: 'addpost', component: _admin_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_21__["AddPostComponent"] },
            { path: 'viewallpost', component: _admin_view_all_post_view_all_post_component__WEBPACK_IMPORTED_MODULE_22__["ViewAllPostComponent"] },
            { path: 'viewallrecommendedpost', component: _admin_view_all_recommended_post_view_all_recommended_post_component__WEBPACK_IMPORTED_MODULE_23__["ViewAllRecommendedPostComponent"] },
            { path: 'viewAllsearchhistory', component: _admin_view_all_search_history_view_all_search_history_component__WEBPACK_IMPORTED_MODULE_24__["ViewAllSearchHistoryComponent"] },
            { path: 'tophitkchart', component: _admin_top_krating_chart_top_krating_chart_component__WEBPACK_IMPORTED_MODULE_25__["TopKRatingChartComponent"] }
        ]
    },
    { path: 'adminlogin', component: _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_26__["AdminloginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var ApprouteModule = /** @class */ (function () {
    function ApprouteModule() {
    }
    ApprouteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        })
    ], ApprouteModule);
    return ApprouteModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authenicate.service.ts":
/*!****************************************!*\
  !*** ./src/app/authenicate.service.ts ***!
  \****************************************/
/*! exports provided: AuthenicateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenicateService", function() { return AuthenicateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenicateService = /** @class */ (function () {
    function AuthenicateService(http) {
        this.http = http;
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "cache-control": 'no-cache' });
    }
    AuthenicateService.prototype.registerData = function (data) {
        console.log(data);
        var headers = this._headers;
        headers.set('Content-Type', 'multipart/form-data');
        return this.http.post('https://publicserver.localtunnel.me/users/register', data, { headers: headers });
    };
    AuthenicateService.prototype.Login = function (data) {
        var headers = this._headers;
        headers.set('Content-Type', 'application/json');
        return this.http.post('https://publicserver.localtunnel.me/users/login', data, { headers: headers });
    };
    AuthenicateService.prototype.adminLogin = function (data) {
        var headers = this._headers;
        headers.set('Content-Type', 'application/json');
        return this.http.post('https://publicserver.localtunnel.me/users/adminlogin', data, { headers: headers });
    };
    AuthenicateService.prototype.getProfile = function () {
        var userString = localStorage.getItem('user');
        userString = JSON.parse(userString);
        this.user = { 'user': userString };
        console.log(this.user);
        return this.user.user;
    };
    AuthenicateService.prototype.getProfileById = function (username) {
        this.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        return this.http.post("https://publicserver.localtunnel.me/users/profileById", username, { headers: headers });
    };
    AuthenicateService.prototype.getAllProfiles = function () {
        this.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        return this.http.post("https://publicserver.localtunnel.me/users/allprofiles", headers, { headers: headers });
    };
    AuthenicateService.prototype.loggedIn = function () {
        this.loadToken();
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            return false;
        }
        ;
    };
    AuthenicateService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
        return token;
    };
    AuthenicateService.prototype.sendRequest = function (friendName) {
        this.loadToken();
        console.log(friendName);
        var headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        headers.append("cache-control", 'no-cache');
        return this.http.post("https://publicserver.localtunnel.me/users/friendrequest", friendName, { headers: headers });
    };
    AuthenicateService.prototype.saveToHistory = function (username) {
        this.loadToken();
        console.log(username);
        var headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        headers.append("cache-control", 'no-cache');
        return this.http.post("https://publicserver.localtunnel.me/users/savehistory", username, { headers: headers });
    };
    AuthenicateService.prototype.loadHistory = function () {
        this.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        headers.append("cache-control", 'no-cache');
        return this.http.post("https://publicserver.localtunnel.me/users/loaduserhistory", headers, { headers: headers });
    };
    AuthenicateService.prototype.loadAllHistory = function () {
        this.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        headers.append("cache-control", 'no-cache');
        return this.http.post("https://publicserver.localtunnel.me/users/loadAlluserhistory", headers, { headers: headers });
    };
    AuthenicateService.prototype.clearuserhistory = function () {
        this.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        headers.append("cache-control", 'no-cache');
        return this.http.post("https://publicserver.localtunnel.me/users/clearuserhistory", headers, { headers: headers });
    };
    AuthenicateService.prototype.makeAdmin = function (username) {
        this.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        headers.append("cache-control", 'no-cache');
        return this.http.post("https://publicserver.localtunnel.me/users/makeAdmin", username, { headers: headers });
    };
    AuthenicateService.prototype.storageUserData = function (data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.authToken = data.token;
    };
    AuthenicateService.prototype.logout = function () {
        this.authToken = '';
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        localStorage.clear();
    };
    AuthenicateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenicateService);
    return AuthenicateService;
}());



/***/ }),

/***/ "./src/app/friends.service.ts":
/*!************************************!*\
  !*** ./src/app/friends.service.ts ***!
  \************************************/
/*! exports provided: FriendsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsService", function() { return FriendsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authenicate.service */ "./src/app/authenicate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendsService = /** @class */ (function () {
    function FriendsService(http, auth) {
        this.http = http;
        this.auth = auth;
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "cache-control": 'no-cache' });
    }
    FriendsService.prototype.getFriendRequests = function (status) {
        this.token = this.auth.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post("https://publicserver.localtunnel.me/users/getFriendRequests", status, { headers: headers });
    };
    FriendsService.prototype.checkFriend = function (username) {
        console.log(username);
        this.token = this.auth.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post("https://publicserver.localtunnel.me/users/checkFriends", username, { headers: headers });
    };
    FriendsService.prototype.getAllFriendRequests = function () {
        this.token = this.auth.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post("https://publicserver.localtunnel.me/users/getAllFriendRequests", headers, { headers: headers });
    };
    FriendsService.prototype.handleRequest = function (url, accept) {
        this.token = this.auth.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post("https://publicserver.localtunnel.me/users/" + url, accept, { headers: headers });
    };
    FriendsService.prototype.onAddProduct = function (product) {
        this.token = this.auth.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        headers.set('Content-Type', 'multipart/form-data');
        return this.http.post("https://publicserver.localtunnel.me/users/addProduct", product, { headers: headers });
    };
    FriendsService.prototype.onRecommend = function (product) {
        this.token = this.auth.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        headers.set('Content-Type', 'multipart/form-data');
        return this.http.post("https://publicserver.localtunnel.me/users/saverecommend", product, { headers: headers });
    };
    FriendsService.prototype.getRecommendedPosts = function () {
        this.token = this.auth.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        headers.set('Content-Type', 'multipart/form-data');
        return this.http.post("https://publicserver.localtunnel.me/users/getRecommendedPosts", headers, { headers: headers });
    };
    FriendsService.prototype.onSearchProduct = function (productname) {
        this.token = this.auth.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post("https://publicserver.localtunnel.me/users/getProductByName", productname, { headers: headers });
    };
    FriendsService.prototype.loadAllProducts = function () {
        this.token = this.auth.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post("https://publicserver.localtunnel.me/users/getAllProducts", headers, { headers: headers });
    };
    FriendsService.prototype.loadRecommendations = function () {
        this.token = this.auth.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post("https://publicserver.localtunnel.me/users/getAllRecommendations", headers, { headers: headers });
    };
    FriendsService.prototype.onVote = function (productname) {
        this.token = this.auth.loadToken();
        var headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post("https://publicserver.localtunnel.me/users/onVote", productname, { headers: headers });
    };
    FriendsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenicate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenicateService"]])
    ], FriendsService);
    return FriendsService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background-color: #4184ab;\r\n    border-color: #4184ab;\r\n    border-radius: 0px;\r\n    color: #fff;\r\n}\r\n\r\n.navbar-brand img {\r\n    position: inherit;\r\n    width: 50px;\r\n    height: 30px;\r\n    margin-top: -6px;\r\n}\r\n\r\n.form-control {\r\n    background-color: #4184ab;\r\n    border-color: #f1f1f1;\r\n    border-radius: 0px;\r\n}\r\n\r\n.input-group-btn button {\r\n    background-color: #4184ab;\r\n    color: #f1f1f1;\r\n    border-radius:0px;\r\n}\r\n\r\n.search {\r\n    margin-top: 10px;\r\n}\r\n\r\n.navbar-right div {\r\n    cursor: pointer;\r\n    padding-right: 10px;\r\n    padding-top: 6px;\r\n    float: right;\r\n}\r\n\r\n.navbar-right div img {\r\n        margin-right: 10px;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand\"><img src=\"../assets/images/votelogo.jpg\" width=\"50\" height=\"50\"></a>\r\n        <div class=\" col-md-offset-2 col-xs-6 col-md-6 search\">\r\n            <form (ngSubmit)=\"onSearchFriend(searchForm.value)\" #searchForm=\"ngForm\">\r\n                <div class=\"input-group\">\r\n                    <input list=\"post\" class=\"form-control\" name=\"username\" id=\"username\" #username=\"ngModel\" (ngModel)=\"user.searchFriend\" required>\r\n                    <datalist id=\"post\"><option *ngFor=\"let u of users\" [value]=\"u.username\">{{u.email}}</option></datalist>\r\n                    <div class=\"input-group-btn\">\r\n                        <button class=\"btn btn-default\" type=\"submit\">\r\n                            <i class=\"glyphicon glyphicon-search\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"navbar-right\">\r\n            <div class=\"dropdown\">\r\n                <img [src]=\"userdetails.propic\" class=\"img-circle dropdown-toggle\" width=\"40\" height=\"40\" data-toggle=\"dropdown\">\r\n                <ul class=\"dropdown-menu\">\r\n                    <li><a>{{userdetails.username}}</a></li>\r\n                    <li><a >CSS</a></li>\r\n                    <li><a >JavaScript</a></li>\r\n                </ul>\r\n                <span style=\"float:right;font-size:30px;\" (click)=\"openNav()\">&#9776;</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../friends.service */ "./src/app/friends.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, router, friend) {
        this.auth = auth;
        this.router = router;
        this.friend = friend;
        this.user = [];
        this.friendRequests = [];
        this.requestStatus = 'Request';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    HeaderComponent.prototype.loadProfile = function () {
        var _this = this;
        this.auth.getAllProfiles().subscribe(function (data) {
            _this.users = data;
        });
        this.userdetails = this.auth.getProfile();
        this.userdetails.propic = 'http://localhost:3000/' + this.userdetails.propic;
    };
    HeaderComponent.prototype.openNav = function () {
        var sidenav = document.getElementById("mySidenav");
        if (sidenav.style.width == "350px") {
            sidenav.style.width = "0";
        }
        else {
            sidenav.style.width = "350px";
        }
    };
    HeaderComponent.prototype.onSearchFriend = function (username) {
        var _this = this;
        console.log(username);
        this.router.navigate(['/user/friendprofile/', username.username]);
        this.friend.checkFriend(username).subscribe(function (data) {
            console.log(data);
            _this.friendStatus = data;
        });
        var searchedContent = { "searchedContent": username.username };
        this.auth.saveToHistory(searchedContent).subscribe(function (data) { console.log(data); });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login\r\n{\r\n    top:0;\r\n    position:fixed;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n}\r\n.panel{\r\n    margin-bottom:0px\r\n}\r\n.forget-password{\r\n    float:right\r\n}\r\n.form-control{\r\n    height:45px;\r\n    border-radius:0px;\r\n\r\n}\r\n.heading {\r\n    text-align: center;\r\n    padding-top: 12px;\r\n    font-size: 20px;\r\n    /* font-family: monospace; */\r\n    letter-spacing: 1px;\r\n}\r\n.fa {\r\n    float: right;\r\n    margin-top: -27px;\r\n    margin-right: 19px;\r\n    font-size: larger;\r\n    color: lightgray;\r\n}\r\n.panel-footer {\r\n    font-size: 17px;\r\n    text-align: center;\r\n    background-color: #fff;\r\n}\r\ninput[type=email]:focus + .fa-envelope{\r\n    color:blue\r\n}\r\ninput[type=password]:focus + .fa-lock{\r\n    color:blue\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"login container-fluid\">\r\n    <br><br />\r\n    <div class=\"main col-md-offset-4 col-md-4 col-xs-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"heading\"><h4>SIGN IN</h4></div>\r\n            <div class=\"panel-body\">\r\n                <flash-messages></flash-messages>\r\n                <form class=\"login-form\" (ngSubmit)=\"onLogin(loginForm.value)\" #loginForm=\"ngForm\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->\r\n                           <input class=\"form-control form-control-solid placeholder-no-fix\" type=\"email\" placeholder=\"Email\" name=\"email\" #email=\"ngModel\" (ngModel)=\"user.email\" minlength=\"4\" required>\r\n                        <span class=\"fa fa-envelope\"></span>\r\n                        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"text text-danger\">Email is required</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                           <input class=\"form-control form-control-solid password\" type=\"password\" placeholder=\"Password\" name=\"password\" #password=\"ngModel\" (ngModel)=\"user.password\" minlength=\"4\" required />\r\n                           <span class=\"fa fa-lock\" (click)=\"changeText()\"></span>\r\n                        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text text-danger\">Password is required</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"submit\" [disabled]=\"!loginForm.form.valid\" class=\"col-md-2 btn btn-primary\">Login</button>\r\n                        \r\n                        <a href=\"javascript:;\" id=\"forget-password\" class=\"forget-password\">Forgot Password?</a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n            <div class=\"panel panel-footer\">\r\n                     <a routerLink=\"/register\" class=\"uppercase\">Create an account</a>\r\n             </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, flashMessages, el) {
        this.auth = auth;
        this.router = router;
        this.flashMessages = flashMessages;
        this.el = el;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (user) {
        var _this = this;
        console.log(user);
        this.auth.Login(user).subscribe(function (data) {
            _this.data = data;
            console.log(data);
            if (_this.data.success == true) {
                _this.auth.storageUserData(data);
                _this.router.navigate(['/user/usermainpage']);
            }
            else {
                _this.inValidLogin();
            }
        });
    };
    LoginComponent.prototype.inValidLogin = function () {
        this.flashMessages.show('ivalid credentials', { cssClass: 'alert-warning', timeout: 5000 });
    };
    LoginComponent.prototype.changeText = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n h1 {\r\n    font-family: monospace;\r\n    text-transform: uppercase;\r\n    font-weight: bolder;\r\n       letter-spacing: 1px;\r\n}\r\n.form-control {\r\nborder-radius:0px;\r\n\r\n}\r\nlabel {\r\n  font-weight: bolder;\r\n  font-family: MONOSPACE;\r\n  font-size: 18px\r\n}\r\n.btn {\r\n  font-size: 19px;\r\n  font-family: monospace;\r\n  font-weight: bolder;\r\n  letter-spacing: 1px;\r\n}\r\n.register {\r\n    top: 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n }\r\nng-valid[required], .ng-valid.required {\r\n  border-bottom: 2px solid #42A948; /* green */\r\n}\r\nng-touched:not(form) {\r\n  border-bottom: 2px solid #a94442; /* red */\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n<div class=\"register container-fluid\">\r\n    <br><br />\r\n        <div class=\"main col-md-offset-3 col-md-6 col-xs-12\">\r\n            <flash-messages></flash-messages>\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\"><h4>Register</h4></div>\r\n                <div class=\"panel-body\">\r\n                    <form (ngSubmit)=\"onRegister(registerForm.value)\" #registerForm=\"ngForm\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"username\">Username :</label>\r\n                            <input type=\"text\" class=\"form-control input-md\" name=\"username\" #username=\"ngModel\" (ngModel)=\"user.username\" minlength=\"4\" required>\r\n                            <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"text text-danger\">Username is required</div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"email\">Email :</label>\r\n                            <input type=\"email\" class=\"form-control input-md\" name=\"email\" #email=\"ngModel\" (ngModel)=\"user.email\" minlength=\"4\" required>\r\n                            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"text text-danger\">Email is required</div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"contact\">Contact:</label>\r\n                            <input type=\"Number\" class=\"form-control input-md\" name=\"contact\" #contact=\"ngModel\" (ngModel)=\"user.contact\" minlength=\"4\" required>\r\n                            <div *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\" class=\"text text-danger\">Contact is required</div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"pwd\">Password:</label>\r\n                            <input type=\"password\" class=\"form-control input-md\" name=\"password\" #password=\"ngModel\" (ngModel)=\"user.password\" minlength=\"4\" required>\r\n                            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text text-danger\">Password is required</div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"propic\">Image:</label>\r\n                            <input type=\"file\" class=\"form-control input-md\" (change)=\"onFileChange($event)\" id=\"propic\" name=\"propic\" required>\r\n                        </div>\r\n                        <!--<label class=\"container\">\r\n                  Remember me\r\n                  <input type=\"checkbox\" checked=\"checked\">\r\n                  <span class=\"checkmark\"></span>\r\n                </label>-->\r\n                        <button type=\"submit\" [disabled]=\"!registerForm.form.valid\" class=\"btn btn-primary btn-lg\">Submit</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router, flashMessages) {
        this.auth = auth;
        this.router = router;
        this.flashMessages = flashMessages;
        this.image = null;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onFileChange = function (event) {
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            this.image = event.target.files[0];
            console.log(this.image.name);
        }
    };
    RegisterComponent.prototype.onRegister = function (data) {
        var _this = this;
        var form = new FormData();
        form.append("username", data.username);
        form.append("password", data.password);
        form.append("email", data.email);
        form.append("admin", "false");
        form.append("contact", data.contact);
        form.append("propic", this.image, this.image.name);
        console.log(form);
        this.auth.registerData(form).subscribe(function (data) {
            console.log(data);
            _this.user = data;
            if (_this.user.success == true) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.inValidRegistration();
            }
        });
    };
    RegisterComponent.prototype.inValidRegistration = function () {
        this.flashMessages.show('Email already exists', { cssClass: 'alert-warning', timeout: 5000 });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenicateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/friend-profile/friend-profile.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/friend-profile/friend-profile.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/friend-profile/friend-profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/friend-profile/friend-profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 wow fadeInRight col-xs-12 col-sm-12\" data-wow-delay=\".25s\" data-wow-delay=\".25s\" id=\"content\" style=\"float:right;\">\r\n    <h2>User Profile</h2>\r\n    <div class=\"panel panel-default\">\r\n        <div *ngIf=\"user\" class=\"panel-body pnl-body\">\r\n            <div class=\"col-md-4\" style=\"float:left;border-right:3px solid #f5f5f5;\">\r\n                  <div class=\"user-pic col-md-12\">\r\n                        <img [src]=\"user.propic\" class=\"img-thumbnail\" width=\"300\" height=\"350\">\r\n                    </div>          \r\n            </div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Username</div> <div class=\"left col-md-3 col-xs-6\">{{user.username}}</div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Email</div> <div class=\"left col-md-3 col-xs-6\">{{user.email}}</div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Mobile</div> <div class=\"left col-md-3 col-xs-6\">{{user.contact}}</div>\r\n            <div class=\"right col-md-6\">status</div>\r\n            <div *ngIf=\"friendStatus == null\" class=\"left col-md-6 col-xs-6\">\r\n                <button id=\"btn-info\" style=\"color:#fff;\" class=\"btn btn-info\" (click)=\"onRequest();\">Send Request</button>\r\n            </div>\r\n            <div *ngIf=\"friendStatus\" class=\"left col-md-6 col-xs-6\">\r\n                <button *ngIf=\"friendStatus.status == false\" id=\"btn-info\" style=\"color:#fff;\" class=\"btn btn-info\">Request Sent<i class=\"fa fa-check\"></i></button>\r\n                <button *ngIf=\"friendStatus.status == true\" id=\"btn-info\" style=\"color:#fff;\" class=\"btn btn-info\">Friends<i class=\"fa fa-check\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/user/friend-profile/friend-profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/friend-profile/friend-profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: FriendProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendProfileComponent", function() { return FriendProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../friends.service */ "./src/app/friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendProfileComponent = /** @class */ (function () {
    function FriendProfileComponent(route, auth, friend) {
        this.route = route;
        this.auth = auth;
        this.friend = friend;
        this.username = '';
    }
    FriendProfileComponent.prototype.ngOnInit = function () {
        this.loadFriend();
    };
    FriendProfileComponent.prototype.ngOnChanges = function () { this.loadFriend(); };
    FriendProfileComponent.prototype.onRequest = function () {
        var friend = {
            'friend': this.user.username,
            'status': false
        };
        console.log(friend);
        this.auth.sendRequest(friend).subscribe(function (data) {
            console.log(data);
        });
    };
    FriendProfileComponent.prototype.loadFriend = function () {
        var _this = this;
        this.username = this.route.snapshot.paramMap.get('username');
        var data = { 'username': this.username };
        this.auth.getProfileById(data).subscribe(function (userdata) {
            console.log(userdata);
            _this.user = userdata;
            _this.user.propic = 'http://localhost:3000/' + _this.user.propic;
        });
        this.friend.checkFriend({ username: this.username }).subscribe(function (data) {
            console.log(data);
            _this.friendStatus = data;
        });
        var searchedContent = { "searchedContent": this.username };
        this.auth.saveToHistory(searchedContent).subscribe(function (data) { console.log(data); });
    };
    FriendProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friend-profile',
            template: __webpack_require__(/*! ./friend-profile.component.html */ "./src/app/user/friend-profile/friend-profile.component.html"),
            styles: [__webpack_require__(/*! ./friend-profile.component.css */ "./src/app/user/friend-profile/friend-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _friends_service__WEBPACK_IMPORTED_MODULE_3__["FriendsService"]])
    ], FriendProfileComponent);
    return FriendProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/mysearchhistory/mysearchhistory.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/mysearchhistory/mysearchhistory.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/mysearchhistory/mysearchhistory.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/mysearchhistory/mysearchhistory.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 wow fadeInRight col-xs-12 col-sm-12\" data-wow-delay=\".25s\" id=\"content\" style=\"float:right;\">\r\n    <br>\r\n    <h2>\r\n        Your Searched History\r\n        <button style=\"float:right;\" class=\"btn btn-info\" (click)=\"clearuserhistory()\">Clear History&emsp;<i class=\"fa fa-trash-o\"></i></button>\r\n    </h2>\r\n    <table class=\"table table-bordered\">\r\n        <tr>\r\n            <th>searched content</th>\r\n            <th> date</th>\r\n        </tr>\r\n        <tbody>\r\n            <tr *ngFor =\"let h of history\">\r\n                <td>{{h.searchedContent}}</td>\r\n                <td>{{h.date}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/user/mysearchhistory/mysearchhistory.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/mysearchhistory/mysearchhistory.component.ts ***!
  \*******************************************************************/
/*! exports provided: MysearchhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysearchhistoryComponent", function() { return MysearchhistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MysearchhistoryComponent = /** @class */ (function () {
    function MysearchhistoryComponent(auth) {
        this.auth = auth;
        this.histories = [];
    }
    MysearchhistoryComponent.prototype.ngOnInit = function () {
        this.loadhistory();
    };
    MysearchhistoryComponent.prototype.loadhistory = function () {
        var _this = this;
        this.auth.loadHistory().subscribe(function (data) {
            _this.history = data;
        });
    };
    MysearchhistoryComponent.prototype.clearuserhistory = function () {
        this.auth.clearuserhistory().subscribe(function (data) { console.log(data); });
    };
    MysearchhistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mysearchhistory',
            template: __webpack_require__(/*! ./mysearchhistory.component.html */ "./src/app/user/mysearchhistory/mysearchhistory.component.html"),
            styles: [__webpack_require__(/*! ./mysearchhistory.component.css */ "./src/app/user/mysearchhistory/mysearchhistory.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"]])
    ], MysearchhistoryComponent);
    return MysearchhistoryComponent;
}());



/***/ }),

/***/ "./src/app/user/recommendation/recommendation.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/recommendation/recommendation.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/recommendation/recommendation.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/recommendation/recommendation.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 col-sm-12\" id=\"content\" style=\"float:right;\">\r\n    <h2>All Recommandations</h2>\r\n\r\n    <div *ngIf=\"recommends\" class=\"panel panel-default\">\r\n        <div *ngFor=\"let recommand of recommends; let i = index\" class=\"panel-body pnl-body\">\r\n            <div class=\"col-md-4\" style=\"float:left;border-right:3px solid #f5f5f5;\">\r\n                <div class=\"user-pic col-md-12\">\r\n                    <img src=\"http://localhost:3000/{{product[i].productimage}}\" class=\"img-thumbnail\" width=\"300\" height=\"350\">\r\n                </div>\r\n                <div class=\"right col-md-3 col-xs-6\"><button class=\"btn\" routerLink=\"/user/searchforpost\">Vote For {{recommand.productname}}</button></div>\r\n\r\n            </div>\r\n            <div class=\"right col-md-3 col-xs-6\"> RecommendedBy</div> <div class=\"left col-md-3 col-xs-6\">{{recommand.username}}</div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Product Description</div> <div class=\"left col-md-3 col-xs-6\">{{recommand.description}}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/recommendation/recommendation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/recommendation/recommendation.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationComponent", function() { return RecommendationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../friends.service */ "./src/app/friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecommendationComponent = /** @class */ (function () {
    function RecommendationComponent(auth, friend) {
        this.auth = auth;
        this.friend = friend;
        this.product = [];
    }
    RecommendationComponent.prototype.ngOnInit = function () {
        this.recommendedPosts();
    };
    RecommendationComponent.prototype.recommendedPosts = function () {
        var _this = this;
        this.friend.getRecommendedPosts().subscribe(function (data) {
            _this.recommends = data;
            for (var i = 0; i < _this.recommends.length; i++) {
                var productname = { productname: _this.recommends[i].productname };
                _this.friend.onSearchProduct(productname).subscribe(function (datas) {
                    _this.product.push(datas);
                    console.log(_this.product);
                    console.log(_this.recommends);
                });
            }
        });
    };
    RecommendationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recommendation',
            template: __webpack_require__(/*! ./recommendation.component.html */ "./src/app/user/recommendation/recommendation.component.html"),
            styles: [__webpack_require__(/*! ./recommendation.component.css */ "./src/app/user/recommendation/recommendation.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"]])
    ], RecommendationComponent);
    return RecommendationComponent;
}());



/***/ }),

/***/ "./src/app/user/searchforfriend/searchforfriend.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/searchforfriend/searchforfriend.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-body{\r\npadding:0px;\r\n}\r\n.panel{\r\npadding-left:0px;\r\n}\r\nimg {\r\npadding-right:10px;}\r\n"

/***/ }),

/***/ "./src/app/user/searchforfriend/searchforfriend.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/searchforfriend/searchforfriend.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 col-sm-12\" id=\"content\" style=\"float:right;\">\r\n    <!--<div class=\"col-md-8\">\r\n        <h2 class=\"sideheading\">Search Friends</h2>\r\n        <form (ngSubmit)=\"onSearchFriend(searchForm.value)\" #searchForm=\"ngForm\">\r\n            <div class=\"input-group\">\r\n                <input list=\"post\" class=\"form-control\" name=\"username\" id=\"username\" #username=\"ngModel\" (ngModel)=\"user.searchFriend\" required>\r\n                <datalist id=\"post\"><option *ngFor=\"let u of users\" [value]=\"u.username\">{{u.email}}</option></datalist>\r\n                <div class=\"input-group-btn\">\r\n                    <button class=\"btn btn-default\" type=\"submit\">\r\n                        <i class=\"glyphicon glyphicon-search\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form> <br /><br /><br />\r\n        <div *ngIf=\"userdetails\" class=\"panel panel-default\">\r\n            <div class=\"panel-body pnl-body\">\r\n                <div class=\"col-md-4\"> <img [src]=\"userdetails.propic\" class=\"img-circle\" width=\"70\" height=\"70\" style=\"float:left;\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"right col-md-6 col-xs-6\"> Username</div> <div class=\"left col-md-6\">{{userdetails.username}}</div>\r\n                    <div class=\"right col-md-6\">status</div>\r\n                    <div *ngIf=\"friendStatus == null\" class=\"left col-md-6 col-xs-6\">\r\n                        <button id=\"btn-info\" style=\"color:#fff;\" class=\"btn btn-info\" (click)=\"onRequest();\">Send Request</button>\r\n                    </div>\r\n                    <div *ngIf=\"friendStatus\" class=\"left col-md-6 col-xs-6\">\r\n                        <button *ngIf=\"friendStatus.status == false\" id=\"btn-info\" style=\"color:#fff;\" class=\"btn btn-info\">Request Sent<i class=\"fa fa-check\"></i></button>\r\n                        <button *ngIf=\"friendStatus.status == true\" id=\"btn-info\" style=\"color:#fff;\" class=\"btn btn-info\">Friends<i class=\"fa fa-check\"></i></button>\r\n                    </div>\r\n                  \r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-4\">-->\r\n        <h2 class=\"sideheading\">Friend Request</h2>\r\n\r\n        <div *ngFor=\"let request of friendRequests\" class=\"panel panel-default col-md-7 col-xs-12\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"user\"><img [src]=\"request.propic\" class=\"img\" width=\"65\" height=\"70\" style=\"float:left;\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <label class=\"col-md-12 col-xs-10\">{{request.username}}</label>\r\n                        <button id=\"accept\" class=\"col-md-6 col-xs-4 btn btn-primary\" (click)=\"acceptFriendRequest(request.username);\" style=\"color:#fff;\">Accept <i class=\"fa fa-check\"></i></button>  \r\n                        <button class=\"col-md-6 col-xs-4 btn btn-danger\" (click)=\"deleteFriendRequest(request.username);\">Decline <i class=\"fa fa-close\"></i></button>\r\n                 </div>  <br /><br />\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"friendRequests.length == 0\"class=\"container-fluid\">\r\n            <h4 style=\"color:#808080\">No Friend Requests</h4>\r\n        </div>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/user/searchforfriend/searchforfriend.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/searchforfriend/searchforfriend.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchforfriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchforfriendComponent", function() { return SearchforfriendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../friends.service */ "./src/app/friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchforfriendComponent = /** @class */ (function () {
    function SearchforfriendComponent(auth, friend) {
        this.auth = auth;
        this.friend = friend;
        this.user = [];
        this.friendRequests = [];
        this.requestStatus = 'Request';
    }
    SearchforfriendComponent.prototype.ngOnInit = function () {
        this.loadFriendRequests();
    };
    SearchforfriendComponent.prototype.loadFriendRequests = function () {
        var _this = this;
        var status = { status: false };
        this.friend.getFriendRequests(status).subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                console.log(key);
                if (data[key].username !== undefined) {
                    console.log(data[key].username);
                    _this.auth.getProfileById({ 'username': data[key].username }).subscribe(function (data) {
                        console.log(data);
                        data.propic = 'http://localhost:3000/' + data.propic;
                        _this.friendRequests.push(data);
                        console.log(_this.friendRequests);
                    });
                }
            }
        });
    };
    SearchforfriendComponent.prototype.acceptFriendRequest = function (friend) {
        var accept = { friend: friend, status: true };
        this.friend.handleRequest('acceptFriend', accept).subscribe(function (data) { });
    };
    SearchforfriendComponent.prototype.deleteFriendRequest = function (friend) {
        var accept = { friend: friend, status: true };
        this.friend.handleRequest('deleteFriend', accept).subscribe(function (data) { });
    };
    SearchforfriendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchforfriend',
            template: __webpack_require__(/*! ./searchforfriend.component.html */ "./src/app/user/searchforfriend/searchforfriend.component.html"),
            styles: [__webpack_require__(/*! ./searchforfriend.component.css */ "./src/app/user/searchforfriend/searchforfriend.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"]])
    ], SearchforfriendComponent);
    return SearchforfriendComponent;
}());



/***/ }),

/***/ "./src/app/user/searchforpost/searchforpost.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/searchforpost/searchforpost.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.modal-body .form-horizontal .control-label {\r\n    text-align: left;\r\n}\r\n\r\n\r\n.star{\r\n    color:red;\r\n}\r\n\r\n\r\n.fa-thumbs-o-up{\r\n    font-size:23px;\r\n    cursor:pointer;\r\n    color:gray;\r\n}\r\n\r\n\r\n.fa-thumbs-o-up:hover{\r\n    color:#000;\r\n}"

/***/ }),

/***/ "./src/app/user/searchforpost/searchforpost.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/searchforpost/searchforpost.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 wow fadeInRight col-xs-12 col-sm-12\" data-wow-delay=\".25s\" id=\"content\" style=\"float:right;\">\r\n     <h2>Search for product</h2>\r\n    <form (ngSubmit)=\"onSearchPost(searchForm.value)\" #searchForm=\"ngForm\">\r\n        <div class=\"input-group\">\r\n            <input list=\"post\" class=\"form-control\" name=\"productname\" id=\"productname\" #productname=\"ngModel\" (ngModel)=\"user.productname\" required>\r\n            <datalist id=\"post\"><option *ngFor=\"let u of users\" [value]=\"u.productname\">{{u.productname}}</option></datalist>\r\n            <div class=\"input-group-btn\">\r\n                <button class=\"btn btn-default\" type=\"submit\">\r\n                    <i class=\"glyphicon glyphicon-search\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <br />\r\n     <div *ngIf=\"Product\" class=\"panel panel-default\">\r\n        <div class=\"panel-body pnl-body\">\r\n            <div class=\"col-md-4\" style=\"float:left;border-right:3px solid #f5f5f5;\">\r\n                <div class=\"user-pic col-md-12\">\r\n                    <img src=\"http://localhost:3000/{{Product.productimage}}\" class=\"img-thumbnail\" width=\"300\" height=\"350\">\r\n                </div>\r\n                <div class=\"left col-md-7 col-xs-6\" style=\"font-family:bold\">{{Product.productname}}</div>\r\n                <div class=\"left col-md-3 col-xs-6\" style=\"font-family:bold\">votes:{{Product.vote}}</div>\r\n            </div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Vote</div> <div class=\"left col-md-3 col-xs-6\" (click)=\"onVote()\"> <i class=\"fa fa-thumbs-o-up\"></i></div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Product Uses</div> <div class=\"left col-md-3 col-xs-6\">{{Product.productuses}}</div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Product Description</div> <div class=\"left col-md-3 col-xs-6\">{{Product.productdescription}}</div>\r\n            <div class=\"right col-md-3 col-xs-6\"><button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModalHorizontal\">Recommend To Friend</button></div>\r\n            <div class=\"left col-md-3 col-xs-6\">\r\n                <button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#reviewModal\">Review</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"myModalHorizontal\" tabindex=\"-1\" role=\"dialog\"\r\n     aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n \r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <!-- Modal Header -->\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\"\r\n                        data-dismiss=\"modal\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    <span class=\"sr-only\">Close</span>\r\n                </button>\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">\r\n                    Modal title\r\n                </h4>\r\n            </div>\r\n\r\n            <!-- Modal Body -->\r\n            <div class=\"modal-body\">\r\n\r\n                <form class=\"form-horizontal\" (ngSubmit)=\"onRecommend(RecommendForm.value)\" #RecommendForm=\"ngForm\" role=\"form\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label class=\"control-label \"> Product Name<i class=\"star\">*</i></label>\r\n                        <input class=\"form-control form-control-solid\" type=\"text\" placeholder=\"productname\" [value]=\"Product.productname\" name=\"productname\" #productname=\"ngModel\" (ngModel)=\"recommand.productname\" disabled>\r\n                    </div>\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label class=\"control-label \">Friend<i class=\"star\">*</i></label>\r\n                        <input class=\"form-control form-control-solid placeholder-no-fix\" type=\"text\" name=\"recommendTo\" #recommendTo=\"ngModel\" (ngModel)=\"recommand.recommendTo\" minlength=\"4\" required>\r\n                        <div *ngIf=\"recommendTo.invalid && (recommendTo.dirty || recommendTo.touched)\" class=\"text text-danger\">Email is required</div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label class=\"control-label \">Description<i class=\"star\">*</i></label>\r\n                        <textarea class=\"form-control\" name=\"description\" #description=\"ngModel\" (ngModel)=\"recommand.description\" required></textarea>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-10\">\r\n                            <button type=\"submit\" [disabled]=\"!RecommendForm.form.valid\" class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </div>\r\n                    <flash-messages></flash-messages>\r\n                </form>\r\n            </div>\r\n\r\n            <!-- Modal Footer -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\"\r\n                        data-dismiss=\"modal\">\r\n                    Close\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"reviewModal\" tabindex=\"-1\" role=\"dialog\"\r\n     aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <!-- Modal Header -->\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\"\r\n                        data-dismiss=\"modal\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    <span class=\"sr-only\">Close</span>\r\n                </button>\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">\r\n                    Modal title\r\n                </h4>\r\n            </div>\r\n\r\n            <!-- Modal Body -->\r\n            <div class=\"modal-body\">\r\n\r\n                <form class=\"form-horizontal\" (ngSubmit)=\"onReview(ReviewForm.value)\" #ReviewForm=\"ngForm\" role=\"form\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label class=\"control-label \"> Product Name<i class=\"star\">*</i></label>\r\n                        <input class=\"form-control form-control-solid placeholder-no-fix\" type=\"text\" placeholder=\"productname\" name=\"productname\" #productname=\"ngModel\" (ngModel)=\"user.productname\" minlength=\"4\" required>\r\n                        <div *ngIf=\"productname.invalid && (productname.dirty || productname.touched)\" class=\"text text-danger\">Email is required</div>\r\n\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group col-md-12\">\r\n                        <label class=\"control-label \">Description<i class=\"star\">*</i></label>\r\n                        <textarea class=\"form-control\" name=\"productdescription\" #productdescription=\"ngModel\" (ngModel)=\"user.productdescription\" required></textarea>\r\n                    </div>\r\n                   \r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-10\">\r\n                            <button type=\"submit\" [disabled]=\"!ReviewForm.form.valid\" class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n            <!-- Modal Footer -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\"\r\n                        data-dismiss=\"modal\">\r\n                    Close\r\n                </button>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/searchforpost/searchforpost.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/searchforpost/searchforpost.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchforpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchforpostComponent", function() { return SearchforpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../friends.service */ "./src/app/friends.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchforpostComponent = /** @class */ (function () {
    function SearchforpostComponent(auth, friend, flashMessages) {
        this.auth = auth;
        this.friend = friend;
        this.flashMessages = flashMessages;
    }
    SearchforpostComponent.prototype.ngOnInit = function () {
        this.loadAllProducts();
    };
    SearchforpostComponent.prototype.loadAllProducts = function () {
        var _this = this;
        this.friend.loadAllProducts().subscribe(function (data) {
            console.log(data);
            _this.users = data;
        });
    };
    SearchforpostComponent.prototype.onSearchPost = function (productname) {
        var _this = this;
        this.friend.onSearchProduct(productname).subscribe(function (data) {
            console.log(data);
            _this.Product = data;
        });
        var searchedContent = { "searchedContent": productname.productname };
        this.auth.saveToHistory(searchedContent).subscribe(function (data) { console.log(data); });
    };
    SearchforpostComponent.prototype.onRecommend = function (data) {
        var _this = this;
        console.log(data);
        data.productname = this.Product.productname;
        this.friend.onRecommend(data).subscribe(function (data) {
            console.log(data);
            _this.onRecommendSuccess();
        });
    };
    SearchforpostComponent.prototype.onRecommendSuccess = function () {
        this.flashMessages.show('Recommand successful', { cssClass: 'alert-success', timeout: 3000 });
    };
    SearchforpostComponent.prototype.onVote = function () {
        var productname = { productname: this.Product.productname };
        console.log(productname);
        this.friend.onVote(productname).subscribe(function (data) { console.log(data); });
        this.Product.vote = Number(this.Product.vote) + 1;
    };
    SearchforpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchforpost',
            template: __webpack_require__(/*! ./searchforpost.component.html */ "./src/app/user/searchforpost/searchforpost.component.html"),
            styles: [__webpack_require__(/*! ./searchforpost.component.css */ "./src/app/user/searchforpost/searchforpost.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], SearchforpostComponent);
    return SearchforpostComponent;
}());



/***/ }),

/***/ "./src/app/user/tophitkrate/tophitkrate.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/tophitkrate/tophitkrate.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/tophitkrate/tophitkrate.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/tophitkrate/tophitkrate.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tophitkrate works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/tophitkrate/tophitkrate.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/tophitkrate/tophitkrate.component.ts ***!
  \***********************************************************/
/*! exports provided: TophitkrateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TophitkrateComponent", function() { return TophitkrateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TophitkrateComponent = /** @class */ (function () {
    function TophitkrateComponent() {
    }
    TophitkrateComponent.prototype.ngOnInit = function () {
    };
    TophitkrateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tophitkrate',
            template: __webpack_require__(/*! ./tophitkrate.component.html */ "./src/app/user/tophitkrate/tophitkrate.component.html"),
            styles: [__webpack_require__(/*! ./tophitkrate.component.css */ "./src/app/user/tophitkrate/tophitkrate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TophitkrateComponent);
    return TophitkrateComponent;
}());



/***/ }),

/***/ "./src/app/user/user-interest/user-interest.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/user-interest/user-interest.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-interest/user-interest.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-interest/user-interest.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-interest works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/user-interest/user-interest.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/user-interest/user-interest.component.ts ***!
  \***************************************************************/
/*! exports provided: UserInterestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestComponent", function() { return UserInterestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInterestComponent = /** @class */ (function () {
    function UserInterestComponent() {
    }
    UserInterestComponent.prototype.ngOnInit = function () {
    };
    UserInterestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-interest',
            template: __webpack_require__(/*! ./user-interest.component.html */ "./src/app/user/user-interest/user-interest.component.html"),
            styles: [__webpack_require__(/*! ./user-interest.component.css */ "./src/app/user/user-interest/user-interest.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserInterestComponent);
    return UserInterestComponent;
}());



/***/ }),

/***/ "./src/app/user/user-side-bar/user-side-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/user-side-bar/user-side-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-side-bar/user-side-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-side-bar/user-side-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-side-bar works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/user-side-bar/user-side-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/user-side-bar/user-side-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: UserSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSideBarComponent", function() { return UserSideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserSideBarComponent = /** @class */ (function () {
    function UserSideBarComponent() {
    }
    UserSideBarComponent.prototype.ngOnInit = function () {
    };
    UserSideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-side-bar',
            template: __webpack_require__(/*! ./user-side-bar.component.html */ "./src/app/user/user-side-bar/user-side-bar.component.html"),
            styles: [__webpack_require__(/*! ./user-side-bar.component.css */ "./src/app/user/user-side-bar/user-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSideBarComponent);
    return UserSideBarComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-right div {\r\n    cursor: pointer;\r\n    padding-right: 10px;\r\n    padding-top: 6px;\r\n    float: right;\r\n}\r\n\r\n    .navbar-right div img {\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    border-top: 1px solid #f1f1f1;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 52px;\r\n    left: 0;\r\n    background-color: #4184ab;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n}\r\n\r\n    .sidenav a {\r\n        padding: 8px 8px 8px 32px;\r\n        text-decoration: none;\r\n        font-size: 25px;\r\n        color: #f1f1f1;\r\n        display: block;\r\n        transition: 0.3s;\r\n        border-bottom: 1px solid;\r\n        margin-left: 13px;\r\n        margin-right: 13px;\r\n    }\r\n\r\n    .search {\r\n    margin-top: 6px;\r\n}\r\n\r\n    @media screen and (max-height: 450px) {\r\n    .sidenav {\r\n        padding-top: 15px;\r\n    }\r\n\r\n        .sidenav a {\r\n            font-size: 18px;\r\n        }\r\n}\r\n\r\n    .username {\r\n    padding: 10px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n    .votes {\r\n    padding-right: 10px\r\n}\r\n\r\n    .panelbtmline {\r\n    margin: 10px;\r\n}\r\n\r\n    .panelbtmline .btn {\r\n        margin-right: 10px;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>Loading...</app-header>\r\n<div class=\"container\">\r\n    <div id=\"mySidenav\" class=\"sidenav\" style=\"float:left\">\r\n        <a routerLink=\"userprofile\" >View your profile<i class=\"fa fa-chevron-right\" style=\"float:right;margin-top:4px\"></i></a>\r\n        <a routerLink=\"searchforfriend\">friend request<i class=\"fa fa-chevron-right\" style=\"float:right;margin-top:4px\"></i></a>\r\n        <a routerLink=\"searchforpost\">Search For Post<i class=\"fa fa-chevron-right\" style=\"float:right;margin-top:4px\"></i></a>\r\n        <a routerLink=\"viewallmyfriends\">view all my friends<i class=\"fa fa-chevron-right\" style=\"float:right;margin-top:4px\"></i></a>\r\n        <a routerLink=\"mysearchhistory\">my search History<i class=\"fa fa-chevron-right\" style=\"float:right;margin-top:4px\"></i></a>\r\n        <a routerLink=\"recommend\">view recommendations<i class=\"fa fa-chevron-right\" style=\"float:right;margin-top:4px\"></i></a>\r\n        <a (click)=\"logout()\">logout<i class=\"fa fa-chevron-right\" style=\"float:right;margin-top:4px\"></i></a>\r\n    </div>\r\n    <div><router-outlet></router-outlet></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.show = true;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['/login']);
    };
    UserComponent.prototype.closeNav = function () {
        this.show = false;
    };
    UserComponent.prototype.openNav = function () {
        this.show = true;
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/usermainpage/usermainpage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/usermainpage/usermainpage.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/usermainpage/usermainpage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/usermainpage/usermainpage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 col-sm-12\" style=\"float:right;\">\r\n  <br>\r\n  <h2>Welcome <span class=\"user\">Swadesh</span></h2>\r\n  <img src=\"assets/images/social-media1.jpg\" width=\"90%\" height=\"259px\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/usermainpage/usermainpage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/usermainpage/usermainpage.component.ts ***!
  \*************************************************************/
/*! exports provided: UsermainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermainpageComponent", function() { return UsermainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsermainpageComponent = /** @class */ (function () {
    function UsermainpageComponent(auth) {
        this.auth = auth;
    }
    UsermainpageComponent.prototype.ngOnInit = function () {
    };
    UsermainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usermainpage',
            template: __webpack_require__(/*! ./usermainpage.component.html */ "./src/app/user/usermainpage/usermainpage.component.html"),
            styles: [__webpack_require__(/*! ./usermainpage.component.css */ "./src/app/user/usermainpage/usermainpage.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"]])
    ], UsermainpageComponent);
    return UsermainpageComponent;
}());



/***/ }),

/***/ "./src/app/user/userprofile/userprofile.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/userprofile/userprofile.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.upload-btn {\r\n    margin-top: 13px;\r\n    margin-right: 10px;\r\n    background-color: #428bca;\r\n    color: #fff;\r\n    padding: 7px 9px 9px 9px;\r\n}\r\n    .upload-btn:hover {\r\n        opacity:0.7;\r\n    }\r\n\r\n"

/***/ }),

/***/ "./src/app/user/userprofile/userprofile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/userprofile/userprofile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 wow fadeInRight col-xs-12 col-sm-12\" data-wow-delay=\".25s\" data-wow-delay=\".25s\" id=\"content\" style=\"float:right;\">\r\n    <h2>User Profile</h2>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-body pnl-body\">\r\n            <div class=\"col-md-4\" style=\"float:left;border-right:3px solid #f5f5f5;\">\r\n                <form (ngSubmit)=\"onImageChange(ImageChange.value)\" #ImageChange=\"ngForm\">\r\n                    <div class=\"user-pic col-md-12\">\r\n                        <img  [src]=\"user.propic\"  class=\"img-thumbnail\" width=\"300\" height=\"350\">\r\n                    </div>\r\n                </form>\r\n              </div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Username</div> <div class=\"left col-md-3 col-xs-6\">{{user.username}}</div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Email</div> <div class=\"left col-md-3 col-xs-6\">{{user.email}}</div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Mobile</div> <div class=\"left col-md-3 col-xs-6\">{{user.contact}}</div>\r\n             </div>\r\n    </div> \r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/user/userprofile/userprofile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/userprofile/userprofile.component.ts ***!
  \***********************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(auth) {
        this.auth = auth;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    UserprofileComponent.prototype.loadProfile = function () {
        var data = this.auth.getProfile();
        this.user = data;
        this.user.propic = 'http://localhost:3000/' + this.user.propic;
        console.log(this.user);
    };
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/user/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/user/userprofile/userprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



/***/ }),

/***/ "./src/app/user/view-all-my-friends/view-all-my-friends.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/user/view-all-my-friends/view-all-my-friends.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/view-all-my-friends/view-all-my-friends.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/user/view-all-my-friends/view-all-my-friends.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 col-sm-12\" id=\"content\" style=\"float:right;\">\r\n\r\n    <h2 class=\"sideheading\">View All My Friends</h2>\r\n    <div *ngFor=\"let request of friends\" class=\"col-md-3 col-xs-4\">\r\n        <div class=\"userpic\">\r\n            <a routerLink=\"/user/viewprofile/{{request.username}}\"><img [src]=\"request.propic\" class=\"img-circle\" width=\"70\" height=\"70\"></a>\r\n        </div>\r\n        <div class=\"left col-md-12\">{{request.username}}</div>\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/view-all-my-friends/view-all-my-friends.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/user/view-all-my-friends/view-all-my-friends.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewAllMyFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllMyFriendsComponent", function() { return ViewAllMyFriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../friends.service */ "./src/app/friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewAllMyFriendsComponent = /** @class */ (function () {
    function ViewAllMyFriendsComponent(auth, friend) {
        this.auth = auth;
        this.friend = friend;
        this.friends = [];
    }
    ViewAllMyFriendsComponent.prototype.ngOnInit = function () {
        this.loadFriendRequests();
    };
    ViewAllMyFriendsComponent.prototype.loadFriendRequests = function () {
        var _this = this;
        var status = { status: true };
        this.friend.getFriendRequests(status).subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                console.log(key);
                if (data[key].username !== undefined) {
                    console.log(data[key].username);
                    _this.auth.getProfileById({ 'username': data[key].username }).subscribe(function (data) {
                        console.log(data);
                        data.propic = 'http://localhost:3000/' + data.propic;
                        _this.friends.push(data);
                        console.log(_this.friends);
                    });
                }
            }
        });
    };
    ViewAllMyFriendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-all-my-friends',
            template: __webpack_require__(/*! ./view-all-my-friends.component.html */ "./src/app/user/view-all-my-friends/view-all-my-friends.component.html"),
            styles: [__webpack_require__(/*! ./view-all-my-friends.component.css */ "./src/app/user/view-all-my-friends/view-all-my-friends.component.css")]
        }),
        __metadata("design:paramtypes", [_authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"], _friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"]])
    ], ViewAllMyFriendsComponent);
    return ViewAllMyFriendsComponent;
}());



/***/ }),

/***/ "./src/app/user/viewprofile/viewprofile.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/viewprofile/viewprofile.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/viewprofile/viewprofile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/viewprofile/viewprofile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 wow fadeInRight col-xs-12 col-sm-12\" data-wow-delay=\".25s\" data-wow-delay=\".25s\" id=\"content\" style=\"float:right;\">\r\n    <h2>User Profile</h2>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-body pnl-body\">\r\n            <div class=\"col-md-4\" style=\"float:left;border-right:3px solid #f5f5f5;\">\r\n                <form (ngSubmit)=\"onImageChange(ImageChange.value)\" #ImageChange=\"ngForm\">\r\n                    <div class=\"user-pic col-md-12\">\r\n                        <img [src]=\"user.propic\" class=\"img-thumbnail\" width=\"300\" height=\"350\">\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Username</div> <div class=\"left col-md-3 col-xs-6\">{{user.username}}</div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Email</div> <div class=\"left col-md-3 col-xs-6\">{{user.email}}</div>\r\n            <div class=\"right col-md-3 col-xs-6\"> Mobile</div> <div class=\"left col-md-3 col-xs-6\">{{user.contact}}</div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/user/viewprofile/viewprofile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/viewprofile/viewprofile.component.ts ***!
  \***********************************************************/
/*! exports provided: ViewprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewprofileComponent", function() { return ViewprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authenicate.service */ "./src/app/authenicate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewprofileComponent = /** @class */ (function () {
    function ViewprofileComponent(route, auth) {
        this.route = route;
        this.auth = auth;
        this.username = '';
    }
    ViewprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.route.snapshot.paramMap.get('username');
        var data = { username: this.username };
        this.auth.getProfileById(data).subscribe(function (userdata) {
            console.log(userdata);
            _this.user = userdata;
            _this.user.propic = 'http://localhost:3000/' + _this.user.propic;
        });
    };
    ViewprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewprofile',
            template: __webpack_require__(/*! ./viewprofile.component.html */ "./src/app/user/viewprofile/viewprofile.component.html"),
            styles: [__webpack_require__(/*! ./viewprofile.component.css */ "./src/app/user/viewprofile/viewprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _authenicate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenicateService"]])
    ], ViewprofileComponent);
    return ViewprofileComponent;
}());



/***/ }),

/***/ "./src/app/view-product/view-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-product/view-product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-product/view-product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-product/view-product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  view-product works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/view-product/view-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-product/view-product.component.ts ***!
  \********************************************************/
/*! exports provided: ViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function() { return ViewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewProductComponent = /** @class */ (function () {
    function ViewProductComponent() {
    }
    ViewProductComponent.prototype.ngOnInit = function () {
    };
    ViewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-product',
            template: __webpack_require__(/*! ./view-product.component.html */ "./src/app/view-product/view-product.component.html"),
            styles: [__webpack_require__(/*! ./view-product.component.css */ "./src/app/view-product/view-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewProductComponent);
    return ViewProductComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mohan\source\repos\SocialVoting\sampleApp\main\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map