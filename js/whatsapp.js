function openWhatsApp(packageName) {
  const phoneNumber = "918123568002";
  const message = `Hi, I am interested in ${packageName}. Please share more details.`;
  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
}

(function injectGlobalWhatsAppWidget() {
  if (document.getElementById("global-whatsapp-widget")) return;

  const style = document.createElement("style");
  style.id = "global-whatsapp-widget-style";
  style.textContent = `
    #global-whatsapp-widget{
      position:fixed;
      right:18px;
      bottom:18px;
      width:56px;
      height:56px;
      border-radius:50%;
      background:#25D366;
      color:#fff;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 8px 22px rgba(0,0,0,.24);
      z-index:99999;
      text-decoration:none;
      transition:transform .2s ease, box-shadow .2s ease;
      font-family:Arial,sans-serif;
    }
    #global-whatsapp-widget:hover{
      transform:translateY(-2px) scale(1.03);
      box-shadow:0 12px 26px rgba(0,0,0,.28);
    }
    #global-whatsapp-widget svg{
      width:30px;
      height:30px;
      fill:#fff;
      display:block;
    }
    #global-whatsapp-widget::after{
      content:'Chat with us';
      position:absolute;
      right:66px;
      white-space:nowrap;
      background:#111827;
      color:#fff;
      font-size:12px;
      padding:7px 10px;
      border-radius:8px;
      opacity:0;
      transform:translateX(6px);
      transition:all .2s ease;
      pointer-events:none;
    }
    #global-whatsapp-widget:hover::after{
      opacity:1;
      transform:translateX(0);
    }
    @media (max-width: 640px){
      #global-whatsapp-widget{
        width:52px;
        height:52px;
        right:14px;
        bottom:14px;
      }
      #global-whatsapp-widget svg{
        width:28px;
        height:28px;
      }
      #global-whatsapp-widget::after{
        display:none;
      }
    }
  `;

  const link = document.createElement("a");
  link.id = "global-whatsapp-widget";
  link.href = "https://wa.me/918123568002?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20travel%20packages.";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", "Chat on WhatsApp");

  link.innerHTML = `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M19.11 17.36c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.35-.8-.71-1.33-1.6-1.49-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.11 2.84.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.27.23-.62.23-1.16.16-1.27-.07-.11-.25-.18-.52-.32zM16.01 3C8.83 3 3 8.82 3 16c0 2.54.74 5.01 2.13 7.12L3.5 29l6.05-1.58A13 13 0 0 0 16.01 29C23.19 29 29 23.18 29 16S23.19 3 16.01 3zm0 23.65c-2.11 0-4.17-.57-5.98-1.65l-.43-.25-3.59.94.96-3.5-.28-.45A10.6 10.6 0 0 1 5.37 16c0-5.87 4.77-10.64 10.64-10.64 2.84 0 5.5 1.11 7.5 3.11a10.56 10.56 0 0 1 3.1 7.53c0 5.87-4.77 10.65-10.6 10.65z"/>
    </svg>
  `;

  document.head.appendChild(style);
  document.body.appendChild(link);
})();
