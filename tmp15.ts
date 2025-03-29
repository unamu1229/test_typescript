namespace tmp15 {
    type Hoge = {
        Name: string;
        Referer_URL__c?: string; // URL(リファラ)
        Landing_URL__c?: string; // URL(着地)
        Utm_Source__c?: string; // 媒体
        Utm_Medium__c?: string; // 流入元
        Utm_Campaign__c?: string; // キャンペーン
    }

    const hoge: Hoge = {
        Name: 'ほげ太郎'
    }

    console.log(hoge);
}