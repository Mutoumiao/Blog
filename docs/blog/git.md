# Git 版本管理工具

## 初始化

### 使用前配置

```bash
git config --global user.name 'your_name'
git config --global user.email 'your_email@domain.com'
```

### config 更多作用

省略等同于`local`

```bash
git config --local   # 只对某个仓库有效（在某个仓库文件夹下使用）
git config --global  # 对当前用户所有仓库有效
git config --system  # 对系统所有登陆的用户有效
```

显示`config`配置方法： `--list`

```bash
git config --list --local
git config --list --global
git config --list --system
```

### 初始化git

通过使用`git init` 命令创建版本管理

##### 已有项目代码加入git管理

```bash
cd 项目所在文件夹
git init   # git初始化命令
```

#### 新项目直接使用git管理

通过在后面添加需要创建文件夹名称后，创建文件夹后自动加入git管理

```bash
git init your_project  # your_project为需要创建的文件夹名称
```

## 入门指南

#### 获取仓库

通过`clone`命令克隆仓库

```bash
git clone /path/to/repository   # 创建一个本地仓库的克隆版本
git clone username@host:/path/to/repository # 远端服务器上的仓库
```

#### 检查仓库状态

```bash
git status
```

#### 添加和提交

使用`git add` 将文件添加到暂存区，`git commit`命令提交暂存区文件

```bash
git add <filename>
git add *


git commit -m "代码提交信息"
```

##### 分支

```bash
git branch <分支名称> # 创建分支
git checkout <分支名称>  # 切换分支
git checkout -b <分支名称>  # 创建并切换到该分支
git branch -d  <分支名称>   # 删除分支
git push origin <分支名称>   # 分支推送到远程库
```

## 更多文章

- [git-recipes Git的教程](https://github.com/geeeeeeeeek/git-recipes)
- [Git 的奇技淫巧](https://github.com/521xueweihan/git-tips)
- [git提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
- [git 简明指南](https://www.html.cn/doc/git-guide/)
- [学习Git分支](https://learngitbranching.js.org/?demo=&locale=zh_CN)
