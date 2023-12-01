<template>
  <div id="mobile" class="mobile">

    <el-container>

      <!-- Head -->
      <el-header height="80px" :class="[header_shadow ? 'header-shadow' : '']">
        <el-row id="header" v-show="show_header" type="flex" align="middle" justify="space-between"
          class="header f-main animate__animated animate__fadeInDown">
          <el-col :span="16">
            <el-row type="flex" align="middle" justify="start">
              <!-- logo -->
              <img class="cursor-p pt-20 pb-20 " height="40" src="../assets/logo/logo_word_mobile.png"
                @click="scrollToTop(0)">
            </el-row>
          </el-col>
          <!-- The right hand buttons -->
          <el-col :span="8">
            <el-row type="flex" align="middle" justify="end">
              <!-- <div>
                  <el-button type="primary" size="mini" round @click="go(urls.dex)">{{$t('common.buyApoy')}}
                  </el-button>
                </div> -->
              <el-dropdown class="w100" @command="changeLang">
                <el-button class="w100" type="primary" size="small" round plain>
                  <img height="18" src="../assets/icon/earth.png" style="vertical-align: middle;" alt="" class="mr-5">
                  <span>{{ currentLang }}</span>
                </el-button>
                <el-dropdown-menu slot="dropdown" placement="bottom-end">
                  <el-dropdown-item v-for="item in langs" :key="item.value" :command="item.value">{{ item.name }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <div class="ml-10">
                <button class="Btn-Launch f-12" style="width: 80px; height: 35px;" @click="go(urls.docs)">
                  <!-- {{ $t("common.comingsoon") }} -->Coming
                </button>
              </div>

              <img class="ml-10" @click="drawer = true" height="35" src="../assets/icon/round_menu_fill.png" alt="">
            </el-row>
          </el-col>
        </el-row>

      </el-header>

      <!-- drawer -->
      <el-drawer :visible.sync="drawer" :with-header="false" size="60%">
        <el-row class="ta-c mt-10 mb-10">
          <img height="60" src="../assets/logo/logo_word.png" @click="scrollToTop()">
        </el-row>

        <!-- menu -->
        <el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <!-- <el-menu-item index="1" @click.native="scrollTo('product')">
            <i class="el-icon-menu"></i>
            <span slot="title">{{$t('common.product')}}</span>
          </el-menu-item> -->
          <!-- <el-menu-item index="2" @click.native="go(urls.video)">
            <i class="el-icon-view"></i>
            <span slot="title">{{ $t('common.video') }}</span>
          </el-menu-item>
          <el-menu-item index="2" @click.native="go(urls.secure)">
            <i class="el-icon-view"></i>
            <span slot="title">{{ $t('common.secure') }}</span>
          </el-menu-item> -->
          <!-- <el-menu-item index="3" @click.native="go(urls.github)">
            <i class="el-icon-view"></i>
            <span slot="title">GitHub</span>
          </el-menu-item> -->
          <el-menu-item index="4" @click.native="go(urls.docs)">
            <i class="el-icon-document"></i>
            <span slot="title">{{ $t('common.docs') }}</span>
          </el-menu-item>
          <el-menu-item index="4" @click.native="scrollTo('community')">
            <i class="el-icon-user"></i>
            <span slot="title">{{ $t('common.community') }}</span>
          </el-menu-item>
        </el-menu>

        <!--  -->
        <el-row class="menu-footer ta-c">
          <!-- <el-row class="mb-10">
            <el-button class="w75" type="primary" size="small" round @click="go(urls.dex)">{{$t('common.buyApoy')}}
            </el-button> -->
        </el-row>
        <div class="ml-10">
          <button class="Btn-Launch f-12" style="width: 150px; height: 50px;" @click="go(urls.docs)">
            <!-- {{ $t("common.comingsoon") }} -->Coming Soon
          </button>
        </div>

      </el-drawer>

      <!-- main -->
      <el-main style="overflow: hidden;">
        <div class="main-f">
          <!-- Carousel chart -->
          <el-carousel :interval="2000" height="36vw" arrow="always" style="width: 90vw; left:5vw; top: 100px;"
            v-show="show_home" class="animate__animated animate__fadeInDown">
            <el-carousel-item v-for="item in carousel_images" :key="item.url">
              <!-- <h3 class="medium">{{ item }}</h3> -->
              <img :src="item.url" class="bannerimg" />
            </el-carousel-item>
          </el-carousel>

          <div v-show="show_home" class="animate__animated animate__fadeInRight"
            style="position: relative; left: 35vw; top: 6vw;">
            <button class="Btn-Launch f-16" style="width: 30vw; height: 45px; top: 130px" @click="go(urls.docs)">
              <!-- {{ $t("common.comingsoon") }} -->Coming Soon
            </button>
          </div>

          <div v-show="show_home" class="main-first-text ta-c f-weighter animate__animated animate__fadeInUp">
            {{ $t("common.homeTip1") }}
          </div>

          <!-- 3 First cards -->
          <div v-show="show_home">
            <div class="main-first-card f-18 glass-container animate__animated animate__fadeInRight"
              style="left: 5vw; top: 270px">
              <div class="ta-c f-18 f-weighter neon">AMM + CLMM<br><br></div>
              <span></span>

              <div class="f-16 f-weighter" style="text-indent:2em">
                {{ $t("common.homeFirst1") }}
              </div>
            </div>

            <div class="main-first-card f-18 glass-container animate__animated animate__fadeInUp"
              style="left: 5vw; top: 320px">
              <div class="ta-c f-18 f-weighter neon">{{ $t("common.homeCardTitleFund") }}<br><br></div>
              <span></span>
              <div class="f-16 f-weighter" style="text-indent:2em">
                {{ $t("common.homeFirst2") }}
              </div>
            </div>

            <div class="main-first-card f-18 glass-container animate__animated animate__fadeInLeft"
              style="left: 5vw; top: 370px">
              <div class="ta-c f-18 f-weighter neon">{{ $t("common.homeCardTitleAi") }}<br><br></div>
              <span></span>
              <div class="f-16 f-weighter" style="text-indent:2em">
                {{ $t("common.homeFirst3") }}
              </div>
            </div>
          </div>
        </div>

        <!--How it works?-->
        <div style="height: 1550px;">

          <div v-show="show_product" class="f-22 ta-c f-weighter animate__animated animate__fadeInUp"
            style="position: relative; top: 50px">
            {{ $t("common.howItWorkTitle") }}
          </div>

          <img src="../assets/icon/arrow_water.png"
            style="width: 10vw; height: 10vw; rotate: 90deg;position: relative; top:400px; left: 45vw">
          <img src="../assets/icon/arrow_water.png"
            style="width: 10vw; height: 10vw; rotate: 90deg; position: relative; top:770px; left: 35vw">
          <img src="../assets/icon/arrow_water.png"
            style="width: 10vw; height: 10vw; rotate: 90deg; position: relative; top:1140px; left: 25vw">


          <div class="card-work" style="position: relative;top: 200px; left: 50vw;">
            <div class="card-work-title ta-c">
              {{ $t("common.howItWorkLendTitle") }}
            </div>
            <div class="card-work-txt">
              {{ $t("common.howItWorkLend1") }}<br /><br />
              {{ $t("common.howItWorkLend2") }}
            </div>
            <div class="shadow"></div>
          </div>

          <div class="card-work" style="position: relative;top: 250px; left: 50vw;">
            <div class="card-work-title ta-c">
              {{ $t("common.howItWorkLYFTitle") }}
            </div>
            <div class="card-work-txt">
              {{ $t("common.howItWorkLYF1") }}<br /><br />
              {{ $t("common.howItWorkLYF2") }}<br /><br />
              {{ $t("common.howItWorkLYF3") }}
            </div>
            <div class="shadow"></div>
          </div>

          <div class="card-work" style="position: relative;top: 300px; left: 50vw;">
            <div class="card-work-title ta-c">
              {{ $t("common.howItWorkAMFTitle") }}
            </div>
            <div class="card-work-txt">
              {{ $t("common.howItWorkAMF1") }}<br /><br />
              {{ $t("common.howItWorkAMF2") }}<br /><br />
              {{ $t("common.howItWorkAMF3") }}
            </div>
            <div class="shadow"></div>
          </div>

          <div class="card-work" style="position: relative;top: 350px; left: 50vw;">
            <div class="card-work-title ta-c">
              {{ $t("common.howItWorkDexTitle") }}
            </div>
            <div class="card-work-txt">
              {{ $t("common.howItWorkDex1") }}<br /><br />
              {{ $t("common.howItWorkDex2") }}
            </div>
            <div class="shadow"></div>
          </div>

        </div>
        <el-divider></el-divider>

        <!--Leveraged Yiled Farming-->
        <div class="main-third-content">
          <div class="f-22 ta-c f-weighter">{{ $t("common.lyfHead") }}</div>
          <div class="main-third-text ta-c f-16 gradient-text" style="top: 80px;">
            {{ $t("common.lyfDesc1") }}<br><br>
            {{ $t("common.lyfDesc2") }}<br><br>
            {{ $t("common.lyfDesc3") }}
          </div>

          <div class="card-strategy f-16 f-weighter ta-c"
            style="position: relative; left: 5vw; top: 490px; background-color: #e54d42;">
            {{ $t("common.lyfStrategy1") }}
          </div>

          <div class="card-strategy f-16 f-weighter ta-c"
            style="position: relative; left: 5vw; top: 500px; background-color: #f37b1d;">
            {{ $t("common.lyfStrategy2") }}
          </div>

          <div class="card-strategy f-16 f-weighter ta-c"
            style="position: relative; left: 5vw; top: 510px; background-color: #fbbd08;">
            {{ $t("common.lyfStrategy3") }}
          </div>

          <div class="card-strategy f-16 f-weighter ta-c"
            style="position: relative; left: 5vw; top: 520px; background-color: #8dc63f;">
            {{ $t("common.lyfStrategy4") }}
          </div>

          <div class="card-strategy f-16 f-weighter ta-c"
            style="position: relative; left: 5vw; top: 530px; background-color: #0081ff;">
            {{ $t("common.lyfStrategy5") }}
          </div>

          <div class="card-strategy f-16 f-weighter ta-c"
            style="position: relative; left: 5vw; top: 540px; background-color: #e03997;">
            {{ $t("common.lyfStrategy6") }}
          </div>

        </div>
        <el-divider></el-divider>

        <!--Asset Management Funds-->
        <div class="main-fourth-content">
          <div class="f-22 f-weighter ta-c">{{ $t("common.amfHead") }}</div>
          <div>
            <img src="../assets/home/fund1.png" class="main-fourth-img" style="left: 5vw; top: 65px" />
          </div>
          <div>
            <div class="f-18 f-weighter" style="position: relative; align-items: center; justify-content: center; display: flex; top: calc(50.5vw + 60px)">
              {{ $t("common.amfBondTitle") }}
            </div>
            <div class="f-16 ta-c main-fourth-text gradient-text"
              style="position: absolute; left: 5vw; top: calc(50.5vw + 140px); width: 90vw">
              {{ $t("common.amfBondFund1") }}<br /><br />
              {{ $t("common.amfBondFund2") }}<br /><br />
              {{ $t("common.amfBondFund3") }}
            </div>
          </div>
          <div>
            <img src="../assets/home/fund2.png" class="main-fourth-img" style="left: 5vw; top: calc(50.5vw + 420px)" />
          </div>
          <div>
            <div class="f-18 f-weighter" style="position: relative; align-items: center; justify-content: center; display: flex; top: calc(101vw + 390px)">
              {{ $t("common.amfHedgeTitle") }}
            </div>
            <div class="f-16 ta-c main-fourth-text gradient-text"
              style="position: absolute; left: 5vw; top: calc(101vw + 500px); width: 90vw">
              {{ $t("common.amfHedgeFund1") }}<br /><br />
              {{ $t("common.amfHedgeFund2") }}<br /><br />
              {{ $t("common.amfHedgeFund3") }}<br /><br />
              {{ $t("common.amfHedgeFund4") }}
            </div>
          </div>

          <div>
            <img src="../assets/home/fund3.png" class="main-fourth-img" style="left: 5vw; top: calc(101vw + 830px)" />
          </div>
          <div>
            <div class="f-18 f-weighter" style="position: relative; align-items: center; justify-content: center; display: flex; top: calc(151.5vw + 770px)">
              {{ $t("common.amfIndexTitle") }}
            </div>
            <div class="f-16 ta-c main-fourth-text gradient-text"
              style="position: absolute; left: 5vw; top: calc(151.5vw + 900px); width: 90vw">
              {{ $t("common.amfIndexFund1") }}<br /><br />
              {{ $t("common.amfIndexFund2") }}<br /><br />
              {{ $t("common.amfIndexFund3") }}<br /><br />
              {{ $t("common.amfIndexFund4") }}
            </div>
          </div>
        </div>
        <el-divider></el-divider>

        <!--Artificial Intelligence-->
        <div class="main-fifth-content">
          <div class="f-22 f-weighter ta-c">{{ $t("common.aiHead") }}</div>

          <div class="main-ai-card" style="left: 8vw; top: 40px">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="main-ai-card-inner f-16 f-weighter ta-c" style="color: #d21e1e;">
              1<br><br>{{ $t("common.aiDesc1") }}
            </div>
          </div>

          <div class="main-ai-card" style="left: 8vw; top: 70px">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="main-ai-card-inner  f-16 f-weighter ta-c" style="color: #d21e1e;">
              2<br><br>{{ $t("common.aiDesc2") }}
            </div>
          </div>

          <div class="main-ai-card" style="left: 8vw; top: 100px">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="main-ai-card-inner f-16 f-weighter ta-c" style="color: #d21e1e;">
              3<br><br>{{ $t("common.aiDesc3") }}
            </div>
          </div>
          <div class="main-ai-card" style="left: 8vw; top: 130px">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="main-ai-card-inner f-16 f-weighter ta-c" style="color: #d21e1e;">
              4<br><br>{{ $t("common.aiDesc4") }}
            </div>
          </div>
        </div>
        <el-divider></el-divider>

        <!--DIY on Dexes V.S. Apoy Finance-->
        <div class="main-sixth-content">
          <div class="f-22 f-weighter ta-c">{{ $t("common.diyTitle") }} V.S. Apoy</div>
          <div id="vsTable" class="table_style f-16">
            <table>
              <tr>
                <th style="width: 6vw">{{ $t("common.diyTitle") }}</th>
                <th style="width: 6vw">Apoy</th>
                <th style="width: 88vw">{{ $t("common.diyAdvn") }}</th>
              </tr>
              <tr>
                <td><img src="../assets/icon/wrong.png" style="scale: 65%;" /></td>
                <td><img src="../assets/icon/right.png" style="scale: 65%;" /></td>
                <td>
                  {{ $t("common.diyAdvanTip1") }}
                </td>
              </tr>
              <tr>
                <td><img src="../assets/icon/wrong.png" style="scale: 65%;" /></td>
                <td><img src="../assets/icon/right.png" style="scale: 65%;" /></td>
                <td>
                  {{ $t("common.diyAdvanTip2") }}
                </td>
              </tr>
              <tr>
                <td><img src="../assets/icon/wrong.png" style="scale: 65%;" /></td>
                <td><img src="../assets/icon/right.png" style="scale: 65%;" /></td>
                <td>
                  {{ $t("common.diyAdvanTip3") }}
                </td>
              </tr>
              <tr>
                <td><img src="../assets/icon/wrong.png" style="scale: 65%;" /></td>
                <td><img src="../assets/icon/right.png" style="scale: 65%;" /></td>
                <td>
                  {{ $t("common.diyAdvanTip4") }}
                </td>
              </tr>
              <tr>
                <td><img src="../assets/icon/wrong.png" style="scale: 65%;" /></td>
                <td><img src="../assets/icon/right.png" style="scale: 65%;" /></td>
                <td>
                  {{ $t("common.diyAdvanTip5") }}
                </td>
              </tr>
              <tr>
                <td><img src="../assets/icon/wrong.png" style="scale: 65%;" /></td>
                <td><img src="../assets/icon/right.png" style="scale: 65%;" /></td>
                <td>
                  {{ $t("common.diyAdvanTip6") }}
                </td>
              </tr>
              <tr>
                <td><img src="../assets/icon/wrong.png" style="scale: 65%;" /></td>
                <td><img src="../assets/icon/right.png" style="scale: 65%;" /></td>
                <td>
                  {{ $t("common.diyAdvanTip7") }}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <el-divider></el-divider>


        <!--Community-->
        <div style="height: 110vw;">
          <div class="f-22 f-weighter ta-c">{{ $t("common.joinCommunity") }}</div>
          <div class="community-card"
            style="position: relative; top: 50px; display: flex; justify-content: center; align-items: center;">
            <div class="main">
              <div class="up">
                <button class="card1" @click="open(urls.telegram)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" viewBox="0 0 256 256">
                    <defs>
                      <linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stop-color="#2AABEE" />
                        <stop offset="100%" stop-color="#229ED9" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#logosTelegram0)"
                      d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z" />
                    <path fill="#FFF"
                      d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z" />
                  </svg>

                </button>
                <button class="card2" @click="open(urls.twitter)">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="10vw" height="10vw" class="twitter">
                    <path
                      d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429">
                    </path>
                  </svg>
                </button>
              </div>
              <div class="down">
                <button class="card3" @click="open(urls.github)">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="10vw" height="10vw" class="github">
                    <path
                      d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
                    </path>
                  </svg>
                </button>
                <button class="card4" @click="open(urls.discord)">
                  <svg height="10vw" width="10vw" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="discord">
                    <path
                      d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </el-main>

      <!-- footer -->
      <el-footer id="footer" height="450px" class="darkAmber">
        <el-row class="mt-20">
          <img height="50" src="../assets/logo/logo_word.png">
        </el-row>
        <el-row class="ml-5">
          <el-row class="mt-20">
            <el-row class="f-16 f-weighter mb-10">{{ $t('common.learnMore') }}</el-row>
            <!-- <el-row class="mb-10">
              <span @click="go(urls.video)">{{ $t('common.video') }}</span>
            </el-row>
            <el-row class="mb-10">
              <span @click="go(urls.secure)">{{ $t('common.secure') }}</span>
            </el-row> -->
            <el-row class="mb-10">
              <span @click="go(urls.docs)">{{ $t('common.docs') }}</span>
            </el-row>
            <!-- <el-row>
              <span @click="open(urls.github)">GitHub</span>
            </el-row> -->
          </el-row>
          <el-row class="mt-20">
            <el-row class="f-16 f-weighter mb-10">{{ $t('common.community') }}</el-row>
            <el-row class="mb-10">
              <span @click="open(urls.discord)">Discord</span>
            </el-row>
            <el-row class="mb-10">
              <span @click="open(urls.telegram)">Telegram</span>
            </el-row>
            <el-row class="mb-10">
              <span @click="open(urls.twitter)">Twitter</span>
            </el-row>
          </el-row>

          <el-row class="mt-30 f-16 f-weighter">
            <!-- <el-row class="mb-10">
              <span @click="go(urls.dex)">{{$t('common.buyApoy')}}</span>
            </el-row> -->
            <el-row>
              <span @click="go(urls.docs)">
                <!-- {{ $t('common.comingsoon') }} -->Coming Soon
              </span>
            </el-row>
          </el-row>
        </el-row>
        <el-row class="ml-5 mt-50">
          © 2023 Apoy Finance. All rights reserved.
        </el-row>
      </el-footer>

    </el-container>

  </div>
</template>

<script>
import mixins from "../mixin"
export default {
  name: "mobile",
  mixins: [mixins],
  components: {},
  data() {
    return {
      drawer: false,
      header_shadow: false, // async flags
      show_home: false,
      show_tvl: false,
      show_product: false,
      show_partner: false,
      show_header: false,
      show_community: false,
      transition_list: [
        'home',
        'tvl',
        'product',
        'partner',
        'community',
      ], // animation flags
      // Carousel
      carousel_images: [
        { url: require("../assets/home/home2.jpg") },
        { url: require("../assets/home/home2.jpg") },
        { url: require("../assets/home/home2.jpg") },
        { url: require("../assets/home/home2.jpg") },
        { url: require("../assets/home/home2.jpg") },
        { url: require("../assets/home/home2.jpg") }
      ],
    };
  },
  computed: {

  },
  methods: {
    /**
     * scroller
     */
    scrollTop() {

      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.header_shadow = scrollTop > 100
      // console.log(scrollTop);
      // console.log('------->>>>>');
      this.transition_list.forEach((i) => {
        let id = document.getElementById(i);
        let domRect = id.getBoundingClientRect()
        // console.log(i, this['show_' + i], window.innerHeight, domRect.bottom, domRect.top);
        if (domRect.bottom >= 0 && domRect.top <= window.innerHeight) {
          if (!this['show_' + i]) {
            this['show_' + i] = true
          }
        } else {
          if (this['show_' + i]) {
            // console.log('no elements: ' + i);
            this['show_' + i] = false
          }
        }
      })
      // console.log('-------<<<<<<<');

    },
  },
  mounted() {
    // console.log('mobile');
    //animation
    window.addEventListener('scroll', this.scrollTop);
    //animation async
    setTimeout(() => {
      this.show_header = true
      this.show_home = true
      this.show_tvl = true
      this.show_product = true
      this.show_footer = true
    }, 200);
  },
  created() {

  }
}
</script>



<style lang="less" scoped>
.main-f {
  background-image: linear-gradient(135deg, #FFF6B7 10%, #F6416C 100%);
  height: calc(1030px + 40vw);
}

.bannerimg {
  width: 100%;
  height: inherit;
}

.main-first-text {
  left: 10vw;
  width: 80vw;
  top: 200px;
  position: relative;
  letter-spacing: 0.2rem;
  font-size: 1rem;

  background: -webkit-linear-gradient(135deg,
      #0eaf6d,
      #ff6ac6 25%,
      #147b96 50%,
      #e6d205 55%,
      #2cc4e0 60%,
      #8b2ce0 80%,
      #ff6384 95%,
      #08dfb4);
  /* Set text color fill to transparent */
  -webkit-text-fill-color: transparent;
  /* Background cropping, which means using the background color for text */
  -webkit-background-clip: text;
  /* Enlarge the background image to make it look softer */
  -webkit-background-size: 200% 100%;
  /* Application animation flowCss 12 second speed infinite loop linear constant speed animation*/
  -webkit-animation: flowCss 12s infinite linear;

}

@-webkit-keyframes flowCss {
  0% {
    /*  Move background position */
    background-position: 0 0;
  }

  100% {
    background-position: -400% 0;
  }
}

.main-first-text:hover {
  -webkit-animation: flowCss 4s infinite linear;
  transform: scale(1.05);
}

.main-first-card {
  background-color: rgb(185, 103, 229);
  padding: 20px;
  border-radius: 20px;
  min-height: 120px;
  width: 80vw;
  color: #f8f8f8;
  position: relative;
}


.main-first-card span {
  position: absolute;
  overflow: hidden;
  width: 120px;
  height: 120px;
  top: -10px;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-first-card span::before {
  content: 'First';
  position: absolute;
  width: 150%;
  height: 40px;
  background-image: linear-gradient(45deg, #ff6547 0%, #ffb144 51%, #ff7053 100%);
  transform: rotate(-45deg) translateY(-20px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
}

.main-first-card span::after {
  content: '';
  position: absolute;
  width: 10px;
  bottom: 0;
  left: 0;
  height: 10px;
  z-index: -1;
  box-shadow: 140px -140px #cc3f47;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%);
}

// ==


.main-second-content {
  width: 100%;
  position: relative;
  height: 650px;

}

.main-third-content {
  width: 100%;
  position: relative;
  height: 950px;
  top: 20px;

  .main-third-text {
    width: 80vw;
    left: 10vw;
    top: 200px;
    position: absolute;
  }

  .main-third-text:hover {
    transform: scale(1.02);
  }

}

.main-fourth-content {
  width: 100%;
  position: relative;
  height: calc(151.5vw + 1250px);
  top: 25px;

  .main-fourth-img {
    width: 90vw;
    height: 50.5vw;
    position: absolute;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.08);

  }

  .main-fourth-img:hover {
    transform: scale(1.1);
  }

  .main-fourth-text {}

  .main-fourth-text:hover {
    transform: scale(1.02);
  }
}

.main-fifth-content {
  width: 100%;
  position: relative;
  height: 770px;
  top: 20px;

}

.main-sixth-content {
  width: 100%;
  position: relative;
  padding: 0vw 0vw 20vw 0vw;
  top: 25px;
}

.table_style {
  width: 90vw;
  left: 5vw;
  top: 40px;
  position: relative;
  box-shadow: 0 15px 15px rgba(218, 105, 105, 0.3), 0 15px 15px rgba(220, 97, 97, 0.4);


  .wrap {
    overflow: hidden;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 0 20px rgba(218, 105, 105, 0.35);
  }

  table {
    border-collapse: collapse;
  }


  th {
    background-color: #FF6A88;
    color: #ffffff;
    opacity: 0.95;
    height: 70px;
  }



  td {
    background-color: #FF99AC;
    width: 10vw;
    height: 50px;
    text-align: center;
    padding: 15px;
    color: white;

  }

  tr {
    border-bottom: 2px solid #FFDEE9;

  }

  tr:hover {
    transform: scale(1.05);
  }

  tr:last-of-type {
    border-bottom: 2px solid #FF6A88;
  }

  tr:nth-of-type(even) td {
    background-color: #FFDEE9;
    color: #f80808;

  }
}


.typing {
  color: white;
  font-size: 2em;
  width: 21em;
  height: 1.5em;
  border-right: 1px solid transparent;
  animation: typing 2s steps(42, end), blink-caret .75s step-end infinite;
  font-family: Consolas, Monaco;
  word-break: break-all;
  overflow: hidden;
}

/* typing */
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 21em;
  }
}

@keyframes blink-caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: currentColor;
  }
}

.neon {
  color: rgb(230, 237, 241);
  -webkit-animation: shining 0.5s alternate infinite;
  animation: shining 0.5s alternate infinite;
}

@-webkit-keyframes shining {
  from {
    text-shadow: 0 0 10px lightblue, 0 0 20px lightblue, 0 0 30px lightblue, 0 0 40px skyblue, 0 0 50px skyblue, 0 0 60px skyblue;
  }

  to {
    text-shadow: 0 0 5px lightblue, 0 0 10px lightblue, 0 0 15px lightblue, 0 0 20px skyblue, 0 0 25px skyblue, 0 0 30px skyblue;
  }
}

/* This was made with GlassGenerator.netlify.app */

.glass-container {
  color: white;
  gap: 20px;
  border-radius: 17px;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 191, 255, 0.073);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 1px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 1px rgba(40, 40, 40, 0.35) solid;
  border-right: 1px rgba(40, 40, 40, 0.35) solid;
}

// Carousel chart
.el-carousel__item h3 {
  color: #e2e4e7;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ecf0f5;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #f2f4f6;
}



/* gradient */
.gradient-text {
  background: linear-gradient(to right, rgb(178, 180, 27), #ff3596);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}




// card ai --start 
.main-ai-card {
  width: 84vw;
  height: 140px;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
}

.main-ai-card-inner {
  width: inherit;
  height: inherit;
  background: linear-gradient(135deg, #FFF6B7 10%, #F6416C 100%);
  opacity: 0.7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}


.main-ai-card:hover {
  transform: scale(1.1) rotate(10deg);
}

.circle {
  width: 10vw;
  height: 10vw;
  background: radial-gradient(#b0e633, #53ef7d);
  border-radius: 50%;
  position: absolute;
  animation: move-up6 0.8s ease-in infinite alternate-reverse;
}

.circle:nth-child(1) {
  top: -25px;
  left: -25px;
}

.circle:nth-child(2) {
  bottom: -25px;
  right: -25px;
  animation-name: move-down1;
}

@keyframes move-up6 {
  to {
    transform: translateY(-10px);
  }
}

@keyframes move-down1 {
  to {
    transform: translateY(10px);
  }
}

// card ai --end 

// card how it work -start
.card-work {
  position: absolute;
  width: 95vw;
  height: 310px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-work:hover {
  scale: 1.02;
  rotate: 3deg;
}

.card-work::after {
  content: '';
  width: 93%;
  height: 95%;
  position: absolute;
  border-radius: 0.7em;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 0;
}

.shadow {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e6d02b 10%, #F6416C 100%);
  z-index: -1;
  filter: blur(25px);
}

.card-work-title {
  position: absolute;
  font-weight: 800;
  font-size: 1.4em;
  color: #fff;
  top: 30px;
}

.card-work-txt {
  position: absolute;
  font-weight: 800;
  font-size: 1.15em;
  color: rgb(242, 243, 240);
  margin: 40px;
  top: 50px;
}

.card-work:hover .shadow {
  animation: rotate 3s linear infinite;
  scale: 1.01;
}

@keyframes rotate {
  0% {
    rotate: 0deg;
    background: linear-gradient(315deg, #ffbc00, #ff0058);
  }

  50% {
    rotate: 180deg;
    background: linear-gradient(45deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
  }

  100% {
    rotate: 360deg;
    background: linear-gradient(315deg, #F4D03F 0%, #16A085 100%);
  }
}

// card how it work -end


// Community card -start
.community-card {
  .main {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .up {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .down {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .card1 {
    width: 30vw;
    height: 30vw;
    outline: none;
    border: none;
    background: white;
    border-radius: 90px 5px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }

  .instagram {
    margin-top: 1.5em;
    margin-left: 1.2em;
    fill: #cc39a4;
  }

  .card2 {
    width: 30vw;
    height: 30vw;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 90px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }

  .twitter {
    margin-top: 1.5em;
    margin-left: -.9em;
    fill: #03A9F4;
  }

  .card3 {
    width: 30vw;
    height: 30vw;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 5px 5px 90px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }

  .github {
    margin-top: -.6em;
    margin-left: 1.2em;
  }

  .card4 {
    width: 30vw;
    height: 30vw;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 5px 90px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }

  .discord {
    margin-top: -.9em;
    margin-left: -1.2em;
    fill: #8c9eff;
  }

  .card1:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: rgb(132, 205, 234);
  }

  .card1:hover .instagram {
    fill: white;
  }

  .card2:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #03A9F4;
  }

  .card2:hover .twitter {
    fill: white;
  }

  .card3:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: black;
  }

  .card3:hover .github {
    fill: white;
  }

  .card4:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #8c9eff;
  }

  .card4:hover .discord {
    fill: white;
  }
}

.darkAmber {
  background-image: -webkit-linear-gradient(top, #15140F 0%, #34312C 97%);
  background-image: linear-gradient(-180deg, #15140F 0%, #34312C 97%);
  color: #fff;
}



.card-strategy {
  width: 85vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 21px;
  backdrop-filter: blur(14px);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 2px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;
}

.card-strategy:hover {
  top: 370px;
  transform: scale(1.1);
}


.Btn-Launch {
  position: relative;
  border-radius: 25px;
  border: none;
  background-color: #F6416C;
  color: white;
  box-shadow: 0px 2px 2px rgb(227, 217, 103) inset,
    0px 5px 10px rgba(5, 5, 5, 0.212),
    0px -10px 10px #f06082 inset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Btn-Launch::before {
  width: 70%;
  height: 2px;
  position: absolute;
  background-color: rgba(250, 250, 250, 0.678);
  content: "";
  filter: blur(1px);
  top: 7px;
  border-radius: 50%;
}

.Btn-Launch::after {
  width: 70%;
  height: 2px;
  position: absolute;
  background-color: rgba(250, 250, 250, 0.137);
  content: "";
  filter: blur(1px);
  bottom: 7px;
  border-radius: 50%;
}

.Btn-Launch:hover {
  animation: jello-horizontal 0.9s both;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>