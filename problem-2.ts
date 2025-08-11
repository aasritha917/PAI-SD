interface IBooking{
    book(): string
}
interface IItinerary{
    display(): string
}
interface IInvoice{
    generate(): string;
}

class FlightBooking implements IBooking{
    book(): string{
        return "Flight booked with Indigo.."
    }
}
class FlightItinerary implements IItinerary{
    display(): string {
        return "Displaying flight itinerary..."
    }
}
class FlightInvoice implements IInvoice{
    generate(): string {
        return "Generating flight invoice...."
    }
}

class HotelBooking implements IBooking{
    book(): string {
        return "Hotel booked at Marriott..."
    }
}
class HotelItinerary implements IItinerary{
    display(): string {
        return "Displaying Hotel Itinerary..."
    }
}
class HotelInVoice implements IInvoice{
    generate(): string {
        return "Generating Hotel invoice...."
    }
}

interface IBookingProviderFactory{
    createBooking(): IBooking;
    createItinerary(): IItinerary;
    createInvoice(): IInvoice;
}

class FlightProviderFactory implements IBookingProviderFactory{
    createBooking(): IBooking {
        return new FlightBooking();
    }
    createItinerary(): IItinerary {
        return new FlightItinerary();
    }
    createInvoice(): IInvoice {
        return new FlightInvoice();
    }
}

class HotelProviderFactory implements IBookingProviderFactory{
    createBooking(): IBooking {
        return new HotelBooking();
    }
    createItinerary(): IItinerary {
        return new HotelItinerary();
    }
    createInvoice(): IInvoice {
        return new HotelInVoice()
    }
}

function clientCode(factory: IBookingProviderFactory){
    const booking = factory.createBooking();
    const itinerary = factory.createItinerary();
    const invoice = factory.createInvoice();

    console.log(booking.book())
    console.log(itinerary.display())
    console.log(invoice.generate())
}

console.log(" --- Flight Booking ---")
clientCode(new FlightProviderFactory())

console.log("\n --- Hotel Booking ---")
clientCode(new HotelProviderFactory())