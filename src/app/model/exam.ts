export class Exam {
    private question: String;
    private answer: String;
    private answered: boolean;

    set Question(question: String) {
        this.question = question;
    }
    get Question(): String {
        return this.question;
    }
    set Answer(answer: String) {
        this.answer = answer;
    }
    get Answer(): String {
        return this.answer;
    }
    set Answered(answered: boolean) {
        this.answered = answered;
    }
    get Answered(): boolean {
        return this.answered;
    }
}
