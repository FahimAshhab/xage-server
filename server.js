const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // To parse JSON bodies

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdGF0dXMiOiJBY3RpdmF0ZWQiLCJSb2xlcyI6WyJVc2VyIiwiU3VwZXIgQWRtaW4iXSwiUGVybWlzc2lvbnMiOlsiQURNSU5fQUNDRVNTIiwiTUFOQUdFX0NPTkZJR1VSQVRJT04iLCJNQU5BR0VfRERTIiwiTUFOQUdFX0RFVklDRSIsIk1BTkFHRV9ORVRXT1JLX1JFU09VUkNFIiwiTUFOQUdFX1BPTElDWSIsIk1BTkFHRV9TSVRFIiwiTUFOQUdFX1VTRVIiLCJWSUVXX0FVRElUIiwiVklFV19DT05GSUdVUkFUSU9OIiwiVklFV19ERFMiLCJWSUVXX0RFVklDRSIsIlZJRVdfTkVUV09SS19SRVNPVVJDRSIsIlZJRVdfUE9MSUNZIiwiVklFV19TSVRFIiwiVklFV19VU0VSIl0sIlVSTHMiOlsibm9uZSJdLCJSZXNvdXJjZUhhc2giOiIiLCJOZXh0U3RhdGUiOiJob21lIiwiUHJvdmlkZXIiOiJYYWdlIiwiU2Vzc2lvbklEIjoiIiwiaXNzIjoiWGFnZSBTZWN1cml0eSwgSW5jLiIsImV4cCI6MTc1MDkzNzk2NCwiaWF0IjoxNzUwOTM0MzM0LCJqdGkiOiI4ZTgyNzhjYy04ODVmLTQwNDgtOTJiNi01MjQ1MzU4M2VjMDgifQ.7CcrTA3DvCKfyDaSmYomhRpgG5iFvMhpj090kDtvF9g";
app.post("/traffic", async (req, res) => {
  try {
    const response = await axios.post(
      "https://ztra-bak-xm.xagedemo.com/api/v4/aggregated_traffic",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
      }
    );

    // Send the response back to the client
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to fetch data from the external API" });
  }
});
app.get("/devices", async (req, res) => {
  try {
    const response = await axios.get(
      "https://ztra-bak-xm.xagedemo.com/api/v1/devices",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
      }
    );

    // Send the response back to the client
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to fetch data from the external API" });
  }
});
app.get("/xeps", async (req, res) => {
  try {
    const response = await axios.get(
      "https://ztra-bak-xm.xagedemo.com/api/v1/xeps",

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
      }
    );

    // Send the response back to the client
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to fetch data from the external API" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello Worldd============!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
