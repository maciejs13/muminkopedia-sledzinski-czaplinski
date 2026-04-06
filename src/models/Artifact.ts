import { Schema, model, Types } from "mongoose";

export interface IArtifact {
    name: string;
    description: string;
    owner: Types.ObjectId | null;
}

const ArtifactSchema = new Schema<IArtifact>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "Character", required: true },
});

export const ArtifactModel = model<IArtifact>("Artifact", ArtifactSchema);