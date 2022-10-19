import InsightTypography from '../atoms/InsightTypography'
import InsightModal from './InsightModal'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightModal',
  component: InsightModal,
  argTypes: {},
} as ComponentMeta<typeof InsightModal>

const Template: ComponentStory<typeof InsightModal> = args => (
  <InsightModal {...args}>
    <InsightModal.Title>
      <div className="flex items-center">
        <svg
          className="h-6 w-6 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <InsightTypography level="h4" className="ml-2" bold>
          Deactivate Account
        </InsightTypography>
      </div>
    </InsightModal.Title>
    <InsightModal.Content>
      Are you sure you want to deactivate your account? All of your data will be
      permanently removed from our servers forever. This action cannot be
      undone.
    </InsightModal.Content>
    <InsightModal.Actions>
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Deactivate
      </button>
      <button
        type="button"
        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Cancel
      </button>
    </InsightModal.Actions>
  </InsightModal>
)

export const Basic = Template.bind({})
Basic.args = {
  visible: true,
}
