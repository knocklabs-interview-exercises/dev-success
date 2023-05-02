# Part two: implementing Knock (1 hour)

In this exercise, we want to add Knock to a pre-built application. The goal here isn't just integrating and setting up Knock but is to look at and comment on the process of doing so from a developer's perspective. With that goal in mind, we want you to create a **friction log** along the way that documents your experience and **makes suggestions for improvements to the documentation and product experience**.

The friction log can be a document you write in whatever software you like. You can mark it up with screenshots or whatever else you find helpful along the way. Please feel free to be as opinionated and critical as you like!

The sample application is written in Next JS (React) and Node. Some of the base implementation has been provided to you.

## Requirements

**Add an in-app notification feed**

We want to display an in-app feed of notifications in our sample application so that every time a user types a message and clicks "Send notification" the notification is sent to the in-app feed to be displayed as a popover.

The notification template should be:

```
Here's a new notification from **{{ actor.name }}**

> {{ message }}
```

## Setting up the sample application

The app is contained in the `notify-app` directory.

- Run `npm install` to pull the dependencies
- Run `npm run dev` to start the application
- Visit `localhost:3000` in your browser

## What you'll need to complete the exercise

- [A Knock account](https://knock.app) (there's a free developer plan to get started)
- A configured Knock in-app feed channel
- A Knock notification workflow (`send-message`) that sends a notification to an in-app feed.

## Quick links

- [Documentation](https://docs.knock.app)
- [In-app feed documentation](https://docs.knock.app/in-app-ui/react/overview)
- [Live in-app feed demo](https://knock-in-app-notifications-react.vercel.app/)
