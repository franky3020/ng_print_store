import {Component, ElementRef, ViewChild} from '@angular/core';
import { Engine, Runner, Render, World, Constraint, MouseConstraint, Bodies} from 'matter-js'
import * as p5 from 'p5';

@Component({
  selector: 'app-test-matter-js-page',
  templateUrl: './test-matter-js-page.component.html',
  styleUrls: ['./test-matter-js-page.component.css']
})
export class TestMatterJsPageComponent {


  @ViewChild('matter_canvas') matter_canvas: ElementRef<HTMLCanvasElement> | undefined;

  ngOnInit() {

    const s = (sketch: any) => {

      sketch.setup = () => {

        let magicCloth = sketch.createCanvas(200, 200);
        magicCloth.parent('magicCloth');

        sketch.background(0);
        sketch.erase();
      };

      sketch.draw = () => {
        sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
      };
    };
    new p5(s);

  }

  ngAfterViewInit() {
    console.log("this.matter_canvas");
    console.log(this.matter_canvas);
    this.demo();
  }

  demo() {
    let engine = Engine.create();
    let render = Render.create({
      canvas: this.matter_canvas?.nativeElement,
      engine: engine,
      options: {
        width: 800,
        height: 400,
        wireframes: false,
      },
    });
    let boxA = Bodies.rectangle(400, 200, 80, 80);
    let ballA = Bodies.circle(380, 100, 40, {});
    let ballB = Bodies.circle(460, 10, 40, {});
    let ground = Bodies.rectangle(400, 380, 810, 60, {
      isStatic: true,
    });
    World.add(engine.world, [boxA, ballA, ballB, ground]);
    Runner.run(engine)
    Render.run(render);

  }

}
