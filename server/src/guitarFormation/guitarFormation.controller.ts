import { Controller, Get } from "@nestjs/common";
import { GuitarFormationService } from "./guitarFormation.service";

@Controller('/formations')

export class GuitarFormationController {

    constructor(private formations: GuitarFormationService) {}
    @Get()
    getAll() {
        return this.formations.getAll();
    }
}