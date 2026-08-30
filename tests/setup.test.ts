describe('Jest + TypeScript pipeline', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('should support async/await', async () => {
    const value = await Promise.resolve(42);
    expect(value).toBe(42);
  });

  test('should support mock functions', () => {
    const mockFn = jest.fn((x: number) => x * 2);
    mockFn(5);
    expect(mockFn).toHaveBeenCalledWith(5);
    expect(mockFn).toHaveReturnedWith(10);
  });
});