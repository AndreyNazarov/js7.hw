const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url:
      "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-02-11-15-56/tlou_2_dynamiczny_motyw_darmo.jpg/EG11/thumbnail/750x422/format/jpg/quality/60",
    alt: "Last of us",
  },
];
console.table(images);
const galleryRef = document.querySelector("#gallery");
const createLiRef = document.createElement("li");

//   const pushImgToArray = images => {
//   images.reduce((acc, img) => {
//   const
//  }, [])
//   }

const galleryItems = (img) => {
  const createLiRef = document.createElement("li");
  const imgRef = document.createElement("img");
  imgRef.src = img.url;
  imgRef.alt = img.alt;
createLiRef.append(imgRef)

  return createLiRef;
};

const pushGalleryToArray = images.map((img) => galleryItems(img));


galleryRef.append(...pushGalleryToArray);
console.log(galleryRef);


// const galleryItems = (img) => {
//   const imgRef = document.createElement("img");
//   imgRef.setAttribute("src", img.url);
//   imgRef.alt = img.alt;
//   return imgRef;
// };

// const pushGalleryToArray = images.map((image) => galleryItems(image));

// const galleryListRef = document.querySelector('.js-gallery');
// galleryRef.append(...pushGalleryToArray)
// console.log(galleryRef);
