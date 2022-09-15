<template>
    <v-row class="pa-6">
        <v-col class="d-none d-lg-flex d-xl-flex" cols="0" sm="0" md="0" lg="1" xl="1">
        </v-col>
        <v-col lg="10" xl="10" md="12" class="text-justify d-flex flex-column text-lg-subtitle-1 text-xl-h4">
            <div class="text-center">
                <h1>Work Term #4</h1>
            </div>
            <div class="text-justify">
                <h1 class="text-left mt-8 mb-4">Introduction</h1>
                <body-1>
                    Welcome to the 1<sup>st</sup> half of my 8-month co-op term at CaseWare, under the supervision
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
                    As a Software Developer in Test it is very important to understand how the product works, 
                    and know how it is supposed to work, perhaps eventually understand the use case (user story) 
                    to understand why a feature was requested in the first place.
                    This is useful when you participate in story refinement where it is important to know how 
                    a feature change can affect the existing product. This can help the team correctly estimate the 
                    work required for the change. 
                    <br><br>
                    So, I started playing around the cloud product, often with smoke test suite to understand the 
                    breath of the product. Soon, regression phase came around and I started helping the team test the 
                    next release and confirming that it has not adversly affected previously working features. 
                    <br><br>
                    After completing with the regression phase, I picked up automation tests, first starting with maintenance. 
                    I would look for tests that would fail in our daily runs, run them manually, and if they pass, clearly 
                    the automation is doing something wrong. Often it could be that it worked when the test was written but 
                    the underlying component or DOM structre now got refactored by the developers which broke the tests. These 
                    are usually easy tests to fix. 
                    <br><br>
                    After familiarizing myself with the code base and testing infrastructure I started migrating tests from 
                    Protractor to Cypress (written in TypeScript + Mocha syntax)

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
                            Worked in an agile environment with a large, independent team<br>
                        </li>
                        <li>
                            Migrated tests from Protractor to Cypress<br>
                        </li>
                        <li>
                            Performed daily automation maintenance<br>
                        </li>
                        <li>
                            Performed manual regression testing<br>
                        </li>
                        <li>
                            Suggested Quality of Life changes<br> 
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
