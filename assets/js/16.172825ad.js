(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{341:function(e,a,t){"use strict";t.r(a);var s=t(7),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"小雅alist安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小雅alist安装"}},[e._v("#")]),e._v(" 小雅Alist安装")]),e._v(" "),a("p",[e._v("终端安装命令：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('bash -c "$(curl http:docker.xiaoya.pro/update_new.sh)"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("或者：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('bash -c "$(curl http://docker.xiaoya.pro/update_new.sh)" -s host`\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("阿里token获取地址："),a("a",{attrs:{href:"https://aliyuntoken.vercel.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aliyuntoken.vercel.app/"),a("OutboundLink")],1),a("br"),e._v("\n阿里opentoken地址："),a("a",{attrs:{href:"https://alist.nn.ci/tool/aliyundrive/request.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://alist.nn.ci/tool/aliyundrive/request.html"),a("OutboundLink")],1),a("br"),e._v("\n转存文件夹ID：网页版阿里云，进转存文件夹，地址栏内最后64开头的数字"),a("br"),e._v("\n挂载令牌，终端命令：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('docker exec -i xiaoya sqlite3 data/data.db <<EOF\nselect value from x_setting_items where key = "token";\nEOF\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"自动清除缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动清除缓存"}},[e._v("#")]),e._v(" 自动清除缓存")]),e._v(" "),a("p",[e._v("模式0：每天自动清理一次。如果系统重启需要手动重新运行或把命令加入系统启动。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('bash -c "$(curl -s https://xiaoyahelper.zengge99.eu.org/aliyun_clear.sh | tail -n +2)" -s 0 -tg\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("模式1：一次性清理，一般用于测试效果。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('bash -c "$(curl -s https://xiaoyahelper.zengge99.eu.org/aliyun_clear.sh | tail -n +2)" -s 1 -tg\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("模式2：已废弃，不再支持\n模式3：创建一个名为 xiaoyakeeper 的docker定时运行小雅转存清理并升级小雅镜像")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('bash -c "$(curl -s https://xiaoyahelper.zengge99.eu.org/aliyun_clear.sh | tail -n +2)" -s 3 -tg\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("模式4：同模式3")]),e._v(" "),a("p",[e._v("模式5：与模式3的区别是实时清理，只要产生了播放缓存一分钟内立即清理。签到和定时升级同模式3")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('bash -c "$(curl -s https://xiaoyahelper.zengge99.eu.org/aliyun_clear.sh | tail -n +2)" -s 5 -tg\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("其它模式：也可以把脚本下载下来自己魔改。")]),e._v(" "),a("h4",{attrs:{id:"签到功能说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#签到功能说明"}},[e._v("#")]),e._v(" 签到功能说明:")]),e._v(" "),a("p",[e._v("1、执行时机和清理缓存完全相同"),a("br"),e._v("\n2、可以手动创建"),a("code",[e._v("/etc/xiaoya/mycheckintoken.txt")]),e._v("，定义多个网盘签到的32位"),a("code",[e._v("refresh token")]),e._v("，每行一个，不添加文件就是默认小雅转存的网盘签到。"),a("br"),e._v("\n3、自动刷新"),a("code",[e._v("/etc/xiaoya/mycheckintoken.txt、/etc/xiaoya/mytoken.txt")]),e._v("（可能可以延长refresh token时效，待观察）")]),e._v(" "),a("h4",{attrs:{id:"关于模式0-3-4-5定时运行的说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于模式0-3-4-5定时运行的说明"}},[e._v("#")]),e._v(" 关于模式0/3/4/5定时运行的说明：")]),e._v(" "),a("p",[e._v("1、默认从运行脚本的下一分钟开始，每天运行一次"),a("br"),e._v("\n2、运行的时间也可以通过手动创建/etc/xiaoya/myruntime.txt修改，比如06:00,18:00就是每天早晚6点各运行一次")]),e._v(" "),a("h4",{attrs:{id:"关于自动升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于自动升级"}},[e._v("#")]),e._v(" 关于自动升级:")]),e._v(" "),a("p",[e._v("1、定时升级的命令保存在/etc/xiaoya/mycmd.txt中，删除该文件变成定时重启小雅"),a("br"),e._v("\n2、完成清理和签到后自动执行/etc/xiaoya/mycmd.txt中的命令，该文件中的内容默认升级小雅镜像，可以修改该文件改编脚本的行为，不建议修改。")]),e._v(" "),a("h4",{attrs:{id:"关于tg推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于tg推送"}},[e._v("#")]),e._v(" 关于tg推送：")]),e._v(" "),a("p",[e._v("所有模式加上-tg功能均可绑定消息推送的TG账号，只有第1次运行需要加-tg参数")])])}),[],!1,null,null,null);a.default=r.exports}}]);