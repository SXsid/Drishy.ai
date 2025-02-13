import express from "express";
import dotenv from "dotenv";
import aiRoutes from "./routes/aiRoute";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
