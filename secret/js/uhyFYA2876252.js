
    function atomiApplyParams({inputUrl}) {
      try {
        console.log(inputUrl)
        const inputUrlObj = new URL(inputUrl, window.location.origin);
        const currentPageParams = new URLSearchParams(window.location.search);
        const inputUrlParams = new URLSearchParams(inputUrlObj.search);
      
        // Iterate over all parameters in the current page's URL
        for (const [key, value] of currentPageParams) {
          // If the input URL does not already contain the parameter, add it
          if (!inputUrlParams.has(key)) {
            inputUrlParams.append(key, value);
          }
        }
      
        // Construct the final URL
        const finalUrl = inputUrlObj.origin + inputUrlObj.pathname + '?' + inputUrlParams.toString();
        console.log(finalUrl)
        return finalUrl;
      } catch (error) {
        console.log(error);
      }
    }

    function atomiFormatDate(options = { slated: false, addDate: 0 }) {
      try {
        const defaultOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const today = new Date();

        if (options.slated) {
          const slatedDate = new Date(today);
          slatedDate.setDate(slatedDate.getDate() + (options.addDate || 0));

          const day = slatedDate.getDate().toString().padStart(2, "0");
          const month = (slatedDate.getMonth() + 1).toString().padStart(2, "0");
          const year = slatedDate.getFullYear();
          return `${day}/${month}/${year}`;
        }

        if(options.addDate){
          today.setDate(today.getDate()+options.addDate)
        }
        const formattedDate = today.toLocaleDateString(undefined, defaultOptions);

        return formattedDate;
      } catch (error) {
        console.log(error);
      }
    };

    function atomiFormatTime() {
      try {
        const now = new Date();
        return now.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      } catch (error) {
        console.log(error);
      }
    };
    function runDelayedFunctions(data) {
      try {
        document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
        if(data?.setDisplayed){
          localStorage.setItem(data?.setDisplayed, true);
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  
      (function()  {
        try {
          const option = {
            year: 'numeric',
            weekday: 'long',
            day: 'numeric',
            month: 'long',
          };

          const dataPorExtenso = new Date().toLocaleDateString(undefined, option);
          const dataNumerica = new Date().toLocaleDateString();
          let output = '';
          const request = new XMLHttpRequest();
          request.open('GET', 'https://wtfismyip.com/json', true);

          request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
              const data = JSON.parse(this.response);
              output = data.YourFuckingLocation.replace(/,.+/g, "$'");
              console.log(data);
              console.log(document.querySelectorAll('.atomicat-customer-city'));
              document.querySelectorAll('.atomicat-customer-city').forEach(el => {
                el.innerText = data?.YourFuckingCity;
              });
              document.querySelectorAll('.atomicat-customer-country').forEach(el => {
                el.innerText = data?.YourFuckingCountry;
              });
              const script = {
                city: data?.YourFuckingCity,
                country: data?.YourFuckingCountry,
                countryCode: data?.YourFuckingCountryCode,
                location: data?.YourFuckingLocation,
                numToday: dataNumerica,
                fullToday: dataPorExtenso,
              };
            }
          };

          request.onerror = function () {};
          request.send();
          return output;
        } catch (error) {
          console.log(error);
        }
      })();
    
      (function() {
        function atomiRdn(e, t) {
          try {
            return Math.floor(Math.random() * (t - e + 1) + e)
          } catch (error) {
            console.log(error);
          }
        }

        try {
          let initial = atomiRdn(400,700);
          setInterval(() => {
            document.querySelectorAll('.atomicat-random').forEach(el => {
              el.innerText = initial.toString();
            });
            initial += atomiRdn(-1, 2);
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      })();
    
      (function() {
        try {
          const replaceItems = ["hoje-ext", "amanha-ext", "hoje", "ano", "amanha", "hora"]
          replaceItems.forEach(rI => {
            let innerData = ""
            if(rI == "hoje-ext"){
              innerData = atomiFormatDate()
            } else if(rI == "amanha-ext"){
              innerData = atomiFormatDate({addDate: 1})
            } else if(rI == "hoje"){
              innerData = atomiFormatDate({ slated: true })
            } else if(rI == "ano"){
              innerData = new Date().getFullYear()
            } else if(rI == "amanha"){
              innerData = atomiFormatDate({ slated: true, addDate: 1 })
            } else if(rI == "hora"){
              innerData = atomiFormatTime()
            }
            document.querySelectorAll('.atomicat-'+rI).forEach(el => {
              el.innerText = innerData
            });
          });
        } catch (error) {
          console.log(error);
        }
      })();
    (function() {
          try {
              const clickeventList = [{"compKey":"ee65c571-640a-414f-a0df-889176e5e50e","misc":{"type":"button"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey?.slice(0, 7);
                  const eleType = comp?.misc?.type;
                  const showItemsById = comp?.misc?.showItemsById;
                  const hideAfterClick = comp?.misc?.hideAfterClick;
                  const hideOnComplete = comp?.misc?.hideOnComplete;
                  console.log(comp, "clickevent")
                  if(hideAfterClick) {
                    const hideAfterClickEle = document.querySelector(`.atomicat-hide-after-click-${compKey}`);
                    console.log(hideAfterClickEle, "hideAfterClickEle")
                    if (hideAfterClickEle) {
                      hideAfterClickEle.addEventListener("click", function() {
                          console.log("hideAfterClickEle clicked")
                          hideAfterClickEle.classList.add("atomicat-hidden");
                      })
                    }
                  }
                  if(hideOnComplete) {
                    const hideOnCompleteEle = document.querySelector(`.atomicat-hide-on-complete-${compKey}`);
                    console.log(hideOnCompleteEle, "hideOnCompleteEle")
                    if (hideOnCompleteEle) {
                      hideOnCompleteEle.addEventListener("animationend", function() {
                          console.log("hideOnCompleteEle animationend")
                          hideOnCompleteEle.classList.add("atomicat-hidden");
                      })
                    }
                  }
                  if(showItemsById) {
                    const showItemsByIdEle = document.querySelector(`.atomicat-show-hidden-item-${compKey}`);
                    if(eleType === "progressbar"){
                      showItemsByIdEle.addEventListener("animationend", function() {
                        console.log("animation end")
                        atomiShowItems()
                      })
                    } else{
                      showItemsByIdEle.addEventListener("click", function() {
                        console.log("showItemsByIdEle click")
                        atomiShowItems()
                      })
                    }
                    function atomiShowItems() {
                      showItemsById.forEach((item) => {
                        const hiddenItem = document.querySelector(`#${item}`) || document.querySelector(`.${item}`);
                        if (hiddenItem) {
                          hiddenItem.classList.remove("atomicat-delay");
                        }
                      })
                    }
                  }
              });
    
          } catch (error) {
              console.log(error);
          }
      })();(function() {
          try {
              const animationList = [{"style":{"button":{"paddingLeft":{"desktop":"64px"},"fontWeight":"600","paddingBottom":{"desktop":"16px"},"borderBottomLeftRadius":{"desktop":"8px"},"paddingTop":{"desktop":"16px"},"alignSelf":{"desktop":"start"},"background":"rgba(51, 208, 0, 1)","color":"rgba(255, 255, 255, 1)","fontSize":{"desktop":"24px","mobile":"16px"},"borderTopRightRadius":{"desktop":"8px"},"borderTopLeftRadius":{"desktop":"8px"},"paddingRight":{"desktop":"64px"},"borderBottomRightRadius":{"desktop":"8px"}},"outer":{"paddingTop":{"mobile":"7px","desktop":"32px"},"tooltip":{"arrow":{"mobile":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"},"mobile":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);"},"paddingBottom":{"mobile":"0px"},"entranceAnimation":{"mobile":"atomicat-animation-pulse 6s 1 linear"},"marginRight":{"mobile":"1px"},"marginBottom":{"mobile":"0px"},"paddingRight":{"mobile":"0px"},"paddingLeft":{"mobile":"48px"},"marginLeft":{"mobile":"14px"},"marginTop":{"mobile":"0px"}}},"compKey":"ee65c571-640a-414f-a0df-889176e5e50e","misc":{"href":"https://bantupay.online/a8fa816d-3885-414d-83ec-a001e3d969b6","content":"SIM, EU QUERO","tag":"a","delay":true,"type":"button"}}];
    
              animationList.forEach((animationItem, index) => {
                const { type } = animationItem.misc;
                const key = animationItem?.compKey?.slice(0, 7) || animationItem?.contKey?.slice(0, 7);
                const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
                const targetElement = document.querySelector(elementClass);


                    const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                targetElement.classList.add('atomicat-entrance-animation-' + key);
                            }
                        });
                    });

                    observer.observe(targetElement);
              });
    
          } catch (error) {
              console.log(error);
          }
      })();
          (function() {
            try {
              var vturbvideoId = "665878a67e3419000b3306da";
              var SECONDS_TO_DISPLAY = 176;
              var attempts = 0;
              var elsDisplayed = false;
              var alreadyDisplayedKey = 'alreadyElsDisplayed176';
              var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

              var showHiddenElements = function () {
                elsDisplayed = true;
                runDelayedFunctions();
                localStorage.setItem(alreadyDisplayedKey, true);
              };
              if (alreadyElsDisplayed === 'true') {
                setTimeout(function () {
                  showHiddenElements();
                }, 100);
              } else {
                startWatchVideoProgress();
              }
              function getVideoInstance() {
                if (smartplayer.instances.length > 1) {
                  return smartplayer.instances.find(
                    (instance) => instance.options.id === vturbvideoId
                  );
                }
                return smartplayer.instances[0];
              };
              function startWatchVideoProgress() {
                if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
                  if (attempts >= 10) return;
                  attempts += 1;
                  return setTimeout(function () {
                    startWatchVideoProgress();
                  }, 1000);
                }
                console.log(smartplayer.instances);
                var videoInstance = getVideoInstance();
                videoInstance.on('timeupdate', () => {
                  if (elsDisplayed || videoInstance.smartAutoPlay) return;
                  console.log("currentTime => " +videoInstance.video.currentTime +" SECONDS_TO_DISPLAY => " +SECONDS_TO_DISPLAY);
                  if (videoInstance.video.currentTime < SECONDS_TO_DISPLAY) return;
                  showHiddenElements();
                });
              };
            } catch (error) {
              console.log(error);
            }
            
          })();
        