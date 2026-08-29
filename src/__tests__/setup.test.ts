/**
 * Setup verification test
 * Confirms the Jest + TypeScript pipeline is working correctly.
 * Resolves: https://github.com/T4Tier3/Authentication-mircoservices/issues/1
 */

describe('Jest + TypeScript pipeline', () => {
  it('should run a basic assertion successfully', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle TypeScript types without errors', () => {
    const greet = (name: string): string => `Hello, ${name}!`;
    expect(greet('Auth Service')).toBe('Hello, Auth Service!');
  });

  it('should support async/await tests', async () => {
    const asyncValue = await Promise.resolve(42);
    expect(asyncValue).toBe(42);
  });

  it('should support Jest mock functions', () => {
    const mockFn = jest.fn((x: number) => x * 2);
    mockFn(5);
    expect(mockFn).toHaveBeenCalledWith(5);
    expect(mockFn).toHaveReturnedWith(10);
  });
});