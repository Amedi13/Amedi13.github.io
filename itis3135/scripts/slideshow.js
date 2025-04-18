const slides = [
    { src: "images/airplane.jpg", caption: "A - for Airplane" },
    { src: "images/skateboard.jpg", caption: "S - for Skateboard" },
    { src: "images/avocado.jpg", caption: "A - for Avocado" },
    { src: "images/elephant.jpg", caption: "E - for Elephant" },
    { src: "images/lighthouse.jpg", caption: "L - for Lighthouse" },
    { src: "images/mountain.jpg", caption: "M - for Mountain" },
    { src: "images/envelope.jpg", caption: "E - for Envelope" },
    { src: "images/donut.jpg", caption: "D - for Donut" },
    { src: "images/icecream.jpg", caption: "I - for Ice Cream" },
    { src: "images/notebook.jpg", caption: "N - for Notebook" },
    { src: "images/apple.png", caption: "A - for Apple" },
    { src: "images/guitar.png", caption: "G - for Guitar" },
    { src: "images/anchor.png", caption: "A - for Anchor" },
    { src: "images/lantern.png", caption: "L - for Lantern" },
    { src: "images/violin.png", caption: "V - for Violin" },
    { src: "images/acorn.png", caption: "A - for Axe" },
    { src: "images/night.png", caption: "N - for Night" }
  ];
  
  $(document).ready(function () {
    const $mainImage = $("#main-image");
    const $caption = $("#caption");
    const $thumbnails = $("#thumbnails");
  
    // Add thumbnails dynamically
    slides.forEach((slide) => {
      const $thumb = $(`<img src="${slide.src}" alt="${slide.caption}" />`);
      $thumb.on("click", () => {
        $mainImage.attr("src", slide.src);
        $caption.text(slide.caption);
      });
      $thumbnails.append($thumb);
    });
  
  });

  $(".notes-section").css({
    "background-color": "rgb(3, 70, 3)",
    "padding": "20px",
    "border-radius": "10px",
    "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)",
    "margin-top": "20px"
});

  $(".ai-prompts").css({
    "background-color": "rgb(3, 70, 3)",
    "padding": "20px",
    "border-radius": "10px",
    "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)",
    "margin-top": "20px"
});

  $(".slide-img").css({
    "border-radius": "0",
    "object-fit": "contain",
    "margin": "0 auto",
    "display": "block",
    "max-width": "100%" 
});


$(".slide-caption").css({
    "text-align": "center",
    "font-size": "1.5em",
    "color": "#333",
    "margin-top": "10px"
});
  