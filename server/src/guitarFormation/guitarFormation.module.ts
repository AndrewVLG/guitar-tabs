import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GuitarFormationController } from "./guitarFormation.controller";
import { GuitarFormationService } from "./guitarFormation.service";
import { GuitarFormation, GuitarFormationSchema } from "./schema/guitarFormation.schema";

@Module({
    controllers: [GuitarFormationController],
    providers: [GuitarFormationService],
    imports: [
        MongooseModule.forFeature([{name:GuitarFormation.name, schema: GuitarFormationSchema}]),
    ]
})

export class GuitarFormationModule {}