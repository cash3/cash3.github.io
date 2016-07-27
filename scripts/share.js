Share = {
    twitterDesktop: function(purl, ptitle) {
        url  = 'http://twitter.com/intent/tweet?';
        url += 'text='      + encodeURIComponent(ptitle);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popupDesktop(url);
    },
    vkontakteDesktop: function(purl, ptitle, pimg, text) {
        url  = 'http://vk.com/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image='       + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popupDesktop(url);
    },
    facebookDesktop: function(purl, ptitle, pimg, text) {
        url  = 'http://facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popupDesktop(url);
    },
    popupDesktop: function(url) {
        window.open(url,'','toolbar=0,status=0,width=640,height=436');
    }
};