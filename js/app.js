// var typed5 = new Typed('#language', {
//     strings: [
//         'ウェブ開発者', 
//         'ウェブデザイナー',
//          'ハン ワィ トゥン'],
//     typeSpeed: 60,
//     backSpeed: 60,
//     cursorChar: '_',
//     shuffle: true,
//     smartBackspace: false,
//     loop: true
//   });

// Index Type Js

// var typed = new Typed('.type', {
//     strings: [
//         'Web Developer',
//         'Web Designer',
//         'Han Wai Htun',
//         'Photographer',
//         'Front-end Developer'
//     ],
//     typeSpeed:80,
//     backSpeed:80,
//     loop:true,
//     });

// index type
    var type = new Typed('.learn', {
        strings: [
            'HTML',
            'CSS',
            'JavaScript',
            'jQuery',
            'Bootstrap',
            'Photo',
            'Adobe Xd',
            'Adobe AI'
        ],
        typeSpeed:90,
        backSpeed:90,
        loop:true,
        });
    
    // Language Type

            wow = new WOW(
                {
                boxClass:     'wow',      // default
                animateClass: 'animate__animated', // default
                offset:       0,          // default
                mobile:       true,       // default
                live:         true        // default
              }
              )
              wow.init();



    $(document).ready(function(){
        $('.venobox').venobox({
        framewidth : '400px',                            // default: ''
        frameheight: 'auto',                            // default: ''
        border     : '3px',                             // default: '0'
        bgcolor    : '#ffffffff',                          // default: '#ffffffff'
        titleattr  : 'data-title',                       // default: 'title'
        numeratio  : true,                               // default: false
        infinigall : true,                               // default: false
        share      : ['facebook', 'twitter', 'download'] // default: []
            }); 
            });



            $(".list").click(function(){
                let value = $(this).attr("data-filter");
        
        
                if(value == "all"){
                     $(".itemBox").show("1000");
                }
        
                else{
                    $(".itemBox").not("."+ value).hide("1000")
                    $(".itemBox").filter("."+ value).show("1000");

                }



            })
                //add active class in selected item


            $('.list').click(function () {
                $(this).addClass("active").siblings().removeClass("active")
              })

            $(window).scroll(function(){
                let screenHeight = $(this).height();
                let currentPosition = $(this).scrollTop();

                if(currentPosition >= screenHeight-200){
                    $('.top').addClass("top-show");
                }
                else{
                    $('.top').removeClass("top-show")
                }
            })
        
            


            //nav-bar scroll function
            
            $(window).scroll(function(){
                let screenHeight = $(this).height();
                // console.log(screenHeight)

                let currentPosition = $(this).scrollTop();
                // console.log(currentPosition);

                if(currentPosition >= screenHeight-200){
                    $('.nav-bar').addClass("scroll-nav");
                    navScroll()
                }
                else{
                    $('.nav-bar').removeClass("scroll-nav");
                    setActive("home")
                }

            })



            //nav-bar active 
            function setActive(current) {
                $(".nav-link").removeClass("current-section")
                $(`.nav-link[href='#${current}']`).addClass("current-section");
              }

              function navScroll() {
                let currentSection = $("section[id]")

                currentSection.waypoint(function (direction) {
                    if(direction == "down"){
                        let currentsectionId = $(this.element).attr("id");


                        setActive(currentsectionId)
                    }
                  },{
                      offset:'50px',
                  })


                  currentSection.waypoint(function (direction) {
                    if(direction == "up"){
                        let currentsectionId = $(this.element).attr("id");
                    // console.log(currentsectionId);


                        setActive(currentsectionId)
                    }
                  },{
                      offset:'0px',
                  }
                  )

                }

                navScroll()


                //light mode & dark mode
                
                let lightModeToggle= document.getElementById("checkbox");
                lightModeToggle.addEventListener("change",function () {
                    $("body").toggleClass("light_mode")
                })

                //change color

                document.querySelector(".color-switcher-btn").addEventListener("click",function(){
                    document.querySelector(".color-switcher").classList.toggle("active")
                })


                let themeButton = document.querySelectorAll(".theme-buttons");
                themeButton.forEach(color =>{
                    color.addEventListener("click", function () {
                        let dataColor = color.getAttribute("data-color");
                        document.querySelector(":root").style.setProperty("--main-color", dataColor);
                      })
                });

                //change phone size nav-bar button

                $(".navbar-toggler").click(function(){
                    let x = $(".navbar-toggler2").html(` <i class="fas fa-times fa-2x menu-icon-2"></i>`)
                     $(this).addClass("d-none");
                     x.removeClass("d-none")
                 })
 
                 $(".navbar-toggler2").click(function(){
                     let y =  $(".navbar-toggler").html(`<i class="fa fa-bars fa-2x menu-icon-1"></i>`)
                     $(this).addClass("d-none");
                     y.removeClass("d-none")
                   
                   })
 
                   //loader
 
                   $(window).on("load",function(){
                     $(".loader-container").fadeOut(function(){
                       $(this).remove();
                     });
                   })


                //    Change Language English To Japan
                const languageToggle = document.getElementById('languageToggle');
                languageToggle.addEventListener('change', function() {
                const selectedLanguage = this.checked ? 'jp' : 'en';
                let newPageURL = '';


                if (selectedLanguage === "jp") {
                    newPageURL = "jp.html"
                }else if(selectedLanguage === "en"){
                    newPageURL = 'index.html';
                }

                if (newPageURL) {
                    window.location.href = newPageURL;
                }
                
                localStorage.setItem('selectedLanguage', selectedLanguage);
                });

                document.addEventListener('DOMContentLoaded', function() {
                const storedLanguage = localStorage.getItem('selectedLanguage');
                if (storedLanguage === 'jp') {
                    languageToggle.checked = true;
                } else if(storedLanguage === 'en'){
                    languageToggle.checked = false;
                }

                });


                // if(lightMode === null ){
                //         localStorage.setItem("lightMode",false)
                //     }

                // lightModeToggle.addEventListener("click",function(){
                //   let  lightMode = localStorage.getItem("lightMode");

                //     if(lightMode !== true){
                //         $("body").addClass("light_mode");
                //         localStorage.setItem("lightMode", true);
                //         console.log("true")
                //     }

                //     else
                //     {
                //         $("body").removeClass("light_mode");
                //         localStorage.setItem("lightMode", false);
                //         console.log("false")
                //     }
                    
                // })

                 //light mode & dark mode loacl Storage

                // let lightMode = localStorage.getItem("lightMode");
                // const lightModeToggle= document.getElementById("checkbox")

                // const enableLightMode = function(){
                //     //1. add the class light_mode
                //     $("body").addClass("light_mode");
                //     // 2. upadte the local storage 
                //     localStorage.setItem("lightMode", true);

                // }

                // const disableLightMode = function(){
                //     //1. add the class light_mode
                //     $("body").removeClass("light_mode");
                //     // 2. upadte the local storage 
                //     localStorage.setItem("lightMode", false);

                // }

                // if(lightMode === true){
                //     enableLightMode();
                // }



                // lightModeToggle.addEventListener("click",function(){
                //     lightMode = localStorage.getItem("lightMode");

                //     if(lightMode !== true){
                //         enableLightMode();
                //     }

                //     else{
                //         disableLightMode();
                //     }
                // })

                 

                // let check = document.getElementById("checkbox");
                // let body = document.getElementsByClassName("body");

                // if(localStorage.getItem("lightMode")=== null ){
                //     localStorage.setItem("lightMode","false")
                // }


                // let lightMode = localStorage.getItem("lightMode")
                // if(lightMode === true){
                //     $("body").addClass("light_mode")

                // }



                //  function changeStatus(){
                //     if(localStorage.getItem('lightMode')==="true"){
                //         localStorage.setItem("lightMode","false")
                        
                //         $("body").removeClass("light_mode")
                        
                //      }
                //      else{
                //          localStorage.setItem("lightMode","true");
                  
                //         $("body").addClass("light_mode")
                       

                //      }
                //    }
                




               

               

        
        
                







                

                