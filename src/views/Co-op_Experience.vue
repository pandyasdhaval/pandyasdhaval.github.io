<template>
    <v-row class="pa-6">
        <v-col v-for="coop in coops" v-bind:key="coop.term_number + coop.time_from + coop.time_to" lg="4" md="4" sm="6" xl="3" cols="12">
            <v-card :to="coop.full_description_route" :disabled="coop.disabled" height="100%" outlined class="d-flex flex-column">
                <v-card-title>
                    <v-img :src="coop.image" width="100%" :aspect-ratio=1.7></v-img>
                    {{coop.position}}
                </v-card-title>
                <v-card-subtitle>
                    <div v-if="coop.company_place_info">@ 
                        <a :href="coop.company_place_info.link">
                            {{coop.company_place_info.name}}
                        </a>
                    </div>
                    <br v-else>
                    <br>
                    from {{coop.time_from}} to {{coop.time_to}}                        
                </v-card-subtitle>
                <v-card-text class="text-justify">
                    <ul>
                        <li class="mb-2" v-for="(line, i) in coop.description_short" v-bind:key="coop.term_number + coop.time_from + coop.time_to + 'description_short' + i">
                            {{line}}
                        </li>
                    </ul>
                </v-card-text>
                <v-spacer></v-spacer>
                
                <v-card-actions class="justify-space-around">
                    <a v-for="company in coop.companies" v-on:click.prevent v-bind:key="coop.term_number + coop.time_from + coop.time_to + company.name" :href="company.link">
                        <!-- Add a logic to switch between dark and light logos  --> 
                        <v-img :src="company.logo" height="100px" width="100px" contain></v-img>
                    </a>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Co-op_Experience',
    data: () => ({
        coops: [
            {
                term_number: 1,
                companies: [
                    {
                        name: 'University of Guelph',
                        logo: require('../assets/Co-op_Experience/UofG_Cornerstone_rgb.svg'),
                        link: 'https://www.uoguelph.ca/'
                    },
                    {
                        name: 'OMAFRA',
                        logo: require('../assets/Co-op_Experience/OMAFRA.png'),
                        link: 'http://www.omafra.gov.on.ca/'
                    }
                ],
                company_place_info: {
                    name: 'Elora Dairy Research Station',
                    link: 'https://www.uoguelph.ca/alliance/research-facilities/elora-dairy'
                },
                position: 'Software Engineer',
                time_from: 'May 2020',
                time_to: 'Aug 2020',
                image: require('../assets/Co-op_Experience/thumbnail/Dhaval_Term1.jpg'),
                description_short: [
                    "Learned Vue.js and Vuetify.js frameworks",
                    "Improved payload sent to backend by atlest 50% which improved governance checking speed by at least 25%",
                    "Improved list rendering speed by 67 times",
                    "Presented updates to OMAFRA executives and UofG researchers",
                    'Learned about 7 Layers of Internet Protocol, How Internet Works, MITM attacks...',
                    'Researched IoT devices, Routers, Wi-Fi adapters, network protocol analyzer, & cybersecurity tools required to setup Security Project.'
                ],
                full_description_route: '/co-op_experience/wt1',
                disabled: false
            },
            {
                term_number: 2,
                companies: [
                    {
                        name: 'University of Guelph',
                        logo: require('../assets/Co-op_Experience/UofG_Cornerstone_rgb.svg'),
                        link: 'https://www.uoguelph.ca/'
                    },
                    {
                        name: 'OMAFRA',
                        logo: require('../assets/Co-op_Experience/OMAFRA.png'),
                        link: 'http://www.omafra.gov.on.ca/'
                    }
                ],
                company_place_info: {
                    name: 'Elora Dairy Research Station',
                    link: 'https://www.uoguelph.ca/alliance/research-facilities/elora-dairy'
                },
                position: 'Software Engineer',
                time_from: 'Sep 2020',
                time_to: 'Dec 2020',
                image: require('../assets/Co-op_Experience/thumbnail/Dhaval_Term2.jpg'),
                description_short: [
                    "Explored Power BI Desktop as an alternate solution",
                    "Investigated feasibility of my experimental design from Work Term #1 onto our website",
                    "Collaborated with dairy research students to clean data & provide transformed data tables curated to their needs, using both SQL & Power BI Desktop",
                    "Collaborated with soybean genomics researcher to gather requirements on integrating their data onto our existing portal",
                    "Improved UI & UX of the Elora Dairy Portal",
                    "Completed setup of security project, & provided sample data collected using Wireshark and Burp Suite"
                ],
                full_description_route: '/co-op_experience/wt2',
                disabled: false
            },
            {
                term_number: 3,
                companies: [
                    {
                        name: 'onsemi',
                        logo: require('../assets/Co-op_Experience/onsemi_logo_full_color.svg'),
                        link: 'https://www.onsemi.com/'
                    }
                ],
                company_place_info: {
                    name: 'onsemi',
                    link: 'https://www.onsemi.com/company/about-onsemi'
                },
                position: 'Software Tools Developer',
                time_from: 'May 2021',
                time_to: 'Aug 2021', 
                image: require('../assets/Co-op_Experience/thumbnail/Dhaval_Term3.jpg'),
                description_short: [
                    "Worked in an agile environment with a large, independent team",
                    "Developed plugins for the Eclipse IDE",
                    "Performed manual tests on sample code",
                    "Used logic analyzer to debug and understand sample codes involving UART and SPI protocols",
                    "Improved customer facing document, like Getting Started Guide",
                    "Improved documentation using Doxygen"
                ],
                full_description_route: '/co-op_experience/wt3',
                disabled: false
            },
            {
                term_number: 4,
                companies: [
                    {
                        name: 'Caseware',
                        logo: require('../assets/Co-op_Experience/CaseWare-Logo-RGB-Primary_Dark-TM.svg'), // TODO: change
                        link: 'https://www.caseware.com/'
                    }
                ],
                company_place_info: {
                    name: 'Caseware',
                    link: 'https://www.caseware.com/'
                },
                position: "Software Development Engineer in Test",
                time_from: 'Jan 2022',
                time_to: 'Apr 2022',
                image: require('../assets/Co-op_Experience/thumbnail/Dhaval_Term4.jpg'), // TODO: update
                description_short: [
                    "Worked in an agile environment with a large, independent team",
                    "Migrated tests from Protractor to Cypress",
                    "Performed daily automation maintenance",
                    "Helped perform manual regression testing",
                    "Suggested Quality of Life changes",
                ],
                full_description_route: '/co-op_experience/wt4',
                disabled: false
            },
            {
                term_number: 5,
                companies: [
                    {
                        name: 'Caseware',
                        logo: require('../assets/Co-op_Experience/CaseWare-Logo-RGB-Primary_Dark-TM.svg'), // TODO: change
                        link: 'https://www.caseware.com/'
                    }
                ],
                company_place_info: {
                    name: 'Caseware',
                    link: 'https://www.caseware.com/'
                },
                position: "Software Development Engineer in Test",
                time_from: 'May 2022',
                time_to: 'Aug 2022',
                image: require('../assets/Co-op_Experience/thumbnail/Dhaval_Term5_1.jpg'), // TODO: update
                description_short: [
                    "Designed, implemented and executed automated tests across the suite of CaseWare products",
                    "Identified code smells in automated test infrastructure",
                    "Promoted Cypress testing methodology to fix flaky tests",
                    "Summarized CWX (Caseware rebranding) event for the QA team",
                    "Performed daily automation maintenance",
                    "Helped perform manual and automated regression testing"
                ], // TODO: Update
                full_description_route: '/co-op_experience/wt5',
                disabled: false
            }
        ]
    })
}
</script>