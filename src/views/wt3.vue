<template>
    <v-row class="pa-6">
        <v-col class="d-none d-lg-flex d-xl-flex" cols="0" sm="0" md="0" lg="1" xl="1">
        </v-col>
        <v-col lg="10" xl="10" md="12" class="text-justify d-flex flex-column text-lg-subtitle-1 text-xl-h4">
            <div class="text-center">
                <h1>Work Term #3</h1>
            </div>
            <div class="text-justify">
                <h1 class="text-left mt-8 mb-4">Introduction</h1>
                <body-1>
                    Welcome to a peek into my 4-month co-op term at onsemi (formerly ON Semiconductor), under the supervision of Dave Hermann.
                    Here you'll learn about my experience working as a Software Tools Developer for the Signal, Wireless & Medical (SWM) / Wireless & Digital 
                    Signal Processing (DSP) Firmware team at onsemi. 
                </body-1>
            </div>
            <v-divider class="mt-6 mb-6"></v-divider>
            <div class="text-justify">
                <div class="d-flex" style="align-items: center">
                    <h1 class="text-left mb-4">Employer Information
                    </h1>
                </div>
                <body-1>
                    This term, I had the opportunity to work for onsemi under the supervision of Dave Hermann.
                    onsemi is one of the few companies that actually manufactures chips in Canada. But that's not all,
                    they also offer system-on-chip devices like RSL10 or Ezairo 7100 which provides a whole SDE kit along 
                    with the hardware. This along with the fact that the company had been thriving in the very competitive 
                    industry since 1999 had me very excited to start a co-op.  
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
                    At onsemi I had the opportunity to help support one of their systems on chip project by working on various tasks ranging from
                    documentation, developing tools, testing sample code, performing code reviews and more. Our team used agile methodologies hence, I
                    was attending sprint meetings, and stand-ups as soon as I started. <br> 
                    Early tickets related to the plugins developed for Eclipse IDE, but this was my first time working with Eclipse, let alone develop for it! 
                    But this didn't stop me as I always had someone to guide me further whenever I got stuck. Many times I found myself tinkering with other plugins 
                    that were written to understand parts of the Eclipse Plugin Development cycle what waere written theoretically in the Eclipse API documentation. 
                    This provided me a hands-on experience with Java development and Object Oriented Programming principles. 
                    Thus, I got to touch upon a few Eclipse plugins, improve upon one, and provide design choices for another. <br> 
                    As a co-op student working on the systems on chip project, onsemi provides a Getting Started Guide which is a document that is supposed to get us 
                    started without much help from mentors. This is also the same document that a customer gets when they buy one such product. This helps the company to mimic
                    the experience that a new customer goes through when setting up our product for their development purpose. Here, I fixed the Getting Started Guide by 
                    providing contextual information which a new user wouldn't intuitively have about the system and the SDK we provide. This pulled me into a journey of Documentation, 
                    involving more customer facing documents, and code comments. I was introduced to Doxygen which is a de facto standard tool for generating 
                    documentation from annotated sources, with a very familiar Javadocs like syntax. <br>
                    I was curious to learn more about the low level code we write, and there couldn't have been a better way than to work on sample codes. We provide customers with 
                    SDK which also include sample codes that showcase the functionalities of our system while mimicing a potential use case, for e.g. two devices communicating using 
                    Bluetooth protocol. Thus testing, debugging and tinkering with them introduced me to
                    several communication protocols like UART, SPI, and I2C which I also got to analyze through a logic analyzer. I also had an introduction to BLE (Bluetooth Low Energy)
                    protocols and samples when testing their samples manually and reporting defects using Xray.
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
                            Worked in an Agile Software Development environment with a large independent team<br>
                        </li>
                        <li>
                            Developed plugins for the Eclipse IDE using Java<br>
                        </li>
                        <li>
                            Performed manual tests on sample code<br> 
                        </li>
                        <li>
                            Used logic analyzer o debug and understand sample code involving UART and SPI protocols<br>
                        </li>
                        <li>
                            Improved customer facing document like Getting Started Guide<br>
                        </li>
                        <li>
                            Improved documentation using Doxygen<br>
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
