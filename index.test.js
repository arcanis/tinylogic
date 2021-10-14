const {parse} = require(`./index`);

const parameters = new Map([
  [`true`, true],
  [`false`, false],
]);

const queries = [
  [`true | false`, true],
  [`true & false`, false],
  [`true ^ false`, true],
  [`false ^ false`, false],
  [`false & true | true`, true],
];

describe(`parse`, () => {
  for (const [query, result] of queries) {
    it(query, () => expect(parse(query, name => parameters.get(name))).toEqual(result));
  }
});
