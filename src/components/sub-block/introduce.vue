<template>
  <div class="container">
    <Team v-for="(team, index) in teams" :key="index" :title="team.title" :subtitle="team.subtitle" :right-text="team.rightText"/>

  </div>
</template>

<script>
import Team from "@/components/sub-block/introduce/team.vue";

export default {
  name: "introduce",
  components: {Team},
  setup() {
    const teams = [
      {
        title: "团队介绍",
        rightText: [
          {
            content: "我们的团队由",
            bold: false
          },
          {
            content: "董帅讲师领导",
            bold: true
          },
          {
            content: "成员均为2021级土木工程学院的杰出学生，具有多学科背景和卓越的学术成就。在",
            bold: false
          },
          {
            content: "董帅讲师的指导下",
            bold: true
          },
          {
            content: "团队深入研究视觉测量技术及其应用，掌握了该领域的先进理论和技术。成员之间的紧密合作和互补技能使我们在多项学术竞赛和科研项目中取得了显著成绩，展示了团队的创新能力和科研潜力。",
            bold: false
          }
        ]
      },
      {
        title: "指导老师",
        subtitle: "董帅老师",
        rightText: [
          {
            content: "董帅老师长期从事",
            bold: false
          },
          {
            content: "光测力学原理与方法以及基于视觉图像的结构变形测量方面研究",
            bold: true
          },
          {
            content: "主持国家自然科学基金青年项目、中国博士后科学基金面上项目、南方地区桥梁长期性能提升技术国家地方工程实验室开放基金等项目。作为研究骨干参与完成国家自然科学基金重大仪器研制项目、重点项目以及面上项目等课题多项。",
            bold: false
          }
        ]
      },
      {
        title: "项目负责人",
        subtitle: "万康贤",
        rightText: [
          {
            content: "项目负责人",
            bold: false
          },
          {
            content: "万康贤曾任土木学院2021级年级负责人 土木2110班团支书 综测排名专业第一",
            bold: true
          },
          {
            content: "具有较好的数学和力学基础，在第十六届“高教杯”全国大学生先进成图技术与产品信息建模创新大赛建筑类BIM创新应用赛道获得一等奖；在第十六届“高教杯”全国大学生先进成图技术与产品信息建模创新大赛获得建筑类团体一等奖；在第九届全国高校BIM毕业设计创新大赛F模块中获得一等奖。个人多项事迹多次被院、校及其它县级政府传媒机构报道。参加过多次活动与竞赛，有丰富的管理经验和强悍的人际交往能力，在政府机构进行过实习，对团队重大决策和战略制定有一定的了解基础。",
            bold: false
          }
        ]
      },
      {
        title: "项目工程师",
        subtitle: "李嘉俊",
        rightText: [
          {
            content: "项目工程师",
            bold: false
          },
          {
            content: "李嘉俊 本网站开发工程师 运维工程师 完成项目训练部署、APP开发等项目全栈技术开发。",
            bold: true
          },
          {
            content: "曾任土木学院学生会行政部副部长，曾获多项计算机竞赛奖项，具有较好的编程基础，熟练掌握多种编程语言。",
            bold: false
          }
        ]
      },
      {
        title: "项目参与者",
        subtitle: "姚燕英",
        rightText: [
          {
            content: "项目参与者",
            bold: false
          },
          {
            content: "姚燕英 曾任21级年级组副组长 土木2106班学委",
            bold: true
          },
          {
            content: "积极参与学校组织的各项竞赛，在第十六届“高教杯”全国大学生先进成图技术与产品信息建模创新大赛获得建筑类个人三等奖，参加过校桥梁创新大赛并获三等奖，校结构设计大赛并获二等奖，以及英语竞赛，力学竞赛。此外，在大一学年军训期间担任军训负责人，并获得“军训先进个人”称号。积极组织过班级和学院的各项活动，比如班级团建，招募抗疫志愿者，读书分享会等。",
            bold: false
          }
        ]
      },
      {
        title: "项目参与者",
        subtitle: "罗文静",
        rightText: [
          {
            content: "项目参与者",
            bold: false
          },
          {
            content: "罗文静 智建专业学业成绩第三",
            bold: true
          },
          {
            content: "具有较好的数学与力学基础。曾任21级年级组宣传部部长，党建中心宣传部任职，具备良好的文字编辑能力。在第九届全国高校BIM毕业设计创新大赛F模块中获得一等奖，参与了大学生桥梁创作大赛并获得特等奖，寒假参与了“万桥飞架”社会实践活动，作品获得A等。",
            bold: false
          }
        ]
      },
      {
        title: "项目参与者",
        subtitle: "刘蕊荣",
        rightText: [
          {
            content: "项目参与者",
            bold: false
          },
          {
            content: "刘蕊荣 曾任工力2102班团支书 专业成绩排名第二",
            bold: true
          },
          {
            content: "具有较好的力学和数学基础，获得红色桥梁调研项目优秀团队一等奖，第十八届结构设计大赛校赛三等奖，第十八届力学竞赛校级一等奖，“军训优秀个人”称号。此外，还积极参加了学校举行的纸桥大赛、抗疫志愿活动等并组织主持了土木学院“暖冬行动”以及数场班级班会。",
            bold: false
          }
        ]
      }

    ];

    return { teams };

  }
}
</script>

<style scoped>
.container {
  width: 100%;
}
.container > *{
  width: 100%;
  height: 850px;
}

</style>