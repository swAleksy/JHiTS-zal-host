<?php 
    include("./includes/header.php");
?>

<div id="hidden">
        <?php
            require 'dbConfig.php'; 
        ?>
</div>
    <main>
        <section class="section-2">
            <div id="bg-img-bew-sec-1"></div>
            <div id="pos-div-sec-bew-1">
                <div class="borderedText-2">
                    <?php
                        $idx = 0;
                        $query = $db->query("SELECT * FROM images WHERE id = $idx");

                    ?>
                    <img id="beer-label" src="<?php echo $row["file_path"]; ?>" alt="beer label">
                    <h1 id="beer-name"><?php echo $row["name"]; ?></h1>
                    <p id="test" ><?php echo $row["descrip"]; ?></p>
                </div>  
                <div id="btn-container">
                    <button class="slidbtn" id="btn-left" ><</button>
                    <button class="slidbtn" id="btn-right">></button>
                </div>
            </div>
        </section>
    </main>

    <script src="../scripts/brewary.js"></script>
<?php 
    include("./includes/footer.php") ;
?>