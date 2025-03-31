namespace DestructuringAssignParams {

    type foo = {
        fuga: number;
        piyo: number;
        poyo: number;
        hoge: number;
    }

    const foo:foo = {
        'fuga': 1,
        'piyo': 2,
        'poyo': 3,
        'hoge': 4

    }

    // export const TodoItem: React.FC<Props> = ({id, task, completed, changeCompleted}: Props) => {
    // とかである分割代入引数
    function hoge({fuga, piyo, poyo}: foo) {
        console.log(fuga, piyo, poyo);
    }

    hoge(foo);
}