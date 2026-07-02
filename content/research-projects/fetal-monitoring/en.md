![Overview](/images/research-tunn.png)

# Experimental Background & Objectives

The aim is to solve technical challenges in the analysis of fetal heart rate variability (FHRV), including accuracy degradation due to noise and outliers in the data, lack of real-time analysis, and the unexplored relationship between FHRV and umbilical blood gas parameters.

By developing a user-friendly fetal monitoring system for healthcare professionals and providing complex physiological data in an easy-to-understand manner, we support quick and accurate decision-making. This enables early detection of hypoxia and acidosis and appropriate medical intervention, contributing to improved prognosis for mothers and babies.

## System Overview

As shown in the figure above, this system acquires fetal heart rate variability (FHRV) data from scalp electrodes and analyzes it on a processing PC. The learning model predicts parameters (pH, PCO2, PO2, HCO3, BE) that can only be obtained through umbilical cord blood gas analysis at the time of delivery.

These parameters are important for evaluating the respiratory status of the fetus and discovering potential complications. By building a model that considers the relationship between the electrocardiogram and each parameter, it becomes possible to estimate the fetal condition in real-time.

As shown at the bottom of the system, knowing pH, PCO2, PO2, HCO3, and BE before delivery improves preparation for risks and emergencies associated with childbirth. Additionally, since data is processed in real-time and results are immediately available, doctors and medical staff can make quick and appropriate decisions.

![System Overview](/images/research-tunn1.png)

# Research Methods

A scalp electrode is attached to the fetus to acquire fetal heart rate variability data. Subsequently, a model is constructed that considers the relationship between the electrocardiogram and each parameter (pH, pCO2, pO2, HCO3, BE) to estimate the fetal condition.

Specifically, we are advancing the research through the following steps:

- Collection and preprocessing of fetal heart rate data (noise removal, outlier processing)
- Extraction of heart rate variability parameters (time domain, frequency domain, nonlinear analysis)
- Correlation analysis with umbilical blood gas parameters
- Development of fetal condition estimation algorithm using machine learning model
- Construction of real-time analysis system
- Clinical evaluation and improvement

# Experimental Results

In research to date, we have found significant correlations between fetal heart rate variability and umbilical blood gas parameters, and the estimation accuracy of fetal condition using machine learning models has also improved. In particular, analysis using entropy indicators has been suggested to be effective for early detection of fetal hypoxia.

This research aims to promote overcoming the synergy of advanced maternal age and low birth rate, and to contribute to SDG Goal 3 (Good Health and Well-being), Goal 9 (Industry, Innovation and Infrastructure), and Goal 10 (Reduced Inequalities). Additionally, through technological innovation, it contributes to improving medical access.

# Future Prospects

In the future, we will collect more clinical data, improve model accuracy, and develop a real-time monitoring system that can be actually used in medical settings. We are also considering physiological state simulation of the fetus using digital twin technology, aiming to build a more comprehensive fetal health management system.
