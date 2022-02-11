---
sidebarDepth: 3
---

# TypeScript

## 关于TypeScript

TypeScript 是由微软开发的自由和开源的编程语言。它是JavaScript的超集，本质上是在JavaScript语言中添加了可选的静态类型和基于类的面向对象编程。
> TypeScript is JavaScript with syntax for types
> TypeScript是带有类型系统的JavaScript

### 为什么需要TypeScript

JavaScript是弱类型, 很多错误只有在运行时才会被发现，而TypeScript提供了一套静态检测机制, 可以帮助我们在编译时就发现错误。

#### 特点

1. 支持最新的JavaScript新特性
2. 支持代码静态检查
3. 支持其他语言中的特性 (枚举、泛型、类型转换、命名空间、声明文件、类、接口等)

### TypeScript的优势总结

1. 规避大量低级错误，避免时间浪费，省时
2. 减少多人协作项目的成本，大型项目友好，省力
3. 良好的代码提示，不用反复文件跳转或则翻文档，省心

### 安装TypeScript

TypeScript的命令行工具安装方法：
npm install -g typescript
以上为全局环境安装`tsc`命令，可以在任何地方执行`tsc`命令

编译TypeScript文件

```bash
tsc helloWorld.ts
# helloWorld.ts => helloWorld.js
```

编译后将会生成一份JavaScript

生成TypeScript配置文件

```bash
tsc --init
```

运行后，将会在当前目录生成一份`tsconfig.json`文件

更多命令：

```bash
tsc -h  # 查看帮助信息
tsc -w  # 监听文件，有变动即编译
tsc -v  # 查看版本
tsc -p ./path/to/tsconfig.json  # 指定特定路径编译
```

这是一份TypeScript的配置文件，包含了官方初始化的一些配置以及注释，我们可以再次对它自定义的设置

### 尝试TypeScript

```ts
// helloWorld.ts
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```

命令行执行

```bash
tsc helloWorld.ts
```

如果没有配置对应目录时，将会在当前目录生成`helloWorld.js`

```js
// helloWorld.js
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
```

## 原始类型

### 数字（Number）

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// 二进制表示法
let binaryLiteral: number = 0b1010; // 10
// 八进制表示法
let octalLiteral: number = 0o744; // 484
let notANumber: number = NaN;
let infinityNumber = Infinity;

// 其中 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。
```

### 字符串（String）

```ts
let myName: string = 'Tom';
let sentence: string = `Hello my name is ${myName}`
```

### 布尔类型（Boolean）

```ts
let bol: boolean = true
let bol2: boolean = Boolean(false)

// 注意: 由于new Boolean返回的是一个包装对象，因此类型是属于object
let bolError: boolean = new Boolean(true)  // error
```

### Symbol

由于默认配置已经`es6`以上版本，因此可以直接使用。如果低于该版本，将要在`lib`设置以上版本即可

```ts
let sym = Symbol('key');
```

### BigInt

`BigInt` 类型在 `TypeScript3.2` 版本被内置，使用 `BigInt` 可以安全地存储和操作大整数，即使这个数已经超出了`JavaScript`构造函数 `Number` 能够表示的安全整数范围。

需要`tsconfig.json`的`lib`配置不得低于`es2020`版本

```ts
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
```

### 空值（Void）

表示没有任何类型，当一个函数没有返回值时，可以指定`void`

```ts
function sayHello(): void {
  console.log('Hello World')
}
```

变量的`void`，只有`undefined`才可以赋值给`void`。

由于默认配置`strictNullChecks : true`因此`null`无法赋值给`void`

```ts
let v: void = undefined  // good
let v2: void = null // error
let v3: void = 5  // error
```

注意：在TypeScript中，`number` 类型虽然和`BigInt`都是有表示数字的意思，但是实际上两者类型是**不同**的

```ts
declare let foo: number;
declare let bar: bigint;

foo = bar; // error: Type 'bigint' is not assignable to type 'number'.
bar = foo; // error: Type 'number' is not assignable to type 'bigint'.
```

### Null 与 Undefined

由于默认配置`strictNullChecks : true`

在默认配置下`null`和`undefined`只能够赋值给自己类型或者`any`

```ts
let n: null = null
let u: undefined = undefined
let a: any = n || u
```

### 总结

TypeScript 中的原始类型

- 布尔类型：`boolean`
- 数字类型：`number`
- 字符串类型：`string`
- 空值：`void`
- Null 和 Undefined：`null` 和 `undefined`
- Symbol 类型：`symbol`
- BigInt 大数整数类型：`bigint`

---
