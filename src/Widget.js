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

            console.log('window ', document.currentScript)

            console.log('script Url ', document.currentScript.getAttribute('brand'))


            setTimeout(()=>{
            const container = document.createElement('div');
            container.style.position = 'fixed';
            Object.keys(this.position)
                .forEach(key => container.style[key] = this.position[key]);
            console.log('document ', document.body);
            document.body.appendChild(container);

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container')
            buttonContainer.setAttribute("id", "widgetButton")

            const chatIcon = document.createElement('img');
            chatIcon.src = 'https://gregarious-cupcake-fa0626.netlify.app/assets/chat.svg';
            chatIcon.classList.add('icon');
            this.chatIcon = chatIcon;

            const closeIcon = document.createElement('img');
            closeIcon.src = 'https://gregarious-cupcake-fa0626.netlify.app/assets/cross.svg';
            closeIcon.classList.add('icon', 'hidden');
            this.closeIcon = closeIcon;

            buttonContainer.appendChild(this.chatIcon);
            buttonContainer.appendChild(this.closeIcon);
            buttonContainer.addEventListener('click', this.toggleOpen.bind(this));

            this.messageContainer = document.createElement('div');
            this.messageContainer.classList.add('hidden', 'message-container');

            fetch('https://sheetdb.io/api/v1/m95hi9ve95rqt')
                .then((response) => response.json())
                .then((data) => {
                    let url = window.location.href;
                    console.log(url, data);

                    data.map((element, idx)=>{
                        if(element.product_url === url){
                            document.getElementById("water").innerText = element.co2_ref_water
                            document.getElementById("car").innerText = element.co2_ref_car
                            document.getElementById("charge").innerText = element.co2_ref_smartphones
                            document.getElementById("tree").innerText = element.climate_action_trees
                        }
                    })
            });
            
            this.createMessageContainerContent();

            

            container.appendChild(this.messageContainer);
            container.appendChild(buttonContainer);
        },500)
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
            .hidden {
                transform: scale(0);
            }
            .button-container {
                background-color: #2960EC;
                width           : 48px;
                height          : 48px;
                position        : relative;
                border-radius   : 50%;
            }
            .message-container {
                border       : 2px solid #CFD5BE;
                border-radius: 36px;
                right        : 32px;
                bottom       : 60px;
                position     : absolute;
                max-height   : 300px;
                max-width    : 600px;
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

            .message-container.hidden {
                max-height: 0px;
            }
            
            .rowCircle{
                margin-top: 8px;
                width : 100%;
                display: flex;
                flex-direction : row;
                justify-content: space-evenly;
            }

            .circle {
                background: #CFD5BE;
                border-radius: 50%;
                width: 75px;
                height: 75px;
            }

            .rowCircle .col-md-4{
                text-align: -webkit-center;
            }

            .circle .glass{
                padding: 16px 18px;
                box-sizing: inherit;
            }

            
            .circle .car{
                padding: 27px 12px;
                box-sizing: inherit;
            }

            
            .circle .mobile{
                padding: 14px 24px;
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
                background: rgba(237, 234, 211, 0.54);
                border-radius: 8px;
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
                text-align-last: center;
            }
            


        `.replace(/^\s+|\n/gm, '');
        document.head.appendChild(styleTag);
    }


    toggleOpen() {
        this.open = !this.open;
        if (this.open) {

            fetch('https://sheetdb.io/api/v1/m95hi9ve95rqt')
                .then((response) => response.json())
                .then((data) => {
                    let url = window.location.href;
                    console.log(url, data);

                    data.map((element, idx)=>{
                        if(element.product_url === url){
                            document.getElementById("water").innerText = element.co2_ref_water
                            document.getElementById("car").innerText = element.co2_ref_car
                            document.getElementById("charge").innerText = element.co2_ref_smartphones
                            document.getElementById("tree").innerText = element.climate_action_trees
                        }
                    })
            });
            this.chatIcon.classList.add('hidden');
            this.closeIcon.classList.remove('hidden');
            this.messageContainer.classList.remove('hidden');
            let a = document.getElementById('widgetButton').style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
        } else {
            fetch('https://sheetdb.io/api/v1/m95hi9ve95rqt')
                .then((response) => response.json())
                .then((data) => {
                    let url = window.location.href;
                    console.log(url, data);

                    data.map((element, idx)=>{
                        if(element.product_url === url){
                            document.getElementById("water").innerText = element.co2_ref_water
                            document.getElementById("car").innerText = element.co2_ref_car
                            document.getElementById("charge").innerText = element.co2_ref_smartphones
                            document.getElementById("tree").innerText = element.climate_action_trees
                        }
                    })
            });
            this.createMessageContainerContent();
            this.chatIcon.classList.remove('hidden');
            this.closeIcon.classList.add('hidden');
            this.messageContainer.classList.add('hidden');
            let a = document.getElementById('widgetButton').style.boxShadow = "none"
        }
    }


    createWidget(){
        return(
            ` <div class="flowSection w-100 bg-color-neutral0" style="height: 300px !important; width: 600px !important; overflow: hidden;">
                    <div class="mainHead">It is our mission to reduce waste and fashion pollution</div> 
                    <div class="subHead">This is the impact of buying this item</div>

                    <div class="rowCircle">
                        <div class="col-md-4">
                            <div class="circle">
                                <svg class="glass svg" width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6044 16.7613C31.4169 21.177 25.9848 19.9041 20.4931 18.6169C14.6776 17.2534 8.79165 15.8749 3.23165 21.8024L5.38962 42.9831C5.39545 43.0154 5.39862 43.0488 5.39862 43.0827C5.39862 43.5902 5.60433 44.0498 5.93686 44.3826C6.26938 44.7151 6.72899 44.9208 7.23678 44.9208C7.25319 44.9208 7.26908 44.9216 7.28496 44.923L31.9959 44.91C32.0174 44.9073 32.0393 44.906 32.0616 44.906C32.5694 44.906 33.0287 44.7003 33.3615 44.3678C33.6233 44.1059 33.8065 43.7652 33.8727 43.3842L33.8989 43.1298C33.8997 43.1091 33.9 43.0885 33.9 43.0678C33.9 43.0154 33.9071 42.9649 33.9206 42.9169L36.6044 16.7613ZM3.08603 20.374L1.31856 3.02551C1.32148 2.52222 1.52666 2.06685 1.8568 1.73671C2.18933 1.40418 2.64893 1.19847 3.15672 1.19847H36.176C36.6836 1.19847 37.1432 1.40418 37.476 1.73671C37.8056 2.06632 38.0105 2.5209 38.0142 3.02339L36.7749 15.1C31.7338 20.1133 26.2707 18.8337 20.7443 17.538C14.8438 16.1547 8.87479 14.7558 3.08603 20.374ZM0.218265 3.13618C0.212441 3.10388 0.209263 3.07052 0.209263 3.03663C0.209263 2.22279 0.539141 1.48599 1.07261 0.952521C1.60608 0.419315 2.34288 0.0891724 3.15672 0.0891724H36.176C36.9899 0.0891724 37.7267 0.419051 38.2602 0.952521C38.7936 1.48599 39.1235 2.22279 39.1235 3.03663C39.1235 3.06972 39.1206 3.10229 39.115 3.13379L35.0077 43.1634C34.9831 43.9394 34.6585 44.6397 34.1459 45.152C33.6125 45.6854 32.8757 46.0153 32.0618 46.0153C32.0547 46.0153 32.0478 46.0153 32.0407 46.0148L7.28655 46.028C7.27014 46.0296 7.25372 46.0301 7.23678 46.0301C6.42294 46.0301 5.68614 45.7003 5.15267 45.1668C4.62211 44.6362 4.29276 43.9039 4.28959 43.0951L0.218265 3.13618Z" fill="black"/>
                                </svg>                            
                            </div>
                            <div class="subHead"><span id="water"></span> days</div>
                            <div class="text">of drink water saved</div>
                        </div>

                     
                        <div class="col-md-4">
                            <div class="circle">
                                <svg class="car svg" width="53" height="21" viewBox="0 0 53 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8828 15.4788C14.8828 17.7702 13.0254 19.6278 10.7338 19.6278C8.44252 19.6278 6.58493 17.7702 6.58493 15.4788C6.58493 13.1874 8.44252 11.3298 10.7338 11.3298C13.0254 11.3298 14.8828 13.1874 14.8828 15.4788Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.8828 17.1384H38.9469" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.3207 14.892L10.1472 16.0655" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M47.2448 15.4788C47.2448 17.7702 45.3873 19.6278 43.0958 19.6278C40.8045 19.6278 38.9469 17.7702 38.9469 15.4788C38.9469 13.1874 40.8045 11.3298 43.0958 11.3298C45.3873 11.3298 47.2448 13.1874 47.2448 15.4788Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M42.5091 14.892L43.6826 16.0655" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.58492 16.3085L2.58187 15.1648C1.51318 14.8594 0.776352 13.8826 0.776352 12.7712V7.81601C0.776352 6.97908 1.39962 6.27311 2.23012 6.16928L5.29915 5.78565C6.6993 5.61061 8.0596 5.19882 9.32166 4.56769L13.2597 2.59872C14.8728 1.79212 16.6516 1.37227 18.455 1.37227H25.848C27.8997 1.37227 29.9086 1.95734 31.6395 3.05874L38.1171 7.18083C38.1171 7.18083 45.6391 7.18083 50.3317 9.36004C51.4938 9.89977 52.2236 11.0789 52.2236 12.3603V15.1151C52.2236 16.3996 51.4805 17.1383 50.564 17.1383" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.5424 7.18085H14.9419C13.8415 7.18085 12.7862 6.7437 12.008 5.96557L10.7339 4.69151" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M38.1171 7.18085H19.8617" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.2021 13.8192H35.6277" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M0.776375 9.67029H2.43594" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M49.7342 11.3298H51.7395" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M23.1808 7.18085V1.37228" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.6382 6.84375L14.7185 2.07189" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                          
                            </div>
                            <div class="subHead svg"><span id="car"></span>Km car</div>
                            <div class="text">emissions saved</div>
                        </div>

                        <div class="col-md-4">
                            <div class="circle">
                                <svg class="mobile" width="28" height="48" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.8244 0H3.46957C1.5564 0 0 1.5564 0 3.46957V43.9016C0 45.8148 1.5564 47.3712 3.46957 47.3712H23.8244C25.7376 47.3712 27.294 45.8148 27.294 43.9016V3.46957C27.294 1.5564 25.7376 0 23.8244 0ZM25.9061 37.6564H6.24523C5.862 37.6564 5.55131 37.9671 5.55131 38.3503C5.55131 38.7336 5.862 39.0442 6.24523 39.0442H25.9061V43.9016C25.9061 45.0496 24.9723 45.9834 23.8244 45.9834H3.46957C2.32165 45.9834 1.38783 45.0496 1.38783 43.9016V39.0442H3.46957C3.8528 39.0442 4.16349 38.7336 4.16349 38.3503C4.16349 37.9671 3.8528 37.6564 3.46957 37.6564H1.38783V6.93914H25.9061V37.6564ZM25.9061 5.55131H1.38783V3.46957C1.38783 2.32165 2.32165 1.38783 3.46957 1.38783H23.8244C24.9723 1.38783 25.9061 2.32165 25.9061 3.46957V5.55131Z" fill="black"/>
                                </svg>                 
                            </div>
                            <div class="subHead"><span id="charge"></span> smartphone</div>
                            <div class="text">charges saved</div>
                        </div>

                    </div>

                    <div class="caption">Figures when compared to a fast fashion item of the same weight</div>

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
                                <div class="treeHead bold">CLIMATE ACTION</div>
                                <div class="treeHead">We will plant <span id="tree"></span> trees when you<br/> 
                                make this purchase too</div>
                            <div>
                    </div>
              </div>
            `
        )
    }

}