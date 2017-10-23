import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({name: 'abbreviate'})
export class AbreviatePipe implements PipeTransform {
    transform(value: string): string {
        return value.length > 38 ? value.substr(0, 35).concat('...') : value;
    }
}