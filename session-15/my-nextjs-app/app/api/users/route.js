export async function GET(req) {
  try {
    // Retrieve the user
    const userObject = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      isStudent: false,
      address: {
        street: "123 Main St",
        city: "Perth",
        zipCode: "6000",
      },
      skills: ["JavaScript", "HTML", "CSS"],
      socialProfiles: {
        twitter: "@johndoe",
        linkedIn: "linkedin.com/in/johndoe",
      },
      isEmployed: true,
    };

    // Return the user object as a JSON response
    return new Response(JSON.stringify(userObject), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
