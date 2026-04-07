import { Router } from "express";
import { CharacterController } from "../controllers/character.controller";

const router = Router();
const characterController = new CharacterController();

// Endpointy Character
router.post("/", (req, res) => characterController.create(req, res));
router.get("/", (req, res) => characterController.getAll(req, res));
router.get("/:id", (req, res) => characterController.getById(req, res));
router.delete("/:id", (req, res) => characterController.delete(req, res));

export default router;