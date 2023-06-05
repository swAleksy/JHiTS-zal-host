<?php 
    include("./includes/header.php") ;
    date_default_timezone_set('Europe/Warsaw');
    include("./includes/dbCom.inc.php");
    include("./includes/comments.inc.php");
?>
    <main>
        <?php 
        echo "<form id='com-sect' method='POST' action='".setComments($conn)."'>
                <input type='text' name='uid' value='' placeholder='Your nickname'><br>
                <input type='hidden' name='date' value='".date('Y-m-d H:i:s')."'>
                <textarea name='message'></textarea><br>
                <button type='submit' name='commentSubmit'>COMMENT</button><br><br>
            </form>";

        getComments($conn);
        ?>

    </main>
<?php 
    include("./includes/footer.php") ;
?>