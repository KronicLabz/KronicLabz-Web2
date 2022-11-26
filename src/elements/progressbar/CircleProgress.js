import React from 'react';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import TrackVisibility from 'react-on-screen';

const progressData = [
    {
        id: 1,
        title: "Global Access to Internet",
        percantage: 40,
        subtitle: "Only around 40% of the world's population has access to the Internet. Thats not a lot when you consider that the Internet is the most powerful tool for communication and information in the world.",
        strokeColor: "#0f0f11",
        strokePath: "#059DFF",
        strokeLinecap: 'round',
        strokeWidth: 5
    },
    {
        id: 2,
        title: "Users aware of Web3",
        percantage: 5,
        subtitle: "Of the 40% that have access to the internet, only about 5% of those are aware of crypto and nfts.",
        strokeColor: "#0f0f11",
        strokePath: "#059DFF",
        strokeLinecap: 'round',
        strokeWidth: 5
    },
    {
        id: 3,
        title: "Active Users of Web3",
        percantage: 4,
        subtitle: "Of the 5% of the 40%, less than 2% are active users of Web3.",
        strokeColor: "#0f0f11",
        strokePath: "#059DFF",
        strokeLinecap: 'round',
        strokeWidth: 5
    },
    {
        id: 4,
        title: "Still think it's too late?",
        percantage: 1,
        subtitle: "Of the entire population that has access to some form of internet, less than 1% are active users of Web3. There will never be a better time than now to dive in.",
        strokeColor: "#0f0f11",
        strokePath: "#059DFF",
        strokeLinecap: 'round',
        strokeWidth: 5
    }
];

const CircleProgress = () => {
    return (
        <div className="row row--30">
            {progressData.map((progress, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30" key={index}>
                    <div className="rwt-circle text-center">
                        <TrackVisibility once>
                            {({ isVisible }) => isVisible &&
                                <AnimatedProgressProvider
                                    valueStart={0}
                                    valueEnd={progress.percantage}
                                    duration={1.4}
                                    easingFunction={easeQuadInOut}
                                    repeat={false}

                                >
                                    {value => {
                                        const roundedValue = Math.round(value);
                                        return (
                                            <CircularProgressbar
                                                value={value}
                                                text={`${roundedValue}%`}
                                                strokeWidth={progress.strokeWidth}
                                                styles={
                                                    {
                                                        trail: {
                                                            stroke: progress.strokeColor,
                                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                                        },
                                                        text: {
                                                            fill: '#adb5c4',
                                                            fontSize: '16px',
                                                            dominantBaseline: 'central',
                                                            textAnchor: 'middle',
                                                        },
                                                        path: {
                                                            stroke: progress.strokePath,
                                                            strokeLinecap: progress.strokeLinecap,
                                                        },
                                                    }
                                                }
                                            />
                                        );
                                    }}
                                </AnimatedProgressProvider>
                            }
                        </TrackVisibility>
                        <div className="circle-info">
                            <h4 className="title">{progress.title}</h4>
                            <span className="subtitle">{progress.subtitle}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CircleProgress;