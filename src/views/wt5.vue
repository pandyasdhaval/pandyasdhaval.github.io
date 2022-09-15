<template>
    <v-row class="pa-6">
        <v-col class="d-none d-lg-flex d-xl-flex" cols="0" sm="0" md="0" lg="1" xl="1">
        </v-col>
        <v-col lg="10" xl="10" md="12" class="text-justify d-flex flex-column text-lg-subtitle-1 text-xl-h4">
            <div class="text-center">
                <h1>Work Term #5</h1>
            </div>
            <div class="text-justify">
                <h1 class="text-left mt-8 mb-4">Introduction</h1>
                <body-1>
                    Welcome to the 2<sup>nd</sup> half of my 8-month co-op term at CaseWare, under the supervision
                    of Jai Joshi. Here you'll learn about my experience working as a Software Development Engineer 
                    in Test (SDET) on the Smart Engagements (SE) team.
                </body-1>
            </div>
            <v-divider class="mt-6 mb-6"></v-divider>
            <div class="text-justify">
                <div class="d-flex" style="align-items: center">
                    <h1 class="text-left mb-4">Employer Information
                    </h1>
                </div>
                <body-1>
                    CaseWare makes software solutions for auditors, accountants, analysts; helping them work 
                    smarter, see further by transforming insights into impact. Their customers include everyone from 
                    small accounting firms, to large corporates, to governments. CaseWare offers large range 
                    of solutions including auditing, review & compilation, financial reporting, analytics, and more, 
                    in the form of desktop and cloud products.
                </body-1>
            </div>
            <v-divider class="mt-6 mb-6"></v-divider>
            <div class="text-justify">
                <h1 class="text-left mb-4">
                    Job Description
                </h1>
                <body-1>
                    By this time, we were onto another development cycle and starting ot take on new features. 
                    This meant refining stories, and understanding user requirements while also keeping in mind 
                    how it fits or perhaps interacts with the existing product. 
                    <br><br>
                    Here we started designing, implementing, and executing new automated tests alongside development 
                    to test the new set of features. 
                    <br><br>
                    By then I had familiarized myself with Cypress testing methodology so I started understanding 
                    some ideologies in which Cypress differed from Protractor which was causing some flaky tests. I 
                    Identified and started fixing them. 
                    <br><br> 
                    Meanwhile, daily automation was also being worked on to help fix flaky tests which improve confidence 
                    on the test results.
                    <br><br> 
                    Soon we were in the changing times for CaseWare, where we rebranded the ourselves through the CWX event.
                    I was super excited to attend the event, not only becuase I was seeing the company transform but also 
                    because of the guest speakers like Shane Feldman, Abby Wambach, and several interesting info sessions by 
                    our C level executives like our CTO explaining the importance of compliance rules but also explaining why 
                    compliance alone isn't enough through his own life experiences. <br>
                    I took the opportunity to summarize the event for our QA Team. 
                    <br><br>
                    Soon, it was time was regression again as we finished our features. I helped perform manual and automated 
                    testing while also identifying code smells in the automated testing infrastructure. 
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
                            Designed, implemented and executed automated tests across the suite of CaseWare products
                        </li>
                        <li>
                            Identified and documented code smells in automated testing infrastructure<br>
                        </li>
                        <li>
                            Promoted Cypress testing methodology and fixed flaky tests<br>
                        </li>
                        <li>
                            Summarized CWX (Caseware rebranding) event for the QA team<br> 
                        </li>
                        <li>
                            Performed daily automation maintenance<br>
                        </li>
                        <li>
                            Performed manual and automated regression testing<br>
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
