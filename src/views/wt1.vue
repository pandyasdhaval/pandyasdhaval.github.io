<template>
    <v-row class="pa-6">
        <v-col class="d-none d-lg-flex d-xl-flex" cols="0" sm="0" md="0" lg="1" xl="1">
        </v-col>
        <v-col lg="10" xl="10" md="12" class="text-justify d-flex flex-column text-lg-subtitle-1 text-xl-h4">
            <div class="text-center">
                <h1>Work Term #1</h1>
            </div>
            <div class="text-justify">
                <h1 class="text-left mt-8 mb-4">Introduction</h1>
                <body-1>Welcome to the 1<sup>st</sup> half of my 8-month co-op term at the University of Guelph, under the supervision of Professor Rozita Dara.
                    Here you'll learn about my experience working as Software Engineer on the Elora Dairy Portal Project for the 
                    <a href="https://www.uoguelph.ca/alliance/research-facilities/elora-dairy">Elora Dairy Research Station</a>
                    and later being offered to work on the Security Project for Mohammad Zarandi as well. 
                    Through this I also aim to provide some assurance to upcoming new co-op students that although challenging, 
                    your work from home experience will be nothing less than work at office.
                </body-1>
            </div>
            <v-divider class="mt-6 mb-6"></v-divider>
            <div class="text-justify">
                <div class="d-flex" style="align-items: center">
                    <h1 class="text-left mb-4">Employer Information
                    </h1>
                </div>
                <body-1>
                    I had the opportunity to work for the University of Guelph under the supervision of Professor Rozita Dara.
                    Okay, here's the back story... After a lot of C programming at the university, in summer 2019, I wanted to explore data mining and machine learning. 
                    Hence, I volunteered to learn those concepts through projects that Rozita challenges me onto. 
                    By the end of it I had created several visualizations, and run different machine learning models on Iris dataset, and diabetes dataset through a lot of guided 
                    but independent learning and remote work. Yes, I unknowingly gained important experience working remotely, 
                    while also showcasing my work ethic to Professor Rozita Dara, and I firmly believe, a reason why she hired me. 
                </body-1>
            </div>
            <v-divider class="mt-6 mb-6"></v-divider>
            <div class="text-justify">
                <h1 class="text-left mb-4">
                    Job Description
                </h1>
                <h2 class="mt-4 mb-2">
                    Elora Dairy Portal Project
                </h2>
                <body-1>
                    As a Software Engineer on Elora Dairy Portal project, I helped building an end-to-end data collection, integration, 
                    and storage solution for the Elora Research Station. The project was already set up when I joined, hence my 
                    1<sup>st</sup> goal was to understand the existing code base. I familiarized myself with the code base by reading through 
                    the readme files, refactoring code, documenting code and asking for help where required. I learned Vue.js and Vuetify.js 
                    frameworks which were chosen to develop front end. I felt UI/UX could be improved further, so I went on to create 
                    a paper prototype (attached below) and proposed it to the team in our weekly meetups.
                    <v-img src="../assets/Co-op_Experience/Dhaval_Term1.jpg" class="mt-4 mb-4" contain aspect-ratio="1.77"></v-img>
                    Everyone loved the proposed design, as it improved upon a lot of user feedback we received including improving website's feedback, 
                    having a design with supports data filtering and aggregation, allowing multiple file downloads, etc.

                    Before we go further, it is important to understand what Elora Dairy Portal project aimed to solve:
                    <br> 
                    <v-img v-if="this.$vuetify.theme.dark" src="../assets/Co-op_Experience/EDP_broad_dark.png" class="mt-4 mb-4" contain aspect-ratio="1.77"></v-img>
                    <v-img v-else src="../assets/Co-op_Experience/EDP_broad_light.png" class="mt-4 mb-4" contain aspect-ratio="1.77"></v-img>
                    <ul>
                        <li>
                            Automate raw and aggregated data collection from Elora Research Station across different sensors from different providers
                        </li>
                        <li>
                            Make data accessible to researchers, farm managers, and other stake holders through web portals
                        </li>
                        <li>
                            Secure and backup data
                        </li>
                        <li>
                            Summarize, customize (filter), and aggregate data
                        </li>
                        <li>
                            Provide automated, scalable data governance ability
                        </li>
                    </ul> 
                    <br>
                    As seen on the picture above, on the right are the cows (uniquely identifiable), which are assigned different groups 
                    (based on project, cow's stage of life etc.), and are being monitored on different parameters (like weight, health 
                    condition, milk yield etc.) across time through different sensors. On the left are researchers (who may own parts of 
                    the data), researchers' assistants (who may need to have access to specific parts of data), OMAFRA executives (who 
                    may want to look over sections of data, and how it is used).
                    
                    As you can probably imagine, we had a lot of ground to cover. We decided to prototype the new design later and instead 
                    focus on functional aspects like providing filters, aggregated tables, integrating more sensor data to portal etc. first.
                    <h2 class="mt-4 mb-4">Three features that I am very proud of developing end-to-end on this project are:</h2>
                    <ol>
                        <li>I created Cow ID, and data attribute (column) filters. <br>
                            Some challenges I faced and solved:<br>
                            <ol type="a">
                                <li>
                                    Huge list of Cow IDs slowed down front end, I read through the documentation of
                                    <a href="https://github.com/Akryum/vue-virtual-scroller">vue virtual scroller</a> and integrated it
                                    into our project (which wasn't the official component of Vuetify framework then) to improve the list rendering speed by 67 times<br>
                                </li>
                                <li>
                                    Huge list of Cow IDs meant a huge payload to be send to backend for data governance checking (good data governance design shouldn't believe they have access to those cows until confirmed).
                                    I redesigned the code such that the worst-case payload was 50% and best-case payload was 0% of the original payload and thus improved governance checking speed by at least 25%.<br>
                                </li>
                                <li>
                                    I wrote an algorithm that would allow the list of Cow IDs to be presented in "m" columned table on the client side<br>
                                </li>
                                <li>
                                    Extending the work done in Cow ID filter, I created the same functionality to implement data attribute filter (say select only 5 columns from 100 columned table)<br>
                                </li>
                            </ol>
                        </li>
                        <li>
                            I created aggregated tables that:<br>
                            <ol type="a">
                                <li>
                                    combined similar groups of sensors together to form a package<br>
                                </li>
                                <li>
                                    gave a single day view of the cow (i.e. a summarized table that provides the day level view from all sensors about each cow)<br>
                                </li>
                            </ol>
                        </li>
                        <li>
                            Automated ETL process for DFO (Dairy Farmers of Ontario) Quality and Composition data.<br>
                            <ol type="a">
                                <li>
                                    connected with their representative, who agreed to send us monthly data through email.<br>
                                </li>
                                <li>
                                    wrote scripts to parse email, extract &amp; parse files, and then add it to our database.<br>
                                </li>
                                <li>
                                    connected with their representative to gather detailed data definition.<br>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </body-1>
                <body-1 >
                    <h2 class="mt-4 mb-2">
                        Security Project
                    </h2>
                    <div >
                    </div>
                    While working on Elora Diary Portal project, Rozita offered me to work on its security project with Mohammad Zarandi, 
                    where my goal was to establish proof of concept on 
                    <a href="https://www.mdpi.com/1424-8220/19/21/4777?type=check_update&amp;version=3">Detecting IoT User Behavior and Sensitive Information in Encrypted IoT-App Traffic</a>. 
                    But first, I had a lot of learning to do on how internet works, what is DNS and why is it required, what are the 7 
                    layers of internet protocol, what is MITM attack, what is access point, what are CA certificates, what is ARP spoofing, 
                    and much more. Later I spend some time researching devices for our setup.
                </body-1>
            </div>
            <v-divider class="mt-6 mb-6"></v-divider>
            <div class="text-justify">
                <h1 class="text-left mb-4">
                    Conclusion
                </h1>
                <body-1>
                    By the end of this co-op term I had gained experience in different areas which I'll recount here:<br>
                    <ol>
                        <li>
                            Became proficient in working with Vue.js and Vuetify.js framework<br>
                        </li>
                        <li>
                            Improved JavaScript knowledge by writing, and optimizing code on both front-end and backend<br>
                        </li>
                        <li>
                            Gained experience writing efficient SQL queries.<br>
                        </li>
                        <li>
                            Gained experience working with <a href="https://pypi.org/project/psycopg2/">psycopg2</a> when prototyping &amp; testing aggregated tables using python<br>
                        </li>
                        <li>
                            Learned about cron tasks to automatically schedule and run jobs
                        </li>
                        <li>
                            Learned about parsing email using  
                            <a href="https://docs.python.org/3/library/imaplib.html">imaplib</a>, and 
                            <a href="https://docs.python.org/3/library/email.examples.html">email</a> (among other libraries).<br>
                        </li>
                        <li>
                            To setup proof of concept on "Detecting IoT User Behavior and Sensitive Information in Encrypted IoT-App Traffic", I gained 
                            knowledge about MITM attacks, how internet works, DNS, CA certificates, layers of internet protocol, and more.
                        </li>
                        <li>
                            When researching about devices, I learned about different standards like 2.4 GHz, 5 GHz Wi-Fi, b/g/n channels, 
                            what are Wi-Fi adapters, which ones can be set into monitor mode, and more.
                        </li>
                    </ol>
                </body-1>
            </div>
            <v-btn @click="$router.push({path: '/co-op_experience',})" class="mt-4 mb-4">
                <v-icon>mdi-arrow-left</v-icon>
                Go Back
            </v-btn>
        </v-col>
        <v-col class="d-none d-lg-flex d-xl-flex" cols="0" sm="0" md="0" lg="1" xl="1">
        </v-col>
    </v-row>
</template>