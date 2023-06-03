import AOS from 'aos';

import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';

import 'gardevoir';
import '@animxyz/core';
import 'aos/dist/aos.css';
import 'keen-slider/keen-slider.min.css';

import './scss/main.scss';

import KeenSlider from 'keen-slider';
import { autoSwitch, navigation } from './keenSliderPlugins';

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

try {
  const servicesCardsContainer =
    document.querySelector<HTMLDivElement>('.servicesCards');

  const servicesCardsData = [
    { heading: 'Research' },
    { heading: 'Portfolio' },
    { heading: 'Support' },
    { heading: 'Documentation' },
    { heading: 'Development' },
    { heading: 'Design' },
  ];

  assert(servicesCardsContainer !== null, '.servicesCards is null!');
  servicesCardsData.forEach(data => {
    servicesCardsContainer.innerHTML += `
<div class="card servicesCard">
  <!-- prettier-ignore -->
  <svg class="cardIcon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" ><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="currentColor" ><path d="M1045.8,4998.5c-214.7-69-383.4-214.7-477.3-414.1L509,4459.8V117.9v-4341.9l59.4-124.6c74.8-159.1,212.8-297.1,371.9-371.9l124.6-59.4H3279h2214.1l124.6,61.3c159.1,78.6,291.4,210.9,370,370l61.3,124.6l5.7,2333l3.8,2334.9h1669.7h1667.8l46,47.9c65.2,63.3,65.2,166.8,0,230l-46,47.9H7728.3H6058.6l-3.8,1846l-5.7,1844.1l-61.3,124.6c-78.6,162.9-212.8,297.1-370,371.9l-124.6,59.4l-2185.3,3.8C1578.7,5021.5,1107.1,5017.6,1045.8,4998.5z M5474,4678.3c97.8-26.8,210.9-139.9,237.7-237.7c11.5-42.2,21.1-147.6,21.1-233.9v-159.1H3279H825.3v159.1c0,197.5,24.9,287.5,101.6,370c116.9,126.5-1.9,120.8,2342.5,122.7C4764.7,4699.4,5420.3,4693.7,5474,4678.3z M5732.8,2236.1V769.6H4626.7h-1108l847.3,849.2c465.8,465.8,856.9,870.3,866.5,899.1c42.2,115-69,245.4-187.9,216.6c-32.6-7.7-410.2-370-1069.7-1031.3C2966.6,696.8,2953.1,683.4,2953.1,606.7c0-74.8,15.3-90.1,1002.6-1079.2c565.5-567.4,1027.5-1016,1062-1031.3c126.5-53.7,262.6,70.9,214.7,199.4c-9.6,28.8-400.6,433.2-866.5,901l-847.3,847.3h1108h1106.1v-1466.5v-1466.5H3279H825.3V606.7v3095.9H3279h2453.7V2236.1z M5732.8-3480.3c0-414.1-7.7-674.8-21.1-724.6c-26.9-97.8-140-210.9-237.7-237.7c-107.3-28.8-4282.5-28.8-4389.9,0c-97.8,26.8-210.9,140-237.7,237.7c-13.4,49.8-21.1,310.6-21.1,724.6v646H3279h2453.7V-3480.3z" /><path d="M2546.7,4515.4c-107.3-57.5-122.7-172.5-36.4-258.8l55.6-55.6h383.4c352.7,0,385.3,3.8,431.3,38.3c93.9,74.8,80.5,222.4-26.8,278C3275.2,4559.5,2621.5,4557.6,2546.7,4515.4z" /><path d="M3708.4,4526.9c-59.4-23-103.5-93.9-103.5-164.9c0-46,15.3-74.8,59.4-111.2c49.8-42.2,76.7-49.8,187.9-49.8c101.6,0,141.9,7.7,180.2,38.3c93.9,74.8,80.5,222.4-26.8,278C3948.1,4548,3773.6,4553.7,3708.4,4526.9z" /> <path d="M3108.4-3014.5c-107.3-36.4-274.1-149.5-333.5-228.1c-109.3-143.8-138-224.3-138-396.8c0-139.9,7.7-178.3,53.7-272.2c151.5-306.7,504.2-454.3,812.8-337.4c134.2,49.8,301,207,370,350.8c70.9,143.8,67.1,362.3-5.8,511.8C3721.9-3091.2,3384.5-2926.3,3108.4-3014.5z M3396-3334.6c189.8-63.3,264.5-283.7,166.8-477.3c-55.6-107.3-141.9-153.4-283.7-153.4c-141.9,0-228.1,46-281.8,153.4C2847.7-3522.5,3091.2-3233,3396-3334.6z" /></g></svg>
  <p class="cardHeading h3">${data.heading}</p>
  <p class="cardDescription">
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.
  </p>
  <a href="#!" class="btn btn-outline cardButton">Read more</a>
</div>
`;
  });

  const worksCardsContainer =
    document.querySelector<HTMLDivElement>('.worksCards');

  const worksCardsData = [
    {
      img: './src/assets/img/works/hand_watch.png',
      title: 'Hand Watch',
      tag: 'ui/ux design',
    },
    {
      img: './src/assets/img/works/one_day_pass.png',
      title: 'One Day Pass',
      tag: 'ui/ux design',
    },
    {
      img: './src/assets/img/works/t_shirts.png',
      title: 'T-Shirts',
      tag: 'ui/ux design',
    },
    {
      img: './src/assets/img/works/packet_bottle.png',
      title: 'Packet Bottle',
      tag: 'ui/ux design',
    },
    {
      img: './src/assets/img/works/bottle.png',
      title: 'Bottle',
      tag: 'ui/ux design',
    },
    {
      img: './src/assets/img/works/bag.png',
      title: 'Bag',
      tag: 'ui/ux design',
    },
  ];

  assert(worksCardsContainer !== null, '.worksCards is null!');
  worksCardsData.forEach(data => {
    worksCardsContainer.innerHTML += `
<div class="worksCard">
  <img
    src="${data.img}"
    class="worksCardImage"
  />
  <div class="worksCardText">
    <p class="h3">${data.title}</p>
    <p>${data.tag}</p>
  </div>
</div>
`;
  });

  const pricingCardsContainer =
    document.querySelector<HTMLDivElement>('.pricingCards');

  const pricingCardsData = [
    {
      title: 'Free Trail',
      price: '00',
    },
    {
      title: 'Basic',
      price: '50',
    },
    {
      title: 'Ultimates',
      price: '99',
    },
  ];

  assert(pricingCardsContainer !== null, '.pricingCards is null!');
  pricingCardsData.forEach(data => {
    pricingCardsContainer.innerHTML += `
<div class="pricingCard">
  <div class="pricingCardHead">
    <p class="pricingCardName">${data.title}</p>
    <p class="pricingCardPrice">
      <span class="currencySign">$</span>
      <span class="price">${data.price}</span>
      <span class="perTime">per month</span>
    </p>
  </div>
  <div class="pricingCardBody">
    <ul class="pricingCardFeatures">
      <li>30 Free Trail</li>
      <li>5 Free Projects</li>
      <li>PHP 5 Enabled</li>
      <li>24/7 Suports</li>
    </ul>
    <a href="#!" class="btn">Order Now</a>
  </div>
</div>
`;
  });

  const teamCardsContainer =
    document.querySelector<HTMLDivElement>('#teamSlider');

  const teamCardsData = [
    {
      photo: './src/assets/img/team/1.png',
      name: 'John Doe',
      post: 'General Manager',
    },
    {
      photo: './src/assets/img/team/2.png',
      name: 'Alexa Biru',
      post: 'Office Director',
    },
    {
      photo: './src/assets/img/team/3.png',
      name: 'Ronobir sing',
      post: 'Admin',
    },

    {
      photo: './src/assets/img/team/1.png',
      name: 'John Doe',
      post: 'General Manager',
    },
    {
      photo: './src/assets/img/team/2.png',
      name: 'Alexa Biru',
      post: 'Office Director',
    },
    {
      photo: './src/assets/img/team/3.png',
      name: 'Ronobir sing',
      post: 'Admin',
    },

    {
      photo: './src/assets/img/team/1.png',
      name: 'John Doe',
      post: 'General Manager',
    },
    {
      photo: './src/assets/img/team/2.png',
      name: 'Alexa Biru',
      post: 'Office Director',
    },
    {
      photo: './src/assets/img/team/3.png',
      name: 'Ronobir sing',
      post: 'Admin',
    },
  ];

  assert(teamCardsContainer !== null, '#teamSlider is null!');
  teamCardsData.forEach(data => {
    teamCardsContainer.innerHTML += `
<div class="keen-slider__slide teamMemberCardsSlide">
  <div class="teamMemberCard">
    <img
      src="${data.photo}"
      alt="Team member photo"
      class="teamMemberPhoto"
    />
    <p class="teamMemberName h3">${data.name}</p>
    <p class="teamMemberPost">${data.post}</p>
    <ul class="teamMemberSocials">
      <li>
        <a href="#!" class="teamMemberSocial facebook">
          <!-- prettier-ignore -->
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" /></svg>
        </a>
      </li>
      <li>
        <a href="#!" class="teamMemberSocial twitter">
          <!-- prettier-ignore -->
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" /></svg>
        </a>
      </li>
      <li>
        <a href="#!" class="teamMemberSocial comments">
          <!-- prettier-ignore -->
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1792 1408"><path fill="currentColor" d="M1408 512q0 139-94 257t-256.5 186.5T704 1024q-86 0-176-16q-124 88-278 128q-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5t2-6l2.5-5l3.5-5.5l4-5l4.5-5l4-4.5q5-6 23-25t26-29.5t22.5-29t25-38.5t20.5-44Q142 841 71 736T0 512q0-139 94-257T350.5 68.5T704 0t353.5 68.5T1314 255t94 257zm384 256q0 120-71 224.5T1526 1169q10 24 20.5 44t25 38.5t22.5 29t26 29.5t23 25q1 1 4 4.5t4.5 5t4 5t3.5 5.5l2.5 5l2 6l.5 6.5l-1 6.5q-3 14-13 22t-22 7q-50-7-86-16q-154-40-278-128q-90 16-176 16q-271 0-472-132q58 4 88 4q161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152q129 71 204 178t75 230z"/></svg>
        </a>
      </li>
      <li>
        <a href="#!" class="teamMemberSocial dribble">
          <!-- prettier-ignore -->
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M44 24a19.938 19.938 0 0 1-5.889 14.173A19.937 19.937 0 0 1 24 44C12.954 44 4 35.046 4 24a19.932 19.932 0 0 1 5.5-13.775A19.943 19.943 0 0 1 24 4a19.937 19.937 0 0 1 14.111 5.827A19.938 19.938 0 0 1 44 24Z"/><path d="M44 24c-2.918 0-10.968-1.1-18.173 2.063C18 29.5 12.333 34.831 9.863 38.147"/><path d="M16.5 5.454C19.63 8.343 26.46 15.698 29 23c2.54 7.302 3.48 16.28 4.06 18.835"/><path d="M4.154 21.5c3.778.228 13.779.433 20.179-2.3c6.4-2.733 11.907-7.76 13.796-9.355M5.5 31.613a20.076 20.076 0 0 0 9 9.991"/><path d="M4 24a19.932 19.932 0 0 1 5.5-13.775M24 4a19.943 19.943 0 0 0-14.5 6.225M32 5.664a20.037 20.037 0 0 1 6.111 4.163A19.938 19.938 0 0 1 44 24c0 2.462-.445 4.821-1.26 7M24 44a19.937 19.937 0 0 0 14.111-5.827"/></g></svg>
        </a>
      </li>
    </ul>
  </div>
</div>
`;
  });

  new KeenSlider(
    '#teamSlider',
    {
      slides: {
        perView: 3,
      },
      breakpoints: {
        '(max-width: 1280px)': {
          slides: {
            perView: 2,
          },
        },
        '(max-width: 860px)': {
          slides: {
            perView: 1,
          },
        },
      },
    },
    [navigation, autoSwitch],
  );

  const blogPostsContainer = document.querySelector<HTMLDivElement>(
    '.blogPostsContainer',
  );

  const blogPostsData = [
    {
      img: './src/assets/img/posts/post2.png',
      title: 'SEO Quis Vestibulum 1',
      tag: 'Development',
      date: '14.07.2017',
      description:
        'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    },
    {
      img: './src/assets/img/posts/post2.png',
      title: 'SEO Quis Vestibulum 2',
      tag: 'Development',
      date: '14.07.2017',
      description:
        'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    },
    {
      img: './src/assets/img/posts/post3.png',
      title: 'SEO Quis Vestibulum 3',
      tag: 'Development',
      date: '14.07.2017',
      description:
        'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    },
  ];

  assert(blogPostsContainer !== null, '.blogPostsContainer is null!');
  blogPostsData.forEach(data => {
    blogPostsContainer.innerHTML += `
<div class="blogPost">
  <img
    src="${data.img}"
    alt=""
    class="blogPostImage"
  />
  <div class="blogPostBody">
    <h3 class="blogPostHeading h3">
      <a href="#!">${data.title}</a>
    </h3>
    <div class="blogPostInfo">
      <span class="blogPostDate">
        <!-- prettier-ignore -->
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 1664 1792"><path fill="currentColor" d="M128 1664h288v-288H128v288zm352 0h320v-288H480v288zm-352-352h288V992H128v320zm352 0h320V992H480v320zM128 928h288V640H128v288zm736 736h320v-288H864v288zM480 928h320V640H480v288zm768 736h288v-288h-288v288zm-384-352h320V992H864v320zM512 448V160q0-13-9.5-22.5T480 128h-64q-13 0-22.5 9.5T384 160v288q0 13 9.5 22.5T416 480h64q13 0 22.5-9.5T512 448zm736 864h288V992h-288v320zM864 928h320V640H864v288zm384 0h288V640h-288v288zm32-480V160q0-13-9.5-22.5T1248 128h-64q-13 0-22.5 9.5T1152 160v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h128v-96q0-66 47-113T416 0h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"/></svg>
        ${data.date}
      </span>
      <span class="blogPostTag">
        <!-- prettier-ignore -->
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 1536 1792"><path fill="currentColor" d="M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28H96q-40 0-68-28t-28-68V96q0-40 28-68T96 0h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528V640H992q-40 0-68-28t-28-68V128H128v1536h1280z"/></svg>
        ${data.tag}
      </span>
    </div>
    <div class="blogPostDescription">
      ${data.description}
    </div>
  </div>
</div>
  `;
  });
} catch (error) {
  console.error(error);
}

AOS.init();
