import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    img: string;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Space",
        img: "img/week1.svg",
        description: <>Week 1 is space themed!</>,
    },
    {
        title: "Music",
        img: "img/week2.svg",
        description: <>Week 2 is all about music!</>,
    },
    {
        title: "Art",
        img: "img/week3.svg",
        description: <>Week 3 is all about art!</>,
    },
    {
        title: "Code",
        img: "img/placeholder.svg",
        description: <>Week 4 is all about code!</>,
    },
];

function Feature({ title, img, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <img src={img} className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
