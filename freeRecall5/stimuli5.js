//学習語を配列で入力してください
//単語の前後をシングルクォーテーション(')で囲んでください
//単語同士はカンマで繋いでください
let learningWordList = [
    'トヘ',
    'タエ',
    'メヘ',
    'ヘヨ',
    'ネワ',
    'ソヒ',
    'ヘノ',
    'テヨ',
    'ノユ',
    'ワノ',
    'メハ',
    'ソユ',
    'ワモ',
    'ロモ',
    'セノ'
]

//連想配列に変換
for (i in learningWordList) {
    learningWordList[i] = {
        item: learningWordList[i],
        itemType: 'learningWord'
    }
}

//ランダマイズ
if(randomizedOrder == 1)
{
    learningWordList = jsPsych.randomization.shuffle(learningWordList)
}