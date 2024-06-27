
const mockSentences = [
  {
    first: '\u05e2\u05e9\u05e8\u05d5\u05ea \u05d0\u05e0\u05e9\u05d9\u05dd \u05de\u05d2\u05d9\u05e2\u05d9\u05dd \u05de\u05ea\u05d0\u05d9\u05dc\u05e0\u05d3 \u05dc\u05d9\u05e9\u05e8\u05d0\u05dc \u05db\u05e9\u05d4\u05dd \u05e0\u05e8\u05e9\u05de\u05d9\u05dd \u05db\u05de\u05ea\u05e0\u05d3\u05d1\u05d9\u05dd, \u05d0\u05da \u05dc\u05de\u05e2\u05e9\u05d4 \u05de\u05e9\u05de\u05e9\u05d9\u05dd \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05e9\u05db\u05d9\u05e8\u05d9\u05dd \u05d6\u05d5\u05dc\u05d9\u05dd.',
    second: '\u05ea\u05d5\u05e4\u05e2\u05d4 \u05d6\u05d5 \u05d4\u05ea\u05d1\u05e8\u05e8\u05d4 \u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05d5\u05d5\u05e2\u05d3\u05ea \u05d4\u05e2\u05d1\u05d5\u05d3\u05d4 \u05d5\u05d4\u05e8\u05d5\u05d5\u05d7\u05d4 \u05e9\u05dc \u05d4\u05db\u05e0\u05e1\u05ea, \u05e9\u05d3\u05e0\u05d4 \u05d1\u05e0\u05d5\u05e9\u05d0 \u05d4\u05e2\u05e1\u05e7\u05ea \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d6\u05e8\u05d9\u05dd.',
    third: '\u05d9\u05d5"\u05e8 \u05d4\u05d5\u05d5\u05e2\u05d3\u05d4, \u05d7"\u05db \u05d0\u05d5\u05e8\u05d4 \u05e0\u05de\u05d9\u05e8 (\u05de\u05e2\u05e8\u05da), \u05d8\u05e2\u05e0\u05d4 \u05db\u05d9 "\u05de\u05d1\u05d9\u05d0\u05d9\u05dd \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d6\u05e8\u05d9\u05dd \u05dc\u05d9\u05e9\u05e8\u05d0\u05dc \u05e2\u05dc \u05ea\u05e7\u05df \u05e9\u05dc \u05de\u05ea\u05e0\u05d3\u05d1\u05d9\u05dd \u05de\u05ea\u05d0\u05d9\u05dc\u05e0\u05d3, \u05e8\u05e7 \u05db\u05d3\u05d9 \u05dc\u05d0 \u05dc\u05e9\u05dc\u05dd \u05dc\u05d4\u05dd \u05e9\u05db\u05e8 \u05de\u05d9\u05e0\u05d9\u05de\u05d5\u05dd.',
    verbs: ["\u05d4\u05ea\u05d1\u05e8\u05e8\u05d4", "\u05d3\u05e0\u05d4"]
  },
  {
    first: '\u05de\u05e6\u05d3 \u05d0\u05d7\u05d3 \u05e8\u05d5\u05e6\u05d4 \u05d4\u05d0\u05d5\u05e6\u05e8 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3 \u05d0\u05ea \u05e9\u05db\u05e8 \u05d4\u05de\u05d9\u05e0\u05d9\u05de\u05d5\u05dd, \u05d5\u05de\u05e6\u05d3 \u05e9\u05e0\u05d9 \u05de\u05ea\u05d9\u05e8 \u05de\u05e9\u05e8\u05d3 \u05d4\u05e2\u05d1\u05d5\u05d3\u05d4 \u05d5\u05d4\u05e8\u05d5\u05d5\u05d7\u05d4 \u05dc\u05d4\u05e2\u05e1\u05d9\u05e7 \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d6\u05e8\u05d9\u05dd \u05d1\u05e4\u05d7\u05d5\u05ea \u05de\u05e9\u05db\u05e8 \u05d6\u05d4".', 
    second: '\u05e0\u05de\u05d9\u05e8 \u05d4\u05d5\u05d3\u05d9\u05e2\u05d4 \u05db\u05d9 \u05ea\u05e4\u05e0\u05d4 \u05dc\u05e9\u05e8\u05d9 \u05d4\u05e4\u05e0\u05d9\u05dd \u05d5\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4 \u05d5\u05d4\u05e8\u05d5\u05d5\u05d7\u05d4 \u05d5\u05dc\u05de\u05d6\u05db\u05d9\u05e8 \u05ea\u05e0\u05d5\u05e2\u05ea \u05d4\u05de\u05d5\u05e9\u05d1\u05d9\u05dd, \u05d1\u05ea\u05d1\u05d9\u05e2\u05d4 \u05dc\u05d1\u05d8\u05dc \u05d0\u05ea \u05d4\u05d6\u05de\u05e0\u05ea\u05dd \u05e9\u05dc 500 \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d6\u05e8\u05d9\u05dd \u05de\u05ea\u05d0\u05d9\u05dc\u05e0\u05d3 \u05db\u05de\u05ea\u05e0\u05d3\u05d1\u05d9\u05dd \u05db\u05d1\u05d9\u05db\u05d5\u05dc.', 
    third: '\u05d4\u05d9\u05d0 \u05d4\u05d5\u05d3\u05d9\u05e2\u05d4 \u05db\u05d9 \u05d4\u05d5\u05d5\u05e2\u05d3\u05d4 \u05ea\u05d2\u05d1\u05e9 \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d1\u05e0\u05d5\u05e9\u05d0 \u05d4\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d4\u05d6\u05e8\u05d9\u05dd, \u05e9\u05ea\u05db\u05dc\u05d5\u05dc \u05d0\u05d9\u05e1\u05d5\u05e8 \u05e2\u05dc \u05de\u05ea\u05df \u05e9\u05db\u05e8 \u05dc\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05de\u05ea\u05d7\u05ea \u05dc\u05e9\u05db\u05e8 \u05d4\u05de\u05d9\u05e0\u05d9\u05de\u05d5\u05dd \u05d5\u05de\u05ea\u05df \u05d4\u05ea\u05e0\u05d0\u05d9\u05dd \u05d4\u05e1\u05d5\u05e6\u05d9\u05d0\u05dc\u05d9\u05d9\u05dd \u05d4\u05de\u05e7\u05d5\u05d1\u05dc\u05d9\u05dd \u05d1\u05de\u05e7\u05d5\u05dd \u05d4\u05e2\u05d1\u05d5\u05d3\u05d4.',
    verbs: [
      "\u05d4\u05d5\u05d3\u05d9\u05e2\u05d4",
      "\u05ea\u05e4\u05e0\u05d4",
      "\u05dc\u05d1\u05d8\u05dc",
    ]
  },
  {
    first: '\u05db\u05de\u05d5 \u05db\u05df, \u05ea\u05e6\u05d9\u05d1 \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05e2\u05d5\u05e0\u05e9\u05d9 \u05de\u05d0\u05e1\u05e8 \u05d5\u05d4\u05d8\u05dc\u05ea \u05e7\u05e0\u05e1\u05d5\u05ea \u05db\u05d1\u05d3\u05d9\u05dd \u05dc\u05de\u05d9 \u05e9\u05d9\u05e2\u05e1\u05d9\u05e7 \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d6\u05e8\u05d9\u05dd \u05d1\u05dc\u05d0 \u05e8\u05e9\u05d9\u05d5\u05df.',
    second: '\u05de\u05e8\u05d2\u05dc\u05d9\u05ea \u05d0\u05d9\u05dc\u05ea, \u05d4\u05de\u05de\u05d5\u05e0\u05d4 \u05e2\u05dc \u05de\u05ea\u05df \u05d4\u05d9\u05ea\u05e8\u05d9 \u05e2\u05d1\u05d5\u05d3\u05d4 \u05dc\u05d6\u05e8\u05d9\u05dd \u05d1\u05e9\u05d9\u05e8\u05d5\u05ea \u05d4\u05ea\u05e2\u05e1\u05d5\u05e7\u05d4, \u05de\u05e1\u05e8\u05d4 \u05db\u05d9 \u05ea\u05e0\u05d5\u05e2\u05ea \u05d4\u05de\u05d5\u05e9\u05d1\u05d9\u05dd \u05d4\u05e4\u05e2\u05d9\u05dc\u05d4 \u05dc\u05d7\u05e5 \u05e9\u05d9\u05d5\u05ea\u05e8 \u05dc\u05d4 \u05dc\u05d4\u05d1\u05d9\u05d0 \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d6\u05e8\u05d9\u05dd \u05de\u05ea\u05d0\u05d9\u05dc\u05e0\u05d3.', 
    third: '\u05d4\u05d9\u05d0 \u05d0\u05de\u05e8\u05d4 \u05db\u05d9 \u05e9\u05d9\u05e8\u05d5\u05ea \u05d4\u05ea\u05e2\u05e1\u05d5\u05e7\u05d4 \u05d4\u05e6\u05d9\u05e2 \u05dc\u05d4\u05d1\u05d9\u05d0 \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05de\u05d3\u05e8\u05d5\u05dd \u05dc\u05d1\u05e0\u05d5\u05df, \u05d0\u05da \u05ea\u05e0\u05d5\u05e2\u05ea \u05d4\u05de\u05d5\u05e9\u05d1\u05d9\u05dd \u05e1\u05d9\u05e8\u05d1\u05d4.',
    verbs: [
      "\u05de\u05de\u05d5\u05e0\u05d4",
      "\u05de\u05e1\u05e8\u05d4",
      "\u05d4\u05e4\u05e2\u05d9\u05dc\u05d4",
      "\u05d9\u05d5\u05ea\u05e8",
      "\u05dc\u05d4\u05d1\u05d9\u05d0",
    ]
  },
  {
    first: '\u05d9\u05e9\u05e8\u05d0\u05dc \u05d0\u05e8\u05d3, \u05e1\u05de\u05e0\u05db"\u05dc \u05d4\u05d1\u05d9\u05d8\u05d5\u05d7 \u05d4\u05dc\u05d0\u05d5\u05de\u05d9, \u05d0\u05de\u05e8 \u05db\u05d9 \u05de\u05de\u05dc\u05d0 \u05de\u05e7\u05d5\u05dd \u05e9\u05e8 \u05d4\u05e2\u05d1\u05d5\u05d3\u05d4 \u05d5\u05d4\u05e8\u05d5\u05d5\u05d7\u05d4, \u05d3\u05d5\u05d3 \u05de\u05d2\u05df, \u05d4\u05e7\u05d9\u05dd \u05d5\u05e2\u05d3\u05d4 \u05d1\u05d9\u05df-\u05de\u05e9\u05e8\u05d3\u05d9\u05ea, \u05e9\u05d4\u05de\u05dc\u05d9\u05e6\u05d4 \u05dc\u05d4\u05d2\u05d3\u05d9\u05dc \u05d1\u05d0\u05d5\u05e4\u05df \u05de\u05e9\u05de\u05e2\u05d5\u05ea\u05d9 \u05d0\u05ea \u05d4\u05e7\u05e0\u05e1\u05d5\u05ea \u05dc\u05de\u05e2\u05e1\u05d9\u05e7\u05d9\u05dd.',
     second: '\u05d7"\u05db \u05d0\u05dc\u05d9 \u05d3\u05d9\u05d9\u05df (\u05de\u05e2\u05e8\u05da) \u05d4\u05d2\u05d9\u05e9 \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05e9\u05dc\u05e4\u05d9\u05d4 \u05d9\u05d5\u05d8\u05dc \u05d4\u05d9\u05d8\u05dc \u05e2\u05dc \u05de\u05e2\u05e1\u05d9\u05e7\u05d9 \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d6\u05e8\u05d9\u05dd, \u05db\u05d3\u05d9 \u05dc\u05de\u05e0\u05d5\u05e2 \u05d4\u05e2\u05d3\u05e4\u05ea\u05dd \u05e2\u05dc \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9\u05d9\u05dd.',
      third: '\u05d7\u05d1\u05e8\u05d5\u05ea \u05d4\u05de\u05e2\u05e1\u05d9\u05e7\u05d5\u05ea \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d6\u05e8\u05d9\u05dd \u05d6\u05d5\u05db\u05d5\u05ea \u05d1\u05de\u05db\u05e8\u05d6\u05d9\u05dd, \u05d4\u05d9\u05d5\u05ea \u05d5\u05d4\u05df \u05de\u05e6\u05d9\u05e2\u05d5\u05ea \u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05d6\u05d5\u05dc\u05d9\u05dd \u05d9\u05d5\u05ea\u05e8.',
    verbs: [
      "\u05d4\u05d2\u05d9\u05e9",
      "\u05d9\u05d5\u05d8\u05dc",
      "\u05dc\u05de\u05e0\u05d5\u05e2",
    ]
  },
  {
    first: '\u05d7"\u05db \u05e8\u05df \u05db\u05d4\u05df (\u05e8\u05e5) \u05d0\u05de\u05e8 \u05db\u05d9 \u05e2\u05dc \u05d4\u05d5\u05d5\u05e2\u05d3\u05d4 \u05dc\u05e4\u05e0\u05d5\u05ea \u05dc\u05de\u05de\u05e9\u05dc\u05d4 \u05d1\u05d3\u05e8\u05d9\u05e9\u05d4 \u05dc\u05d7\u05e1\u05dc \u05d0\u05ea \u05d4\u05e2\u05e1\u05e7\u05ea \u05d4\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d4\u05d6\u05e8\u05d9\u05dd \u05dc\u05d0\u05dc\u05ea\u05e8, \u05e2\u05dc \u05e8\u05e7\u05e2 \u05d4\u05d9\u05e6\u05e2 \u05d4\u05e2\u05d5\u05dc\u05d9\u05dd \u05d4\u05de\u05d5\u05db\u05e0\u05d9\u05dd \u05dc\u05e2\u05d1\u05d5\u05d3 \u05d1\u05db\u05dc \u05e2\u05d1\u05d5\u05d3\u05d4 \u05d1\u05e9\u05db\u05e8 \u05d4\u05de\u05d9\u05e0\u05d9\u05de\u05d5\u05dd.',
    second: '\u05dc\u05d3\u05d1\u05e8\u05d9\u05d5, \u05d9\u05e9 \u05dc\u05e4\u05e0\u05d5\u05ea \u05dc\u05de\u05e9\u05e8\u05d3 \u05d4\u05e2\u05d1\u05d5\u05d3\u05d4 \u05d5\u05d4\u05e8\u05d5\u05d5\u05d7\u05d4 \u05d1\u05d3\u05e8\u05d9\u05e9\u05d4 \u05dc\u05d1\u05d8\u05dc \u05d1\u05ea\u05d5\u05da \u05d7\u05d5\u05d3\u05e9 \u05d0\u05ea \u05e2\u05d1\u05d5\u05d3\u05ea \u05d4\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d4\u05d6\u05e8\u05d9\u05dd \u05d4\u05de\u05d5\u05e2\u05e1\u05e7\u05d9\u05dd \u05db\u05d9\u05d5\u05dd \u05ea\u05d7\u05ea \u05d4\u05db\u05d5\u05ea\u05e8\u05ea "\u05de\u05ea\u05e0\u05d3\u05d1\u05d9\u05dd".',
    third: '\u05d7"\u05db \u05d9\u05d0\u05d9\u05e8 \u05e6\u05d1\u05df (\u05de\u05e4\u05dd) \u05d0\u05de\u05e8 \u05db\u05d9 \u05e4\u05e8\u05e9\u05ea \u05d4\u05de\u05ea\u05e0\u05d3\u05d1\u05d9\u05dd \u05d4\u05ea\u05d0\u05d9\u05dc\u05e0\u05d3\u05d9\u05d9\u05dd \u05d4\u05d9\u05d0 "\u05db\u05ea\u05dd \u05d7\u05e8\u05e4\u05d4 \u05e2\u05dc \u05e4\u05e8\u05e6\u05d5\u05e4\u05e0\u05d5 \u05d4\u05dc\u05d0\u05d5\u05de\u05d9.',
    verbs: [
      "\u05dc\u05e4\u05e0\u05d5\u05ea",
      "\u05dc\u05d1\u05d8\u05dc",
      "\u05de\u05d5\u05e2\u05e1\u05e7\u05d9\u05dd",
    ]
  },
];

export async function* getSentence() {
  let i = 0;
  while (i < mockSentences.length){
    yield mockSentences[i];
  }
}