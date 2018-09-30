function $(selector) {
    return document.querySelector(selector);
};
function $$(selector) {
    return document.querySelectorAll(selector);
};

//flip-module
$('.displayform').addEventListener('click',function(e){
    e.stopPropagation();
    $('.flip-module').style.display = 'block' ;
});

$('.flip-module').addEventListener('click',function(e){
    e.stopPropagation();
    if(e.target.classList.contains('login')) {
        $('.flip-module').classList.add('login');
        $('.flip-module').classList.remove('register');
    };
    if(e.target.classList.contains('register')) {
        $('.flip-module').classList.add('register');
        $('.flip-module').classList.remove('login');
    };
    if(e.target.classList.contains('icon-close')) {
        $('.flip-module').style.display = 'none' ;
    }
});

document.addEventListener('click',function(){
    $('.flip-module').style.display = 'none' ;
})

//errormessage
$('.module-login form').addEventListener('submit',function(e){
    e.preventDefault();
    if(!/^\w{3,8}$/.test($('.module-login input[name=username]').value)) {
        $('.module-login .errormessage').innerText = '用户名需输入3-8个字符，包括字母数字下划线';
        return false
    };
    if(!/^\w{6,10}$/.test($('.module-login input[name=password]').value)) {
        $('.module-login .errormessage').innerText = '密码需输入6-10个字符，包括字母数字下划线';
        return false
    };
    this.submit();
});

$('.module-register form').addEventListener('submit',function(e){
    e.preventDefault();
    if(!/^\w{3,8}$/.test($('.module-register input[name=username]').value)) {
        $('.module-register .errormessage').innerText = '用户名需输入3-8个字符，包括字母数字下划线';
        return false
    }
    if(/xxx/.test($('.module-register input[name=username]').value)) {
        $('.module-register .errormessage').innerText = '用户名已存在' ;
        return false
    }
    if(!/^\w{6,10}$/.test($('.module-register input[name=password]').value)) {
        $('.module-register .errormessage').innerText = '密码需输入6-10个字符，包括字母数字下划线';
        return false
    };
    if($('.module-register input[name=password]').value !== $('.module-register input[name=password2]').value) {
        $('.module-register .errormessage').innerText = '两次输入的密码不一致';
        return false
    };
    this.submit();
});