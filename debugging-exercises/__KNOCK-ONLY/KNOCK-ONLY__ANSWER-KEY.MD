# Proctoring guide + answer key
## Opening script
###  Expectations

- You'll work through customer support scenarios where you'll need to review customer code and identify issues. 
- The objective is to understand how you think through problems, so think out loud as much as possible.
- We don't expect you to be an expert on Knock's product or have a software engineer level understanding of code.
- This is a collaborative exercise. Feel free to think out loud, ask questions, and use any resources you'd normally use when helping a customer.
- **Before we start**: If you have AI autocomplete turned on, please turn it off. 

### Resources you can use

- **Knock Documentation**: https://docs.knock.app
- **Google** 
- **LLMs** (Ask questions rather than asking the LLM to solve it for you.)

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
- `KnockGuideProvider` is missing the channel ID: `channelId={KNOCK_GUIDE_ID}`
- The `readyToTarget` prop is set to `false`, should be `true`.
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