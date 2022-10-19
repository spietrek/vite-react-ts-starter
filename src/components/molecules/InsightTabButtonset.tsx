import type { PropsWithChildren } from 'react'
import InsightTabButton from './InsightTabButton'
import type { ITabButton } from '../../types/common/tabButton.type'

interface IProps {
  items: ITabButton[]
}

const InsightTabButtonset = ({
  items,
}: PropsWithChildren<IProps>): JSX.Element => (
  <>
    {items.map((item, index) => (
      <div key={index} className="w-1/3">
        <InsightTabButton
          currentTab={item.currentTab}
          label={item.label}
          onClick={item.onClick}
        />
      </div>
    ))}
  </>
)

export default InsightTabButtonset
