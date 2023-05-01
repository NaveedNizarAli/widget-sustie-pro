export class Widget {
    constructor({ position = 'bottom-right'}) {
        this.position = this.getPosition(position);
        this.open = false;
        this.initialise();
        this.createStyles();
        this.products     = []
        this.GiftIcon     = "https://gregarious-cupcake-fa0626.netlify.app" + '/assets/gift.svg';
        this.StarIcon     = "https://gregarious-cupcake-fa0626.netlify.app" + '/assets/star.svg';
    }

    getPosition(position) {
        const [vertical, horizontal] = position.split('-');
        return {
            [vertical]: '30px',
            [horizontal]: '30px',
        };
    }
    
    initialise() {

        // api link 
        // 'https://sheetdb.io/api/v1/m95hi9ve95rqt'
        let api = 'https://sheetdb.io/api/v1/m95hi9ve95rqt'

        setTimeout(()=>{
            const container = document.createElement('div');
            document.body.appendChild(container);

         
            this.messageContainer = document.createElement('div');
            this.messageContainer.classList.add('message-container');

            fetch(api)
                .then((response) => response.json())
                .then((data) => {
                    // let url = window.location.href;
                    let url = "https://nidarosfashion.com/products/easy-shorts-shorts-gap";

                    if(url.includes("?")) url = url.split("?")[0]
                    console.log(url, data);

                    let check = false;
                    let border;
                    data.map((element, idx)=>{
                        if(element.product_url === url){
                            if(element.show.toLowerCase() === "yes") {
                                check = true;
                                document.getElementById("loader").style.display = "block"
                            }   

                            border = element.main_color
                            document.getElementById("water").innerText = element.co2_ref_water + " "
                            document.getElementById("car").innerText = element.co2_ref_car + " "
                            document.getElementById("charge").innerText = element.co2_ref_smartphones + " "

                            //colors
                            document.getElementsByClassName("tree")[0].style.background = element.sub_color; 
                            var circles = document.getElementsByClassName("circle");
                            for(var i = 0; i < circles.length; i++)
                            {
                                document.getElementsByClassName("circle")[i].style.background = element.main_color;
                            }

                            //text
                            document.getElementById("content_header_maintext").innerHTML = element.content_header_maintext
                            document.getElementById("content_header_subtext").innerHTML = element.content_header_subtext
                            document.getElementById("content_co2_first_maintext").innerHTML = element.content_co2_first_maintext
                            document.getElementById("content_co2_second_maintext").innerHTML = element.content_co2_second_maintext
                            document.getElementById("content_co2_third_maintext").innerHTML = element.content_co2_third_maintext
                            document.getElementById("content_co2_first_subtext").innerHTML = element.content_co2_first_subtext
                            document.getElementById("content_co2_second_subtext").innerHTML = element.content_co2_second_subtext
                            document.getElementById("content_co2_third_subtext").innerHTML = element.content_co2_third_subtext
                            document.getElementById("content_climate_text").innerHTML = element.content_climate_text
                            document.getElementById("content_climate_headertext").innerHTML = element.content_climate_headertext

                            //climate
                            let text1 = element.content_climate_subtext.split("plant")[0] + "plant "
                            let text2 = element.content_climate_subtext.split("plant")[1];
                            console.log("text1", text1, text2, element.climate_action_trees)
                            document.getElementById("content_climate_subtext").innerHTML = text1 + element.climate_action_trees + " " + text2
                            
                        }
                    })
                   

                    setTimeout(()=>{
                        if(check) {
                            document.getElementsByClassName("message-container")[0].style.border = "2px solid " + border; 
                            document.getElementById("content").style.display = "block"
                            document.getElementById("loader").style.display = "none"

                        }
                    },2000)

            });
            
            this.createMessageContainerContent();

            

            container.appendChild(this.messageContainer);

            if(document.getElementsByClassName("addons-block"))document.getElementsByClassName("addons-block")[0].appendChild(container)
        },100)
    }


    createMessageContainerContent() {
        this.messageContainer.innerHTML = '';
        var main = document.createElement('div')
        main.innerHTML = this.createWidget()
        this.messageContainer.appendChild(main);
    }


    createStyles() {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
            .icon {
                cursor       : pointer;
                width        : 32px;
                height       : 32px;
                position     : absolute;
                top          : 50%;
                left         : 50%;
                transform    : translate(-50%,-50%);
                border-radius: 50%;
                transition   : transform .3s ease;
            }
           
            .button-container {
                background-color: #2960EC;
                width           : 48px;
                height          : 48px;
                position        : relative;
                border-radius   : 50%;
            }
            .message-container {
                background   : #ffffff;
                border-radius: 36px;
                max-width    : 100%;
                overflow-y   : auto;
                transition   : max-height .2s ease;
                font-family: 'Inter', sans-serif;
            }

            .message-container {
                -ms-overflow-style: none;  /* Internet Explorer 10+ */
                scrollbar-width: none;  /* Firefox */
            }
            .message-container::-webkit-scrollbar { 
                display: none;  /* Safari and Chrome */
            }

        
            
            .rowCircle{
                margin-top: 8px;
                width : 100%;
                display: flex;
                flex-direction : row;
                justify-content: space-evenly;
            }

            .circle {
                border-radius: 50%;
                width: 75px;
                height: 75px;
            }

            .rowCircle .col-md-4{
                text-align: -webkit-center;
            }

            .circle .glass{
                padding-top: 14px;
                box-sizing: inherit;
            }

            
            .circle .car{
                padding-top: 27px;
                box-sizing: inherit;
            }

            
            .circle .mobile{
                padding-top: 14px;
                box-sizing: inherit;
            }


            .mainHead{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 23px;
                text-align: center;
                color: #000000;
                margin-top: 14px;
            }

            .subHead {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                text-align: center;
                color: #000000;
                margin-top: 5px;
            }

            .text{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 15.8834px;
                line-height: 19px;
                text-align: center;
            }

            .caption{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 13px;
                line-height: 14px;
                text-align: center;
                color: #000000;
                margin-top: 12px;
            }
            
            .tree{
                display: flex;
                padding: 8px 0px;
                margin-left: 25%;
                margin-top: 12px;
                flex-direction : row;
                justify-content: space-evenly;               
                width: 50%;
                border-radius: 8px;
                margin-bottom: 12px;
            }
          

            .treeHead {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 13.6676px;
                line-height: 16px;
                text-align: right;
                color: #333333; 
            }

            .bold {
                font-weight: 700;
            }

            .colTree {
                text-align: center;
                padding: 0px 14px;
                text-align-last: center;
            }
            


            @media only screen and (max-width: 600px) {
                .message-container {
                    width: 100% !important;
                }

                .tree{
                    width: 70%;
                    margin-left: 15%;
                }
                
                .flowSection {
                    width: 100% !important;
                }

                .mainHead{
                    font-size: 14px;
                }

                .subHead {
                    font-size: 12px;
                }

                .text {
                    font-size: 12px;
                }

                .caption {
                    font-size: 11px;
                }

                .circle{
                    width : 60px;
                    height : 60px; 
                }

                .car{
                    width : 42px;
                    height : auto;
                }

                .glass{
                    width : 26px;
                    height : auto;
                }

                .mobile{
                    width : 20px;
                    height : auto;
                }

                .circle .glass{
                    padding-top: 14px;
                    box-sizing: inherit;
                }
    
                
                .circle .car{
                    padding-top: 22px;
                    box-sizing: inherit;
                }
    
                
                .circle .mobile{
                    padding-top: 12px;
                    box-sizing: inherit;
                }

                .colTree svg {
                    width : 36px;
                    height: 36px;
                }

                .treeHead  {
                    font-size: 11px;
                }
            }


        `.replace(/^\s+|\n/gm, '');
        document.head.appendChild(styleTag);
    }


  


    createWidget(){
        return(
            ` <div id="flowSection" class="flowSection w-100 bg-color-neutral0" style="z-index:99; background: #ffffff; width: 100%; overflow: hidden;">
                <div id="loader" style="display: none; text-align: -webkit-center; margin-top: 18%;">
                    <img class="" src="https://widget.sustie.io/assets/loader.gif" width="60px" height="60px" />              
                </div>
                <div id="content" style="display: none;">
                    <div class="mainHead" id="content_header_maintext"></div> 
                    <div class="subHead" id="content_header_subtext"></div>

                    <div class="rowCircle">
                        <div class="col-md-4">
                            <div class="circle">
                                <img class="glass" src="https://widget.sustie.io/assets/glass.png" width="40px" height="47px"/>                       
                            </div>
                            <div class="subHead"><span id="water"></span><span  id="content_co2_first_maintext"></span></div>
                            <div class="text" id="content_co2_first_subtext"></div>
                        </div>

                     
                        <div class="col-md-4">
                            <div class="circle">
                                <img class="car" src="https://widget.sustie.io/assets/car.png" width="53px" height="21px"/>                      
                            </div>
                            <div class="subHead svg"><span id="car"></span><span  id="content_co2_second_maintext"></span></div>
                            <div class="text" id="content_co2_second_subtext"></div>
                        </div>

                        <div class="col-md-4">
                            <div class="circle">
                                <img class="mobile" src="https://widget.sustie.io/assets/mobile.png" width="28px" height="48px" />              
                            </div>
                            <div class="subHead"><span id="charge"></span><span  id="content_co2_third_maintext"></span></div>
                            <div class="text" id="content_co2_third_subtext"></div>
                        </div>

                    </div>

                    <div class="caption" id="content_climate_text"></div>

                    <div class="tree">
                            <div class="colTree">
                                <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.5492 21.2569C38.8241 21.2118 39.1053 21.1897 39.391 21.1897C42.7122 21.1897 45.4039 24.2342 45.4039 27.9897C45.4039 31.745 42.7122 34.7896 39.391 34.7896C36.0697 34.7896 33.378 31.745 33.378 27.9897C33.378 27.3061 33.4672 26.6464 33.6335 26.0248" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M39.3909 28.195V45.1531" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M39.3909 31.8411L41.6821 29.55" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M40.5028 14.607C39.9297 13.2023 38.7987 12.0846 37.3854 11.5284C37.0804 11.408 36.8876 11.0968 36.9273 10.7705C36.9442 10.6299 36.9529 10.4875 36.9529 10.3417C36.9529 8.66062 35.7946 7.25023 34.233 6.8639C33.9009 6.78166 33.6706 6.47907 33.6706 6.13695V6.12996C33.6706 3.40989 31.4653 1.20544 28.7462 1.20544C26.0262 1.20544 23.8209 3.40989 23.8209 6.12996V6.13695C23.8209 6.47907 23.5906 6.78166 23.2585 6.8639C21.6969 7.25023 20.5385 8.66062 20.5385 10.3417C20.5385 10.4875 20.5474 10.6299 20.5642 10.7705C20.604 11.0968 20.4121 11.408 20.1061 11.5284C19.7259 11.6787 19.366 11.8687 19.0318 12.0952" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.1389 23.8788C21.5059 24.565 22.0939 25.283 23.0348 25.7339C24.6715 26.5174 26.2499 25.9471 26.6213 25.8002C27.8151 25.3264 28.4845 24.481 28.7462 24.1087C29.0071 24.481 29.6764 25.3264 30.8702 25.8002C31.2416 25.9471 32.8201 26.5174 34.4567 25.7339C36.2361 24.8825 36.7569 23.0671 36.8971 22.3406C36.9329 22.1546 37.0642 22.003 37.2422 21.9385C39.1148 21.2604 40.5206 19.6063 40.8428 17.5901" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M28.7459 14.7574V45.1531" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M28.7459 19.4766L25.6544 16.3852" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M28.7459 20.7494L31.8373 17.658" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.45647 45.1531H45.4041" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.56375 9.33663C6.32625 4.86095 8.69828 1.20552 11.3072 1.20552C16.7477 1.20552 21.1581 17.1018 21.1581 23.1836C21.1581 29.2653 16.7477 34.1954 11.3072 34.1954C5.86661 34.1954 1.4562 29.2653 1.4562 23.1836C1.4562 20.6302 2.23364 16.3467 3.53836 12.2359" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.3072 20.9372V45.1531" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.3072 25.3115L14.2692 22.3495" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.3072 28.1225L8.3452 25.1605" stroke="black" stroke-width="1.70845" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>

                            <div class="colTree">
                                <div class="treeHead bold" id="content_climate_headertext"></div>
                                <div class="treeHead" id="content_climate_subtext"></div>
                            <div>
                    </div>
                </div>
              </div>
            `
        )
    }

}