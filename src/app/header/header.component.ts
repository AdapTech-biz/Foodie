import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "app-header",
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    @Output() navLink = new EventEmitter<String>();

    selectedLink(name: String) {
        this.navLink.emit(name);
    }
}