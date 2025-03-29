namespace tmp14 {
    const hoge = 'hoge';

    function japaneseEngineer(hoge: string ):string {
        switch (hoge) {
            case 'hoge':
                return 'hoge';
            case 'fuga':
                return 'fuga';
            default:
                return '';
        }
    }

    console.log(japaneseEngineer(hoge));


}