import { ArtifactRepository } from "../repositories/artifact.repository";

export class ArtifactService {

    private repo = new ArtifactRepository();

    async create(data: any) {
        if (!data.name)
            throw new Error("name is required");

        return this.repo.create(data);
    }

    async getAll() {
        return this.repo.findAll();
    }

    async getById(id: string) {
        return this.repo.findById(id);
    }

    async update(id: string, data: any) {
        return this.repo.update(id, data);
    }

    async delete(id: string) {
        return this.repo.delete(id);
    }
}