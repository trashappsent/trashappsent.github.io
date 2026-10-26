// Click-to-play YouTube embeds: the page shows a thumbnail and only loads the
// YouTube player when someone clicks it. Without JavaScript the link opens YouTube.
document.querySelectorAll("[data-youtube-id]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${link.dataset.youtubeId}?autoplay=1&rel=0`;
    iframe.title = link.getAttribute("aria-label");
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    const player = document.createElement("div");
    player.className = link.className;
    player.appendChild(iframe);
    link.replaceWith(player);
  });
});
