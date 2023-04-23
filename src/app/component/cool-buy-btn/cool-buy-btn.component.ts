import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Bodies, Body, Engine, Render, Runner, World} from 'matter-js'
import * as p5 from 'p5';

@Component({
  selector: 'app-cool-buy-btn',
  templateUrl: './cool-buy-btn.component.html',
  styleUrls: ['./cool-buy-btn.component.css']
})
export class CoolBuyBtnComponent {

  @ViewChild('p5_div') p5_div: ElementRef<HTMLDivElement> | undefined;

  width = 240;
  height = 60;

  isEngineRun = false;

  engine = Engine.create();
  ngAfterViewInit() {

    const s = (sketch: any) => {
      // let engine = Engine.create();
      sketch.setup = () => {

        let p5Canvas = sketch.createCanvas(this.width, this.height);
        p5Canvas.parent(this.p5_div?.nativeElement);

        // let p5CanvasIdSelector = '#' + p5Canvas.id();
        let p5CanvasElement = this.p5_div?.nativeElement.querySelector('canvas') as any;
        p5CanvasElement.className = 'rounded-full';

        let render = Render.create({
          canvas: p5CanvasElement,
          engine: this.engine,
          options: {
            width: this.width,
            height: this.height,
            wireframes: false,
            background: 'rgba(0,255,0, 0.25)'
          },
        });
        this.createArrow();
        this.createBaseLine();
        Render.run(render);
      };

      sketch.draw = () => {

      };

    };
    new p5(s);
  }

  startEngine() {
    if (!this.isEngineRun) {
      Runner.run(this.engine); // 啟動物理引擎

      //TODO: 想用一顆球把所有的滑落
      // this.createBall();

      this.isEngineRun = true;
    }
  }

  getABox(x: number, y: number) {
    return Bodies.rectangle(x, y, 10, 10, {
      render: {
        fillStyle: '#000000',
      },
      frictionAir: 0,
      friction: 0.005,
      restitution: 0.9
    });
  }

  createBaseLine() {
    let baseLine = Bodies.rectangle(50, 55, 500, 1, {
      isStatic: true,
      render: {
        fillStyle: '#000000'
      }
    });
    // Body.setAngle(baseLine, 135 );
    World.add(this.engine.world, baseLine);
  }

  createArrow() {
    let arrow: Body[] = [];

    let yIndex = 30;

    let startX = 60;
    for (let i = 0 ; i < 13 ; i++) {
      arrow.push(this.getABox(startX, yIndex));
      startX = startX + 10;
    }

    // 往後退2格造出上方的方塊
    let arrowUpX = startX - 20;
    let arrowUpY = yIndex - 10
    arrow.push(this.getABox(arrowUpX , arrowUpY));

    // 往後退1格造出最上方的方塊
    arrowUpX = arrowUpX - 10;
    arrowUpY = arrowUpY - 10;
    arrow.push(this.getABox(arrowUpX , arrowUpY));

    // 往後退2格 造出下方的方塊
    let arrowDownX = startX - 20;
    let arrowDownY = yIndex + 10
    arrow.push(this.getABox(arrowDownX , arrowDownY));

    // 往後退1格 造出最下方的方塊
    arrowDownX = arrowDownX - 10;
    arrowDownY = arrowDownY + 10;
    arrow.push(this.getABox(arrowDownX , arrowDownY));

    World.add(this.engine.world, arrow);

  }

}


@Component({
  selector: 'app-cool-buy-btn',
  template: ''
})
export class MockCoolBuyBtnComponent {
}
