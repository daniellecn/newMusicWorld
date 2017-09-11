import { Component } from '@angular/core';

@Component({
	selector: 'video-showcase',
	template: `
	<div class="video-showcase">
		<h1>Welcome to our Songs App</h1>
	<video width="400" controls>
		<source src="https://redirector.googlevideo.com/videoplayback?itag=22&ei=Vbe2WeL7MoWvVO3FhcAK&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&lmt=1505014091451137&ratebypass=yes&ipbits=0&key=yt6&source=youtube&expire=1505168309&mt=1505146587&mv=m&id=o-AEo-yQHEtAFrNowrbcfIMc5-la9CZ0HI_ftFdv2qe6CI&ms=au&mm=31&signature=66D96056B7DF3AB75F5A0322B68CBE561631880A.6E785F454AF77F350072B6DE68C95B2D167819BE&pl=25&mn=sn-4g5ednse&dur=221.053&mime=video%2Fmp4&ip=144.76.93.214&initcwndbps=2303750&requiressl=yes&title=%D7%98%D7%95%D7%A0%D7%94%20-%20%D7%93%D7%90%D7%A0%D7%92%20%20Tuna%20-%20Dang" type="video/mp4">
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
