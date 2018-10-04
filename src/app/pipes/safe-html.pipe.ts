import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'appSafeHTML'
})
export class SafeHtmlPipe implements PipeTransform {

    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    constructor(private sanitizer: DomSanitizer) { }

}
