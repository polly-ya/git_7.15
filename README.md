##### Git 中的三个区域：

使用 Git 管理的项目，拥有三个区域，分别是**工作区**、**暂存区**、**Git 仓库**

##### Git 中的三种状态：

- 已修改 `modified` ：表示修改了文件，但还没将修改的结果放到**暂存区**
- 已暂存 `staged` ：表示对已修改文件的当前版本做了标记，使之包含在**下次提交的列表中**
- 已提交 `committed` ：表示文件已经安全地保存在本地的 **Git 仓库中**

##### 安装并配置 Git：

##### 1、安装 Git

- 在 Windows 中下载并安装 Git

  在开始使用 `Git` 管理项目的版本之前，需要将它安装到计算机上。可以使用浏览器访问如下的网址，根据自己的操作系统，选择下载对应的 `Git` 安装包：

  链接地址：https://git-scm.com/downloads

  <img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E5%AE%89%E8%A3%85git.png" style="width: 50%;">

- 在 Mac 安装 Git

  通过 Homebrew 下载，如果没有 Homebrew ，参考以下链接进行安装：

  ```shell
  /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
  ```

  安装好在 **终端**  运行以下命令即可安装：

  ```shell
  brew install git
  ```

  

##### 2、配置用户信息

安装完 Git 之后，要做的第一件事就是设置自己的**用户名**和**邮件地址**。因为通过 Git 对项目进行版本管理的时候，Git 需要使用这些基本信息，来记录是谁对项目进行了操作：

```shell
git config --global user.name "itheima"
git config --global user.email "itheima@itcast.cn"
```

**注意：**如果使用了 --global 选项，那么该命令只需要运行一次，即可永久生效。



##### 3、Git 的全局配置文件

通过 `git config --global user.name` 和 `git config --global user.email` 配置的用户名和邮箱地址，会被写入到 `C:/Users/用户名文件夹/.gitconfig` 文件中(Windows)，`/Users/zhaohang/.gitconfig` (MacOS) 。这个文件是 `Git` 的**全局配置文件**，**配置一次即可永久生效**。

可以使用记事本打开此文件，从而查看自己曾经对 Git 做了哪些全局性的配置。

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/Git%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.png" style="width: 30%;">

##### 4、检查配置信息

除了使用记事本查看全局的配置信息之外，还可以运行如下的终端命令，快速的查看 Git 的全局配置信息：

```shell
# 查看所有的全局配置项
git config --list --global
# 查看指定的全局配置项
git config user.name
git config user.email
```



##### 5、获取帮助信息

可以使用 `git help <verb>` 命令，无需联网即可在浏览器中打开帮助手册，例如：

```shell
# 打开 git config 命令的帮助手册
git help config
```

如果不想查看完整的手册，那么可以用 -h 选项获得更简明的“help”输出：

```shell
# 想要获取 git config 命令的快速参考
git config -h
```



##### 在现有目录中初始化仓库（重要）

如果自己有一个尚未进行版本控制的项目目录，想要用 `Git` 来控制它，需要执行如下两个步骤：

① 在项目目录中，通过鼠标右键打开“`Git Bash`” 

② 执行 `git init` 命令将当前的目录转化为 `Git` 仓库

`git init` 命令会创建一个名为 .git 的隐藏目录，**这个 .git 目录就是当前项目的 Git 仓库**，里面包含了**初始的必要文件**，这些文件是 Git 仓库的**必要组成部分**

##### 检查文件的状态：git status ()

```shell
# 以精简的方式显示文件状态
git status -s
git status --short
```

未跟踪文件前面有红色的 **??** 标记，例如：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E4%BB%A5%E7%B2%BE%E7%AE%80%E7%9A%84%E6%96%B9%E5%BC%8F%E6%98%BE%E7%A4%BA%E6%96%87%E4%BB%B6%E7%8A%B6%E6%80%81.png" style="width: 70%;">



##### 6、跟踪新文件

使用命令 `git add` 开始跟踪一个文件。 所以，要跟踪 `index.html` 文件，运行如下的命令即可：

```shell
git add index.html
# 如果文件过多，你项跟踪目录下所有文件
git add .
```

此时再运行 `git status` 命令，会看到 `index.html` 文件在 `Changes to be committed` 这行的下面，说明已被跟踪，并处于暂存状态：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E8%B7%9F%E8%B8%AA%E6%96%B0%E6%96%87%E4%BB%B6.png" style="width: 100%;">



##### 7、提交更新

现在暂存区中有一个 `index.html` 文件等待被提交到 `Git` 仓库中进行保存。可以执行 `git commit` 命令进行提交，其中 `-m` 选项后面是本次的提交消息，用来对提交的内容做进一步的描述：

```shell
git commit -m "新建了index.html 文件"
```

提交成功之后，会显示如下的信息：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E6%8F%90%E4%BA%A4%E6%9B%B4%E6%96%B0.png" style="width: 60%;">

提交成功之后，再次检查文件的状态，得到提示如下：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E6%8F%90%E4%BA%A4%E6%9B%B4%E6%96%B0%E5%90%8E%E7%8A%B6%E6%80%81.png" style="width: 60%;">

更新流程：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E6%8F%90%E4%BA%A4%E6%9B%B4%E6%96%B0%E6%B5%81%E7%A8%8B.png" style="width: 60%;">



##### 8、对已提交的文件进行修改

目前，`index.html` 文件已经被 `Git` 跟踪，并且工作区和 `Git` 仓库中的 `index.html` 文件内容保持一致。当我们修改了工作区中 `index.html` 的内容之后，再次运行 `git status` 和 `git status -s` 命令，会看到如下的内容：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E5%AF%B9%E5%B7%B2%E6%8F%90%E4%BA%A4%E7%9A%84%E6%96%87%E4%BB%B6%E8%BF%9B%E8%A1%8C%E4%BF%AE%E6%94%B9.png" style="width: 60%;">

文件 `index.html` 出现在 `Changes not staged for commit` 这行下面，说明**已跟踪文件的内容发生了变化，但还没有放到暂存区**。

**注意：**修改过的、没有放入暂存区的文件前面有红色的 **M** 标记。



##### 9、暂存已修改的文件

目前，工作区中的 `index.html` 文件已被修改，如果要暂存这次修改，需要再次运行 `git add` 命令，这个命令是个多功能的命令，主要有如下 3 个功效：

① 可以用它 **开始跟踪新文件**

② 把 **已跟踪的**、**且已修改** 的文件放到暂存区

③ 把有冲突的文件标记为已解决状态

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E6%9A%82%E5%AD%98%E5%B7%B2%E4%BF%AE%E6%94%B9%E7%9A%84%E6%96%87%E4%BB%B6.png" style="width: 60%;">



##### 10、提交已暂存的文件

再次运行 `git commit -m "提交消息"` 命令，即可将暂存区中记录的 `index.html` 的快照，提交到 `Git` 仓库中进行保存：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E6%8F%90%E4%BA%A4%E5%B7%B2%E6%9A%82%E5%AD%98%E7%9A%84%E6%96%87%E4%BB%B6.png" style="width: 60%;">

提交修改后暂存文件流程：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E6%8F%90%E4%BA%A4%E4%BF%AE%E6%94%B9%E5%90%8E%E6%9A%82%E5%AD%98%E6%96%87%E4%BB%B6.png" style="width: 60%;">



##### 11、撤销对文件的修改（慎用）

**撤销对文件的修改指的是：**把对工作区中对应文件的修改，**还原**成 Git 仓库中所保存的版本。

**操作的结果：**所有的修改会丢失，且无法恢复！**危险性比较高，请慎重操作！**

```shell
# 撤销操作
git checkout -- 文件名
```

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E6%92%A4%E9%94%80%E5%AF%B9%E6%96%87%E4%BB%B6%E7%9A%84%E4%BF%AE%E6%94%B9.png" style="width: 60%;">

**撤销操作的本质：**用 Git 仓库中保存的文件，覆盖工作区中指定的文件。



##### 12、向暂存区中一次性添加多个文件

如果需要被暂存的文件个数比较多，可以使用如下的命令，一次性将所有的新增和修改过的文件加入暂存区：

```shell
git add .
```

今后在项目开发中，会经常使用这个命令，将新增和修改过后的文件加入暂存区



##### 13、取消暂存的文件

如果需要从暂存区中移除对应的文件，可以使用如下的命令：

```shell
# 从暂存区移除单个文件
git reset HEAD 要移出的文件名称
# 从暂存区移除所有文件
git reset HEAD .
```



##### 14、跳过使用暂存区域

`Git` 标准的工作流程是`工作区 → 暂存区 → Git 仓库`，但有时候这么做略显繁琐，此时可以跳过暂存区，直接将工作区中的修改提交到 `Git` 仓库，这时候 `Git` 工作的流程简化为了`工作区 → Git 仓库`

`Git` 提供了一个跳过使用暂存区域的方式， 只要在提交的时候，给 `git commit` 加上 `-a` 选项，`Git` 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 `git add` 步骤：

```shell
git commit -a -m "描述信息"
```



##### 15、移除文件

从 Git 仓库中移除文件的方式有两种：

① 从 Git 仓库和工作区中**同时移除**对应的文件

② 只从 Git 仓库中移除指定的文件，但保留工作区中对应的文件

```shell
# 从 Git仓库和工作区中同时移除 index.js 文件
git rm -f index.js
# 只从 Git 仓库中移除 index.css，但保留工作区中的 index.css 文件
git rm --cached index.css
```

绿色的 D 表示文件已经移除，下次提交时候删除



##### 16、忽略文件

一般我们总会有些文件无需纳入 `Git` 的管理，也不希望它们总出现在未跟踪文件列表。 在这种情况下，我们可以创建一个名为 `.gitignore` 的配置文件，列出要忽略的文件的匹配模式。

文件 `.gitignore` 的格式规范如下：

① 以 **# 开头**的是注释

② 以 **/ 结尾**的是目录

③ 以 **/ 开头**防止递归

④ 以 **! 开头**表示取反

⑤ 可以使用 **glob 模式**进行文件和文件夹的匹配（glob 指简化了的正则表达式）

- **星号 \*** 匹配**零个或多个任意字符**
- **`[abc]`** 匹配**任何一个列在方括号中的字符** （此案例匹配一个 a 或匹配一个 b 或匹配一个 c） 
- **问号 ?** 只匹配**一个任意字符**
- **两个星号 \**** 表示匹配**任意中间目录**（比如 a/**/z 可以匹配 a/z 、 a/b/z 或 a/b/c/z 等）
- 在方括号中使用**短划线**分隔两个字符， 表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配所有 0 到 9 的数字）

 `.gitignore` 文件的例子

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E5%BF%BD%E7%95%A5%E6%B8%85%E5%8D%95.png" style="width: 50%;">



##### 17、查看提交历史

如果希望回顾项目的提交历史，可以使用 `git log` 这个简单且有效的命令

```shell
# 按时间先后顺序列出所有的提交历史，最近的提交在最上面
git log

# 只展示最新的两条提交历史，数字可以按需进行填写
git log -2

# 在一行上展示最近两条提交历史的信息
git log -2 --pretty=oneline

# 在一行上展示最近两条提交历史信息，并自定义输出的格式
# &h 提交的简写哈希值  %an 作者名字  %ar 作者修订日志  %s 提交说明
git log -2 --pretty=format:"%h | %an | %ar | %s"
```



##### 18、回退到指定的版本

```shell
# 在一行上展示所有的提交历史
git log --pretty=oneline

# 使用 git reset --hard 命令，根据指定的提交 ID 回退到指定版本
git reset --hard <CommitID>

# 在旧版本中使用 git reflog --pretty=oneline 命令，查看命令操作的历史
git reflog --pretty=onelone

# 再次根据最新的提交 ID，跳转到最新的版本
git reset --hard <CommitID>
```

##### 19、远程仓库的两种访问方式

`Github` 上的远程仓库，有两种访问方式，分别是 `HTTPS` 和 `SSH`。它们的区别是：

① `HTTPS`：**零配置**；但是每次访问仓库时，需要重复输入 `Github` 的账号和密码才能访问成功

② `SSH`：**需要进行额外的配置**；但是配置成功后，每次访问仓库时，不需重复输入 `Github` 的账号和密码

**注意：**在实际开发中，**推荐使用 SSH 的方式访问远程仓库。**

##### 查看分支列表

使用如下的命令，可以查看当前 Git 仓库中所有的分支列表：

```shell
git branch
```

运行的结果如下所示：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E6%9F%A5%E7%9C%8B%E5%88%86%E6%94%AF.png" style="zoom:100%;" />

**注意：**分支名字前面的 ***** 号表示当前所处的分支。



##### 6、创建新分支

使用如下的命令，可以**基于当前分支**，**创建一个新的分支**，此时，新分支中的代码和当前分支完全一样：

```shell
git branch 分支名称
```

图示如下：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E5%88%9B%E5%BB%BA%E5%88%86%E6%94%AF.png" style="zoom:100%;" />



##### 7、切换分支

使用如下的命令，可以**切换到指定的分支上**进行开发：

```shell
git checkout login
```

图示如下：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E5%88%87%E6%8D%A2%E5%88%86%E6%94%AF.png" style="zoom:100%;" />



##### 8、分支的快速创建和切换

使用如下的命令，可以**创建指定名称的新分支**，并**立即切换到新分支上**：

```shell
# -b 表示创建一个新分支
# checkout 表示切换到刚才新建的分支上
git checkout -b 分支名称
```

图示如下：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BA%E5%B9%B6%E4%B8%94%E5%88%87%E6%8D%A2.png" style="zoom:100%;" />

**注意：**

"`git checkout -b 分支名称`" 是下面两条命令的简写形式：

① `git branch` 分支名称

② `git checkout` 分支名称



##### 9、合并分支

功能分支的代码开发测试完毕之后，可以使用如下的命令，将完成后的代码合并到 `master` 主分支上：

```shell
# 1. 切换到 master 分支
git checkout master
# 2. 在master 分支上运行 git merge 命令，将 login 分支的代码合班到 master 分支
git merge login
```

图示如下：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E5%90%88%E5%B9%B6%E5%88%86%E6%94%AF.png" style="zoom:100%;" />

**合并分支时的注意点**：

假设要把 C 分支的代码合并到 A 分支，则必须**先切换到 A 分支**上，**再运行 git merge 命令**，来合并 C 分支！

![1661497339241](C:\Users\WIN10\AppData\Roaming\Typora\typora-user-images\1661497339241.png)



##### 10、删除分支

当把功能分支的代码合并到 `master` 主分支上以后，就可以使用如下的命令，删除对应的功能分支：

```shell
git branch -d 分支名称
```

图示如下：

<img src="F:/h/Git/git/git%E7%AC%94%E8%AE%B0/images/%E5%88%A0%E9%99%A4%E5%88%86%E6%94%AF.png" style="zoom:100%;" />

**注意：**想要删除分支，必须要先切换到主分支



##### 11、遇到冲突时的分支合并

如果**在两个不同的分支中**，对**同一个文件**进行了**不同的修改(commit)**，Git 就没法干净的合并它们。 此时，我们需要打开这些包含冲突的文件然后**手动解决冲突**。

```shell
# 假设：在把 reg 分支合并到 master 分支期间
git checkout master
git merge reg

# 打开包含冲突的文件，手动解决冲突之后，再执行如下命令
git add .
git commit -m "解决了分支合并冲突的问题"
```



##### 12、将本地分支推送到远程仓库

如果是**第一次**将本地分支推送到远程仓库，需要运行如下的命令：

```shell
# -u 表示把本地分支和远程分支进行关联，只在第一次推送的时候需要带 -u 参数
git push -u 远程仓库的别名 本地分支名称:远程分支名称

# 实际案例
git push -u origin payment:pay

# 如果希望远程分支的名称和本地分支名称保持一致，可以对命令进行简化
git push -u origin payment
```

**注意：**第一次推送分支需要带 **-u 参数**，此后可以直接使用 `git push` 推送代码到远程分支。



##### 13、查看远程仓库中所有的分支列表

通过如下的命令，可以查看远程仓库中，所有的分支列表的信息：

```shell
git remote show 远程仓库名称
```



##### 14、跟踪分支

跟踪分支指的是：从远程仓库中，把远程分支下载到本地仓库中。需要运行的命令如下：

```shell
# 示例
git checkout pay

# 从远程仓库中，把对应的远程分支下载到本地仓库，并把下载的本地分支进行重命名
git checkout -b 本地分支名称 远程仓库名称/远程分支名称

# 示例
git checkout -b payment origin/pay
```



##### 15、拉取远程分支的最新的代码

可以使用如下的命令，把远程分支最新的代码下载到本地对应的分支中:

```shell
# 从远程仓库，拉取当前分支最新的代码，保持当前分支的代码和远程分支代码一致
git pull
```



##### 16、删除远程分支

可以使用如下的命令，删除远程仓库中指定的分支：

```shell
# 删除远程仓库中，制定名称的远程分支
git push 远程仓库名称 --delete 远程分支名称

# 示例
git push origin --delete pay
```





















