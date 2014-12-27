<html>
    <head>
        <script language="javascript" type="text/javascript" src="http://play.streamingvideoprovider.com/js/dplayer.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
        <script type="text/javascript">
            $(document).ready(function () {

                $("#cssmenu a").click(function (e) {
                    e.preventDefault();
                    var href = $(this).attr('href');
//                    alert($(this).attr('href'));
                    $("#content").load(href + " #content");

                });


            });

            function  set_flag() {

                console.log('LIMPAR TODO CONTEUDO DO MENU');
                $('#monange').html('MinSaplólio<img src="ok.png" height="15" width="11" style="margin-left:12px;">');


                return false;
            }
            ;

        </script>
        <script type='text/javascript'>
            function load_video() {
                alert('load_video');
                var vars = {clip_id: "ed2l3yzlr2o8", transparent: "true", pause: "1", repeat: "", bg_color: "#FFFFFF", fs_mode: "2", no_controls: "", start_img: "1", start_volume: "100", close_button: "", brand_new_window: "1", auto_hide: "1", stretch_video: "", player_align: "NONE", offset_x: "", offset_y: "", player_color_ratio: 0.6, skinAlpha: "80", colorBase: "#202020", colorIcon: "#FFFFFF", colorHighlight: "#fcad37", direct: "false", is_responsive: "false", viewers_limit: 0, cc_position: "bottom", cc_positionOffset: 70, cc_multiplier: 0.03, cc_textColor: "#ffffff", cc_textOutlineColor: "#000000", cc_bkgColor: "#000000", cc_bkgAlpha: 0.7};
                var svp_player = new SVPDynamicPlayer("svp_playered2l3yzlr2o8", "", "600", "338", {use_div: "svp_playered2l3yzlr2o8", skin: "3"}, vars);
                svp_player.execute();


            }
            ;

        </script> 


    </head>
    <body>

        <table border="0" cellspacing="0" cellpadding="0" width="660" align="center">
            <tbody>

                <tr>
                    <td align="left" valign="top">
                        <?php
                        require_once 'menu.php';
                        ?>

                    </td>

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

            $(function () {
                var vars = {clip_id: "ed2l3yzlr2o8", transparent: "true", pause: "1", repeat: "", bg_color: "#FFFFFF", fs_mode: "2", no_controls: "", start_img: "1", start_volume: "100", close_button: "", brand_new_window: "1", auto_hide: "1", stretch_video: "", player_align: "NONE", offset_x: "", offset_y: "", player_color_ratio: 0.6, skinAlpha: "80", colorBase: "#202020", colorIcon: "#FFFFFF", colorHighlight: "#fcad37", direct: "false", is_responsive: "false", viewers_limit: 0, cc_position: "bottom", cc_positionOffset: 70, cc_multiplier: 0.03, cc_textColor: "#ffffff", cc_textOutlineColor: "#000000", cc_bkgColor: "#000000", cc_bkgAlpha: 0.7};
                var svp_player = new SVPDynamicPlayer("svp_playered2l3yzlr2o8", "", "600", "338", {use_div: "svp_playered2l3yzlr2o8", skin: "3"}, vars);
                svp_player.execute();
                return false;
            }
            );

                            </script> 


                        </div><!-- /content -->

                    </td>
                </tr>
            </tbody>
        </table>

    </body>
</html>


