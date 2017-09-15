"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
    }
    VideoComponent = __decorate([
        core_1.Component({
            selector: 'video-showcase',
            template: "\n\t<div class=\"video-showcase\">\n\t\t<h1>Welcome to our Songs App</h1>\n\t<video width=\"400\" controls>\n\t\t<source src=\"https://redirector.googlevideo.com/videoplayback?itag=22&ei=Vbe2WeL7MoWvVO3FhcAK&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&lmt=1505014091451137&ratebypass=yes&ipbits=0&key=yt6&source=youtube&expire=1505168309&mt=1505146587&mv=m&id=o-AEo-yQHEtAFrNowrbcfIMc5-la9CZ0HI_ftFdv2qe6CI&ms=au&mm=31&signature=66D96056B7DF3AB75F5A0322B68CBE561631880A.6E785F454AF77F350072B6DE68C95B2D167819BE&pl=25&mn=sn-4g5ednse&dur=221.053&mime=video%2Fmp4&ip=144.76.93.214&initcwndbps=2303750&requiressl=yes&title=%D7%98%D7%95%D7%A0%D7%94%20-%20%D7%93%D7%90%D7%A0%D7%92%20%20Tuna%20-%20Dang\" type=\"video/mp4\">\n\t\t<source src=\"https://www.w3schools.com/html/mov_bbb.ogg\" type=\"video/ogg\">\n\t\tYour browser does not support HTML5 video.\n\t</video>\n\t</div>\n  ",
            styles: ["\n  .video-showcase {\n\tdisplay: flex;\n\tflex-flow: column;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding-top: 20px;\n  }\n  "]
        })
    ], VideoComponent);
    return VideoComponent;
}());
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=video.component.js.map