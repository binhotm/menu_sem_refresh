/**
 * Created by Fabricio Jr Silva on 30/12/14.
 */

stream_loader = {
    parameters: {
        object_html: "ul.stream-content li a",
        debug: "true",
        div_id: "svp_playered2l3yzlr2o8",
        stream: {
            clip_id: '',
            transparent: "true",
            pause: "1",
            repeat: "",
            bg_color: "#FFFFFF",
            fs_mode: "2",
            no_controls: "",
            start_img: "1",
            start_volume: "100",
            close_button: "",
            brand_new_window: "1",
            auto_hide: "1",
            stretch_video: "",
            player_align: "NONE",
            offset_x: "",
            offset_y: "",
            player_color_ratio: 0.6,
            skinAlpha: "80",
            colorBase: "#202020",
            colorIcon: "#FFFFFF",
            colorHighlight: "#fcad37",
            direct: "false",
            is_responsive: "false",
            viewers_limit: 0,
            cc_position: "bottom",
            cc_positionOffset: 70,
            cc_multiplier: 0.03,
            cc_textColor: "#ffffff",
            cc_textOutlineColor: "#000000",
            cc_bkgColor: "#000000",
            cc_bkgAlpha: 0.7
        }
    },
    init: function (movie_default) {
        if ($(stream_loader.parameters.object_html).length) {
            stream_loader.load_stream(movie_default);
        }

        $(stream_loader.parameters.object_html).on('click', function(e){
            var video_id = $(this).attr('data-stream');
            e.preventDefault();

            stream_loader.load_stream(video_id);
        })


    },

    load_stream: function (stream_id, parameters) {
        if (stream_loader.parameters.debug == 'true'){
            console.log('Loading Stream ID: ' + stream_id)
        }
        stream_loader.parameters.stream.clip_id = stream_id;
        var vars = stream_loader.parameters.stream;

        var svp_player = new SVPDynamicPlayer(stream_loader.parameters.div_id,
                                                "",
                                                "600",
                                                "338",
                                                {use_div: stream_loader.parameters.div_id,
                                                skin: "3"}, vars);
        svp_player.execute();

        console.log(svp_player);

    }
}