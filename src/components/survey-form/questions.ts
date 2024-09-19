type AttentionCheckQuestion = {
    question: string;
    possibleAnswers: string[],
    correctAnswerIndex: number
}

export const heads = [
    "",
    "מה",
    "מה לא",
    "מה אין",
    "מה איננה",
    "מה אינו",
    "למה",
];

export const tails = [
    {type: 0, tail: ""},
    {type: 1, tail: "אסור.ה/מותר.ת/אסור.ה לא?"},
    {type: 2, tail: "נהוג.ה/ראוי.ה?"},
    {type: 3, tail: "עשוי לקרות להערכתו.ה של מישהו.י?"},
    {type: 3, tail: "קרה להערכתו.ה של מישהו.י?"},
    {type: 4, tail: "בכוונתו.ה של מישהו.י לעשות?"},
    {type: 4, tail: "מטרתו.ה של מישהו.י?"},
    {type: 5, tail: "ברצונו.ה של מישהו.י?"},
    {type: 5, tail: "מתחשק למישהו.י?"},
    {type: 6, tail: "הנסיבות מאפשרות?"},
    {type: 6, tail: "הנסיבות לא מאפשרות?"},
    {type: 6, tail: "הסיטואציה גורמת?"},
    {type: 6, tail: "הסיטואציה לא גורמת?"},
    {type: 9, tail: "יתאפשר/יקרה בהינתן..."},
    {type: 7, tail: "ביכולתו.ה/בכוחו.ה של מישהו.י?"},
    {type: 8, tail: "הייעוד של משהו/מישהו.י?"},
    {type: 0, tail: "קרה/יקרה?"},
];

export const followUps = [
    "",
    "איזו מילה/מילים הובילו אותך לחשוב על מה שמותר/אסור?",
    "איזו מילה/מילים הובילו אותך לחשוב על מה שנהוג/ראוי?",
    "איזו מילה/מילים הובילו אותך לחשוב על הערכה?",
    "איזו מילה/מילים הובילו אותך לחשוב על כוונה או מטרה?",
    "איזו מילה/מילים הובילו אותך לחשוב על חשק או רצון?",
    "איזו מילה/מילים הובילו אותך לחשוב על נסיבות או סיטואציה?",
    "איזו מילה/מילים הובילו אותך לחשוב על יכולת?",
    "איזו מילה/מילים הובילו אותך לחשוב על ייעוד?",
    "איזו מילה/מילים הובילו אותך לחשוב על נסיבות או סיטואציה?",

];

export const IMCAttentionCheckQuestions: AttentionCheckQuestion[] = [
    {
        question: "עד כמה השאלה הקודמת היתה קשה? בחר/י \"מעט קשה\" להלן.",
        possibleAnswers: ["מדי קשה", "מעט קשה", "רמת קושי רגילה", "בכלל לא קשה"],
        correctAnswerIndex: 1
    },
    {
        question: "עד כמה השאלה הקודמת היתה קשה? בחר/י \"בכלל לא קשה\" להלן.",
        possibleAnswers: ["מדי קשה", "מעט קשה", "רמת קושי רגילה", "בכלל לא קשה"],
        correctAnswerIndex: 3
    },
    {
        question: "עד כמה השאלה הקודמת היתה קשה? בחר/י \"רמת קושי רגילה\" להלן.",
        possibleAnswers: ["מדי קשה", "מעט קשה", "רמת קושי רגילה", "בכלל לא קשה"],
        correctAnswerIndex: 2
    },
]

export const attentionCheckQuestions: AttentionCheckQuestion[] = [
    {
        question: "\"התרעננו\" זה פועל שקיים בעברית.",
        possibleAnswers: ["לא נכון", "נכון"],
        correctAnswerIndex: 1
    },
    {
        question: "\"התקצננתי\" זה פועל שקיים בעברית.",
        possibleAnswers: ["לא נכון", "נכון"],
        correctAnswerIndex: 0
    },
    {
        question: "\"הצטחקקו\" זה פועל שקיים בעברית.",
        possibleAnswers: ["לא נכון", "נכון"],
        correctAnswerIndex: 1
    },

]