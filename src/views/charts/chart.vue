<template>
    <div class="app">
        <div class="charts-box">
            <qiun-vue-ucharts type="column"   :opts="opts"
                :chartData="chartData" />
            <qiun-vue-ucharts type="pie" tooltipFormat="tooltipDemo1" :opts="optsPie" :chartData="chartData1" />
        </div>
    </div>
</template>
<script setup>
import qiunVueUcharts from '@qiun/vue-ucharts'
import {
    ref,
    computed,
    reactive,
    toRefs,
    getCurrentInstance,
    onMounted,
} from "vue";

let optsArr = reactive({
    opts: {},
    optsPie: {},
    chartData: {
        categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
        series: [
            {
                name: "目标值",
                data: [35, 36, 31, 33, 13, 34]
            }
        ]
    },
    chartData1: {
        series: [
            {
                data: [{ "name": "乳腺恶性肿瘤", "value": 100, }, { "name": "乳腺恶性肿瘤", "value": 35, }]
            }
        ]
    }
})
optsArr.optsPie = {
    timing: "easeOut",
    duration: 1000,
    rotate: false,
    rotateLock: false,
    color: ["#5B8FF9", "#5AD8A6"],
    padding: [5, 5, 5, 5],
    fontSize: 13,
    fontColor: "#666666",
    dataLabel: true,
    dataPointShape: true,
    dataPointShapeType: "solid",
    touchMoveLimit: 60,
    enableScroll: false,
    enableMarkLine: false,
    legend: {
        show: true,
        position: "bottom",
        float: "center",
        padding: 5,
        margin: 5,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        fontSize: 13,
        fontColor: "#666666",
        lineHeight: 11,
        hiddenColor: "#CECECE",
        itemGap: 10
    },
    extra: {
        pie: {
            activeOpacity: 0.5,
            activeRadius: 10,
            offsetAngle: 0,
            labelWidth: 15,
            border: true,
            borderWidth: 3,
            borderColor: "#FFFFFF",
            customRadius: 0,
            linearType: "none"
        },
        tooltip: {
            showBox: true,
            showArrow: true,
            showCategory: false,
            borderWidth: 0,
            borderRadius: 0,
            borderColor: "#000000",
            borderOpacity: 0.7,
            bgColor: "#000000",
            bgOpacity: 0.7,
            gridType: "solid",
            dashLength: 4,
            gridColor: "#CCCCCC",
            boxPadding: 3,
            fontSize: 13,
            lineHeight: 20,
            fontColor: "#FFFFFF",
            legendShow: true,
            legendShape: "auto",
            splitLine: true,
            horizentalLine: false,
            xAxisLabel: false,
            yAxisLabel: false,
            labelBgColor: "#FFFFFF",
            labelBgOpacity: 0.7,
            labelFontColor: "#666666"
        }
    }
}



//这里的 opts 是图表类型 type="column" 的全部配置参数，您可以将此配置复制到 config-ucharts.js 文件中下标为 ['column'] 的节点中来覆盖全局默认参数。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
optsArr.opts = {
    timing: "easeOut",
    duration: 1000,
    rotate: false,
    rotateLock: false,
    color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
    padding: [15, 15, 0, 5],
    fontSize: 13,
    fontColor: "#666666",
    dataLabel: true,
    dataPointShape: true,
    dataPointShapeType: "solid",
    touchMoveLimit: 60,
    enableScroll: false,
    enableMarkLine: false,
    legend: {
        show: true,
        position: "bottom",
        float: "center",
        padding: 5,
        margin: 5,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        fontSize: 13,
        fontColor: "#666666",
        lineHeight: 11,
        hiddenColor: "#CECECE",
        itemGap: 10
    },
    xAxis: {
        disableGrid: true,
        disabled: false,
        axisLine: true,
        axisLineColor: "#CCCCCC",
        calibration: false,
        fontColor: "#666666",
        fontSize: 13,
        lineHeight: 20,
        marginTop: 0,
        rotateLabel: false,
        rotateAngle: 45,
        itemCount: 5,
        boundaryGap: "center",
        splitNumber: 5,
        gridColor: "#CCCCCC",
        gridType: "solid",
        dashLength: 4,
        gridEval: 1,
        scrollShow: false,
        scrollAlign: "left",
        scrollColor: "#A6A6A6",
        scrollBackgroundColor: "#EFEBEF",
        title: "",
        titleFontSize: 13,
        titleOffsetY: 0,
        titleOffsetX: 0,
        titleFontColor: "#666666",
        format: ""
    },
    yAxis: {
        data: [
            {
                min: 0
            }
        ],
        disabled: false,
        disableGrid: false,
        splitNumber: 5,
        gridType: "solid",
        dashLength: 8,
        gridColor: "#CCCCCC",
        padding: 10,
        showTitle: false
    },
    extra: {
        column: {
            type: "group",
            width: 30,
            activeBgColor: "#000000",
            activeBgOpacity: 0.08,
            seriesGap: 2,
            categoryGap: 3,
            barBorderCircle: false,
            linearType: "none",
            linearOpacity: 1,
            colorStop: 0,
            meterBorder: 1,
            meterFillColor: "#FFFFFF",
            labelPosition: "outside"
        },
        tooltip: {
            showBox: true,
            showArrow: true,
            showCategory: false,
            borderWidth: 0,
            borderRadius: 0,
            borderColor: "#000000",
            borderOpacity: 0.7,
            bgColor: "#000000",
            bgOpacity: 0.7,
            gridType: "solid",
            dashLength: 4,
            gridColor: "#CCCCCC",
            boxPadding: 3,
            fontSize: 13,
            lineHeight: 20,
            fontColor: "#FFFFFF",
            legendShow: true,
            legendShape: "auto",
            splitLine: true,
            horizentalLine: false,
            xAxisLabel: false,
            yAxisLabel: false,
            labelBgColor: "#FFFFFF",
            labelBgOpacity: 0.7,
            labelFontColor: "#666666"
        },
        markLine: {
            type: "solid",
            dashLength: 4,
            data: []
        }
    }
}
function getIndex(val,index) {
    console.log(val, "val")
    console.log(index, "index")
 

}
const { opts, optsPie, chartData, chartData1 } = toRefs(optsArr);


</script>