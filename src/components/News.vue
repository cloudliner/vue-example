<template>
  <div class="news">
    <h1>{{ msg }}</h1>
    <h2>Head A</h2>
    <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>

    <p>ad (zt_{{ ad_slot_array[0] }}_1) &gt;&gt;</p>
    <div :id="('zt_' + ad_slot_array[0] + '_1')" style="display:show"> 
    </div>
    <p>&gt;&gt; ad</p>

    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
    <h2>Head B</h2>
    <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>

    <p>ad (zt_{{ ad_slot_array[0] }}_2) &gt;&gt;</p>
    <div :id="('zt_' + ad_slot_array[0] + '_2')" style="display:show"> 
    </div>
    <p>&gt;&gt; ad</p>

    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>

    <p>ad (zt_{{ ad_slot_array[1] }}_1) &gt;&gt;</p>
    <div :id="('zt_' + ad_slot_array[1] + '_1')" style="display:show"> 
    </div>
    <p>&gt;&gt; ad</p>

    <p>ad (zt_{{ ad_slot_array[1] }}_2) &gt;&gt;</p>
    <div :id="('zt_' + ad_slot_array[1] + '_2')" style="display:show"> 
    </div>
    <p>&gt;&gt; ad</p>

    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>

    <p>ad (zt_{{ ad_slot_array[2] }}_1) &gt;&gt;</p>
    <div :id="('zt_' + ad_slot_array[2] + '_1')" style="display:show"> 
    </div>
    <p>&gt;&gt; ad</p>

    <p>ad (zt_{{ ad_slot_array[2] }}_2) &gt;&gt;</p>
    <div :id="('zt_' + ad_slot_array[2] + '_2')" style="display:show"> 
    </div>
    <p>&gt;&gt; ad</p>

    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>

    {{news_showad(ad_slot_array)}}

  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      msg: 'News Page!',
      // 広告枠のセットの id の配列
      ad_slot_array: [(Math.floor(Math.random() * 1000000)),
                      (Math.floor(Math.random() * 1000000)),
                      (Math.floor(Math.random() * 1000000))]
    }
  },
  methods: {
    news_showad: function (ad_slot_array) {
      // 変数定義
      var zmt_mtag;
      // var p30657_1;
      // var p30657_2;

      // 広告枠定義
      window.zd_get_placements = function() {
        // 広告枠のセット単位でループする
        ad_slot_array.forEach(function(ad_slot_id) {
          zmt_mtag = window.zmt_get_tag(2117, ad_slot_id);
          zmt_mtag.zmt_set_charset("utf-8");
          window['p' + ad_slot_id + '_1'] = zmt_mtag.zmt_get_placement('zt_' + ad_slot_id + '_1', ad_slot_id, "1" , "999" , "60" , "118" ,"1200", "630");
          window['p' + ad_slot_id + '_2'] = zmt_mtag.zmt_get_placement('zt_' + ad_slot_id + '_2', ad_slot_id, "2" , "999" , "60" , "118" ,"1200", "630");

          zmt_mtag.zmt_set_async();
          zmt_mtag.zmt_load(zmt_mtag);
        });
      }

      // JS呼び出し設定
      var script = document.createElement("script");
      script.setAttribute("src", "https://s.f1.impact-ad.jp/sclient/tt3/fmos.js");
      document.getElementById("dac_ad_script_insert_point").appendChild(script);

      // 広告表示設定
      ad_slot_array.forEach(function(ad_slot_id) {
        if(typeof zmt_mtag !='undefined' && typeof zmt_mtag.zmt_render_placement !='undefined') {
          zmt_mtag.zmt_render_placement(window['p' + ad_slot_id + '_1']);
        }
        if(typeof zmt_mtag !='undefined' && typeof zmt_mtag.zmt_render_placement !='undefined') {
          zmt_mtag.zmt_render_placement(window['p' + ad_slot_id + '_2']);
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
