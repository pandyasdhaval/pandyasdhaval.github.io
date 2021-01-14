<template>
    <v-row class="pa-6">
        <v-col class="d-none d-lg-flex d-xl-flex" cols="0" sm="0" md="0" lg="2" xl="2">
        </v-col>
        <v-col lg="8" xl="8" md="12">
            <v-img src="../assets/Co-op_Experience/Dhaval_Term2.jpg" contain></v-img>
        </v-col>
        <v-col class="d-none d-lg-flex d-xl-flex" cols="0" sm="0" md="0" lg="2" xl="2">
        </v-col>
        <v-col class="d-none d-lg-flex d-xl-flex" cols="0" sm="0" md="0" lg="1" xl="1">
        </v-col>
        <v-col lg="10" xl="10" md="12" class="text-justify d-flex flex-column text-lg-h5 text-xl-h4">
            <v-spacer></v-spacer>
                <body-1 class="mt-4">
                    Hi! I'm Dhaval. The picture 
                    is from my visit to the Elora Dairy Research Station. I worked 
                    there on an 8-month 
                    <router-link to="/co-op_experience">co-op term</router-link> 
                    from May 2020 to Dec 2020 as a Software Engineer on the Elora Dairy Portal project towards the goal of keeping 
                    data secure and accessible to researchers, farm managers, and stake holders.<br>
                </body-1>
                <v-divider class="mt-3 mb-3"></v-divider>
                <body-1>
                    I'm a 3<sup>rd</sup> year student majoring in computer science at the University of Guelph with a minor in mathematics.<br>
                </body-1>
                <v-divider class="mt-2 mb-2"></v-divider>
                <body-1>
                    I build 
                    <router-link to="/projects">personal projects</router-link> 
                    between semesters (and sometimes during semesters when I want to take a break from structured learning and decide to work on a weekend project instead :)).<br>
                </body-1>
                <v-divider class="mt-2 mb-2"></v-divider>
                <body-1>
                    I love to volunteer. I have been a 
                    <a href="https://www.uoguelph.ca/studentexperience/intlstudent/LINK">link partner</a>, 
                    helping new international students ease their transition into Canadian culture and life at the University. 
                    Through the  
                    <a href="https://www.uoguelph.ca/studentexperience/project-serve-day">project serve day</a> event, 
                    in Sep 2019 I lead a team of 76 volunteers to a successful completion of the mud run event organized by the Canadian Cancer Society, 
                    and in Sep 2018 I helped 10C Shared Space to organize their office space.
                </body-1>
                <v-divider class="mt-2 mb-2"></v-divider>
                <body-1>
                    In Fall 2019 I recieved Braithwaite Business Scholarship (offered to non-B.Comm. majors). I'm on Dean's Honours List for 
                    excellent academic achievement in Fall 2018, and Winter 2019 academic semesters.
                </body-1>
            <v-spacer></v-spacer>
        </v-col>
        <v-col class="d-none d-lg-flex d-xl-flex" cols="0" sm="0" md="0" lg="1" xl="1">
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'LandingPage'
}
</script>