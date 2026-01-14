import { KnockProvider, KnockGuidesProvider } from '@knocklabs/react'
import { CustomModal } from './CustomModal'

// App configuration
const KNOCK_PUBLIC_API_KEY = import.meta.env.VITE_KNOCK_PUBLIC_API_KEY
const KNOCK_GUIDE_ID = import.meta.env.VITE_KNOCK_GUIDE_ID

// Mock current user - in a real app, this would come from your auth system
const currentUser = {
  id: 'user_123',
  name: 'Sarah Johnson',
  email: 'sarah@company.com'
}

function App() {
  return (
    <KnockProvider
      apiKey={KNOCK_PUBLIC_API_KEY}
      user={{currentUser}}
    >
      <KnockGuidesProvider
        readyToTarget={false}
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
      </KnockGuidesProvider>
    </KnockProvider>
  )
}

export default App
