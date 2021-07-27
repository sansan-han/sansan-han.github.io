---
title: 给未适配Valine的主题添加Valine评论功能  
date: 2020-06-19 17:04:30  
desc: 给网站加入valine评论
categories:
- blog
tags:
- blog插件
---
![v2-cc1e57e54d4e657042e6d5c310cbf41f_r.jpg](http://file.yocoh.cn/images/2020/07/09/v2-cc1e57e54d4e657042e6d5c310cbf41f_r.jpg)

>其实原先主题自带了两种评论方式为博客设置评论服务：[Disqus](https://disqus.com/) 与[LiveRe](https://livere.com/) 。
>
>但是由于两个提供商都处于海外，访问速度较慢，~~而且太丑~~。于是选择[Valine](https://valine.js.org/) 作为本博客的评论工具。  

  

此篇记录在添加Valine的过程中遇到的问题，方便以后查阅。

  

# Valine

  


## 获取APP ID和APP Key  

  



这部分官网[说明文档](https://valine.js.org/quickstart.html) 说明很细致，直接跟着做就ok。

  

  


![官网说明文档](http://file.yocoh.cn/images/2020/06/19/valine.png):

  

  


之后将获取到的`app_id`与`app_key`填入HTML中:  

  


```
<head>
    ..
    <script src='//unpkg.com/valine/dist/Valine.min.js'></script>
    ...
</head>
<body>
    ...
    <div id="vcomments"></div>
    <script>
        new Valine({
            el: '#vcomments',
            appId: 'Your appId',
            appKey: 'Your appKey'
        })
    </script>
</body>
```

  


这样子网页中就出现了评论。但是真正使用中基本不会用到这种添加方式，不可能一个一个页面的添加评论栏。

  

  


## 在hexo中配置Valine  

  

许多hexo主题原生适配了Valine，[Valine](https://valine.js.org/hexo.html) 官网里也给出了部分主题的下载方式，如果你使用的主题恰好在其中，就可以通过修改`theme`文件夹下的`_config.yml`，填入上面获取的`app_id`与`app_key`简单两步添加`Valine`。  

  



我使用的是[Makito](https://www.keep.moe/) 制作的[Typography](https://github.com/SumiMakito/hexo-theme-typography) ,恰巧原生不支持`Valine`。  

  

  

起初打算将其他主题的配置文件直接copy进现在这个主题的配置文件里，但是仔细观察之后发现并不行。因为其他的主题大多是基于`ejs`编写，而当前主题是基于`jade`的。所以只能自己添加，但是仔细看了看文档发现也并不是很复杂。~~不过Valine的文档写得差是真的，和我有得一比~~  

  

在末尾加上下面代码:  

  



```$jade
if theme.valine
    if theme.valine.appid&&theme.valine.appkey
        section(id="vcomments",class="comments")
            style='.comments"margin:30px;padding:10px;background:#fff"@@media screen and (max-width:800px){.comments{margin:auto;padding:10px;background:#fff}}'
                    key:post.slug
                    title:post.title
            script(src="//cdn1.lncld.net/static/js/3.0.4/av-min.js")
            script(src="https://cdn.jsdelivr.net/npm/valine@1.4.14/dist/Valine.min.js")
            script.
                new Valine({
                    el: "#vcomments",
                    app_id: '#{theme.valine.appid}',
                    app_key: '#{theme.valine.appkey}',
                    path: window.location.pathname,
                    avatar: '#{theme.valine.avatar}' ,
                    placeholder:'#{theme.valine.placeholder}' ,
                    recordIP: true,
                })

```

  

  

顺便吐槽，`jade`这种格式太反html直觉了。  

  


接着修改`theme`文件的`_config.yml`,一样在喜欢的位置加上以下代码：  

  


```
valine:
  appid: '此处填入刚刚get的appid'
  appkey: '此处填入刚刚get的appkey'
  verfify: false #验证码
  notify: false #评论回复提醒
  avatar: robohash #头像默认格式
  placeholder: 与我交流世界~ #评论框预留文字

```

  


更多配置可以查阅[Valine配置项](https://valine.js.org/configuration.html)  

  


至此评论功能就已经基本完成了。最后需要在[leancloud](https://leancloud.cn/) ，也就是刚刚获取`app id`的网站上将你的域名添加入安全组。

  


![将域名添加入安全组](http://file.yocoh.cn/images/2020/06/19/QQ20200619175210.png)

  


此外如果想要删除评论也在这个网站上操作。

  

接下来  

  

```$xslt
hexo g
hexo s
```


试试吧。  

  

peace yo~