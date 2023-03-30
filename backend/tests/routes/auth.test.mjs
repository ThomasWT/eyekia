import request from "supertest";
import {app, server} from "../../index.mjs";

describe("Login with a valid username and password", () => {
  afterAll(() => {
    server.close()
  })

  test("should return a JWT token on successful login", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ username: "thomas", password: "123" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  test("should return a 401 error on incorrect login credentials", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ username: "thomas", password: "wrongpassword" });

    expect(response.status).toBe(401);
  });

  test("test token validation", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ username: "thomas", password: "123" });

    expect(response.status).toBe(200);
    const tokenvalidation = await request(app)
      .post("/auth/validatetoken")
      .send({ token: response.body.token });

    expect(tokenvalidation.status).toBe(200);
  });
});
