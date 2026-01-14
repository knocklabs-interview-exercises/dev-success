# Proctoring guide + answer key
## Interviewer guide
### Interview prep
Ahead of the interview: 
1. Sign into `dse-technical-screen` so you are ready to share (development) keys. 
2. At the beginning of the interview, you'll share the keys and ask the candidate to add them to the project.
3. After the interview, rotate the keys.

### Evaluation

- The goal is to confirm general familiarity and comfort with code and to understand how candidates think about technical problems. 
- Candidates are not expected to have Knock-specific product knowledge and we should guide them in the right direction when appropriate.
- In a 30 minute interview, it's unlikely that all candidates will make it to the very end of each exercise. Although doing so would be a strong favorable indicator, the inability to get to the end isn't inherently a negative indicator. Consider how the candidate addressed the broken code:
    - What did they consider as potential issues?
    - How did they evalutate those considerations?
    - How did they utilize resources?
    - How did they interact with you? With the Knock docs?

## Opening script
###  Expectations for candidate

- You'll work through customer support scenarios where you'll need to review customer code and identify issues. 
- The objective is to understand how you think through problems, so think out loud as much as possible.
- We don't expect you to  be a software engineer or be an expert on Knock's product. 
- This is a collaborative exercise. Feel free to think out loud, ask questions, and use any resources you'd normally use when helping a customer.
- **Before we start**: If you have AI autocomplete turned on, please turn it off. 

### Resources to use

- **Knock Documentation**: https://docs.knock.app
- **Google** 
- **LLMs** (Ask questions rather than asking the LLM to solve it for you.)

### Getting started steps:

1. Share the repo and have the candidate clone it.
2. Share public and secret keys from the development environment of the `dse-technical-screen` account. 
3. Instruct the candidate to update the `.env` files provided in the project -- there's a file per exercise.
4. In ../exercise-2/src/App.jsx, instruct the candidate to add a unique user ID. This could be a UUID you send them, or some random combination of numbers and their name. The point of this is to avoid any user IDs already in the account and ensure the guide isn't already archived. 

Note: The VITE_ prefix in exercise-1 is intentional so it's easy to copy and paste the keys and minimize setup time. 

## Answer key

### Exercise 1 

#### Issues
1. Using a public key
2. Recipient list in the wrong location
3. Improperly formatted recipient list

#### Additional recommendations
- Implement idempotency keys
- Inline identification
- Use UUIDs instead of emails for user IDs
- Passing information which _should_ be stored on the recipient or in the template.

If the candidate doesn't offer anything, nudge them towards one to gauge their reaction. For example, the current implementation assumes the new user already exists in Knock with an email address (only passing email as ID).

### Exercise 2
1. Render the guide
- Typo in App.jsx: `KnockGuidesProvider` should be `KnockGuideProvider`
- `KnockGuideProvider` is missing the channel ID: `channelId={KNOCK_GUIDE_CHANNEL_ID}`
- User authentication: Formatting issue. Should be `user={ currentUser }` or a version thereof.

2. User doesn't see it after dismissal
- The implementation is missing a call to `markAsArchived`. Update the [X] button: `onClick={() => step.markAsArchived()}`. 


## Reference

### Knock test account identifiers

#### Account
- `dse-technical-screen`

#### Workflow  (development only)
- Key: `welcome-flow`

#### Guides (development only)
- Guide type: `custom-modal`
- Guide key: `feature-announcement`



## Structure

```
debugging-exercises/
├── exercise-1/
│   ├── package.json       # Dependencies
│   ├── exercise-1.js      # Code to review
└── exercise-2/
    ├── package.json       # Dependencies
    ├── .env               # API credentials
    └── src/ 
        ├── App.jsx        # Main application component
        ├── CustomModal.jsx # Custom modal component
        ├── main.jsx       # React entry point
        └── styles.css     # Application and modal styles
```