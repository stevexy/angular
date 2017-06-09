import { Component,AfterViewInit,ElementRef,ViewChild } from '@angular/core';
import { GameCompInfo }    from './data/gamecomp';


@Component({
  selector: 'uploadcomp',
  templateUrl: './uploadcomp.component.html'
})
export class UploadComp implements AfterViewInit{

  powers = ['1.7.10', '1.8','1.8.8','1.8.9','1.9.2','1.10.2','1.11','1.11.2',];

  model = new GameCompInfo(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  url = "";

  currentFrameId: number;

  frameLeft:number = 0;
  aniStartTime:number = 0;

  rectColor:string = "rgba(255,255,255,0.8)";
  context:CanvasRenderingContext2D;


  @ViewChild("myCanvas") canvasRef: ElementRef;
  @ViewChild('myImage') aimg: ElementRef;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new GameCompInfo(42, '', '');
  }

  ngAfterViewInit()
  {
    let canvasElement = this.canvasRef.nativeElement;
    this.context = canvasElement.getContext("2d");
    this.tick();
  }

  tick() {
    this.currentFrameId = requestAnimationFrame(timestamp => this._nextFrame(timestamp));
  }

  _nextFrame(timestamp:number)
  {

    var ctx = this.context;
    ctx.clearRect(0, 0, 100, 100);
    ctx.fillStyle = this.rectColor;

    this.draw_cirle(ctx,50,50,50,0);
  }

  _drawAniImage(timestamp:number)
  {
    this.frameLeft = 100
    this.aniStartTime  = timestamp;
    this._loopAnimate(timestamp)
  }

  _loopAnimate(timestamp:number)
  {
    this.frameLeft-=1;
    if (this.frameLeft >= 0)
    {
      var ctx = this.context;
      this.draw_cirle(ctx,50,50,75,this.frameLeft/100.0);
      requestAnimationFrame(timestamp => this._loopAnimate(timestamp));
      console.log("ticking111")
    }

  }

  _drawImage()
  {
    var ctx = this.context;
    // ctx.clearRect(0, 0, 100, 100);
    // ctx.drawImage(this.aimg.nativeElement,0,0,100,100);
    this._drawAniImage(0);
    
  }



  draw_cirle(ctx:CanvasRenderingContext2D,x:number,y:number,r:number,rate:number)
  {
    
    ctx.save()
    ctx.clearRect(0, 0, 100, 100);
    ctx.drawImage(this.aimg.nativeElement,0,0,100,100);
    ctx.beginPath();
    // 位移到圆心，方便绘制
    ctx.translate(x, y);
    // 移动到圆心
    ctx.moveTo(0, 0);
    // 绘制圆弧
    ctx.arc(0, 0, r, 0, Math.PI * 2*rate);
    // 闭合路径
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  cancel() {
    cancelAnimationFrame(this.currentFrameId);
    this.currentFrameId = null;
  }

  readUrl(event:any) {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;
        this._drawImage();
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}

