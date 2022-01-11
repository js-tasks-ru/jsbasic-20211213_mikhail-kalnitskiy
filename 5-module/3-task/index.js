function initCarousel() {

  let currentOffset = 0;
  let slidesCount = 0;
  let slides = 4;
  let pictureWidth = document.querySelector('.carousel__slide').offsetWidth;

  let images = document.querySelector('.carousel__inner');
  // images = Array.from(images);



  document.querySelector('.carousel__arrow_left').addEventListener('click' , function() {
      currentOffset = currentOffset + pictureWidth;
      --slidesCount;
      moveImages();
      console.log(slidesCount);
  });

  document.querySelector('.carousel__arrow_right').addEventListener('click' , function() {
      currentOffset = currentOffset - pictureWidth;
      ++slidesCount;
      moveImages();
      console.log(slidesCount);
  });

  document.querySelector('.carousel__arrow_left').style.display = 'none';

  function moveImages(){
    images.style.transform = `translateX(${currentOffset}px)`;
    for (let items of document.querySelectorAll('.carousel__slide')) {
      if (slidesCount === 0) {
        document.querySelector('.carousel__arrow_left').style.display = 'none';
        document.querySelector('.carousel__arrow_right').style.display = '';
      } else if (slidesCount === document.querySelectorAll('.carousel__slide').length-1) {
        document.querySelector('.carousel__arrow_left').style.display = '';
        document.querySelector('.carousel__arrow_right').style.display = 'none';
      } else {
        document.querySelector('.carousel__arrow_left').style.display = '';
        document.querySelector('.carousel__arrow_right').style.display = '';
    };
  };
};

}
