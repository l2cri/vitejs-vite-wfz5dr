import { useCounter } from './counter.js';

test('increase counter on call', () => {
  const { counter, increase } = useCounter(9);

  expect(counter.value).toBe(9);

  increase();

  expect(counter.value).toBe(10);
});

test('decrease counter on call', () => {
  const { counter, decrease } = useCounter(2);

  expect(counter.value).toBe(2);

  decrease();

  expect(counter.value).toBe(1);
});
