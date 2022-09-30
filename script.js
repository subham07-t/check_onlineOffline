const wrapper = document.querySelector(".wrapper");
const toast = wrapper.querySelector(".toast");
const wifiIcon = wrapper.querySelector(".icon");
const title = wrapper.querySelector(".details span"),
  subtitle = wrapper.querySelector(".details p");
const closeIcon = wrapper.querySelector(".close-icon");

window.onload = () => {
  function ajax() {
    let xmlr = new XMLHttpRequest();
    xmlr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xmlr.onload = () => {
      if (xmlr.status === 200 && xmlr.status < 300) {
        toast.classList.remove("offline");
        title.innerText = "You're online now";
        subtitle.innerText = "Hurray! Internet is connected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

        closeIcon.onclick = () => {
          wrapper.classList.add("hide");
        };

        // setTimeout(() => {
        //   wrapper.classList.add("hide");
        // }, 7000);
      } else {
        offline();
      }
    };
    xmlr.onerror = () => {
      offline();
    };
    xmlr.send();
  }

  function offline() {
    wrapper.classList.remove("hide");
    toast.classList.add("offline");
    title.innerText = "You're offline now";
    subtitle.innerText = "Opps! Internet is disconnected.";
    wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
  }

  setInterval(() => {
    ajax();
  }, 100);
};
