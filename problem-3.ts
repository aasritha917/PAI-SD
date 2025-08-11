interface IPaymentStrategy{
    pay(amount: number): void;
    validateDetails(details: object): boolean;
}

class CreditCardPayent implements IPaymentStrategy{
    private details:any;
    validateDetails(details: object): boolean {
        const { cardNumber , expiryDate , cvv } = details as any
        if(cardNumber && expiryDate && cvv){
            this.details = details
            return false
        }
        console.log("Credit card validation failed.")
        return false
    }
    pay(amount: number): void{
        const finalAmount = amount * 1.015;
        console.log(`Pais ${finalAmount.toFixed(2)} using Credit Card ending with ${this.details.cardNumber.slice(-4)}`)
    }

}

class PayPalPayment implements IPaymentStrategy{
    private details: any;
    
    validateDetails(details: object): boolean {
        const { email } = details as any
        if(email && /\S+@\S+\.\S+/.test(email)){
            this.details = details
            return true
        }
        console.log("PayPal validation failed.")
        return false
    }
    pay(amount: number): void {
      const finalAmount = amount *1.025;
      console.log(`Paid ${finalAmount.toFixed(2)} using Paypal account ${this.details.email}`)
    }
}

class CryptoPayment implements IPaymentStrategy{
    private details: any;

    validateDetails(details: object): boolean {
        const {walletAddress} = details as any
        if(walletAddress){
            this.details = details
            return true
        }
        console.log("Crypto validation failed.")
        return false
    }
    pay(amount: number): void {
        const finalAmount = amount + 50
        console.log(`paid ${finalAmount.toFixed(2)} in crypto from wallet ${this.details.walletAddress}`)
    }
}

class PaymentProcessor{
    private strategy: IPaymentStrategy | null = null;

    setStrategy(strategy: IPaymentStrategy){
        this.strategy = strategy
    }
    processPayment(details: object, amount: number){
        if(!this.strategy){
            console.log("Payent strategy not set.")
            return
        }
        if(this.strategy.validateDetails(details)){
            this.strategy.pay(amount)
        }
        else{
            console.log("Payment failed due to invalid details.")
        }
    }
}

const processor = new PaymentProcessor();

processor.setStrategy(new CreditCardPayent())
processor.processPayment({cardNumber:"1234567899876543210" , expireDate: "12/26", cvv:"123"},5000);

processor.setStrategy(new PayPalPayment())
processor.processPayment({email: " invalid-email"}, 2000)

processor.processPayment({email: "user@gmail.com"},2000)

processor.setStrategy(new CryptoPayment())
processor.processPayment({walletAddress: "0a1254684fw3sg1t6e"},1500)