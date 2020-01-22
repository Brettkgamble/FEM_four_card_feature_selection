import React from 'react';
import classes from '../static/css/main.module.css';

const MainLayout = () => (
    <div className={classes.mainBody}>
        <div>
                            Reliable, efficient delivery
                Powered by Technology

                Our Artificial Intelligence powered tools use millions of project data points
                to ensure that your project is successful
        </div>
        <div>
            Supervisor
                Monitors activity to identify project roadblocks
        </div>
        <div>
            Team Builder
                Scans our talent network to create the optimal team for your project
        </div>
        <div>
            Karma
                Regularly evaluates our talent to ensure quality
        </div>
        <div>
            Calculator
                Uses data from past projects to provide better delivery estimates
        </div>
    </div>
);

export default MainLayout;