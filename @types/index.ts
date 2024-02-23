type ButtonProps = {
    type: "button" | "submit"
    title: string
    icon?: string
    variant: string
};

type CampSiteProps = {
    backgroudImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
}

type FeatureItemProps = {
    title: string
    icon: string
    description: string
}