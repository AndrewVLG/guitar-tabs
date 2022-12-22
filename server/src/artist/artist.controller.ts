import { Controller, Get, Param } from "@nestjs/common/decorators";
import { ObjectId } from "mongoose";
import { ArtistService } from "./artist.service";

@Controller('/artists')

export class ArtistController {
    constructor(private artistService: ArtistService) {}
    @Get()
    getAll() {
        return this.artistService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.artistService.getOne(id);
    }
}