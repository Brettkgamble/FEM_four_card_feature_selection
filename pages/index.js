import React, { Component } from 'react';
import Head from 'next/head';

class Home extends Component {
    render () {
        return(
            <>
                <Head>
                    <meta
                       name ="viewport"
                       content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <meta name="description" content="Front End Mentor - 4 card feature selection project" />
                    <meta name="keywords" content="Brett Gamble, portfolio, react, nextjs, Edmonton
                                developer, frontend, frontend mentor" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:title" content="Frontend Mentor | Four card feature section" />
                    <meta property="og:type" content="Website" />
                    {/*<meta property="og:url" content={`${props.baseUrl}`} />*/}
                    <meta property="og:description" content="Welcome to my FEM Project" />
                    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
                    <style>
                        @import url('https://fonts.google.com/specimen/Poppins');
                    </style>

                </Head>
                <body>

                Reliable, efficient delivery
                Powered by Technology

                Our Artificial Intelligence powered tools use millions of project data points
                to ensure that your project is successful

                Supervisor
                Monitors activity to identify project roadblocks

                Team Builder
                Scans our talent network to create the optimal team for your project

                Karma
                Regularly evaluates our talent to ensure quality

                Calculator
                Uses data from past projects to provide better delivery estimates

                </body>
                <footer>
                    <p className="attribution">
                        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend
                        Mentor</a>.
                        Coded by <a href="https://www.brettkgamble.com">Brett Gamble</a>.
                    </p>
                </footer>

            </>
        )
    }
}

export default Home;