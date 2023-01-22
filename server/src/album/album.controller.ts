import { Controller, Get, Param, Post } from "@nestjs/common/decorators";
import exp from "constants";
import { ObjectId } from "mongoose";
import { AlbumService } from "./album.service";

@Controller('/albums')

export class AlbumController {
    constructor(private albumService: AlbumService) {}
    @Get() 
    getAll() {
        return this.albumService.getAll();
    }
    
    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.albumService.getOne(id)
    }
}