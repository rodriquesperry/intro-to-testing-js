
// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit test for the sayHello function
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed' , function () {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(null)).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello("")).toBe('Hello, World!');
    });
});

//Unit test for the isFive function
describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value no matter the input', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should not return true for input "5" ', function () {
    expect(isFive("5")).toBe(false);
    });

});

//Unit test for the isEven function
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with isEven(-4)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed with isEven("banana)', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when executed with isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when executed with isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed with a boolean', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when executed without an argument', function () {
        expect(isEven()).toBe(false);
    });
});

//Unit test for the isVowel function
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value no matter the input.', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when executed with isVowel("a")', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when executed with isVowel("A")', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when executed with isVowel("y")', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when executed with isVowel(4)', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when executed with a boolean', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when executed with isVowel("banana")', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when executed without an argument', function () {
        expect(isVowel()).toBe(false);
    });
})

// Unit test for the add function
describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when executed with add(2, 3)', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when executed with add(-3, -9)', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when executed with add("5", "6")', function () {
        expect(add("5", "6")).toBe(11);
    });
    it('should return 6 when executed with add("-4", "10")', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when executed with add("banana", "split")', function () {
        expect(add("banana", "split")).toBeNaN();
    });
    it('should return NaN when executed with add(2, "apples")', function () {
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN when executed without an argument', function () {
        expect(add()).toBeNaN();
    });
});