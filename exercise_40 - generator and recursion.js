// Create tree data structure using generator and recursion
// สร้างโครงสร้างข้อมูลต้นไม้โดยใช้ generator และ recursion ที่นำไปใช้ระบบ comment

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [new Comment('good comment', []), new Comment('bad comment', []), new Comment('bruh', [])];

const tree = new Comment('Great post!', children);
console.log(tree);

const values = [];
for (let value of tree) {
  values.push(value);
}
console.log(values);

// Output
/*
Comment {
  content: 'Great post!',
  children: [
    Comment { content: 'good comment', children: [] },
    Comment { content: 'bad comment', children: [] },
    Comment { content: 'bruh', children: [] }
  ]
}

[ 'Great post!', 'good comment', 'bad comment', 'bruh' ]
*/
