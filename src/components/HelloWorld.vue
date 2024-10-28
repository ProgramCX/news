<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <el-button type="primary" icon="Delete">{{msg}}</el-button> -->
    <template v-for="(tag, index) in tags" :key="tag">
      <el-tag
        :closable="true"
        @close="closeTag(index)"
        style="margin-right: 10px"
        :checked="true"
        >{{ tag }}</el-tag
      >
    </template>
    <el-input
      style="width: 80px"
      v-if="show"
      v-model="inputValue"
      @keydown.enter="confirmContent"
      @blur="confirmContent"
      size="small"
    ></el-input>
    <el-button size="small" v-else @click="showInput">新建标签 +</el-button>
    <div>
      <el-radio-group v-model="radio">
        <el-radio-button label="淮南">淮南</el-radio-button>
        <el-radio-button label="天长">天长</el-radio-button>
        <el-radio-button label="庐江">庐江</el-radio-button>
        <el-radio-button label="合肥">合肥</el-radio-button>
        <el-radio-button label="上海">上海</el-radio-button>
      </el-radio-group>
    </div>

    <el-tag>选择的是：{{ radio }}</el-tag>

    <el-checkbox-group v-model="checkBox" @change="checkedChanged">
      <el-checkbox label="A">A</el-checkbox>
      <el-checkbox label="B">B</el-checkbox>
      <el-checkbox label="C">C</el-checkbox>
      <el-checkbox label="D">D</el-checkbox>
    </el-checkbox-group>

    <el-tag>{{ checkBoxValue }}</el-tag>
    <div>
      <el-switch 
    active-text="会员"
    inactive-text="非会员"
    active-color="#00FF00"
    inactive-color="#FF0000"
    v-model.number="switchVar"
    @click="switchClicked"
    :loading="switchLoading"></el-switch>
    </div>
    

    <div>
    <div>
      <el-input type="text" :show-word-limit="true" 
      placeholder="Input a domain" 
      v-model="textAdded"
      :clearable="true"
      prefix-icon=""
      :autosize="true">
      <template #prepend>https://</template>
      <template #append>.com</template>
      </el-input>
    </div>
    <el-tag>输入的是：{{ textAdded }}</el-tag>

      <el-skeleton :rows="5" :animated="true" :loading="loading">
        <p>{{ data }}</p>
      </el-skeleton>
    </div>
    
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    let data = ref("");
    let show = ref(false);
    let inputValue = ref("");
    let tags = ref(["苹果", "香蕉", "梨"]);
    let loading = ref(true);
    let radio = ref("淮南");
    let checkBox=ref([]);
    let checkBoxValue=ref("没有选择的项目");
    let textAdded=ref("");
    let opened=ref();
    let switchVar=ref(0);
    let switchLoading=ref(false);
    function closeTag(index) {
      tags.value.splice(index, 1);
    }
    function showInput() {
      show.value = true;
    }
    function confirmContent() {
      if (inputValue.value) {
        tags.value.push(inputValue.value);
      }
      show.value = false;
      inputValue.value = "";
    }
    function checkedChanged(){
      if(checkBox.value.length==0){
        checkBoxValue.value="没有选择项目";
        return;
      }
      var numsIncor="";
      for(var i=0;i<checkBox.value.length;i++){
        numsIncor+=checkBox.value[i]+(i+1==checkBox.value.length?'':",");
      }
      checkBoxValue.value="选择的是："+numsIncor;
    }
    function switchClicked(){
      switchLoading.value=true;
      setTimeout(()=>{
        switchLoading.value=false;
      },2000)
    }
    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
        data.value =
          "噫吁嚱，困乎倦哉!早八之难，难于上青天!蚕丛及鱼凫，入睡何疾然!尔来一时四十分，不与教材通人烟。前当黑板有高数，可以横绝作业巅。地崩山摧壮士死，然后作业答案相钩连。上有六张试卷之高标，下有作业难写之回川。学霸内卷尚不得过，躺平欲度愁挂科。学分何盘盘，百混九争萦校园。扪参历井仰胁息，以手抚桌坐长眠。问君早八何时还?畏途巉岩不可攀。但见迟鸟现教室，寻找座位课桌间。又闻子规啼夜月，愁空山。早八之难，难于上青天，使人听此露睡颜。连桌去台不盈尺，枯松倒挂压桌面。飞湍瀑流争喧豚，被点回答万壑雷。其险也如此，嗟尔高中之人胡为乎来哉!教室内卷而拥挤，一夫当关，万夫莫开。所坐或匪亲，没有座位坐。朝避迟到，夕避早退。磨牙吮血，内卷如麻。大学虽云乐，不如早还家。早八之难，难于上青天，侧身西望长呵欠!";
      }, 5000);
    });
    return {
      closeTag,
      showInput,
      confirmContent,
      show,
      inputValue,
      tags,
      data,
      loading,
      radio,
      checkBox,
      checkBoxValue,
      checkedChanged,
      textAdded,
      opened,
      switchVar,
      switchClicked,
      switchLoading,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tag {
  margin-top: 10px;
}
</style>
