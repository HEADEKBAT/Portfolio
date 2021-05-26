import AOS from 'aos';
import gsap from 'gsap';
import './svg-sprite';
import fullpage from 'fullpage.js';
import Parallax from 'parallax-js';
import './dynamic_adapt';

document.getElementById('trigger').onclick = function () {
    open();
};

function open() {
    document.getElementById('menu').classList.toggle('show');
}

new fullpage('#fullpage', {
    // параметры fullpage
    autoScrolling: true,
    scrollHorizontally: true,

    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const border = section.querySelector('.border');
        const title__lead = section.querySelector('.title__lead');
        const title__button = section.querySelector('.title__button');
        const title_contacts = section.querySelector('.title-contacts');
        const image__wrapper = section.querySelector(
            '.section-main-image__wrapper'
        );

        const tl = new gsap.timeline({ delay: 0.5 });
        const tl1 = new gsap.timeline({ delay: 0.8 });

        tl.fromTo(
            title,
            0.6,
            { x: '-150', opacity: 0 },
            { x: '0', opacity: 1 }
        );
        tl.fromTo(
            border,
            0.6,
            { x: '-150', opacity: 0 },
            { x: '0', opacity: 1 }
        );
        tl.fromTo(
            title__lead,
            0.8,
            { x: '-150', opacity: 0 },
            { x: '0', opacity: 1 }
        );
        tl.fromTo(
            title__button,
            0.8,
            { y: '50', opacity: 0 },
            { y: '0', opacity: 1 }
        );
        tl1.fromTo(
            title_contacts,
            1,
            { y: '100', opacity: 0 },
            { y: '0', opacity: 1 }
        );
        tl1.fromTo(
            image__wrapper,
            0.8,
            { x: '100%', y: '-100%', opacity: 0 },
            { x: '0', y: '0', opacity: 1 }
        );

        if (destination.index === 0) {
        }

        if (destination.index === 1) {
        }
    },
});

//gsap first page OPEN =============================================

const title_header = document.querySelector('.title__text');
const border_header = document.querySelector('.border');
const header_header = document.querySelector('.header');
const title_lead = document.querySelector('.title__lead');
const header_moonlight = document.querySelector('.moonlight');
const moon_front = document.querySelectorAll('.moon');
const moon_text = document.querySelectorAll('.moon__text');

const tl_header = new gsap.timeline({ delay: 0.3 });
const tl_header1 = new gsap.timeline({ delay: 0.5 });
const tl_header2 = new gsap.timeline({ delay: 0.4 });

tl_header.fromTo(
    title_header,
    0.5,
    { x: '-150', opacity: 0 },
    { x: '0', opacity: 1 }
);
tl_header1.fromTo(
    header_header,
    1,
    { y: '-100', opacity: 0 },
    { y: '0', opacity: 1 }
);
tl_header.fromTo(
    border_header,
    0.5,
    { x: '-150', opacity: 0 },
    { x: '0', opacity: 1 }
);
tl_header.fromTo(
    title_lead,
    0.5,
    { x: '-150', opacity: 0 },
    { x: '0', opacity: 1 }
);
tl_header2.fromTo(
    header_moonlight,
    0.8,
    { x: '150', opacity: 0 },
    { x: '0', opacity: 1 }
);
tl_header2.fromTo(
    moon_front,
    0.8,
    { x: '101%', opacity: 1 },
    { x: '0', opacity: 1 }
);
tl_header2.fromTo(
    moon_text,
    0.4,
    { y: '100', opacity: 0 },
    { y: '0', opacity: 1 }
);

//gsap first page Close =============================================

//methods fullpage
// fullpage_api.setAllowScrolling(true);
AOS.init({
    duration: 1200,
});
import './popup';
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2);
var scene3 = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene3);

//========================
