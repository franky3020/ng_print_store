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
  @ViewChild('p5_div') p5_div: ElementRef<HTMLDivElement> | undefined;
  // p5_canvas: ElementRef<HTMLCanvasElement> | undefined;

  ngOnInit() {

  }

  ngAfterViewInit() {

    const s = (sketch: any) => {
      let engine = Engine.create();
      sketch.setup = () => {

        let magicCloth = sketch.createCanvas(500, 500);
        magicCloth.parent('p5_div');
        console.log("magicCloth.id(): ", magicCloth.id());


        let render = Render.create({
          canvas: this.p5_div?.nativeElement.querySelector('#'+magicCloth.id()) as any,
          engine: engine,
          options: {
            width: 500,
            height: 500,
            wireframes: false,
          },
        });
        let boxA = Bodies.rectangle(400, 200, 80, 80);
        World.add(engine.world, [boxA]);
        Runner.run(engine);
        Render.run(render);

        sketch.background(0);
      };

      sketch.draw = () => {
        
        // sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
      };
      sketch.mouseClicked = () => {
        let boxA = Bodies.rectangle(sketch.mouseX, sketch.mouseY, 80, 80);
        World.add(engine.world, [boxA]);
      }
    };
    new p5(s);

    console.log("this.matter_canvas");
    console.log(this.matter_canvas);
    // this.demo();
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
    Runner.run(engine);
    Render.run(render);

  }

}
