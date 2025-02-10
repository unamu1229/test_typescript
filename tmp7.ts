namespace tmp7 {
    export type CommonRegistration = {
        Id?: string;
    }

    export type MailMagazineCDRecord = CommonRegistration & {
        Email__c?: string;
    };

    export type MailRegistrationCDRecord = CommonRegistration & {
        Time_Career_Change_Memo__c?: string;
    }

    export type CandidateRecord = MailMagazineCDRecord | MailRegistrationCDRecord;

    const candidateRecord: CandidateRecord = {
        Id: "1",
        Email__c: "hoge",
        Time_Career_Change_Memo__c: "fuga"
    }

    console.log(candidateRecord);
}


