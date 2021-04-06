import { ViewportScroller } from '@angular/common';
import { ElementRef, ViewChild } from '@angular/core';
import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit   {
  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}

  
  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
}
}

