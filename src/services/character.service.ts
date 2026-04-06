import { CharacterRepository } from "../repositories/character.repository";
import { ArtifactRepository } from "../repositories/artifact.repository";

export class CharacterService {
    private repo = new CharacterRepository();
    private artifactRepo = new ArtifactRepository();

    async create(data: any) {
        if (!data.name) throw new Error("name is required");
        return this.repo.create(data);
    }

    async getAll() {
        return this.repo.findAll();
    }

    async getById(id: string) {
        return this.repo.findById(id);
    }

    async delete(id: string) {
        await this.artifactRepo.removeOwner(id);
        return this.repo.delete(id);
    }
}