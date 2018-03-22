//import avatar images
import avatarDaniel from './images/avatars/daniel.jpg';
import avatarKristy from './images/avatars/kristy.png';
import avatarVeronika from './images/avatars/veronika.jpg';
import avatarMolly from './images/avatars/molly.png';
import avatarMatthew from './images/avatars/matthew.png';
import avatarStevie from './images/avatars/stevie.jpg';

//import product images
import imageAqua from './images/products/image-aqua.png';
import imageRose from './images/products/image-rose.png';
import imageSteel from './images/products/image-steel.png';
import imageYellow from './images/products/image-yellow.png';
import imageGrey from './images/products/image.png';

const generateVoteCount = () => {
  return Math.floor((Math.random() * 50) + 15);
}

const Seed = {
  
  products: [
      {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: avatarDaniel,
        productImageUrl: imageAqua,
      },
      {
        id: 2,
        title: 'Supermajority: The Fantasy Congress League',
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: avatarKristy,
        productImageUrl: imageRose,
      },
      {
        id: 3,
        title: 'Tinfoild: Tailored tinfoil hats',
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: avatarVeronika,
        productImageUrl: imageSteel,
      },
      {
        id: 4,
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: avatarStevie,
        productImageUrl: imageYellow,
      },
      {
        id: 5,
        title: 'Game of Thrones',
        description: 'Best season movie ever.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: avatarMolly,
        productImageUrl: imageGrey,
      }
    ]
  };

  export default Seed;

    
// window.Seed = (function () {
//     function generateVoteCount() {
//       return Math.floor((Math.random() * 50) + 15);
//     }
  
//     const products = [
//       {
//         id: 1,
//         title: 'Yellow Pail',
//         description: 'On-demand sand castle construction expertise.',
//         url: '#',
//         votes: generateVoteCount(),
//         submitterAvatarUrl: 'src/images/avatars/daniel.jpg',
//         productImageUrl: 'src/images/products/image-aqua.png',
//       },
//       {
//         id: 2,
//         title: 'Supermajority: The Fantasy Congress League',
//         description: 'Earn points when your favorite politicians pass legislation.',
//         url: '#',
//         votes: generateVoteCount(),
//         submitterAvatarUrl: 'src/images/avatars/kristy.png',
//         productImageUrl: 'src/images/products/image-rose.png',
//       },
//       {
//         id: 3,
//         title: 'Tinfoild: Tailored tinfoil hats',
//         description: 'We already have your measurements and shipping address.',
//         url: '#',
//         votes: generateVoteCount(),
//         submitterAvatarUrl: 'src/images/avatars/veronika.jpg',
//         productImageUrl: 'src/images/products/image-steel.png',
//       },
//       {
//         id: 4,
//         title: 'Haught or Naught',
//         description: 'High-minded or absent-minded? You decide.',
//         url: '#',
//         votes: generateVoteCount(),
//         submitterAvatarUrl: 'src/images/avatars/molly.png',
//         productImageUrl: 'src/images/products/image-yellow.png',
//       },
//     ];
  
//     return { products: products };
//   }());
      