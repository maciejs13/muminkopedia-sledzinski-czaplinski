import { Request, Response } from "express";
import { ArtifactService } from "../services/artifact.service";

export class ArtifactController {

    private service = new ArtifactService();

    async create(req: Request, res: Response) {
        try {

            const artifact =
                await this.service.create(req.body);

            res.status(201).json(artifact);

        } catch (err: any) {

            res.status(400).json({
                error: err.message
            });

        }
    }

    async getAll(req: Request, res: Response) {
        try {

            const artifacts =
                await this.service.getAll();

            res.json(artifacts);

        } catch (err: any) {

            res.status(500).json({
                error: err.message
            });

        }
    }

    async getById(req: Request, res: Response) {
        try {

            const idParam = req.params.id;

            const id = Array.isArray(idParam)
                ? idParam[0]
                : idParam;

            if (!id)
                return res.status(400).json({
                    error: "ID is required"
                });

            const artifact =
                await this.service.getById(id);

            if (!artifact)
                return res.status(404).json({
                    error: "Artifact not found"
                });

            res.json(artifact);

        } catch (err: any) {

            res.status(500).json({
                error: err.message
            });

        }
    }

    async update(req: Request, res: Response) {
        try {

            const idParam = req.params.id;

            const id = Array.isArray(idParam)
                ? idParam[0]
                : idParam;

            if (!id)
                return res.status(400).json({
                    error: "ID is required"
                });

            const updated =
                await this.service.update(id, req.body);

            if (!updated)
                return res.status(404).json({
                    error: "Artifact not found"
                });

            res.json(updated);

        } catch (err: any) {

            res.status(500).json({
                error: err.message
            });

        }
    }

    async delete(req: Request, res: Response) {
        try {

            const idParam = req.params.id;

            const id = Array.isArray(idParam)
                ? idParam[0]
                : idParam;

            if (!id)
                return res.status(400).json({
                    error: "ID is required"
                });

            const deleted =
                await this.service.delete(id);

            if (!deleted)
                return res.status(404).json({
                    error: "Artifact not found"
                });

            res.json({
                message: "Artifact deleted successfully"
            });

        } catch (err: any) {

            res.status(500).json({
                error: err.message
            });

        }
    }
}