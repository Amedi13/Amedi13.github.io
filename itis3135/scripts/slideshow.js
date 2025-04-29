const slides = [
  { src: "images/airplane.jpg", thumb: "images/airplane_thumb.jpg", caption: "A - for Airplane" },
  { src: "images/skateboard.jpg", thumb: "images/skateboard_thumb.jpg", caption: "S - for Skateboard" },
  { src: "images/avocado.jpg", thumb: "images/avocado_thumb.jpg", caption: "A - for Avocado" },
  { src: "images/elephant.jpg", thumb: "images/elephant_thumb.jpg", caption: "E - for Elephant" },
  { src: "images/lighthouse.jpg", thumb: "images/lighthouse_thumb.jpg", caption: "L - for Lighthouse" },
  { src: "images/mountain.jpg", thumb: "images/mountain_thumb.jpg", caption: "M - for Mountain" },
  { src: "images/envelope.jpg", thumb: "images/envelope_thumb.jpg", caption: "E - for Envelope" },
  { src: "images/donut.jpg", thumb: "images/donut_thumb.jpg", caption: "D - for Donut" },
  { src: "images/icecream.jpg", thumb: "images/icecream_thumb.jpg", caption: "I - for Ice Cream" },
  { src: "images/notebook.jpg", thumb: "images/notebook_thumb.jpg", caption: "N - for Notebook" },
  { src: "images/apple.png", thumb: "images/apple_thumb.png", caption: "A - for Apple" },
  { src: "images/guitar.png", thumb: "images/guitar_thumb.png", caption: "G - for Guitar" },
  { src: "images/anchor.png", thumb: "images/anchor_thumb.png", caption: "A - for Anchor" },
  { src: "images/lantern.png", thumb: "images/lantern_thumb.png", caption: "L - for Lantern" },
  { src: "images/violin.png", thumb: "images/violin_thumb.png", caption: "V - for Violin" },
  { src: "images/acorn.png", thumb: "images/acorn_thumb.png", caption: "A - for Axe" },
  { src: "images/night.png", thumb: "images/night_thumb.png", caption: "N - for Night" }
];

$(document).ready(function () {
  const $mainImage = $("#main-image");
  const $caption = $("#caption");
  const $thumbnails = $("#thumbnails");

  // Add thumbnails dynamically
  slides.forEach((slide) => {
    const $thumb = $(`<img src="${slide.thumb}" alt="${slide.caption}">`);
      $thumb.on("click", () => {
          $mainImage.attr("src", slide.src);
          $caption.text(slide.caption);
      });
      $thumbnails.append($thumb);
  });
});

// extra styling
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
