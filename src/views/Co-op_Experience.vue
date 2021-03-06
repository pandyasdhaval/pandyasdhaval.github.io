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
                        <v-img :src="company.logo" height="100px" width="100px"></v-img>
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
                ],
                position: "I'm looking for work!",
                time_from: 'May 2021',
                time_to: 'Aug 2021 (4 months)',
                image: require('../assets/Co-op_Experience/coming_soon_dark.svg'),
                description_short: [
                    "I can work remote. Both my previous co-op terms required independent work with little supervision while Working From Home",
                    "I'm curious to learn more about security. I've worked with Wireshark, and Burp Suite tools, and have experimented with MITM attacks, SQL injection, rate limiting flaws through my work term and on my school projects.",
                    "I'm curious & open to different learning opportunities. While gathering requirements for plant data during work-term #2, I spent personal time learning about basics of genomics study (as the researchers were analyzing Soybean genomic data)",
                    "I've developed full-stack projects like Elora Dairy Portal, SVG site (Software Systems Development and Integration course)",
                    "I'm passionate about technology. I want to create products that enable people to do things in better ways."
                ],
                full_description_route: '',
                disabled: true
            }
        ]
    })
}
</script>