namespace hoge {
    export type StepQuestion = {
        working_type_ans?: "hgoehgeo";
    }

    export type DynamicFormSection = keyof StepQuestion;

    const hoge: DynamicFormSection[] = [];

    hoge.push('working_type_ans');

    console.log(hoge);
}
