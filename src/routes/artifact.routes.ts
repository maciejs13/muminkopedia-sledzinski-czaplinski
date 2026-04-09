import { Router } from "express";
import { ArtifactController } from "../controllers/artifact.controller";

const router = Router();
const artifactController = new ArtifactController();

router.post("/",
    (req, res) =>
        artifactController.create(req, res)
);

router.get("/",
    (req, res) =>
        artifactController.getAll(req, res)
);

router.get("/:id",
    (req, res) =>
        artifactController.getById(req, res)
);

router.put("/:id",
    (req, res) =>
        artifactController.update(req, res)
);

router.delete("/:id",
    (req, res) =>
        artifactController.delete(req, res)
);

export default router;