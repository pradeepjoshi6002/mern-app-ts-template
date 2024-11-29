import { calculateDiscountedPrice } from './src/utils';
import request from 'supertest';
import app from './src/app';

describe('App', () => {
  it('should return accurate discounted price', () => {
    const res = calculateDiscountedPrice(100, 10);
    expect(res).toBe('90$');
  });
  it('should return 200 status codde', async () => {
    const res = await request(app).get('/main');
    expect(res.statusCode).toBe(200);
  });
});
