const Weather = require('./mock')
const Json2KV = require('./Json2KV')

test('Simple Math Test', () => {
    let str = Json2KV(Weather)
    console.log(str)
    expect(typeof str).toBe('string')
});