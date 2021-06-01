/**
 * Creator class declares the factory method that issupposed to return an object of a Product class.
 * The Creator's subclasses usually provide the implementation of this method.
 */
abstract class Creator {
    // Note: Creator may also provide some default implementation of factory method
    public abstract factoryMethod(): Product;

    /**
     * Creator class primary responsibility is not creating products.
     * Usually contains core business logic that relies on Product objects returned by factory method.
     * Subclasses can indirectly change business logic by overriding factory method and return a different type of product.
     * @returns string
     */
    public someOperation(): string {
        // Call factory method to create product object
        const product = this.factoryMethod();
        // Use the product
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

/**
 * Concrete Creator override factoryMethod in order to change resulting product's type.
 */
class ConcreteCreator1 extends Creator {
    // Note: Signature of method still uses abstract product type, even though concrete product is returned from this method.
    // This was the Creator can stay independent of concreteProduct classes.
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

/**
 * Product Interfact: Declares operations that all concreteProducts must implement.
 */
interface Product {
    operation(): string;
}

/**
 * ConcreteProduct provide various implementations of the Product interface.
 */
class ConcreteProduct1 implements Product {
    public operation(): string {
        return `{Result of the ConcreteProduct1}`;
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return `{Result of the ConcreteProduct2}`;
    }
}

/**
 * Client code works with instance of a ConcreteCreator, albeit through its base interface.
 * As long as client works with creator via base interface, you can pass it any creator's subclass.
 * @param creator 
 */
export const clientCode = (creator: Creator): void => {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

// The Application picks a creator's type depending on the configuration or environment.
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());
console.log('');