(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{838:function(_,v,o){"use strict";o.r(v);var e=o(112),c=Object(e.a)({},(function(){var _=this,v=_.$createElement,o=_._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("h1",[_._v("npm 安装机制")]),_._v(" "),o("p",[o("code",[_._v("npm")]),_._v(" 的核心目标：")]),_._v(" "),o("blockquote",[o("p",[_._v("Bring the best of open source to you, your team and your company.")]),_._v(" "),o("p",[_._v("给你和你的团队、你的公司带来最好的开源库和依赖。")])]),_._v(" "),o("p",[o("code",[_._v("npm")]),_._v(" 最重要的一环就是安装和维护依赖。")]),_._v(" "),o("p",[o("img",{attrs:{src:"https://s0.lgstatic.com/i/image2/M01/02/A9/Cip5yF_axkqAclTFAAJmlxGYSmI551.png",alt:"068739612.png"}})]),_._v(" "),o("p",[o("code",[_._v("npm install")]),_._v(" 执行之后：")]),_._v(" "),o("ol",[o("li",[_._v("检查并获取 "),o("code",[_._v("npm")]),_._v(" 配置，优先级为："),o("strong",[_._v("项目级的 "),o("code",[_._v(".npmrc")]),_._v(" 文件 > 用户级的 "),o("code",[_._v(".npmrc")]),_._v(" 文件 > 全局级的 "),o("code",[_._v(".npmrc")]),_._v(" 文件 > "),o("code",[_._v("npm")]),_._v(" 内置的 "),o("code",[_._v(".npmrc")]),_._v(" 文件")]),_._v("。")]),_._v(" "),o("li",[_._v("检查项目中是否有 "),o("code",[_._v("package-lock.json")]),_._v(" 文件。")]),_._v(" "),o("li",[_._v("如果有，则检查 "),o("code",[_._v("package-lock.json")]),_._v(" 和 "),o("code",[_._v("package.json")]),_._v(" 声明的依赖是否一致：\n"),o("ul",[o("li",[_._v("一致，则直接 "),o("code",[_._v("package-lock.json")]),_._v(" 中的信息，从缓存或网络资源中加载依赖；")]),_._v(" "),o("li",[_._v("不一致，按照 "),o("code",[_._v("npm")]),_._v(" 版本进行处理，不同 "),o("code",[_._v("npm")]),_._v(" 版本处理会有所不同，具体处理方式如上图所示。")])])]),_._v(" "),o("li",[_._v("如果没有，则根据 "),o("code",[_._v("package.json")]),_._v(" 递归构建依赖树。然后按照构建好的依赖树下载完整的依赖资源，在下载时就会检查是否存在相关资源缓存：\n"),o("ul",[o("li",[_._v("存在，则将缓存内容解压到 "),o("code",[_._v("node_modules")]),_._v(" 中；")]),_._v(" "),o("li",[_._v("不存在，先从 "),o("code",[_._v("npm")]),_._v(" 远程仓库下载包，校验包的完整性，并添加到缓存，同时解压到 "),o("code",[_._v("node_modules")]),_._v("。")])])]),_._v(" "),o("li",[_._v("最后生成 "),o("code",[_._v("package-lock.json")]),_._v(" 文件。")])]),_._v(" "),o("p",[_._v("构建依赖树时，当前依赖项目不管是直接依赖还是子依赖的依赖，都应该按照"),o("strong",[_._v("扁平化原则")]),_._v("，优先将依赖放置在 "),o("code",[_._v("node_modules")]),_._v(" 根目录。在这个过程中，遇到相同模块就判断已放置在依赖树中的模块是否符合新模块的版本范围，如果符合则跳过；不符合则在当前模块的 "),o("code",[_._v("node_modules")]),_._v(" 下放置该模块（最新版本 "),o("code",[_._v("npm")]),_._v(" 规范）。")])])}),[],!1,null,null,null);v.default=c.exports}}]);