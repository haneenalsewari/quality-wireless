const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { google } = require("googleapis");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const scopes = ["https://www.googleapis.com/auth/business.manage"];

app.get("/", (req, res) => {
  res.send("Quality Wireless reviews server is running.");
});

app.get("/auth/google", (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: scopes,
  });

  res.redirect(authUrl);
});

app.get("/auth/google/callback", async (req, res) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).send("Missing authorization code.");
    }

    const { tokens } = await oauth2Client.getToken(code);

    console.log("SAVE THIS REFRESH TOKEN:");
    console.log(tokens.refresh_token);

    res.send(`
      <h1>Google connected successfully.</h1>
      <p>Go back to your terminal and copy the refresh token.</p>
      <p>Do not share it publicly.</p>
    `);
  } catch (error) {
    console.error("OAuth callback error:", error);
    res.status(500).send("Failed to connect Google.");
  }
});

app.get("/api/test-google", async (req, res) => {
  try {
    const accountManagement = google.mybusinessaccountmanagement({
      version: "v1",
      auth: oauth2Client,
    });

    const response = await accountManagement.accounts.list();

    res.json({
      success: true,
      accounts: response.data.accounts || [],
    });
  } catch (error) {
    console.error("Google test error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "Google connection failed.",
      error: error.response?.data || error.message,
    });
  }
});

app.get("/api/reviews", async (req, res) => {
  res.json({
    message: "Reviews endpoint is working. Next step is connecting the actual Business Profile location.",
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
});