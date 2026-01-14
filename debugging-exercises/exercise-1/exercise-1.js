import { Knock } from "@knocklabs/node";

const KNOCK_API_KEY = YOUR_KNOCK_API_KEY_HERE;

// Initialize Knock client
const knock = new Knock(KNOCK_API_KEY);

// Send a welcome notification to a new user, called after user completes signup flow

async function sendWelcomeNotification(newUser, userName) {
  try {
    console.log(`📡 Sending welcome notification to user: ${newUser} \n`);

    // Trigger the welcome workflow
    const result = await knock.workflows.trigger("welcome-flow", {
      data: {
        recipients: newUser,
        userName: userName,
        welcomeMessage: "Welcome to our platform!",
        signupDate: new Date().toISOString()
      }
    });

    console.log("🎉 Workflow triggered successfully! \n");
    console.log("📋 Result:", result);

    return result;
  } catch (error) {
    console.error("❌ Error triggering workflow: \n", error);
    throw error;
  }
}




// ------------------------------------------------------------
// Example usage below - simulates a new user sign up flow
// Run npm start to see the result

const exampleUser = "new-user@example.com";
const exampleUserName = "Alex Chen";

sendWelcomeNotification(exampleUser, exampleUserName)
  .then(() => {
    console.log("\n✓ Notification sent successfully");
  })
  .catch((err) => {
    console.error("\n✗ Failed to send notification");
    process.exit(1);
  });
