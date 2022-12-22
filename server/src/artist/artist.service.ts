import { Injectable } from "@nestjs/common/decorators";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Album, AlbumDocument } from "src/album/shemas/album.schema";
import { Artist, ArtistDocument } from "./schema/artist.schema";

@Injectable()

export class ArtistService {
    constructor(@InjectModel(Artist.name) private artistModel: Model<ArtistDocument>, @InjectModel(Album.name) private albumModel: Model<AlbumDocument>) {}
    async getAll() {
        const artists = await this.artistModel.find();
        return artists;
    }

    async getOne(id: ObjectId) {
        const album = await this.artistModel.findById(id).populate('albums');
        return album;
    }
}