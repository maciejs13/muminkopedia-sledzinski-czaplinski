import { Router } from "express";
import { ArtifactController } from "../controllers/artifact.controller";

const router = Router();
const artifactController = new ArtifactController();

router.post("/", (req, res) => artifactController.create(req, res));
router.get("/", (req, res) => artifactController.getAll(req, res));

export default router;