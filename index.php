<html>
    <head>
        <script language="javascript" type="text/javascript" src="http://play.streamingvideoprovider.com/js/dplayer.js"></script>
        <link rel="stylesheet" href="styles.css">        
        <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
        <script src="script.js"></script>      

        <script type="text/javascript">
            $(document).ready(function () {
                $("#cssmenu a").click(function (e) {
                    var href = $(this).attr('href');
                    //alert($(this).attr('href'));
                    $("#content").load(href + " #content");
                    e.preventDefault();
                    if ('fotosx.php' === href) {
                        load_video();
                    }

                                  });
            })
            function  set_flag() {
                console.log('LIMPAR TODO CONTEUDO DO MENU');
                $('#creme').html('<img src="nok.png" height="15" width="11" style="margin-left:12px;">');
                return false;
            }
            function load_video() {
                alert('load_video');
                var vars = {clip_id: "ed2l3yzlr2o8", transparent: "true", pause: "1", repeat: "", bg_color: "#FFFFFF", fs_mode: "2", no_controls: "", start_img: "1", start_volume: "100", close_button: "", brand_new_window: "1", auto_hide: "1", stretch_video: "", player_align: "NONE", offset_x: "", offset_y: "", player_color_ratio: 0.6, skinAlpha: "80", colorBase: "#202020", colorIcon: "#FFFFFF", colorHighlight: "#fcad37", direct: "false", is_responsive: "false", viewers_limit: 0, cc_position: "bottom", cc_positionOffset: 70, cc_multiplier: 0.03, cc_textColor: "#ffffff", cc_textOutlineColor: "#000000", cc_bkgColor: "#000000", cc_bkgAlpha: 0.7};
                var svp_player = new SVPDynamicPlayer("svp_playered2l3yzlr2o8", "", "600", "338", {use_div: "svp_playered2l3yzlr2o8", skin: "3"}, vars);
                svp_player.execute();
            }
        </script> 
    </head>
    <body>
        <table border="0" cellspacing="0" cellpadding="0" width="660" align="center">
            <tbody>
                <tr>
                    <td align="left" valign="top"><?php require_once 'menu.php'; ?></td>
                    <td>
                        <div id="content">
                            <!--SVP embed code begin-->
                            <div id="svp_playered2l3yzlr2o8" style="width:600px;height:338px;position:relative;">
                                <a class="svp_embed_link" style="color:#000;cursor:default;" 
                                   href="http://www.streamingvideoprovider.com/pay-per-view-access-restrictions.html" 
                                   title="pay best per view video streaming service" rel="nofollow">
                                    per view video streaming  by StreamingVideoProvider</a>
                            </div>
                            <script language="javascript" type="text/javascript" src="dplayer.js"></script>
                            <script type='text/javascript'>
            $(function (e) {
                var vars = {clip_id: "ed2l3yzlr2o8", transparent: "true", pause: "1", repeat: "", bg_color: "#FFFFFF", fs_mode: "2", no_controls: "", start_img: "1", start_volume: "100", close_button: "", brand_new_window: "1", auto_hide: "1", stretch_video: "", player_align: "NONE", offset_x: "", offset_y: "", player_color_ratio: 0.6, skinAlpha: "80", colorBase: "#202020", colorIcon: "#FFFFFF", colorHighlight: "#fcad37", direct: "false", is_responsive: "false", viewers_limit: 0, cc_position: "bottom", cc_positionOffset: 70, cc_multiplier: 0.03, cc_textColor: "#ffffff", cc_textOutlineColor: "#000000", cc_bkgColor: "#000000", cc_bkgAlpha: 0.7};
                var svp_player = new SVPDynamicPlayer("svp_playered2l3yzlr2o8", "", "600", "338", {use_div: "svp_playered2l3yzlr2o8", skin: "3"}, vars);
                svp_player.execute();
                e.preventDefault();
                setTimeout(wrapFn, 0);
            });
                            </script> 
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>



    </body>
</html>