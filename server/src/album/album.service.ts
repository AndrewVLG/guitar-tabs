import { Injectable } from "@nestjs/common/decorators";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Tab, TabDocument } from "src/tab/shemas/tab.shema";
import { Album, AlbumDocument } from "./shemas/album.schema";

@Injectable()

export class AlbumService {
    constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>, @InjectModel(Tab.name) private tabModel: Model<TabDocument>) {}
    async getAll():Promise<Album[]> {
        const albums = await this.albumModel.find()
        return albums;
    }

    async getOne(id: ObjectId):Promise<Album> {
      const album = await this.albumModel.findById(id).populate('tabs');
      console.log(album)
      return album;
    }

};
    