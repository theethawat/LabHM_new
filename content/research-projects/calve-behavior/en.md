![Overview](/images/research-nishiyama.png)

# Experimental Background & Objectives

As a challenge in the livestock industry, calves have immature immune systems and are prone to illness, making it important to constantly monitor their health status. Additionally, livestock farms are becoming larger in scale, increasing the burden on employees.

As shown in the graph below, the number of cattle raised per farm has been increasing year by year, from 75.0 head in 2014 to 107.6 head in 2023. With this scaling up, it has become difficult to monitor the health status of individual calves.

![Overview](/images/research-nishiyama1.png)

# Experimental Environment

![Overview](/images/research-nishiyama2.png)

We conducted experiments using data collected from Miyazaki University's Sumiyoshi Field under agricultural-engineering collaboration. We installed D455 cameras on the ceiling (about 3m above) of pens where calves are raised individually, recording their behavior continuously for 24 hours.

This installation method allows the entire body of the calf to be in view, enabling accurate capture of postural changes such as standing and sitting, as well as behavioral patterns. By installing cameras in multiple pens, it is also possible to simultaneously collect and comparatively analyze behavioral data from different individuals.

# Experimental Results

![Overview](/images/research-nishiyama3.png)

Using machine learning and image processing, we were able to determine with high accuracy whether a calf was standing or sitting. As shown in the confusion matrix above, for standing state detection, 5972 out of 5972 correct data were correctly identified, and for sitting state detection, 20055 were correctly identified.

Based on this high-precision posture detection, it is possible to detect changes in health status and abnormalities early by analyzing the calf's behavioral patterns (frequency and duration of standing and sitting, etc.). In particular, for common calf diseases such as otitis media and pneumonia, it was confirmed that changes in behavioral patterns appear 24-48 hours before onset.

# Value and Effects

This research aims to reduce the burden on livestock farmers by utilizing cameras and AI, contributing to SDG Goal 2 (Zero Hunger), Goal 8 (Decent Work and Economic Growth), and Goal 9 (Industry, Innovation and Infrastructure).

# Future Prospects

Through these initiatives, we aim to contribute to improving productivity and sustainable development of Japan's livestock industry.

For future prospects, we plan the following initiatives:

- Expansion of datasets and improvement of models to accommodate a wider range of diseases
- Implementation of temperature monitoring through combined use with thermographic cameras
- Addition of cough and respiratory sound detection functions through voice analysis
- Construction of a real-time processing system utilizing edge computing technology
- Development of an integrated management system for large-scale farms through integration with cloud systems
