![Overview](/images/research-uchikura.png)

# Research Background & Objectives

Japan's aging population is increasing, and the number of elderly people requiring long-term care is also rising. Approximately 24% of long-term care cases are associated with gait-related problems such as joint diseases, fractures, and falls. Therefore, early detection of gait deterioration is important for fall prevention and health management.

The goal of this research is to extract gait features from walking videos captured by ordinary RGB cameras and use these features to assess a person's walking condition in a non-contact and quantitative manner.

# Research Methods

The proposed system performs the following steps:

- Person Detection and Tracking
- Pose Estimation using a custom 19-keypoint body model
- Walking Segment Detection based on hip movement
- Extraction of 12 Gait Features
- Gait Evaluation and Scoring based on predefined thresholds

# Experimental Setup

Two RGB cameras were used to record walking from both the front and side perspectives during the experiment, which was set up at a commercial location in Higashi-Osaka, Japan. Five older people in their 80s are the experiment's aim.

![Experimental Setup](/images/research-uchikura1.png)

# Experimental Results

Heel-strike detection variability was considerably decreased using a combined heel-and-toe detection approach. The computed stride lengths and walking speeds were quite similar to age-group norms. These outcomes confirmed the suggested method's efficiency.

Together with a thorough gait score that incorporates all twelve gait characteristics, a three-level fall-risk evaluation based on body-axis tilt angle (Safe/Caution/Dangerous) was created. This made it possible to categorize walking situations into four grades (A–D).

# Future Prospects

The study demonstrated that ordinary RGB cameras can be used to automatically extract gait characteristics and evaluate walking conditions. The proposed system enables non-contact gait monitoring and may help with early detection of abnormal gait patterns, fall-risk assessment, and long-term health monitoring for older adults.
