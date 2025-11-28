/**
 * GETTERS and SETTERS in TypeScript:
 * 
 * Getters: Methods that retrieve/access property values
 * - Defined using the 'get' keyword
 * - Called like a property (no parentheses): obj.propertyName
 * - Used to control access to private properties or compute values
 * 
 * Setters: Methods that set/assign property values
 * - Defined using the 'set' keyword
 * - Called like a property assignment: obj.propertyName = value
 * - Used to validate or transform values before setting
 */

class Person {
    // Private properties - cannot be accessed directly from outside
    private _firstName: string;
    private _lastName: string;
    private _age: number;
    private _email: string;

    constructor(firstName: string, lastName: string, age: number, email: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._email = email;
    }

    // GETTER: Retrieves the firstName value
    // Called like: person.firstName (not person.firstName())
    get firstName(): string {
        console.log("Getter: firstName accessed");
        return this._firstName;
    }

    // SETTER: Sets the firstName value with validation
    // Called like: person.firstName = "John" (not person.firstName("John"))
    set firstName(value: string) {
        if (value.trim().length === 0) {
            throw new Error("First name cannot be empty");
        }
        console.log(`Setter: firstName changed from "${this._firstName}" to "${value}"`);
        this._firstName = value;
    }

    // GETTER for lastName
    get lastName(): string {
        return this._lastName;
    }

    // SETTER for lastName with validation
    set lastName(value: string) {
        if (value.trim().length === 0) {
            throw new Error("Last name cannot be empty");
        }
        this._lastName = value;
    }

    // GETTER: Computed property - returns full name
    // This is a read-only property (no setter)
    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    // GETTER for age
    get age(): number {
        return this._age;
    }

    // SETTER for age with validation
    set age(value: number) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        if (value > 150) {
            throw new Error("Age seems unrealistic");
        }
        this._age = value;
    }

    // GETTER for email
    get email(): string {
        return this._email;
    }

    // SETTER for email with validation
    set email(value: string) {
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            throw new Error("Invalid email format");
        }
        this._email = value;
    }

    // GETTER: Computed property - returns age category
    // Read-only property (no setter)
    get ageCategory(): string {
        if (this._age < 18) return "Minor";
        if (this._age < 65) return "Adult";
        return "Senior";
    }
}

// Example usage
console.log("=== Creating a Person ===");
const person = new Person("John", "Doe", 25, "john.doe@example.com");

// Using GETTERS - access like properties (no parentheses)
console.log("\n=== Using Getters ===");
console.log(person.firstName);        // Calls getter - outputs: "Getter: firstName accessed" then "John"
console.log(person.lastName);         // Calls getter - outputs: "Doe"
console.log(person.fullName);         // Calls getter - outputs: "John Doe" (computed)
console.log(person.age);              // Calls getter - outputs: 25
console.log(person.email);            // Calls getter - outputs: "john.doe@example.com"
console.log(person.ageCategory);      // Calls getter - outputs: "Adult" (computed)

// Using SETTERS - assign like properties
console.log("\n=== Using Setters ===");
person.firstName = "Jane";            // Calls setter - validates and sets value
person.lastName = "Smith";            // Calls setter
person.age = 30;                      // Calls setter - validates age
person.email = "jane.smith@example.com"; // Calls setter - validates email format

console.log(person.fullName);         // Now outputs: "Jane Smith"
console.log(person.ageCategory);      // Now outputs: "Adult"

// Example with validation errors
console.log("\n=== Validation Examples ===");
try {
    person.age = -5;                  // ❌ Throws error: "Age cannot be negative"
} catch (error) {
    console.log("Error:", error instanceof Error ? error.message : String(error));
}

try {
    person.email = "invalid-email";   // ❌ Throws error: "Invalid email format"
} catch (error) {
    console.log("Error:", error instanceof Error ? error.message : String(error));
}

try {
    person.firstName = "";            // ❌ Throws error: "First name cannot be empty"
} catch (error) {
    console.log("Error:", error instanceof Error ? error.message : String(error));
}

// ============================================
// COMPARISON: Getters/Setters vs Regular Methods
// ============================================

class Temperature {
    private _celsius: number;

    constructor(celsius: number) {
        this._celsius = celsius;
    }

    // Using GETTER/SETTER (more intuitive syntax)
    get celsius(): number {
        return this._celsius;
    }

    set celsius(value: number) {
        this._celsius = value;
    }

    get fahrenheit(): number {
        return (this._celsius * 9/5) + 32;
    }

    set fahrenheit(value: number) {
        this._celsius = (value - 32) * 5/9;
    }

    // Using regular methods (alternative approach)
    getCelsius(): number {
        return this._celsius;
    }

    setCelsius(value: number): void {
        this._celsius = value;
    }

    getFahrenheit(): number {
        return (this._celsius * 9/5) + 32;
    }

    setFahrenheit(value: number): void {
        this._celsius = (value - 32) * 5/9;
    }
}

console.log("\n=== Getters/Setters vs Methods ===");
const temp = new Temperature(25);

// Using getters/setters (cleaner syntax)
console.log(temp.celsius);            // 25 - accessed like property
temp.celsius = 30;                    // Set like property assignment
console.log(temp.fahrenheit);        // 86 - computed value
temp.fahrenheit = 100;                // Automatically converts to celsius

// Using regular methods (more verbose)
console.log(temp.getCelsius());       // 30 - must use parentheses
temp.setCelsius(20);                  // Must call as method
console.log(temp.getFahrenheit());    // 68 - must use parentheses

// ============================================
// READ-ONLY PROPERTY (Getter only, no Setter)
// ============================================

class Product {
    private _price: number;
    private _id: string;

    constructor(id: string, price: number) {
        this._id = id;
        this._price = price;
    }

    // Read-only: Has getter but no setter
    get id(): string {
        return this._id;
    }

    // Can be modified: Has both getter and setter
    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) {
            throw new Error("Price cannot be negative");
        }
        this._price = value;
    }

    // Computed read-only property
    get formattedPrice(): string {
        return `$${this._price.toFixed(2)}`;
    }
}

console.log("\n=== Read-Only Properties ===");
const product = new Product("P001", 99.99);

console.log(product.id);              // ✅ Can read
// product.id = "P002";               // ❌ Error: Cannot assign to 'id' because it is a read-only property

console.log(product.price);           // ✅ Can read
product.price = 149.99;               // ✅ Can modify (has setter)
console.log(product.formattedPrice);  // ✅ Read-only computed property: "$149.99"