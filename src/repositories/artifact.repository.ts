import { ArtifactModel } from "../models/Artifact";

export class ArtifactRepository {
    create(data: any) {
        return ArtifactModel.create(data);
    }

    findAll() {
        return ArtifactModel.find().populate("owner");
    }

    removeOwner(characterId: string) {
        return ArtifactModel.updateMany(
            { owner: characterId },
            { owner: null }
        );
    }
}