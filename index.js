import express from "express";const app = express();
const PORT = 4000;app.get("/", (req, res) => {
  res.json({
    message: "Notetaking API v1"
  });
});
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});