<?php 
    require_once "Coll_bet_function.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo root_dir() .root_css()?>bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo root_dir() .root_js()?>bootstrap.min.js">
    <link rel="stylesheet" href="<?php echo root_dir() .root_css()?>variable.css">
    <link rel="stylesheet" href="<?php echo root_dir() .root_css()?>index.css">
    <link rel="stylesheet" href="<?php echo root_dir() .root_css()?>all.min.css">
    <link rel="stylesheet" href="<?php echo root_dir() .root_css()?>media.css">
    <title><?php echo site_name() ?></title>
</head>
<body class="_0000">
    <div class="_01">
        <header class="_002 sticky-top">
            <div class="_0003">
                <nav>
                    <a href="<?php echo root_dir()?>">
                       <span class="mainf">Colly_<span class="_0005">bet</span></span>
                    </a>
                </nav>

                <a href="#">
                  <span class="_0006">more</span>
                </a>

                <a href="#">
                  <span class="_0006">tickets</span>
                </a>

                <a href="#">
                  <span class="_0006">my wallet</span>
                </a>
            </div>
            <div class="_0004">
                <div class="_0007">
                    <a href="<?php echo root_dir()?>">home</a>
                    <a href="#result">result</a>
                    <a href="#past">past</a>
                    <a href="#coupons">coupons</a>
                    <a href="#">draws</a>
                    <a href="#">odds</a>
                </div>

                <div class="_00008">
                    <a href="#">
                        <i class="fas fa-user"></i>
                    </a>

                    <a href="#">
                        <i class="fas fa-cog"></i>
                    </a>
                </div>
            </div>
        </header>

        <section class="shadow" id="home">
            <div class="_000009">
                <div class="_10">
                    <div class="_02">
                        <span class="_04">numbers</span>
                        <nav class="_05">
                            <button class="item redy">1</button>
                            <button class="item yelody">2</button>
                            <button class="item bludy">3</button>
                            <button class="item redy">4</button>
                            <button class="item yelody">5</button>
                            <button class="item bludy">6</button>
                            <button class="item redy">7</button>
                            <button class="item yelody">8</button>
                            <button class="item bludy">9</button>
                            <button class="item redy">10</button>
                            <button class="item yelody">11</button>
                            <button class="item bludy">12</button>
                            <button class="item redy">13</button>
                            <button class="item yelody">14</button>
                            <button class="item bludy">15</button>
                            <button class="item redy">16</button>
                            <button class="item yelody">17</button>
                            <button class="item bludy">18</button>
                            <button class="item redy">19</button>
                            <button class="item yelody">20</button>
                            <button class="item bludy">21</button>
                            <button class="item redy">22</button>
                            <button class="item yelody">23</button>
                            <button class="item bludy">24</button>
                            <button class="item redy">25</button>
                            <button class="item yelody">26</button>
                            <button class="item bludy">27</button>
                            <button class="item redy">28</button>
                            <button class="item yelody">29</button>
                            <button class="item bludy">30</button>
                            <button class="item redy">31</button>
                            <button class="item yelody">32</button>
                            <button class="item bludy">33</button>
                            <button class="item redy">34</button>
                            <button class="item yelody">35</button>
                            <button class="item bludy">36</button>
                            <button class="item redy">37</button>
                            <button class="item yelody">38</button>
                            <button class="item bludy">39</button>
                            <button class="item redy">40</button>
                            <button class="item yelody">41</button>
                            <button class="item bludy">42</button>
                            <button class="item redy">43</button>
                            <button class="item yelody">44</button>
                            <button class="item bludy">45</button>
                            <button class="item redy">46</button>
                            <button class="item yelody">47</button>
                            <button class="item bludy">48</button>
                            <button class="item blacky">49</button>
                            <button title="Clear all" class="_09">clear selection</button>
                        </nav>
                    </div>
                    <div class="_03">
                        <nav class="_price comcate _price2 conquot">
                            <span class="stake" data="100">&#8358;100</span>
                            <span class="stake" data="150">&#8358;150</span>
                            <span class="stake" data="200">&#8358;200</span>
                            <span class="stake" data="250">&#8358;250</span>
                            <span class="stake" data="300">&#8358;300</span>
                            <span class="stake" data="350">&#8358;350</span>
                            <span class="stake" data="400">&#8358;400</span>
                            <span class="stake" data="500">&#8358;500</span>
                            <span title="Close" class="close">x</span>
                        </nav>
                       <div class="_3and">
                          
                       </div>
                       <div class="_3">
                          <button class="bet_09">stake</button>
                       </div>
                    </div>
                </div>
                <div class="_08">
                    <div class="_11">
                        <span class="_13">winning color</span>
                        <div class="_14">
                            <button class="_15 red">red</button>
                            <button class="_15 yellow">yellow</button>
                            <button class="_15 blue">blue</button>
                            <button class="_15 draw">draw</button>
                            <button class="bet_010">stake</button>
                        </div>
                    </div>
                    <div class="_12">
                       <span class="_13">numbers of color</span>
                       <div class="_16">
                          <button class="_17 _1717 blue">0</button>
                          <button class="_17 _1717 blue">2+</button>
                          <button class="_17 _1717 blue">3+</button>
                          <button class="_17 _1717 blue">4+</button>
                          <button class="_17 _1717 blue">5+</button>
                          <button class="_17 _1717 blue">6</button>
                       </div>
                       <div class="_16">
                          <button class="_17 _1818 red">0</button>
                          <button class="_17 _1818 red">2+</button>
                          <button class="_17 _1818 red">3+</button>
                          <button class="_17 _1818 red">4+</button>
                          <button class="_17 _1818 red">5+</button>
                          <button class="_17 _1818 red">6</button>
                       </div>
                       <div class="_16">
                          <button class="_17 _1919 yellow">0</button>
                          <button class="_17 _1919 yellow">2+</button>
                          <button class="_17 _1919 yellow">3+</button>
                          <button class="_17 _1919 yellow">4+</button>
                          <button class="_17 _1919 yellow">5+</button>
                          <button class="_17 _1919 yellow">6</button>
                       </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="shadow" id="result">
            <div class="_090909_resulting">
                <nav class="_Result_ red-color">
                    <span>40</span>
                </nav>
                <nav class="_Result_ red-color">
                    <span>13</span>
                </nav>
                <nav class="_Result_ blue-color">
                    <span>30</span>
                </nav>
                <nav class="_Result_ yellow-color">
                    <span>42</span>
                </nav>
                <nav class="_Result_ red-color">
                    <span>4</span>
                </nav>
                <nav class="_Result_ blue-color">
                    <span>39</span>
                </nav>
            </div>
            <div class="_timer_">
                <div class="minits">
                    <span class="_min_"></span>
                </div>
                <div class="seconds">
                  <span class="_sec_"></span>
                </div>
            </div>
        </section>
        
        <section id="past">
            <div class="_pasting_num">
                
            </div>
        </section>
    </div>
    

   <script src="<?php echo root_dir() .root_js()?>index.js"></script>
</body>
</html>