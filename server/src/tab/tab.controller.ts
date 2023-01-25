import { Body, Controller, Get, Param, Post } from "@nestjs/common/decorators";
import { ObjectId } from "mongoose";
import { TabService } from "./tab.service";

@Controller('/tabs')

export class TabController {
    constructor(private tabService: TabService) {}
    @Get()
     getAllTabs() {
        return this.tabService.getAllTabs();
    }
    @Get(':id')
     getOneTab(@Param('id') id: ObjectId) {
        return this.tabService.getOneTab(id);
    }
    
}