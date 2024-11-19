import getHealthStatus from '../healthStatus';

describe('Health Status Tests', () => {
  test('should return "healthy" for health > 50', () => {
    const result = getHealthStatus({ name: 'Маг', health: 90 });
    expect(result).toBe('healthy');
  });

  test('should return "wounded" for 15 <= health <= 50', () => {
    const result = getHealthStatus({ name: 'Маг', health: 50 });
    expect(result).toBe('wounded');
  });

  test('should return "critical" for health < 15', () => {
    const result = getHealthStatus({ name: 'Маг', health: 10 });
    expect(result).toBe('critical');
  });
});
