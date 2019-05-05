<template>
  <div class="statistics">
    <div class="top">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="icon user">
            <i class="el-icon-s-custom"></i>
          </div>
          <div class="title">
            <span>495</span>
            <span>New Users</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="icon sales">
            <i class="el-icon-price-tag"></i>
          </div>
          <div class="title">
            <span>947</span>
            <span>Sales</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="icon order">
            <i class="el-icon-shopping-cart-2"></i>
          </div>
          <div class="title">
            <span>328</span>
            <span>New Order</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="icon total">
            <i class="el-icon-s-data"></i>
          </div>
          <div class="title">
            <span>10328</span>
            <span>Total Profit</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="chart">
      <el-row :gutter="20">
        <el-col :span="14">
          <div class="share"></div>
        </el-col>
        <el-col :span="10">
          <div class="proportion"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="category"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'statistics',
  data() {
    return {
    }
  },
  methods: {
    setCategory() {
      let echart = this.$echarts.init(document.querySelector('.category'), 'light')
      echart.setOption({
        title: {
          text: '当月订单成交情况',
          subtext: '纯属虚构'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data: ['成交', '失效', '退单']
        },
        xAxis: [
          {
            type : 'category',
            boundaryGap : false,
            data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '成交',
            type: 'line',
            smooth: true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [10, 12, 21, 54, 260, 830, 710, 30, 182, 434, 791, 390, 30, 10, 1320, 1132, 601, 234, 120, 90, 20, 99, 65, 76, 96, 48, 39, 79, 196, 67, 79]
          },
          {
            name: '失效',
            type: 'line',
            smooth: true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [1320, 1132, 601, 234, 120, 90, 20, 59, 75, 19, 10, 12, 21, 54, 260, 830, 710, 30, 182, 434, 791, 390, 30, 10, 88, 67, 49, 138, 49, 93, 88]
          },
          {
            name: '退单',
            type: 'line',
            smooth: true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [30, 182, 434, 791, 390, 30, 10, 1320, 1132, 601, 234, 120, 90, 20, 59, 75, 91, 10, 12, 21, 54, 260, 830, 710, 500, 263, 199, 253, 300, 169, 66]
          }
        ]
      })
    },
    // 类额占比饼图
    setProportion() {
      let echart = this.$echarts.init(document.querySelector('.proportion'), 'light')
      echart.setOption({
        title: {
          text: '类额占比',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '类额占比',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: [
              {value: 146813, name: '电子产品'},
              {value: 564862, name: '生鲜'},
              {value: 256783, name: '生活用品'},
              {value: 635478, name: '服装'},
              {value: 65789, name: '家电'},
              {value: 45681, name: '化妆品'},
              {value: 568475, name: '食品'}
            ]
          }
        ]
      })
    },
    // 绘制销售份额占比
    setShart() {
      let echart = this.$echarts.init(document.querySelector('.share'))
      echart.setOption({
        title: {
          text: '当月销售份额',
          subtext: '纯属虚构'
        },
        tooltip: {},
        xAxis: {
          data: ['电子产品', '生鲜', '生活用品', '服装', '家电', '化妆品', '食品']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [146813, 564862, 256783, 635478, 65789, 45681, 568475],
            itemStyle: {
              normal: {
                barBorderRadius: [3, 3, 0, 0],
                color: '#bfc2cd',
              }
            }
          }
        ]
      })
    }
  },
  mounted() {
    this.setShart()
    this.setProportion()
    this.setCategory()
  }
}
</script>

<style lang="scss" scoped>
.statistics{
  overflow-y: auto;
}
.top{
  width: 100%;
  margin-bottom: 20px;
  clear: both;
  .icon{
    float: left;
    width: 40%;height: 100px;
    font-size: 51px;line-height: 100px;
    text-align: center;color: #fff;
    border-radius: 4px 0 0 4px;
  }
  .user{
    background-color: #6ccac9;
  }
  .sales{
    background-color: #ff6c60;
  }
  .order{
    background-color: #f8d347;
  }
  .total{
    background-color: #57c8f2;
  }
  .title{
    float: left;
    width: 60%;height: 100px;
    text-align: center;color: #c6cad6;
    background-color: #fff;
    border-radius: 0 4px 4px 0;
    span{
      display: block;
    }
    span:nth-child(1) {
      padding-top: 21px;
      font-size: 40px;
    }
    span:nth-child(2) {
      font-size: 13px; 
    }
  }
}
.chart{
  width: 100%;height: 430px;
  .share{
    width: 100%;height: 430px;
  }
  .proportion{
    width: 100%;height: 430px;
  }
  .category{
    width: 100%;height: 430px;
  }
}
</style>
