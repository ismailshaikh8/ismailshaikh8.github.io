import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USERNAME;

console.log("Testing with user:", username);

if (!token || !username) {
  console.error("Missing GITHUB_TOKEN or GITHUB_USERNAME in .env");
  process.exit(1);
}

const query = {
  query: `
    query {
      user(login: "${username}") {
        name
        url
      }
    }
  `,
};

fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${token}`,
  },
  body: JSON.stringify(query),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.errors) {
      console.error("GraphQL errors:", JSON.stringify(data.errors, null, 2));
    } else {
      console.log("GraphQL data:", data.data);
    }
  })
  .catch((err) => {
    console.error("Fetch error:", err);
  });
