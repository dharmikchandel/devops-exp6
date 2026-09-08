const test = require("node:test");
const assert = require("node:assert");

const {
    add,
    subtract,
    multiply,
    divide
} = require("./calculator");

test("addition of two numbers", () => {
    assert.strictEqual(add(10, 5), 15);
});

test("subtraction of two numbers", () => {
    assert.strictEqual(subtract(10, 5), 5);
});

test("multiplication of two numbers", () => {
    assert.strictEqual(multiply(10, 5), 50);
});

test("division of two numbers", () => {
    assert.strictEqual(divide(10, 5), 2);
});

test("division by zero should throw an error", () => {
    assert.throws(
        () => divide(10, 0),
        {
            message: "Cannot divide by zero"
        }
    );
});