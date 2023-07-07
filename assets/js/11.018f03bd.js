(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{336:function(s,n,a){"use strict";a.r(n);var r=a(7),t=Object(r.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),n("p",[s._v("PhotoPrism是一款非常强大的照片视频管理软件。它能够自动识别你上传的照片和视频，并且功能十分强大。大致功能如下：")]),s._v(" "),n("ul",[n("li",[s._v("视频转码")]),s._v(" "),n("li",[s._v("照片搜索")]),s._v(" "),n("li",[s._v("人脸识别")]),s._v(" "),n("li",[s._v("支持Live Photos")]),s._v(" "),n("li",[s._v("地图相册")]),s._v(" "),n("li",[s._v("照片分享")])]),s._v(" "),n("p",[s._v("Git地址："),n("a",{attrs:{href:"https://github.com/photoprism/photoprism",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/photoprism/photoprism"),n("OutboundLink")],1),n("br"),s._v("\n官网："),n("a",{attrs:{href:"https://photoprism.app/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://photoprism.app/"),n("OutboundLink")],1),n("br"),s._v("\n官方文档："),n("a",{attrs:{href:"https://docs.photoprism.app/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.photoprism.app/"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("示例：\n"),n("img",{attrs:{src:"/images/photoprism.jpg",alt:"photoprism"}})]),s._v(" "),n("h2",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),n("h3",{attrs:{id:"_1、群晖部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、群晖部署"}},[s._v("#")]),s._v(" 1、群晖部署")]),s._v(" "),n("ul",[n("li",[s._v("直接群晖docker注册表搜索"),n("code",[s._v("photoPrism")]),s._v("，选第一个星多的，安装latst")]),s._v(" "),n("li",[s._v("在docker文件夹中，创建一个新文件夹，并将其命名为photoprism，并在其中建两个子文件夹config和photos")]),s._v(" "),n("li",[s._v("端口自定义(如：2342)，报重复就行")]),s._v(" "),n("li",[s._v("修改环境变量"),n("code",[s._v("PHOTOPRISM_ADMIN_PASSWORD")]),s._v("登录密码")])]),s._v(" "),n("h3",{attrs:{id:"_2、​docker-compose-yml​部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、​docker-compose-yml​部署"}},[s._v("#")]),s._v(" 2、​docker-compose.yml​部署")]),s._v(" "),n("p",[s._v("安装完成后下载 docker-compose.yml 文件：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("wget https://dl.photoprism.org/docker/docker-compose.yml \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这里需要调整下登录的密码以及数据库连接的配置。以下是我的配置文件，大家可以根据实际情况来修改：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('version: \'3.5\'\n\nservices:\n  photoprism:\n    # 使用 photoprism/photoprism:preview 来尝试抢先版\n    image: photoprism/photoprism:latest\n    # 设置重启策略\n    restart: unless-stopped\n    security_opt:\n      - seccomp:unconfined\n      - apparmor:unconfined\n    ports:\n      - 2342:2342\n    environment:\n      PHOTOPRISM_ADMIN_PASSWORD: "photoprism"        # 设置管理员密码，至少包含四个字符\n      PHOTOPRISM_HTTP_PORT: 2342                     # 内部监听端口\n      PHOTOPRISM_HTTP_COMPRESSION: "gzip"            # 是否开启文件压缩，开启可以提升文件传输速度 (选项：none or gzip)\n      PHOTOPRISM_DEBUG: "false"                      # 是否开启 debug 模式\n      PHOTOPRISM_PUBLIC: "false"                     # 认证开关\n      PHOTOPRISM_READONLY: "false"                   # 只读开关\n      PHOTOPRISM_EXPERIMENTAL: "false"               # 是否开启实验特性\n      PHOTOPRISM_DISABLE_WEBDAV: "false"             # 是否禁用 WebDAV 服务\n      PHOTOPRISM_DISABLE_SETTINGS: "false"           # 是否禁用页面设置\n      PHOTOPRISM_DISABLE_TENSORFLOW: "false"         # 是否禁用 TensorFlow 进行图片分类\n      PHOTOPRISM_DARKTABLE_PRESETS: "false"          \n      PHOTOPRISM_DETECT_NSFW: "false"                # 是否将令人感到不适的照片标记为私有\n      PHOTOPRISM_UPLOAD_NSFW: "true"                 # 是否允许上传可能让人感到不适的文件\n      # PHOTOPRISM_DATABASE_DRIVER: "sqlite"         # 使用 SQLite 作为数据库，已内置无需创建实例\n      PHOTOPRISM_DATABASE_DRIVER: "mysql"            # 使用 MariaDB (或 MySQL) 代替 SQLite 来提升性能\n      PHOTOPRISM_DATABASE_SERVER: "mariadb:3306"     # 设置 MariaDB 服务 (hostname:port)\n      PHOTOPRISM_DATABASE_NAME: "photoprism"         # 设置 MariaDB 库名\n      PHOTOPRISM_DATABASE_USER: "photoprism"         # 指定 MariaDB 的用户\n      PHOTOPRISM_DATABASE_PASSWORD: "photoprism"     # 设置 MariaDB 用户密码\n      PHOTOPRISM_SITE_URL: "http://localhost:2342/"  # PhotoPrism 访问地址\n      PHOTOPRISM_SITE_TITLE: "PhotoPrism"\n      PHOTOPRISM_SITE_CAPTION: "Browse Your Life"\n      PHOTOPRISM_SITE_DESCRIPTION: ""\n      PHOTOPRISM_SITE_AUTHOR: ""\n      # 如果 docker 或 NAS 未设置用户，可以添加环境变量来设置，示例如下：\n      # UID: 1000\n      # GID: 1000\n      # UMASK: 0000\n    # 取消注释来指定用户\n    # user: "1000:1000"\n    volumes:\n      # 图片与视频的原生目录，文件上传后先存放在这里\n      - "~/Pictures:/photoprism/originals"\n      # 原生目录下的子目录，按照实际需求来挂载\n      # - "/mnt/Family:/photoprism/originals/Family"    # [folder_1]:/photoprism/originals/[folder_1]\n      # - "/mnt/Friends:/photoprism/originals/Friends"  # [folder_2]:/photoprism/originals/[folder_2]\n      # 挂在导入目录，如果该目录中存在文件会自动导入\n      # - "~/Import:/photoprism/import"\n      # 缓存目录 (请勿删除):\n      - "./storage:/photoprism/storage"\n\n  mariadb:\n    image: mariadb:10.5\n    restart: unless-stopped\n    security_opt:\n      - seccomp:unconfined\n      - apparmor:unconfined\n    command: mysqld --transaction-isolation=READ-COMMITTED --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --max-connections=512 --innodb-rollback-on-timeout=OFF --innodb-lock-wait-timeout=50\n    volumes:\n      - "./database:/var/lib/mysql"\n    environment:\n      MYSQL_ROOT_PASSWORD: photoprism\n      MYSQL_DATABASE: photoprism\n      MYSQL_USER: photoprism\n      MYSQL_PASSWORD: photoprism\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# 如果需要自动更新镜像，可以取消这段注释\n#\n#  watchtower:\n#    image: containrrr/watchtower\n#    restart: unless-stopped\n#    volumes:\n#      - "/var/run/docker.sock:/var/run/docker.sock"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("运行以下命令启动服务：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker-compose up -d \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("服务启动会监听在 2342 端口上，通过浏览器来访问。")])])}),[],!1,null,null,null);n.default=t.exports}}]);