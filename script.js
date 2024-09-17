let fullImgBox=document.getElementById("fullImgBox")
let fullImg=document.getElementById("fullImg")

function openFullImg(pic){
    fullImgBox.style.display="flex";
    fullImg.src= pic;
}
  function closeFullImg(){
    fullImgBox.style.display="none";
  }

  var sliderImg= document.querySelector("#fullImg")
  var images=['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 
    'image6.jpg','image7.jpg','image8.jpg','image9.jpg','image10.jpg','image11.jpg',
     'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg', 'image16.jpg',
     'image17.jpg', 'image18.jpg', 'image19.jpg', 'image20.jpg']
  i=0; // current index of images

  function nextImg(){
    if(i>= images.length-1);// i=-1;
    i++;
    return setImg();
  }

 function preouseImg(){
   if(i<=0)i=images.length;
    --i;
    return setImg();
 }


 function setImg(){
    return sliderImg.setAttribute('src', 'images/'+ images[i]);
 }