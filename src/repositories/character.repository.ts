import { CharacterModel } from "../models/Character";

export class CharacterRepository {

    create(data: any) {
        return CharacterModel.create(data);
    }

    findAll() {
        return CharacterModel.find().populate("bestFriend");
    }

    findById(id: string) {
        return CharacterModel.findById(id)
            .populate("bestFriend");
    }

    update(id: string, data: any) {
        return CharacterModel.findByIdAndUpdate(
            id,
            data,
            { new: true }
        );
    }

    delete(id: string) {
        return CharacterModel.findByIdAndDelete(id);
    }
}