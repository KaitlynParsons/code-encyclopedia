"use strict";
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
exports.__esModule = true;
exports.clientCode = void 0;
/**
 * Creator class declares the factory method that issupposed to return an object of a Product class.
 * The Creator's subclasses usually provide the implementation of this method.
 */
var Creator = /** @class */ (function () {
    function Creator() {
    }
    /**
     * Creator class primary responsibility is not creating products.
     * Usually contains core business logic that relies on Product objects returned by factory method.
     * Subclasses can indirectly change business logic by overriding factory method and return a different type of product.
     * @returns string
     */
    Creator.prototype.someOperation = function () {
        // Call factory method to create product object
        var product = this.factoryMethod();
        // Use the product
        return "Creator: The same creator's code has just worked with " + product.operation();
    };
    return Creator;
}());
/**
 * Concrete Creator override factoryMethod in order to change resulting product's type.
 */
var ConcreteCreator1 = /** @class */ (function (_super) {
    __extends(ConcreteCreator1, _super);
    function ConcreteCreator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Note: Signature of method still uses abstract product type, even though concrete product is returned from this method.
    // This was the Creator can stay independent of concreteProduct classes.
    ConcreteCreator1.prototype.factoryMethod = function () {
        return new ConcreteProduct1();
    };
    return ConcreteCreator1;
}(Creator));
var ConcreteCreator2 = /** @class */ (function (_super) {
    __extends(ConcreteCreator2, _super);
    function ConcreteCreator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator2.prototype.factoryMethod = function () {
        return new ConcreteProduct2();
    };
    return ConcreteCreator2;
}(Creator));
/**
 * ConcreteProduct provide various implementations of the Product interface.
 */
var ConcreteProduct1 = /** @class */ (function () {
    function ConcreteProduct1() {
    }
    ConcreteProduct1.prototype.operation = function () {
        return "{Result of the ConcreteProduct1}";
    };
    return ConcreteProduct1;
}());
var ConcreteProduct2 = /** @class */ (function () {
    function ConcreteProduct2() {
    }
    ConcreteProduct2.prototype.operation = function () {
        return "{Result of the ConcreteProduct2}";
    };
    return ConcreteProduct2;
}());
/**
 * Client code works with instance of a ConcreteCreator, albeit through its base interface.
 * As long as client works with creator via base interface, you can pass it any creator's subclass.
 * @param creator
 */
var clientCode = function (creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
};
exports.clientCode = clientCode;
// The Application picks a creator's type depending on the configuration or environment.
console.log('App: Launched with the ConcreteCreator1.');
exports.clientCode(new ConcreteCreator1());
console.log('');
console.log('App: Launched with the ConcreteCreator2.');
exports.clientCode(new ConcreteCreator2());
console.log('');
