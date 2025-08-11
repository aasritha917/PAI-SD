var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var CourseSubscription = /** @class */ (function () {
    function CourseSubscription() {
    }
    return CourseSubscription;
}());
var BasicSubscription = /** @class */ (function (_super) {
    __extends(BasicSubscription, _super);
    function BasicSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicSubscription.prototype.getCost = function () {
        return 499;
    };
    BasicSubscription.prototype.getFeatures = function () {
        return ["Access to all basic courses"];
    };
    return BasicSubscription;
}(CourseSubscription));
var SubscriptionDecorate = /** @class */ (function (_super) {
    __extends(SubscriptionDecorate, _super);
    function SubscriptionDecorate(subscription) {
        var _this = _super.call(this) || this;
        _this.subscription = subscription;
        return _this;
    }
    return SubscriptionDecorate;
}(CourseSubscription));
var CertificationAddon = /** @class */ (function (_super) {
    __extends(CertificationAddon, _super);
    function CertificationAddon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CertificationAddon.prototype.getCost = function () {
        return this.subscription.getCost() + 200;
    };
    CertificationAddon.prototype.getFeatures = function () {
        return __spreadArray(__spreadArray([], this.subscription.getFeatures(), true), ["Official Certificate of Completion"], false);
    };
    return CertificationAddon;
}(SubscriptionDecorate));
var DoubtSupportAddon = /** @class */ (function (_super) {
    __extends(DoubtSupportAddon, _super);
    function DoubtSupportAddon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DoubtSupportAddon.prototype.getCost = function () {
        return this.subscription.getCost() + 300;
    };
    DoubtSupportAddon.prototype.getFeatures = function () {
        return __spreadArray(__spreadArray([], this.subscription.getFeatures(), true), ["24/7 Doubt Support via Chat"], false);
    };
    return DoubtSupportAddon;
}(SubscriptionDecorate));
var MentorAccessAddon = /** @class */ (function (_super) {
    __extends(MentorAccessAddon, _super);
    function MentorAccessAddon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MentorAccessAddon.prototype.getCost = function () {
        return this.subscription.getCost() + 500;
    };
    MentorAccessAddon.prototype.getFeatures = function () {
        return __spreadArray(__spreadArray([], this.subscription.getFeatures(), true), ["Weekly 1-on-1 Mentor Sessions"], false);
    };
    return MentorAccessAddon;
}(SubscriptionDecorate));
var DiscountChecker = /** @class */ (function (_super) {
    __extends(DiscountChecker, _super);
    function DiscountChecker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscountChecker.prototype.getCost = function () {
        var totalCost = this.subscription.getCost();
        var features = this.subscription.getFeatures();
        var hasDoubtSupport = features.includes("24/7 Doubt Support via Chat");
        var hasMentorAccess = features.includes("Weekly 1-on-1 Mentor Sessions");
        if (hasDoubtSupport && hasMentorAccess) {
            return totalCost * 0.85;
        }
        return totalCost;
    };
    DiscountChecker.prototype.getFeatures = function () {
        return this.subscription.getFeatures();
    };
    return DiscountChecker;
}(SubscriptionDecorate));
var sub1 = new CertificationAddon(new BasicSubscription());
console.log("Cost: ", sub1.getCost());
console.log("Features: ", sub1.getFeatures());
var sub2 = new DiscountChecker(new MentorAccessAddon(new DoubtSupportAddon(new CertificationAddon(new BasicSubscription()))));
console.log("Cost with Discount:", sub2.getCost());
console.log("Features:", sub2.getFeatures());
