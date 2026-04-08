const request = require('supertest');
const app = require('./index');

test('GET / should return message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('DevOps Pipeline Working 🚀');
});