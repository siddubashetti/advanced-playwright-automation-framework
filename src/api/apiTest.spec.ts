import { test, expect } from "playwright/test";

test.describe.serial("API Tests", () => {
    // Basic API tests for GET and validating the response body
    test("GET Request Test", async ({ request }) => {
        const response = await request.get("https://reqres.in/api/users", {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            }
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        // console.log(responseBody);
        expect(responseBody).toHaveProperty("page", 1);

    })

    // Basic API tests for POST and validating the response body
    test("POST Request Test", async ({ request }) => {
        const response = await request.post("https://reqres.in/api/users", {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            },
            data: {
                name: "John Doe",
                job: "Software Engineer"
            }
        });
        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        console.log(responseBody);
        expect(responseBody).toHaveProperty("id");
        expect(responseBody).toHaveProperty("createdAt");
        expect(responseBody.name).toBe("John Doe");
        expect(responseBody.job).toBe("Software Engineer");
    });

    // Basic API tests for PUT and validating the response body
    test("PUT Request Test", async ({ request }) => {
        const response = await request.put("https://reqres.in/api/users/2", {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            },
            data: {
                name: "Jane Does",
                job: "Product Manager"
            }
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log(responseBody);

        expect(responseBody).toHaveProperty("updatedAt");
        expect(responseBody.name).toBe("Jane Does");
        expect(responseBody.job).toBe("Product Manager");
    });

    // Basic API tests for PATCH and validating the response status
    test("PATCH Request Test", async ({ request }) => {
        const response = await request.patch("https://reqres.in/api/users/2", {

            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            },
            data: {
                name: "Siddharth Singh",
                job: "Product Manager"
            }

        })
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log(responseBody);
        expect(responseBody).toHaveProperty("updatedAt");
        expect(responseBody.name).toBe("Siddharth Singh");
        expect(responseBody.job).toBe("Product Manager");
    });

    // Basic API tests for DELETE and validating the response status
    test("DELETE Request Test", async ({ request }) => {

        const response = await request.delete("https://reqres.in/api/users/2", {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            },
            data: {
                name: "Siddharth Singh",
                job: "Product Manager"
            }
        });
        expect(response.status()).toBe(204);
        const responseBody = await response.json();
        console.log(responseBody);
    });

    // Query Parameter : filtering , pagination, searching, sorting
    test("GET Request with Query Parameters", async ({ request }) => {
        const response = await request.get("https://reqres.in/api/users?page=1", {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            }
        })
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log(responseBody);
        expect(responseBody).toHaveProperty("page", 1);
        expect(responseBody).toHaveProperty("total_pages", 2);
    });
});