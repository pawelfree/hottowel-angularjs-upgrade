import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  Output,
  ContentChild
} from '@angular/core';

// TODO: Remove the following after all consuming entities have been upgraded:
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'ht-sidebar',
  template: ' <ng-content></ng-content>'
})
export class HtSidebarComponent implements AfterViewInit {
  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    const nativeElement = this.element.nativeElement;
    const $sidebarInner = nativeElement.querySelector('.sidebar-inner');
    const $dropdownElement = nativeElement.querySelector('.sidebar-dropdown a');

    nativeElement.classList.add('sidebar');

    $dropdownElement.addEventListener('click', (e) => {
      const dropClass = 'dropy';
      e.preventDefault();

      if (!$dropdownElement.classList.contains(dropClass)) {
        $sidebarInner.classList.add(dropClass);
        $dropdownElement.classList.add(dropClass);
      } else if ($dropdownElement.classList.contains(dropClass)) {
        $dropdownElement.classList.remove(dropClass);
        $sidebarInner.classList.remove(dropClass);
      }
    });
  }
}

// TODO: Remove the following after all consuming entities have been upgraded:
angular
  .module('app.layout')
  .directive(
    'htSidebar',
    downgradeComponent({ component: HtSidebarComponent })
  );
