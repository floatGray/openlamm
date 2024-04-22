---
title: Datasets
---

## Datasets

LAMM supports several datasets (up to ~300k 2D and 90k 3D instruction tuning datasets and 25 benchmarking datasets). You can download them and organize them following here.

### Instruction Tuning Datasets

| Data Source | Supported Tasks            | Meta File                                                                                      |
| ----------- | -------------------------- | ---------------------------------------------------------------------------------------------- |
| MS-COCO     | 2D Det. / 2D Cap. / 2D VQA | daily_dialogue_49k / detailed_description_49k / vision_task_dialogue_46k / coco_detection_110k |
| Bamboo      | 2D Det. / 2D Cls. / 2D VQA | factual_knowledge_dialogue_42k / vision_task_dialogue_46k                                      |
| Locount     | 2D Counting                | vision_task_dialogue_46k                                                                       |
| TextVQA     | 2D VQA                     | vision_task_dialogue_46k                                                                       |
| ScanNet     | 3D Cls. / 3D Cap. / 3D VQA | scan2inst_train                                                                                |
| 3RScan      | 3D VQA / 3D Cap. / 3D Det. | LAMM_3dinstruct_10k                                                                            |
| ShapeNet    | 3D Cls.                    | LAMM_3dinstruct_10k                                                                            |
