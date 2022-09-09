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
                    WT5 Intro
                </body-1>
            </div>
            <v-divider class="mt-6 mb-6"></v-divider>
            <div class="text-justify">
                <div class="d-flex" style="align-items: center">
                    <h1 class="text-left mb-4">Employer Information
                    </h1>
                </div>
                <body-1>
                    WT5 - Employer Information   
                </body-1>
            </div>
            <v-divider class="mt-6 mb-6"></v-divider>
            <div class="text-justify">
                <h1 class="text-left mb-4">
                    Job Description
                </h1>
                <!--h2 class="mt-4 mb-2">
                    Elora Dairy Portal Project
                </h2-->
                <body-1>
                    WT5 - Job Description
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
                            Identified and documented code smells in automated testing infrastructure<br>
                        </li>
                        <li>
                            Understood Cypress testing methodology and fixed flaky test suites<br>
                        </li>
                        <li>
                            Lead summarizing effort for CWX (Caseware rebranding) event for the QA team<br> 
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
