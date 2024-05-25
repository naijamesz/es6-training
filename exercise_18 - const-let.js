const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

// แบบฝึกหัด นับจำนวนตัวอักษรที่เป็น targetString
function count(targetString) {
  // var characters = ['a', 'e', 'i', 'o', 'u']; // bad
  // var number = 0; // bad
  const characters = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;

  for (let i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
}

console.log(count('aeiouzasobcie')); //  9 // มี a e i o u ใน targetString

// แบบฝึกหัด buildExpression
function buildExpressions(code) {
  const transformedCode = JSXTransformer.transform(code).code;
  const codeByLine = transformedCode.split('\n');
  const tokenized = esprima.tokenized(transformedCode, { loc: true });
  const parens = { '(': 0, '{': 0, '[': 0 };
  let wasOpen = false;

  var exp = _.reduce(
    tokenized,
    (expressions, { value, loc: { end } }, index) => {
      const lineNumber = end.line;
      const lineContents = codeByLine[lineNumber - 1];
      const lineHasMoreDelimiters = this.lineHasMoreDelimiters(end, lineContents);
      const endOfLine = end.column === lineContents.length;

      if (expressions[lineNumber]) {
        return expressions;
      }
      if (OPEN_DELIMITERS.includes(value)) {
        parens[value] += 1;
        wasOpen = true;
      } else if (CLOSE_DELIMITERS.includes(value)) {
        parens[DELIMITER_MAP[value]] -= 1;
      }

      if (!lineHasMoreDelimiters && wasOpen && _.every(parens, count => count === 0)) {
        wasOpen = false;
        expressions[lineNumber] = _.take(codeByLine, lineNumber).join('\n');
        return expressions;
      }
      return expressions;
    },
    {}
  );
  return exp;
}

console.log(buildExpressions); // สร้าง expression จาก code ที่ได้รับมา
