import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  overlayData: {},
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.PROD ? "/update" : "http://localhost:3000/update";

export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("update", function (data) {
  state.overlayData = data;
  //console.log(state);
});
