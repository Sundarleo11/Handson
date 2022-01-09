class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class school extends person {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }
}

let p = new person("Harry", 22);

let p2 = new school("kumar", 27, "primary school");
console.log(p);
console.log(p2);

/*  Inheratnces 
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

PS C:\Users\User\Desktop\Handson> node
Welcome to Node.js v16.13.0.
Type ".help" for more information.
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
> .node
Invalid REPL keyword
> class person {
...   constructor(name, age) {
.....     this.name = name;
.....     this.age = age;
.....   }
... }
undefined
> class school extends person {
...   constructor(name, age, school) {
.....     super(name, age);
.....     this.school = school;
.....   }
... }
undefined
>
> let p = new person("Harry", 22);
undefined
>
> let p2 = new school("kumar", 27, "primary school");
undefined
> console.log(p);
person { name: 'Harry', age: 22 }
undefined
> person.prototype.isPrototypeOf(p)
true
> school.prototype.isPrototypeOf(s);
Uncaught ReferenceError: s is not defined
> school.prototype.isPrototypeOf(p2);
true
> school.prototype.isPrototypeOf(p1);
Uncaught ReferenceError: p1 is not defined
> school.prototype.isPrototypeOf(p);
false
>
*/
