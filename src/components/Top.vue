<template>
  <div class="top">
    <h1>{{ msg }}</h1>
    <h2>Head A</h2>
    <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>

    <p>ad &gt;&gt;</p>
    <div id="zt_456562_1" style="display:show"> 
    </div>
    <p>&gt;&gt; ad</p>

    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>


    <h2>Head B</h2>
    <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>

    <p>ad &gt;&gt;</p>
    <div id="zt_456562_2" style="display:show"> 
    </div>
    <p>&gt;&gt; ad</p>

    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>

    <p>ad &gt;&gt;</p>
    <div id="zt_456562_3" style="display:show"> 
    </div>
    <p>&gt;&gt; ad</p>

    {{top_showad()}}

  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'Top Page!'
    }
  },
  methods: {
    top_showad: function (event) {
      // 変数リセット
      window.zmt_mtag = undefined;

      // 広告枠定義
      window.zd_get_placements = function() {
        window.zmt_mtag = window.zmt_get_tag(2117,"456562");
        window.zmt_mtag.zmt_set_charset("utf-8");
        window.p456562_1 = zmt_mtag.zmt_get_placement("zt_456562_1", "456562", "1" , "999" , "60" , "118" ,"1200", "630");
        window.p456562_2 = zmt_mtag.zmt_get_placement("zt_456562_2", "456562", "2" , "999" , "29" , "118" ,"1200", "630");
        window.p456562_3 = zmt_mtag.zmt_get_placement("zt_456562_3", "456562", "3" , "999" , "29" , "118" ,"1200", "630");

        window.zmt_mtag.zmt_set_async();
        window.zmt_mtag.zmt_load(zmt_mtag);
      }

      // JS呼び出し設定
      var script = document.createElement("script");
      script.setAttribute("src", "https://s.f1.impact-ad.jp/sclient/tt3/fmos.js");
      document.getElementById('dac_ad_script_insert_point').appendChild(script);

      // 広告表示設定
      if(typeof window.zmt_mtag !='undefined' && typeof window.zmt_mtag.zmt_render_placement !='undefined') {
        window.zmt_mtag.zmt_render_placement(window.p456562_1);
      }
      if(typeof window.zmt_mtag !='undefined' && typeof window.zmt_mtag.zmt_render_placement !='undefined') {
        window.zmt_mtag.zmt_render_placement(window.p456562_2);
      }
      if(typeof window.zmt_mtag !='undefined' && typeof window.zmt_mtag.zmt_render_placement !='undefined') {
        window.zmt_mtag.zmt_render_placement(window.p456562_3);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
