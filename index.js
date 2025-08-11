var FlightBooking = /** @class */ (function () {
    function FlightBooking() {
    }
    FlightBooking.prototype.book = function () {
        return "Flight booked with Indigo..";
    };
    return FlightBooking;
}());
var FlightItinerary = /** @class */ (function () {
    function FlightItinerary() {
    }
    FlightItinerary.prototype.display = function () {
        return "Displaying flight itinerary...";
    };
    return FlightItinerary;
}());
var FlightInvoice = /** @class */ (function () {
    function FlightInvoice() {
    }
    FlightInvoice.prototype.generate = function () {
        return "Generating flight invoice....";
    };
    return FlightInvoice;
}());
var HotelBooking = /** @class */ (function () {
    function HotelBooking() {
    }
    HotelBooking.prototype.book = function () {
        return "Hotel booked at Marriott...";
    };
    return HotelBooking;
}());
var HotelItinerary = /** @class */ (function () {
    function HotelItinerary() {
    }
    HotelItinerary.prototype.display = function () {
        return "Displaying Hotel Itinerary...";
    };
    return HotelItinerary;
}());
var HotelInVoice = /** @class */ (function () {
    function HotelInVoice() {
    }
    HotelInVoice.prototype.generate = function () {
        return "Generating Hotel invoice....";
    };
    return HotelInVoice;
}());
var FlightProviderFactory = /** @class */ (function () {
    function FlightProviderFactory() {
    }
    FlightProviderFactory.prototype.createBooking = function () {
        return new FlightBooking();
    };
    FlightProviderFactory.prototype.createItinerary = function () {
        return new FlightItinerary();
    };
    FlightProviderFactory.prototype.createInvoice = function () {
        return new FlightInvoice();
    };
    return FlightProviderFactory;
}());
var HotelProviderFactory = /** @class */ (function () {
    function HotelProviderFactory() {
    }
    HotelProviderFactory.prototype.createBooking = function () {
        return new HotelBooking();
    };
    HotelProviderFactory.prototype.createItinerary = function () {
        return new HotelItinerary();
    };
    HotelProviderFactory.prototype.createInvoice = function () {
        return new HotelInVoice();
    };
    return HotelProviderFactory;
}());
function clientCode(factory) {
    var booking = factory.createBooking();
    var itinerary = factory.createItinerary();
    var invoice = factory.createInvoice();
    console.log(booking.book());
    console.log(itinerary.display());
    console.log(invoice.generate());
}
console.log(" --- Flight Booking ---");
clientCode(new FlightProviderFactory());
console.log("\n --- Hotel Booking ---");
clientCode(new HotelProviderFactory());
