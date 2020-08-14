const sum = require ('./sum.js')

//import sum from './sum'

test('sums 1 and 1', () => {
  expect(sum(1,1)).toBe(2)
})

test('sums 0 and 0', () => {
  expect(sum(0,0)).toBe(0)
})

test('sums 20 and 30', () => {
  expect(sum(20,30)).toBe(50)
})

test('sums 20 and 22', () => {
  expect(sum(20,22)).toBe(42)
})

test('sums 10 and 10', () => {
  expect(sum(10,10)).toBe(20)
})



