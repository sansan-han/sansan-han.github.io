---
title: 不用命令行给自己搭一个图床吧
date: 2020-06-19 21:47:01
desc: 利用宝塔搭建Chevereto图床
tags:
- blog插件
---



![-3.jpg](http://file.yocoh.cn/images/2020/06/19/-3.jpg)

> 我使用的是[Chevereto](https://chevereto.com/) ,其他的应该也差不多。
>
> 主要是为了写markdown的时候引入图片方便。    
>
> 因为服务器使用了宝塔面板，所以直接使用面板操作显得更轻松些。



### 配置网站  



#### 使用宝塔添加一个站点  



![imagea8d08c1b49e107d7.png](http://file.yocoh.cn/images/2020/06/19/imagea8d08c1b49e107d7.png)



域名设置之后到域名提供商页面将域名解析到服务器的`ip` 地址。因为解析会有10分钟的等待期，所以将这一步放到最前面。    



#### 接着点击刚刚建好的站点的设置—>配置文件



在最后的`}` 前面加入以下代码：  

```
# Disable access to .ht* files
location ~ /\.ht {
	deny all;
}
 
# Disable access to sensitive files in app path
location ~ /(app|content|lib)/.*\.(po|php|lock|sql)$ {
   deny all;
}
 
# Disable log on not found images + image replacement
location ~* (jpe?g|png|gif) {
	log_not_found off;
	error_page 404 /content/images/system/default/404.gif;
}
 
# Enable CORS header (needed for CDN)
location ~* \.(ttf|ttc|otf|eot|woff|woff2|css|js)$ {
	add_header Access-Control-Allow-Origin "*";
}
 
# Force serve upload path as static content (match your upload folder if needed)
location /images {}
 
# Route dynamic request to index.php
location / {
	try_files $uri $uri/ /index.php?$query_string;
}
 
```





#### 打开新建网站的文件夹，将里面的所有东西删除掉。



  #### 然后到数据库页面新建一个数据库。  



![image4ab058b485c0be65.png](http://file.yocoh.cn/images/2020/06/19/image4ab058b485c0be65.png)



### 安装

使用`git clone` 命令或直接到[Chevereto](https://github.com/Chevereto/Chevereto-Free) 的GitHub地址下载压缩包，反正都使用了面板了，这次的目标就是无命令行安装。  



于是下载压缩包后使用宝塔自带的`ftp` 上传到刚刚新建的网站文件夹里解压。  

注意解压后会出现一个大文件夹包裹着一堆文件，将那堆文件直接放到网站文件夹里。  



现在浏览器访问域名，不出意外的话会报错。那是访问权限的问题。原因是我们没有给`app` 这个文件夹写入权限。  

![image6ec1919573ad4175.png](http://file.yocoh.cn/images/2020/06/19/image6ec1919573ad4175.png)





直接用面板的权限管理加入写入权限，然后刷新页面。就会出现安装界面了。  



![image9815cc7dfe54d85e.png](http://file.yocoh.cn/images/2020/06/19/image9815cc7dfe54d85e.png)



默认语言可能是英文或日文，之后是可以改的。  



到这里安装就结束了，之后的自定义可以每个按钮都点一下。  



最后，感兴趣的话也可以来[饮夏的图库 img.yocoh.cn](http://img.yocoh.cn/) 逛逛。  



peace yo~