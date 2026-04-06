import { Schema, model, Types } from "mongoose";

export interface ICharacter {
    name: string;
    description: string;
    species: "Muminek" | "Paszczak" | "Miukk" | "Ryjek" | "Inny";
    isHibernating: boolean;
    bestFriend?: Types.ObjectId;
}

const CharacterSchema = new Schema<ICharacter>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    species: { type: String,
        enum: ["Muminek", "Paszczak", "Miukk", "Ryjek", "Inny"] ,
        required: true
    },
    isHibernating: { type: Boolean, default: false },
    bestFriend: { type: Schema.Types.ObjectId, ref: "Character" }
});

export const CharacterModel = model<ICharacter>("Character", CharacterSchema);