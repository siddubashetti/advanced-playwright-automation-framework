import { test, expect } from "playwright/test"

test.describe("Request chaining Tests", () => {
    // Create a new user and use the userId for subsequent requests
    test("Chaining API Requests", async ({ request }) => {
        // Step 1: Create a new user
        const postResponse = await request.post("https://reqres.in/api/users", {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            },
            data: {
                name: "Siddu",
                job: "QA Engineer"
            }
        })

        expect(postResponse.status()).toBe(201);
        const postBody = await postResponse.json();
        console.log("POST Response:", postBody);
        expect(postBody).toHaveProperty("id");

        const userId = postBody.id;
        console.log("Created User ID:", userId);

        // Step 2: Get the details of the created user using the userId from the previous response
        const userResponse = await request.get(`https://reqres.in/api/users/${userId}`, {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            },
        });
        expect(userResponse.status()).toBe(200);
        console.log("GET Response:", await userResponse.json());
        const userBody = await userResponse.json();
        console.log("GET Response:", userBody);

    })

    //Chaining API Requests with GET and validating the response headers
    test("Chaining API Requests with Get", async ({ request }) => {
        // Step 1: Get the list of users
        const userId = 2;
        const getResponse = await request.get(`https://reqres.in/api/users/${userId}`, {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            }
        });
        expect(getResponse.status()).toBe(200);
        const getBody = await getResponse.json();
        console.log("GET Response:", getBody);
    })

    //Chaining API Requests with PATCH and validating the response
    test("Chaining API Requests with patch", async ({ request }) => {
        const userId = 2;
        const patchResponse = await request.patch(`https://reqres.in/api/users/${userId}`, {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            },
            data: {
                name: "Siddu Updated",
                job: "Senior QA Engineer"
            }
        });
        expect(patchResponse.status()).toBe(200);
        const patchBody = await patchResponse.json();
        console.log("PATCH Response:", patchBody);
    })

    //Chaining API Requests with put and validating the response
    test("Chaining API Requests with put", async ({ request }) => {
        const userId = 2;
        const putResponse = await request.put(`https://reqres.in/api/users/${userId}`, {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            },
            data: {
                name: "Sidd",
                job: "Lead QA Engineer"
            }
        });
        console.log(putResponse.headers());
        expect(putResponse.status()).toBe(200);
        const putBody = await putResponse.json();
        console.log("PUT Response:", putBody);
    })

    //Chaining API Requests with delete and validating the response
    test("Chaining API Requests with delete", async ({ request }) => {
        const userId = 2;
        const deleteResponse = await request.delete(`https://reqres.in/api/users/${userId}`, {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            }
        });
        console.log("DELETE Response Status:", deleteResponse.status());
        expect(deleteResponse.status()).toBe(204);

    })

    //Chaining API Requests with GET and validating the response headers
    test("Chaining API Requests with Headers validation", async ({ request }) => {
        const userId = 2;

        const getResponse = await request.get(`https://reqres.in/api/users/${userId}`, {
            headers: {
                "x-api-key": "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
            }
        })

        const getResponseHeaders = getResponse.headers();
        console.log("GET Response Headers:", getResponseHeaders);
        expect(getResponseHeaders["content-type"]).toBe('application/json; charset=utf-8')
        expect(getResponseHeaders).toHaveProperty("server")

    })

})