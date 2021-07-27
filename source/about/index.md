---
title: 关于
date: 2018-09-04 00:14:27
---
> 我一直希望，
>
> 有个地方能够承载自己天马行空的梦
>
> 与可以放肆说出的想。



---

<center><h3>你好，这里是饮夏。</h3></center>


![ef7edee0cb9abe25423fa94797e9c088.png](https://file.yocoh.cn/images/2020/08/30/ef7edee0cb9abe25423fa94797e9c088.png)
{% meting "30635613" "netease" "song" "loop:none"%}

### \# 关于博客

博客从 [2018.09.04](https://blog.yocoh.cn/about/index.html) 至今已经运行了 <span id="htmer_time" style=" font-weight: bold;"></span>



基于[Hexo](https://hexo.io/) ，主题使用的是[Makito](https://www.keep.moe) 提供的[Typography](https://github.com/SumiMakito/hexo-theme-typography)。



网站音乐播放器使用的是[Aplayer](https://aplayer.js.org)&[MetingJS](https://github.com/metowolf/MetingJS)



图床是[饮夏的图库](https://img.yocoh.cn)


你还可以通过关注公众号阅读我的更多想法。
![qrcode_for_gh_1b207a1587f7_258.jpg](https://file.yocoh.cn/images/2020/06/20/qrcode_for_gh_1b207a1587f7_258.jpg)

### \# 时间轴
- 2018.09.04 建立，基于Wordpress
- 2019.01.13 迁移到腾讯云
- 2019.07.18 由于备案原因，迁移到谷歌云
- 2020.06.17 因为傻... 数据没了，部分还可以从微信公众号转过来，部分就被SOS团吞了
- 2020.06.18 重新基于hexo建立
- 2020.06.19 添加了评论功能
- 2020.07.03 添加了Aplayer
- 2020.07.19 给评论添加了邮件提醒
- 2020.09.15 由于网络环境，网站终于进行了备案，迁移到阿里云  
- 2020.10.26 新增了夜间模式
- 2020.11.23 全站加速，图片加载飞起

### \# 联系我

> 邮箱：	[@yocoh.cn](mailto:vate-J@outlook.com)  
>
> QQ :	 [饮夏](http://sighttp.qq.com/authd?IDKEY=355d36fb7d91e7c6b9860ed289a65c2a7f3c0ce24de00338)
>
> 网易云：	[韩京尘](https://music.163.com/#/user/home?id=266002573)
>
> Bilibili:	[饮夏](https://space.bilibili.com/18569261/)
>
> 知乎：	[饮夏](https://www.zhihu.com/people/han-jin-90-92)



### \# 支持我







 <script>
    function secondToDate(second) {
        if (!second) {
            return 0;
        }
        var time = new Array(0, 0, 0, 0, 0);
        if (second >= 365 * 24 * 3600) {
            time[0] = parseInt(second / (365 * 24 * 3600));
            second %= 365 * 24 * 3600;
        }
        if (second >= 24 * 3600) {
            time[1] = parseInt(second / (24 * 3600));
            second %= 24 * 3600;
        }
        if (second >= 3600) {
            time[2] = parseInt(second / 3600);
            second %= 3600;
        }
        if (second >= 60) {
            time[3] = parseInt(second / 60);
            second %= 60;
        }
        if (second > 0) {
            time[4] = second;
        }
        return time;
    };
    function setTime() {
        var create_time = Math.round(new Date(Date.UTC(2018, 8, 4, 0, 13, 33)).getTime() / 1000);
        var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
        currentTime = secondToDate((timestamp - create_time));
        if (currentTime[0]==0){
            currentTimeHtml = currentTime[1] + '天'+ currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4] + '秒';
        }else{
            currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天' + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4] + '秒';
        }
       
        if (document.getElementById("htmer_time")){
            document.getElementById("htmer_time").innerHTML = currentTimeHtml;
        }else{
            clearInterval(timer);
        }
    }
    var timer = setInterval(setTime, 1000);
</script>
