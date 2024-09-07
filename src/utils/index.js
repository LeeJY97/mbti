const priority = {
  e: 1,
  i: 2,
  s: 3,
  n: 4,
  f: 5,
  t: 6,
  j: 7,
  p: 8,
}

export function validateTest(tests, selected) {
  const { length: selectedLength } = Object.keys(selected);
  const { length: testsLength } = tests;

  if (selectedLength !== testsLength) {
    alert("모든 항목을 완료해주세요");
    return false;
  }
  return true;
}

export function getSummaryTest(tests, selected) {
  const eI = [];
  const sN = [];
  const fT = [];
  const jP = [];

  tests.forEach((test) => {
    test.type.includes("E") && eI.push(test);
    test.type.includes("S") && sN.push(test);
    test.type.includes("F") && fT.push(test);
    test.type.includes("J") && jP.push(test);
  });

  const [e, i] = calculatePercentages(eI, selected);
  const [s, n] = calculatePercentages(sN, selected);
  const [f, t] = calculatePercentages(fT, selected);
  const [j, p] = calculatePercentages(jP, selected);

  const originalSummary = Object.entries({ e, i, s, n, f, t, j, p }).map(([key, value]) => {
    return { [key]: value };
  });

  const sortSummary = originalSummary.sort((a, b) => {
    const valueA = Object.values(a)[0];
    const valueB = Object.values(b)[0];

    return valueB - valueA;
  });

  const mbti = sortSummary.slice(0, 4).sort((a, b) => {
    const keyA = Object.keys(a)[0];
    const keyB = Object.keys(b)[0];
    return priority[keyA] - priority[keyB];
  })
    .map(item => Object.keys(item)[0])
    .join('');


  const resultSummary = {};

  originalSummary.forEach((cur) => {
    Object.entries(cur).forEach(([key, value]) => {
      resultSummary[key] = value;
    })
  });

  resultSummary.mbti = mbti;

  return resultSummary;
}

function calculatePercentages(items, selected) {
  const count_1 = items.filter((cur) => selected[cur.id] === "y").length;
  const count_2 = items.filter((cur) => selected[cur.id] === "n").length;
  const percent_1 = Math.round((count_1 / items.length) * 100);
  const percent_2 = Math.round((count_2 / items.length) * 100);

  return [percent_1, percent_2];
}

const nickname = {
  "determiners": [
    "예쁜",
    "화난",
    "귀여운",
    "배고픈",
    "철학적인",
    "현학적인",
    "슬픈",
    "푸른",
    "비싼",
    "밝은"
  ],
  "animals": [
    "호랑이",
    "비버",
    "강아지",
    "부엉이",
    "여우",
    "치타",
    "문어",
    "고양이",
    "미어캣",
    "다람쥐"
  ]
}

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// 랜덤 닉네임 생성 함수
export const generateRandomNickname = () => {
  const randomDeterminer = getRandomElement(nickname.determiners);
  const randomAnimal = getRandomElement(nickname.animals);
  return `${randomDeterminer}${randomAnimal}`;
};