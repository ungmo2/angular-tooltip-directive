import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="tooltip-example">
      <div tooltip="tootip on left" placement="left" delay="500">Angular tootip on left</div>
      <div tooltip="tootip on top" placement="top" delay="500">Angular tootip on top</div>
      <div tooltip="tootip on bottom" placement="bottom" delay="500">Angular tootip on bottom</div>
      <div tooltip="tootip on right" placement="right" delay="500">Angular tootip on right</div>
    </div>
  `,
  styles: [`
    .tooltip-example {
      text-align: center;
      padding: 0 50px;
    }

    .tooltip-example [tooltip] {
      display: inline-block;
      margin: 50px 20px;
      width: 180px;
      height: 50px;
      border: 1px solid gray;
      border-radius: 5px;
      line-height: 50px;
      text-align: center;
    }

    .ng-tooltip {
      position: absolute;
      max-width: 150px;
      font-size: 14px;
      text-align: center;
      color: #f8f8f2;
      padding: 3px 8px;
      background: #282a36;
      border-radius: 4px;
      z-index: 1000;
      opacity: 0;
    }

    .ng-tooltip:after {
      content: "";
      position: absolute;
      border-style: solid;
    }

    .ng-tooltip-top:after {
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-color: black transparent transparent transparent;
    }

    .ng-tooltip-bottom:after {
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-color: transparent transparent black transparent;
    }

    .ng-tooltip-left:after {
      top: 50%;
      left: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-color: transparent transparent transparent black;
    }
    .ng-tooltip-right:after {
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-color: transparent black transparent transparent;
    }

    .ng-tooltip-show {
      opacity: 1;
    }
  `]
})
export class AppComponent {}
