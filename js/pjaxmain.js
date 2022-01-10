$(document).pjax('a[target!=_blank]', '#pjax-container', {
    fragment: '#main-container',
    timeout: 5000,
});
//用户通过浏览器的前进后退按钮，需要加载的js
$(window).on('popstate.pjax', function () {
    /*原来不行后来加到complete中行了，后来又不行了*/
    pjax();
})
$(document).on('pjax:start',
    function () {
    })
