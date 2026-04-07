import { Request, Response } from "express";
import { ArtifactService } from "../services/artifact.service";

export class ArtifactController {
    private service = new ArtifactService();

    async create(req: Request, res: Response) {
        try {
            const artifact = await this.service.create(req.body);
            res.status(201).json(artifact);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const artifacts = await this.service.getAll();
            res.json(artifacts);
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }
}