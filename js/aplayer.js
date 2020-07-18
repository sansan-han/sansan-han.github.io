<script>
$(function(){
    $('body').on('click', '.aplayer', function(){
        if($('.aplayer-button').hasClass('aplayer-play')) {
            $('.aplayer-lrc').removeClass('lrc-show');
        } else {
            $('.aplayer-lrc').addClass('lrc-show');
        }
    })
});
</script>