import {Component, ElementRef, ViewChild} from '@angular/core';
import {Bodies, Engine, Render, Runner, World} from 'matter-js'
import * as p5 from 'p5';

@Component({
  selector: 'app-test-matter-js-page',
  templateUrl: './test-matter-js-page.component.html',
  styleUrls: ['./test-matter-js-page.component.css']
})
export class TestMatterJsPageComponent {

  @ViewChild('p5_div') p5_div: ElementRef<HTMLDivElement> | undefined;

  width = 250;
  height = 80;

  isEngineRun = false;
  ngAfterViewInit() {

    const s = (sketch: any) => {
      let engine = Engine.create();
      sketch.setup = () => {

        let p5Canvas = sketch.createCanvas(this.width, this.height);
        p5Canvas.parent('p5_div');

        let p5CanvasIdSelector = '#' + p5Canvas.id();
        let p5CanvasElement = this.p5_div?.nativeElement.querySelector(p5CanvasIdSelector) as any;
        p5CanvasElement.className = 'rounded-full ';

        let render = Render.create({
          canvas: p5CanvasElement,
          engine: engine,
          options: {
            width: this.width,
            height: this.height,
            wireframes: false,
            background: 'rgba(0,255,0, 0.25)'
          },
        });
        Render.run(render);
      };

      sketch.draw = () => {
      };

      sketch.mouseClicked = () => {

        let boxA = this.getABox(sketch.mouseX, sketch.mouseY);
        World.add(engine.world, [boxA]);

        if (!this.isEngineRun && engine.world.bodies.length > 25) {
          Runner.run(engine); // 啟動物理引擎
          this.isEngineRun = true;
        }
      }
    };
    new p5(s);
  }

  getABox(x: number, y: number) {
    return Bodies.rectangle(x, y, 15, 15, {
      render: {
        fillStyle: '#000000'
      }
    });
  }

}
