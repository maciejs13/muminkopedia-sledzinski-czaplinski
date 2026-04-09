import { ArtifactModel } from "../models/Artifact";

export class ArtifactRepository {

    create(data: any) {
        return ArtifactModel.create(data);
    }

    findAll() {
        return ArtifactModel.find().populate("owner");
    }

    findById(id: string) {
        return ArtifactModel.findById(id).populate("owner");
    }

    update(id: string, data: any) {
        return ArtifactModel.findByIdAndUpdate(
            id,
            data,
            { new: true }
        );
    }

    delete(id: string) {
        return ArtifactModel.findByIdAndDelete(id);
    }

    removeOwner(characterId: string) {
        return ArtifactModel.updateMany(
            { owner: characterId },
            { owner: null }
        );
    }
}