<script setup lang="ts">

</script>

<template>
  <a-typography class="typography">
    <a-typography-title>
      项目简介
    </a-typography-title>
    <a-typography-paragraph class="typography-paragraph">
      <strong>目标检测是计算机视觉领域的重要研究领域之一</strong>，它在很多领域中都得到了广泛应用。然而，目前主流的目标检测算法在保持高检测精度的同时，往往需要大量的计算资源，难以在资源受限场景中应用。为了解决这个问题，本项目采用轻量化检测模型——PaddlePaddle开发的<strong>PP-PicoDet算法</strong>。该算法在保持高检测精度的同时，使用特征金字塔网络提取不同尺度的特征图，进行特征融合和检测，具有快速推理速度和小模型大小，适用于资源受限场景如嵌入式设备和移动设备，实现高效目标检测。
    </a-typography-paragraph>
    <a-typography-paragraph class="typography-paragraph">
      该模型的一个显著特点是其所采用的<strong>数据集</strong>。其中，RDD2020路面病害数据集经过筛选和处理后，保留了具有代表性和优良质量的部分数据。同时，辅助数据集也被用于支持RDD2020数据集的使用和分析，包含更广泛的道路信息，如道路类型、路面材料等。这些数据集的选取和处理经过了专业的审核和验证，保证了其数据质量和可靠性，有助于提高分析结果的准确性和可信度。此外，这些数据集具有较强的泛化能力，不仅包含具体的道路病害信息，还包含相关的背景信息和上下文，可以支持对不同地区、不同类型的道路病害进行有效的分析和预测。
    </a-typography-paragraph>
    <a-typography-paragraph class="typography-paragraph">
      另一个显著特点是<strong>数据总量的大小</strong>。数据总量指在训练模型时所使用的数据集中数据的数量。数据总量越大，模型的训练可以覆盖更广泛的场景和情况，从而提高模型的泛化能力和准确性。当数据总量大时，可以使得模型学习到更多的特征和规律，从而能够更好地适应新的数据和情况。同时，数据总量大也能够减小因为数据采样和随机性带来的误差和偏差，提高模型的稳定性和可靠性。因此，该模型训练所使用的数据总量大，可以更加精准地对数据进行预测和分类，提高模型的效果和性能。
    </a-typography-paragraph>
    <a-typography-paragraph class="typography-paragraph">
      <a-typography-text bold>
        本项目的目标是基于PaddlePaddle开发的PP-PicoDet算法，使用RDD2020路面病害数据集和辅助数据集，训练一个高效的目标检测模型，实现对道路病害的自动检测和识别。该模型具有快速推理速度和小模型大小，适用于资源受限场景如嵌入式设备和移动设备，可以有效地提高道路病害检测的效率和准确性，为道路维护和管理提供技术支持和决策依据。
      </a-typography-text>
    </a-typography-paragraph>
  </a-typography>
</template>

<style scoped lang="less">

.typography {

  max-width: 75vw;
  &-paragraph {
    text-align: left;
    line-height: 1.8em;
  }
}
.typography > *{
  margin-bottom: 30px ;
  margin-top: 30px;
}

</style>