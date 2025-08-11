abstract class CourseSubscription{
    abstract getCost(): number;
    abstract getFeatures(): string[];

}

class BasicSubscription extends CourseSubscription{
    getCost(): number {
        return 499
    }
    getFeatures(): string[] {
        return ["Access to all basic courses"]
    }
}
abstract class SubscriptionDecorate extends CourseSubscription{
    protected subscription: CourseSubscription;
    constructor(subscription: CourseSubscription){
        super()
        this.subscription = subscription
    }
    abstract getCost(): number;
    abstract getFeatures(): string[];
}
class CertificationAddon extends SubscriptionDecorate{
    getCost(): number {
        return this.subscription.getCost()+200
    }
    getFeatures(): string[] {
        return [...this.subscription.getFeatures(),"Official Certificate of Completion"]
    }
}
class DoubtSupportAddon extends SubscriptionDecorate{
    getCost(): number {
        return this.subscription.getCost() + 300
    }
    getFeatures(): string[] {
        return [...this.subscription.getFeatures(),"24/7 Doubt Support via Chat"]
    }
}
class MentorAccessAddon extends SubscriptionDecorate{
    getCost(): number {
        return this.subscription.getCost() + 500
    }
    getFeatures(): string[] {
        return [...this.subscription.getFeatures(),"Weekly 1-on-1 Mentor Sessions"]
    }
}
class DiscountChecker extends SubscriptionDecorate{
    getCost(): number {
        const totalCost = this.subscription.getCost()
        const features = this.subscription.getFeatures()
        const hasDoubtSupport = features.includes("24/7 Doubt Support via Chat")
        const hasMentorAccess = features.includes("Weekly 1-on-1 Mentor Sessions")

        if(hasDoubtSupport && hasMentorAccess){
            return totalCost *0.85
        }
        return totalCost
    }

    getFeatures(): string[] {
        return this.subscription.getFeatures()
    }
}

let sub1 = new CertificationAddon(new BasicSubscription())
console.log("Cost: ", sub1.getCost())
console.log("Features: ", sub1.getFeatures())

let sub2 = new DiscountChecker(
    new MentorAccessAddon(
        new DoubtSupportAddon(
            new CertificationAddon(
                new BasicSubscription()
            )
        )
    )
)

console.log("Cost with Discount:", sub2.getCost())
console.log("Features:",sub2.getFeatures())