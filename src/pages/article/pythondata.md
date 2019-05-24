# 技术分析

- 数据来源：随机生成
- 数据总量：1000
- 运行环境：Python 3.6

---

## 引用所需要的 python 库

```python
import csv
import time
import random
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib as mpl
```

---

## 解决中文乱码

```python
mpl.rcParams['font.sans-serif'] = ['SimHei']
mpl.rcParams['axes.unicode_minus'] = False

```

---

 ##  创建 csv 并数据写入 csv

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/writerow.png)

---

## 读取 csv 中的数据

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/read.png)

---

## 绘制折线图（**BrokenLine**）

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/brokenline.png)

---

## 绘制柱状图（**Columnar**）

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/columnar.png)

---

## 统计涨幅最大的两个月份写入 Text

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/text.png)

---

## 统计四个季度的营业额分布情况（**Pie**）

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/pie.png)

---

# 数据分析

- 每种商品每天的销量统计
  ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/showbrokenline.png)
- 每种商品每月的销售额
  ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/showcolumnar.png)
- 每种商品每个季度的销售额
  ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/showpie.png)
