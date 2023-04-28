const images = [];
const imageModules = import.meta.glob('../assets/image/*.{png,jpg,jpeg,svg}', { eager: true });



for (const path in imageModules) {
  images.push(imageModules[path].default);
}

async function load() {
  const array = images;
  const promises = array.map((value) => {
    const img = new Image();
    return new Promise((resolve) => {
      img.onload = resolve;
      img.src = value;
    });
  });

  await Promise.all(promises);
}

export default {
  load,
  images
};
