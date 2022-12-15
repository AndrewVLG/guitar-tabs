import { Injectable } from "@nestjs/common/decorators";
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
@Injectable()

export class FileService {

    createFile(file) {
        const fileExtension = file.originalname.split('.').pop()
        const fileName = uuid.v4() + '.' +  fileExtension
        const filePath = path.resolve(__dirname, '..', 'static', fileName)
    }
}