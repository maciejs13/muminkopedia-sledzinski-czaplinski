import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import characterRoutes from "./routes/character.routes";
import artifactRoutes from "./routes/artifact.routes";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB error:", err));

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.json({ message: "API Express + TypeScript działa!" });
});

app.use("/api/characters", characterRoutes);
app.use("/api/artifacts", artifactRoutes);

app.listen(3000, () => console.log("Server running"));

export default app;