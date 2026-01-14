import { useEffect } from 'react'
import { useGuide } from '@knocklabs/react'
import './styles.css'

export function CustomModal() {
  const { step } = useGuide({ type: 'custom-modal' })

  useEffect(() => {
    console.log('📋 Guide API Response:', step)
    if (step) step.markAsSeen()
  }, [step])

  if (!step) return null

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-container">
        <button
          className="custom-modal-close"
          aria-label="Close"
        >
          ×
        </button>

        <div className="custom-modal-content">
          <h2 className="custom-modal-title">{step.content.title}</h2>
          <div
            className="custom-modal-body"
            dangerouslySetInnerHTML={{ __html: step.content.body }}
          />

          {step.content.actions && step.content.actions.length > 0 && (
            <div className="custom-modal-actions">
              {step.content.actions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => {
                    step.markAsInteracted()
                    if (action.url) {
                      window.open(action.url, '_blank')
                    }
                  }}
                  className={index === 0 ? 'custom-modal-button-primary' : 'custom-modal-button-secondary'}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
