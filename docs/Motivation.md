# Motivation

Small Improvements builds a product that makes feedback happen at companies. The software enables a company and its people to grow with feedback and objectives. It is a continuous loop between giving feedback and striving towards a goal. It allows you to grow as an individual in a company yet helps the company to focus on long term objectives.

Companies that are using Small Improvements range from 20 to 2000 users. When so many people set up short and long term objectives or write feedback about each other, a lot of data is available and needs to be displayed. In Small Improvements we are using lists and tables to make the data accessible. Our customers are keen to explore this data, that's why there needs to be an approach to make this data accessible by adding a rich set of features on top of just displaying data.

Back in the days, Small Improvements migrated from Angular to React. The migration came with the drawback that many of the components had to be re-written. Thus the way to show a lot of data in a table or list would be a requirement in React too.

In Angular, Small Improvements had a table component to show the data and to access it with filtering, sorting etc. However, it was a rigid implementation that nobody wanted to touch anymore. Basically, like you would have been used in Angular, it came with one monstrousness configuration object to show a table component.

In React, we wanted to make it better. According to the React way of doing things, we wanted to keep it composable, reusable and simple in its usage. We came up with a solution for ourselves to make the data available with all desired functionalities. Since we were convinced that the solution would be beneficial for everyone, we wanted to open source it.
