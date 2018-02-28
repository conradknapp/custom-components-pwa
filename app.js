import { Button } from "./components/Button";
import { LoginForm } from "./components/LoginForm";
import { NavBar } from "./components/NavBar";
import { HeroPic } from "./components/HeroPic";

var deferredPrompt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(function() {
      console.log("Service worker registered!");
    })
    .catch(function(err) {
      console.log(err);
    });
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
