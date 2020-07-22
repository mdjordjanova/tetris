import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface IBlock {
  x: number;
  y: number;
  vy: number;
}

@Component({
  selector: 'app-canvas-example',
  templateUrl: './canvas-example.component.html',
  styleUrls: ['./canvas-example.component.scss'],
})
export class CanvasExampleComponent implements OnInit {
  constructor() { }

  @ViewChild('scene', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    const context = this.canvas.nativeElement.getContext('2d');
    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;
    const blocks: IBlock[] = [];
    const blockwidth = 50;
    const blockheight = 50;
    const margin = 20;

    for (let index = 0; index < 11; index++) {
      blocks.push({
        x: margin * 2 + index * (blockwidth + 8),
        y: margin * 2,
        vy: (Math.random() + 0.1) * 5,
      })

    }

    const drawScene = (time) => {
      context.clearRect(0, 0, width, height);

      this.drawBorders(context, width, height, margin);

      for (const block of blocks) {
        this.drawBlock(context, block.x, block.y, blockwidth, blockheight);

        block.y += block.vy;

        if (block.y > height - margin - blockheight) block.y = margin * 2;
      }

      requestAnimationFrame(drawScene);
    };

    drawScene(0);
  }

  private drawBlock(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
    context.fillStyle = '#698eb8';
    context.fillRect(x, y, width, height);
  }

  private drawBorders(context: CanvasRenderingContext2D, width: number, height: number, margin: number) {
    context.strokeStyle = '#ff000080';
    context.fillStyle = '#ff000080';
    context.lineWidth = 10;

    const left = margin;
    const right = width - margin;
    const top = margin;
    const bottom = height - margin;

    context.beginPath();
    context.moveTo(left, top);
    context.lineTo(right, top);
    context.lineTo(right, bottom);
    context.lineTo(left, bottom);
    context.lineTo(left, top);
    context.stroke();
  }
}
