export function header(){document.querySelector('header').innerHTML=
`
        <div class="header w-1410px margin-x-auto d-flex justify-between align-center relative">
            <a href="index.html">
            <img src="/asset/logo.svg" alt="logo" class="logo">
            </a>

            <ul class="nav d-flex align-center">
                <li class="aboutUs relative py-40">
                    <a href="#" class="px-20 py-40">
                        ABOUT US
                    </a>
                    <ul class="dropDown absolute top-100 d-none flex-col align-center">
                        <li class="p-10"><a href="#" class="">HISTORY & GLORY</a></li>
                        <hr style="width: 200px; margin: 0px;">
                        <li class="p-10"><a href="#">LOCATION</a></li>
                        <hr style="width: 200px; margin: 0px;">
                        <li class="p-10"><a href="/html/index.html#vision">VISION</a></li>

                    </ul>
                </li>
                    
                <li class="py-40">
                    <a href="#" class="px-20 py-40">NEWS</a>
                </li>
                <li class="py-40">
                    <a href="./products.html" class="px-20 py-40">PRODUCTS</a>
                </li>
                <li class="faq py-40 relative">
                    <a href="#" class="px-20 py-40">FAQ</a>
                    <ul class="dropDown absolute top-100 d-none flex-col align-center">
                        <li class="p-10"><a href="#" class="">BUSINESS</a></li>
                        <hr style="width: 200px; margin: 0px;">
                        <li class="p-10"><a href="#">TECHNOLOGY</a></li>
                    </ul>
                </li>
                <li class="contact py-40 relative">
                    <a href="#" class="px-20 py-40">CONTACT</a>
                    <ul class="dropDown absolute top-100 d-none flex-col align-center">
                        <li class="p-10"><a href="#" class="">ENQUIRY FORM</a></li>
                        <hr style="width: 200px; margin: 0px;">
                        <li class="p-10"><a href="#">CONTACT INFO</a></li>
                    </ul>
                </li>
                <li class="py-40">
                    <a href="./stakeholders.html" class="px-20 py-40">STAKEHOLDERS</a>
                </li>
                <li>
                    <a href="https://www.cwa.gov.tw/V8/C/W/Town/Town.html?TID=1000702" class="weather px-20 py-40" target="_blank"></a>
                </li>
            </ul>

            <div class="language d-flex align-center">
                <a href="#">繁中</a>
                /
                <a href="#">ENG</a>
            </div>
            
            <label for="hamberger" class="hamberger d-none">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"  class=""><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
            </label>
            <input type="checkbox" id="hamberger" class="hambergerBtn d-none">
            <ul class="sideNav d-none absolute">
                <li class="p-10"><a href="#" class="">ABOUT US</a></li>
                <hr style="width: 200px; margin: 0px;">
                <li class="p-10"><a href="#">NEWS</a></li>
                <hr style="width: 200px; margin: 0px;">
                <li class="p-10"><a href="./products.html">PRODUCTS</a></li>
                <hr style="width: 200px; margin: 0px;">
                <li class="p-10"><a href="#">FAQ</a></li>
                <hr style="width: 200px; margin: 0px;">
                <li class="p-10"><a href="#">CONTACT</a></li>
                <hr style="width: 200px; margin: 0px;">
                <li class="p-10"><a href="./stakeholders.html">STAKEHOLDERS</a></li>
                <hr style="width: 200px; margin: 0px;">
                <li class="p-10"><a href="https://www.cwa.gov.tw/V8/C/W/Town/Town.html?TID=1000702" class="mobileWeather px-20 py-40" target="_blank"></a></li>
            </ul>
        </div>        
`
};