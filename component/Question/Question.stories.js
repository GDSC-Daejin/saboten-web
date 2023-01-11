import CategoryQCard from "../UI/CategoryQCard";

export default {
    title: "Pages/Question",
    component: CategoryQCard,
};

export const CategoryQuestion = (args) => (
    <CategoryQCard {...args} />
);
CategoryQuestion.args = {
    question: {
        title: "질문",
        a: "a 선택지",
        b: "b 선택지"
    },
    children: "text"
}; //default args
