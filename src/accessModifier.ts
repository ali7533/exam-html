/**
 * Access Modifiers in TypeScript:
 * - public: Accessible from anywhere (default if not specified)
 * - private: Only accessible within the class itself
 * - protected: Accessible within the class and its subclasses
 */

class BankAccount {
    // PUBLIC: Can be accessed from anywhere (outside the class, in subclasses, etc.)
    // This is the default access modifier if you don't specify one
    public accountNumber: string;
    public accountHolder: string;

    // PRIVATE: Can only be accessed within this class
    // Cannot be accessed from outside the class or even from subclasses
    private balance: number;
    private pin: string;

    // PROTECTED: Can be accessed within this class and any subclasses
    // But cannot be accessed from outside the class hierarchy
    protected transactionHistory: string[];

    constructor(accountNumber: string, accountHolder: string, initialBalance: number, pin: string) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance; // Can access private member within the class
        this.pin = pin;
        this.transactionHistory = []; // Can access protected member within the class
    }

    // PUBLIC method: Can be called from anywhere
    public getBalance(): number {
        return this.balance; // Can access private member within the class
    }

    // PUBLIC method
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount; // Can modify private member within the class
            this.transactionHistory.push(`Deposited $${amount}`); // Can access protected member
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        }
    }

    // PUBLIC method
    public withdraw(amount: number, enteredPin: string): boolean {
        // Can access private member to verify PIN
        if (enteredPin !== this.pin) {
            console.log("Invalid PIN");
            return false;
        }

        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount; // Can modify private member within the class
            this.transactionHistory.push(`Withdrew $${amount}`); // Can access protected member
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
            return true;
        }
        console.log("Insufficient funds or invalid amount");
        return false;
    }

    // PRIVATE method: Can only be called from within this class
    private validateTransaction(amount: number): boolean {
        return amount > 0 && amount <= this.balance;
    }

    // PROTECTED method: Can be called from this class and subclasses
    protected addTransaction(description: string): void {
        this.transactionHistory.push(description);
    }
}

// Subclass demonstrating protected access
class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(accountNumber: string, accountHolder: string, initialBalance: number, pin: string, interestRate: number) {
        super(accountNumber, accountHolder, initialBalance, pin);
        this.interestRate = interestRate;
    }

    // Can access protected member from parent class
    public getTransactionHistory(): string[] {
        return this.transactionHistory; // Protected member accessible in subclass
    }

    // Can call protected method from parent class
    public addInterest(): void {
        const interest = this.getBalance() * this.interestRate;
        this.addTransaction(`Interest added: $${interest}`); // Protected method accessible in subclass
        // Note: We can't directly access this.balance (private) or this.pin (private)
        // We must use public methods like getBalance() or withdraw()
    }
}

// Example usage demonstrating access modifiers
const account = new BankAccount("12345", "John Doe", 1000, "1234");

// PUBLIC members: Can be accessed from outside
console.log(account.accountNumber); // ✅ Works - public
console.log(account.accountHolder); // ✅ Works - public
console.log(account.getBalance()); // ✅ Works - public method

// PRIVATE members: Cannot be accessed from outside
// console.log(account.balance); // ❌ Error - private member
// console.log(account.pin); // ❌ Error - private member
// account.validateTransaction(100); // ❌ Error - private method

// PROTECTED members: Cannot be accessed from outside (only in subclasses)
// console.log(account.transactionHistory); // ❌ Error - protected member
// account.addTransaction("test"); // ❌ Error - protected method

// Using public methods to interact with private/protected members
account.deposit(500);
account.withdraw(200, "1234");

// Example with subclass
const savings = new SavingsAccount("67890", "Jane Smith", 2000, "5678", 0.05);
savings.deposit(300);
savings.addInterest(); // Uses protected method from parent class
console.log(savings.getTransactionHistory()); // Can access protected member through public method
