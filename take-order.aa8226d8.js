(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),d=(document.querySelector(".js-close-menu"),document.querySelector("[data-menu-btn]"));t.addEventListener("click",(()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is__open"),d.classList.toggle("is__open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(d=>{d.matches&&(e.classList.remove("is__open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),(()=>{const e={openModalBuyBtn:document.querySelector("[data-modal-buy-open]"),closeModalBuyBtn:document.querySelector("[data-modal-buy-close]"),modalBuy:document.querySelector("[data-modal-buy]"),modalBuyLink:document.querySelector("[data-modal-buy-link]"),openModalAddBtn:document.querySelector("[data-modal-add-open]"),closeModalAddBtn:document.querySelector("[data-modal-add-close]"),modalAdd:document.querySelector("[data-modal-add]"),modalAddLink:document.querySelector("[data-modal-add-link]")};function t(){e.modalBuy.classList.toggle("is-hidden")}function d(){e.modalAdd.classList.toggle("is-hidden")}e.openModalBuyBtn.addEventListener("click",t),e.closeModalBuyBtn.addEventListener("click",t),e.modalBuyLink.addEventListener("click",(function(){e.modalBuy.classList.add("is-hidden")})),e.openModalAddBtn.addEventListener("click",d),e.closeModalAddBtn.addEventListener("click",d),e.modalAddLink.addEventListener("click",(function(){e.modalAdd.classList.add("is-hidden")}))})();const e=document.querySelector(".form__select"),t=e.querySelector(".form__select__title"),d=e.querySelectorAll(".form__select__label");t.addEventListener("click",(()=>{"active"===e.getAttribute("data-state")?e.setAttribute("data-state",""):e.setAttribute("data-state","active")}));for(let o=0;o<d.length;o++)d[o].addEventListener("click",(d=>{t.textContent=d.target.textContent,e.setAttribute("data-state","")}));
//# sourceMappingURL=take-order.aa8226d8.js.map
