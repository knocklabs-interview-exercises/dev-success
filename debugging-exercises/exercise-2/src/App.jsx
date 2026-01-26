import { KnockProvider, NocGuideProvider } from '@knocklabs/react'
import { CustomModal } from './CustomModal'

// App configuration
const KNOCK_PUBLIC_API_KEY = import.meta.env.VITE_KNOCK_PUBLIC_API_KEY
const KNOCK_GUIDE_CHANNEL_ID = "a6c9db2b-5cf0-4f8d-8311-e3f75b1fb997";

// 🚨 Create a unique user ID to ensure the guide is fresh. 🚨
const UNIQUE_USER_ID = "update_this_before_running";

// Mock current user 
const currentUser = {
  id: UNIQUE_USER_ID,
  name: 'Sarah Johnson',
  email: 'sarah@company.com'
}

function App() {
  return (
    <KnockProvider
    // Initialize Knock provider and authenticate the user
      apiKey={KNOCK_PUBLIC_API_KEY}
      user={currentUser.name}
    >
      <NocGuideProvider
      // Initialize Knock guide provider, connect to guide channel ID
        readyToTarget={true}
        listenForUpdates={true}
        trackLocationFromWindow={true}
      >
        <div className="app-container">
          <header className="app-header">
            <h1 className="app-title">My dashboard</h1>
            <div className="app-user-info">
              <span>{currentUser.name}</span>
            </div>
          </header>

          <main className="app-main">
            <h2>Welcome to your dashboard</h2>
            <p>Here you can view your key metrics and recent activity.</p>
          </main>

          <CustomModal />
        </div>
      </NocGuideProvider>
    </KnockProvider>
  )
}

export default App
