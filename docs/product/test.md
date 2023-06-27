# <center>个人介绍</center>

::: tip
你们先看看
:::

| Tables        | Are           | Cool  |
| :-------------: |:-------------:| :-----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripess stripess | are neat      |    $1 |
| zebra stripess | are neat      |    $1 |

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

[百度](https://www.baidu.com)

1. 列表内容
	- 列表内容
	- 列表内容
	- 列表内容
2. 列表内容
	- 列表内容
	- 列表内容
	- 列表内容

- [ ] 支持以 PDF 格式导出文稿
- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修复 LaTex 公式渲染问题
- [x] 新增 LaTex 公式编号功能

```css
table th {
	width: 200px;
}
```

将本地项目上传到码云————呱呱二号
将本地的项目上传到码云

1、码云上创建一个项目 testgit (名字随你)

2、本地创建一个文件夹D:/testgit，然后使用git bash    

3、cd 到本地文件夹中D:/testgit，

4、使用 git init 命令 ，初始化一个git 本地仓库（项目）,会在本地创建一个 .git 的文件夹

5、使用git remote add origin https://gitee.com/你的码云用户名/testgit      //添加远程仓库

6、使用 git pull origin master 命令，将码云上的仓库pull到本地文件夹

7、将要上传的文件，添加到刚刚创建的文件夹

8、使用git add . 或者 git add + 文件名 (将文件保存到缓存区)

9、使用git commit -m '描述新添加的文件内容'  (就是注释)   （文件保存到本地仓库）

10、使用git push origin master ，将本地仓库推送到远程仓库



`var path = require('path');`

```js
var fs = require('fs');
var path = require('path');

// 解析需要遍历的文件夹
var filePath = path.resolve('../../vuepress-demo/');
var newArr = [{
	type: '',
	list: []
}];
var filePathList = [];

function fileDisplay(filePath) {
	fs.readdir(filePath, function(err,files){
		if(err){
	       console.warn(err)
	    } else {
	    	// 遍历读取到的文件列表
	        files.forEach(function(filename){
	        	// 获取当前文件的绝对路径
	            var filedir = path.join(filePath, filename);
	            if (filename !== 'node_modules') {
	            	// 根据文件路径获取文件信息，返回一个fs.Stats对象
		            fs.stat(filedir, function(eror, stats){
		            	if(eror){
		                    console.warn('获取文件stats失败');
		                }else{
		                    var isFile = stats.isFile(); // 是文件
		                    var isDir = stats.isDirectory(); // 是文件夹
		                    if (isFile) {
		                    	if (/\.md/.test(filename)){
		                    		var f = filedir.split('/');
		                    		var m = f[f.length - 1]; // 文件名
		                    		var n = f[f.length - 2]; // 文件夹名
		                    		filePathList.push(filedir);
		                    		console.log(filePathList);
		       						fs.writeFile('list.json', JSON.stringify(filePathList), function(error){
									    if(error){
									        console.log(error);
									        return false;
									    }
									    console.log('写入成功');
									})
		                    		// newArr.forEach( function (item) {
		                    		// 	if (item.type && item.type === n){
		                    		// 		item.list.push(m)
			                    	// 	} else {
			                    	// 		newArr.push({
				                    // 			type: n,
				                    // 			list: [m]
				                    // 		})
			                    	// 	}
		                    		// })
		                    	}
		                    } 
		                    if (isDir) {
		                    	fileDisplay(filedir)
		                    } 
		                }
		            })
		        }
	        })
	    }
	})
}
fileDisplay(filePath);
```



