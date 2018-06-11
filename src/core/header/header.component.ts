import { Component, ElementRef, Input, OnChanges, Renderer, SimpleChanges } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {

  @Input() isScrolling = false;
  @Input() scrolledPercent = 0;

  constructor(private eventsService: EventsService, public authService: AuthService, private renderer: Renderer, private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isScrolling && changes.isScrolling.currentValue) {
      this.isScrolling = changes.isScrolling.currentValue;
    }
    if (changes.scrolledPercent && changes.scrolledPercent.currentValue) {
      this.scrolledPercent = changes.scrolledPercent.currentValue;
    }
  }

  emitClickEvent(pageName: string) {
    this.eventsService.emitEvent(pageName);
  }

  onMenuClick() {
    this.renderer.setElementClass(this.el.nativeElement.querySelector('.navbar-collapse'), 'in', false);
  }

}
