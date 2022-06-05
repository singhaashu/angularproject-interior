import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
@HostBinding('style.border')border:any;
constructor(private er:ElementRef){
  this.er.nativeElement.style.color='white';
  this.er.nativeElement.style.backgroundColor='red';
}
  @HostListener('mouseover')onHover(){
    this.er.nativeElement.style.color='yellow';
    this.border='2px solid red';
  }
@HostListener('mouseout') onMouseOut(){
  this.er.nativeElement.style.color='black';
  this.er.nativeElement.style.padding='20px';
  this.border='2px dashed blue';
}
}
