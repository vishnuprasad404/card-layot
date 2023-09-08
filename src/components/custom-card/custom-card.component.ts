import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomCardComponent {
  @Input() canShowViewMore = true;
  @Input() canShowDocument = true;
  @Input() canShowClose = true;
  @Input() singleImage: string;
  @Input() type: string;
  @Input() multiImages: string[];
  @Output() onViewMore = new EventEmitter<void>()
  @Output() onShowDocument = new EventEmitter<void>()
  @Output() onClose = new EventEmitter<boolean>()
  @ContentChild("cardHeader") cardHeader?: TemplateRef<any>;
  @ContentChild("cardBody") cardBody?: TemplateRef<any>;

  canShowActionPanel: boolean = false;

  triggerViewMore(): void {
    this.onViewMore.emit()
  }
  triggerShowDocument(): void {
    this.onShowDocument.emit()
  }
  triggerClose(): void {
    this.canShowActionPanel = true
  }

  onAction(action: boolean): void {
    this.canShowActionPanel = false
    this.onClose.emit(action)
  }

}
