document.addEventListener("DOMContentLoaded", () => {
    const faqAccordion = new FaqAccordion(
        [...document.querySelectorAll(".faq-item")]
    );

    faqAccordion.init();
});

class FaqAccordion {
    questions = [];

    constructor(questions) {
        this.questions = questions;
    }

    init() {
        this.questions.forEach((question) => {
            question.addEventListener("toggle", () => {
                if (question.open) {
                    this.closeOtherQuestions(question);
                }
            });
        });
    }

    closeOtherQuestions(currentQuestion) {
        this.questions.forEach((question) => {
            if (question !== currentQuestion) {
                question.open = false;
            }
        });
    }
}
