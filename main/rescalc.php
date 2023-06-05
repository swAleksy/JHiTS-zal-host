<?php 
    include("./includes/header.php") ;
?>
    <main>
        <section id="section-clac-1">
            <table id="mineral-table">
                <thead>
                    <tr>
                        <th colspan="2">Mineral</th>
                        <th>Purchase price</th>
                        <th>Selling price</th>
                        <th>Balance</th>
                        <th>BUY/SELL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="../assets/minerals_icons/Bismor_icon.png"></td>
                        <td><span style="float: left;">Bismor<span></td>
                        <td><span id="bisBuy">150</span></td>
                        <td><span id="bisSell">100</span></td>
                        <td><span id="bisBal">0</span></td>
                        <td><span><button class = "min-btn" onclick="bismorBuy()">+</button><button class = "min-btn" onclick="bismorSell()">-</button></span></td>
                    </tr>
                    <tr>
                        <td><img src="../assets/minerals_icons/Croppa_icon.png"></td>
                        <td><span style="float: left;">Croppa<span></td>
                        <td><span id="croBuy">150</span></td>
                        <td><span id="croSell">100</span></td>
                        <td><span id="croBal">0</span></td>
                        <td><span><button class = "min-btn" onclick="CroppaBuy()">+</button><button class = "min-btn" onclick="CroppaSell()">-</button></span></td>
                    </tr>
                    <tr>
                        <td><img src="../assets/minerals_icons/Enor_pearl_icon.png"></td>
                        <td><span style="float: left;">Enor Pearl<span></td>
                        <td><span id="enoBuy">150</span></td>
                        <td><span id="enoSell">100</span></td>
                        <td><span id="enoBal">0</span></td>
                        <td><span><button class = "min-btn" onclick="EnorBuy()">+</button><button class = "min-btn" onclick="EnorSell()">-</button></span></td>
                    </tr>
                    <tr>
                        <td><img src="../assets/minerals_icons/Jadiz_icon.png"></td>
                        <td><span style="float: left;">Jadiz<span></td>
                        <td><span id="jadBuy">150</span></td>
                        <td><span id="jadSell">100</span></td>
                        <td><span id="jadBal">0</span></td>
                        <td><span><button class = "min-btn" onclick="JadizBuy()">+</button><button class = "min-btn" onclick="JadizSell()">-</button></span></td>
                    </tr>
                    <tr>
                        <td><img src="../assets/minerals_icons/Magnite_icon.png"></td>
                        <td><span style="float: left;">Magnite<span></td>
                        <td><span id="magBuy">150</span></td>
                        <td><span id="magSell">100</span></td>
                        <td><span id="magBal">0</span></td>
                        <td><span><button class = "min-btn" onclick="MagniteBuy()">+</button><button class = "min-btn" onclick="MagniteSell()">-</button></span></td>
                    </tr>
                    <tr>
                        <td><img src="../assets/minerals_icons/Umanite_icon.png"></td>
                        <td><span style="float: left;">Umanite<span></td>
                        <td><span id="umaBuy">150</span></td>
                        <td><span id="umaSell">100</span></td>
                        <td><span id="umaBal">0</span></td>
                        <td><span><button class = "min-btn" onclick="UmaniteBuy()">+</button><button class = "min-btn" onclick="UmaniteSell()">-</button></span></td>
                    </tr>
                    <tr>
                        <td><img src="../assets/minerals_icons/Phazyonite_icon.png"></td>
                        <td><span style="float: left;">Phazyonite<span></td>
                        <td><span id="phaBuy">150</span></td>
                        <td><span id="phaSell">100</span></td>
                        <td><span id="phaBal">0</span></td>
                        <td><span><button class = "min-btn" onclick="PhaBuy()">+</button><button class = "min-btn" onclick="PhaSell()">-</button></span></td>
                    </tr>
                    <tr>
                        <td colspan="2" ><span>Price for : </span><span id="cur-time"> </span></td>
                        <td colspan="3" id="txt1"><span style="float: right;">SUMA: </span></td>
                        <td colspan="1" ><span id="outcome">0</span></td>
                    </tr> 
                </tbody>              
            </table>
        </section>
        <section id="section-clac-2">
        <article>
                <div class = "art-min-cent" id="min-artic-1">
                    <div class="borderedText-min">
                        <img src="../assets/minerals_icons/Bismor_icon.png" alt="Bismor">
                        <span>Bismor is found as large yellowish cubes with dark brown nodules dotting on each six faces. It is always located on the floor of caverns, making it an easy mineral to find and mine.</span>
                    </div>
                </div>
                <div class = "art-min-cent" id="min-artic-1">
                    <div class="borderedText-min">
                        <span>Croppa is a pale green metallic ore adorned with small purple spikes. It is found in surface deposits much like Morkite and Gold, although it slightly juts out of the walls and may spawn higher up than other crafting minerals.</span>
                        <img src="../assets/minerals_icons/Croppa_icon.png" alt="Croppa">
                    </div>
                </div>
                <div class = "art-min-cent" id="min-artic-1">
                    <div class="borderedText-min">
                        <img src="../assets/minerals_icons/Enor_pearl_icon.png" alt="Enor pearl">
                        <span>Enor Pearls are glowing white pearls available as large spheroids embedded into the terrain or loose tetrahedral pieces. They can be located by the clusters of smaller pearls on the surface nearby. Loose Enor Pearl takes a roughly tetrahedral shape.</span>
                    </div>
                </div>
                <div class = "art-min-cent" id="min-artic-1">
                    <div class="borderedText-min">
                        <span>Jadiz is found as large green crystals embedded into the rock, and can be identified by the smaller green crystal clusters on the surface around it.</span>
                        <img src="../assets/minerals_icons/Jadiz_icon.png" alt="Jadiz">
                    </div>
                </div> 
                <div class = "art-min-cent" id="min-artic-1">
                    <div class="borderedText-min">
                        <img src="../assets/minerals_icons/Magnite_icon.png" alt="Magnite">
                        <span>Found as reddish mineral clusters with grey-black protrusions that look a little like metal bolts, Magnite is a rare crafting resource located in some of the most hostile regions of Hoxxes.</span>
                    </div>
                </div>
                <div class = "art-min-cent" id="min-artic-1">
                    <div class="borderedText-min">
                        <span>Taking the form of bright green mineral clusters, Umanite is found jutting out of the floors of caverns and tunnels, much like Hollomite.</span>
                        <img src="../assets/minerals_icons/Umanite_icon.png" alt="Umanite">
                    </div>
                </div> 
                <div class = "art-min-cent" id="min-artic-1">
                    <div class="borderedText-min">
                        <img src="../assets/minerals_icons/Phazyonite_icon.png" alt="Phazyonite">
                        <span>Discovered in the shape of a shiny and thin spire with multiple protrusions, Phazyonite is rarely found on surfaces in all regions of Hoxxes.</span>
                    </div>
                </div>             
            </article>
        </section>
    </main>
    <script src="../scripts/resCalc.js"></script>
<?php 
    include("./includes/footer.php") ;
?>