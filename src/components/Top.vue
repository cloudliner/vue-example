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
      zd_get_placements = function() {
        zmt_mtag = zmt_get_tag(2117,"456562");
        zmt_mtag.zmt_set_charset("utf-8");
        p456562_1 = zmt_mtag.zmt_get_placement("zt_456562_1", "456562", "1" , "999" , "60" , "118" ,"1200", "630");
        p456562_2 = zmt_mtag.zmt_get_placement("zt_456562_2", "456562", "2" , "999" , "60" , "118" ,"1200", "630");
        p456562_3 = zmt_mtag.zmt_get_placement("zt_456562_3", "456562", "3" , "999" , "60" , "118" ,"1200", "630");

        // p456562_1.zmt_add_MultiSize(768,768,0);

        zmt_mtag.zmt_set_async();
        zmt_mtag.zmt_load(zmt_mtag);
      }

      var script = document.createElement("script");
      script.setAttribute("src", "http://s.f1.impact-ad.jp/client/xp1/fmos.js");
      document.getElementsByTagName("head")[0].appendChild(script);

      if(typeof zmt_mtag !='undefined' && typeof zmt_mtag.zmt_render_placement !='undefined') {
        zmt_mtag.zmt_render_placement(p456562_1);
      }
      if(typeof zmt_mtag !='undefined' && typeof zmt_mtag.zmt_render_placement !='undefined') {
        zmt_mtag.zmt_render_placement(p456562_2);
      }
      if(typeof zmt_mtag !='undefined' && typeof zmt_mtag.zmt_render_placement !='undefined') {
        zmt_mtag.zmt_render_placement(p456562_3);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
