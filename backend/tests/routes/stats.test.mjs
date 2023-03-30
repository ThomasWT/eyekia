import request from "supertest";
import app from "../../index.mjs";
const token = await request(app)
      .post("/auth/login")
      .send({ username: "thomas", password: "123" });

describe("Test KPIs for the Overview dashboard", () => {
  test("Should get metrics", async () => {
    const response = await request(app).get("/stats/overview/kpis").set({ 'authorization': token.body.token });
    expect(response.status).toBe(200);
    
  });

});
