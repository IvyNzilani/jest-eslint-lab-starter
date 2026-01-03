const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('Utility Functions', () => {

  // Tests for capitalizeWords
  describe('capitalizeWords', () => {
    test('capitalizes the first letter of each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('javascript is fun')).toBe('Javascript Is Fun');
    });

    test('returns empty string when input is empty', () => {
      expect(capitalizeWords('')).toBe('');
    });

    test('capitalizes single word correctly', () => {
      expect(capitalizeWords('hello')).toBe('Hello');
    });
  });

  // Tests for filterActiveUsers
  describe('filterActiveUsers', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false },
      { name: 'Charlie', isActive: true },
    ];

    test('returns only active users', () => {
      expect(filterActiveUsers(users)).toEqual([
        { name: 'Alice', isActive: true },
        { name: 'Charlie', isActive: true },
      ]);
    });

    test('returns empty array if no active users', () => {
      expect(filterActiveUsers([{ name: 'Bob', isActive: false }])).toEqual([]);
    });

    test('returns empty array if input array is empty', () => {
      expect(filterActiveUsers([])).toEqual([]);
    });
  });

  // Tests for logAction
  describe('logAction', () => {
    test('returns a string containing action and username', () => {
      const result = logAction('login', 'Alice');
      expect(result).toMatch(/User Alice performed login at .+/);
    });

    test('timestamp is in valid ISO format', () => {
      const result = logAction('signup', 'Bob');
      const timestamp = result.split(' at ')[1];
      expect(new Date(timestamp).toISOString()).toBe(timestamp);
    });
  });

});
