# Technical screen: Developer Success Engineer

### Setup instructions

Each exercise is self-contained in its own folder. Your interviewer will provide necessary API credentials.

### Exercise 1 (Node.js)

A standalone Node.js script for debugging workflow triggers.

```bash
cd exercise-1
npm install
npm start
```

### Exercise 2 (React app)

A React application implementing Knock guides with a custom modal component.

```bash
cd exercise-2
npm install
npm run dev
```

The app will start on `http://localhost:5173` (or another port if 5173 is busy).


# Exercise 1: Workflow trigger error

### Instructions

1. Read the customer email below.
2. Review and debug the implementation in `exercise-1.js`.
3. After debugging, consider additional improvements the customer might make.

### Commands
This is a standalone Node.js script that will execute and show you its output in your console.
```
cd exercise-1
npm install
npm start
```

### **Subject:** Workflow not triggering - no errors

Hi Knock Support,

I'm trying to trigger my welcome workflow when new users sign up, but nothing seems to happen. I checked my dashboard and confirmed that the `welcome-flow` workflow exists.

I've attached my code (exercise-1.js). Am I missing something obvious here?

Let me know if you need any other info!

Thanks,

Alex


### Additional improvements
Now that Alex is successfully triggering their workflow, do you have any other recommendations to improve their implementation?



# Exercise 2: Guides implementation

### Instructions

1. Read the customer email below.
2. Review the implementation (a react project) and resolve the issues noted by the customer.

### Commands
This is a React application that will run in your browser.
```
cd exercise-2
npm install
npm run dev
```
The app will start on `http://localhost:5173` (or another port if 5173 is busy).


### **Subject:** Guides implementation not working as expected

Hi Knock team,

I've been working on implementing Knock guides in our React application following your documentation. I've set up the providers and the guide controls, but I'm running into a bunch of errors.

I've attached my implementation in the `exercise-2` folder. I can't figure out what I'm doing wrong, but this is what I'm looking to achieve:
- Display a feature announcement modal on the dashboard.
- I want to track user engagement and make sure my user only sees the guide once... after they dismiss it I don't want to bug them again next time they log in!!

Let me know if you need any additional context.

Thanks,

Jamie
