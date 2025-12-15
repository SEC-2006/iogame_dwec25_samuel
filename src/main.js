import "./style.scss"
import { router } from "./router";

// eslint-disable-next-line
import * as bootstrap from 'bootstrap'

import { renderHeader, renderHeaderUser } from "./components/header"
//import { renderContent } from "./components/content";
import { renderFooter } from "./components/footer";

document.addEventListener("DOMContentLoaded",async ()=>{
  const appDiv = document.querySelector('#app');
  const headerDiv = document.querySelector('#header');
  const footerDiv = document.querySelector('#footer');

  //headerDiv.innerHTML = renderHeader();
  if(localStorage.getItem("email") != null) {
    headerDiv.replaceChildren( renderHeaderUser() );
  } else {
    headerDiv.replaceChildren( renderHeader() );
  }
  footerDiv.innerHTML = renderFooter();
  //window.location.hash = "#";
  await router(window.location.hash, appDiv);
  window.addEventListener("hashchange", async () => {
    await router(window.location.hash, appDiv);
  });
  //appDiv.innerHTML = renderContent(Array(120).fill(0).map((_,i)=>i));
});