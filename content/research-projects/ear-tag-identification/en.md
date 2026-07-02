![Overview](/images/research-simizu.png)

# Experimental Background & Objectives

Cattle identification allows for individual tracking and management of growth, health, and behavioral patterns. It also enables early detection of abnormal behavior and diseases. However, identification of cattle with uniform coat colors and patterns is difficult with conventional cameras. Therefore, our objective is to perform cattle identification using a 3D camera that can acquire distance information.

Conventional individual identification using RGB cameras had issues with decreased identification accuracy due to changes in lighting conditions and dirt on the cattle's body surface. By using 3D cameras, we aim to build a more stable individual identification system that is less affected by these environmental factors.

![Background](/images/research-simizu1.png)

# Experimental Environment

We conducted experiments using data collected from Miyazaki University's Sumiyoshi Field under agricultural-engineering collaboration. As shown in the figure above, we installed a 3D camera at the top of the cattle barn to capture the cows from above. This made it possible to capture three-dimensional features such as the shape and height of the cow's back.

The depth information obtained from the 3D camera is saved as a CSV file and utilized in subsequent processing. This method enables stable data collection that is not affected by lighting conditions or the cow's coat color.

![Environment](/images/research-simizu2.png)

# Research Methods

The flowchart for individual identification is shown. We detect the cow region from the CSV file containing distance information, extract features from the obtained cow region, and perform individual identification using machine learning.

The specific processing flow is as follows:

- Preprocessing of depth information obtained from 3D camera (noise removal, normalization)
- Separation of background and cow regions (threshold processing, region segmentation)
- Extraction of features related to the cow's 3D shape (back line, shoulder height, hip shape, etc.)
- Construction of individual identification model using machine learning algorithms
- Implementation of real-time identification system

# Experimental Results

The results compare the accuracy of individual identification using four machine learning classifiers (A-D). Classifier D achieved an accuracy rate of 95.0%, confirming that high-precision individual identification is possible.

In particular, it showed stable identification performance that is less affected by environmental factors such as changes in lighting conditions and dirt on the cow's body surface. It was also confirmed that high-accuracy identification is possible even for walking cows, making it a highly practical system.

![System Screenshot](/images/research-simizu3.png)

# Future Prospects

Based on the results of this research, we will continue to improve our system to accommodate a wider range of environmental conditions (outdoor, nighttime, etc.) and ear tag conditions (dirt, damage, etc.). We are also considering developing lightweight models to enable operation on mobile devices.

Furthermore, we are looking into developing a multimodal individual identification system that combines ear tag identification with other individual identification technologies (3D shape recognition, behavioral pattern analysis, etc.), aiming to build a more robust and reliable cattle management system. This research aims to reduce the burden on ranch workers through cameras and AI, contributing to SDG Goal 2 (Zero Hunger), Goal 8 (Decent Work and Economic Growth), and Goal 9 (Industry, Innovation and Infrastructure).
