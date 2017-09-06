webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(cache, router) {
        this.cache = cache;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.cache.initialize();
        this.router.navigate(['/']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(177),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentListComponent = (function () {
    function AppointmentListComponent(service) {
        this.service = service;
    }
    AppointmentListComponent.prototype.ngOnInit = function () {
        this.appointments = this.service.getAll('appointment');
        // Collapse the menu if it is visible as drop down
        if ($("#nav-toggle").hasClass("in")) {
            $(".collapse").collapse('toggle');
        }
    };
    return AppointmentListComponent;
}());
AppointmentListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-appointment-list',
        template: __webpack_require__(178)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]) === "function" && _a || Object])
], AppointmentListComponent);

var _a;
//# sourceMappingURL=appointment-list.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_appointment_model__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entityComponentBase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cache_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datetime_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_contact_model__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppointmentComponent = (function (_super) {
    __extends(AppointmentComponent, _super);
    function AppointmentComponent(router, route, cache, datetime) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.cache = cache;
        _this.datetime = datetime;
        _this.companies = [];
        _this.persons = [];
        _this.positions = [];
        _this.personNameToId = {};
        _this.personIdToName = {};
        _this.companyNameToId = {};
        _this.companyIdToName = {};
        _this.positionIdToTitle = {};
        _this.positionTitleToId = {};
        return _this;
    }
    AppointmentComponent.prototype.ngOnInit = function () {
        this.companies = this.cache.getAll('company');
        this.persons = this.cache.getAll('person');
        this.positions = this.cache.getAll('position');
        // Map company, person and position names/title to their entity ids and vice-versa
        var maps = this.createEntityMaps(this.companies, 'name');
        this.companyNameToId = maps.attributeToId;
        this.companyIdToName = maps.idToAttribute;
        maps = this.createEntityMaps(this.persons, 'name');
        this.personNameToId = maps.attributeToId;
        this.personIdToName = maps.idToAttribute;
        maps = this.createEntityMaps(this.positions, 'title');
        this.positionTitleToId = maps.attributeToId;
        this.positionIdToTitle = maps.idToAttribute;
        this.id = this.route.snapshot.params['id'];
        if (this.id === 'new') {
            $('#convert').hide();
            // Creating a new one
            this.appointment = new __WEBPACK_IMPORTED_MODULE_2__model_appointment_model__["a" /* Appointment */](null, null, null, null, null, null);
        }
        else {
            // Viewing or editing
            $('#convert').show();
            this.appointment = this.cache.getByIndex('appointment', this.id);
            if (this.appointment.time) {
                if (this.appointment.time.length === 4) {
                    this.appointment.time = '0' + this.appointment.time;
                }
            }
            if (this.appointment.date) {
                this.appointment.date = this.datetime.formatDateForInput(this.appointment.date);
            }
            this.selectedCompany = this.companyIdToName[this.appointment.companyId];
            this.selectedPerson = this.personIdToName[this.appointment.personId];
            this.selectedPosition = this.positionIdToTitle[this.appointment.positionId];
        }
    };
    AppointmentComponent.prototype.cancel = function () {
        this.router.navigate(['/appointments']);
    };
    AppointmentComponent.prototype.save = function () {
        this.cache.save('appointment', this.appointment);
        this.router.navigate(['/appointments']);
    };
    /** Enables display of the Record button if the appointment date/time has passed */
    AppointmentComponent.prototype.displayIfConvertible = function () {
        if (this.id === 'new' || !this.appointment.date) {
            return 'hidden';
        }
        // Combine the date and time fields
        var day = new Date(this.datetime.formatListDate(this.appointment.date));
        var dateTime = new Date(day.getFullYear(), day.getMonth(), day.getDate());
        if (this.appointment.time) {
            var time = this.appointment.time;
            dateTime.setHours(+time.substr(0, 2));
            dateTime.setMinutes(+time.substr(3, 2));
        }
        // Convertible if the date/time has been reached
        var canConvert = dateTime.getTime() < (new Date()).getTime();
        return canConvert ? 'btn btn-primary' : 'hidden';
    };
    /** Converts the appointment to a "meeting" contact */
    AppointmentComponent.prototype.convert = function () {
        var contact = new __WEBPACK_IMPORTED_MODULE_6__model_contact_model__["a" /* Contact */](null, this.appointment.positionId, this.appointment.personId, this.appointment.date, 'meeting', null, null);
        this.cache.save('contact', contact);
        this.cache.deleteById('appointment', this.appointment.id);
    };
    /** Called upon selection of a company from the company selector */
    AppointmentComponent.prototype.selectCompany = function () {
        this.appointment.companyId = this.companyNameToId[this.selectedCompany];
    };
    /** Called upon selection of a person from the person selector */
    AppointmentComponent.prototype.selectPerson = function () {
        this.appointment.personId = this.personNameToId[this.selectedPerson];
    };
    /** Called upon selection of a position from the position selector */
    AppointmentComponent.prototype.selectPosition = function () {
        this.appointment.positionId = this.positionTitleToId[this.selectedPosition];
    };
    return AppointmentComponent;
}(__WEBPACK_IMPORTED_MODULE_3__entityComponentBase__["a" /* EntityComponentBase */]));
AppointmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-appointment',
        template: __webpack_require__(179)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cache_service__["a" /* CacheService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__datetime_service__["a" /* DateTimeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__datetime_service__["a" /* DateTimeService */]) === "function" && _d || Object])
], AppointmentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=appointment.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyListComponent = (function () {
    function CompanyListComponent(service) {
        this.service = service;
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        this.companies = this.service.getAll('company');
        // Collapse the menu if it is visible as drop down
        if ($("#nav-toggle").hasClass("in")) {
            $(".collapse").collapse('toggle');
        }
    };
    return CompanyListComponent;
}());
CompanyListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-company-list',
        template: __webpack_require__(180)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]) === "function" && _a || Object])
], CompanyListComponent);

var _a;
//# sourceMappingURL=company-list.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_company_model__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cache_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyComponent = (function () {
    function CompanyComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id == 'new') {
            // Creating a new one
            this.company = new __WEBPACK_IMPORTED_MODULE_2__model_company_model__["a" /* Company */](null, '', '', '', '', '');
        }
        else {
            // Viewing or editing
            this.company = this.service.getByIndex('company', id);
        }
    };
    CompanyComponent.prototype.cancel = function () {
        this.router.navigate(['/companies']);
    };
    CompanyComponent.prototype.save = function () {
        this.service.save('company', this.company);
        this.router.navigate(['/companies']);
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-company',
        template: __webpack_require__(181)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cache_service__["a" /* CacheService */]) === "function" && _c || Object])
], CompanyComponent);

var _a, _b, _c;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateTimeService = (function () {
    function DateTimeService() {
    }
    /**
     * Formats a date for display in an entity list in the form "MMM dd, yyyy"
     * @param s date string in format "yyyy-mm-dd" or MMM yy, yyyy hh:mm:ss aa
     */
    DateTimeService.prototype.formatListDate = function (s) {
        if (s) {
            var d = void 0;
            if (s.indexOf('-') > 0) {
                var p = s.split('-');
                d = new Date();
                d.setFullYear(+p[0], +p[1] - 1, +p[2]);
            }
            else {
                d = new Date(s);
            }
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var f = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
            return f;
        }
        else {
            return '';
        }
    };
    /** Formats a date for use in an HTML date input element
     * @param s date string in the form "yyyy-mm-dd" or MMM dd, yyyy hh:mm:ss aa
     * @return date string in form yyyy-mm-dd
    */
    DateTimeService.prototype.formatDateForInput = function (s) {
        var date;
        if (s.indexOf('-') > 0) {
            var p = s.split('-');
            date = new Date();
            date.setFullYear(+p[0], +p[1] - 1, +p[2]);
        }
        else {
            date = new Date(s);
        }
        var f = String(date.getFullYear()).concat('-');
        var m = date.getMonth() + 1;
        if (m < 10) {
            f = f.concat('0');
        }
        f = f.concat(String(m)).concat('-');
        var d = date.getDate();
        if (d < 10) {
            f = f.concat('0');
        }
        f = f.concat(String(d));
        return f;
    };
    /**
    * Formats a date for display in an entity list in the form "hh:mm aa"
    * @parsm s a time string in the form string "hh:mm"
    */
    DateTimeService.prototype.formatListTime = function (s) {
        if (!s) {
            return '';
        }
        var hm = s.split(':');
        var h = +hm[0];
        var m = hm[1];
        var ampm;
        if (h == 12) {
            ampm = 'PM';
        }
        else if (h > 12) {
            ampm = 'PM';
            h -= 12;
        }
        else {
            ampm = 'AM';
            if (h == 0) {
                h = 12;
            }
        }
        if (m.length == 1) {
            m = '0' + m;
        }
        s = String(h) + ':' + m + ' ' + ampm;
        return s;
    };
    return DateTimeService;
}());
DateTimeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    /** Provides utility methods for date and time formatting */
    ,
    __metadata("design:paramtypes", [])
], DateTimeService);

//# sourceMappingURL=datetime.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListComponent = (function () {
    function ContactListComponent(cache) {
        this.cache = cache;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.contacts = this.cache.getAll('contact');
        // Collapse the menu if it is visible as drop down
        if ($('#nav-toggle').hasClass('in')) {
            $('.collapse').collapse('toggle');
        }
    };
    ContactListComponent.prototype.ngOnDestroy = function () {
        if (this.subscriber) {
            this.subscriber.unsubscribe();
        }
    };
    ContactListComponent.prototype.showIfEmail = function (index) {
        var contact = this.contacts[index];
        return contact.type === 'email' ? '' : 'hidden';
    };
    ContactListComponent.prototype.showIfPhone = function (index) {
        var contact = this.contacts[index];
        return contact.type === 'phone' || contact.type === 'meeting' ? '' : 'hidden';
    };
    /** Called when a View Email link is clicked */
    ContactListComponent.prototype.viewEmail = function (index) {
        var _this = this;
        var contact = this.contacts[index];
        var email = this.cache.getById('email', contact.emailId);
        this.emailSubject = email.subject;
        this.subscriber = this.cache.getEmailContent(email.contentId).subscribe(function (text) {
            _this.emailText = text;
            $('#message-text').show();
        });
    };
    ContactListComponent.prototype.closeEmail = function () {
        $('#message-text').hide();
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contact-list',
        template: __webpack_require__(182)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]) === "function" && _a || Object])
], ContactListComponent);

var _a;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_contact_model__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cache_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entityComponentBase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datetime_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactComponent = (function (_super) {
    __extends(ContactComponent, _super);
    function ContactComponent(router, route, cache, datetime) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.cache = cache;
        _this.datetime = datetime;
        _this.emailSubject = '';
        _this.persons = [];
        _this.positions = [];
        _this.emails = [];
        _this.personIdToName = {};
        _this.personNameToId = {};
        _this.positionIdToTitle = {};
        _this.positionTitleToId = {};
        return _this;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.persons = this.cache.getAll('person');
        this.positions = this.cache.getAll('position');
        // Map person and position names to their entity ids and vice-versa
        var maps = this.createEntityMaps(this.positions, 'title');
        this.positionIdToTitle = maps.idToAttribute;
        this.positionTitleToId = maps.attributeToId;
        maps = this.createEntityMaps(this.persons, 'name');
        this.personIdToName = maps.idToAttribute;
        this.personNameToId = maps.attributeToId;
        // Retrieve email list, filter out assigned ones
        this.emails = this.cache.getAll('email').filter(function (email) { return !email.assigned; });
        var id = this.route.snapshot.params['id'];
        if (id === 'new') {
            // Creating a new one
            this.contact = new __WEBPACK_IMPORTED_MODULE_2__model_contact_model__["a" /* Contact */](null, null, null, null, undefined, '', null);
            this.isEmail = false;
            this.isPhone = false;
            this.isMeeting = false;
        }
        else {
            // Viewing or editing
            this.contact = this.cache.getByIndex('contact', id);
            if (this.contact.date) {
                this.contact.date = this.datetime.formatDateForInput(this.contact.date);
            }
            if (this.contact.positionId) {
                this.selectedPosition = this.positionIdToTitle[this.contact.positionId];
            }
            if (this.contact.personId) {
                this.selectedPerson = this.personIdToName[this.contact.personId];
            }
            if (this.contact.type === 'email') {
                this.isEmail = true;
                $('.show-if-email').show();
                $('.select-email-or-phone').removeAttr('hidden');
            }
            else if (this.contact.type === 'phone') {
                this.isPhone = true;
                $('.show-if-phone').show();
                $('.select-email-or-phone').removeAttr('hidden');
            }
            else {
                this.isMeeting = true;
                $('.show-if-phone').show();
                $('#save-button').removeAttr('disabled');
            }
        }
    };
    ContactComponent.prototype.cancel = function () {
        this.router.navigate(['/contacts']);
    };
    ContactComponent.prototype.save = function () {
        if (this.isEmail) {
            this.contact.type = 'email';
            var email = this.emails[this.selectedEmailIndex];
            email.assigned = true;
            this.cache.save('email', email);
        }
        else if (this.isPhone) {
            this.contact.type = 'phone';
        }
        else {
            this.contact.type = 'meeting';
        }
        this.cache.save('contact', this.contact);
        this.router.navigate(['/contacts']);
    };
    /** Called upon selection of a person from the person selector */
    ContactComponent.prototype.selectPerson = function () {
        this.contact.personId = this.personNameToId[this.selectedPerson];
    };
    /** Called upon selection of a position from the position selector */
    ContactComponent.prototype.selectPosition = function () {
        this.contact.positionId = this.positionTitleToId[this.selectedPosition];
    };
    /** Called when Email radio button clicked */
    ContactComponent.prototype.setEmail = function () {
        this.isEmail = true;
        this.isPhone = false;
        $('.show-if-phone').hide();
        $('.show-if-email').show();
    };
    /** Called when Phone radio button clicked */
    ContactComponent.prototype.setPhone = function () {
        this.isEmail = false;
        this.isPhone = true;
        $('.show-if-email').hide();
        $('.show-if-phone').show();
        $('#message-list').hide();
        $('#message-text').hide();
        $('#save-button').removeAttr('disabled');
    };
    /** Called when email selected from the email list */
    ContactComponent.prototype.selectEmail = function (index) {
        this.selectedEmailIndex = index;
        var email = this.emails[index];
        this.contact.emailId = email.id;
        this.contact.date = email.date;
        $('#save-button').removeAttr('disabled');
    };
    /** Called when View button clicked, opens the email content popup */
    ContactComponent.prototype.viewEmail = function (index) {
        var _this = this;
        var email = this.emails[index];
        this.cache.getEmailContent(email.contentId).subscribe(function (response) { return _this.emailText = response.json().text; });
        this.emailSubject = email.subject;
        $('#message-text').show();
    };
    /** Closes the email content popup */
    ContactComponent.prototype.hideContent = function () {
        $('#message-text').hide();
    };
    return ContactComponent;
}(__WEBPACK_IMPORTED_MODULE_4__entityComponentBase__["a" /* EntityComponentBase */]));
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(183)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cache_service__["a" /* CacheService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__datetime_service__["a" /* DateTimeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__datetime_service__["a" /* DateTimeService */]) === "function" && _d || Object])
], ContactComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(184)
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_model__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datetime_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Email; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Email = Email_1 = (function (_super) {
    __extends(Email, _super);
    function Email(id, sender, receiver, date, subject, contentId, assigned) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.sender = sender;
        _this.receiver = receiver;
        _this.date = date;
        _this.subject = subject;
        _this.contentId = contentId;
        _this.assigned = assigned;
        _this.cache = __WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]);
        _this.datetime = __WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_4__datetime_service__["a" /* DateTimeService */]);
        return _this;
    }
    Email.fromJson = function (json) {
        var p = new Email_1(json.id, json.sender, json.receiver, json.date, json.subject, json.contentId, json.assigned);
        console.log(p);
        return p;
    };
    Email.prototype.formatDate = function () {
        return this.datetime.formatListDate(this.date);
    };
    return Email;
}(__WEBPACK_IMPORTED_MODULE_0__entity_model__["a" /* Entity */]));
Email = Email_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [Number, String, String, String, String, Number, Boolean])
], Email);

var Email_1;
//# sourceMappingURL=email.model.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonListComponent = (function () {
    function PersonListComponent(service) {
        this.service = service;
    }
    PersonListComponent.prototype.ngOnInit = function () {
        this.persons = this.service.getAll('person');
        // Collapse the menu if it is visible as drop down
        if ($("#nav-toggle").hasClass("in")) {
            $(".collapse").collapse('toggle');
        }
    };
    return PersonListComponent;
}());
PersonListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-person-list',
        template: __webpack_require__(185)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]) === "function" && _a || Object])
], PersonListComponent);

var _a;
//# sourceMappingURL=person-list.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_person_model__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entityComponentBase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cache_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonComponent = (function (_super) {
    __extends(PersonComponent, _super);
    function PersonComponent(router, route, service) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.service = service;
        _this.companies = [];
        _this.companyIdToName = {};
        _this.companyNameToId = {};
        return _this;
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.companies = this.service.getAll('company');
        // Map company names to company ids and vide-versa
        var maps = this.createEntityMaps(this.companies, 'name');
        this.companyIdToName = maps.idToAttribute;
        this.companyNameToId = maps.attributeToId;
        var id = this.route.snapshot.params['id'];
        if (id == 'new') {
            // Creating a new one
            this.person = new __WEBPACK_IMPORTED_MODULE_2__model_person_model__["a" /* Person */](null, '', '', '', null);
        }
        else {
            // Viewing or editing
            this.person = this.service.getByIndex('person', id);
            this.selectedCompany = this.companyIdToName[this.person.companyId];
        }
    };
    /** Cancels the dialog */
    PersonComponent.prototype.cancel = function () {
        this.router.navigate(['/persons']);
    };
    /** Saves or updates the person */
    PersonComponent.prototype.save = function () {
        this.service.save('person', this.person);
        this.router.navigate(['/persons']);
    };
    /** Called upon selection of a company from the company selector */
    PersonComponent.prototype.select = function (event) {
        this.person.companyId = this.companyNameToId[this.selectedCompany];
    };
    return PersonComponent;
}(__WEBPACK_IMPORTED_MODULE_3__entityComponentBase__["a" /* EntityComponentBase */]));
PersonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-person',
        template: __webpack_require__(186)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cache_service__["a" /* CacheService */]) === "function" && _c || Object])
], PersonComponent);

var _a, _b, _c;
//# sourceMappingURL=person.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositionListComponent = (function () {
    function PositionListComponent(cache) {
        this.cache = cache;
    }
    PositionListComponent.prototype.ngOnInit = function () {
        this.positions = this.cache.getAll('position');
        // Add a 'deletable' attribute to any position if not referenced by a contact or appointment
        for (var _i = 0, _a = this.positions; _i < _a.length; _i++) {
            var position = _a[_i];
            this.checkIfDeletable(position);
        }
        // Collapse the menu if it is visible as drop down
        if ($("#nav-toggle").hasClass("in")) {
            $(".collapse").collapse('toggle');
        }
    };
    PositionListComponent.prototype.isNotDeletable = function (i) {
        return this.positions[i].deletable ? 'hidden' : 'delete-cell';
    };
    PositionListComponent.prototype.isDeletable = function (i, small) {
        if (small) {
            return this.positions[i].deletable ? 'material-icons' : 'hidden';
        }
        else {
            return this.positions[i].deletable ? 'delete-cell' : 'hidden';
        }
    };
    PositionListComponent.prototype.checkIfDeletable = function (position) {
        var appointments = this.cache.getAll('appointment');
        for (var _i = 0, appointments_1 = appointments; _i < appointments_1.length; _i++) {
            var appointment = appointments_1[_i];
            if (appointment.positionId === position.id) {
                return;
            }
        }
        var contacts = this.cache.getAll('contact');
        for (var _a = 0, contacts_1 = contacts; _a < contacts_1.length; _a++) {
            var contact = contacts_1[_a];
            if (contact.positionId === position.id) {
                return;
            }
        }
        position.deletable = true;
    };
    return PositionListComponent;
}());
PositionListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-positions',
        template: __webpack_require__(187)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]) === "function" && _a || Object])
], PositionListComponent);

var _a;
//# sourceMappingURL=position-list.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_position_model__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entityComponentBase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cache_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datetime_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PositionComponent = (function (_super) {
    __extends(PositionComponent, _super);
    function PositionComponent(router, route, service, datetime) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.service = service;
        _this.datetime = datetime;
        _this.companies = [];
        _this.persons = [];
        _this.personNameToId = {};
        _this.personIdToName = {};
        _this.companyNameToId = {};
        _this.companyIdToName = {};
        return _this;
    }
    PositionComponent.prototype.ngOnInit = function () {
        this.companies = this.service.getAll('company');
        this.persons = this.service.getAll('person');
        // Map company and person names to their entity ids and vice-versa
        var maps = this.createEntityMaps(this.companies, 'name');
        this.companyNameToId = maps.attributeToId;
        this.companyIdToName = maps.idToAttribute;
        maps = this.createEntityMaps(this.persons, 'name');
        this.personNameToId = maps.attributeToId;
        this.personIdToName = maps.idToAttribute;
        var id = this.route.snapshot.params['id'];
        if (id === 'new') {
            // Creating a new one
            this.position = new __WEBPACK_IMPORTED_MODULE_2__model_position_model__["a" /* Position */](null, '', '', null, null, null, null);
        }
        else {
            // Viewing or editing
            this.position = this.service.getByIndex('position', id);
            if (this.position.datePosted) {
                this.position.datePosted = this.datetime.formatDateForInput(this.position.datePosted);
            }
            if (this.position.dateApplied) {
                this.position.dateApplied = this.datetime.formatDateForInput(this.position.dateApplied);
            }
            this.selectedCompany = this.companyIdToName[this.position.companyId];
            this.selectedPerson = this.personIdToName[this.position.personId];
        }
    };
    PositionComponent.prototype.cancel = function () {
        this.router.navigate(['/positions']);
    };
    PositionComponent.prototype.save = function () {
        console.log(typeof this.position.datePosted, typeof this.position.dateApplied);
        this.service.save('position', this.position);
        this.router.navigate(['/positions']);
    };
    /** Called upon selection of a person from the person selector */
    PositionComponent.prototype.selectPerson = function () {
        this.position.personId = this.personNameToId[this.selectedPerson];
    };
    /** Called upon selection of a company from the position selector */
    PositionComponent.prototype.selectCompany = function () {
        this.position.companyId = this.companyNameToId[this.selectedCompany];
    };
    return PositionComponent;
}(__WEBPACK_IMPORTED_MODULE_3__entityComponentBase__["a" /* EntityComponentBase */]));
PositionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-position',
        template: __webpack_require__(188)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cache_service__["a" /* CacheService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__datetime_service__["a" /* DateTimeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__datetime_service__["a" /* DateTimeService */]) === "function" && _d || Object])
], PositionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=position.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Contains the menu -->\n  <app-home></app-home>\n  <!-- Will hold one of the five main pages -->\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/appointments/new\"><i class=\"material-icons\" style=\"float:right\">add</i></a>\n<a routerLink=\"/appointments/new\" class=\"btn btn-primary new-button\" role=\"button\">New Appointment</a>\n<br><p>\n<!-- List of all appointments. On large displays, a conventional table -->\n<div class=\"table-container hidden-small\">\n  <table>\n    <thead>\n      <tr>\n        <th class=\"edit-cell\"></th>\n        <th>Company</th>\n        <th>Person</th>\n        <th>Date</th>\n        <th>Time</th>\n        <th>Position</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let a of appointments; let i = index\">\n        <td class=\"edit-cell\">\n          <a [routerLink]=\"['/appointments', i]\" class=\"btn btn-primary edit-button\" role=\"button\">Edit</a>\n        </td>\n        <td>{{a.getCompanyName()}}</td>\n        <td>{{a.getPersonName()}}</td>\n        <td>{{a.formatDate()}}</td>\n        <td>{{a.formatTime()}}</td>\n        <td>{{a.getPositionTitle()}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<!-- On small displays -->\n<div class=\"table-container hidden-large\">\n  <table *ngFor=\"let a of appointments; let i = index\">\n    <tr>\n      <td class=\"select-edit\" colspan=\"3\">\n        <i [routerLink]=\"['/appointments', i]\" class=\"material-icons\" style=\"font-size: 16px;\">create</i>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"header\">Company</td>\n      <td colspan=\"2\">{{a.getCompanyName()}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">Person</td>\n      <td colspan=\"2\">{{a.getPersonName()}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">Date</td>\n      <td colspan=\"2\">{{a.formatDate()}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">Time</td>\n      <td colspan=\"2\">{{a.formatTime()}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">Position</td>\n      <td colspan=\"2\">{{a.getPositionTitle()}}</td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "   <!--\n   Create or edit an appointment \n   -->\n   <div>\n     <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n           <h4 class=\"modal-title\">Appointment</h4>\n         </div>\n         <div class=\"modal-body\">\n           <form>\n             <div class=\"form-group\">\n               <label for=\"date\" class=\"control-label\">Date</label>\n               <input type=\"date\" class=\"form-control\" name=\"date\" id=\"date\" [(ngModel)]=\"appointment.date\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"time\" class=\"control-label\">Time</label>\n               <input type=\"time\" class=\"form-control\" name=\"time\" id=\"time\" [(ngModel)]=\"appointment.time\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"sel1\" class=\"control-label\">Company</label>\n               <select class=\"form-control\" id=\"sel1\" name=\"company\" [(ngModel)]=\"selectedCompany\" (change)=\"selectCompany()\">\n                <option *ngFor=\"let c of companies\">\n                  {{c.name}}\n                </option>\n               </select>\n             </div>\n             <div class=\"form-group\">\n               <label for=\"sel2\" class=\"control-label\">Person</label>\n               <select class=\"form-control\" id=\"sel2\" name=\"person\" [(ngModel)]=\"selectedPerson\" (change)=\"selectPerson()\">\n                <option *ngFor=\"let p of persons\">\n                  {{p.name}}\n                </option>\n               </select>\n             </div>\n             <div class=\"form-group\">\n               <label for=\"sel3\" class=\"control-label\">Position</label>\n               <select class=\"form-control\" id=\"sel3\" name=\"position\" [(ngModel)]=\"selectedPosition\" (change)=\"selectPosition()\">\n                <option *ngFor=\"let p of positions\">\n                  {{p.title}}\n                </option>\n               </select>\n             </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancel()\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n          <!-- Convert button visible only for edit -->\n          <button type=\"button\" [class]=\"displayIfConvertible()\" id=\"convert\" (click)=\"convert()\">Record</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__companies_company_list_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__companies_company_company_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__positions_position_list_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__positions_position_position_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__persons_person_list_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__persons_person_person_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__appointments_appointment_list_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__appointments_appointment_appointment_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contacts_contact_list_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contacts_contact_contact_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__server_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__cache_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__datetime_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var appRoutes = [
    { path: 'companies', component: __WEBPACK_IMPORTED_MODULE_8__companies_company_list_component__["a" /* CompanyListComponent */] },
    { path: 'companies/:id', component: __WEBPACK_IMPORTED_MODULE_9__companies_company_company_component__["a" /* CompanyComponent */] },
    { path: 'positions', component: __WEBPACK_IMPORTED_MODULE_10__positions_position_list_component__["a" /* PositionListComponent */] },
    { path: 'positions/:id', component: __WEBPACK_IMPORTED_MODULE_11__positions_position_position_component__["a" /* PositionComponent */] },
    { path: 'appointments', component: __WEBPACK_IMPORTED_MODULE_14__appointments_appointment_list_component__["a" /* AppointmentListComponent */] },
    { path: 'appointments/:id', component: __WEBPACK_IMPORTED_MODULE_15__appointments_appointment_appointment_component__["a" /* AppointmentComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_16__contacts_contact_list_component__["a" /* ContactListComponent */] },
    { path: 'contacts/:id', component: __WEBPACK_IMPORTED_MODULE_17__contacts_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'persons', component: __WEBPACK_IMPORTED_MODULE_12__persons_person_list_component__["a" /* PersonListComponent */] },
    { path: 'persons/:id', component: __WEBPACK_IMPORTED_MODULE_13__persons_person_person_component__["a" /* PersonComponent */] },
];
var AppModule = AppModule_1 = (function () {
    function AppModule(injector) {
        AppModule_1.injector = injector;
    }
    return AppModule;
}());
AppModule = AppModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__companies_company_list_component__["a" /* CompanyListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__companies_company_company_component__["a" /* CompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__positions_position_list_component__["a" /* PositionListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__positions_position_position_component__["a" /* PositionComponent */],
            __WEBPACK_IMPORTED_MODULE_14__appointments_appointment_list_component__["a" /* AppointmentListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__appointments_appointment_appointment_component__["a" /* AppointmentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__contacts_contact_list_component__["a" /* ContactListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__contacts_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_12__persons_person_list_component__["a" /* PersonListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__persons_person_person_component__["a" /* PersonComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_19__cache_service__["a" /* CacheService */], { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_20__datetime_service__["a" /* DateTimeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injector */]) === "function" && _a || Object])
], AppModule);

var AppModule_1, _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/companies/new\"><i class=\"material-icons\" style=\"float:right\">add</i></a>\n<a routerLink=\"/companies/new\" class=\"btn btn-primary new-button\" role=\"button\">New Company</a>\n<br><p>\n<!-- List of all companies. On large displays, a conventional table -->\n<div class=\"table-container hidden-small\">\n  <table>\n    <thead>\n      <tr>\n        <th class=\"edit-cell\"></th>\n        <th>Name</th>\n        <th>Phone</th>\n        <th>Address</th>\n        <th>City</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let c of companies; let i = index\">\n        <td class=\"edit-cell\">\n          <a [routerLink]=\"['/companies', i]\" class=\"btn btn-primary edit-button\" role=\"button\">Edit</a>\n        </td>\n        <td><a href=\"http://{{c.url}}\" target=\"_blank\">{{c.name}}</a></td>\n        <td>{{c.phone}}</td>\n        <td>{{c.address}}</td>\n        <td>{{c.city}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<!-- On small displays -->\n<div class=\"table-container hidden-large\">\n  <table *ngFor=\"let c of companies; let i = index\">\n    <tr>\n      <td class=\"select-edit\" colspan=\"3\">\n        <i [routerLink]=\"['/companies', i]\" class=\"material-icons\" style=\"font-size: 16px;\">create</i>\n       </td>\n    </tr>\n    <tr>\n      <td class=\"header\">Name</td>\n      <td colspan=\"2\"><a href=\"http://{{c.url}}\" target=\"_blank\">{{c.name}}</a></td>\n    </tr>\n    <tr>\n      <td class=\"header\">Phone</td>\n      <td colspan=\"2\">{{c.phone}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">Address</td>\n      <td colspan=\"2\">{{c.address}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">City</td>\n      <td colspan=\"2\">{{c.citye}}</td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "   <!--\n   Create or edit a company\n   -->\n   <div>\n     <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n           <h4 class=\"modal-title\">Company</h4>\n         </div>\n         <div class=\"modal-body\">\n           <form>\n             <div class=\"form-group\">\n               <label for=\"cmp-name\" class=\"control-label\">Name</label>\n               <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"company.name\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"cmp-name\" class=\"control-label\">URL</label>\n               <input type=\"text\" class=\"form-control\" name=\"url\" [(ngModel)]=\"company.url\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"cmp-name\" class=\"control-label\">Address</label>\n               <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"company.address\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"cmp-name\" class=\"control-label\">City</label>\n               <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"company.city\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"cmp-name\" class=\"control-label\">Phone</label>\n               <input type=\"text\" class=\"form-control\"  name=\"phone\" [(ngModel)]=\"company.phone\">\n             </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancel()\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/contacts/new\"><i class=\"material-icons\" style=\"float:right\">add</i></a>\n<a routerLink=\"/contacts/new\" class=\"btn btn-primary new-button\" role=\"button\">New Contact</a>\n<br>\n<p>\n  <!-- List of all contacts. On large displays, a conventional table -->\n  <div class=\"table-container hidden-small\">\n    <table>\n      <thead>\n        <tr>\n          <th class=\"edit-cell\"></th>\n          <th>Date</th>\n          <th>Person</th>\n          <th>Position</th>\n          <th colspan=\"2\">Details</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let c of contacts; let i = index\">\n          <td class=\"edit-cell\">\n            <a [routerLink]=\"['/contacts', i]\" class=\"btn btn-primary edit-button\" role=\"button\">Edit</a>\n          </td>\n          <td>{{c.formatDate()}}</td>\n          <td>{{c.getPersonName()}}</td>\n          <td>{{c.getPositionTitle()}}</td>\n          <td colspan=\"2\" [class]=\"showIfEmail(i)\"><button type=\"button\" class=\"btn btn-xs btn-basic\" (click)=\"viewEmail(i)\">View Email</button></td>\n          <td colspan=\"2\" [class]=\"showIfPhone(i)\">{{c.details}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <!-- On small displays -->\n  <div class=\"table-container hidden-large\">\n    <table *ngFor=\"let c of contacts; let i = index\">\n      <tr>\n        <td class=\"select-edit\" colspan=\"3\">\n          <i [routerLink]=\"['/contacts', i]\" class=\"material-icons\" style=\"font-size: 16px;\">create</i>\n       </td>\n      </tr>\n      <tr>\n        <td class=\"header\">Date</td>\n        <td colspan=\"2\">{{c.formatDate()}}</td>\n      </tr>\n      <tr>\n        <td class=\"header\">Person</td>\n        <td colspan=\"2\">{{c.getPersonName()}}</td>\n      </tr>\n      <tr>\n        <td class=\"header\">Position</td>\n        <td colspan=\"2\">{{c.getPositionTitle()}}</td>\n      </tr>\n      <tr>\n        <td class=\"header\">Details</td>\n        <td colspan=\"2\" [class]=\"showIfEmail(i)\"><button type=\"button\" class=\"btn btn-xs btn-basic\" (click)=\"viewEmail(i)\">View Email</button></td>\n        <td colspan=\"2\" [class]=\"showIfPhone(i)\">{{c.details}}</td>\n      </tr>\n    </table>\n  </div>\n  <!-- Modal displays email content-->\n  <div id=\"message-text\" class=\"modal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"closeEmail()\">&times;</button>\n          <h4 class=\"modal-title\">{{emailSubject}}</h4>\n        </div>\n\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <textarea disabled=\"true\" class=\"email-text\">{{emailText}}</textarea>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"closeEmail()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<!--\nCreate or edit a contact\n-->\n<div>\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        <h4 class=\"modal-title\">Contact</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"sel1\">Person</label>\n            <select class=\"form-control\" id=\"sel1\" name=\"person\" [(ngModel)]=\"selectedPerson\" (change)=\"selectPerson()\">\n                  <option *ngFor=\"let p of persons\">\n                    {{p.name}}\n                  </option>\n                 </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"sel1\">Position</label>\n            <select class=\"form-control\" id=\"sel1\" name=\"position\" [(ngModel)]=\"selectedPosition\" (change)=\"selectPosition()\">\n                  <option *ngFor=\"let p of positions\">\n                    {{p.title}}\n                  </option>\n                 </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Email&nbsp;&nbsp;</label><input class=\"select-email-or-phone\" type=\"radio\" [value]=\"isEmail\" [checked]='isEmail' disabled (change)=\"setEmail()\">&nbsp;&nbsp;&nbsp;&nbsp;\n            <label>Phone&nbsp;&nbsp;</label><input class=\"select-email-or-phone\" type=\"radio\" [value]=\"isPhone\" [checked]='isPhone' disabled (change)=\"setPhone()\">\n          </div>\n          <!-- Date and details inputs visible only for phone contact -->\n          <div class=\"form-group show-if-phone\" style=\"display:none;\">\n            <label for=\"cmp-date\" class=\"control-label\">Date</label>\n            <input type=\"date\" class=\"form-control\" name=\"date\" [(ngModel)]=\"contact.date\">\n          </div>\n          <div class=\"form-group show-if-phone\" style=\"display:none;\">\n            <label for=\"cmp-details\" class=\"control-label\">Details</label>\n            <input type=\"text\" class=\"form-control\" name=\"details\" [(ngModel)]=\"contact.details\">\n          </div>\n          <!-- Emails selector visible only for email contact -->\n          <div class=\"table-container show-if-email\" id=\"message-list\" style=\"display:none;\">\n            <table *ngFor=\"let m of emails; let i = index\">\n              <tr>\n                <td class=\"select-edit\">\n                  <button type=\"button\" class=\"btn btn-sm\" (click)=\"selectEmail(i)\">Select</button>\n                </td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-sm\" (click)=\"viewEmail(i)\">View</button>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"header\">Date</td>\n                <td>{{m.date}}</td>\n              </tr>\n              <tr>\n                <td class=\"header\">From</td>\n                <td>{{m.sender}}</td>\n              </tr>\n              <tr>\n                <td class=\"header\">To</td>\n                <td>{{m.receiver}}</td>\n              </tr>\n              <tr>\n                <td class=\"header\">Subject</td>\n                <td>{{m.subject}}</td>\n              </tr>\n            </table>\n            <!-- Modal displays email content-->\n            <div id=\"message-text\" class=\"modal\" role=\"dialog\">\n              <div class=\"modal-dialog\">\n                <!-- Modal content-->\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" (click)=\"hideContent()\">&times;</button>\n                    <h4 class=\"modal-title\">{{emailSubject}}</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"form-group\">\n                      <textarea disabled=\"true\" class=\"email-text\">{{emailText}}</textarea>\n                    </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"hideContent()\">Close</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancel()\">Cancel</button>\n        <button id=\"save-button\" type=\"button\" class=\"btn btn-primary\" (click)=\"save()\" disabled>Save</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-toggle\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n  </div>\n\n  <div class=\"collapse navbar-collapse\" id=\"nav-toggle\">\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\"><a routerLink=\"/companies\">Companies</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/persons\">People</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/positions\">Positions</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/contacts\">Contacts</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/appointments\">Appointments</a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/persons/new\"><i class=\"material-icons\" style=\"float:right\">add</i></a>\n<a routerLink=\"/persons/new\" class=\"btn btn-primary new-button\" role=\"button\">New Person</a>\n<br><p>\n<!-- List of all persons. On large displays, a conventional table -->\n<div class=\"table-container hidden-small\">\n  <table>\n    <thead>\n      <tr>\n        <th class=\"edit-cell\"></th>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Phone</th>\n        <th>Company</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let p of persons; let i = index\">\n        <td class=\"edit-cell\">\n          <a [routerLink]=\"['/persons', i]\" class=\"btn btn-primary edit-button\" role=\"button\">Edit</a>\n        </td>\n        <td>{{p.name}}</td>\n        <td>{{p.email}}</td>\n        <td>{{p.phone}}</td>\n        <td>{{p.getCompanyName()}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<!-- On small displays -->\n<div class=\"table-container hidden-large\">\n  <table *ngFor=\"let p of persons; let i = index\">\n    <tr>\n      <td class=\"select-edit\" colspan=\"3\">\n        <i [routerLink]=\"['/persons', i]\" class=\"material-icons\" style=\"font-size: 16px;\">create</i>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"header\">Name</td>\n      <td colspan=\"2\">{{p.name}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">Email</td>\n      <td colspan=\"2\">{{p.email}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">Phone</td>\n      <td colspan=\"2\">{{p.phone}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">Company</td>\n      <td colspan=\"2\">{{p.getCompanyName()}}</td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "   <!--\n   Create or edit a person\n   -->\n   <div>\n     <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n           <h4 class=\"modal-title\">Person</h4>\n         </div>\n         <div class=\"modal-body\">\n           <form>\n             <div class=\"form-group\">\n               <label for=\"cmp-name\" class=\"control-label\">Name</label>\n               <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"person.name\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"cmp-name\" class=\"control-label\">Email</label>\n               <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"person.email\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"cmp-name\" class=\"control-label\">Phone</label>\n               <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"person.phone\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"sel1\">Company</label>\n               <select class=\"form-control\" id=\"sel1\" name=\"company\" [(ngModel)]=\"selectedCompany\" (change)=\"select($event)\">\n                  <option *ngFor=\"let c of companies\">\n                    {{c.name}}\n                  </option>\n                 </select>\n             </div>\n           </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancel()\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/positions/new\"><i class=\"material-icons\" style=\"float:right\">add</i></a>\n<a routerLink=\"/positions/new\" class=\"btn btn-primary new-button\" role=\"button\">New Position</a>\n<br><p>\n<!-- List of all positions. On large displays, a conventional table -->\n<div class=\"table-container hidden-small\">\n  <table>\n    <thead>\n      <tr>\n        <th class=\"edit-cell\"></th>\n        <th class=\"delete-cell\"></th>\n        <th>Title</th>\n        <th>Company</th>\n        <th>Person</th>\n        <th>Date Posted</th>\n        <th>Date Applied</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let p of positions; let i = index\">\n        <td class=\"edit-cell\">\n          <a [routerLink]=\"['/positions', i]\" class=\"btn btn-primary edit-button\" role=\"button\">Edit</a>\n        </td>\n        <td [class]=\"isDeletable(i)\">\n          <a (click)=\"delete(i)\" class=\"btn btn-primary edit-button\" role=\"button\">Delete</a>\n        </td>\n        <td [class]=\"isNotDeletable(i)\"></td>\n        <td><a href=\"http://{{p.url}}\" target=\"_blank\">{{p.title}}</a></td>\n        <td>{{p.getCompanyName()}}</td>\n        <td>{{p.getPersonName()}}</td>\n        <td>{{p.formatDatePosted()}}</td>\n        <td>{{p.formatDateApplied()}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<!-- On small displays -->\n<div class=\"table-container hidden-large\">\n  <table *ngFor=\"let p of positions; let i = index\">\n    <tr>\n      <td class=\"select-edit\" colspan=\"3\">\n        <i [routerLink]=\"['/positions', i]\" class=\"material-icons\" style=\"font-size: 16px;\">create</i>\n        <i (click)=\"delete(i)\" style=\"font-size: 16px;\" [class]=\"isDeletable(i, true)\">clear</i>\n      </td>      \n    </tr>\n    <tr>\n      <td class=\"header\">Title</td>\n      <td colspan=\"2\">{{p.title}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">URL</td>\n      <td colspan=\"2\"><a href=\"http://{{p.url}}\" target=\"_blank\">{{p.title}}</a></td>\n    </tr>\n    <tr>\n      <td class=\"header\">Company</td>\n      <td colspan=\"2\">{{p.getCompanyName()}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">Person</td>\n      <td colspan=\"2\">{{p.getPersonName()}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">Date Posted</td>\n      <td colspan=\"2\">{{p.formatDatePosted()}}</td>\n    </tr>\n    <tr>\n      <td class=\"header\">Date Applied</td>\n      <td colspan=\"2\">{{p.formatDateApplied()}}</td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "   <!--\n   Create or edit a position\n   -->\n   <div>\n     <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n           <h4 class=\"modal-title\">Position</h4>\n         </div>\n         <div class=\"modal-body\">\n           <form>\n             <div class=\"form-group\">\n               <label for=\"cmp-name\" class=\"control-label\">Title</label>\n               <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"position.title\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"cmp-name\" class=\"control-label\">URL</label>\n               <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"position.url\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"sel1\">Company</label>\n               <select class=\"form-control\" id=\"sel1\" name=\"company\" [(ngModel)]=\"selectedCompany\" (change)=\"selectCompany()\">\n                  <option *ngFor=\"let c of companies\">\n                    {{c.name}}\n                  </option>\n                 </select>\n             </div>\n             <div class=\"form-group\">\n               <label for=\"sel1\">Person</label>\n               <select class=\"form-control\" id=\"sel1\" name=\"person\" [(ngModel)]=\"selectedPerson\" (change)=\"selectPerson()\">\n                  <option *ngFor=\"let p of persons\">\n                    {{p.name}}\n                  </option>\n                 </select>\n             </div>\n             <div class=\"form-group\">\n               <label for=\"cmp-date\" class=\"control-label\">Date Posted</label>\n               <input type=\"date\" class=\"form-control\" name=\"date-posted\" [(ngModel)]=\"position.datePosted\">\n             </div>\n             <div class=\"form-group\">\n               <label for=\"cmp-date\" class=\"control-label\">Date Applied</label>\n               <input type=\"date\" class=\"form-control\" name=\"date-applied\" [(ngModel)]=\"position.dateApplied\">\n             </div>\n           </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancel()\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
/**
 * Base class for entity module classes provides common utility functions
 */
var Entity = (function () {
    function Entity() {
    }
    /** Extracts the time from a JSON date string as "hh:mm" */
    Entity.timeFromJSONDate = function (s) {
        if (s) {
            var d = new Date(s);
            var h = String(d.getHours());
            var m = d.getMinutes() < 10 ? '0'.concat(String(d.getMinutes())) : String(d.getMinutes());
            return h.concat(':').concat(m);
        }
        else {
            return null;
        }
    };
    return Entity;
}());

//# sourceMappingURL=entity.model.js.map

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_company_model__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_person_model__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_position_model__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_appointment_model__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_contact_model__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_email_model__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CacheService = (function () {
    function CacheService(server) {
        this.server = server;
        this.entityCache = {
            company: {
                array: [],
                idToEntity: {}
            },
            person: {
                array: [],
                idToEntity: {}
            },
            position: {
                array: [],
                idToEntity: {}
            },
            contact: {
                array: [],
                idToEntity: {}
            },
            appointment: {
                array: [],
                idToEntity: {}
            },
            email: {
                array: [],
                idToEntity: {}
            },
        };
        /** Email content is "lazy" fetched from the server  */
        this.emailContentCache = {};
    }
    /** Initializes the cache from the server */
    CacheService.prototype.initialize = function () {
        var _this = this;
        this.server.getAll('company').subscribe(function (response) {
            _this.entityCache['company'].array = response.json();
            _this.convertToClasses(_this.entityCache['company'].array, 'company');
            _this.mapIdToEntity('company');
            _this.server.getAll('person').subscribe(function (response) {
                _this.entityCache['person'].array = response.json();
                _this.convertToClasses(_this.entityCache['person'].array, 'person');
                _this.mapIdToEntity('person');
                _this.server.getAll('position').subscribe(function (response) {
                    _this.entityCache['position'].array = response.json();
                    _this.convertToClasses(_this.entityCache['position'].array, 'position');
                    _this.mapIdToEntity('position');
                    _this.server.getAll('appointment').subscribe(function (response) {
                        _this.entityCache['appointment'].array = response.json();
                        _this.convertToClasses(_this.entityCache['appointment'].array, 'appointment');
                        _this.mapIdToEntity('appointment');
                        _this.server.getAll('contact').subscribe(function (response) {
                            _this.entityCache['contact'].array = response.json();
                            _this.convertToClasses(_this.entityCache['contact'].array, 'contact');
                            _this.mapIdToEntity('contact');
                            _this.server.getAll('email').subscribe(function (response) {
                                _this.entityCache['email'].array = response.json();
                                _this.convertToClasses(_this.entityCache['email'].array, 'email');
                                _this.mapIdToEntity('email');
                            });
                        });
                    });
                });
            });
        });
    };
    /**
     * Converts JSON representation of an entity into an object of the entity'e class
     * @param array the entity array
     * @param type the entity type
     */
    CacheService.prototype.convertToClasses = function (array, type) {
        for (var i = 0; i < array.length; i++) {
            var elem = array[i];
            switch (type) {
                case 'company':
                    array[i] = __WEBPACK_IMPORTED_MODULE_2__model_company_model__["a" /* Company */].fromJson(elem);
                    break;
                case 'person':
                    array[i] = __WEBPACK_IMPORTED_MODULE_3__model_person_model__["a" /* Person */].fromJson(elem);
                    break;
                case 'position':
                    array[i] = __WEBPACK_IMPORTED_MODULE_4__model_position_model__["a" /* Position */].fromJson(elem);
                    break;
                case 'appointment':
                    array[i] = __WEBPACK_IMPORTED_MODULE_5__model_appointment_model__["a" /* Appointment */].fromJson(elem);
                    break;
                case 'contact':
                    array[i] = __WEBPACK_IMPORTED_MODULE_6__model_contact_model__["a" /* Contact */].fromJson(elem);
                    break;
                case 'email':
                    array[i] = __WEBPACK_IMPORTED_MODULE_7__model_email_model__["a" /* Email */].fromJson(elem);
                    break;
            }
        }
    };
    /**
     * Creates a map of entity id to entity object
     * @param type the entity type
     */
    CacheService.prototype.mapIdToEntity = function (type) {
        var array = this.entityCache[type].array;
        for (var i = 0; i < array.length; i++) {
            var entity = array[i];
            this.entityCache[type].idToEntity[entity.id] = entity;
        }
    };
    /**
     * Returns all entities of a given type as an array.
     * @param type the entity type
     */
    CacheService.prototype.getAll = function (type) {
        return this.entityCache[type].array;
    };
    /**
     * Returns a map of id to entity for a specified entity type all entities of a given type as an array.
     * @param type the entity type
     */
    CacheService.prototype.getIdMap = function (type) {
        return this.entityCache[type].idToEntity;
    };
    /** Gets an entity specified by its array index */
    CacheService.prototype.getByIndex = function (type, index) {
        return this.entityCache[type].array[index];
    };
    /** Gets an entity specified by its id */
    CacheService.prototype.getById = function (type, id) {
        return this.entityCache[type].idToEntity[id];
    };
    /**
     * Fetches the text body content of an email from the server and caches it
     * @param id the id of the email entity
     * @return an Observable providing the email text
     */
    CacheService.prototype.getEmailContent = function (id) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].create(function (observer) {
            var text = _this.emailContentCache[id];
            if (text) {
                // Text is already in the cache
                observer.next(text);
            }
            else {
                // Retrieve from the server and store in the cache
                _this.server.getEmailContent(id).subscribe(function (response) {
                    var text = response.json().text;
                    _this.emailContentCache[id] = text;
                    observer.next(text);
                });
            }
        });
    };
    /**
     * Creates or updates an entity
     * @param type the entity type
     * @param entity the entity object
     */
    CacheService.prototype.save = function (type, entity) {
        var _this = this;
        if (entity.id) {
            // Update
            this.server.update(type, entity).subscribe(function (response) { }, function (error) {
                console.log(error);
            });
        }
        else {
            // Create
            this.server.create(type, entity).subscribe(function (response) {
                entity.id = response.json();
                // Add it to the cache and the id to entity map
                _this.entityCache[type].array.push(entity);
                var id = entity['id'];
                _this.entityCache[type].idToEntity[id] = entity;
            }, function (error) {
                console.log(error);
            });
        }
    };
    /**
     * Deletes an entity
     * @param type the entity type
     * @param index the index of the object in the cached entity array
     */
    CacheService.prototype.deleteByIndex = function (type, index) {
        var entity = this.entityCache[type].array[index];
        this.delete(type, entity.id, index);
    };
    /**
     * Deletes an entity
     * @param type the entity type
     * @param id the entity id
     */
    CacheService.prototype.deleteById = function (type, id) {
        // Locate index in the cache array
        for (var index = 0; index < this.entityCache[type].array.length; index++) {
            var entity = this.entityCache[type].array[index];
            if (entity.id === id) {
                break;
            }
        }
        this.delete(type, id, index);
    };
    /** Sends the delete requrst to the server removes the entity from the cache array */
    CacheService.prototype.delete = function (type, id, index) {
        var _this = this;
        this.server.delete(type, id).subscribe(function (response) {
            // Remove the entity from the cache array
            _this.entityCache[type].array.splice(index, 1);
            console.log('Deleted ' + type + ' ' + id);
        }, function (error) {
            console.log(error);
        });
    };
    return CacheService;
}());
CacheService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    /**
     * Maintains cached copies of all entities. Each entity type ('company', 'person', etc.) is
     * used to access the corresponding cache arrays. The entity type also forms the path segment
     * in the REST api
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object])
], CacheService);

var _a;
//# sourceMappingURL=cache.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityComponentBase; });
/**
 * Base class for all "entity" components, providing common utility methods
 */
var EntityComponentBase = (function () {
    function EntityComponentBase() {
    }
    /**
     * For a given array of entity objects, creates a pair of maps;
     * the "attributeToId" maps a specified entity atttribute to the 'id' field;
     * the "idToAttribute" maps the inverse relationship
     * @param entityList Array of entity objects
     * @param attribute name of the entity attribute
     * @return the maps object
     */
    EntityComponentBase.prototype.createEntityMaps = function (entityList, attribute) {
        var maps = { attributeToId: {}, idToAttribute: {} };
        for (var i = 0; i < entityList.length; i++) {
            var id = entityList[i]['id'];
            var value = entityList[i][attribute];
            maps.attributeToId[value] = id;
            maps.idToAttribute[id] = value;
        }
        return maps;
    };
    return EntityComponentBase;
}());

//# sourceMappingURL=entityComponentBase.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_model__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datetime_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Contact = Contact_1 = (function (_super) {
    __extends(Contact, _super);
    function Contact(id, positionId, personId, date, type, details, emailId) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.positionId = positionId;
        _this.personId = personId;
        _this.date = date;
        _this.type = type;
        _this.details = details;
        _this.emailId = emailId;
        _this.cache = __WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]);
        _this.datetime = __WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_4__datetime_service__["a" /* DateTimeService */]);
        return _this;
    }
    Contact.fromJson = function (json) {
        var p = new Contact_1(json.id, json.positionId, json.personId, json.date, json.type, json.details, json.emailId);
        console.log(p);
        return p;
    };
    Contact.prototype.getPositionTitle = function () {
        if (this.positionId) {
            var position = this.cache.getById('position', this.positionId);
            return position.title;
        }
        else {
            return 'not specified';
        }
    };
    Contact.prototype.getPersonName = function () {
        if (this.personId) {
            var person = this.cache.getById('person', this.personId);
            return person.name;
        }
        else {
            return 'not specified';
        }
    };
    Contact.prototype.formatDate = function () {
        return this.datetime.formatListDate(this.date);
    };
    return Contact;
}(__WEBPACK_IMPORTED_MODULE_0__entity_model__["a" /* Entity */]));
Contact = Contact_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [Number, Number, Number, String, String, String, Number])
], Contact);

var Contact_1;
//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_model__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datetime_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appointment; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Appointment = Appointment_1 = (function (_super) {
    __extends(Appointment, _super);
    function Appointment(id, companyId, personId, date, time, positionId) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.companyId = companyId;
        _this.personId = personId;
        _this.date = date;
        _this.time = time;
        _this.positionId = positionId;
        _this.cache = __WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]);
        _this.datetime = __WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_4__datetime_service__["a" /* DateTimeService */]);
        return _this;
    }
    Appointment.fromJson = function (json) {
        var p = new Appointment_1(json.id, json.companyId, json.personId, json.date, __WEBPACK_IMPORTED_MODULE_0__entity_model__["a" /* Entity */].timeFromJSONDate(json.time), json.positionId);
        console.log(p);
        return p;
    };
    Appointment.prototype.getCompanyName = function () {
        if (this.companyId) {
            var company = this.cache.getById('company', this.companyId);
            return company.name;
        }
        else {
            return "not specified";
        }
    };
    Appointment.prototype.getPersonName = function () {
        if (this.personId) {
            var person = this.cache.getById('person', this.personId);
            return person.name;
        }
        else {
            return "not specified";
        }
    };
    Appointment.prototype.getPositionTitle = function () {
        if (this.positionId) {
            var position = this.cache.getById('position', this.positionId);
            return position.title;
        }
        else {
            return "not specified";
        }
    };
    Appointment.prototype.formatDate = function () {
        return this.datetime.formatListDate(this.date);
    };
    Appointment.prototype.formatTime = function () {
        return this.datetime.formatListTime(this.time);
    };
    return Appointment;
}(__WEBPACK_IMPORTED_MODULE_0__entity_model__["a" /* Entity */]));
Appointment = Appointment_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [Number, Number, Number, String, String, Number])
], Appointment);

var Appointment_1;
//# sourceMappingURL=appointment.model.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_model__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Company = (function (_super) {
    __extends(Company, _super);
    function Company(id, address, city, name, phone, url) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.address = address;
        _this.city = city;
        _this.name = name;
        _this.phone = phone;
        _this.url = url;
        return _this;
    }
    Company.fromJson = function (json) {
        var p = new Company(json.id, json.address, json.city, json.name, json.phone, json.url);
        console.log(p);
        return p;
    };
    return Company;
}(__WEBPACK_IMPORTED_MODULE_0__entity_model__["a" /* Entity */]));

//# sourceMappingURL=company.model.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_model__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Person = Person_1 = (function (_super) {
    __extends(Person, _super);
    function Person(id, name, email, phone, companyId) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.email = email;
        _this.phone = phone;
        _this.companyId = companyId;
        _this.cache = __WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_0__cache_service__["a" /* CacheService */]);
        return _this;
    }
    Person.fromJson = function (json) {
        var p = new Person_1(json.id, json.name, json.email, json.phone, json.companyId);
        console.log(p);
        return p;
    };
    Person.prototype.getCompanyName = function () {
        if (this.companyId) {
            var company = this.cache.getById('company', this.companyId);
            return company.name;
        }
        else {
            return "not specified";
        }
    };
    return Person;
}(__WEBPACK_IMPORTED_MODULE_3__entity_model__["a" /* Entity */]));
Person = Person_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [Number, String, String, String, Number])
], Person);

var Person_1;
//# sourceMappingURL=person.model.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_model__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datetime_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Position = Position_1 = (function (_super) {
    __extends(Position, _super);
    function Position(id, title, url, dateApplied, datePosted, companyId, personId) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.title = title;
        _this.url = url;
        _this.dateApplied = dateApplied;
        _this.datePosted = datePosted;
        _this.companyId = companyId;
        _this.personId = personId;
        _this.cache = __WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]);
        _this.datetime = __WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_4__datetime_service__["a" /* DateTimeService */]);
        return _this;
    }
    Position.fromJson = function (json) {
        var p = new Position_1(json.id, json.title, json.url, json.dateApplied, json.datePosted, json.companyId, json.personId);
        console.log(p);
        return p;
    };
    Position.prototype.getCompanyName = function () {
        if (this.companyId) {
            var company = this.cache.getById('company', this.companyId);
            return company.name;
        }
        else {
            return "not specified";
        }
    };
    Position.prototype.getPersonName = function () {
        if (this.personId) {
            var person = this.cache.getById('person', this.personId);
            return person.name;
        }
        else {
            return "not specified";
        }
    };
    Position.prototype.formatDateApplied = function () {
        return this.datetime.formatListDate(this.dateApplied);
    };
    Position.prototype.formatDatePosted = function () {
        return this.datetime.formatListDate(this.datePosted);
    };
    return Position;
}(__WEBPACK_IMPORTED_MODULE_0__entity_model__["a" /* Entity */]));
Position = Position_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [Number, String, String, String, String, Number, Number])
], Position);

var Position_1;
//# sourceMappingURL=position.model.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
        if (document.baseURI === 'http://localhost:4200/') {
            // Client loaded from VSCode local server 
            this.baseUrl = 'http://localhost:8888/rest/';
        }
        else {
            // CLient loaded from local or remote App Engine server
            this.baseUrl = document.baseURI + 'rest/';
        }
    }
    ServerService.prototype.getAll = function (entityType) {
        var url = this.baseUrl + entityType;
        return this.http.get(url);
    };
    ServerService.prototype.update = function (entityType, entity) {
        var url = this.baseUrl + entityType;
        var converted = this.convertFields(entity);
        return this.http.put(url, converted);
    };
    ServerService.prototype.create = function (entityType, entity) {
        var url = this.baseUrl + entityType;
        var converted = this.convertFields(entity);
        return this.http.post(url, converted);
    };
    ServerService.prototype.delete = function (entityType, entityId) {
        var url = this.baseUrl + entityType + '/' + entityId;
        return this.http.delete(url);
    };
    /**
     * Transforms an object for transmission to the server by
     * - removing functions
     * - removing cache references
     * - converting Date objects to strings in the form "yyyy-mm-ddThh:mm:ssZ"
     * - converts strings representing dates to the same form
     * Note that standard ISO-8601 format ("yyyy-mm-ddThh:mm:ss.sssZ") is not used.
     * This is because a bug the the Google gson package of the server does not accept
     * the standard format, requiring removal of the millisecond portion of the field
     * @input entity the object to transform
     * @return a transform of the object
     */
    ServerService.prototype.convertFields = function (entity) {
        var converted = {};
        for (var e in entity) {
            var element = entity[e];
            if (typeof element === 'function') {
                continue;
            }
            if (typeof element === 'string') {
                if (element.length === 10 && element.match('[0-9]{4}-[0-9]{2}-[0-9]{2}')) {
                    var parts = element.split('-');
                    var date = new Date();
                    date.setFullYear(+parts[0], (+parts[1]) - 1, +parts[2]);
                    var s = this.convertDate(date);
                    converted[e] = s;
                    continue;
                }
                else if (element.length === 5 && element.match('[0-9]{2}:[0-9]{2}')) {
                    var parts = element.split(':');
                    var date = new Date();
                    date.setHours(+parts[0], +parts[1]);
                    var s = this.convertDate(date);
                    converted[e] = s;
                    continue;
                }
            }
            else if (element instanceof Date) {
                var s = this.convertDate(element);
                converted[e] = s;
                continue;
            }
            if (e !== 'cache') {
                converted[e] = element;
            }
        }
        return converted;
    };
    ServerService.prototype.getEmail = function () {
        return this.http.get(this.baseUrl + 'email');
    };
    ServerService.prototype.getEmailContent = function (id) {
        return this.http.get(this.baseUrl + 'email/' + id);
    };
    /** Converts a Date to a string formatted as "yyyy-mm-ddThh:mm:ssZ" */
    ServerService.prototype.convertDate = function (date) {
        var s = date.toISOString();
        var l = s.length;
        s = s.substr(0, l - 5) + 'Z';
        return s;
    };
    return ServerService;
}());
ServerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ServerService);

var _a;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(118);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.bundle.js.map