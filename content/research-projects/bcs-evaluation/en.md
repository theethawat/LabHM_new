![Overview](/images/research-tikunami.png)

# Experimental Background & Objectives

While the number of dairy cattle farms has been decreasing year by year, the number of cattle per farm has been increasing. One of the farm operations that has not been automated is the evaluation of Body Condition Score (BCS). The current method relies on visual inspection and palpation, which places a significant burden on livestock farmers. Our objective is to develop automation technology in areas where it has not yet been widely adopted, thereby reducing labor burden and improving operational efficiency.

BCS is an indicator that evaluates the body fat accumulation of dairy cattle on a 5-point scale from 1 to 5. This value is an important indicator of a cow's nutritional and health status, but traditionally it has been evaluated by skilled technicians through visual inspection and palpation, which is subjective and time-consuming.

![Overview](/images/research-tikunami1.png)

# Research Methods

As shown in the figure above, we use a 3D camera to capture the cow's back and record the obtained data in Excel. Then, as preprocessing, we extract the cow region from the walking data of the dairy cattle and extract features for BCS evaluation (spine line, hip bone line, intersection points, etc.). Finally, we evaluate the BCS using a BCS estimation model.

The specific research methods are as follows:

- Collection of cow walking data using a 3D camera
- Extraction of cow regions and background removal using image processing technology
- Extraction of features related to cow body shape (spine curve, prominence of hip angles, depression of tail ridge, etc.)
- Estimation of BCS values using machine learning models
- Comparative verification with expert evaluations
- The table on the right shows an example of experimental results, indicating BCS evaluation values for five cows. The BCS values for cow numbers 1 to 5 are 2.73, 3.22, 3.48, 2.91, and 2.65, respectively, successfully quantifying the differences in body fat accumulation for each individual.

# Experimental Results

Research to date has confirmed that by utilizing depth information obtained from 3D cameras, we can accurately capture the body features of cows and estimate BCS with high accuracy. In particular, we have succeeded in building a highly practical system that enables stable evaluation even for walking cows.

In the future, we will continue to expand our dataset and improve our models to accommodate a wider range of environments and cattle breeds. In addition to BCS, we also aim to develop a comprehensive cattle health management system that integrates other health indicators such as lameness detection and estrus detection. Furthermore, we are considering building a more advanced feeding management support system by integrating with cloud systems to aggregate and analyze data from multiple farms.

# Value and Effects

BCS is closely related to feed efficiency, including feed intake and milk production. Additionally, cows living with extreme body types face many risks. By developing BCS evaluation automation technology, we can support herd health management and efficient farm management without placing a significant burden on farmers.

Specifically, the following effects are expected:

- Reduction and efficiency of labor hours
- Realization of objective and consistent evaluation
- Early detection of abnormalities through regular monitoring
- Optimization of feeding management based on data
- Improvement of productivity and reduction of economic losses
