# Technical screen: Developer Success Engineer

Your interviewer will provide API credentials. Each exercise is self-contained in its own folder.

---

# Exercise 1: Workflow trigger

### Customer email

**Subject:** Node.js workflow trigger not working

Hi Knock Support,

I'm trying to trigger my `welcome-flow` workflow from a Node.js script, but nothing happens when I run it. I've confirmed the workflow is active and committed in my development environment.

I was able to successfully trigger the workflow using Postman with Knock's API collection and by using the dashboard's test runner, so I know the workflow itself is working. But when I run my Node implementation, nothing fires.

I'm sure it's just user error on my end, but I can't figure out what I'm doing wrong. My code is in `exercise-1.js`. Can you help me spot the issue?

Thanks,
Alex

### Run the code

```bash
cd exercise-1
npm install
npm start
```

### After debugging
What additional improvements would you recommend for Alex's implementation?

---

# Exercise 2: Guides implementation

### Customer email

**Subject:** Guide not displaying in React app

Hi Knock team,

I'm implementing Knock guides in our React app. I created a guide that will show a feature announcement modal to all users when they log in. I've confirmed the guide is active in my development environment and eligible for all users on all pages. When I test via the API directly, I receive the guide as expected, so I know there are no eligibility or configuration issues on Knock's side.

But when I run my React implementation, the guide doesn't display.... I can't figure out what I'm doing wrong in my code.

Here's what I'm trying to achieve:
- Display the feature announcement modal on the dashboard for all users when they first log in
- Track engagement so users only see it once (don't show again after dismissal) and won't be bothered every time they come back to the dashboard

My implementation is in the `exercise-2` folder. Can you help me figure out what's wrong?

Thanks,
Jamie

### Setup

```bash
cd exercise-2
npm install
npm run dev
```

Opens at `http://localhost:5173`
