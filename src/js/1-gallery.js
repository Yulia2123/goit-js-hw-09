import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/logic_ywadbf.png',
    original:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/logic_ywadbf.png',
    description: 'Flower',
  },
  {
    preview:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/idea_ynicvn.png',
    original:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/idea_ynicvn.png',
    description: 'Forest',
  },
  {
    preview:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/phone_lqgamv.png',
    original:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/phone_lqgamv.png',
    description: 'Tree',
  },
  {
    preview:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/meetingroom_hpyrvt.png',
    original:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/meetingroom_hpyrvt.png',
    description: 'Tree',
  },
  {
    preview:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/office_wubp5i.png',
    original:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/office_wubp5i.png',
    description: 'Tree',
  },
  {
    preview:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/people_kzgkau.png',
    original:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/people_kzgkau.png',
    description: 'Tree',
  },
  {
    preview:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/laptope_yqrplg.png',
    original:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/laptope_yqrplg.png',
    description: 'Tree',
  },
  {
    preview:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/writting_oyc5xs.png',
    original:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/writting_oyc5xs.png',
    description: 'Tree',
  },
  {
    preview:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/meeting_la3tsd.png',
    original:
      'https://res.cloudinary.com/dprfmsunw/image/upload/f_auto/q_auto/meeting_la3tsd.png',
    description: 'Tree',
  },
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img class="gallery-image" src="${preview}" alt="${description}" />
  </a>
</li>
`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
