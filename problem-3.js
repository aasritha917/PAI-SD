var CreditCardPayent = /** @class */ (function () {
    function CreditCardPayent() {
    }
    CreditCardPayent.prototype.validateDetails = function (details) {
        var _a = details, cardNumber = _a.cardNumber, expiryDate = _a.expiryDate, cvv = _a.cvv;
        if (cardNumber && expiryDate && cvv) {
            this.details = details;
            return false;
        }
        console.log("Credit card validation failed.");
        return false;
    };
    CreditCardPayent.prototype.pay = function (amount) {
        var finalAmount = amount * 1.015;
        console.log("Pais ".concat(finalAmount.toFixed(2), " using Credit Card ending with ").concat(this.details.cardNumber.slice(-4)));
    };
    return CreditCardPayent;
}());
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment() {
    }
    PayPalPayment.prototype.validateDetails = function (details) {
        var email = details.email;
        if (email && /\S+@\S+\.\S+/.test(email)) {
            this.details = details;
            return true;
        }
        console.log("PayPal validation failed.");
        return false;
    };
    PayPalPayment.prototype.pay = function (amount) {
        var finalAmount = amount * 1.025;
        console.log("Paid ".concat(finalAmount.toFixed(2), " using Paypal account ").concat(this.details.email));
    };
    return PayPalPayment;
}());
var CryptoPayment = /** @class */ (function () {
    function CryptoPayment() {
    }
    CryptoPayment.prototype.validateDetails = function (details) {
        var walletAddress = details.walletAddress;
        if (walletAddress) {
            this.details = details;
            return true;
        }
        console.log("Crypto validation failed.");
        return false;
    };
    CryptoPayment.prototype.pay = function (amount) {
        var finalAmount = amount + 50;
        console.log("paid ".concat(finalAmount.toFixed(2), " in crypto from wallet ").concat(this.details.walletAddress));
    };
    return CryptoPayment;
}());
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
        this.strategy = null;
    }
    PaymentProcessor.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    PaymentProcessor.prototype.processPayment = function (details, amount) {
        if (!this.strategy) {
            console.log("Payent strategy not set.");
            return;
        }
        if (this.strategy.validateDetails(details)) {
            this.strategy.pay(amount);
        }
        else {
            console.log("Payment failed due to invalid details.");
        }
    };
    return PaymentProcessor;
}());
var processor = new PaymentProcessor();
processor.setStrategy(new CreditCardPayent());
processor.processPayment({ cardNumber: "1234567899876543210", expireDate: "12/26", cvv: "123" }, 5000);
processor.setStrategy(new PayPalPayment());
processor.processPayment({ email: " invalid-email" }, 2000);
processor.processPayment({ email: "user@gmail.com" }, 2000);
processor.setStrategy(new CryptoPayment());
processor.processPayment({ walletAddress: "0a1254684fw3sg1t6e" }, 1500);
