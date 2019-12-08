(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{213:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"软件开发中的版本控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件开发中的版本控制"}},[t._v("#")]),t._v(" 软件开发中的版本控制")]),t._v(" "),s("h2",{attrs:{id:"版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本控制系统"}},[t._v("#")]),t._v(" "),s("strong",[t._v("版本控制系统")])]),t._v(" "),s("p",[t._v("版本控制是指在软件开发过程中对各种程序代码、配置文件及说明文档等文件变更的管理，版本控制系统能够随着时间的推进记录一系列文件的变化，方便以后随时回退到某个版本。版本控制系统分为三大类：")]),t._v(" "),s("h2",{attrs:{id:"本地版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地版本控制系统"}},[t._v("#")]),t._v(" "),s("strong",[t._v("本地版本控制系统")])]),t._v(" "),s("p",[t._v("平时开发不使用版本控制系统的情况下，我们习惯用复制整个项目目录的方式来保存不同的版本，或许还会改名加上备份时间以示区别。这种方式需要对项目频繁进行复制，最终整个工作区会比较臃肿混乱且时间一长很难区分项目之间的差异。")]),t._v(" "),s("p",[t._v("为了解决这个问题，人们开发了本地版本控制系统，大多都是采用某种简单的数据库来记录文件的历次更新差异。最流行的是RCS，它的工作原理是在硬盘上保存补丁集（补丁指文件修订前后的变化），通过应用所有的补丁，可以重新计算出各个版本的文件内容。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic2.zhimg.com/v2-7513d16cbc0459f14ab2cf03fe19fe5d_b.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("本地版本控制系统一定程度上解决了手动复制粘贴代码的问题，但无法解决多人协作的问题。")]),t._v(" "),s("h2",{attrs:{id:"集中式版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集中式版本控制系统"}},[t._v("#")]),t._v(" "),s("strong",[t._v("集中式版本控制系统")])]),t._v(" "),s("p",[t._v("集中式版本控制系统的出现是为了解决不同系统上的开发者协同开发，即多人协作的问题，主要有 CVS 和 SVN。集中式版本控制系统有一个单一的集中管理的中央服务器，保存所有文件的修订版本，由管理员管理和控制开发人员的权限，而协同工作的人们通过客户端连到中央服务器，从服务器上拉取最新的代码，在本地开发，开发完成再提交到中央服务器。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic3.zhimg.com/v2-f8fc1d0c76594af680248db749325ed6_b.png",alt:"img"}})]),t._v(" "),s("p",[t._v("集中式版本控制系统有许多优点：")]),t._v(" "),s("ul",[s("li",[t._v("操作比较简单，只需要拉取代码，开发，提交代码。")]),t._v(" "),s("li",[t._v("基本解决多人协作问题，每个人都可以从服务器拉取最新代码了解伙伴的进度。")]),t._v(" "),s("li",[t._v("同时管理员可以轻松控制各开发者的权限。")]),t._v(" "),s("li",[t._v("只需要维护中央服务器上的数据库即可。")])]),t._v(" "),s("p",[t._v("缺点也很明显：")]),t._v(" "),s("ul",[s("li",[t._v("本地没有全套代码，没有版本信息，提交更新都需联网跟服务器进行交互，对网络要求较高。")]),t._v(" "),s("li",[t._v("集中式的通病：风险较大，服务器一旦宕机，所有人无法工作，服务器磁盘一旦损坏，如果没有备份将丢失所有数据。")])]),t._v(" "),s("h2",{attrs:{id:"分布式版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式版本控制系统"}},[t._v("#")]),t._v(" "),s("strong",[t._v("分布式版本控制系统")])]),t._v(" "),s("p",[t._v("分布式版本控制系统很好地解决了集中式版本控制系统的缺点。首先，在分布式版本控制系统中，系统保存的不是文件变化的差量，而是文件的快照，即把文件的整体复制下来保存，其次，最重要的是分布式版本控制系统是去中心化的，当你从中央服务器拉取下来代码时，拉取的是一个完整的版本库，不仅仅是一份生硬的代码，还有历史记录，提交记录等版本信息，这样即使某一台机器宕机也能找到文件的完整备份。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic4.zhimg.com/v2-4f1602ac477730e6a49e76edd917c8ab_b.png",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Git")])]),t._v(" "),s("p",[t._v("Git 是 Linux 发明者 Linus 开发的一款分布式版本控制系统，是目前最为流行和软件开发着必须掌握的工具。")]),t._v(" "),s("h2",{attrs:{id:"git-基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-基础"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Git 基础")])]),t._v(" "),s("p",[t._v("Git 是一个分布式版本控制系统，保存的是文件的完整快照，而不是差异变换或者文件补丁。保存每一次变化的完整内容。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic3.zhimg.com/v2-a25948ea6ad62bc5f32c0f3473a26a82_b.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("Git 每一次提交都是对项目文件的一个完整拷贝，因此你可以完全恢复到以前的任何一个提交。Git 每个版本只会完整拷贝发生变化的文件，对于没有变化的文件，Git 只会保存一个指向上一个版本的文件的指针，即对一个特定版本的文件，Git 只会保存一个副本，但可以有多个指向该文件的指针。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic1.zhimg.com/v2-6ea58fd87fb479921752c3780c042f28_b.jpg",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"git-基本命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-基本命令"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Git 基本命令")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic4.zhimg.com/v2-a995fc5367e3211fa6f166a8c0b65173_b.png",alt:"img"}})]),t._v(" "),s("p",[t._v("如上图，使用 Git 的基本工作流程就是：")]),t._v(" "),s("ol",[s("li",[t._v("从远程仓库将项目clone到本地；")]),t._v(" "),s("li",[t._v("在本地工作区进行开发：增加、删除或者修改文件；")]),t._v(" "),s("li",[t._v("将更改的文件add到暂存区域；")]),t._v(" "),s("li",[t._v("将暂存区的更新commit到本地仓库；")]),t._v(" "),s("li",[t._v("将本地仓库push到服务器。")])]),t._v(" "),s("p",[t._v("Git 工程在本地有三个工作区域：")]),t._v(" "),s("ul",[s("li",[t._v("工作区：进行日常开发的区域。")]),t._v(" "),s("li",[t._v("暂存区域：运行 git add 命令后文件保存的区域，也是进行 commit 的区域。")]),t._v(" "),s("li",[t._v("本地仓库：本地版本库，记录工程的提交历史，意味着数据永远不会丢失。")])]),t._v(" "),s("p",[t._v("对应的，文件有四种状态：")]),t._v(" "),s("ul",[s("li",[t._v("未跟踪的（untracked）：表示在工作区新建了某个文件，还没有add。")]),t._v(" "),s("li",[t._v("已修改（modofied）：表示在工作区中修改了某个文件，还没有 add。")]),t._v(" "),s("li",[t._v("已暂存（staged）：表示把已修改的文件已add到暂存区域。")]),t._v(" "),s("li",[t._v("已提交（commit）：表示文件已经commit到本地仓库保存起来了。")])]),t._v(" "),s("h2",{attrs:{id:"git-分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-分支"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Git 分支")])]),t._v(" "),s("p",[t._v("几乎所有的版本控制系统都以分支的方式进行操作，分支是独立于项目主线的一条支线，我们可以在不影响主线代码的情况下，在分支下进行工作。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic2.zhimg.com/v2-3658a7153a4e0c5db819814eb12a832d_b.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("Git 初始化仓库时，默认创建的分支名是master，Git有一个分支指针（HEAD），始终指向当前分支。分支的创建、切换、合并、删除的命令及图示如下视频：")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://liaoxuefeng.gitee.io/git-resources/master-and-dev-ff.mp4",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://liaoxuefeng.gitee.io/git-resources/master-and-dev-ff.mp4"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Git 分支相关的命令如下：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch ［branch-name］\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[commit－head] 创建基于head提交的分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#列出分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -r\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#列出远程分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#列出所有分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#新建一个本地分支，并切换到该分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" origin/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#新建一个基于远程分支的本地分支，并切换到该分支")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#切换分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -dr "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote/branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除远程分支")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#下载远程仓库代码的变动")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h2",{attrs:{id:"git工作流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git工作流"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Git工作流")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic1.zhimg.com/v2-3436db37fcbcaf544fe63080d70d6374_b.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("如上图，首先，项目存在两个长期分支：")]),t._v(" "),s("ul",[s("li",[t._v("主分支（maste）r：专门用于部署以及负责线上代码回滚的分支，是最为稳定的一个分支，master的代码等于或者落后于develop的代码。")]),t._v(" "),s("li",[t._v("开发分支（develop）：专门存放经过测试之后，保证代码无bug的代码分支。开发的时候主要依托于develop分支开发，基于develop分支新建分支，经过严格测试之后，才能合并到develop中，保证develop代码的稳定性（也就是日常开发中不要轻易修改develop分支代码）。")])]),t._v(" "),s("p",[t._v("开发过程中会从develop分支中衍生出临时开发分支：")]),t._v(" "),s("ul",[s("li",[t._v("项目开发分支或功能分支（feature）：此分支特点是周期长、需要团队协作、代码量大。工作方式是需要创建本地以及远程feature分支，代码基于develop分支代码，经过开发、测试之后，最终合并到develop分支上。当项目上线之后，分支会保留一段时间，直至最终删除。")]),t._v(" "),s("li",[t._v("紧急bug、其他问题修复分支（hotfix）：此分支特点是修改时间短、优先级高、代码量稍小、改完之后急需测试、上线。此分支代码也是基于develop。此分支会是团队协作或者单人、团队协作工作方式会类似feature分支，单人只需构建本地分支即可满足开发要求，当修复上线一段时间后，即可删除。")]),t._v(" "),s("li",[t._v("预发布分支（release）：此分支是项目开发完成，经过测试没有问题之后，从develop分支分出用于项目的预发布，预发布一段时间没有问题之后合并到master分支进行正式发布。")])]),t._v(" "),s("h2",{attrs:{id:"参考资料及学习资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料及学习资料"}},[t._v("#")]),t._v(" "),s("strong",[t._v("参考资料及学习资料")])]),t._v(" "),s("ul",[s("li",[t._v("Git 完整命令手册地址："),s("a",{attrs:{href:"http://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://git-scm.com/docs"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("li",[t._v("PDF版命令手册： "),s("a",{attrs:{href:"http://www.runoob.com/manual/github-git-cheat-sheet.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-git-cheat-sheet.pdf"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("li",[t._v("Linux 命令查询："),s("a",{attrs:{href:"http://www.runoob.com/linux/linux-command-manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.runoob.com/linux/linux-command-manual.html"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("li",[t._v("Git 学习视频推荐："),s("a",{attrs:{href:"https://ke.qq.com/course/300165",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ke.qq.com/course/300165"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("li",[t._v("PDF版命令手册："),s("a",{attrs:{href:"http://www.runoob.com/manual/github-git-cheat-sheet.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-git-cheat-sheet.pdf"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("li",[t._v("相关文章： "),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html%EF%BC%8Chttps://zhuanlan.zhihu.com/p/22835128%EF%BC%8Chttps://zhuanlan.zhihu.com/p/22750675%EF%BC%8Chttps://zhuanlan.zhihu.com/p/26227256",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html，https://zhuanlan.zhihu.com/p/22835128，https://zhuanlan.zhihu.com/p/22750675，https://zhuanlan.zhihu.com/p/26227256"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("li",[t._v("书籍推荐： 《Git 学习指南》、《Pro Git》。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);