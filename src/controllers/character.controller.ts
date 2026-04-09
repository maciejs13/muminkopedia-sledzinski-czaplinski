import { Request, Response } from "express";
import { CharacterService } from "../services/character.service";

export class CharacterController {
    private service = new CharacterService();

    async create(req: Request, res: Response) {
        try {
            const character = await this.service.create(req.body);
            res.status(201).json(character);
        } catch (err: any) {
            res.status(400).json({error: err.message});
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const characters = await this.service.getAll();
            res.json(characters);
        } catch (err: any) {
            res.status(500).json({error: err.message});
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const idParam = req.params.id;

            const id = Array.isArray(idParam) ? idParam[0] : idParam;
            if (!id) return res.status(400).json({error: "ID is required"});

            const character = await this.service.getById(id);
            if (!character) return res.status(404).json({error: "Character not found"});

            res.json(character);
        } catch (err: any) {
            res.status(500).json({error: err.message});
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const idParam = req.params.id;
            const id = Array.isArray(idParam) ? idParam[0] : idParam;
            if (!id) return res.status(400).json({error: "ID is required"});

            const deleted = await this.service.delete(id);
            if (!deleted) return res.status(404).json({error: "Character not found"});

            res.json({message: "Character deleted successfully"});
        } catch (err: any) {
            res.status(500).json({error: err.message});
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
                    error: "Character not found"
                });

            res.json(updated);

        } catch (err: any) {

            res.status(500).json({
                error: err.message
            });

        }
    }

}