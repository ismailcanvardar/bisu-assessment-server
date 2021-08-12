const request = require("supertest");
const app = require("../app");

describe("Test the subscription router", () => {
  test("Should fetch customer info by given phone number parameter", () => {
    return request(app)
      .get("/api/getCustomerInfo/5332858530")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("Should give error for unknown phone number parameter", () => {
    return request(app)
      .get("/api/getCustomerInfo/1234567890")
      .then((response) => {
        expect(response.statusCode).toBe(403);
        expect(response.body.message).toBe(
          "Belirtilen telefona ait kayıt bulunamamıştır."
        );
      });
  });

  test("Should fetch subscription orders by given subscriptionId parameter", () => {
    return request(app)
      .get("/api/getSubscriptionOrders/abc123")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("Should give error for unknown subscriptionId parameter", () => {
    return request(app)
      .get("/api/getSubscriptionOrders/abc999")
      .then((response) => {
        expect(response.statusCode).toBe(403);
      });
  });
});
