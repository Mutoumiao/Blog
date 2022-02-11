# CSS

## 层叠、优先级和继承

### 层叠

> 💡 层叠指的是一系列规则中。它决定了如何解决样式冲突。

层叠规则主要依据三种条件：

1. **样式表的来源**：样式是从哪里来的，包含你的样式和浏览器默认样式等
2. **选择器优先级**：哪些选择器比另一些选择更重要（选择器权重计算）
3. **源码顺序**：样式在样式表里的声明顺序  （从上到下，位于最下面的源码优先级最大）

### 可继承属性

以下为常见可继承属性：

- 文本相关的属性
  - `color`
  - `font`（`family`、`size`、`weight`、`variant`、`style`）
  - `line-height`
  - `letter-spacing`
  - `text`（`align`、`indent`、`transform`）
  - `white-space`
  - `word-spacing`
- 列表属性
  - `list`（`style`、`style-type`、`style-position`、`style-image`）
- 表格的边框属性
  - `border-collapse`
  - `border-spacing`

### 特殊值

- `inherit` （指定当前属性使用继承父级）
- `initial`（指定当前**属性**使用默认值）

当`display`属性使用`initial` 时，值都将是`inline` ，无论是哪些元素，`initial` 更改的是属性的初始值，由于`display`初始值固定为`inline`
