/**
 * Created by Administrator on 2017/8/22 0022.
 */
(function ($) {
    $.fn.pluginName = function(config){
        var circle = "",
            imgcontainer = $(config.img),
            timer,
            index = parseInt(imgcontainer.attr('index'));
        for (var i =0;i<config.data.length;i++){
            circle +='<a></a>'
        }
        $(config.control).append(circle);
        function start() {
             timer =  setInterval(function () {
                if(!index || index==config.data.length){
                    index = parseInt(config.index)||0
                }
                imgcontainer.attr('src',data[index].pic);
                $(config.control+ " a").removeClass('active');
                $(config.control+ " a").eq(index).addClass('active');
                index +=1;
                imgcontainer.attr('index',index);
            },config.time);
        }
        start();
        function stop() {
            clearInterval(timer)
        }
        if (config.withhover){
            $(config.control+ " a").hover(function () {
                stop()
            });
            $(config.control+ " a").mouseleave(function () {
                start()
            })
        }
    }
}(jQuery));