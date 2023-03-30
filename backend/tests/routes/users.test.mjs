import request from "supertest";
import {app, server} from "../../index.mjs";


const token = await request(app)
      .post("/auth/login")
      .send({ username: "thomas", password: "123" });

describe("Get users", () => {
  
  afterAll(() => {
    server.close()
  })
  test("Get all users", async () => {
    const response = await request(app).get("/users/").set({ 'authorization': token.body.token });
    expect(response.status).toBe(200);
  });

  test("Get a single user", async () => {
    const response = await request(app).get("/users/user/6422041965414062c9151dd3").set({ 'authorization': token.body.token });
    expect(response.status).toBe(200);
  });

  test("Get a list of managers", async () => {
    const response = await request(app).get("/users/managers").set({ 'authorization': token.body.token });
    expect(response.status).toBe(200);
  });
});
