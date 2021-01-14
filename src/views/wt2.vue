<template>
    <v-row class="pa-6">
        <v-col class="d-none d-lg-flex d-xl-flex" cols="0" sm="0" md="0" lg="1" xl="1">
        </v-col>
        <v-col lg="10" xl="10" md="12" class="text-justify d-flex flex-column text-lg-subtitle-1 text-xl-h4">
            <div class="text-center">
                <h1>Work Term #2</h1>
            </div>
            <div class="text-justify">
                <h1 class="text-left mt-8 mb-4">Introduction</h1>
                <body-1>Welcome to the 2<sup>nd</sup> half of my 8-month co-op term at the University of Guelph, under the supervision of Professor Rozita Dara.
                    As mentioned in the previous blog, I had previous experience volunteering to work for her, and now with Work Term #1, I had solidified 
                    my rapport of work ethic. Here you'll learn about my experience working as Software Engineer on the Elora Dairy Portal Project for the 
                    <a href="https://www.uoguelph.ca/alliance/research-facilities/elora-dairy">Elora Dairy Research Station</a>
                    and completing the setup on Security Project for Mohammad Zarandi.
                    Through this I also aim to provide some assurance to upcoming new co-op students that although challenging, 
                    your Work From Home experience will be nothing less than work at office.
                </body-1>
            </div>
            <v-divider class="mt-6 mb-6"></v-divider>
            <div class="text-justify">
                <div class="d-flex" style="align-items: center">
                    <h1 class="text-left mb-4">Employer Information
                    </h1>
                </div>
                <body-1>
                    This term, I had the opportunity to continue working for the University of Guelph under the supervision of Professor Rozita Dara.
                    I'll reiterate the back story leading to my successful 8-month work term... After a lot of C programming at the university, in summer 2019, I wanted to explore data mining and machine learning. 
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
                    We wanted to explore interactive data aggregation option on our portal to allow ad-hoc exploration possibilities 
                    available directly to the researchers (instead of asking us to create a specific table).
                    I had the opportunity to connect with sales representatives, and developers from Power BI, Tableau, Qlik, Chartio, 
                    and Ag-grid, to learn more about their solution, and how it can be integrated to our purpose. I took the opportunity  
                    to test proof on concept by creating sample reports on Power BI Desktop while also creating then using SQL on our database. 
                    For my other goal I collaborated with Bruna Mion, who helped me improve data quality &amp; create customized tables 
                    for statistical analysis. 
                    I worked with Sepideh to gather requirements about Soybean genomic data and created requirements document along with my suggestions 
                    on how to bring those onto our portal. I also helped cleaning user interface 
                    design to make it more functional, while also occupying less space to allow for data preview to be added.<br>
                    
                    <v-img src="../assets/Co-op_Experience/Dhaval_Term2.jpg" class="mt-4 mb-4"></v-img>

                    <h2 class="mt-4 mb-4">Things that I am very proud of working on in this term are: </h2>
                    
                    <ol>
                        <li>
                            Exploring Power BI as an alternative. <br>
                            I worked extensively with Power BI Desktop, which is am impressive tool to visually model, and transform data.<br>
                            Major reason to use it was the ability to visually transform data. This was important because the data we get from 
                            different sensors are not suited for statistical analysis that researchers wanted to perform. Power BI Desktop 
                            allowed data tables to be pivoted, filtered, joined, and much more (like adding relational columns, using DAX queries etc.) 
                            to quickly reach required view. We created a video demo and manual showcasing how Power BI Desktop can be used in our context.<br>
                            <h2 class="mt-4 mb-4">Challenges faced: </h2>
                                
                            <ol type="a">
                                <li>
                                    Power BI Desktop is only available on Windows machine.<br>
                                </li>
                                <li>
                                    Power BI service is about automating reporting process (with a lot of visual options) to enable fast decision making, but researchers weren't interested in getting reports / overview<br>
                                </li>
                                <li>
                                    Researchers were majorly interested in transforming sensor data into a format suitable for statistical analysis.<br>
                                </li>
                                <li>
                                    Researchers were already very familiar with the portal, and considering above points, I ended up writing SQL queries to get to the transformed tables for our portal.<br>
                                </li>
                            </ol>
                        </li>
                        <li>
                            Improving UI/UX by cleaning the download data page. Yes, it was originally a whole page to select and download filtered data. 
                            I transformed it into a menu bar (like the ones you see on apps with file, edit etc.). We re-purposed the space we gained to 
                            display data preview. We added more feedback on when data wasn't available, visual cues on where to download from, and reduced the 
                            steps (clicks) required to download data.<br>
                        </li>
                        <li>
                            Collaborating with Sepideh Torabi to gather requirements on bringing Soybean genomic data onto our portal.<br>
                            Sadly, this was during my last week at work. During this limited time I:<br>
                            <ol type="a">
                                <li>
                                    learned basics of genomics through YouTube! and anything I could find across internet! (I was really curious to know more about it, and I firmly believe that we as software developers should make an effort to learn field specific knowledge, including acronyms)<br>
                                </li>
                                <li>
                                    asked for sample data and conducted meetings to know more about it.<br>
                                </li>
                                <li>
                                    showcased our portal to her, to clear doubts she had and to inform her about our current solution<br>
                                </li>
                                <li>
                                    left with requirements document with my design suggestions and comments
                                </li>
                            </ol>
                        </li>
                    </ol>
                </body-1>
                <body-1>
                    <h2 class="mt-4 mb-2">
                        Security Project
                    </h2>
                    On the security project I had the opportunity to perform passive packet analysis using Wireshark, &amp; Burp Suite on 
                    the sample data I collected by performing a MITM attack on our project setup. 
                    Comprehensive list of things I did for security project are as follows:<br>
                    <ol>
                        <li>
                            learned Wireshark to analyze encrypted traffic<br>
                        </li>
                        <li>
                            learned Burp Suite to analyze unencrypted traffic<br> 
                        </li>
                        <li>
                            learned to setup access point using network tools in Kali Linux<br>
                        </li>
                        <li>
                            provided documentation to replicate the setup<br>
                        </li>
                        <li>
                            provided sample labelled data collected from Wireshark and Burp Suite<br>
                        </li>
                    </ol>   
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
                            Became proficient in working with Power BI Desktop<br>
                        </li>
                        <li>
                            Improved my skills in building SQL queries when creating transformed tables similar to those created in Power BI Desktop<br>
                        </li>
                        <li>
                            Improved communication skills through requirements gathering sessions, collaboration for transforming data, and through interaction with representatives from Power BI, Tableau, Qlik, &amp; others<br> 
                        </li>
                        <li>
                            Brainstormed and implemented changes to UI/UX<br>
                        </li>
                        <li>
                            Learned &amp; used cyber security and network protocol analyzer tools like Burp Suite and Wireshark.<br>
                        </li>
                        <li>
                            Improved written communication skills when writing manual for Power BI Desktop, and when documenting setup for security project.<br>
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
