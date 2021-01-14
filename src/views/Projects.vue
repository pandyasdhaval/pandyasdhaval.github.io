<template>
    <v-row class="pa-6">
        <v-col v-for="(project, i) in projects" v-bind:key="project.name + i" lg="4" md="4" sm="6" xl="3" cols="12">
            <v-card outlined height="100%" class="d-flex flex-column">
                <v-card-title>
                    <v-img :src="project.image" width="100%" contain aspect-ratio=1.77></v-img>
                    {{project.name}}
                </v-card-title>
                <v-card-text class="text-justify">
                    <ul>
                        <li class="mb-2" v-for="(line, j) in project.description" v-bind:key="project.name + i + j">
                            {{line}}
                        </li>
                    </ul>
                </v-card-text>
                <v-spacer></v-spacer>
                <v-card-actions class="justify-space-around">
                    <a v-for="link in project.links" v-bind:key="project.name + link.name" :href="link.address">
                        <v-icon>{{link.symbol}}</v-icon>
                    </a>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Projects',
    data: () => ({
        projects: [
            {
                name: 'COVID-19 Visualization',
                image: require('../assets/Projects/thumbnail/Canada_Australia_COVID19.jpg'),
                description: [
                    "Implemented a Python script to fetch the data provided by JHU CSSE to visualize confirmed, recovered, deaths cases, mortality rate, etc. for any country and if desired compare it with any other country",
                    "Utilized Requests, BS4 (BeautifulSoup), Pandas, Matplotlib, Datetime libraries"
                ],
                links: [
                    {
                        name: 'YouTube',
                        symbol: 'mdi-youtube',
                        address: 'https://youtu.be/_hkyY4F14W0'
                    }
                ]
            },
            {
                name: 'CourseLink Automation',
                image: require('../assets/Projects/thumbnail/Courselink_Download_Automation.jpg'),
                description: [
                    "Implemented a Web Scraper to login into CourseLink and download all the resources (pdf files, class notes etc.) made available by the professor for all the courses in the current semester",
                    "Utilized Requests, Time, BS4 (BeautifulSoup), Pandas, and Numpy libraries",
                    "Downloads 200+ MB of data in under 6 minutes, without sending excessive requests to the website"
                ],
                links: [
                    {
                        name: 'GitHub',
                        symbol: 'mdi-github',
                        address: 'https://github.com/pandyasdhaval/CourseLinkScrape'
                    }
                ]
            },
            {
                name: 'ASCII Roguelike Fighter',
                image: require('../assets/Projects/thumbnail/ASCII_Roguelike_Fighter_About.jpg'),
                description: [
                    "Fighter moves around in an ascii environment (handled using ncurses library) to gain experience and advance levels by fighting enemies",
                    "Used OO principles of Encapsulation, Abstraction, Inheritance, etc. in C++ along with ncurses library to manage terminal like environment",
                    "Customizable plain -text levels that can be created by players and imported into the game"
                ],
                links: [
                    {
                        name: 'GitHub',
                        symbol: 'mdi-github',
                        address: 'https://github.com/pandyasdhaval/ascii-linux'
                    }
                ]
            },
            {
                name: 'WebAdvisor Scraper',
                image: require('../assets/Projects/thumbnail/WebAdvisor_Automation.jpg'),
                description: [
                    "Implemented a Scraper to save the information available on all offered courses at University of Guelph to be further used to build an application which will help students select a path for their Minor",
                    "Utilized Requests, Time, BS4 (BeautifulSoup), Pandas, and NumPy libraries",
                    "Scrapes and converts all the data into a csv, without losing any information, in under 1.5 minutes"
                ],
                links: [
                    {
                        name: 'GitHub',
                        symbol: 'mdi-github',
                        address: 'https://github.com/pandyasdhaval/Scrape'
                    }
                ]
            }
        ],
    })
}
</script>
