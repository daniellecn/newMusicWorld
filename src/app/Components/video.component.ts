import { Component } from '@angular/core';

@Component({
	selector: 'video-showcase',
	template: `
	<div class="video-showcase">
		<h1>Welcome to our Songs App</h1>
	<video width="400" controls>
		<source src="https://redirector.googlevideo.com/videoplayback?ei=AaO1WfO1DYmlwQGp2Le4Bg&beids=%5B9466594%5D&lmt=1505014091451137&key=yt6&ipbits=0&initcwndbps=1872500&expire=1505097569&ratebypass=yes&requiressl=yes&ms=au&mt=1505075869&itag=22&mv=m&pl=16&id=o-AOFsAR9nYm1qTfnEbmVNeagJylgAM7QVN8T23CdpJMFZ&source=youtube&dur=221.053&mime=video%2Fmp4&mn=sn-4g5ednse&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&ip=46.4.126.163&mm=31&signature=4954E1F6785C6F4E6293A404AC8D0BA826AE1D64.B93DCB5671D60C2C46236FE727A944453961020B&title=%D7%98%D7%95%D7%A0%D7%94%20-%20%D7%93%D7%90%D7%A0%D7%92%20%20Tuna%20-%20Dang" type="video/mp4">
		<source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
		Your browser does not support HTML5 video.
	</video>
	</div>
  `,
  styles: [`
  .video-showcase {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
  }
  `]
})
export class VideoComponent {
}
