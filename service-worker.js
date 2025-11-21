self.addEventListener("install", event => {
    console.log("Service worker instalado.");
});

self.addEventListener("activate", event => {
    console.log("Service worker activo.");
});

self.addEventListener("fetch", event => {
    // No interceptamos todavía
});
