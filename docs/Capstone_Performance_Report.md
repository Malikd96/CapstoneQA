
# Capstone Performance Test Report

**Project:** QA Capstone – AutomationExercise.com  
**Student:** Malik Davis  
**Date:** May 2025  
**Tools Used:** Apache JMeter 5.6.3  
**Environment:** Windows 11, Chrome




## 1. Objective
The objective of this performance test is to evaluate the API responsiveness and stability of the `/api/productsList` endpoint under concurrent user load using Apache JMeter.




## 2. Test Configuration

| Property                | Value                          |
|-------------------------|--------------------------------|
| Endpoint Tested         | `https://automationexercise.com/api/productsList` |
| Method                  | GET                            |
| Number of Virtual Users | 200                            |
| Ramp-Up Time            | 60 seconds                     |
| Duration                | ~2 minutes                     |
| Loop Count              | 1                              |




## 3. Results Summary

# Summary Report
| Metric              | Value           |
|---------------------|-----------------|
| # of Samples        | 200             |
| Avg. Response Time  | 367 ms          |
| Min. Response Time  | 131 ms          |
| Max. Response Time  | 1456 ms         |
| Standard Deviation  | 101.51 ms       |
| Throughput          | 1.7 requests/sec|
| Error Rate          | 0% *(after fix)*|





## 4. Graph & Visual Reports

### Graph Results (Line Plot)
- Average, Median, Throughput, and Deviation lines are stable.
- Visuals indicate consistent response times under load.

### Aggregate Report
- No failed requests post-configuration fix.
- 90th percentile: 426 ms  
- 99th percentile: 659 ms  





## 5. 🛠 Observations & Recommendations

- Initial test failed due to syntax error in domain (`https:// automation...` — space issue). Fixed for final run.
- Application handled up to 200 users with acceptable response times.
- To optimize: add caching or CDN if testing real backend traffic.
  