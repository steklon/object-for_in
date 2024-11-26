import orderByProps from "../orderByProps";

describe('checking the orderByProps function', () => {
  test('checking sorting in order and alphabetically', () => {
    const expectedResult = [
      {key: "name", value: "мечник"},
      {key: "level", value: 2},
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10}
    ];
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const borderOfProperties = ["name", "level"];

    expect(orderByProps(obj, borderOfProperties)).toEqual(expectedResult);
  });

  test('checking for empty object', () => {
    const obj = {};
    const borderOfProperties = ["attack", "health", "name", "defence", "level"];

    expect(orderByProps(obj, borderOfProperties)).toEqual([]);
  });
});