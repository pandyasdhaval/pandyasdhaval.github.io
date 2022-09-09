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
                    WT4 Intro
                </body-1>
            </div>
            <v-divider class="mt-6 mb-6"></v-divider>
            <div class="text-justify">
                <div class="d-flex" style="align-items: center">
                    <h1 class="text-left mb-4">Employer Information
                    </h1>
                </div>
                <body-1>
                    WT4 - Employer Information   
                </body-1>
            </div>
            <v-divider class="mt-6 mb-6"></v-divider>
            <div class="text-justify">
                <h1 class="text-left mb-4">
                    Job Description
                </h1>
                <body-1>
                    WT4 - Job Description
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
                            Understood tests written in Protractor and migrated to Cypress<br>
                        </li>
                        <li>
                            Suggested Quality of Life changes for the Caseware Cloud product<br> 
                        </li>
                        <li>
                            Helped with regression testing of US Review product<br>
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
