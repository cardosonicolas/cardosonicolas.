const $divContentWrapper = document.querySelector(".contentWrapper");
      const $divLoaderWrapper = document.querySelector(".loaderWrapper");
      window.addEventListener("load", () => {
         $divContentWrapper.style.display = "block";
         $divLoaderWrapper.style.display = "none";
      })