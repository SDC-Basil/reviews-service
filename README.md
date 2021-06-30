# reviews-service

A 2 week sprint architecting the reviews service of an e-commerce sites back end to handle web scale traffic. 

This sprint started with the ETL process of over 13 million lines of csv. Using MongoDB and its aggregation pipeline feature, I was able to create a collection that housed reviews based off product id. Considerations with indexing and denormalizing data were made to allow for quicker document retrieval. Shown below are the results of a stress test. A running instance of the service was hit with 1000 requests per second for a minute on 250,000 different product ids. Results showed an average response time of 5.138 seconds. Further considerations were made to improve this time.

![1000 clients every second for 1 minute](https://user-images.githubusercontent.com/64051221/123978827-2dafa000-d98e-11eb-9b99-26cdbc1d198f.png)


---
Knowing that this was a read heavy service and that write requests would already take longer because of denormalization, redis was used to further increase response time at the expense of data not always being current. Shown below is the same service but with redis implemented. average response time reached 1.678 seconds for a test that ran 1000 client requests every second for a minute. 

<img width="1280" alt="reviews service with redis 1000 clients:sec" src="https://user-images.githubusercontent.com/64051221/123978804-28eaec00-d98e-11eb-8734-3633e842e891.png">

## Loader Results
- Loader was set to handle 1000 requests per second for 1 minute.
---

## Technologies Used
> Back end
- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [docker](https://www.docker.com/)
- [AWS EC2](https://aws.amazon.com/?nc2=h_lg)
- [redis](https://redis.io/)
- [MongoDB, Mongoose](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_united_states_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624338&gclid=Cj0KCQjw5uWGBhCTARIsAL70sLLidNVp90EnWq54UKwGtqnlq2IJaDgx4yEcHFP8fg8JWsxPCWQEyZgaAoibEALw_wcB)

---
