(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1022:function(t,s,e){"use strict";e.r(s);var a=e(63),i=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"github使用小计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github使用小计"}},[t._v("#")]),t._v(" Github使用小计")]),t._v(" "),e("h2",{attrs:{id:"同时配置github和gitlab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同时配置github和gitlab"}},[t._v("#")]),t._v(" 同时配置github和gitlab")]),t._v(" "),e("p",[e("strong",[t._v("添加 gitlab key")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('cd ~/.ssh\nssh-keygen -t rsa -C "******@***.cn"\n// 或\nssh-keygen -t rsa -f ~/.ssh/id_rsa_gitlab -C "yourmail@xxx.com"\n')])])]),e("p",[e("strong",[t._v("在"),e("code",[t._v(".ssh")]),t._v(" 文件夹下里面创建一个 "),e("code",[t._v("config")]),t._v(" 文件")]),t._v("，内容参考：")]),t._v(" "),e("p",[t._v("配置文件添加 Host和 "),e("code",[t._v("IdentityFile")]),t._v(" 的匹配关系，这样 Github 会根据当前 git 地址自动使用对应在的 rsa 文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# default-github                                                                       \nHost github.com\nHostName github.com\nUser lanjz\nIdentityFile ~/.ssh/id_rsa\n# git_lab_1                                                                         \nHost git.mysoft.com.cn\nHostName git.mysoft.com.cn\nUser lanjz\nIdentityFile ~/.ssh/id_rsa_gitlab\n# 也可以配置多个git_lab_2\nHost git.myscrm.cn\nHostName git.myscrm.cn\nUser lanjz\nIdentityFile ~/.ssh/id_rsa_gitlab                               \n")])])]),e("p",[t._v("检查是否成功 "),e("code",[t._v("ssh -T git@github")])]),t._v(" "),e("p",[e("strong",[t._v("最后配置好本地的全局账号")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git config --global user.name 'xxx'\ngit config --global user.email 'x@xxx'\n")])])]),e("h2",{attrs:{id:"使用账号密码clone项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用账号密码clone项目"}},[t._v("#")]),t._v(" 使用账号密码CLONE项目")]),t._v(" "),e("p",[t._v("格式："),e("code",[t._v("git clone http://邮箱(或用户名):密码@仓库")])]),t._v(" "),e("p",[t._v("如：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("git账号： "),e("code",[t._v("lanjz")])])]),t._v(" "),e("li",[e("p",[t._v("git密码："),e("code",[t._v("123")])])]),t._v(" "),e("li",[e("p",[t._v("仓库："),e("code",[t._v("https://git.test.com/abc/demo")])])])]),t._v(" "),e("p",[t._v("克隆命令："),e("code",[t._v("git clone https://lanjz:123@git.test.com/abc/demo")])]),t._v(" "),e("h2",{attrs:{id:"本地回滚"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地回滚"}},[t._v("#")]),t._v(" 本地回滚")]),t._v(" "),e("p",[e("code",[t._v("git reset")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 回滚到上次提交状态，保留本地修改。\ngit reset HEAD~1\ngit reset <commit>\n\n// 回滚，但不保留本地修改。\ngit reset --hard <commit>\n\n// 从暂存区移除特定文件，相当于 unstage 一个文件。\ngit reset file\n\n// 重置暂存区，相当于 unstage all。\ngit reset\n\n// 清除掉所有未提交更改。相当于 unstage all + 撤销所有更改。\ngit reset --hard\n")])])]),e("p",[e("strong",[t._v("reset 后面的参数")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("hard：慎用！回滚到指定的版本，不保留修改的代码")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("移动本地库HEAD指针")])]),t._v(" "),e("li",[e("p",[t._v("重置暂存区")])]),t._v(" "),e("li",[e("p",[t._v("重置工作区")])])])]),t._v(" "),e("li",[e("p",[t._v("soft: 仅仅是把本地库的指针移动了，而暂存区和你本地的代码是没有做任何改变的")]),t._v(" "),e("ol",[e("li",[t._v("移动本地库HEAD指针")])])]),t._v(" "),e("li",[e("p",[t._v("mixed: 回滚后，不仅移动了本地库的指针，同时暂存区的东西也没了，意思就是你上次添加到暂存区的文件没了")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("移动本地库HEAD指针")])]),t._v(" "),e("li",[e("p",[t._v("重置暂存区")])])])]),t._v(" "),e("li",[e("p",[t._v("keep: 回滚后，本地代码就是你回退版本的代码,而暂存区是没有做任何改变的")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("移动本地库HEAD指针")])]),t._v(" "),e("li",[e("p",[t._v("暂存区不变")])]),t._v(" "),e("li",[e("p",[t._v("重置工作区")])])])])])])}),[],!1,null,null,null);s.default=i.exports}}]);