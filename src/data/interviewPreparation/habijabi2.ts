const hello = [
  {
    questions: [``],
    answers: [``],
    hints: [``],
  },
];

class Singleton {
  private static instance: Singleton;
  private static instanceCount: number = 0;

  // Private constructor to prevent instantiation outside the class
  private constructor() {
    // Increment the instance count when an instance is created
    Singleton.instanceCount++;
  }

  // Public method to get the singleton instance
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Example method of the singleton instance
  public showMessage(): void {
    console.log("Hello, I am a Singleton!");
  }

  // Public method to get the count of instances
  public static getCount(): number {
    return Singleton.instanceCount;
  }
}

// Usage example
const singleton1 = Singleton.getInstance();
singleton1.showMessage();

const singleton2 = Singleton.getInstance();

// Both instances should be the same
console.log(singleton1 === singleton2); // true

// Get the count of instances
console.log(Singleton.getCount()); // 1
