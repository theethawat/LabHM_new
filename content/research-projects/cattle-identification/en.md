![Overview](/images/research-siihara.png)

# Experimental Background & Objectives

Cattle identification allows for individual tracking and management of growth, health, and behavioral patterns. It also enables early detection of abnormal behavior and diseases. However, identification of cattle with uniform coat colors and patterns is difficult with conventional cameras. Therefore, our objective is to perform cattle identification using a 3D camera that can acquire distance information.

Conventional individual identification using RGB cameras had issues with decreased identification accuracy due to changes in lighting conditions and dirt on the cattle's body surface. By using 3D cameras, we aim to build a more stable individual identification system that is less affected by these environmental factors.

# Experimental Environment

![CSV Save](/images/research-siihara1.png)

We conducted experiments using data collected from Miyazaki University's Sumiyoshi Field under agricultural-engineering collaboration. As shown in the figure above, we installed a 3D camera at the top of the cattle barn to capture the cows from above. This made it possible to capture three-dimensional features such as the shape and height of the cow's back.

The depth information obtained from the 3D camera is saved as a CSV file and utilized in subsequent processing. This method enables stable data collection that is not affected by lighting conditions or the cow's coat color.

# Research Methods

![Flowchart](/images/research-siihara2.png)
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

![Results](/images/research-siihara3.png)

# Future Prospects

Based on the results of this research, we will continue to expand our dataset and improve our models to accommodate a wider range of environments and cattle breeds. In addition to individual identification, we also aim to develop a comprehensive cattle health management system that integrates other health indicators such as lameness detection through gait pattern analysis and BCS evaluation through body shape tracking.

Furthermore, we are considering building a real-time processing system utilizing edge computing technology and developing an integrated management system for large-scale farms through integration with cloud systems. Through these efforts, we aim to contribute to improving productivity and sustainable development of Japan's dairy industry. This research aims to contribute to SDG Goal 2 (Zero Hunger), Goal 8 (Decent Work and Economic Growth), and Goal 9 (Industry, Innovation and Infrastructure).
