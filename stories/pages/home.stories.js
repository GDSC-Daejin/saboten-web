import { ComponentStory } from "@storybook/react";
import Home from "../../pages/index";

export default {
    title: "Pages/Home",
    component: Home,
};

export const HomePage = (args) => (
    <Home {...args} />
);
HomePage.args = {
    name: "유저이름",
    question: "질문",
    Aoptions: "a 선택지",
    Boptions: "b 선택지"
}; //default args
