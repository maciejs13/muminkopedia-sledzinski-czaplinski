import { ArtifactRepository } from "../repositories/artifact.repository";

export class ArtifactService {
    private repo = new ArtifactRepository();

    async create(data: any) {
        if (!data.name) throw new Error("name is required");
        return this.repo.create(data);
    }

    async getAll() {
        return this.repo.findAll();
    }
}