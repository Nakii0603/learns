

const { plus } = require('./index');

test("plus function", () => {
    expect(plus(3, 6, 9)).toBe(true); // 3 + 6 == 9
    expect(plus(2, 2, 5)).toBe(false); // 2 + 2 != 5
});
test("numbers plus", () => {
    expect(sum(2, 2, 1)).toBe(5);
});