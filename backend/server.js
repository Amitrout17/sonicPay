const express = require("express");
const app = express();
const port = 4000; // Change as needed
const speech = require("node-speech-to-text");

const cors = require("cors"); // Import the cors package

app.use(express.json());

// Configure CORS to allow requests from http://localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

app.post("/process-voice", async (req, res) => {
  try {
    const { voiceData } = req.body;

    console.log(voiceData);
    res.status(200).json({
      sucess: "true",
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
