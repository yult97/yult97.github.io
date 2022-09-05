window.onload = function(){
    document.body.oncopy = function() {
        layer.msg('复制成功，若要转载请务必保留出处！', {icon: 5});
    };
}